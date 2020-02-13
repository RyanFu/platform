#-*- coding: UTF-8 -*-
from flask import Blueprint
from flask_rest_jsonapi import Api

from app import  flask_app


api_v2 = Blueprint('api_v2', __name__)
# from app.apis.v2 import resources

api = Api(flask_app)
from app.apis.v2.resources import auth, cmdb, service, vcs


