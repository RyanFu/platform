(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ed55"],{d6f3:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return h})),n.d(e,"fetchIncludedOptions",(function(){return l})),n.d(e,"fetchSubmit",(function(){return v})),n.d(e,"fetchDetail",(function(){return p})),n.d(e,"fetchSearch",(function(){return b})),n.d(e,"fetchSearchRelease",(function(){return y})),n.d(e,"fetchMerge",(function(){return m})),n.d(e,"fetchRelease",(function(){return O})),n.d(e,"fetchDeploy",(function(){return _})),n.d(e,"fetchOperation",(function(){return g})),n.d(e,"fetchAdd",(function(){return j})),n.d(e,"fetchUpdate",(function(){return w})),n.d(e,"fetchDelete",(function(){return D})),n.d(e,"updateData",(function(){return k}));n("28a5");var r=n("66f7"),c=n("f121"),u=c["a"].relationship;function i(t){var e=[];for(var n in t){var r=u[n];r&&r.alias&&e.push(r.alias)}return e}function a(t){var e=i(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var o=function(t){t=a(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(t[n],'%"}')));return"filter=[".concat(e,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return c["a"].api&&c["a"].api[t]?c["a"].api[t].type:t.substring(0,t.length-1)}function h(t,e,n){return Object(r["a"])({url:"/issue_severity?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function l(t,e){return Object(r["a"])({url:"/issue_severity/".concat(t,"?include=").concat(e),method:"get"})}function v(t){return Object(r["a"])({url:"/issue_severity/submit_issue_severity",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/issue_severity?".concat(o(t)),method:"get"})}function b(t,e,n){return Object(r["a"])({url:"/issue_severity?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function y(t,e,n){return Object(r["a"])({url:"/issue_severity?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function m(t){return Object(r["a"])({url:"/issue_severity/merge/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/issue_severity/release/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/issue_severity/deploy/".concat(t),method:"get"})}function g(t,e){return Object(r["a"])({url:"/issue_severity/".concat(t,"/").concat(e),method:"get"})}function j(t){var e=a(t);return Object(r["a"])({url:"/issue_severity",method:"post",data:{data:{type:d("issue_severity"),attributes:e}}})}function w(t){var e=a(t);return Object(r["a"])({url:"/issue_severity/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("issue_severity"),attributes:e}}})}function D(t){return Object(r["a"])({url:"/issue_severity/[".concat(t,"]"),method:"DELETE"})}function k(t,e,n){return Object(r["a"])({url:"issue_severity/".concat(n,"/relationships/projects"),method:e,data:t})}}}]);