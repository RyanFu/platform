(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0648b4ce"],{2017:function(e,t,n){"use strict";var s=n("b12d"),o=n.n(s);o.a},4888:function(e,t,n){"use strict";var s=n("c401f"),o=n.n(s);o.a},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("img",{staticClass:"brand-main",attrs:{src:n("d939"),alt:"Devops"}}),e._v(" "),s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("登陆 Login")])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"icon-email"}})],1),e._v(" "),s("el-input",{ref:"username",attrs:{placeholder:"Email",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"icon-psw"}})],1),e._v(" "),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","border-radius":"100px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),e._v(" "),s("div",{staticClass:"tips"},[s("span",{on:{click:e.handleRegist}},[e._v("注册新用户")]),e._v(" "),s("span",{on:{click:e.handleReset}},[e._v("忘记密码")])])],1)],1)},o=[],r=n("61f7"),a=(n("c24f"),{name:"Login",data:function(){var e=function(e,t,n){Object(r["b"])(t)?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleRegist:function(){this.$router.push({path:"/regist"})},handleReset:function(){this.$router.push({path:"/forget"})},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){console.log("login ok"),e.$router.push({path:"/"}),e.loading=!1})).catch((function(){console.log("login error"),e.loading=!1}))}))}}}),i=a,l=(n("2017"),n("4888"),n("2877")),c=Object(l["a"])(i,s,o,!1,null,"50457577",null);t["default"]=c.exports},b12d:function(e,t,n){},c401f:function(e,t,n){},d939:function(e,t,n){e.exports=n.p+"static/img/logo-white.5cd6a03e.png"}}]);