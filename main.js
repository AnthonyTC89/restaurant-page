!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(5)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){n=e.exports=t(2)(!1);var o=t(3)(t(4));n.push([e.i,"@font-face {\n  font-family: 'MyFont';\n  src:  url("+o+") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  box-sizing: content-box;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  margin: 0 auto;\n  font-family: 'MyFont';\n}\n\nnav {\n  background-color: #d48557;\n  height: 3em;\n  width: 100%;\n}\n\n.navbar {\n  list-style: none;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin: 0;\n  padding: 0;\n}\n\n.product-item{\n  display: inline-block;\n  background-color: green;\n  height: 300px;\n  width: 300px;\n  margin: 1em;\n  overflow: hidden;\n}\n\n.product-img {\n  width: 300px;\n  height: 250px;\n  background-size: cover;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  transition: all 1s ease;\n  background-position: top center;\n  cursor: pointer;\n}\n\n.product-img:hover {\n  background-size: 110%;\n}\n\n.product-name {\n  background-color: #d48557;\n  margin: 0;\n  padding: .5em 0;\n  display: block;\n  width: 300px;\n  text-align: center;\n}\n\n.nav-item {\n  padding: 1em;\n  color: #2d2d2d;\n}\n\n.nav-item-selected{\n  background-color: white;\n}\n\n.nav-item:hover{\n  background-color: white;\n  cursor: pointer;\n}\n\n.nav-item-container {\n  padding: 2em;\n  text-align: center;\n  color: #2d2d2d;\n}\n\n.home-img {\n  margin: 10px auto;\n  border-radius: 50%;\n  width: 50%;\n  height: 50%;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&o[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){e.exports=t.p+"a5038c85831f8de71480980b1f664651.ttf"},function(e,n,t){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n){for(var t=[],o={},r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):t.push(o[i]={id:i,parts:[c]})}return t}function s(e,n){for(var t=0;t<e.length;t++){var o=e[t],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(g(o.parts[i],n))}else{for(var c=[];i<o.parts.length;i++)c.push(g(o.parts[i],n));r[o.id]={id:o.id,refs:1,parts:c}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,n){var t,o,r;if(n.singleton){var a=h++;t=f||(f=l(n)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=l(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=c(e,n);return s(t,n),function(e){for(var o=[],a=0;a<t.length;a++){var i=t[a],l=r[i.id];l&&(l.refs--,o.push(l))}e&&s(c(e,n),n);for(var d=0;d<o.length;d++){var u=o[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(e,n,t){"use strict";function o(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("nav-item-container"),document.querySelector("#home").classList.add("nav-item-selected");const t=document.createElement("h1");t.innerHTML="The happiness smells like a pizza",n.appendChild(t);const o=document.createElement("img");o.src="images/logoPresto.png",o.classList.add("home-img"),n.appendChild(o),e.appendChild(n)}t.r(n);t(0);console.log("Hello World"),function(){const e=document.querySelector("#content");document.createElement("p").classList.add("arrowDown");const n=document.createElement("nav"),t=document.createElement("ul");t.classList="navbar";const o={home:"Home",menu:"Menu",contact:"Contact"};Object.keys(o).forEach(e=>{const n=document.createElement("li");n.classList.add("nav-item"),n.id=e,n.innerHTML=o[e],t.appendChild(n)}),n.appendChild(t),e.appendChild(n)}(),o(),document.querySelectorAll(".nav-item").forEach(e=>e.addEventListener("click",e=>{switch(document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("nav-item-selected")),document.querySelector("#content").removeChild(document.querySelector(".nav-item-container")),e.target.id){case"home":o();break;case"menu":!function(){const e=["Hawaiana","Argentina","Alemana","Española"],n=["images/hawaiana.jpg","images/argentina.jpg","images/alemana.jpg","images/espaniola.jpg"],t=document.querySelector("#content");document.querySelector("#menu").classList.add("nav-item-selected");const o=document.createElement("div");o.classList.add("nav-item-container");const r=document.createElement("h1");r.innerHTML="Our pizzas",o.appendChild(r);for(let t=0;t<e.length;t++){const r=document.createElement("div");r.classList.add("product-item");const a=document.createElement("div");a.classList.add("product-img"),a.style.backgroundImage=`url('${n[t]}')`;const i=document.createElement("h2");i.classList.add("product-name"),i.innerHTML=e[t],r.appendChild(i),r.appendChild(a),o.appendChild(r)}t.appendChild(o)}();break;case"contact":!function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("nav-item-container"),document.querySelector("#contact").classList.add("nav-item-selected");const t=document.createElement("h1");t.innerHTML="Contact",n.appendChild(t),e.appendChild(n)}()}}))}]);