!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n=document.querySelector(".menu"),r=document.querySelector(".header__nav"),o=document.querySelectorAll(".nav__link"),c=document.querySelector(".menu__burger"),u=document.querySelector("#nav");n.addEventListener("click",(function(){r.classList.toggle("header__nav--opened"),c.classList.toggle("menu__burger--close")})),o.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.textContent.replace(" ","-");document.querySelector("#".concat(n)).scrollIntoView({block:"start",behavior:"smooth"}),c.classList.remove("menu__burger--close"),r.classList.remove("header__nav--opened")}))}));var l=u.offsetTop;window.addEventListener("scroll",(function(){window.pageYOffset>l?u.classList.add("nav--sticky"):u.classList.remove("nav--sticky")}))},function(e,t,n){}]);
//# sourceMappingURL=script.js.map