(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da740"],{"6c52":function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return h})),n.d(e,"fetchIncludedOptions",(function(){return m})),n.d(e,"fetchSubmit",(function(){return l})),n.d(e,"fetchDetail",(function(){return p})),n.d(e,"fetchSearch",(function(){return b})),n.d(e,"fetchSearchRelease",(function(){return g})),n.d(e,"fetchMerge",(function(){return q})),n.d(e,"fetchRelease",(function(){return O})),n.d(e,"fetchDeploy",(function(){return _})),n.d(e,"fetchOperation",(function(){return v})),n.d(e,"fetchAdd",(function(){return j})),n.d(e,"fetchUpdate",(function(){return w})),n.d(e,"fetchDelete",(function(){return y})),n.d(e,"updateData",(function(){return D})),n.d(e,"getRelated",(function(){return k}));n("28a5");var r=n("66f7"),u=n("f121"),c=u["a"].relationship;function i(t){var e=[];for(var n in t){var r=c[n];r&&r.alias&&e.push(r.alias)}return e}function a(t){var e=i(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var o=function(t){t=a(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%25').concat(t[n],'%25"}')));return"filter=[".concat(e,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return u["a"].api&&u["a"].api[t]?u["a"].api[t].type:t.substring(0,t.length-1)}function h(t,e,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function m(t,e){return Object(r["a"])({url:"/issue_requirements/".concat(t,"?include=").concat(e),method:"get"})}function l(t){return Object(r["a"])({url:"/issue_requirements/submit_issue_requirements",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/issue_requirements?".concat(o(t)),method:"get"})}function b(t,e,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function g(t,e,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(e),"&").concat(f(n),"&").concat(o(t)),method:"get"})}function q(t){return Object(r["a"])({url:"/issue_requirements/merge/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/issue_requirements/release/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/issue_requirements/deploy/".concat(t),method:"get"})}function v(t,e){return Object(r["a"])({url:"/issue_requirements/".concat(t,"/").concat(e),method:"get"})}function j(t){var e=a(t);return Object(r["a"])({url:"/issue_requirements",method:"post",data:{data:{type:d("issue_requirements"),attributes:e}}})}function w(t){var e=a(t);return Object(r["a"])({url:"/issue_requirements/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("issue_requirements"),attributes:e}}})}function y(t){return Object(r["a"])({url:"/issue_requirements/[".concat(t,"]"),method:"DELETE"})}function D(t,e,n){return Object(r["a"])({url:"issue_requirements/".concat(n,"/relationships/projects"),method:e,data:t})}function k(t,e){return Object(r["a"])({url:"issue_requirements/".concat(t,"/relationships/").concat(e),method:"get"})}}}]);