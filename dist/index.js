"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=e(function(I,c){
var d=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-even/dist').isPrimitive;function m(r){return d(r)?r>0?u(r-1):u(r+1):!1}c.exports=m
});var s=e(function(y,q){
var o=require('@stdlib/assert-is-integer/dist').isObject,v=require('@stdlib/assert-is-even/dist').isPrimitive;function P(r){return o(r)?r>0?v(r-1):v(r+1):!1}q.exports=P
});var O=e(function(R,f){
var b=t(),j=s();function p(r){return b(r)||j(r)}f.exports=p
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=O(),x=t(),g=s();a(n,"isPrimitive",x);a(n,"isObject",g);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
