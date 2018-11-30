!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function f(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function e(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function u(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function a(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function l(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function d(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function h(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function s(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function b(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var i=f(g);function p(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function m(r,n){for(var t,e=[],u=c(r,n,0,e);u&&(t=e.pop());u=c(t.a,t.b,0,e));return u}function c(r,n,t,e){if(100<t)return e.push(k(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&P(5),!1;for(var u in r.$<0&&(r=tn(r),n=tn(n)),r)if(!c(r[u],n[u],t+1,e))return!1;return!0}function v(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=v(r.a,n.a))?t:(t=v(r.b,n.b))?t:v(r.c,n.c);for(;r.b&&n.b&&!(t=v(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var y=0;function k(r,n){return{a:r,b:n}}function w(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function A(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var j=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),T=f(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,k(t,n)}),_=f(function(r,n){return n[r]}),N=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[r]=n,u}),E=f(function(r,n){for(var t=n.length,e=Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e}),L=t(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=l(r,t[u],n);return n}),x=t(function(r,n,t){for(var e=t.length-1;0<=e;e--)n=l(r,t[e],n);return n}),C=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=l(r,n+a,t[a]);return u});function P(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var q=Math.cos,z=Math.sin;var O=Math.ceil,S=Math.floor,F=Math.round,M=Math.log;var B=f(function(r,n){return n.join(r)});function R(r){return r+""}var D=f(function(r,n){return G(r,K(n))});function G(r,n){switch(r.$){case 3:return"boolean"==typeof n?Bn(n):W("a BOOL",n);case 2:return"number"!=typeof n?W("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Bn(n):!isFinite(n)||n%1?W("an INT",n):Bn(n);case 4:return"number"==typeof n?Bn(n):W("a FLOAT",n);case 6:return"string"==typeof n?Bn(n):n instanceof String?Bn(n+""):W("a STRING",n);case 9:return null===n?Bn(r.c):W("null",n);case 5:return Bn(H(n));case 7:return Array.isArray(n)?I(r.b,n,p):W("a LIST",n);case 8:return Array.isArray(n)?I(r.b,n,J):W("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return W("an OBJECT with a field named `"+t+"`",n);var e=G(r.b,n[t]);return Pn(e)?e:Mn(l(Dn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return W("an ARRAY",n);if(n.length<=u)return W("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=G(r.b,n[u]);return Pn(e)?e:Mn(l(Gn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return W("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=G(r.b,n[i]);if(!Pn(e))return Mn(l(Dn,i,e.a));a=g(k(i,e.a),a)}return Bn(kn(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=G(o[c],n);if(!Pn(e))return e;f=f(e.a)}return Bn(f);case 14:e=G(r.b,n);return Pn(e)?G(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=G(s.a,n);if(Pn(e))return e;v=g(e.a,v)}return Mn(In(kn(v)));case 1:return Mn(l(Rn,r.a,H(n)));case 0:return Bn(r.a)}}function I(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=G(r,n[a]);if(!Pn(i))return Mn(l(Gn,a,i.a));u[a]=i.a}return Bn(t(u))}function J(n){return l(On,n.length,function(r){return n[r]})}function W(r,n){return Mn(l(Rn,"Expecting "+r,H(n)))}function Y(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return Y(r.b,n.b);case 10:return r.d===n.d&&Y(r.b,n.b);case 11:return r.e===n.e&&Y(r.b,n.b);case 13:return r.f===n.f&&Z(r.g,n.g);case 14:return r.h===n.h&&Y(r.b,n.b);case 15:return Z(r.g,n.g)}}function Z(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!Y(r[e],n[e]))return!1;return!0}function H(r){return r}function K(r){return r}var Q=t(function(r,n,t){return t[r]=K(n),t});H(null);function U(r){return{$:0,a:r}}function V(r){return{$:2,b:r,c:null}}var X=f(function(r,n){return{$:3,b:r,d:n}});var rr=0;function nr(r){var n={$:0,e:rr++,f:r,g:null,h:[]};return ir(n),n}function tr(n){return V(function(r){r(U(nr(n)))})}function er(r,n){r.h.push(n),ir(r)}var ur=!1,ar=[];function ir(r){if(ar.push(r),!ur){for(ur=!0;r=ar.shift();)fr(r);ur=!1}}function fr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,ir(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function or(r,n,t,e,u,a){var i=l(D,r,H(n?n.flags:void 0));Pn(i)||P(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in cr){var u=cr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=vr(u,n)}return t}(f,s);function s(r,n){c(o=(i=l(e,r,o)).a,n),dr(f,i.b,u(o))}return dr(f,i.b,u(o)),v?{ports:v}:{}}var cr={};function vr(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return l(X,o,{$:5,b:function(r){var n=r.a;return 0===r.$?d(a,e,n,t):i&&f?h(u,e,n.i,n.j,t):d(u,e,i?n.i:n.j,t)}})}return e.h=nr(l(X,o,r.b))}var sr=f(function(n,t){return V(function(r){n.g(t),r(U(y))})});function br(n){return function(r){return{$:1,k:n,l:r}}}function lr(r){return{$:2,m:r}}function dr(r,n,t){var e={};for(var u in hr(!0,n,e,null),hr(!1,t,e,null),r)er(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function hr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return l(r?cr[n].e:cr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)hr(r,i.a,t,e);return;case 3:return void hr(r,n.o,t,{p:n.n,q:e})}}var $r;var gr="undefined"!=typeof document?document:{};function pr(r,n){r.appendChild(n)}function mr(r){return{$:0,a:r}}var yr=f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:jr(r),e:t,f:a,b:e}})})(void 0);f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:jr(r),e:t,f:a,b:e}})})(void 0);var kr=f(function(r,n){return{$:"a2",n:r,o:n}}),wr=f(function(r,n){return{$:"a3",n:r,o:n}});var Ar;function jr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?Tr(i,u,a):i[u]=a}else"className"===u?Tr(n,u,K(a)):n[u]=K(a)}return n}function Tr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function _r(r,n){var t=r.$;if(5===t)return _r(r.k||(r.k=r.m()),n);if(0===t)return gr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=_r(e,a)).elm_event_node_ref=a,i}if(3===t)return Nr(i=r.h(r.g),n,r.d),i;var i=r.f?gr.createElementNS(r.f,r.c):gr.createElement(r.c);$r&&"a"==r.c&&i.addEventListener("click",$r(i)),Nr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)pr(i,_r(1===t?f[o]:f[o].b,n));return i}function Nr(r,n,t){for(var e in t){var u=t[e];"a1"===e?Er(r,u):"a0"===e?Cr(r,n,u):"a3"===e?Lr(r,u):"a4"===e?xr(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Er(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function Lr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function xr(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Cr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Pr(n,a),r.addEventListener(u,i,Ar&&{passive:ee(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ar=!0}}))}catch(r){}function Pr(v,r){function s(r){var n=s.q,t=G(n.a,r);if(Pn(t)){for(var e,u=ee(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.bd,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a7)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function qr(r,n){return r.$==n.$&&Y(r.a,n.a)}function zr(r,n){var t=[];return Sr(r,n,t,0),t}function Or(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Sr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Or(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Sr(r.k,n.k,v,0),void(0<v.length&&Or(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Or(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Or(t,2,e,b),void Sr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Or(t,3,e,n.a));case 1:return void Fr(r,n,t,e,Br);case 2:return void Fr(r,n,t,e,Rr);case 3:if(r.h!==n.h)return void Or(t,0,e,n);var $=Mr(r.d,n.d);$&&Or(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&Or(t,5,e,g))}}}function Fr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Mr(r.d,n.d);a&&Or(t,4,e,a),u(r,n,t,e)}else Or(t,0,e,n)}function Mr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&qr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Mr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Br(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?Or(t,6,e,{v:f,i:i-f}):i<f&&Or(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Sr(v,a[c],t,++e),e+=v.b||0}}function Rr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(_=f[s]).a,h=(N=o[b]).a,$=_.b,g=N.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,T=d===A;if(T&&w)Sr($,j,u,++l),Gr(a,u,d,g,b,i),l+=$.b||0,Ir(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(T)l++,Gr(a,u,h,g,b,i),Sr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Ir(a,u,d,$,++l),l+=$.b||0,Sr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Ir(a,u,d,$,++l),Gr(a,u,h,g,b,i),l+=$.b||0,Sr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Sr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var _;Ir(a,u,(_=f[s]).a,$=_.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Gr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Or(t,8,e,{w:u,x:i,y:E})}var Dr="_elmW6BL";function Gr(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Sr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Gr(r,n,t+Dr,e,u,a)}function Ir(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Sr(e,a.z,i,u),void Or(n,9,u,{w:i,A:a})}Ir(r,n,t+Dr,e,u)}else{var f=Or(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Jr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Jr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Wr(r,n,t,e){return 0===t.length?r:(Jr(r,n,t,e),Yr(r,t))}function Yr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Zr(u,e);u===r&&(r=a)}return r}function Zr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=_r(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return Nr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Yr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(_r(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Yr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=gr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;pr(t,2===a.c?a.s:_r(a.z,n.u))}return t}(t.y,n);r=Yr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:_r(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&pr(r,e);return r}(r,n);case 5:return n.s(r);default:P(10)}}function Hr(r){if(3===r.nodeType)return mr(r.textContent);if(1!==r.nodeType)return mr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(l(wr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Hr(f[e]),i);return d(yr,a,n,i)}var Kr=e(function(n,r,t,f){return or(r,f,n.cp,n.cZ,n.cT,function(e,r){var u=n.c$,a=f.node,i=Hr(a);return Ur(r,function(r){var n=u(r),t=zr(i,n);a=Wr(a,i,t,e),i=n})})}),Qr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Ur(t,e){e(t);var u=0;function a(){u=1===u?0:(Qr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Qr(a),u=2)}}var Vr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Xr,rn=t(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.d,u=r,a=d(r,t.b,t.c,d(rn,r,n,t.e));r=u,n=a,t=e}}),nn=i,tn=function(r){return d(rn,t(function(r,n,t){return l(nn,k(r,n),t)}),$,r)},en=x,un=t(function(t,r,n){var e=n.c,u=n.d,a=f(function(r,n){return d(en,r.$?t:a,n,r.a)});return d(en,a,d(en,t,r,u),e)}),an=function(r){return d(un,nn,$,r)},fn=function(r){return r<0?-r:r},on=f(function(r,n){return 0<v(r,n)?r:n}),cn=f(function(r,n){var t=n.a,e=n.b,u=fn(t-250);return k(t,e+r*l(on,-u/(100/150)+150,0)/2*-1)}),vn=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),sn=O,bn=f(function(r,n){return M(n)/M(r)}),ln=function(r){return r},dn=sn(l(bn,2,32)),hn=[],$n=h(vn,0,dn,hn,hn),gn=function(r){return{$:1,a:r}},pn=function(r){return{$:0,a:r}},mn=T,yn=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=l(r,t.a,n);r=u,n=a,t=e}}),kn=function(r){return d(yn,nn,$,r)},wn=f(function(r,n){for(;;){var t=l(mn,32,r),e=t.b,u=l(nn,pn(t.a),n);if(!e.b)return kn(u);r=e,n=u}}),An=f(function(r,n){for(;;){var t=sn(n/32);if(1===t)return l(mn,32,r).a;r=l(wn,r,$),n=t}}),jn=S,Tn=function(r){return r.length},_n=f(function(r,n){if(n.k){var t=32*n.k,e=jn(l(bn,32,t-1)),u=r?kn(n.o):n.o,a=l(An,u,n.k);return h(vn,Tn(n.n)+t,l(on,5,e*dn),a,n.n)}return h(vn,Tn(n.n),dn,hn,n.n)}),Nn=t(function(r,n,t){for(;;){var e=l(mn,32,r),u=e.a,a=e.b;if(v(Tn(u),32)<0)return l(_n,!0,{o:n,k:t,n:u});r=a,n=l(nn,gn(u),n),t=t+1}}),En=function(r){return r>>>5<<5},Ln=L,xn=C,Cn=f(function(e,r){var n=r.c,t=r.d,u={o:$,k:0,n:d(xn,e,En(r.a),t)},a=f(function(r,n){if(r.$){var t=gn(d(xn,e,32*n.k,r.a));return{o:l(nn,t,n.o),k:n.k+1,n:n.n}}return d(Ln,a,n,r.a)});return l(_n,!0,d(Ln,a,u,n))}),Pn=function(r){return!r.$},qn=j,zn=u(function(r,n,t,e,u){for(;;){if(n<0)return l(_n,!1,{o:e,k:t/32|0,n:u});var a=gn(d(qn,32,n,r));r=r,n=n-32,t=t,e=l(nn,a,e),u=u}}),On=f(function(r,n){if(0<r){var t=r%32;return s(zn,n,r-t-32,r,$,d(qn,t,r-t,n))}return $n}),Sn=function(r){return{$:0,a:r}},Fn={$:1},Mn=function(r){return{$:1,a:r}},Bn=function(r){return{$:0,a:r}},Rn=f(function(r,n){return{$:3,a:r,b:n}}),Dn=f(function(r,n){return{$:0,a:r,b:n}}),Gn=f(function(r,n){return{$:1,a:r,b:n}}),In=function(r){return{$:2,a:r}},Jn=R,Wn=f(function(r,n){return l(B,r,o(n))}),Yn=lr($),Zn=t(function(r,n,t){var e=t.b;return k(r(t.a),n(e))}),Hn=function(r){return r},Kn=f(function(r,n){return{$:0,a:r,b:n}}),Qn=function(r){var n=r.b;return l(Kn,1664525*r.a+n>>>0,n)},Un=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Vn=f(function(u,a){return function(r){var n=Qn(r),t=fn(a-u),e=Un(n);return k((134217728*(1*(67108863&Un(r)))+1*(134217727&e))/9007199254740992*t+u,Qn(n))}}),Xn=e(function(r,n,t,e){for(;;){if(n<1)return k(r,e);var u=t(e),a=u.b;r=l(nn,u.a,r),n=n-1,t=t,e=a}}),rt=f(function(n,r){var t=r;return function(r){return h(Xn,$,n,t,r)}}),nt=f(function(r,n){return r(n)}),tt=lr($),et=f(function(r,n){return k(w(n,{aw:n.aw+1}),Yn)}),ut=function(r){return{$:1,a:r}},at=function(r){return{$:2,a:r}},it=function(r){return at(ut(r))},ft=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),ot=t(function(r,n,t){return d(ft,r,n,t)}),ct={$:0},vt=f(function(r,n){return{$:3,a:r,b:n}}),st=function(r){return{$:2,a:r}},bt=f(function(r,n){var t=k(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return l(vt,e.a,e.b);case 1:switch(t.a.$){case 1:return ut(t.b.a);case 2:return l(vt,t.b.a,t.a.a);case 3:var u=t.a;return l(vt,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return st(t.b.a);case 1:return l(vt,t.a.a,t.b.a);case 3:var a=t.a;return l(vt,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),lt=f(function(r,n){return d(yn,f(function(r,n){var t=n;switch(r.$){case 0:return w(t,{P:l(nn,r.a,t.P)});case 1:return w(t,{P:d(yn,nn,t.P,r.a)});case 3:return w(t,{al:(0,r.a)(t.al)});default:return w(t,{ak:l(bt,t.ak,r.a)})}}),n,r)}),dt=f(function(r,n){return l(lt,r,{P:$,ak:ct,al:(t=n,{$:1,a:t})});var t}),ht=f(function(r,n){return H(d(yn,function(t){return f(function(r,n){return n.push(K(t(r))),n})}(r),[],n))}),$t=function(r){return H(d(yn,f(function(r,n){return d(Q,r.a,r.b,n)}),{},r))},gt=H,pt=f(function(r,n){return $t(p([k("type",gt("function")),k("name",gt(r)),k("args",l(ht,Hn,n))]))}),mt=H,yt=u(function(r,n,t,e,u){return l(pt,"arcTo",p([mt(r),mt(n),mt(t),mt(e),mt(u)]))}),kt=a(function(r,n,t,e,u,a){return l(pt,"bezierCurveTo",p([mt(r),mt(n),mt(t),mt(e),mt(u),mt(a)]))}),wt=f(function(r,n){return l(pt,"lineTo",p([mt(r),mt(n)]))}),At=f(function(r,n){return l(pt,"moveTo",p([mt(r),mt(n)]))}),jt=e(function(r,n,t,e){return l(pt,"quadraticCurveTo",p([mt(r),mt(n),mt(t),mt(e)]))}),Tt=f(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return l(nn,s(yt,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return l(nn,b(kt,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return l(nn,l(wt,f.a,f.b),n);case 3:var o=r.a;return l(nn,l(At,o.a,o.b),n);default:var c=r.a,v=r.b;return l(nn,h(jt,c.a,c.b,v.a,v.b),n)}}),_t=H,Nt=a(function(r,n,t,e,u,a){return l(pt,"arc",p([mt(r),mt(n),mt(t),mt(e),mt(u),_t(a)]))}),Et=t(function(r,n,t){return b(Nt,r,n,t,0,6.283185307179586,!1)}),Lt=e(function(r,n,t,e){return l(pt,"rect",p([mt(r),mt(n),mt(t),mt(e)]))}),xt=q,Ct=z,Pt=f(function(r,n){switch(r.$){case 0:var t=r.a;return l(nn,h(Lt,f=t.a,o=t.b,r.b,r.c),l(nn,l(At,f,o),n));case 1:var e=r.a,u=r.b;return l(nn,d(Et,f=e.a,o=e.b,u),l(nn,l(At,f+u,o),n));case 2:var a=r.a,i=r.b;return d(yn,Tt,l(nn,l(At,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return l(nn,b(Nt,f=c.a,o=c.b,r.b,v,r.d,r.e),l(nn,l(At,f+xt(v),o+Ct(v)),n))}}),qt=f(function(r,n){return $t(p([k("type",gt("field")),k("name",gt(r)),k("value",n)]))}),zt=F,Ot=R,St=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return zt(1e4*r)/100};return n=p(["rgba(",Ot(i(r.a)),"%,",Ot(i(e)),"%,",Ot(i(u)),"%,",Ot((t=a,zt(1e3*t)/1e3)),")"]),l(Wn,"",n)},Ft=function(r){return l(qt,"fillStyle",gt(St(r)))},Mt=f(function(r,n){return l(nn,l(pt,"fill",p([gt(function(r){return r?"evenodd":"nonzero"}(0))])),l(nn,Ft(r),n))}),Bt=l(pt,"stroke",$),Rt=function(r){return l(qt,"strokeStyle",gt(St(r)))},Dt=f(function(r,n){return l(nn,Bt,l(nn,Rt(r),n))}),Gt=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),It=h(Gt,0,0,0,1),Jt=f(function(r,n){switch(r.$){case 0:return l(Mt,It,n);case 1:return l(Mt,r.a,n);case 2:return l(Dt,r.a,n);default:return l(Dt,r.b,l(Mt,r.a,n))}}),Wt=e(function(r,n,t,e){if(1===e.$)return l(pt,"fillText",p([gt(r),mt(n),mt(t)]));var u=e.a;return l(pt,"fillText",p([gt(r),mt(n),mt(t),mt(u)]))}),Yt=u(function(r,n,t,e,u){return l(nn,h(Wt,r.aG,n,t,r.ap),l(nn,Ft(e),u))}),Zt=e(function(r,n,t,e){if(1===e.$)return l(pt,"strokeText",p([gt(r),mt(n),mt(t)]));var u=e.a;return l(pt,"strokeText",p([gt(r),mt(n),mt(t),mt(u)]))}),Ht=u(function(r,n,t,e,u){return l(nn,h(Zt,r.aG,n,t,r.ap),l(nn,Rt(e),u))}),Kt=t(function(r,n,t){var e=n.a5,u=e.a,a=e.b;switch(r.$){case 0:return s(Yt,n,u,a,It,t);case 1:return s(Yt,n,u,a,r.a,t);case 2:return s(Ht,n,u,a,r.a,t);default:return s(Ht,n,u,a,r.b,s(Yt,n,u,a,r.a,t))}}),Qt=t(function(r,n,t){return d(Kt,r,n,t)}),Ut=l(pt,"beginPath",$),Vt=t(function(r,n,t){if(r.$){var e=r.a;return l(Jt,n,d(yn,Pt,l(nn,Ut,t),e))}return d(Qt,n,r.a,t)}),Xt=l(pt,"restore",$),re=l(pt,"save",$),ne=f(function(r,n){return l(nn,Xt,d(Vt,r.al,r.ak,A(r.P,l(nn,re,n))))}),te=$,ee=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ue=f(function(r,n){return l(kr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),ae=yr("canvas"),ie=function(r){return yr(function(r){return"script"==r?"p":r}(r))},fe=t(function(r,n,t){var e,u,a=r.a,i=r.b;return d(ie,"elm-canvas",p([(u=function(r){return d(yn,ne,te,r)}(t),l(ue,"cmds",l(ht,Hn,u)))]),p([l(ae,l(nn,(e=i,l(wr,"height",Jn(e))),l(nn,function(r){return l(wr,"width",Jn(r))}(a),n)),$)]))}),oe=e(function(r,n,t,e){var u=function(r,n,t){return{a:r,b:n,c:t}}(r,n,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(r){var n=r<0?r+1:1<r?r-1:r;return 6*n<1?c+(o-c)*n*6:2*n<1?o:3*n<2?c+(o-c)*(2/3-n)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return h(Gt,l,b,s,e)}),ce=t(function(r,n,t){return h(oe,r,n,t,1)}),ve=function(r){return 3.141592653589793*r/180},se=d(ce,ve(260),.1,.1),be=function(r){return{$:0,a:l(qt,"lineWidth",mt(r))}},le=f(function(r,n){return{$:2,a:r,b:n}}),de=f(function(r,n){return l(le,r,n)}),he=f(function(r,n){return{$:4,a:r,b:n}}),$e=f(function(r,n){return l(he,r,n)}),ge=f(function(r,n){return v(r,30)<0&&v(n,60)<0?30*n+r:-1}),pe=4294967295>>>32-dn,me=_,ye=t(function(r,n,t){for(;;){var e=l(me,pe&n>>>r,t);if(e.$)return l(me,pe&n,e.a);r=r-dn,n=n,t=e.a}}),ke=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;return r<0||-1<v(r,t)?Fn:-1<v(r,En(t))?Sn(l(me,pe&r,a)):Sn(d(ye,e,r,u))}),we=E,Ae=function(r){return[r]},je=N,Te=e(function(r,n,t,e){var u=pe&n>>>r;if(-1<v(u,Tn(e))){if(5===r)return l(we,gn(t),e);var a=pn(h(Te,r-dn,n,t,hn));return l(we,a,e)}var i=l(me,u,e);if(i.$){a=pn(h(Te,r-dn,n,t,Ae(i)));return d(je,u,a,e)}var a=pn(h(Te,r-dn,n,t,i.a));return d(je,u,a,e)}),_e=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=Tn(n.d),i=Tn(r),f=t+(i-a);if(m(i,32)){if(0<v(f>>>dn,1<<e)){var o=e+dn,c=h(Te,o,t,r,Ae(pn(u)));return h(vn,f,o,c,hn)}return h(vn,f,e,h(Te,e,t,r,u),hn)}return h(vn,f,e,u,r)}),Ne=f(function(r,n){return l(_e,l(we,r,n.d),n)}),Ee=f(function(r,n){return n.$?r:n.a}),Le=t(function(u,r,n){var t,a=r.a,i=r.b,e=n.a,f=n.b,o=l(Ee,{a5:k(0,0),a9:0},l(ke,l(ge,a,i),u)).a5,c=o.a,v=o.b,s=function(){if(a){var r=l(Ee,{a5:k(c+10,v),a9:0},l(ke,l(ge,a+1,i),u)).a5,n=k((c+r.a)/2,(v+r.b)/2),t=n.a,e=n.b;return l($e,k(c,v),k(t,e))}return{$:3,a:k(c,v)}}();if(m(a,29)){var b=l(dt,p([be(1.5),it(se),(t=d(ce,ve(188),.3,.8),at(st(t)))]),p([l(de,k(0,0),an(l(Ne,s,e)))]));return k($n,l(Ne,b,f))}return k(l(Ne,s,e),f)}),xe=t(function(r,i,n){var f=r.cN,o=r.b1;return d(t(function(r,n,t){for(;;){if(-1<v(n,f))return t;if(v(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=l(i,k(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),Ce=U,Pe=Ce(0),qe=e(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return l(r,u,l(r,i,l(r,o,l(r,c.a,500<t?d(yn,r,n,kn(v)):h(qe,r,n,t+1,v)))))}return l(r,u,l(r,i,l(r,o,n)))}return l(r,u,l(r,i,n))}return l(r,u,n)}return n}),ze=t(function(r,n,t){return h(qe,r,n,0,t)}),Oe=f(function(t,r){return d(ze,f(function(r,n){return l(nn,t(r),n)}),$,r)}),Se=X,Fe=f(function(n,r){return l(Se,function(r){return Ce(n(r))},r)}),Me=t(function(t,r,e){return l(Se,function(n){return l(Se,function(r){return Ce(l(t,n,r))},e)},r)}),Be=sr,Re=f(function(r,n){var t=n;return tr(l(Se,Be(r),t))});cr.Task={b:Pe,c:t(function(r,n){return l(Fe,function(){return 0},(t=l(Oe,Re(r),n),d(ze,Me(nn),Ce($),t)));var t}),d:t(function(){return Ce(0)}),e:f(function(r,n){return l(Fe,r,n)}),f:Xr};br("Task");var De,Ge={$:4},Ie=Kr({cp:function(r){var n,t=f(function(r,n){return{a5:l(cn,n,(t=d(Zn,ln,ln,function(r){return k(r%30,r/30|0)}(r)),k(10*t.a+5+100,5*t.b+2.5+130))),a9:n};var t}),e=l(nt,l(rt,1800,l(Vn,0,1)),function(r){var n=Qn(l(Kn,0,1013904223));return Qn(l(Kn,n.a+r>>>0,n.b))}(jn(1e5*r)));return k({aw:0,a6:l(Cn,t,(n=e.a).b?d(Nn,n,$,0):$n)},Yn)},cT:function(){return tt},cZ:et,c$:function(r){return d(fe,k(500,500),$,l(nn,l(dt,p([it(se)]),p([d(ot,k(0,0),500,500)])),an(d(xe,{b1:30,cN:60},Le(r.a6),k($n,$n)).b)))}});De={Examples:{JoyDivision:{init:Ie(Ge)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?P(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,De):r.Elm=De}(this);