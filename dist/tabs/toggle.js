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
})({"WDJJ":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hostConfig = "config-".concat(window.location.host);
chrome.storage.sync.get(['globalConfig', hostConfig], function (data) {
  var globalConfig = JSON.parse(data.globalConfig);
  var config = data[hostConfig] ? JSON.parse(data[hostConfig]) : globalConfig;

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

  if (document.querySelector('.grid-d1ec314162654fbea4265e5d5054d362')) {
    document.querySelector('.grid-d1ec314162654fbea4265e5d5054d362').remove();
    config.on = false;
  } else {
    appendGrid();
    config.on = true;
  }

  chrome.storage.sync.set(_defineProperty({}, hostConfig, JSON.stringify(config)));
});
},{}]},{},["WDJJ"], null)