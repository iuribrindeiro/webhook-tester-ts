/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor.bluebird","vendor.aurelia-binding","vendor.aurelia-templating","vendor.aurelia","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/environment.ts":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    debug: true,\r\n    testing: true\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW52aXJvbm1lbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnQudHM/N2I2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/environment.ts\n");

/***/ }),

/***/ "./src/models/request-model.ts":
/*!*************************************!*\
  !*** ./src/models/request-model.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RequestModel = /** @class */ (function () {\r\n    function RequestModel(data) {\r\n        if (data === void 0) { data = {}; }\r\n        this._method = data.method || null;\r\n        this._data = data.data || null;\r\n        this._date = data.date || null;\r\n        this._clientId = data.clientId || null;\r\n        this._id = data.id || null;\r\n    }\r\n    Object.defineProperty(RequestModel.prototype, \"method\", {\r\n        get: function () {\r\n            return this._method;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestModel.prototype, \"data\", {\r\n        get: function () {\r\n            return this._data;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestModel.prototype, \"date\", {\r\n        get: function () {\r\n            return this._date;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestModel.prototype, \"clientId\", {\r\n        get: function () {\r\n            return this._clientId;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestModel.prototype, \"id\", {\r\n        get: function () {\r\n            return this._id;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return RequestModel;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestModel);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3JlcXVlc3QtbW9kZWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3JlcXVlc3QtbW9kZWwudHM/NTI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0TW9kZWwge1xuICBwcml2YXRlIF9tZXRob2Q6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogb2JqZWN0O1xuICBwcml2YXRlIF9kYXRlOiBEYXRlO1xuICBwcml2YXRlIF9jbGllbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSA9IHt9KSB7XG4gICAgICB0aGlzLl9tZXRob2QgPSBkYXRhLm1ldGhvZCB8fCBudWxsXG4gICAgICB0aGlzLl9kYXRhID0gZGF0YS5kYXRhfHwgbnVsbFxuICAgICAgdGhpcy5fZGF0ZSA9IGRhdGEuZGF0ZSB8fCBudWxsXG4gICAgICB0aGlzLl9jbGllbnRJZCA9IGRhdGEuY2xpZW50SWQgfHwgbnVsbFxuICAgICAgdGhpcy5faWQgPSBkYXRhLmlkIHx8IG51bGxcbiAgfVxuICBcbiAgcHVibGljIGdldCBtZXRob2QoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZXRob2Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRlKCk6IERhdGUge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/request-model.ts\n");

/***/ }),

/***/ "./src/repositories/base/repository-base.ts":
/*!**************************************************!*\
  !*** ./src/repositories/base/repository-base.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-fetch-client */ \"./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar BaseRepository = /** @class */ (function () {\r\n    function BaseRepository(resource) {\r\n        this._resource = resource;\r\n        this._httpClient = this.buildClient();\r\n    }\r\n    BaseRepository.prototype.get = function (url, params) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this._httpClient.get(url, { body: params })];\r\n            });\r\n        });\r\n    };\r\n    BaseRepository.prototype.delete = function (url, body) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this._httpClient.delete(url, body)];\r\n            });\r\n        });\r\n    };\r\n    BaseRepository.prototype.buildClient = function () {\r\n        var _this = this;\r\n        var client = new aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__[\"HttpClient\"]();\r\n        client.configure(function (config) {\r\n            config\r\n                .withBaseUrl(\"http://testeapp.com/api/\" + _this._resource)\r\n                .withDefaults({\r\n                credentials: 'same-origin',\r\n                headers: {\r\n                    'Accept': 'application/json',\r\n                    'X-Requested-With': 'Fetch'\r\n                }\r\n            });\r\n        });\r\n        return client;\r\n    };\r\n    return BaseRepository;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseRepository);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js-exposed\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL2Jhc2UvcmVwb3NpdG9yeS1iYXNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlcG9zaXRvcmllcy9iYXNlL3JlcG9zaXRvcnktYmFzZS50cz8wZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfcmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgICAgICAgdGhpcy5faHR0cENsaWVudCA9IHRoaXMuYnVpbGRDbGllbnQoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBnZXQodXJsPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5nZXQodXJsLCB7Ym9keTogcGFyYW1zfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGRlbGV0ZSh1cmw/OiBzdHJpbmcsIGJvZHk/OiBhbnkpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5kZWxldGUodXJsLCBib2R5KVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICAgIGNsaWVudC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgICAgICAgLndpdGhCYXNlVXJsKGBodHRwOi8vdGVzdGVhcHAuY29tL2FwaS8ke3RoaXMuX3Jlc291cmNlfWApXG4gICAgICAgICAgICAgIC53aXRoRGVmYXVsdHMoe1xuICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdGZXRjaCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7OztBQUNBO0FBRUE7OztBQUNBOzs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/repositories/base/repository-base.ts\n");

/***/ }),

/***/ "./src/repositories/request-repository.ts":
/*!************************************************!*\
  !*** ./src/repositories/request-repository.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var _models_request_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/request-model */ \"./src/models/request-model.ts\");\n/* harmony import */ var _base_repository_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/repository-base */ \"./src/repositories/base/repository-base.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar RequestRepository = /** @class */ (function (_super) {\r\n    __extends(RequestRepository, _super);\r\n    function RequestRepository() {\r\n        return _super.call(this, \"home\") || this;\r\n    }\r\n    RequestRepository.prototype.getRequests = function (clientId) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, new Promise(function (r) {\r\n                        setTimeout(function () {\r\n                            r([\r\n                                new _models_request_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n                                    method: 'POST',\r\n                                    data: {\r\n                                        lol: 1\r\n                                    },\r\n                                    date: new Date(),\r\n                                    clientId: 'e77f786c-d502-4956-8134-9738861a85fb',\r\n                                    id: 'e77f786c-d502-4956-8134-9738861a85f2'\r\n                                }),\r\n                                new _models_request_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n                                    method: 'GET',\r\n                                    data: {\r\n                                        lol: 2\r\n                                    },\r\n                                    date: new Date(),\r\n                                    clientId: 'e77f786c-d502-4956-8134-9738861a85ff',\r\n                                    id: 'e77f786c-d502-4956-8134-9738861a85f3'\r\n                                })\r\n                            ]);\r\n                        }, 1500);\r\n                    })\r\n                    // let response = await this.get(`/${clientId}`);\r\n                    // if (!response.ok)\r\n                    //   throw {message: (await response.json()).message}\r\n                    // return (await response.json()).map(r => new RequestModel(r))\r\n                ];\r\n            });\r\n        });\r\n    };\r\n    RequestRepository.prototype.deleteRequest = function (request) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, new Promise(function (r) {\r\n                        setTimeout(function () {\r\n                            r();\r\n                        }, 1500);\r\n                    })\r\n                    // let response = await super.delete(`/remover/${request.id}/${request.clientId}`);\r\n                    // if (!response.ok)\r\n                    //   throw {message: (await response.json()).message}\r\n                ];\r\n            });\r\n        });\r\n    };\r\n    RequestRepository.prototype.deleteAll = function (clientId) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, new Promise(function (r) {\r\n                        setTimeout(function () {\r\n                            r();\r\n                        }, 1500);\r\n                    })\r\n                    // let response = await super.delete(`/remover-todos/${clientId}`)\r\n                    // if (!response.ok)\r\n                    //   throw {message: (await response.json()).message}\r\n                ];\r\n            });\r\n        });\r\n    };\r\n    return RequestRepository;\r\n}(_base_repository_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRepository);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js-exposed\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL3JlcXVlc3QtcmVwb3NpdG9yeS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXBvc2l0b3JpZXMvcmVxdWVzdC1yZXBvc2l0b3J5LnRzP2Q2N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdC1tb2RlbCc7XG5pbXBvcnQgQmFzZVJlcG9zaXRvcnkgZnJvbSAnLi9iYXNlL3JlcG9zaXRvcnktYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcImhvbWVcIilcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRSZXF1ZXN0cyhjbGllbnRJZDogc3RyaW5nKTogUHJvbWlzZTxSZXF1ZXN0TW9kZWxbXT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByKFtcbiAgICAgICAgICAgIG5ldyBSZXF1ZXN0TW9kZWwoe1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxvbDogMVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBjbGllbnRJZDogJ2U3N2Y3ODZjLWQ1MDItNDk1Ni04MTM0LTk3Mzg4NjFhODVmYicsXG4gICAgICAgICAgICAgIGlkOiAnZTc3Zjc4NmMtZDUwMi00OTU2LTgxMzQtOTczODg2MWE4NWYyJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgUmVxdWVzdE1vZGVsKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxvbDogMlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBjbGllbnRJZDogJ2U3N2Y3ODZjLWQ1MDItNDk1Ni04MTM0LTk3Mzg4NjFhODVmZicsXG4gICAgICAgICAgICAgIGlkOiAnZTc3Zjc4NmMtZDUwMi00OTU2LTgxMzQtOTczODg2MWE4NWYzJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICB9LCAxNTAwKVxuICAgICAgfSlcbiAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0KGAvJHtjbGllbnRJZH1gKTtcbiAgICAgIC8vIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAvLyAgIHRocm93IHttZXNzYWdlOiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tZXNzYWdlfVxuXG4gICAgICAvLyByZXR1cm4gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkubWFwKHIgPT4gbmV3IFJlcXVlc3RNb2RlbChyKSlcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVSZXF1ZXN0KHJlcXVlc3Q6IFJlcXVlc3RNb2RlbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByKClcbiAgICAgIH0sIDE1MDApXG4gICAgfSlcblxuICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgc3VwZXIuZGVsZXRlKGAvcmVtb3Zlci8ke3JlcXVlc3QuaWR9LyR7cmVxdWVzdC5jbGllbnRJZH1gKTtcbiAgICAgIC8vIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAvLyAgIHRocm93IHttZXNzYWdlOiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tZXNzYWdlfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZUFsbChjbGllbnRJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHIoKVxuICAgICAgfSwgMTUwMClcbiAgICB9KVxuXG4gICAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBzdXBlci5kZWxldGUoYC9yZW1vdmVyLXRvZG9zLyR7Y2xpZW50SWR9YClcbiAgICAgIC8vIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAvLyAgIHRocm93IHttZXNzYWdlOiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tZXNzYWdlfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7OztBQU1BO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFKQTs7O0FBS0E7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBOzs7QUFLQTtBQUNBO0FBQUE7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/repositories/request-repository.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js");


/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var repositories_request_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! repositories/request-repository */ \"./src/repositories/request-repository.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\nvar App = /** @class */ (function () {\r\n    function App(_requestRepository) {\r\n        this._requestRepository = _requestRepository;\r\n        this.loadingRequests = true;\r\n        this.requests = [];\r\n        this.selectedRequest = null;\r\n        this.clientId = null;\r\n    }\r\n    App.prototype.attached = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        this.clientId = localStorage.getItem('clientId');\r\n                        if (!this.clientId) {\r\n                            this.clientId = uuid__WEBPACK_IMPORTED_MODULE_2__();\r\n                            localStorage.setItem('clientId', this.clientId);\r\n                        }\r\n                        return [4 /*yield*/, this.loadRequests()];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Object.defineProperty(App.prototype, \"dataJsonStringfied\", {\r\n        get: function () {\r\n            return JSON.stringify(this.selectedRequest.data);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    App.prototype.selectRequest = function (request) {\r\n        this.selectedRequest = request;\r\n    };\r\n    App.prototype.deleteRequest = function (request) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var err_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        return [4 /*yield*/, this._requestRepository.deleteRequest(request)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.requests = this.requests.filter(function (r) { return r.id !== request.id; });\r\n                        return [3 /*break*/, 3];\r\n                    case 2:\r\n                        err_1 = _a.sent();\r\n                        alert(err_1.message);\r\n                        return [3 /*break*/, 3];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    App.prototype.deleteAllRequests = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var err_2;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, 3, 4]);\r\n                        this.loadingRequests = true;\r\n                        return [4 /*yield*/, this._requestRepository.deleteAll(this.clientId)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 4];\r\n                    case 2:\r\n                        err_2 = _a.sent();\r\n                        alert(err_2.message);\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        this.loadingRequests = false;\r\n                        return [7 /*endfinally*/];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    App.prototype.loadRequests = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, err_3;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        this.loadingRequests = true;\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, 4, 5]);\r\n                        _a = this;\r\n                        return [4 /*yield*/, this._requestRepository.getRequests(this.clientId)];\r\n                    case 2:\r\n                        _a.requests = _b.sent();\r\n                        return [3 /*break*/, 5];\r\n                    case 3:\r\n                        err_3 = _b.sent();\r\n                        alert(err_3.message);\r\n                        return [3 /*break*/, 5];\r\n                    case 4:\r\n                        this.loadingRequests = false;\r\n                        return [7 /*endfinally*/];\r\n                    case 5: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    App = __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"autoinject\"],\r\n        __metadata(\"design:paramtypes\", [repositories_request_repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"]])\r\n    ], App);\r\n    return App;\r\n}());\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js-exposed\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IFJlcXVlc3RSZXBvc2l0b3J5IGZyb20gXCJyZXBvc2l0b3JpZXMvcmVxdWVzdC1yZXBvc2l0b3J5XCI7XG5pbXBvcnQgUmVxdWVzdE1vZGVsIGZyb20gXCJtb2RlbHMvcmVxdWVzdC1tb2RlbFwiO1xuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHB1YmxpYyBsb2FkaW5nUmVxdWVzdHM6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgcmVxdWVzdHM6IFJlcXVlc3RNb2RlbFtdID0gW107XG4gIHB1YmxpYyBzZWxlY3RlZFJlcXVlc3Q6IFJlcXVlc3RNb2RlbCA9IG51bGw7XG4gIHB1YmxpYyBjbGllbnRJZDogc3RyaW5nID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9yZXF1ZXN0UmVwb3NpdG9yeTogUmVxdWVzdFJlcG9zaXRvcnkpIHt9XG5cbiAgcHVibGljIGFzeW5jIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuY2xpZW50SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xpZW50SWQnKVxuICAgIGlmICghdGhpcy5jbGllbnRJZCkge1xuICAgICAgdGhpcy5jbGllbnRJZCA9IHV1aWQoKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWVudElkJywgdGhpcy5jbGllbnRJZClcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5sb2FkUmVxdWVzdHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YUpzb25TdHJpbmdmaWVkKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkUmVxdWVzdC5kYXRhKVxuICB9XG5cbiAgcHVibGljIHNlbGVjdFJlcXVlc3QocmVxdWVzdDogUmVxdWVzdE1vZGVsKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZVJlcXVlc3QocmVxdWVzdDogUmVxdWVzdE1vZGVsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3JlcXVlc3RSZXBvc2l0b3J5LmRlbGV0ZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgICB0aGlzLnJlcXVlc3RzID0gdGhpcy5yZXF1ZXN0cy5maWx0ZXIociA9PiByLmlkICE9PSByZXF1ZXN0LmlkKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZUFsbFJlcXVlc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXF1ZXN0cyA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLl9yZXF1ZXN0UmVwb3NpdG9yeS5kZWxldGVBbGwodGhpcy5jbGllbnRJZCk7XG4gICAgfWNhdGNoKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9hZGluZ1JlcXVlc3RzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUmVxdWVzdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2FkaW5nUmVxdWVzdHMgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlcXVlc3RzID0gYXdhaXQgdGhpcy5fcmVxdWVzdFJlcG9zaXRvcnkuZ2V0UmVxdWVzdHModGhpcy5jbGllbnRJZClcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMubG9hZGluZ1JlcXVlc3RzID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFNQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBRUE7O0FBQUE7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTtBQUVBOzs7Ozs7O0FBRUE7QUFDQTs7QUFBQTs7OztBQUVBOzs7QUFFQTs7Ozs7O0FBRUE7QUFFQTs7Ozs7O0FBQ0E7Ozs7QUFFQTtBQUFBOztBQUFBOzs7O0FBRUE7OztBQUVBOzs7Ozs7QUFFQTtBQXREQTtBQURBO0FBT0E7QUFOQTtBQXVEQTtBQUFBO0FBdkRBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <div class=\\\"card\\\">\\n    <div class=\\\"card-header\\\">\\n      Featured\\n    </div>\\n    <div class=\\\"card-body\\\">\\n      <h5 class=\\\"card-title\\\">Special title treatment</h5>\\n      <p class=\\\"card-text\\\">With supporting text below as a natural lead-in to additional content.</p>\\n      <a href=\\\"#\\\" class=\\\"btn btn-primary\\\">Go somewhere</a>\\n    </div>\\n  </div>\\n  <!-- <require from=\\\"./resources/app/request/request\\\"></require>\\n  <h2 if.bind=\\\"loadingRequests\\\">Carregando requests</h2>\\n  <div>\\n    <request repeat.for=\\\"request of requests\\\" request.bind=\\\"request\\\" delete-callback.call=\\\"deleteRequest(request)\\\" parent-select-request.call=\\\"selectRequest(request)\\\"></request>\\n  </div> -->\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICBGZWF0dXJlZFxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlNwZWNpYWwgdGl0bGUgdHJlYXRtZW50PC9oNT5cXG4gICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5XaXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuPC9wPlxcbiAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkdvIHNvbWV3aGVyZTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPHJlcXVpcmUgZnJvbT1cXFwiLi9yZXNvdXJjZXMvYXBwL3JlcXVlc3QvcmVxdWVzdFxcXCI+PC9yZXF1aXJlPlxcbiAgPGgyIGlmLmJpbmQ9XFxcImxvYWRpbmdSZXF1ZXN0c1xcXCI+Q2FycmVnYW5kbyByZXF1ZXN0czwvaDI+XFxuICA8ZGl2PlxcbiAgICA8cmVxdWVzdCByZXBlYXQuZm9yPVxcXCJyZXF1ZXN0IG9mIHJlcXVlc3RzXFxcIiByZXF1ZXN0LmJpbmQ9XFxcInJlcXVlc3RcXFwiIGRlbGV0ZS1jYWxsYmFjay5jYWxsPVxcXCJkZWxldGVSZXF1ZXN0KHJlcXVlc3QpXFxcIiBwYXJlbnQtc2VsZWN0LXJlcXVlc3QuY2FsbD1cXFwic2VsZWN0UmVxdWVzdChyZXF1ZXN0KVxcXCI+PC9yZXF1ZXN0PlxcbiAgPC9kaXY+IC0tPlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ \"./src/environment.ts\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js-exposed\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)\r\nbluebird__WEBPACK_IMPORTED_MODULE_4__[\"config\"]({ warnings: { wForgottenReturn: false } });\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .developmentLogging();\r\n    aurelia.start().then(function () { return aurelia.setRoot(); });\r\n    // Uncomment the line below to enable animation.\r\n    // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));\r\n    // if the css animator is enabled, add swap-order=\"after\" to all router-view elements\r\n    // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.\r\n    // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));\r\n    aurelia.use.developmentLogging(_environment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].debug ? 'debug' : 'warn');\r\n    if (_environment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].testing) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    return aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJhdXJlbGlhLWxvYWRlci13ZWJwYWNrL3NyYy93ZWJwYWNrLWhvdC1pbnRlcmZhY2VcIi8+XG4vLyB3ZSB3YW50IGZvbnQtYXdlc29tZSB0byBsb2FkIGFzIHNvb24gYXMgcG9zc2libGUgdG8gc2hvdyB0aGUgZmEtc3Bpbm5lclxuaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCB7UExBVEZPUk19IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCAqIGFzIEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcblxuLy8gcmVtb3ZlIG91dCBpZiB5b3UgZG9uJ3Qgd2FudCBhIFByb21pc2UgcG9seWZpbGwgKHJlbW92ZSBhbHNvIGZyb20gd2VicGFjay5jb25maWcuanMpXG5CbHVlYmlyZC5jb25maWcoeyB3YXJuaW5nczogeyB3Rm9yZ290dGVuUmV0dXJuOiBmYWxzZSB9IH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cbiAgLy8gYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJykpO1xuICAvLyBpZiB0aGUgY3NzIGFuaW1hdG9yIGlzIGVuYWJsZWQsIGFkZCBzd2FwLW9yZGVyPVwiYWZ0ZXJcIiB0byBhbGwgcm91dGVyLXZpZXcgZWxlbWVudHNcblxuICAvLyBBbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLWh0bWwtaW1wb3J0LXRlbXBsYXRlLWxvYWRlcicpKTtcblxuICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoZW52aXJvbm1lbnQuZGVidWcgPyAnZGVidWcnIDogJ3dhcm4nKTtcblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLXRlc3RpbmcnKSk7XG4gIH1cblxuICByZXR1cm4gYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///main\n");

/***/ })

/******/ });