(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f97f6ec"],{"090e":function(e,t,n){"use strict";var a=n("719a"),s=n.n(a);s.a},"719a":function(e,t,n){},"85aa":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("img",{staticClass:"brand-main",attrs:{src:n("d939"),alt:"Devops"}}),e._v(" "),a("el-form",{ref:"resetForm",staticClass:"login-form",attrs:{model:e.loginForm,"auto-complete":"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("h3",{staticClass:"title"},[e._v("请输入注册邮箱")])]),e._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"icon-email"}})],1),e._v(" "),a("el-input",{ref:"username",attrs:{placeholder:"Email",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","border-radius":"100px"},attrs:{type:"primary"},on:{click:e.handleReset}},[e._v("提交")]),e._v(" "),a("div",{staticClass:"tips"},[a("span",{on:{click:e.handleLogin}},[e._v("返回登录界面")])])],1)],1)},s=[],i=(n("61f7"),n("c24f")),o=(n("5c96"),{name:"forget",data:function(){return{loginForm:{username:""}}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin:function(){this.$router.push({path:"/login"})},handleReset:function(){var e=this;this.loginForm.username?Object(i["reset"])(null,{data:{attributes:{email:this.loginForm.username}}}).then((function(t){e.$message({message:"请注意查收邮件",type:"success"})})):this.$message("Mail is empty")}}}),r=o,c=(n("090e"),n("b78d"),n("2877")),l=Object(c["a"])(r,a,s,!1,null,"3ec16d13",null);t["default"]=l.exports},b78d:function(e,t,n){"use strict";var a=n("e84c"),s=n.n(a);s.a},d939:function(e,t,n){e.exports=n.p+"static/img/logo-white.5cd6a03e.png"},e84c:function(e,t,n){}}]);