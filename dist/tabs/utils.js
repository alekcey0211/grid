parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IBOU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.num=exports.appendGrid=exports.updateGrid=exports.gridClass=void 0,exports.gridClass="grid-d1ec314162654fbea4265e5d5054d362";var r=function(r,o){o.style.setProperty("--container-width",r.containerWidth),o.style.setProperty("--container-padding",r.containerPadding),o.style.setProperty("--grid-col-color",r.gridColColor),o.style.setProperty("--grid-row-color",r.gridRowColor),o.style.setProperty("--grid-gap-col-color",r.gridGapColColor),o.style.setProperty("--grid-gap-row-color",r.gridGapRowColor),o.style.setProperty("--grid-col-gap",r.gridColGap),o.style.setProperty("--grid-row-gap",r.gridRowGap),o.style.setProperty("--grid-cols",r.gridCols),o.style.setProperty("--grid-row-height",r.gridRowHeight)};exports.updateGrid=r;var o=function(r){var o=document.createElement("style");o.innerHTML="."+exports.gridClass+"{--container-width:1202px;--container-padding:16px;--grid-col-color:rgba(255,0,0,0.2);--grid-row-color:rgba(255,0,0,0.2);--grid-gap-col-color:transparent;--grid-gap-row-color:transparent;--grid-col-gap:32px;--grid-row-gap:16px;--grid-cols:12;--grid-row-height:1px}."+exports.gridClass+":after,."+exports.gridClass+':before{top:0;right:0;bottom:0;left:0;content:"";pointer-events:none;z-index:99999;background-repeat:no-repeat}.'+exports.gridClass+":before{position:fixed;border-width:medium;border-left:var(--container-padding) solid transparent;border-bottom:0 solid transparent;border-right:var(--container-padding) solid transparent;border-top:0 solid transparent;--grid-col-width:calc((100% - var(--grid-col-gap)*var(--grid-cols))/var(--grid-cols));max-width:calc(var(--container-width) + var(--grid-col-gap));margin:0 auto;background-image:repeating-linear-gradient(90deg,var(--grid-gap-col-color) 0,var(--grid-gap-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)))}."+exports.gridClass+":after{position:absolute;background-image:repeating-linear-gradient(180deg,var(--grid-gap-row-color) 0,var(--grid-gap-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)))}",document.body.appendChild(o);var a=document.createElement("div");a.classList.add(exports.gridClass),a.appendChild(document.createElement("style")).innerHTML="."+exports.gridClass+"::after {height:"+document.body.clientHeight+"px;}",exports.updateGrid(r,a),document.body.appendChild(a)};exports.appendGrid=o;var a=function(r){return r.replace("px","")};exports.num=a;
},{}]},{},["IBOU"], null)