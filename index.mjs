// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as i,isObject as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-even@v0.2.2-esm/index.mjs";function r(e){return!!i(e)&&t(e>0?e-1:e+1)}function n(e){return!!s(e)&&t(e>0?e-1:e+1)}function m(e){return r(e)||n(e)}e(m,"isPrimitive",r),e(m,"isObject",n);export{m as default,n as isObject,r as isPrimitive};
//# sourceMappingURL=index.mjs.map
