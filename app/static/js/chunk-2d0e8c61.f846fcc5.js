(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c61"],{"8b67":function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return l})),n.d(e,"fetchIncludedOptions",(function(){return p})),n.d(e,"fetchSubmit",(function(){return b})),n.d(e,"fetchDetail",(function(){return h})),n.d(e,"fetchSearch",(function(){return y})),n.d(e,"fetchSearchRelease",(function(){return m})),n.d(e,"fetchMerge",(function(){return g})),n.d(e,"fetchRelease",(function(){return v})),n.d(e,"fetchDeploy",(function(){return O})),n.d(e,"fetchOperation",(function(){return _})),n.d(e,"fetchAdd",(function(){return j})),n.d(e,"fetchUpdate",(function(){return w})),n.d(e,"fetchDelete",(function(){return k}));n("28a5");var r=n("66f7"),c=n("f121"),i=c["a"].relationship;function u(t){var e=[];for(var n in t){var r=i[n];r&&r.alias&&e.push(r.alias)}return e}function o(t){var e=u(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var a=function(t){t=o(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(t[n],'%"}')));return"filter=[".concat(e,"]")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function f(t){return c["a"].api&&c["a"].api[t]?c["a"].api[t].type:t.substring(0,t.length-1)}function l(t,e,n){return Object(r["a"])({url:"/issue_reproducibility?".concat(d(e),"&").concat(s(n),"&").concat(a(t)),method:"get"})}function p(t,e){return Object(r["a"])({url:"/issue_reproducibility/".concat(t,"?include=").concat(e),method:"get"})}function b(t){return Object(r["a"])({url:"/issue_reproducibility/submit_issue_reproducibility",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/issue_reproducibility?".concat(a(t)),method:"get"})}function y(t,e,n){return Object(r["a"])({url:"/issue_reproducibility?".concat(d(e),"&").concat(s(n),"&").concat(a(t)),method:"get"})}function m(t,e,n){return Object(r["a"])({url:"/issue_reproducibility?".concat(d(e),"&").concat(s(n),"&").concat(a(t)),method:"get"})}function g(t){return Object(r["a"])({url:"/issue_reproducibility/merge/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"/issue_reproducibility/release/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/issue_reproducibility/deploy/".concat(t),method:"get"})}function _(t,e){return Object(r["a"])({url:"/issue_reproducibility/".concat(t,"/").concat(e),method:"get"})}function j(t){var e=o(t);return Object(r["a"])({url:"/issue_reproducibility",method:"post",data:{data:{type:f("issue_reproducibility"),attributes:e}}})}function w(t){var e=o(t);return Object(r["a"])({url:"/issue_reproducibility/".concat(t.id),method:"patch",data:{data:{id:t.id,type:f("issue_reproducibility"),attributes:e}}})}function k(t){return Object(r["a"])({url:"/issue_reproducibility/[".concat(t,"]"),method:"DELETE"})}}}]);