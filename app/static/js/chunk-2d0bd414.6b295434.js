(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd414"],{"2ae4":function(t,n,e){"use strict";e.r(n),e.d(n,"fetchOptions",(function(){return b})),e.d(n,"fetchIncludedOptions",(function(){return h})),e.d(n,"fetchSubmit",(function(){return l})),e.d(n,"fetchDetail",(function(){return p})),e.d(n,"fetchSearch",(function(){return m})),e.d(n,"fetchSearchRelease",(function(){return g})),e.d(n,"fetchMerge",(function(){return v})),e.d(n,"fetchRelease",(function(){return O})),e.d(n,"fetchDeploy",(function(){return j})),e.d(n,"fetchOperation",(function(){return w})),e.d(n,"fetchAdd",(function(){return y})),e.d(n,"fetchUpdate",(function(){return k})),e.d(n,"fetchDelete",(function(){return D}));e("28a5");var a=e("66f7"),c=e("f121"),r=c["a"].relationship;function u(t){var n=[];for(var e in t){var a=r[e];a&&a.alias&&n.push(a.alias)}return n}function o(t){var n=u(t),e={};for(var a in t)-1===n.indexOf(a)&&(e[a]=t[a]);return e}var i=function(t){t=o(t);var n=[];for(var e in t)"tbl"!=e&&""!=t[e]&&(/.*?id$/.test(e)?n.push('{"name":"'.concat(e,'","op":"eq","val":"').concat(t[e],'"}')):n.push('{"name":"'.concat(e,'","op":"ilike","val":"%').concat(t[e],'%"}')));return"filter=[".concat(n,"]")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function f(t){return c["a"].api&&c["a"].api[t]?c["a"].api[t].type:t.substring(0,t.length-1)}function b(t,n,e){return Object(a["a"])({url:"/databases?".concat(d(n),"&").concat(s(e),"&").concat(i(t)),method:"get"})}function h(t,n){return Object(a["a"])({url:"/databases/".concat(t,"?include=").concat(n),method:"get"})}function l(t){return Object(a["a"])({url:"/databases/submit_databases",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/databases?".concat(i(t)),method:"get"})}function m(t,n,e){return Object(a["a"])({url:"/databases?".concat(d(n),"&").concat(s(e),"&").concat(i(t)),method:"get"})}function g(t,n,e){return Object(a["a"])({url:"/databases?".concat(d(n),"&").concat(s(e),"&").concat(i(t)),method:"get"})}function v(t){return Object(a["a"])({url:"/databases/merge/".concat(t),method:"get"})}function O(t){return Object(a["a"])({url:"/databases/release/".concat(t),method:"get"})}function j(t){return Object(a["a"])({url:"/databases/deploy/".concat(t),method:"get"})}function w(t,n){return Object(a["a"])({url:"/databases/".concat(t,"/").concat(n),method:"get"})}function y(t){var n=o(t);return Object(a["a"])({url:"/databases",method:"post",data:{data:{type:f("databases"),attributes:n}}})}function k(t){var n=o(t);return Object(a["a"])({url:"/databases/".concat(t.id),method:"patch",data:{data:{id:t.id,type:f("databases"),attributes:n}}})}function D(t){return Object(a["a"])({url:"/databases/[".concat(t,"]"),method:"DELETE"})}}}]);