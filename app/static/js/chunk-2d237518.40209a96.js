(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237518"],{fb39:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchOptions",(function(){return h})),n.d(e,"fetchIncludedOptions",(function(){return m})),n.d(e,"fetchSubmit",(function(){return g})),n.d(e,"fetchDetail",(function(){return l})),n.d(e,"fetchSearch",(function(){return p})),n.d(e,"fetchSearchRelease",(function(){return b})),n.d(e,"fetchMerge",(function(){return v})),n.d(e,"fetchRelease",(function(){return O})),n.d(e,"fetchDeploy",(function(){return j})),n.d(e,"fetchOperation",(function(){return w})),n.d(e,"fetchAdd",(function(){return y})),n.d(e,"fetchUpdate",(function(){return k})),n.d(e,"fetchDelete",(function(){return D}));n("28a5");var r=n("66f7"),c=n("f121"),a=c["a"].relationship;function u(t){var e=[];for(var n in t){var r=a[n];r&&r.alias&&e.push(r.alias)}return e}function o(t){var e=u(t),n={};for(var r in t)-1===e.indexOf(r)&&(n[r]=t[r]);return n}var i=function(t){t=o(t);var e=[];for(var n in t)"tbl"!=n&&""!=t[n]&&(/.*?id$/.test(n)?e.push('{"name":"'.concat(n,'","op":"eq","val":"').concat(t[n],'"}')):e.push('{"name":"'.concat(n,'","op":"ilike","val":"%').concat(t[n],'%"}')));return"filter=[".concat(e,"]")},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function s(t){return c["a"].api&&c["a"].api[t]?c["a"].api[t].type:t.substring(0,t.length-1)}function h(t,e,n){return Object(r["a"])({url:"/agreements?".concat(f(e),"&").concat(d(n),"&").concat(i(t)),method:"get"})}function m(t,e){return Object(r["a"])({url:"/agreements/".concat(t,"?include=").concat(e),method:"get"})}function g(t){return Object(r["a"])({url:"/agreements/submit_agreements",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/agreements?".concat(i(t)),method:"get"})}function p(t,e,n){return Object(r["a"])({url:"/agreements?".concat(f(e),"&").concat(d(n),"&").concat(i(t)),method:"get"})}function b(t,e,n){return Object(r["a"])({url:"/agreements?".concat(f(e),"&").concat(d(n),"&").concat(i(t)),method:"get"})}function v(t){return Object(r["a"])({url:"/agreements/merge/".concat(t),method:"get"})}function O(t){return Object(r["a"])({url:"/agreements/release/".concat(t),method:"get"})}function j(t){return Object(r["a"])({url:"/agreements/deploy/".concat(t),method:"get"})}function w(t,e){return Object(r["a"])({url:"/agreements/".concat(t,"/").concat(e),method:"get"})}function y(t){var e=o(t);return Object(r["a"])({url:"/agreements",method:"post",data:{data:{type:s("agreements"),attributes:e}}})}function k(t){var e=o(t);return Object(r["a"])({url:"/agreements/".concat(t.id),method:"patch",data:{data:{id:t.id,type:s("agreements"),attributes:e}}})}function D(t){return Object(r["a"])({url:"/agreements/[".concat(t,"]"),method:"DELETE"})}}}]);