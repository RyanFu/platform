(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da740"],{"6c52":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchOptions",(function(){return h})),n.d(t,"fetchIncludedOptions",(function(){return m})),n.d(t,"fetchSubmit",(function(){return l})),n.d(t,"fetchDetail",(function(){return p})),n.d(t,"fetchSearch",(function(){return b})),n.d(t,"fetchSearchRelease",(function(){return g})),n.d(t,"fetchMerge",(function(){return q})),n.d(t,"fetchRelease",(function(){return v})),n.d(t,"fetchDeploy",(function(){return O})),n.d(t,"fetchOperation",(function(){return _})),n.d(t,"fetchAdd",(function(){return j})),n.d(t,"fetchUpdate",(function(){return w})),n.d(t,"fetchDelete",(function(){return y}));n("28a5");var r=n("66f7"),u=n("f121"),c=u["a"].relationship;function i(e){var t=[];for(var n in e){var r=c[n];r&&r.alias&&t.push(r.alias)}return t}function a(e){var t=i(e),n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}var o=function(e){e=a(e);var t=[];for(var n in e)"tbl"!=n&&""!=e[n]&&(/.*?id$/.test(n)?t.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(e[n],'"}')):t.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(e[n],'%"}')));return"filter=[".concat(t,"]")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(e)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(e)};function d(e){return u["a"].api&&u["a"].api[e]?u["a"].api[e].type:e.substring(0,e.length-1)}function h(e,t,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(t),"&").concat(f(n),"&").concat(o(e)),method:"get"})}function m(e,t){return Object(r["a"])({url:"/issue_requirements/".concat(e,"?include=").concat(t),method:"get"})}function l(e){return Object(r["a"])({url:"/issue_requirements/submit_issue_requirements",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/issue_requirements?".concat(o(e)),method:"get"})}function b(e,t,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(t),"&").concat(f(n),"&").concat(o(e)),method:"get"})}function g(e,t,n){return Object(r["a"])({url:"/issue_requirements?".concat(s(t),"&").concat(f(n),"&").concat(o(e)),method:"get"})}function q(e){return Object(r["a"])({url:"/issue_requirements/merge/".concat(e),method:"get"})}function v(e){return Object(r["a"])({url:"/issue_requirements/release/".concat(e),method:"get"})}function O(e){return Object(r["a"])({url:"/issue_requirements/deploy/".concat(e),method:"get"})}function _(e,t){return Object(r["a"])({url:"/issue_requirements/".concat(e,"/").concat(t),method:"get"})}function j(e){var t=a(e);return Object(r["a"])({url:"/issue_requirements",method:"post",data:{data:{type:d("issue_requirements"),attributes:t}}})}function w(e){var t=a(e);return Object(r["a"])({url:"/issue_requirements/".concat(e.id),method:"patch",data:{data:{id:e.id,type:d("issue_requirements"),attributes:t}}})}function y(e){return Object(r["a"])({url:"/issue_requirements/[".concat(e,"]"),method:"DELETE"})}}}]);