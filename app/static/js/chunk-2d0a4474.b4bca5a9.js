(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4474"],{"0680":function(t,n,e){"use strict";e.r(n),e.d(n,"fetchOptions",(function(){return d})),e.d(n,"fetchIncludedOptions",(function(){return b})),e.d(n,"fetchSubmit",(function(){return m})),e.d(n,"fetchDetail",(function(){return l})),e.d(n,"fetchSearch",(function(){return _})),e.d(n,"fetchSearchRelease",(function(){return g})),e.d(n,"fetchMerge",(function(){return p})),e.d(n,"fetchRelease",(function(){return O})),e.d(n,"fetchDeploy",(function(){return v})),e.d(n,"fetchOperation",(function(){return j})),e.d(n,"fetchAdd",(function(){return w})),e.d(n,"fetchUpdate",(function(){return y})),e.d(n,"fetchDelete",(function(){return D})),e.d(n,"updateData",(function(){return k}));e("28a5");var c=e("66f7"),a=e("f121"),r=a["a"].relationship;function u(t){var n=[];for(var e in t){var c=r[e];c&&c.alias&&n.push(c.alias)}return n}function o(t){var n=u(t),e={};for(var c in t)-1===n.indexOf(c)&&(e[c]=t[c]);return e}var i=function(t){t=o(t);var n=[];for(var e in t)"tbl"!=e&&""!=t[e]&&(/.*?id$/.test(e)?n.push('{"name":"'.concat(e,'","op":"eq","val":"').concat(t[e],'"}')):n.push('{"name":"'.concat(e,'","op":"ilike","val":"%').concat(t[e],'%"}')));return"filter=[".concat(n,"]")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"page[number]=".concat(t)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"page[size]=".concat(t)};function f(t){return a["a"].api&&a["a"].api[t]?a["a"].api[t].type:t.substring(0,t.length-1)}function d(t,n,e){return Object(c["a"])({url:"/machine_ass_groub?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function b(t,n){return Object(c["a"])({url:"/machine_ass_groub/".concat(t,"?include=").concat(n),method:"get"})}function m(t){return Object(c["a"])({url:"/machine_ass_groub/submit_machine_ass_groub",method:"post",data:t})}function l(t){return Object(c["a"])({url:"/machine_ass_groub?".concat(i(t)),method:"get"})}function _(t,n,e){return Object(c["a"])({url:"/machine_ass_groub?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function g(t,n,e){return Object(c["a"])({url:"/machine_ass_groub?".concat(s(n),"&").concat(h(e),"&").concat(i(t)),method:"get"})}function p(t){return Object(c["a"])({url:"/machine_ass_groub/merge/".concat(t),method:"get"})}function O(t){return Object(c["a"])({url:"/machine_ass_groub/release/".concat(t),method:"get"})}function v(t){return Object(c["a"])({url:"/machine_ass_groub/deploy/".concat(t),method:"get"})}function j(t,n){return Object(c["a"])({url:"/machine_ass_groub/".concat(t,"/").concat(n),method:"get"})}function w(t){var n=o(t);return Object(c["a"])({url:"/machine_ass_groub",method:"post",data:{data:{type:f("machine_ass_groub"),attributes:n}}})}function y(t){var n=o(t);return Object(c["a"])({url:"/machine_ass_groub/".concat(t.id),method:"patch",data:{data:{id:t.id,type:f("machine_ass_groub"),attributes:n}}})}function D(t){return Object(c["a"])({url:"/machine_ass_groub/[".concat(t,"]"),method:"DELETE"})}function k(t,n,e){return Object(c["a"])({url:"machine_ass_groub/".concat(e,"/relationships/projects"),method:n,data:t})}}}]);