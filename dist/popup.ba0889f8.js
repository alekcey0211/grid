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
})({"MEcY":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  document.getElementById('toggleGrid').addEventListener('click', function () {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'tabs/toggle.js'
    });
  });

  var getHost = function getHost(url) {
    return url.split('/')[2];
  };

  var host = getHost(tabs[0].url);
  var hostConfig = "config-".concat(host);
  chrome.storage.sync.get(['globalConfig', hostConfig], function (data) {
    var _config$containerPadd;

    var num = function num(val) {
      return +val.replace('px', '');
    };

    var globalConfig = JSON.parse(data.globalConfig);
    var config = data[hostConfig] ? JSON.parse(data[hostConfig]) : globalConfig;
    document.getElementById('grid-col-color').jscolor.fromString(config.gridColColor);
    document.getElementById('grid-row-color').jscolor.fromString(config.gridRowColor);
    document.getElementById('container-width').value = num(config.containerWidth);
    document.getElementById('container-padding').value = num((_config$containerPadd = config.containerPadding) !== null && _config$containerPadd !== void 0 ? _config$containerPadd : globalConfig.containerPadding);
    document.getElementById('grid-col-gap').value = num(config.gridColGap);
    document.getElementById('grid-row-gap').value = num(config.gridRowGap);
    document.getElementById('grid-cols').value = num(config.gridCols);
    document.getElementById('inputs').addEventListener('change', function (e) {
      if (e.target.id === 'grid-col-color') {
        config.gridColColor = e.target.jscolor.toRGBAString();
      } else if (e.target.id === 'grid-row-color') {
        config.gridRowColor = e.target.jscolor.toRGBAString();
      } else if (e.target.id === 'container-width') {
        config.containerWidth = "".concat(e.target.value, "px");
      } else if (e.target.id === 'container-padding') {
        config.containerPadding = "".concat(e.target.value, "px");
      } else if (e.target.id === 'grid-col-gap') {
        config.gridColGap = "".concat(e.target.value, "px");
      } else if (e.target.id === 'grid-row-gap') {
        config.gridRowGap = "".concat(e.target.value, "px");
      } else if (e.target.id === 'grid-cols') {
        config.gridCols = e.target.value;
      }

      chrome.storage.sync.set(_defineProperty({}, hostConfig, JSON.stringify(config)));
      chrome.tabs.executeScript(tabs[0].id, {
        file: 'tabs/refresh.js'
      });
    });
    chrome.commands.getAll(function (commands) {
      document.getElementById('toggleGrid').title = commands.find(function (x) {
        return x.name === 'toggle-feature-foo';
      }).shortcut;
      document.getElementById('toggleGrid__hint').innerText = commands.find(function (x) {
        return x.name === 'toggle-feature-foo';
      }).shortcut;
    });
  });
});
},{}]},{},["MEcY"], null)