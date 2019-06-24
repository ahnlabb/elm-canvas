!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function e(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function u(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function i(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function f(c){return r(9,c,function(o){return function(f){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return c(o,f,i,a,u,e,t,r,n)}}}}}}}}})}function b(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function s(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function l(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function d(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function h(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function o(n,r,t,e,u,a,i,f,o,c){return 9===n.a?n.f(r,t,e,u,a,i,f,o,c):n(r)(t)(e)(u)(a)(i)(f)(o)(c)}var $={$:0};function g(n,r){return{$:1,a:n,b:r}}var c=e(g);function m(n){for(var r=$,t=n.length;t--;)r=g(n[t],r);return r}function v(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}function p(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(!n.$)return(t=p(n.a,r.a))?t:(t=p(n.b,r.b))?t:p(n.c,r.c);for(;n.b&&r.b&&!(t=p(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var y=0;function w(n,r){return{a:n,b:r}}function A(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function k(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var j=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),_=e(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,w(t,r)});function T(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var N=Math.cos,E=Math.sin;var L=Math.ceil,x=Math.floor,O=Math.round,C=Math.log;var R=e(function(n,r){return r.join(n)});function q(n){return n+""}var B=e(function(n,r){return M(n,D(r))});function M(n,r){switch(n.$){case 3:return"boolean"==typeof r?pr(r):Y("a BOOL",r);case 2:return"number"!=typeof r?Y("an INT",r):-2147483647<r&&r<2147483647&&(0|r)===r?pr(r):!isFinite(r)||r%1?Y("an INT",r):pr(r);case 4:return"number"==typeof r?pr(r):Y("a FLOAT",r);case 6:return"string"==typeof r?pr(r):r instanceof String?pr(r+""):Y("a STRING",r);case 9:return null===r?pr(n.c):Y("null",r);case 5:return pr(I(r));case 7:return Array.isArray(r)?F(n.b,r,m):Y("a LIST",r);case 8:return Array.isArray(r)?F(n.b,r,J):Y("an ARRAY",r);case 10:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return Y("an OBJECT with a field named `"+t+"`",r);var e=M(n.b,r[t]);return Wn(e)?e:mr(b(wr,t,e.a));case 11:var u=n.e;if(!Array.isArray(r))return Y("an ARRAY",r);if(r.length<=u)return Y("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=M(n.b,r[u]);return Wn(e)?e:mr(b(Ar,u,e.a));case 12:if("object"!=typeof r||null===r||Array.isArray(r))return Y("an OBJECT",r);var a=$;for(var i in r)if(r.hasOwnProperty(i)){e=M(n.b,r[i]);if(!Wn(e))return mr(b(wr,i,e.a));a=g(w(i,e.a),a)}return pr(ir(a));case 13:for(var f=n.f,o=n.g,c=0;c<o.length;c++){e=M(o[c],r);if(!Wn(e))return e;f=f(e.a)}return pr(f);case 14:e=M(n.b,r);return Wn(e)?M(n.h(e.a),r):e;case 15:for(var v=$,s=n.g;s.b;s=s.b){e=M(s.a,r);if(Wn(e))return e;v=g(e.a,v)}return mr(kr(ir(v)));case 1:return mr(b(yr,n.a,I(r)));case 0:return pr(n.a)}}function F(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=M(n,r[a]);if(!Wn(i))return mr(b(Ar,a,i.a));u[a]=i.a}return pr(t(u))}function J(r){return b(hr,r.length,function(n){return r[n]})}function Y(n,r){return mr(b(yr,"Expecting "+n,I(r)))}function z(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return n.c===r.c;case 7:case 8:case 12:return z(n.b,r.b);case 10:return n.d===r.d&&z(n.b,r.b);case 11:return n.e===r.e&&z(n.b,r.b);case 13:return n.f===r.f&&S(n.g,r.g);case 14:return n.h===r.h&&z(n.b,r.b);case 15:return S(n.g,r.g)}}function S(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!z(n[e],r[e]))return!1;return!0}function I(n){return n}function D(n){return n}var P=t(function(n,r,t){return t[n]=D(r),t});I(null);function X(n){return{$:0,a:n}}function V(n){return{$:2,b:n,c:null}}var G=e(function(n,r){return{$:3,b:n,d:r}});var H=0;function Q(n){var r={$:0,e:H++,f:n,g:null,h:[]};return rn(r),r}function W(r){return V(function(n){n(X(Q(r)))})}function K(n,r){n.h.push(r),rn(n)}var U=e(function(r,t){return V(function(n){K(r,t),n(X(y))})});var Z=!1,nn=[];function rn(n){if(nn.push(n),!Z){for(Z=!0;n=nn.shift();)tn(n);Z=!1}}function tn(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,rn(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function en(n,r,t,e,u,a){var i=b(B,n,I(r?r.flags:void 0));Wn(i)||T(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(n,r){var t;for(var e in un){var u=un[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=fn(u,r)}return t}(f,s);function s(n,r){c(o=(i=b(e,n,o)).a,r),sn(f,i.b,u(o))}return sn(f,i.b,u(o)),v?{ports:v}:{}}var un={};function an(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function fn(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,f=n.f;function o(t){return b(G,o,{$:5,b:function(n){var r=n.a;return 0===n.$?s(a,e,r,t):i&&f?l(u,e,r.i,r.j,t):s(u,e,i?r.i:r.j,t)}})}return e.h=Q(b(G,o,n.b))}var on=e(function(r,t){return V(function(n){r.g(t),n(X(y))})}),cn=e(function(n,r){return b(U,n.h,{$:0,a:r})});function vn(r){return function(n){return{$:1,k:r,l:n}}}function sn(n,r,t){var e={};for(var u in bn(!0,r,e,null),bn(!1,t,e,null),n)K(n[u],{$:"fx",a:e[u]||{i:$,j:$}})}function bn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return b(n?un[r].e:un[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:$,j:$},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)bn(n,i.a,t,e);return;case 3:return void bn(n,r.o,t,{p:r.n,q:e})}}var ln;var dn="undefined"!=typeof document?document:{};function hn(n,r){n.appendChild(r)}function $n(n){return{$:0,a:n}}var gn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:wn(n),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:wn(n),e:t,f:a,b:e}})})(void 0);var mn=e(function(n,r){return{$:"a2",n:n,o:r}}),pn=e(function(n,r){return{$:"a3",n:n,o:r}});var yn;function wn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?An(i,u,a):i[u]=a}else"className"===u?An(r,u,D(a)):r[u]=D(a)}return r}function An(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function kn(n,r){var t=n.$;if(5===t)return kn(n.k||(n.k=n.m()),r);if(0===t)return dn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=kn(e,a)).elm_event_node_ref=a,i}if(3===t)return jn(i=n.h(n.g),r,n.d),i;var i=n.f?dn.createElementNS(n.f,n.c):dn.createElement(n.c);ln&&"a"==n.c&&i.addEventListener("click",ln(i)),jn(i,r,n.d);for(var f=n.e,o=0;o<f.length;o++)hn(i,kn(1===t?f[o]:f[o].b,r));return i}function jn(n,r,t){for(var e in t){var u=t[e];"a1"===e?_n(n,u):"a0"===e?En(n,r,u):"a3"===e?Tn(n,u):"a4"===e?Nn(n,u):("value"!==e||"checked"!==e||n[e]!==u)&&(n[e]=u)}}function _n(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Tn(n,r){for(var t in r){var e=r[t];e?n.setAttribute(t,e):n.removeAttribute(t)}}function Nn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function En(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Ln(r,a),n.addEventListener(u,i,yn&&{passive:Ir(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yn=!0}}))}catch(n){}function Ln(v,n){function s(n){var r=s.q,t=M(r.a,n);if(Wn(t)){for(var e,u=Ir(r),a=t.a,i=u?u<3?a.a:a.M:a,f=1==u?a.b:3==u&&a.a7,o=(f&&n.stopPropagation(),(2==u?a.b:3==u&&a.a2)&&n.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=n,s}function xn(n,r){return n.$==r.$&&z(n.a,r.a)}function On(n,r){var t=[];return Rn(n,r,t,0),t}function Cn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Rn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Cn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Rn(n.k,r.k,v,0),void(0<v.length&&Cn(t,1,e,v));case 4:for(var s=n.j,b=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Cn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,b):s===b)||Cn(t,2,e,b),void Rn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Cn(t,3,e,r.a));case 1:return void qn(n,r,t,e,Mn);case 2:return void qn(n,r,t,e,Fn);case 3:if(n.h!==r.h)return void Cn(t,0,e,r);var $=Bn(n.d,r.d);$&&Cn(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&Cn(t,5,e,g))}}}function qn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Bn(n.d,r.d);a&&Cn(t,4,e,a),u(n,r,t,e)}else Cn(t,0,e,r)}function Bn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&xn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Bn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function Mn(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;f<i?Cn(t,6,e,{v:f,i:i-f}):i<f&&Cn(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Rn(v,a[c],t,++e),e+=v.b||0}}function Fn(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var m=f[s+1],p=o[b+1];if(m)var y=m.a,w=m.b,A=h===y;if(p)var k=p.a,j=p.b,_=d===k;if(_&&A)Rn($,j,u,++l),Yn(a,u,d,g,b,i),l+=$.b||0,zn(a,u,d,w,++l),l+=w.b||0,s+=2,b+=2;else if(_)l++,Yn(a,u,h,g,b,i),Rn($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(A)zn(a,u,d,$,++l),l+=$.b||0,Rn(w,g,u,++l),l+=w.b||0,s+=2,b+=1;else{if(!m||y!==k)break;zn(a,u,d,$,++l),Yn(a,u,h,g,b,i),l+=$.b||0,Rn(w,j,u,++l),l+=w.b||0,s+=2,b+=2}}else Rn($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;zn(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Yn(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Cn(t,8,e,{w:u,x:i,y:E})}var Jn="_elmW6BL";function Yn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Rn(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Yn(n,r,t+Jn,e,u,a)}function zn(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Rn(e,a.z,i,u),void Cn(r,9,u,{w:i,A:a})}zn(n,r,t+Jn,e,u)}else{var f=Cn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function Sn(n,r,t,e){!function n(r,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Sn(r,t.k,o.s,f);else if(8===v){o.t=r,o.u=f;var s=o.s.w;0<s.length&&n(r,t,s,0,a,i,f)}else if(9===v){o.t=r,o.u=f;var b=o.s;if(b){b.A.s=r;var s=b.w;0<s.length&&n(r,t,s,0,a,i,f)}}else o.t=r,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var $=r.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=n($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function In(n,r,t,e){return 0===t.length?n:(Sn(n,r,t,e),Dn(n,t))}function Dn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Pn(u,e);u===n&&(n=a)}return n}function Pn(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=kn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return jn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Dn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(kn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Dn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=dn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;hn(t,2===a.c?a.s:kn(a.z,r.u))}return t}(t.y,r);n=Dn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:kn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&hn(n,e);return n}(n,r);case 5:return r.s(n);default:T(10)}}function Xn(n){if(3===n.nodeType)return $n(n.textContent);if(1!==n.nodeType)return $n("");for(var r=$,t=n.attributes,e=t.length;e--;){var u=t[e];r=g(b(pn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=$,f=n.childNodes;for(e=f.length;e--;)i=g(Xn(f[e]),i);return s(gn,a,r,i)}var Vn=u(function(r,n,t,f){return en(n,f,r.cn,r.cY,r.cR,function(e,n){var u=r.c_,a=f.node,i=Xn(a);return Hn(n,function(n){var r=u(n),t=On(i,r);a=In(a,i,t,e),i=r})})}),Gn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){setTimeout(n,1e3/60)};function Hn(t,e){e(t);var u=0;function a(){u=1===u?0:(Gn(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&Gn(a),u=2)}}var Qn={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Wn=function(n){return!n.$},Kn=c,Un=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Zn=L,nr=e(function(n,r){return C(r)/C(n)}),rr=Zn(b(nr,2,32)),tr=[],er=l(Un,0,rr,tr,tr),ur=_,ar=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=b(n,t.a,r);n=u,r=a,t=e}}),ir=function(n){return s(ar,Kn,$,n)},fr=e(function(n,r){for(;;){var t=b(ur,32,n),e=t.b,u=b(Kn,{$:0,a:t.a},r);if(!e.b)return ir(u);n=e,r=u}}),or=e(function(n,r){for(;;){var t=Zn(r/32);if(1===t)return b(ur,32,n).a;n=b(fr,n,$),r=t}}),cr=x,vr=e(function(n,r){return 0<p(n,r)?n:r}),sr=function(n){return n.length},br=e(function(n,r){if(r.k){var t=32*r.k,e=cr(b(nr,32,t-1)),u=n?ir(r.o):r.o,a=b(or,u,r.k);return l(Un,sr(r.n)+t,b(vr,5,e*rr),a,r.n)}return l(Un,sr(r.n),rr,tr,r.n)}),lr=j,dr=a(function(n,r,t,e,u){for(;;){if(r<0)return b(br,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(lr,32,r,n)};n=n,r=r-32,t=t,e=b(Kn,a,e),u=u}}),hr=e(function(n,r){if(0<n){var t=n%32;return d(dr,r,n-t-32,n,$,s(lr,t,n-t,r))}return er}),$r=function(n){return{$:0,a:n}},gr={$:1},mr=function(n){return{$:1,a:n}},pr=function(n){return{$:0,a:n}},yr=e(function(n,r){return{$:3,a:n,b:r}}),wr=e(function(n,r){return{$:0,a:n,b:r}}),Ar=e(function(n,r){return{$:1,a:n,b:r}}),kr=function(n){return{$:2,a:n}},jr=q,_r=e(function(n,r){return b(R,n,v(r))}),Tr=function(n){return{$:2,m:n}}($),Nr=function(n){return{$:1,a:n}},Er=t(function(n,r,t){return{aV:t,bI:r,bL:n}}),Lr=X,xr=Lr(s(Er,$,gr,0)),Or=function(n){return n},Cr=Lr(0),Rr=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(n,u,b(n,i,b(n,o,b(n,c.a,500<t?s(ar,n,r,ir(v)):l(Rr,n,r,t+1,v)))))}return b(n,u,b(n,i,b(n,o,r)))}return b(n,u,b(n,i,r))}return b(n,u,r)}return r}),qr=t(function(n,r,t){return l(Rr,n,r,0,t)}),Br=e(function(t,n){return s(qr,e(function(n,r){return b(Kn,t(n),r)}),$,n)}),Mr=G,Fr=e(function(r,n){return b(Mr,function(n){return Lr(r(n))},n)}),Jr=t(function(t,n,e){return b(Mr,function(r){return b(Mr,function(n){return Lr(b(t,r,n))},e)},n)}),Yr=function(n){return s(qr,Jr(Kn),Lr($),n)},zr=on,Sr=e(function(n,r){var t=r;return W(b(Mr,zr(n),t))});un.Task=an(Cr,t(function(n,r){return b(Fr,function(){return 0},Yr(b(Br,Sr(n),r)))}),t(function(){return Lr(0)}),e(function(n,r){return b(Fr,n,r)}));vn("Task");var Ir=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=V(function(n){n(X(Date.now()))}),Pr=V(function(n){var r=requestAnimationFrame(function(){n(X(Date.now()))});return function(){cancelAnimationFrame(r)}}),Xr=cn,Vr=function(t){return V(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(X(y))})},Gr=W,Hr=t(function(n,t,r){var e=r.bI,u=r.aV,a=w(e,t);if(1!==a.a.$)return a.b.b?Lr(s(Er,t,e,u)):b(Mr,function(){return xr},Vr(a.a.a));if(a.b.b){return b(Mr,function(r){return b(Mr,function(n){return Lr(s(Er,t,$r(r),n))},Dr)},Gr(b(Mr,Xr(n),Pr)))}return xr}),Qr=Or,Wr=t(function(r,t,n){var e=n.bL,u=n.aV,a=function(n){return b(zr,r,n.$?(0,n.a)(t-u):(0,n.a)(Qr(t)))};return b(Mr,function(n){return b(Mr,function(){return Lr(s(Er,e,$r(n),t))},Yr(b(Br,a,e)))},Gr(b(Mr,Xr(r),Pr)))}),Kr=t(function(n,r,t){return n(r(t))});un["Browser.AnimationManager"]=an(xr,Hr,Wr,0,e(function(n,r){return r.$?Nr(b(Kr,n,r.a)):{$:0,a:b(Kr,n,r.a)}}));var Ur,Zr=vn("Browser.AnimationManager"),nt=function(n){return Zr(Nr(n))},rt=e(function(n,r){return w(r+1,Tr)}),tt=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),et=t(function(n,r,t){return s(tt,n,r,t)}),ut=function(n){return{$:1,a:n}},at=e(function(n,r){return{$:3,a:n,b:r}}),it=e(function(n,r){var t=w(n,r);n:for(;;)switch(t.b.$){case 3:var e=t.b;return b(at,e.a,e.b);case 1:switch(t.a.$){case 1:return ut(t.b.a);case 2:return b(at,t.b.a,t.a.a);case 3:var u=t.a;return b(at,t.b.a,u.b);default:break n}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return b(at,t.a.a,t.b.a);case 3:var a=t.a;return b(at,a.a,t.b.a);default:break n}default:if(t.a.$){return t.a}break n}return t.b}),ft=e(function(n,r){return s(ar,e(function(n,r){var t=r;switch(n.$){case 0:return A(t,{J:b(Kn,n.a,t.J)});case 1:return A(t,{J:s(ar,Kn,t.J,n.a)});case 3:return A(t,{Y:(0,n.a)(t.Y)});default:return A(t,{X:b(it,t.X,n.a)})}}),r,n)}),ot={$:0},ct=e(function(n,r){return b(ft,n,{J:$,X:ot,Y:(t=r,{$:1,a:t})});var t}),vt=t(function(n,r,t){return b(ft,n,{J:$,X:ot,Y:(e={aR:gr,bB:r,a8:t},{$:0,a:e})});var e}),st=e(function(n,r){return I(s(ar,function(t){return e(function(n,r){return r.push(D(t(n))),r})}(n),[],r))}),bt=function(n){return I(s(ar,e(function(n,r){return s(P,n.a,n.b,r)}),{},n))},lt=I,dt=e(function(n,r){return bt(m([w("type",lt("function")),w("name",lt(n)),w("args",b(st,Or,r))]))}),ht=I,$t=a(function(n,r,t,e,u){return b(dt,"arcTo",m([ht(n),ht(r),ht(t),ht(e),ht(u)]))}),gt=i(function(n,r,t,e,u,a){return b(dt,"bezierCurveTo",m([ht(n),ht(r),ht(t),ht(e),ht(u),ht(a)]))}),mt=e(function(n,r){return b(dt,"lineTo",m([ht(n),ht(r)]))}),pt=e(function(n,r){return b(dt,"moveTo",m([ht(n),ht(r)]))}),yt=u(function(n,r,t,e){return b(dt,"quadraticCurveTo",m([ht(n),ht(r),ht(t),ht(e)]))}),wt=e(function(n,r){switch(n.$){case 0:var t=n.a,e=n.b;return b(Kn,d($t,t.a,t.b,e.a,e.b,n.c),r);case 1:var u=n.a,a=n.b,i=n.c;return b(Kn,h(gt,u.a,u.b,a.a,a.b,i.a,i.b),r);case 2:var f=n.a;return b(Kn,b(mt,f.a,f.b),r);case 3:var o=n.a;return b(Kn,b(pt,o.a,o.b),r);default:var c=n.a,v=n.b;return b(Kn,l(yt,c.a,c.b,v.a,v.b),r)}}),At=I,kt=i(function(n,r,t,e,u,a){return b(dt,"arc",m([ht(n),ht(r),ht(t),ht(e),ht(u),At(a)]))}),jt=t(function(n,r,t){return h(kt,n,r,t,0,6.283185307179586,!1)}),_t=u(function(n,r,t,e){return b(dt,"rect",m([ht(n),ht(r),ht(t),ht(e)]))}),Tt=N,Nt=E,Et=e(function(n,r){switch(n.$){case 0:var t=n.a;return b(Kn,l(_t,f=t.a,o=t.b,n.b,n.c),b(Kn,b(pt,f,o),r));case 1:var e=n.a,u=n.b;return b(Kn,s(jt,f=e.a,o=e.b,u),b(Kn,b(pt,f+u,o),r));case 2:var a=n.a,i=n.b;return s(ar,wt,b(Kn,b(pt,f=a.a,o=a.b),r),i);default:var f,o,c=n.a,v=n.c;return b(Kn,h(kt,f=c.a,o=c.b,n.b,v,n.d,n.e),b(Kn,b(pt,f+Tt(v),o+Nt(v)),r))}}),Lt=e(function(n,r){return bt(m([w("type",lt("field")),w("name",lt(n)),w("value",r)]))}),xt=O,Ot=q,Ct=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return xt(1e4*n)/100};return r=m(["rgba(",Ot(i(n.a)),"%,",Ot(i(e)),"%,",Ot(i(u)),"%,",Ot((t=a,xt(1e3*t)/1e3)),")"]),b(_r,"",r)},Rt=function(n){return b(Lt,"fillStyle",lt(Ct(n)))},qt=e(function(n,r){return b(Kn,b(dt,"fill",m([lt(function(n){return n?"evenodd":"nonzero"}(0))])),b(Kn,Rt(n),r))}),Bt=b(dt,"stroke",$),Mt=function(n){return b(Lt,"strokeStyle",lt(Ct(n)))},Ft=e(function(n,r){return b(Kn,Bt,b(Kn,Mt(n),r))}),Jt=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Yt=l(Jt,0,0,0,1),zt=e(function(n,r){switch(n.$){case 0:return b(qt,Yt,r);case 1:return b(qt,n.a,r);case 2:return b(Ft,n.a,r);default:return b(Ft,n.b,b(qt,n.a,r))}}),St=u(function(n,r,t,e){if(1===e.$)return b(dt,"fillText",m([lt(n),ht(r),ht(t)]));var u=e.a;return b(dt,"fillText",m([lt(n),ht(r),ht(t),ht(u)]))}),It=a(function(n,r,t,e,u){return b(Kn,l(St,n.a8,r,t,n.aR),b(Kn,Rt(e),u))}),Dt=u(function(n,r,t,e){if(1===e.$)return b(dt,"strokeText",m([lt(n),ht(r),ht(t)]));var u=e.a;return b(dt,"strokeText",m([lt(n),ht(r),ht(t),ht(u)]))}),Pt=a(function(n,r,t,e,u){return b(Kn,l(Dt,n.a8,r,t,n.aR),b(Kn,Mt(e),u))}),Xt=t(function(n,r,t){var e=r.bB,u=e.a,a=e.b;switch(n.$){case 0:return d(It,r,u,a,Yt,t);case 1:return d(It,r,u,a,n.a,t);case 2:return d(Pt,r,u,a,n.a,t);default:return d(Pt,r,u,a,n.b,d(It,r,u,a,n.a,t))}}),Vt=t(function(n,r,t){return s(Xt,n,r,t)}),Gt=f(function(n,r,t,e,u,a,i,f,o){return b(dt,"drawImage",m([o,ht(n),ht(r),ht(t),ht(e),ht(u),ht(a),ht(i),ht(f)]))}),Ht=u(function(t,e,u,n){return b(Kn,function(){if(u.$){var n=u.a;return o(Gt,n.bP,n.bQ,n.bO,n.av,t,e,n.bO,n.av,(r=u.b).cp)}var r;return o(Gt,0,0,(r=u.a).bO,r.av,t,e,r.bO,r.av,r.cp)}(),n)}),Qt=t(function(n,r,t){return l(Ht,n.a,n.b,r,t)}),Wt=b(dt,"beginPath",$),Kt=t(function(n,r,t){switch(n.$){case 0:return s(Vt,r,n.a,t);case 1:var e=n.a;return b(zt,r,s(ar,Et,b(Kn,Wt,t),e));default:return s(Qt,n.a,n.b,t)}}),Ut=b(dt,"restore",$),Zt=b(dt,"save",$),ne=e(function(n,r){return b(Kn,Ut,s(Kt,n.Y,n.X,k(n.J,b(Kn,Zt,r))))}),re=$,te=e(function(n,r){return b(mn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),ee=gn("canvas"),ue=function(n){return gn(function(n){return"script"==n?"p":n}(n))},ae=function(n){return b(pn,"height",jr(n))},ie=function(n){return b(pn,"width",jr(n))},fe=t(function(n,r,t){var e,u=n.a,a=n.b;return s(ue,"elm-canvas",m([(e=function(n){return s(ar,ne,re,n)}(t),b(te,"cmds",b(st,Or,e))),ae(a),ie(u)]),m([b(ee,b(Kn,ae(a),b(Kn,ie(u),r)),$)]))}),oe=function(n){return{$:2,a:ut(n)}},ce=function(n){return{$:0,a:n}},ve=function(n){return ce((r=function(n){switch(n){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}}(n),b(Lt,"textAlign",lt(r))));var r},se=function(n){var r,t=n.ce;return ce((r=jr(n.cO)+"px "+t,b(Lt,"font",lt(r))))},be=t(function(n,r,t){return l(Jt,n,r,t,1)}),le=l(Jt,1,1,1,1),de={$:4},he=Vn({cn:function(){return w(0,Tr)},cR:function(){return nt(Or)},cY:rt,c_:function(n){return s(fe,w(500,500),$,m([b(ct,m([oe(le)]),m([s(et,w(0,0),500,500)])),s(vt,m([se({ce:"sans-serif",cO:48}),ve(2),oe(s(be,255,0,0))]),w(250,250),jr(n))]))}});Ur={Examples:{Template:{init:he(de)(0)}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?T(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Ur):n.Elm=Ur}(this);