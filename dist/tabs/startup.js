// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"wOTT":[function(require,module,exports) {
var hostConfig = "config-".concat(window.location.host);
chrome.storage.sync.get([hostConfig], function (data) {
  var config = JSON.parse(data[hostConfig]);
  var style = document.createElement('style');
  style.innerHTML = '.grid-d1ec314162654fbea4265e5d5054d362{--container-width:1202px;--container-padding:16px;--grid-col-color:rgba(255,0,0,0.2);--grid-row-color:rgba(255,0,0,0.2);--grid-gap-col-color:transparent;--grid-gap-row-color:transparent;--grid-col-gap:32px;--grid-row-gap:16px;--grid-cols:12;--grid-row-height:1px}.grid-d1ec314162654fbea4265e5d5054d362:after,.grid-d1ec314162654fbea4265e5d5054d362:before{top:0;right:0;bottom:0;left:0;content:"";pointer-events:none;z-index:99999;background-repeat:no-repeat}.grid-d1ec314162654fbea4265e5d5054d362:before{position:fixed;border-width:medium;border-left:var(--container-padding) solid transparent;border-bottom:0 solid transparent;border-right:var(--container-padding) solid transparent;border-top:0 solid transparent;--grid-col-width:calc((100% - var(--grid-col-gap)*var(--grid-cols))/var(--grid-cols));max-width:calc(var(--container-width) + var(--grid-col-gap));margin:0 auto;background-image:repeating-linear-gradient(90deg,var(--grid-gap-col-color) 0,var(--grid-gap-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)))}.grid-d1ec314162654fbea4265e5d5054d362:after{position:absolute;background-image:repeating-linear-gradient(180deg,var(--grid-gap-row-color) 0,var(--grid-gap-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)))}';
  document.body.appendChild(style);

  var appendGrid = function appendGrid() {
    var div = document.createElement('div');
    div.classList.add('grid-d1ec314162654fbea4265e5d5054d362');
    var styleElem = div.appendChild(document.createElement('style'));
    styleElem.innerHTML = ".grid-d1ec314162654fbea4265e5d5054d362::after {height:".concat(document.body.clientHeight, "px;}");
    div.style.setProperty('--container-width', config.containerWidth);
    div.style.setProperty('--container-padding', config.containerPadding);
    div.style.setProperty('--grid-col-color', config.gridColColor);
    div.style.setProperty('--grid-row-color', config.gridRowColor);
    div.style.setProperty('--grid-gap-col-color', config.gridGapColColor);
    div.style.setProperty('--grid-gap-row-color', config.gridGapRowColor);
    div.style.setProperty('--grid-col-gap', config.gridColGap);
    div.style.setProperty('--grid-row-gap', config.gridRowGap);
    div.style.setProperty('--grid-cols', config.gridCols);
    div.style.setProperty('--grid-row-height', config.gridRowHeight);
    document.body.appendChild(div);
  };

  if (config.on) {
    appendGrid();
  }
});
},{}]},{},["wOTT"], null)