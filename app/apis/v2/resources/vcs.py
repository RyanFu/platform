import os
from datetime import datetime

from flask import g, make_response, request, url_for
from flask.views import MethodView, MethodViewType
from flask.wrappers import Response as FlaskResponse
from flask_rest_jsonapi import (Api, ResourceDetail, ResourceList,
                                ResourceRelationship)
from flask_rest_jsonapi.data_layers.alchemy import SqlalchemyDataLayer
from flask_rest_jsonapi.data_layers.base import BaseDataLayer
from flask_rest_jsonapi.decorators import (check_headers,
                                           check_method_requirements,
                                           jsonapi_exception_formatter)
from flask_rest_jsonapi.exceptions import (BadRequest, InvalidType,
                                           RelationNotFound)
from flask_rest_jsonapi.pagination import add_pagination_links
from flask_rest_jsonapi.querystring import QueryStringManager as QSManager
from flask_rest_jsonapi.schema import (compute_schema, get_model_field,
                                       get_relationships)
from flask_rest_jsonapi.utils import JSONEncoder
from marshmallow import ValidationError
from marshmallow_jsonapi.exceptions import IncorrectTypeError
from werkzeug.wrappers import Response

from app import db, flask_app
from app.apis.v2 import api, api_v2
from app.apis.v2.auth import auth_required
from app.apis.v2.errors import api_abort
from app.apis.v2.resources.baseconfig import StatusDetail
from app.apis.v2.schemas.baseconfig import StatusSchema
from app.apis.v2.schemas.vcs import BaselineSchema, PackageSchema
from app.localemail import send_email
from app.models.baseconfig import Status
from app.models.service import App
from app.models.version import Baseline, Package
from app.utils import execute_cmd, fnmatch_file, switch_char
from app.utils.jenkins import get_jenkins_job
from app.models.auth import Project

# Create resource managers
class BaselineList(ResourceList):
    decorators = (auth_required,)

    # 如果登录用户为管理员则显示所有结果，否则只显示参与的项目的基线
    def query(self, view_kwargs):
        if g.current_user.role_id == 1:
            query_ = self.session.query(Baseline)
        else:
            projects = g.current_user.projects
            apps = []
            for project in projects:
                apps += project.apps
            app_ids = [app.id for app in apps]
            query_ = self.session.query(Baseline).filter(Baseline.app_id.in_(app_ids))
        return query_
    
    #　处理基线的默认内容,基线的默认状态为 “SIT提测”
    #  更新次数为1
    def before_post(self, args, kwargs, data=None):
        """Hook to make custom work before post method"""
        data['developer_id'] = g.current_user.id
        data['updateno'] = 1
        data['status_id'] =203
        

    # def after_post(self, result):
    #     """Hook to make custom work after post method"""
    #     obj = self._data_layer.get_object({'id':result[0]['data']['id']})
    #     try:
    #         message = obj.update_baseline()
    #     except Exception as e:
    #         return api_abort(400,detail=str(e))
    #     else:
    #         # 发送邮件
    #         obj.baseline_email()
    #         # 更新结果返回
    #         result[0].update({'detail': message})
    #         return result

    schema = BaselineSchema
    data_layer = {'session': db.session,
                  'model': Baseline,
                  'methods': {'query': query}
                }

class BaselineDetail(ResourceDetail):
    decorators = (auth_required,)
    def before_patch(self, args, kwargs, data=None):
        """Hook to make custom work before patch method"""
        obj = self._data_layer.get_object({'id':kwargs['id']})
        data['updateno'] = obj.updateno+1
    
    # def after_patch(self, result):
    #     """Hook to make custom work after patch method"""
    #     obj = self._data_layer.get_object({'id':result['data']['id']})
    #     try:
    #         message = obj.update_baseline()
    #     except Exception as e:
    #         return api_abort(400,detail=str(e))
    #     else:
    #         # 发送邮件
    #         obj.baseline_email()
    #         # 更新结果返回
    #         result.update({'detail': message})
    #         return result

    # 改写成批量删除，kwargs={'id':'[1,2,3]'}或者 kwargs={'id':1}
    # 支持两种方式删除
    def delete_object(self, kwargs):
        ids = kwargs.get('id')
        if ids[0] != '[':
            obj = self._data_layer.get_object(kwargs)
            self._data_layer.delete_object(obj, kwargs)
        else:
            for id in ids[1:-1].split(','):
                obj = self._data_layer.get_object({'id':id})
                self._data_layer.delete_object(obj, {'id':id})

    schema = BaselineSchema
    data_layer = {'session': db.session,
                  'model': Baseline  
                }

class BaselineRelationship(ResourceRelationship):
    decorators = (auth_required,)
    schema = BaselineSchema
    data_layer = {'session': db.session,
                  'model': Baseline}



#更新包
class PackageList(ResourceList):
    decorators = (auth_required,)

    #　处理更新包的默认内容
    def before_post(self, args, kwargs, data=None):
        """Hook to make custom work before post method""" 
        blineno = data['blineno']
        bdate  = data['rlsdate']
        env_id = data['env_id']
        package_count = data.get('package_count'.zfill(2),'01')
        project_id = data.get('project_id')
        project_name = Project.query.get(project_id).name
        bdate = data.get('rlsdate',datetime.now().strftime("%Y%m%d")).replace('-','')    # 2020-03-31
        name = "{}_{}_{}".format(project_name, bdate, package_count)
        #将基线按app分组 {<App 1>: [<Baseline 1>,  <Baseline 2>],<App 2>: [<Baseline 3>]}
        app_dict={}
        merge_list=[]
        for bid in blineno.split(','):
            baseline = Baseline.query.filter_by(id=int(bid)).first()
            app = baseline.app
            if app not in app_dict.keys():
                app_dict.update({app:[baseline]})
            else:
                app_dict[app].append(baseline)

        #将相同的app合并成一条基线
        for app_key, baseline_list in app_dict.items():
            versionnos = '' 
            sqlnos = ''
            pcknos = ''
            rollbacknos = ''
            for baseline in baseline_list:
                if baseline.sqlno:
                    sqlnos = '{},{}'.format(sqlnos,baseline.sqlno)
                if baseline.versionno:
                    versionnos = '{},{}'.format(versionnos,baseline.versionno)
                if baseline.pckno:
                    pcknos = '{},{}'.format(pcknos,baseline.pckno)
                if baseline.rollbackno:
                    rollbacknos = '{},{}'.format(rollbacknos,baseline.rollbackno)
               
            # 将多条基线合并到同一条
            subsystem_id = app_key.subsystem_id
            project_id = app_key.project_id
            merge_app = App.query.filter_by(project_id=project_id,subsystem_id=subsystem_id,env_id=env_id).first()
            merge_baseline = Baseline(
                sqlno=sqlnos.strip(','),
                versionno=versionnos.strip(','),
                pckno=pcknos.strip(','),
                rollbackno=rollbacknos.strip(','),
                created=bdate,
                app_id=merge_app.id,
                content='合并发布',
                developer_id=g.current_user.id,
                updateno=1,
                status_id=203
            )
            db.session.add(merge_baseline)    
            db.session.commit()
            merge_list.append(merge_baseline)
        merge_blineno = ','.join(str(bline.id) for bline in merge_list)
        data['merge_blineno'] = merge_blineno      # 更新包合并出来的基线
        data['name'] = name      # 根据日期和发布次数决定更新包的名字
        

    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}

class PackageDetail(ResourceDetail):
    decorators = (auth_required,)

    def before_patch(self, args, kwargs, data=None):
        """Hook to make custom work before patch method"""
        env_id=data['env_id']
        rlsdate=data['rlsdate']
        project_id=data['project_id']
        merge_blineno = data['merge_blineno']
        original_merge_bline_list = merge_blineno.split(',')
        merge_list = []
        blineno = data['blineno']
        change_blineno_list = blineno.split(',')

        #删除原始的合并的基线
        for no in original_merge_bline_list:
            baseline = Baseline.query.filter_by(id=no).first()
            if baseline:
                db.session.delete(baseline)
                db.session.commit()

        #将相同的app合并成一条基线
        #{<App 1>: [<Baseline 1>,  <Baseline 2>],<App 2>: [<Baseline 3>]}
        app_dict={}
        for no in  change_blineno_list:
            baseline = Baseline.query.get_or_404(no)
            app = baseline.app
            if app not in app_dict.keys():
                app_dict.update({app:[baseline]})
            else:
                app_dict[app].append(baseline)
        for app_key in app_dict.keys():
            versionnos = '' 
            sqlnos = ''
            pcknos = ''
            rollbacknos = ''
            baseline_list = app_dict[app_key]
            for baseline in baseline_list:
                bsqlno = baseline.sqlno
                bversionno = baseline.versionno
                bpckno = baseline.pckno
                brollbackno = baseline.rollbackno
                # 拼接基线
                if bsqlno:
                    sqlnos = (str(bsqlno) + ',' + sqlnos).strip(',')
                if bversionno:
                    versionnos = (str(bversionno) + ',' + versionnos).strip(',')
                if bpckno:
                    pcknos = (str(bpckno) + ',' + pcknos).strip(',')
                if brollbackno:
                    rollbacknos = (str(brollbackno) + ',' + rollbacknos).strip(',')

            # 将多条基线合并到同一条
            subsystem_id = app_key.subsystem_id
            merge_app = App.query.filter_by(project_id=project_id,env_id=env_id,subsystem_id=subsystem_id).first()
            merge_baseline = Baseline(sqlno=sqlnos,
                                  versionno=versionnos,
                                  pckno=pcknos,
                                  rollbackno=rollbacknos,
                                  created=rlsdate,
                                  app_id=merge_app.id,
                                  content='合并发布',
                                  developer_id=g.current_user.id,
                                  updateno=1,
                                  status_id=213
                                  )
            db.session.add(merge_baseline)    
            db.session.commit()
            merge_list.append(merge_baseline)

        #  设置package中的merge_blineno的值
        merge_blineno = ','.join(str(bline.id) for bline in merge_list)
        data['merge_blineno'] = merge_blineno

    # 改写成批量删除，kwargs={'id':'[1,2,3]'}或者 kwargs={'id':1}
    # 支持两种方式删除
    def delete_object(self, kwargs):
        ids = kwargs.get('id')
        if ids[0] != '[':
            obj = self._data_layer.get_object(kwargs)
            self._data_layer.delete_object(obj, kwargs)
        else:
            for id in ids[1:-1].split(','):
                obj = self._data_layer.get_object({'id':id})
                self._data_layer.delete_object(obj, {'id':id})

    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}

class PackageRelationship(ResourceRelationship):
    decorators = (auth_required,)
    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}   

class PackageMerge(ResourceDetail):
    decorators = (auth_required,)

    def after_get(self, result):
        package = self._data_layer.get_object({'id':result['data']['id']})
        detail = package.package_merge()
        result.update({'detail': detail})
        return result

    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}

class PackageDeploy(ResourceDetail):
    decorators = (auth_required,)

    def after_get(self, result):
        package = self._data_layer.get_object({'id':result['data']['id']})
        detail = package.package_deploy()
        result.update({'detail': detail})
        return result

    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}

class PackageRelease(ResourceDetail):
    decorators = (auth_required,)

    def after_get(self, result):
        package = self._data_layer.get_object({'id':result['data']['id']})
        detail = package.package_release()
        result.update({'detail': detail})
        return result

    schema = PackageSchema
    data_layer = {'session': db.session,
                  'model': Package}

class PackageDownloadAPI(MethodView):
    def get(self,package_id):
        package = Package.query.get(package_id)
        return package.package_download()
       

class BaselineUpdate(ResourceDetail):
    decorators = (auth_required,)

    def after_get(self, result):
        obj = self._data_layer.get_object({'id':result['data']['id']})
        try:
            message = obj.update_baseline()
        except Exception as e:
            return api_abort(400,detail=str(e))
        else:
            # 发送邮件
            obj.baseline_email()
            # 更新结果返回
            result.update({'detail': message})
        return result
    schema = BaselineSchema
    data_layer = {'session': db.session,
                  'model': Baseline  
                }

# Create endpoints
#基线
api.route(BaselineList, 'baseline_list', '/api/baselines')
api.route(BaselineDetail, 'baseline_detail', '/api/baselines/<id>')
api.route(BaselineRelationship, 'baseline_developer', '/api/baselines/<int:id>/relationships/developer')
api.route(BaselineRelationship, 'baseline_app', '/api/baselines/<int:id>/relationships/app')
api.route(BaselineRelationship, 'baseline_status', '/api/baselines/<int:id>/relationships/status')
api.route(BaselineRelationship, 'baseline_package', '/api/baselines/<int:id>/relationships/package')
api.route(BaselineRelationship, 'baseline_bugs', '/api/baselines/<int:id>/relationships/bug')
api.route(BaselineRelationship, 'baseline_tasks', '/api/baselines/<int:id>/relationships/task')
api.route(BaselineRelationship, 'baseline_requirements', '/api/baselines/<int:id>/relationships/requirement')
api.route(BaselineRelationship, 'baseline_issue_category', '/api/baselines/<int:id>/relationships/isssue_category')

#更新包
api.route(PackageList, 'package_list', '/api/packages')
api.route(PackageDetail, 'package_detail', '/api/packages/<id>')
api.route(PackageRelationship, 'package_project', '/api/packages/<int:id>/relationships/project')
api.route(PackageRelationship, 'package_env', '/api/packages/<int:id>/relationships/env')
api.route(PackageRelationship, 'package_baselines', '/api/packages/<int:id>/relationships/baselines')
# 合并基线
api.route(PackageMerge, 'package_merge', '/api/packages/merge/<int:id>')
# 部署更新包
api.route(PackageDeploy, 'package_deploy', '/api/packages/deploy/<int:id>')
# 发布更新包
api.route(PackageRelease, 'package_release', '/api/packages/release/<int:id>')
# 更新基线,只提供GET方法
api.route(BaselineUpdate, 'baseline_update', '/api/baseline/update/<id>',url_rule_options={'methods':['GET',]})


# 更新包下载
api_v2.add_url_rule('/packages/download/<package_id>', view_func=PackageDownloadAPI.as_view('package_download'), methods=['GET',])
