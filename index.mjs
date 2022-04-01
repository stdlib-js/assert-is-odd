// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-even@esm/index.mjs";var r=e.isPrimitive,s=t.isPrimitive;var n=function(i){return!!r(i)&&s(i>0?i-1:i+1)},m=e.isObject,d=t.isPrimitive;var o=function(i){return!!m(i)&&d(i>0?i-1:i+1)},v=n,a=o;var j=i,l=function(i){return v(i)||a(i)},p=n,u=o;j(l,"isPrimitive",p),j(l,"isObject",u);var c=l;export{c as default,u as isObject,p as isPrimitive};
//# sourceMappingURL=index.mjs.map
