(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f71b"],{b43f:function(t,n,e){"use strict";e.r(n),e.d(n,"fetchOptions",(function(){return h})),e.d(n,"fetchIncludedOptions",(function(){return l})),e.d(n,"fetchSubmit",(function(){return p})),e.d(n,"fetchDetail",(function(){return b})),e.d(n,"fetchSearch",(function(){return k})),e.d(n,"fetchSearchRelease",(function(){return m})),e.d(n,"fetchMerge",(function(){return g})),e.d(n,"fetchRelease",(function(){return v})),e.d(n,"fetchDeploy",(function(){return O})),e.d(n,"fetchOperation",(function(){return _})),e.d(n,"fetchAdd",(function(){return j})),e.d(n,"fetchUpdate",(function(){return w})),e.d(n,"fetchDelete",(function(){return y}));e("28a5");var c=e("66f7"),a=e("f121"),u=a["a"].relationship;function r(t){var n=[];for(var e in t){var c=u[e];c&&c.alias&&n.push(c.alias)}return n}function o(t){var n=r(t),e={};for(var c in t)-1===n.indexOf(c)&&(e[c]=t[c]);return e}var s=function(t){t=o(t);var n=[];for(var e in t)"tbl"!=e&&""!=t[e]&&(/.*?id$/.test(e)?n.push('{"name":"'.concat(e,'","op":"eq","val":"').concat(t[e],'"}')):n.push('{"name":"'.concat(e,'","op":"ilike","val":"%').concat(t[e],'%"}')));return"filter=[".concat(n,"]")},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function d(t){return a["a"].api&&a["a"].api[t]?a["a"].api[t].type:t.substring(0,t.length-1)}function h(t,n,e){return Object(c["a"])({url:"/issue_tasks?".concat(i(n),"&").concat(f(e),"&").concat(s(t)),method:"get"})}function l(t,n){return Object(c["a"])({url:"/issue_tasks/".concat(t,"?include=").concat(n),method:"get"})}function p(t){return Object(c["a"])({url:"/issue_tasks/submit_issue_tasks",method:"post",data:t})}function b(t){return Object(c["a"])({url:"/issue_tasks?".concat(s(t)),method:"get"})}function k(t,n,e){return Object(c["a"])({url:"/issue_tasks?".concat(i(n),"&").concat(f(e),"&").concat(s(t)),method:"get"})}function m(t,n,e){return Object(c["a"])({url:"/issue_tasks?".concat(i(n),"&").concat(f(e),"&").concat(s(t)),method:"get"})}function g(t){return Object(c["a"])({url:"/issue_tasks/merge/".concat(t),method:"get"})}function v(t){return Object(c["a"])({url:"/issue_tasks/release/".concat(t),method:"get"})}function O(t){return Object(c["a"])({url:"/issue_tasks/deploy/".concat(t),method:"get"})}function _(t,n){return Object(c["a"])({url:"/issue_tasks/".concat(t,"/").concat(n),method:"get"})}function j(t){var n=o(t);return Object(c["a"])({url:"/issue_tasks",method:"post",data:{data:{type:d("issue_tasks"),attributes:n}}})}function w(t){var n=o(t);return Object(c["a"])({url:"/issue_tasks/".concat(t.id),method:"patch",data:{data:{id:t.id,type:d("issue_tasks"),attributes:n}}})}function y(t){return Object(c["a"])({url:"/issue_tasks/[".concat(t,"]"),method:"DELETE"})}}}]);