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
})({"bEr1":[function(require,module,exports) {
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    globalConfig: JSON.stringify({
      containerWidth: '1202px',
      containerPadding: '16px',
      gridColColor: 'rgba(255, 0, 0, 0.2)',
      gridRowColor: 'rgba(255, 0, 0, 0.2)',
      gridGapColColor: 'transparent',
      gridGapRowColor: 'transparent',
      gridColGap: '32px',
      gridRowGap: '16px',
      gridCols: '12',
      gridRowHeight: '1px'
    })
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          schemes: ['https', 'http']
        }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  }); // chrome.pageAction.onClicked.addListener(function () {
  // 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // 		chrome.tabs.executeScript(tabs[0].id, { file: 'main.js' });
  // 	});
  // });

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      chrome.tabs.executeScript(tabId, {
        file: 'tabs/startup.js'
      });
    }
  });
  chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);

    if (command === 'toggle-feature-foo') {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          file: 'tabs/toggle.js'
        });
      });
    }
  }); // chrome.extension.onRequest.addListener(function (
  // 	request,
  // 	sender,
  // 	sendResponse
  // ) {
  // 	loadSettings(); //обновление настроек
  // 	if (request.operation == 'hotkeys') {
  // 		//запрос текущих настроек горячих клавиш
  // 		sendResponse({ hotkeys: localStorage.hotkeys });
  // 	} else if (request.operation == 'hotkey') {
  // 		//обработка горячей клавиши
  // 		if (request.key == 'selectProfile') {
  // 			//нужные действия
  // 		}
  // 		//аналогично для остальных клавиш
  // 	} else {
  // 		//sendResponse({});
  // 	}
  // });
});
},{}]},{},["bEr1"], null)