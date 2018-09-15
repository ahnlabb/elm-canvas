!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function u(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function e(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function i(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function w(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function A(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function p(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function m(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function y(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}var k={$:0};function b(n,r){return{$:1,a:n,b:r}}var o=u(b);function j(n){for(var r=k,t=n.length;t--;)r=b(n[t],r);return r}function f(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}function v(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(!n.$)return(t=v(n.a,r.a))?t:(t=v(n.b,r.b))?t:v(n.c,r.c);for(;n.b&&r.b&&!(t=v(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var c=0;function x(n,r){return{a:n,b:r}}function l(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}var s=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),d=u(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,x(t,r)});function h(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var g=Math.cos,$=Math.sin;var _=Math.ceil,T=Math.floor,N=Math.round,B=Math.log;var E=u(function(n,r){return r.join(n)});function L(n){return n+""}var M=u(function(n,r){return C(n,S(r))});function C(n,r){switch(n.$){case 3:return"boolean"==typeof r?$r(r):P("a BOOL",r);case 2:return"number"!=typeof r?P("an INT",r):-2147483647<r&&r<2147483647&&(0|r)===r?$r(r):!isFinite(r)||r%1?P("an INT",r):$r(r);case 4:return"number"==typeof r?$r(r):P("a FLOAT",r);case 6:return"string"==typeof r?$r(r):r instanceof String?$r(r+""):P("a STRING",r);case 9:return null===r?$r(n.c):P("null",r);case 5:return $r(D(r));case 7:return Array.isArray(r)?F(n.b,r,j):P("a LIST",r);case 8:return Array.isArray(r)?F(n.b,r,O):P("an ARRAY",r);case 10:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return P("an OBJECT with a field named `"+t+"`",r);var e=C(n.b,r[t]);return Zn(e)?e:gr(w(mr,t,e.a));case 11:var u=n.e;if(!Array.isArray(r))return P("an ARRAY",r);if(r.length<=u)return P("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=C(n.b,r[u]);return Zn(e)?e:gr(w(yr,u,e.a));case 12:if("object"!=typeof r||null===r||Array.isArray(r))return P("an OBJECT",r);var a=k;for(var i in r)if(r.hasOwnProperty(i)){e=C(n.b,r[i]);if(!Zn(e))return gr(w(mr,i,e.a));a=b(x(i,e.a),a)}return $r(ur(a));case 13:for(var o=n.f,f=n.g,c=0;c<f.length;c++){e=C(f[c],r);if(!Zn(e))return e;o=o(e.a)}return $r(o);case 14:e=C(n.b,r);return Zn(e)?C(n.h(e.a),r):e;case 15:for(var s=k,v=n.g;v.b;v=v.b){e=C(v.a,r);if(Zn(e))return e;s=b(e.a,s)}return gr(wr(ur(s)));case 1:return gr(w(pr,n.a,D(r)));case 0:return $r(n.a)}}function F(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=C(n,r[a]);if(!Zn(i))return gr(w(yr,a,i.a));u[a]=i.a}return $r(t(u))}function O(r){return w(lr,r.length,function(n){return r[n]})}function P(n,r){return gr(w(pr,"Expecting "+n,D(r)))}function q(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return n.c===r.c;case 7:case 8:case 12:return q(n.b,r.b);case 10:return n.d===r.d&&q(n.b,r.b);case 11:return n.e===r.e&&q(n.b,r.b);case 13:return n.f===r.f&&z(n.g,r.g);case 14:return n.h===r.h&&q(n.b,r.b);case 15:return z(n.g,r.g)}}function z(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!q(n[e],r[e]))return!1;return!0}function D(n){return n}function S(n){return n}var R=t(function(n,r,t){return t[n]=S(r),t});D(null);function I(n){return{$:0,a:n}}function U(n){return{$:2,b:n,c:null}}var Y=u(function(n,r){return{$:3,b:n,d:r}});var G=0;function H(n){var r={$:0,e:G++,f:n,g:null,h:[]};return K(r),r}function J(r){return U(function(n){n(I(H(r)))})}function Q(n,r){n.h.push(r),K(n)}var Z=u(function(r,t){return U(function(n){Q(r,t),n(I(c))})});var W=!1,X=[];function K(n){if(X.push(n),!W){for(W=!0;n=X.shift();)V(n);W=!1}}function V(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,K(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function nn(n,r,t,e,u,a){var i=w(M,n,D(r?r.flags:void 0));Zn(i)||h(2);var o={},f=(i=t(i.a)).a,c=a(v,f),s=function(n,r){var t;for(var e in rn){var u=rn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=en(u,r)}return t}(o,v);function v(n,r){c(f=(i=w(e,n,f)).a,r),fn(o,i.b,u(f))}return fn(o,i.b,u(f)),s?{ports:s}:{}}var rn={};function tn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function en(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(t){return w(Y,f,{$:5,b:function(n){var r=n.a;return 0===n.$?A(a,e,r,t):i&&o?p(u,e,r.i,r.j,t):A(u,e,i?r.i:r.j,t)}})}return e.h=H(w(Y,f,n.b))}var un=u(function(r,t){return U(function(n){r.g(t),n(I(c))})}),an=u(function(n,r){return w(Z,n.h,{$:0,a:r})});function on(r){return function(n){return{$:1,k:r,l:n}}}function fn(n,r,t){var e={};for(var u in cn(!0,r,e,null),cn(!1,t,e,null),n)Q(n[u],{$:"fx",a:e[u]||{i:k,j:k}})}function cn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return w(n?rn[r].e:rn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:k,j:k},n?t.i=b(r,t.i):t.j=b(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)cn(n,i.a,t,e);return;case 3:return void cn(n,r.o,t,{p:r.n,q:e})}}var sn,vn="undefined"!=typeof document?document:{};function bn(n,r){n.appendChild(r)}function ln(n){return{$:0,a:n}}var dn=u(function(a,i){return u(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:pn(n),e:t,f:a,b:e}})})(void 0);u(function(a,i){return u(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:pn(n),e:t,f:a,b:e}})})(void 0);var hn=u(function(n,r){return{$:"a2",n:n,o:r}}),gn=u(function(n,r){return{$:"a3",n:n,o:r}});var $n;function pn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?mn(i,u,a):i[u]=a}else"className"===u?mn(r,u,S(a)):r[u]=S(a)}return r}function mn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function yn(n,r){var t=n.$;if(5===t)return yn(n.k||(n.k=n.m()),r);if(0===t)return vn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=yn(e,a)).elm_event_node_ref=a,i}if(3===t)return wn(i=n.h(n.g),r,n.d),i;var i=n.f?vn.createElementNS(n.f,n.c):vn.createElement(n.c);sn&&"a"==n.c&&i.addEventListener("click",sn(i)),wn(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)bn(i,yn(1===t?o[f]:o[f].b,r));return i}function wn(n,r,t){for(var e in t){var u=t[e];"a1"===e?An(n,u):"a0"===e?xn(n,r,u):"a3"===e?kn(n,u):"a4"===e?jn(n,u):("value"!==e||"checked"!==e||n[e]!==u)&&(n[e]=u)}}function An(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function kn(n,r){for(var t in r){var e=r[t];e?n.setAttribute(t,e):n.removeAttribute(t)}}function jn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function xn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=_n(r,a),n.addEventListener(u,i,$n&&{passive:Ur(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){$n=!0}}))}catch(n){}function _n(s,n){function v(n){var r=v.q,t=C(r.a,n);if(Zn(t)){for(var e,u=Ur(r),a=t.a,i=u?u<3?a.a:a.Q:a,o=1==u?a.b:3==u&&a.bu,f=(o&&n.stopPropagation(),(2==u?a.b:3==u&&a.bo)&&n.preventDefault(),s);e=f.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);f=f.p}f(i,o)}}return v.q=n,v}function Tn(n,r){return n.$==r.$&&q(n.a,r.a)}function Nn(n,r){var t=[];return En(n,r,t,0),t}function Bn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function En(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Bn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var s=[];return En(n.k,r.k,s,0),void(0<s.length&&Bn(t,1,e,s));case 4:for(var v=n.j,b=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof v?v=[v,d.j]:v.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&v.length!==b.length?void Bn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(v,b):v===b)||Bn(t,2,e,b),void En(d,h,t,e+1));case 0:return void(n.a!==r.a&&Bn(t,3,e,r.a));case 1:return void Ln(n,r,t,e,Cn);case 2:return void Ln(n,r,t,e,Fn);case 3:if(n.h!==r.h)return void Bn(t,0,e,r);var g=Mn(n.d,r.d);g&&Bn(t,4,e,g);var $=r.i(n.g,r.g);return void($&&Bn(t,5,e,$))}}}function Ln(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Mn(n.d,r.d);a&&Bn(t,4,e,a),u(n,r,t,e)}else Bn(t,0,e,r)}function Mn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Tn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=Mn(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function Cn(n,r,t,e){var u=n.e,a=r.e,i=u.length,o=a.length;o<i?Bn(t,6,e,{v:o,i:i-o}):i<o&&Bn(t,7,e,{v:i,e:a});for(var f=i<o?i:o,c=0;c<f;c++){var s=u[c];En(s,a[c],t,++e),e+=s.b||0}}function Fn(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,s=f.length,v=0,b=0,l=e;v<c&&b<s;){var d=(_=o[v]).a,h=(T=f[b]).a,g=_.b,$=T.b;if(d!==h){var p=o[v+1],m=f[b+1];if(p)var y=p.a,w=p.b,A=h===y;if(m)var k=m.a,j=m.b,x=d===k;if(x&&A)En(g,j,u,++l),Pn(a,u,d,$,b,i),l+=g.b||0,qn(a,u,d,w,++l),l+=w.b||0,v+=2,b+=2;else if(x)l++,Pn(a,u,h,$,b,i),En(g,j,u,l),l+=g.b||0,v+=1,b+=2;else if(A)qn(a,u,d,g,++l),l+=g.b||0,En(w,$,u,++l),l+=w.b||0,v+=2,b+=1;else{if(!p||y!==k)break;qn(a,u,d,g,++l),Pn(a,u,h,$,b,i),l+=g.b||0,En(w,j,u,++l),l+=w.b||0,v+=2,b+=2}}else En(g,$,u,++l),l+=g.b||0,v++,b++}for(;v<c;){var _;qn(a,u,(_=o[v]).a,g=_.b,++l),l+=g.b||0,v++}for(;b<s;){var T,N=N||[];Pn(a,u,(T=f[b]).a,T.b,void 0,N),b++}(0<u.length||0<i.length||N)&&Bn(t,8,e,{w:u,x:i,y:N})}var On="_elmW6BL";function Pn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return En(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}Pn(n,r,t+On,e,u,a)}function qn(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return En(e,a.z,i,u),void Bn(r,9,u,{w:i,A:a})}qn(n,r,t+On,e,u)}else{var o=Bn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function zn(n,r,t,e){!function n(r,t,e,u,a,i,o){var f=e[u];var c=f.r;for(;c===a;){var s=f.$;if(1===s)zn(r,t.k,f.s,o);else if(8===s){f.t=r,f.u=o;var v=f.s.w;0<v.length&&n(r,t,v,0,a,i,o)}else if(9===s){f.t=r,f.u=o;var b=f.s;if(b){b.A.s=r;var v=b.w;0<v.length&&n(r,t,v,0,a,i,o)}}else f.t=r,f.u=o;if(!(f=e[++u])||(c=f.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var g=r.childNodes;for(var $=0;$<h.length;$++){var p=1===l?h[$]:h[$].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=n(g[$],p,e,u,a,m,o),!(f=e[u])||(c=f.r)>i))return u;a=m}return u}(n,r,t,0,0,r.b,e)}function Dn(n,r,t,e){return 0===t.length?n:(zn(n,r,t,e),Sn(n,t))}function Sn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Rn(u,e);u===n&&(n=a)}return n}function Rn(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=yn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return wn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Sn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(yn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Sn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=vn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;bn(t,2===a.c?a.s:yn(a.z,r.u))}return t}(t.y,r);n=Sn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],o=i.A,f=2===o.c?o.s:yn(o.z,r.u);n.insertBefore(f,n.childNodes[i.r])}e&&bn(n,e);return n}(n,r);case 5:return r.s(n);default:h(10)}}function In(n){if(3===n.nodeType)return ln(n.textContent);if(1!==n.nodeType)return ln("");for(var r=k,t=n.attributes,e=t.length;e--;){var u=t[e];r=b(w(gn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=k,o=n.childNodes;for(e=o.length;e--;)i=b(In(o[e]),i);return A(dn,a,r,i)}var Un=e(function(r,n,t,o){return nn(n,o,r.cC,r.c3,r.cZ,function(e,n){var u=r.c5,a=o.node,i=In(a);return Gn(n,function(n){var r=u(n),t=Nn(i,r);a=Dn(a,i,t,e),i=r})})}),Yn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){setTimeout(n,1e3/60)};function Gn(t,e){e(t);var u=0;function a(){u=1===u?0:(Yn(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&Yn(a),u=2)}}var Hn={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Jn=o,Qn=N,Zn=function(n){return!n.$},Wn=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Xn=_,Kn=u(function(n,r){return B(r)/B(n)}),Vn=Xn(w(Kn,2,32)),nr=[],rr=p(Wn,0,Vn,nr,nr),tr=d,er=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=w(n,t.a,r);n=u,r=a,t=e}}),ur=function(n){return A(er,Jn,k,n)},ar=u(function(n,r){for(;;){var t=w(tr,32,n),e=t.b,u=w(Jn,{$:0,a:t.a},r);if(!e.b)return ur(u);n=e,r=u}}),ir=u(function(n,r){for(;;){var t=Xn(r/32);if(1===t)return w(tr,32,n).a;n=w(ar,n,k),r=t}}),or=T,fr=u(function(n,r){return 0<v(n,r)?n:r}),cr=function(n){return n.length},sr=u(function(n,r){if(r.k){var t=32*r.k,e=or(w(Kn,32,t-1)),u=n?ur(r.o):r.o,a=w(ir,u,r.k);return p(Wn,cr(r.n)+t,w(fr,5,e*Vn),a,r.n)}return p(Wn,cr(r.n),Vn,nr,r.n)}),vr=s,br=a(function(n,r,t,e,u){for(;;){if(r<0)return w(sr,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:A(vr,32,r,n)};n=n,r=r-32,t=t,e=w(Jn,a,e),u=u}}),lr=u(function(n,r){if(0<n){var t=n%32;return m(br,r,n-t-32,n,k,A(vr,t,n-t,r))}return rr}),dr=function(n){return{$:0,a:n}},hr={$:1},gr=function(n){return{$:1,a:n}},$r=function(n){return{$:0,a:n}},pr=u(function(n,r){return{$:3,a:n,b:r}}),mr=u(function(n,r){return{$:0,a:n,b:r}}),yr=u(function(n,r){return{$:1,a:n,b:r}}),wr=function(n){return{$:2,a:n}},Ar=L,kr=u(function(n,r){return w(E,n,f(r))}),jr=function(n){return{$:2,m:n}}(k),xr=u(function(n,r){return{$:0,a:n,b:r}}),_r=function(n){var r=n.b;return w(xr,1664525*n.a+r>>>0,r)},Tr=function(n){var r=_r(w(xr,0,1013904223));return _r(w(xr,r.a+n>>>0,r.b))},Nr=function(n){return{$:1,a:n}},Br=t(function(n,r,t){return{bf:t,b3:r,b6:n}}),Er=I,Lr=Er(A(Br,k,hr,0)),Mr=function(n){return n},Cr=Er(0),Fr=e(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var f=o.a,c=o.b;if(c.b){var s=c.b;return w(n,u,w(n,i,w(n,f,w(n,c.a,500<t?A(er,n,r,ur(s)):p(Fr,n,r,t+1,s)))))}return w(n,u,w(n,i,w(n,f,r)))}return w(n,u,w(n,i,r))}return w(n,u,r)}return r}),Or=t(function(n,r,t){return p(Fr,n,r,0,t)}),Pr=u(function(t,n){return A(Or,u(function(n,r){return w(Jn,t(n),r)}),k,n)}),qr=Y,zr=u(function(r,n){return w(qr,function(n){return Er(r(n))},n)}),Dr=t(function(t,n,e){return w(qr,function(r){return w(qr,function(n){return Er(w(t,r,n))},e)},n)}),Sr=function(n){return A(Or,Dr(Jn),Er(k),n)},Rr=un,Ir=u(function(n,r){var t=r;return J(w(qr,Rr(n),t))});rn.Task=tn(Cr,t(function(n,r){return w(zr,function(){return 0},Sr(w(Pr,Ir(n),r)))}),t(function(){return Er(0)}),u(function(n,r){return w(zr,n,r)}));on("Task");var Ur=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Yr=U(function(n){n(I(Date.now()))}),Gr=U(function(n){var r=requestAnimationFrame(function(){n(I(Date.now()))});return function(){cancelAnimationFrame(r)}}),Hr=an,Jr=function(t){return U(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(I(c))})},Qr=J,Zr=t(function(n,t,r){var e=r.b3,u=r.bf,a=x(e,t);if(1!==a.a.$)return a.b.b?Er(A(Br,t,e,u)):w(qr,function(){return Lr},Jr(a.a.a));if(a.b.b){return w(qr,function(r){return w(qr,function(n){return Er(A(Br,t,dr(r),n))},Yr)},Qr(w(qr,Hr(n),Gr)))}return Lr}),Wr=Mr,Xr=t(function(r,t,n){var e=n.b6,u=n.bf,a=function(n){return w(Rr,r,n.$?(0,n.a)(t-u):(0,n.a)(Wr(t)))};return w(qr,function(n){return w(qr,function(){return Er(A(Br,e,dr(n),t))},Sr(w(Pr,a,e)))},Qr(w(qr,Hr(r),Gr)))}),Kr=t(function(n,r,t){return n(r(t))});rn["Browser.AnimationManager"]=tn(Lr,Zr,Xr,0,u(function(n,r){return r.$?Nr(w(Kr,n,r.a)):{$:0,a:w(Kr,n,r.a)}}));var Vr,nt=on("Browser.AnimationManager"),rt=function(n){return nt(Nr(n))},tt=function(n){return l(n,{ar:n.ar+1})},et=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},ut=u(function(a,i){return function(n){var r,t=_r(n),e=(r=i-a)<0?-r:r,u=et(t);return x((134217728*(1*(67108863&et(n)))+1*(134217727&u))/9007199254740992*e+a,_r(t))}}),at=w(ut,100,400),it=u(function(n,r){var t=r.b;return x(n(r.a),t)}),ot=u(function(t,i){return function(n){var r=v(t,i)<0?x(t,i):x(i,t),e=r.a,u=r.b-e+1;if(u-1&u){var a=(-u>>>0)%u>>>0;return function(n){for(;;){var r=et(n),t=_r(n);if(0<=v(r,a))return x(r%u+e,t);n=t}}(n)}return x(((u-1&et(n))>>>0)+e,_r(n))}}),ft=u(function(n,r){return n(r)}),ct=Mr,st=Mr,vt=function(n){return n},bt=function(n){return 3.141592653589793*n/180},lt=function(n){return n},dt=u(function(n,r){var t=lt(r),e=t.b;return ct(x(n(t.a),n(e)))}),ht=t(function(n,r,t){return r(n(t))}),gt=function(n){return n},$t=u(function(n,r){var t=gt(n),e=t.a,u=t.b,a=vt(r);return st(x(a.a+e,a.b+u))}),pt=u(function(n,r){return w($t,r,n)}),mt=function(n){return n},yt=Mr,wt=u(function(n,r){var t=mt(r),e=t.a,u=t.b,a=mt(n);return yt(x(e-a.a,u-a.b))}),At=g,kt=$,jt=u(function(n,r){return w(ht,wt(n),w(ht,function(n){var u=kt(n),a=At(n);return function(n){var r=gt(n),t=r.a,e=r.b;return yt(x(t*a-e*u,e*a+t*u))}}(r),pt(n)))}),xt=u(function(n,r){return dt(w(jt,n,r))}),_t=function(n){return dt($t(n))},Tt=u(function(n,r){var t=gt(r);return yt(x(t.a*n,t.b*n))}),Nt=function(n){var r=function(n){var r=n.F,t=n.B,e=n.P,u=w(ft,w(ut,0,1),t),a=u.b,i=.98<u.a,o=lt(r),f=o.a;if(i){var c=w(it,Tr,w(ft,w(ot,0,1e4),a)),s=c.a,v=c.b,b=w(it,Tr,w(ft,w(ot,0,1e4),v)),l=b.a,d=b.b,h=w(ft,w(ut,-45,45),d),g=h.a,$=h.b,p=w(ft,w(ut,-45,45),$),m=p.a,y=p.b;return x(j([{P:e-10,F:A(xt,f,bt(g),r),B:s},{P:e-10,F:A(xt,f,bt(m),r),B:l}]),y)}return x(k,a)}(n),t=r.a,e=r.b,u=w(ft,w(ot,0,10),e),a=u.a,i=u.b,o=n.F,f=n.P,c=w(Tt,.8,function(n){var r=lt(n);return w(wt,r.a,r.b)}(o)),s={P:f-a,F:w(_t,c,o),B:i};return function(n){var r=function(n){return n.b}(n.F),t=vt(r),e=t.a,u=t.b;return-1<v(e,480)||v(e,20)<1||0<v(u,500)||v(u,20)<1}(s)||f<=0?t:w(Jn,s,t)},Bt=u(function(n,r){return r.b?A(Or,Jn,r,n):n}),Et=u(function(n,r){return A(Or,Bt,k,w(Pr,n,r))}),Lt=function(n){return!n.b},Mt=u(function(n,r){return w(it,tt,r.ar<2?x(r,jr):Lt(r.M)?function(n){var r=w(ft,at,n.B),t=r.a,e=r.b,u=st(x(t,495)),a=st(x(t,500)),i=w(it,Tr,w(ft,w(ot,0,1e4),e)),o=i.a,f=i.b,c=w(ft,w(ot,Qn(350),500),f),s=c.b;return x(l(n,{M:j([{P:c.a,F:ct(x(a,u)),B:o}]),B:s}),jr)}(r):x(l(r,{M:w(Et,Nt,r.M)}),jr))}),Ct=function(n){return{$:1,a:n}},Ft=u(function(n,r){return{$:3,a:n,b:r}}),Ot=u(function(r,n){var t=n;return l(t,{U:function(){var n=t.U;switch(n.$){case 0:case 1:return Ct(r);case 2:return w(Ft,r,n.a);default:return w(Ft,r,n.b)}}()})}),Pt=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),qt=t(function(n,r,t){return A(Pt,n,r,t)}),zt={$:0},Dt={aH:hr,aI:hr,at:{aL:hr,aM:hr,aN:hr,aO:hr,aP:hr,aQ:hr},aY:hr},St=function(n){return{U:zt,ap:(r=n,{$:1,a:r}),x:Dt,az:k};var r},Rt=u(function(n,r){return D(A(er,function(t){return u(function(n,r){return r.push(S(t(n))),r})}(n),[],r))}),It=function(n){return D(A(er,u(function(n,r){return A(R,n.a,n.b,r)}),{},n))},Ut=D,Yt=u(function(n,r){return It(j([x("type",Ut("function")),x("name",Ut(n)),x("args",w(Rt,Mr,r))]))}),Gt=D,Ht=D,Jt=i(function(n,r,t,e,u,a){return w(Yt,"arc",j([Ht(n),Ht(r),Ht(t),Ht(e),Ht(u),Gt(a)]))}),Qt=a(function(n,r,t,e,u){return w(Yt,"arcTo",j([Ht(n),Ht(r),Ht(t),Ht(e),Ht(u)]))}),Zt=i(function(n,r,t,e,u,a){return w(Yt,"bezierCurveTo",j([Ht(n),Ht(r),Ht(t),Ht(e),Ht(u),Ht(a)]))}),Wt=t(function(n,r,t){return y(Jt,n,r,t,0,6.283185307179586,!1)}),Xt=u(function(n,r){return w(Yt,"lineTo",j([Ht(n),Ht(r)]))}),Kt=u(function(n,r){return w(Yt,"moveTo",j([Ht(n),Ht(r)]))}),Vt=e(function(n,r,t,e){return w(Yt,"quadraticCurveTo",j([Ht(n),Ht(r),Ht(t),Ht(e)]))}),ne=e(function(n,r,t,e){return w(Yt,"rect",j([Ht(n),Ht(r),Ht(t),Ht(e)]))}),re=u(function(n,r){switch(n.$){case 0:var t=n.a;return w(Jn,p(ne,d=t.a,h=t.b,n.b,n.c),w(Jn,w(Kt,d,h),r));case 1:var e=n.a,u=n.b;return w(Jn,A(Wt,d=e.a,h=e.b,u),w(Jn,w(Kt,d+u,h),r));case 2:var a=n.a,i=n.c;return w(Jn,y(Jt,d=a.a,h=a.b,n.b,i,n.d,n.e),w(Jn,w(Kt,d+At(i),h+kt(i)),r));case 3:var o=n.a,f=n.b;return w(Jn,m(Qt,d=o.a,h=o.b,f.a,f.b,n.c),r);case 4:var c=n.a,s=n.b,v=n.c;return w(Jn,y(Zt,c.a,c.b,s.a,s.b,d=v.a,h=v.b),r);case 5:var b=n.a;return w(Jn,w(Xt,d=b.a,h=b.b),r);case 6:var l=n.a;return w(Jn,w(Kt,d=l.a,h=l.b),r);default:var d,h,g=n.a,$=n.b;return w(Jn,p(Vt,g.a,g.b,d=$.a,h=$.b),r)}}),te=u(function(n,r){return It(j([x("type",Ut("field")),x("name",Ut(n)),x("value",r)]))}),ee=L,ue=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return Qn(1e4*n)/100};return r=j(["rgba(",ee(i(n.a)),"%,",ee(i(e)),"%,",ee(i(u)),"%,",ee((t=a,Qn(1e3*t)/1e3)),")"]),w(kr,"",r)},ae=function(n){return w(te,"fillStyle",Ut(ue(n)))},ie=u(function(n,r){return w(Jn,w(Yt,"fill",j([Ut(function(n){return n?"evenodd":"nonzero"}(0))])),w(Jn,ae(n),r))}),oe=w(Yt,"stroke",k),fe=function(n){return w(te,"strokeStyle",Ut(ue(n)))},ce=u(function(n,r){return w(Jn,oe,w(Jn,fe(n),r))}),se=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),ve=p(se,0,0,0,1),be=u(function(n,r){switch(n.$){case 0:return w(ie,ve,r);case 1:return w(ie,n.a,r);case 2:return w(ce,n.a,r);default:return w(ce,n.b,w(ie,n.a,r))}}),le=e(function(n,r,t,e){if(1===e.$)return w(Yt,"fillText",j([Ut(n),Ht(r),Ht(t)]));var u=e.a;return w(Yt,"fillText",j([Ut(n),Ht(r),Ht(t),Ht(u)]))}),de=a(function(n,r,t,e,u){return w(Jn,p(le,n.bv,r,t,n.x.au),w(Jn,ae(e),u))}),he=e(function(n,r,t,e){if(1===e.$)return w(Yt,"strokeText",j([Ut(n),Ht(r),Ht(t)]));var u=e.a;return w(Yt,"strokeText",j([Ut(n),Ht(r),Ht(t),Ht(u)]))}),ge=a(function(n,r,t,e,u){return w(Jn,p(he,n.bv,r,t,n.x.au),w(Jn,fe(e),u))}),$e=t(function(n,r,t){var e=r,u=e.bY,a=u.a,i=u.b;switch(n.$){case 0:return m(de,e,a,i,ve,t);case 1:return m(de,e,a,i,n.a,t);case 2:return m(ge,e,a,i,n.a,t);default:return m(ge,e,a,i,n.b,m(de,e,a,i,n.a,t))}}),pe=u(function(n,r){return r.$?hr:dr(n(r.a))}),me=u(function(n,r){return r.$?n:r.a}),ye=t(function(n,r,t){return w(me,t,w(pe,function(n){return r(n)},n))}),we=t(function(n,r,t){return A(ye,n,function(n){return w(Jn,r(n),t)},t)}),Ae=function(n){switch(n){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}},ke=function(n){switch(n){case 0:return"top";case 1:return"hanging";case 2:return"middle";case 3:return"alphabetic";case 4:return"ideographic";default:return"bottom"}},je=function(n){return w(te,"font",Ut(n))},xe=function(n){return w(te,"textAlign",Ut(n))},_e=function(n){return w(te,"textBaseline",Ut(n))},Te=u(function(r,n){var t=u(function(n,r){return Ar(n)+"px "+r}),e=function(){var n=x(r.aZ,r.aG);if(n.a.$){if(n.b.$){return hr}return dr(w(t,20,n.b.a))}if(n.b.$){return dr(w(t,n.a.a,"sans-serif"))}return dr(w(t,n.a.a,n.b.a))}();return A(we,r.aD,w(Kr,_e,ke),A(we,r.aC,w(Kr,xe,Ae),A(we,e,je,n)))}),Ne=t(function(n,r,t){return A($e,n,r,w(Te,r.x,t))}),Be=w(Yt,"beginPath",k),Ee=t(function(n,r,t){if(n.$){var e=n.a;return w(be,r,A(er,re,w(Jn,Be,t),e))}return A(Ne,r,n.a,t)}),Le=function(n){switch(n){case 0:return"source-over";case 1:return"source-in";case 2:return"source-out";case 3:return"source-atop";case 4:return"destination-over";case 5:return"destination-in";case 6:return"destination-out";case 7:return"destination-atop";case 8:return"lighter";case 9:return"copy";case 10:return"xor";case 11:return"multiply";case 12:return"screen";case 13:return"overlay";case 14:return"darken";case 15:return"lighten";case 16:return"color-dodge";case 17:return"color-burn";case 18:return"hard-light";case 19:return"soft-light";case 20:return"difference";case 21:return"exclusion";case 22:return"hue";case 23:return"saturation";case 24:return"color";default:return"luminosity"}},Me=function(n){switch(n){case 0:return"butt";case 1:return"round";default:return"square"}},Ce=function(n){switch(n){case 0:return"bevel";case 1:return"round";default:return"miter"}},Fe=function(n){return w(te,"lineCap",Ut(n))},Oe=function(n){return w(te,"lineDashOffset",Ht(n))},Pe=function(n){return w(te,"lineJoin",Ut(n))},qe=function(n){return w(te,"lineWidth",Ht(n))},ze=function(n){return w(te,"miterLimit",Ht(n))},De=function(n){return w(Yt,"setLineDash",j([w(Rt,Ht,n)]))},Se=u(function(n,r){return A(we,n.aM,De,A(we,n.aQ,ze,A(we,n.aP,qe,A(we,n.aO,w(Kr,Pe,Ce),A(we,n.aN,Oe,A(we,n.aL,w(Kr,Fe,Me),r))))))}),Re=u(function(n,r){var t=n.bB,e=n.bR,u=e.a,a=e.b;return w(Jn,w(te,"shadowBlur",Ht(n.bz)),w(Jn,function(n){return w(te,"shadowColor",Ut(ue(n)))}(t),w(Jn,function(n){return w(te,"shadowOffsetX",Ht(n))}(u),w(Jn,function(n){return w(te,"shadowOffsetY",Ht(n))}(a),r))))}),Ie=function(n){return w(te,"globalAlpha",Ht(n))},Ue=function(n){return w(te,"globalCompositeOperation",Ut(n))},Ye=u(function(n,r){return w(Se,n.at,A(we,n.aI,w(Kr,Ue,Le),A(we,n.aH,Ie,A(ye,n.aY,function(n){return w(Re,n,r)},r))))}),Ge=u(function(n,r){return w(Yt,"scale",j([Ht(n),Ht(r)]))}),He=i(function(n,r,t,e,u,a){return w(Yt,"transform",j([Ht(n),Ht(r),Ht(t),Ht(e),Ht(u),Ht(a)]))}),Je=u(function(n,r){return w(Yt,"translate",j([Ht(n),Ht(r)]))}),Qe=u(function(n,r){return A(er,u(function(n,r){return w(Jn,function(){switch(n.$){case 0:return function(n){return w(Yt,"rotate",j([Ht(n)]))}(n.a);case 1:return w(Ge,n.a,n.b);case 2:return w(Je,n.a,n.b);default:return y(He,n.a,n.b,n.c,n.d,n.e,n.f)}}(),r)}),r,n)}),Ze=w(Yt,"restore",k),We=w(Yt,"save",k),Xe=u(function(n,r){return w(Jn,Ze,A(Ee,n.ap,n.U,w(Qe,n.az,w(Ye,n.x,w(Jn,We,r)))))}),Ke=k,Ve=u(function(n,r){return w(hn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),nu=dn("canvas"),ru=function(n){return dn(function(n){return"script"==n?"p":n}(n))},tu=t(function(n,r,t){var e,u,a=n.a,i=n.b;return A(ru,"elm-canvas",j([(u=function(n){return A(er,Xe,Ke,n)}(t),w(Ve,"cmds",w(Rt,Mr,u)))]),j([w(nu,w(Jn,(e=i,w(gn,"height",Ar(e))),w(Jn,function(n){return w(gn,"width",Ar(n))}(a),r)),k)]))}),eu=u(function(n,r){var t=r.x;return l(r,{x:l(t,{at:n(t.at)})})}),uu=u(function(r,n){return w(eu,function(n){return l(n,{aP:dr(r)})},n)}),au=function(n){return{$:2,a:n}},iu=u(function(r,n){var t=n;return l(t,{U:function(){var n=t.U;switch(n.$){case 0:return au(r);case 1:return w(Ft,n.a,r);case 2:return au(r);default:return w(Ft,n.a,r)}}()})}),ou=function(n){var r,t=n.P,e=lt(n.F),u=e.b;return w(iu,ve,w(uu,30*t/500,St(j([(r=vt(e.a),{$:6,a:r}),function(n){return{$:5,a:n}}(vt(u))]))))},fu=e(function(n,r,t,e){return p(se,n,r,t,e)}),cu={$:4},su=Un({cC:function(n){return x({M:k,ar:0,B:Tr(Qn(1e4*n))},jr)},cZ:function(){return rt(Mr)},c3:Mt,c5:function(n){return A(tu,x(500,500),k,Lt(n.M)?j([w(Ot,p(fu,255,255,255,.05),St(j([A(qt,x(0,0),500,500)])))]):w(Jn,w(Ot,p(fu,255,255,255,.008),St(j([A(qt,x(0,0),500,500)]))),w(Pr,ou,n.M)))}});Vr={Examples:{Trees:{init:su(cu)(0)}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?h(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Vr):n.Elm=Vr}(this);