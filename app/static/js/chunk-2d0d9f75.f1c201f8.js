(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9f75"],{"6a1e":function(t,n,e){"use strict";e.r(n),e.d(n,"fetchOptions",(function(){return p})),e.d(n,"fetchIncludedOptions",(function(){return h})),e.d(n,"fetchSubmit",(function(){return l})),e.d(n,"fetchDetail",(function(){return b})),e.d(n,"fetchSearch",(function(){return y})),e.d(n,"fetchSearchRelease",(function(){return m})),e.d(n,"fetchMerge",(function(){return O})),e.d(n,"fetchRelease",(function(){return _})),e.d(n,"fetchDeploy",(function(){return g})),e.d(n,"fetchOperation",(function(){return v})),e.d(n,"fetchAdd",(function(){return j})),e.d(n,"fetchUpdate",(function(){return w})),e.d(n,"fetchDelete",(function(){return D})),e.d(n,"updateData",(function(){return k}));e("28a5");var r=e("66f7"),c=e("f121"),i=c["a"].relationship;function u(t){var n=[];for(var e in t){var r=i[e];r&&r.alias&&n.push(r.alias)}return n}function o(t){var n=u(t),e={};for(var r in t)-1===n.indexOf(r)&&(e[r]=t[r]);return e}var a=function(t){t=o(t);var n=[];for(var e in t)"tbl"!=e&&""!=t[e]&&(/.*?id$/.test(e)?n.push('{"name":"'.concat(e,'","op":"eq","val":"').concat(t[e],'"}')):n.push('{"name":"'.concat(e,'","op":"ilike","val":"%').concat(t[e],'%"}')));return"filter=[".concat(n,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return c["a"].api&&c["a"].api[t]?c["a"].api[t].type:t.substring(0,t.length-1)}function p(t,n,e){return Object(r["a"])({url:"/issue_priority?".concat(s(n),"&").concat(f(e),"&").concat(a(t)),method:"get"})}function h(t,n){return Object(r["a"])({url:"/issue_priority/".concat(t,"?include=").concat(n),method:"get"})}function l(t){return Object(r["a"])({url:"/issue_priority/submit_issue_priority",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/issue_priority?".concat(a(t)),method:"get"})}function y(t,n,e){return Object(r["a"])({url:"/issue_priority?".concat(s(n),"&").concat(f(e),"&").concat(a(t)),method:"get"})}function m(t,n,e){return Object(r["a"])({url:"/issue_priority?".concat(s(n),"&").concat(f(e),"&").concat(a(t)),method:"get"})}function O(t){return Object(r["a"])({url:"/issue_priority/merge/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/issue_priority/release/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"/issue_priority/deploy/".concat(t),method:"get"})}function v(t,n){return Object(r["a"])({url:"/issue_priority/".concat(t,"/").concat(n),method:"get"})}function j(t){var n=o(t);return Object(r["a"])({url:"/issue_priority",method:"post",data:{data:{type:d("issue_priority"),attributes:n}}})}function w(t){var n=o(t);return Object(r["a"])({url:"/issue_priority/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("issue_priority"),attributes:n}}})}function D(t){return Object(r["a"])({url:"/issue_priority/[".concat(t,"]"),method:"DELETE"})}function k(t,n,e){return Object(r["a"])({url:"issue_priority/".concat(e,"/relationships/projects"),method:n,data:t})}}}]);