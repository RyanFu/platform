(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759ea500"],{"3ec0":function(e,s,a){"use strict";a.r(s);var n=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"change-container"},[a("el-form",{ref:"changeForm",staticClass:"change-form",attrs:{model:e.changeForm,rules:e.changeRules,"auto-complete":"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("h3",{staticClass:"title"},[e._v("Change Form")])]),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),a("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleChange(s)}},model:{value:e.changeForm.password,callback:function(s){e.$set(e.changeForm,"password",s)},expression:"changeForm.password"}}),e._v(" "),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"newPassword"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),a("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"New password",name:"password",tabindex:"2"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleChange(s)}},model:{value:e.changeForm.newPassword,callback:function(s){e.$set(e.changeForm,"newPassword",s)},expression:"changeForm.newPassword"}}),e._v(" "),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"newPassword2"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),a("el-input",{key:e.passwordType,ref:"password2",attrs:{type:e.passwordType,placeholder:"Repeat password",name:"password",tabindex:"2"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleChange(s)}},model:{value:e.changeForm.newPassword2,callback:function(s){e.$set(e.changeForm,"newPassword2",s)},expression:"changeForm.newPassword2"}}),e._v(" "),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleChange(s)}}},[e._v("Change")]),e._v(" "),a("div",{staticClass:"tips"},[a("span",{on:{click:e.handleBack}},[e._v("返回")])])],1)],1)},r=[],t=(a("61f7"),a("c24f")),o=(a("5c96"),{name:"change",data:function(){var e=this,s=function(e,s,a){s.length<6?a(new Error("The password can not be less than 6 digits")):a()},a=function(s,a,n){e.changeForm.newPassword==e.changeForm.newPassword2?n():n(new Error("the repeat password not equal"))};return{changeForm:{password:"",newPassword:"",newPassword2:""},changeRules:{password:[{required:!0,trigger:"blur",validator:s}],newPassword:[{required:!0,trigger:"blur",validator:s}],newPassword2:[{required:!0,trigger:"blur",validator:a}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleChange:function(){var e=this;this.$refs.changeForm.validate((function(s){s&&Object(t["change"])({data:{attributes:{old_password:e.changeForm.password,new_password:e.changeForm.newPassword}}}).then((function(s){e.$store.dispatch("user/resetToken").then((function(){e.$message("Password changed successfully, please login again"),e.$router.push("/login")}))}))}))},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleBack:function(){this.$router.back()}}}),i=o,c=(a("dd71"),a("616b"),a("2877")),d=Object(c["a"])(i,n,r,!1,null,"6f559474",null);s["default"]=d.exports},"616b":function(e,s,a){"use strict";var n=a("86eb"),r=a.n(n);r.a},"86eb":function(e,s,a){},bbeb:function(e,s,a){},dd71:function(e,s,a){"use strict";var n=a("bbeb"),r=a.n(n);r.a}}]);