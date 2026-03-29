"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=p(function(P,c){
var a=require('@stdlib/math-base-assert-is-infinitef/dist'),t=require('@stdlib/math-base-special-copysignf/dist'),E=require('@stdlib/number-float32-base-signbit/dist'),f=require('@stdlib/math-base-assert-is-nanf/dist'),N=require('@stdlib/math-base-special-atanf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),O=require('@stdlib/constants-float32-pinf/dist'),u=require('@stdlib/constants-float32-pi/dist'),v=i(0),q=i(2),R=i(3),s=i(4);function g(r,e){var n;return e=i(e),r=i(r),f(e)||f(r)?NaN:a(e)?e===O?a(r)?t(i(u/s),r):t(v,r):a(r)?t(i(i(R*u)/s),r):t(u,r):a(r)?t(i(u/q),r):r===0?e>=0&&!E(e)?t(v,r):t(u,r):e===0?t(i(u/q),r):(n=N(i(r/e)),e<0?n<=0?i(n+u):i(n-u):n)}c.exports=g
});var F=o();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
