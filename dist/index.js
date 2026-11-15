"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(d){throw (i=0, d)}};};var t=e(function(y,c){
var m=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-even/dist').isPrimitive;function o(r){return m(r)?r>0?u(r-1):u(r+1):!1}c.exports=o
});var s=e(function(R,q){
var P=require('@stdlib/assert-is-integer/dist').isObject,v=require('@stdlib/assert-is-even/dist').isPrimitive;function b(r){return P(r)?r>0?v(r-1):v(r+1):!1}q.exports=b
});var O=e(function(h,f){
var j=t(),p=s();function x(r){return j(r)||p(r)}f.exports=x
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=O(),g=t(),E=s();a(n,"isPrimitive",g);a(n,"isObject",E);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
