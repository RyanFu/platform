(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6c6"],{"4a36":function(t,n,e){"use strict";e.r(n),e.d(n,"fetchOptions",(function(){return d})),e.d(n,"fetchIncludedOptions",(function(){return m})),e.d(n,"fetchSubmit",(function(){return l})),e.d(n,"fetchDetail",(function(){return p})),e.d(n,"fetchSearch",(function(){return b})),e.d(n,"fetchSearchRelease",(function(){return O})),e.d(n,"fetchMerge",(function(){return g})),e.d(n,"fetchRelease",(function(){return v})),e.d(n,"fetchDeploy",(function(){return j})),e.d(n,"fetchOperation",(function(){return w})),e.d(n,"fetchAdd",(function(){return y})),e.d(n,"fetchUpdate",(function(){return D})),e.d(n,"fetchDelete",(function(){return k})),e.d(n,"updateData",(function(){return E}));e("28a5");var c=e("66f7"),a=e("f121"),r=a["a"].relationship;function u(t){var n=[];for(var e in t){var c=r[e];c&&c.alias&&n.push(c.alias)}return n}function o(t){var n=u(t),e={};for(var c in t)-1===n.indexOf(c)&&(e[c]=t[c]);return e}var i=function(t){t=o(t);var n=[];for(var e in t)"tbl"!=e&&""!=t[e]&&(/.*?id$/.test(e)?n.push('{"name":"'.concat(e,'","op":"eq","val":"').concat(t[e],'"}')):n.push('{"name":"'.concat(e,'","op":"ilike","val":"%').concat(t[e],'%"}')));return"filter=[".concat(n,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function f(t){return a["a"].api&&a["a"].api[t]?a["a"].api[t].type:t.substring(0,t.length-1)}function d(t,n,e){return Object(c["a"])({url:"/schemas?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function m(t,n){return Object(c["a"])({url:"/schemas/".concat(t,"?include=").concat(n),method:"get"})}function l(t){return Object(c["a"])({url:"/schemas/submit_schemas",method:"post",data:t})}function p(t){return Object(c["a"])({url:"/schemas?".concat(i(t)),method:"get"})}function b(t,n,e){return Object(c["a"])({url:"/schemas?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function O(t,n,e){return Object(c["a"])({url:"/schemas?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function g(t){return Object(c["a"])({url:"/schemas/merge/".concat(t),method:"get"})}function v(t){return Object(c["a"])({url:"/schemas/release/".concat(t),method:"get"})}function j(t){return Object(c["a"])({url:"/schemas/deploy/".concat(t),method:"get"})}function w(t,n){return Object(c["a"])({url:"/schemas/".concat(t,"/").concat(n),method:"get"})}function y(t){var n=o(t);return Object(c["a"])({url:"/schemas",method:"post",data:{data:{type:f("schemas"),attributes:n}}})}function D(t){var n=o(t);return Object(c["a"])({url:"/schemas/".concat(t.id),method:"patch",data:{data:{id:t.id,type:f("schemas"),attributes:n}}})}function k(t){return Object(c["a"])({url:"/schemas/[".concat(t,"]"),method:"DELETE"})}function E(t,n,e){return Object(c["a"])({url:"schemas/".concat(e,"/relationships/projects"),method:n,data:t})}}}]);