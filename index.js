!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserList=t():e.UserList=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}([function(e,t,r){"use strict";r(1)},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.i,n,""]]);var o={sourceMap:!1,hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(t=e.exports=r(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);",""]),t.push([e.i,'@charset "UTF-8";:root{--green-color:#006984;--blue-color:#0054a2;--gray-color:#e6e8ea}::-moz-selection{background:var(--blue-color);color:#fff;text-shadow:none}::selection{background:var(--blue-color);color:#fff;text-shadow:none}html{box-sizing:border-box;font-family:Open Sans,sans-serif;font-weight:400;font-size:18px;line-height:1.45}*,:after,:before{box-sizing:inherit}body{margin:0;padding:0}body,ol,p,ul{font-size:1rem}p{margin-top:.3em;margin-bottom:.1em}.next-bg+p{padding:1em;background-color:var(--gray-color)}hr{border:0;border-top:1px solid #ccc}hr,hr.thick{display:block;height:1px;margin:1rem 0;padding:0}hr.thick{border:0;border-top:1rem solid #ccc}ol,ul{margin:0;padding-left:1rem}ol{counter-reset:ol-li;padding-left:0}ol>li{position:relative;margin:0 0 0 1.75em;list-style:none;padding-bottom:.2em}ol>li:before{content:counter(ol-li);counter-increment:ol-li;position:absolute;top:.1em;left:-1.75em;width:1.5em;height:1.5em;border-radius:50%;font-size:.85em;font-weight:700;text-align:center;color:#fff;background:var(--blue-color)}a{text-decoration:none;color:var(--green-color)}a:visited{color:var(--blue-color)}a:hover{color:inherit}@media print{a[href]:after{content:" (" attr(href) ")"}}a:before{content:"→ "}a[href^="mailto:"]:before,a[href^="slack:"]:before,a[href^="tel:"]:before,a[href^=http]:before{display:none}img{max-width:100%;height:auto;margin:1em 0}blockquote{font-weight:700;color:var(--green-color);line-height:1.7;margin:2rem}h1,h2,h3,h4,h5,h6{font-weight:700;margin-top:.3em;margin-bottom:.1em}h1{font-size:1.2rem;margin-bottom:2em}h2{font-size:1.05rem}h2,h3{margin-top:1em}h3{font-size:.95rem;margin-bottom:.3em}h1,h3{letter-spacing:.1em;text-transform:uppercase}code,pre{background-color:var(--gray-color);border-radius:.2em;font-size:85%}code{margin:0;padding:.2em .4em}pre{padding:1em;overflow:auto;font-size:85%;line-height:1.45}.content{padding-top:1.5rem;margin:0 auto;max-width:40rem;width:97%}.grid-12col{justify-content:space-between;flex-wrap:wrap;display:flex}.col-1to6,.col-7to12{max-width:48.5%;flex-basis:48.5%;flex-shrink:1;flex-grow:1}.col-1to4{max-width:32.333%;flex-basis:32.333%}.col-1to4,.col-5to12{flex-shrink:1;flex-grow:1}.col-5to12{max-width:64.666%;flex-basis:64.666%}.col-all{max-width:100%;flex-basis:100%;flex-shrink:1;flex-grow:1}',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),f=null,l=0,c=[],u=r(5);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(v(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(v(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function p(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function h(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),c.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,r);r.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;r=f||(f=b(t)),n=w.bind(null,r,a,!1),o=w.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=u(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=p(e,t);return d(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}e&&d(p(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});
//# sourceMappingURL=index.js.map