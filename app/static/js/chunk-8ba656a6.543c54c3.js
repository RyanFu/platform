(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ba656a6"],{"268a":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchOptions",(function(){return l})),n.d(t,"fetchIncludedOptions",(function(){return h})),n.d(t,"fetchSubmit",(function(){return b})),n.d(t,"fetchFind",(function(){return m})),n.d(t,"fetchSearch",(function(){return v})),n.d(t,"fetchSearchRelease",(function(){return p})),n.d(t,"fetchAdd",(function(){return g})),n.d(t,"fetchUpdate",(function(){return _})),n.d(t,"fetchDelete",(function(){return O}));var r=n("66f7"),c=n("f121"),a=c["a"].relationship;function o(e){var t=[];for(var n in e){var r=a[n];r&&r.alias&&t.push(r.alias)}return t}function i(e){var t=o(e),n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}var u=function(e){e=i(e);var t=[];for(var n in e)"tbl"!=n&&""!=e[n]&&(/.*?id$/.test(n)?t.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(e[n],'"}')):t.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(e[n],'%"}')));return"filter=[".concat(t,"]")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(e)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(e)};function d(e){return e.substring(0,e.length-1)}function l(e,t,n){return Object(r["a"])({url:"/alembic_version?".concat(s(t),"&").concat(f(n),"&").concat(u(e)),method:"get"})}function h(e,t){return Object(r["a"])({url:"/alembic_version/".concat(e,"?include=").concat(t),method:"get"})}function b(e){return Object(r["a"])({url:"/alembic_version/submit_alembic_version",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/alembic_version?".concat(u(e)),method:"get"})}function v(e,t,n){return Object(r["a"])({url:"/alembic_version?".concat(s(t),"&").concat(f(n),"&").concat(u(e)),method:"get"})}function p(e,t,n){return Object(r["a"])({url:"/alembic_version/release_search?_pageNo=".concat(t-1,"&_pageSize=").concat(n),method:"post",data:e})}function g(e){var t=i(e);return Object(r["a"])({url:"/alembic_version",method:"post",data:{data:{type:d("alembic_version"),attributes:t}}})}function _(e){var t=i(e);return Object(r["a"])({url:"/alembic_version/".concat(e.id),method:"patch",data:{data:{id:e.id,type:d("alembic_version"),attributes:t}}})}function O(e){return Object(r["a"])({url:"/alembic_version/[".concat(e,"]"),method:"DELETE"})}},"66f7":function(e,t,n){"use strict";var r=n("bc3a"),c=n.n(r),a=n("5c96"),o=n("4360"),i=n("5f87"),u=c.a.create({baseURL:"/api",timeout:5e3});window.service=u,u.interceptors.request.use((function(e){return o["a"].getters.token&&(e.headers["Authorization"]="Bearer "+Object(i["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){console.dir(e),Object(a["Message"])({message:e.message,type:"error",duration:5e3});var t=!1;return t||401!==e.response.status||a["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){t=!0,o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(e)})),t["a"]=u}}]);