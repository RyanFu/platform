(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-457a84aa"],{"222a":function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return h})),n.d(e,"fetchIncludedOptions",(function(){return l})),n.d(e,"fetchSubmit",(function(){return b})),n.d(e,"fetchFind",(function(){return m})),n.d(e,"fetchSearch",(function(){return p})),n.d(e,"fetchSearchRelease",(function(){return g})),n.d(e,"fetchAdd",(function(){return v})),n.d(e,"fetchUpdate",(function(){return y})),n.d(e,"fetchDelete",(function(){return O}));var r=n("66f7"),c=n("f121"),a=c["a"].relationship;function o(t){var e=[];for(var n in t){var r=a[n];r&&r.alias&&e.push(r.alias)}return e}function u(t){var e=o(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var s=function(t){t=u(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(t[n],'%"}')));return"filter=[".concat(e,"]")},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return t.substring(0,t.length-1)}function h(t,e,n){return Object(r["a"])({url:"/subsystems?".concat(i(e),"&").concat(f(n),"&").concat(s(t)),method:"get"})}function l(t,e){return Object(r["a"])({url:"/subsystems/".concat(t,"?include=").concat(e),method:"get"})}function b(t){return Object(r["a"])({url:"/subsystems/submit_subsystems",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/subsystems?".concat(s(t)),method:"get"})}function p(t,e,n){return Object(r["a"])({url:"/subsystems?".concat(i(e),"&").concat(f(n),"&").concat(s(t)),method:"get"})}function g(t,e,n){return Object(r["a"])({url:"/subsystems/release_search?_pageNo=".concat(e-1,"&_pageSize=").concat(n),method:"post",data:t})}function v(t){var e=u(t);return Object(r["a"])({url:"/subsystems",method:"post",data:{data:{type:d("subsystems"),attributes:e}}})}function y(t){var e=u(t);return Object(r["a"])({url:"/subsystems/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("subsystems"),attributes:e}}})}function O(t){return Object(r["a"])({url:"/subsystems/[".concat(t,"]"),method:"DELETE"})}},"66f7":function(t,e,n){"use strict";var r=n("bc3a"),c=n.n(r),a=n("5c96"),o=n("4360"),u=n("5f87"),s=c.a.create({baseURL:"/api",timeout:5e3});window.service=s,s.interceptors.request.use((function(t){return o["a"].getters.token&&(t.headers["Authorization"]="Bearer "+Object(u["a"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),s.interceptors.response.use((function(t){var e=t.data;return e}),(function(t){console.dir(t),Object(a["Message"])({message:t.message,type:"error",duration:5e3});var e=!1;return e||401!==t.response.status||a["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){e=!0,o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t)})),e["a"]=s}}]);