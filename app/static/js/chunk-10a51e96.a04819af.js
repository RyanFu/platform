(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a51e96"],{2612:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return h})),n.d(e,"fetchIncludedOptions",(function(){return l})),n.d(e,"fetchSubmit",(function(){return p})),n.d(e,"fetchFind",(function(){return g})),n.d(e,"fetchSearch",(function(){return b})),n.d(e,"fetchSearchRelease",(function(){return m})),n.d(e,"fetchAdd",(function(){return v})),n.d(e,"fetchUpdate",(function(){return O})),n.d(e,"fetchDelete",(function(){return j}));var r=n("66f7"),c=n("f121"),o=c["a"].relationship;function a(t){var e=[];for(var n in t){var r=o[n];r&&r.alias&&e.push(r.alias)}return e}function u(t){var e=a(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var i=function(t){t=u(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(t[n],'%"}')));return"filter=[".concat(e,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return t.substring(0,t.length-1)}function h(t,e,n){return Object(r["a"])({url:"/users?".concat(s(e),"&").concat(f(n),"&").concat(i(t)),method:"get"})}function l(t,e){return Object(r["a"])({url:"/users/".concat(t,"?include=").concat(e),method:"get"})}function p(t){return Object(r["a"])({url:"/users/submit_users",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/users?".concat(i(t)),method:"get"})}function b(t,e,n){return Object(r["a"])({url:"/users?".concat(s(e),"&").concat(f(n),"&").concat(i(t)),method:"get"})}function m(t,e,n){return Object(r["a"])({url:"/users/release_search?_pageNo=".concat(e-1,"&_pageSize=").concat(n),method:"post",data:t})}function v(t){var e=u(t);return Object(r["a"])({url:"/users",method:"post",data:{data:{type:d("users"),attributes:e}}})}function O(t){var e=u(t);return Object(r["a"])({url:"/users/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("users"),attributes:e}}})}function j(t){return Object(r["a"])({url:"/users/[".concat(t,"]"),method:"DELETE"})}},"66f7":function(t,e,n){"use strict";var r=n("bc3a"),c=n.n(r),o=n("5c96"),a=n("4360"),u=n("5f87"),i=c.a.create({baseURL:"/api",timeout:5e3});window.service=i,i.interceptors.request.use((function(t){return a["a"].getters.token&&(t.headers["Authorization"]="Bearer "+Object(u["a"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),i.interceptors.response.use((function(t){var e=t.data;return e}),(function(t){console.dir(t),Object(o["Message"])({message:t.message,type:"error",duration:5e3});var e=!1;return e||401!==t.response.status||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){e=!0,a["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t)})),e["a"]=i}}]);