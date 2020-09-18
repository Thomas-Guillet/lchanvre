/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/bootstrap-theme/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/LChanvreTheme/assets/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.14.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-mastercard';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f1';
var svgPathData = 'M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcMastercard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-paypal';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f4';
var svgPathData = 'M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcPaypal = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'cc-visa';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1f0';
var svgPathData = 'M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCcVisa = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'facebook';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f09a';
var svgPathData = 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFacebook = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'instagram';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f16d';
var svgPathData = 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faInstagram = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'twitter';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f099';
var svgPathData = 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTwitter = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faAdjust.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faAdjust.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'adjust';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f042';
var svgPathData = 'M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faAdjust = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faBan.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faBan.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'ban';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f05e';
var svgPathData = 'M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faBan = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f00c';
var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCheck = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'chevron-up';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f077';
var svgPathData = 'M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faChevronUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faClock.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'clock';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f017';
var svgPathData = 'M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faClock = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'credit-card';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f09d';
var svgPathData = 'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCreditCard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'exclamation-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f06a';
var svgPathData = 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faExclamationCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'flag';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f024';
var svgPathData = 'M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFlag = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'info-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f05a';
var svgPathData = 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faInfoCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'map-marker-alt';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f3c5';
var svgPathData = 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faMapMarkerAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'pencil-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f303';
var svgPathData = 'M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPencilAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'plus';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f067';
var svgPathData = 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPlus = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faQuestionCircle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faQuestionCircle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'question-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f059';
var svgPathData = 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faQuestionCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faReplyAll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faReplyAll.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'reply-all';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f122';
var svgPathData = 'M136.309 189.836L312.313 37.851C327.72 24.546 352 35.348 352 56.015v82.763c129.182 10.231 224 52.212 224 183.548 0 61.441-39.582 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 38.512-123.162-3.922-169.482-112.59-182.015v84.175c0 20.701-24.3 31.453-39.687 18.164L136.309 226.164c-11.071-9.561-11.086-26.753 0-36.328zm-128 36.328L184.313 378.15C199.7 391.439 224 380.687 224 359.986v-15.818l-108.606-93.785A55.96 55.96 0 0 1 96 207.998a55.953 55.953 0 0 1 19.393-42.38L224 71.832V56.015c0-20.667-24.28-31.469-39.687-18.164L8.309 189.836c-11.086 9.575-11.071 26.767 0 36.328z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faReplyAll = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'search';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f002';
var svgPathData = 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSearch = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'shopping-bag';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f290';
var svgPathData = 'M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faShoppingBag = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'shuttle-van';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f5b6';
var svgPathData = 'M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faShuttleVan = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faStar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'star';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f005';
var svgPathData = 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'sync-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f1';
var svgPathData = 'M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSyncAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/bootstrap.native/dist/bootstrap-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap.native/dist/bootstrap-native.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Native JavaScript for Bootstrap v3.0.10 (https://thednp.github.io/bootstrap.native/)
  * Copyright 2015-2020 © dnp_theme
  * Licensed under MIT (https://github.com/thednp/bootstrap.native/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  var transitionEndEvent = 'webkitTransition' in document.head.style ? 'webkitTransitionEnd' : 'transitionend';

  var supportTransition = 'webkitTransition' in document.head.style || 'transition' in document.head.style;

  var transitionDuration = 'webkitTransition' in document.head.style ? 'webkitTransitionDuration' : 'transitionDuration';

  function getElementTransitionDuration(element) {
    var duration = supportTransition ? parseFloat(getComputedStyle(element)[transitionDuration]) : 0;
    duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
    return duration;
  }

  function emulateTransitionEnd(element,handler){
    var called = 0, duration = getElementTransitionDuration(element);
    duration ? element.addEventListener( transitionEndEvent, function transitionEndWrapper(e){
                !called && handler(e), called = 1;
                element.removeEventListener( transitionEndEvent, transitionEndWrapper);
              })
             : setTimeout(function() { !called && handler(), called = 1; }, 17);
  }

  function queryElement(selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

  function bootstrapCustomEvent(eventName, componentName, related) {
    var OriginalCustomEvent = new CustomEvent( eventName + '.bs.' + componentName, {cancelable: true});
    OriginalCustomEvent.relatedTarget = related;
    return OriginalCustomEvent;
  }

  function dispatchCustomEvent(customEvent){
    this && this.dispatchEvent(customEvent);
  }

  function Alert(element) {
    var self = this,
      alert,
      closeCustomEvent = bootstrapCustomEvent('close','alert'),
      closedCustomEvent = bootstrapCustomEvent('closed','alert');
    function triggerHandler() {
      alert.classList.contains('fade') ? emulateTransitionEnd(alert,transitionEndHandler) : transitionEndHandler();
    }
    function toggleEvents(action){
      action = action ? 'addEventListener' : 'removeEventListener';
      element[action]('click',clickHandler,false);
    }
    function clickHandler(e) {
      alert = e && e.target.closest(".alert");
      element = queryElement('[data-dismiss="alert"]',alert);
      element && alert && (element === e.target || element.contains(e.target)) && self.close();
    }
    function transitionEndHandler() {
      toggleEvents();
      alert.parentNode.removeChild(alert);
      dispatchCustomEvent.call(alert,closedCustomEvent);
    }
    self.close = function () {
      if ( alert && element && alert.classList.contains('show') ) {
        dispatchCustomEvent.call(alert,closeCustomEvent);
        if ( closeCustomEvent.defaultPrevented ) { return; }
        self.dispose();
        alert.classList.remove('show');
        triggerHandler();
      }
    };
    self.dispose = function () {
      toggleEvents();
      delete element.Alert;
    };
    element = queryElement(element);
    alert = element.closest('.alert');
    element.Alert && element.Alert.dispose();
    if ( !element.Alert ) {
      toggleEvents(1);
    }
    self.element = element;
    element.Alert = self;
  }

  function Button(element) {
    var self = this, labels,
        changeCustomEvent = bootstrapCustomEvent('change', 'button');
    function toggle(e) {
      var input,
          label = e.target.tagName === 'LABEL' ? e.target
                : e.target.closest('LABEL') ? e.target.closest('LABEL') : null;
      input = label && label.getElementsByTagName('INPUT')[0];
      if ( !input ) { return; }
      dispatchCustomEvent.call(input, changeCustomEvent);
      dispatchCustomEvent.call(element, changeCustomEvent);
      if ( input.type === 'checkbox' ) {
        if ( changeCustomEvent.defaultPrevented ) { return; }
        if ( !input.checked ) {
          label.classList.add('active');
          input.getAttribute('checked');
          input.setAttribute('checked','checked');
          input.checked = true;
        } else {
          label.classList.remove('active');
          input.getAttribute('checked');
          input.removeAttribute('checked');
          input.checked = false;
        }
        if (!element.toggled) {
          element.toggled = true;
        }
      }
      if ( input.type === 'radio' && !element.toggled ) {
        if ( changeCustomEvent.defaultPrevented ) { return; }
        if ( !input.checked || (e.screenX === 0 && e.screenY == 0) ) {
          label.classList.add('active');
          label.classList.add('focus');
          input.setAttribute('checked','checked');
          input.checked = true;
          element.toggled = true;
          Array.from(labels).map(function (otherLabel){
            var otherInput = otherLabel.getElementsByTagName('INPUT')[0];
            if ( otherLabel !== label && otherLabel.classList.contains('active') )  {
              dispatchCustomEvent.call(otherInput, changeCustomEvent);
              otherLabel.classList.remove('active');
              otherInput.removeAttribute('checked');
              otherInput.checked = false;
            }
          });
        }
      }
      setTimeout( function () { element.toggled = false; }, 50 );
    }
    function keyHandler(e) {
      var key = e.which || e.keyCode;
      key === 32 && e.target === document.activeElement && toggle(e);
    }
    function preventScroll(e) {
      var key = e.which || e.keyCode;
      key === 32 && e.preventDefault();
    }
    function focusToggle(e) {
      if (e.target.tagName === 'INPUT' ) {
        var action = e.type === 'focusin' ? 'add' : 'remove';
        e.target.closest('.btn').classList[action]('focus');
      }
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      element[action]('click',toggle,false );
      element[action]('keyup',keyHandler,false), element[action]('keydown',preventScroll,false);
      element[action]('focusin',focusToggle,false), element[action]('focusout',focusToggle,false);
    }
    self.dispose = function () {
      toggleEvents();
      delete element.Button;
    };
    element = queryElement(element);
    element.Button && element.Button.dispose();
    labels = element.getElementsByClassName('btn');
    if (!labels.length) { return; }
    if ( !element.Button ) {
      toggleEvents(1);
    }
    element.toggled = false;
    element.Button = self;
    Array.from(labels).map(function (btn){
      !btn.classList.contains('active')
        && queryElement('input:checked',btn)
        && btn.classList.add('active');
      btn.classList.contains('active')
        && !queryElement('input:checked',btn)
        && btn.classList.remove('active');
    });
  }

  var mouseHoverEvents = ('onmouseleave' in document) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];

  var supportPassive = (function () {
    var result = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          result = true;
        }
      });
      document.addEventListener('DOMContentLoaded', function wrap(){
        document.removeEventListener('DOMContentLoaded', wrap, opts);
      }, opts);
    } catch (e) {}
    return result;
  })();

  var passiveHandler = supportPassive ? { passive: true } : false;

  function isElementInScrollRange(element) {
    var bcr = element.getBoundingClientRect(),
        viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return bcr.top <= viewportHeight && bcr.bottom >= 0;
  }

  function Carousel (element,options) {
    options = options || {};
    var self = this,
      vars, ops,
      slideCustomEvent, slidCustomEvent,
      slides, leftArrow, rightArrow, indicator, indicators;
    function pauseHandler() {
      if ( ops.interval !==false && !element.classList.contains('paused') ) {
        element.classList.add('paused');
        !vars.isSliding && ( clearInterval(vars.timer), vars.timer = null );
      }
    }
    function resumeHandler() {
      if ( ops.interval !== false && element.classList.contains('paused') ) {
        element.classList.remove('paused');
        !vars.isSliding && ( clearInterval(vars.timer), vars.timer = null );
        !vars.isSliding && self.cycle();
      }
    }
    function indicatorHandler(e) {
      e.preventDefault();
      if (vars.isSliding) { return; }
      var eventTarget = e.target;
      if ( eventTarget && !eventTarget.classList.contains('active') && eventTarget.getAttribute('data-slide-to') ) {
        vars.index = parseInt( eventTarget.getAttribute('data-slide-to'));
      } else { return false; }
      self.slideTo( vars.index );
    }
    function controlsHandler(e) {
      e.preventDefault();
      if (vars.isSliding) { return; }
      var eventTarget = e.currentTarget || e.srcElement;
      if ( eventTarget === rightArrow ) {
        vars.index++;
      } else if ( eventTarget === leftArrow ) {
        vars.index--;
      }
      self.slideTo( vars.index );
    }
    function keyHandler(ref) {
      var which = ref.which;
      if (vars.isSliding) { return; }
      switch (which) {
        case 39:
          vars.index++;
          break;
        case 37:
          vars.index--;
          break;
        default: return;
      }
      self.slideTo( vars.index );
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      if ( ops.pause && ops.interval ) {
        element[action]( mouseHoverEvents[0], pauseHandler, false );
        element[action]( mouseHoverEvents[1], resumeHandler, false );
        element[action]( 'touchstart', pauseHandler, passiveHandler );
        element[action]( 'touchend', resumeHandler, passiveHandler );
      }
      ops.touch && slides.length > 1 && element[action]( 'touchstart', touchDownHandler, passiveHandler );
      rightArrow && rightArrow[action]( 'click', controlsHandler,false );
      leftArrow && leftArrow[action]( 'click', controlsHandler,false );
      indicator && indicator[action]( 'click', indicatorHandler,false );
      ops.keyboard && window[action]( 'keydown', keyHandler,false );
    }
    function toggleTouchEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      element[action]( 'touchmove', touchMoveHandler, passiveHandler );
      element[action]( 'touchend', touchEndHandler, passiveHandler );
    }
    function touchDownHandler(e) {
      if ( vars.isTouch ) { return; }
      vars.touchPosition.startX = e.changedTouches[0].pageX;
      if ( element.contains(e.target) ) {
        vars.isTouch = true;
        toggleTouchEvents(1);
      }
    }
    function touchMoveHandler(e) {
      if ( !vars.isTouch ) { e.preventDefault(); return; }
      vars.touchPosition.currentX = e.changedTouches[0].pageX;
      if ( e.type === 'touchmove' && e.changedTouches.length > 1 ) {
        e.preventDefault();
        return false;
      }
    }
    function touchEndHandler (e) {
      if ( !vars.isTouch || vars.isSliding ) { return }
      vars.touchPosition.endX = vars.touchPosition.currentX || e.changedTouches[0].pageX;
      if ( vars.isTouch ) {
        if ( (!element.contains(e.target) || !element.contains(e.relatedTarget) )
            && Math.abs(vars.touchPosition.startX - vars.touchPosition.endX) < 75 ) {
          return false;
        } else {
          if ( vars.touchPosition.currentX < vars.touchPosition.startX ) {
            vars.index++;
          } else if ( vars.touchPosition.currentX > vars.touchPosition.startX ) {
            vars.index--;
          }
          vars.isTouch = false;
          self.slideTo(vars.index);
        }
        toggleTouchEvents();
      }
    }
    function setActivePage(pageIndex) {
      Array.from(indicators).map(function (x){x.classList.remove('active');});
      indicators[pageIndex] && indicators[pageIndex].classList.add('active');
    }
    function transitionEndHandler(e){
      if (vars.touchPosition){
        var next = vars.index,
            timeout = e && e.target !== slides[next] ? e.elapsedTime*1000+100 : 20,
            activeItem = self.getActiveIndex(),
            orientation = vars.direction === 'left' ? 'next' : 'prev';
        vars.isSliding && setTimeout(function () {
          if (vars.touchPosition){
            vars.isSliding = false;
            slides[next].classList.add('active');
            slides[activeItem].classList.remove('active');
            slides[next].classList.remove(("carousel-item-" + orientation));
            slides[next].classList.remove(("carousel-item-" + (vars.direction)));
            slides[activeItem].classList.remove(("carousel-item-" + (vars.direction)));
            dispatchCustomEvent.call(element, slidCustomEvent);
            if ( !document.hidden && ops.interval && !element.classList.contains('paused') ) {
              self.cycle();
            }
          }
        }, timeout);
      }
    }
    self.cycle = function () {
      if (vars.timer) {
        clearInterval(vars.timer);
        vars.timer = null;
      }
      vars.timer = setInterval(function () {
        var idx = vars.index || self.getActiveIndex();
        isElementInScrollRange(element) && (idx++, self.slideTo( idx ) );
      }, ops.interval);
    };
    self.slideTo = function (next) {
      if (vars.isSliding) { return; }
      var activeItem = self.getActiveIndex(), orientation;
      if ( activeItem === next ) {
        return;
      } else if  ( (activeItem < next ) || (activeItem === 0 && next === slides.length -1 ) ) {
        vars.direction = 'left';
      } else if  ( (activeItem > next) || (activeItem === slides.length - 1 && next === 0 ) ) {
        vars.direction = 'right';
      }
      if ( next < 0 ) { next = slides.length - 1; }
      else if ( next >= slides.length ){ next = 0; }
      orientation = vars.direction === 'left' ? 'next' : 'prev';
      slideCustomEvent = bootstrapCustomEvent('slide', 'carousel', slides[next]);
      slidCustomEvent = bootstrapCustomEvent('slid', 'carousel', slides[next]);
      dispatchCustomEvent.call(element, slideCustomEvent);
      if (slideCustomEvent.defaultPrevented) { return; }
      vars.index = next;
      vars.isSliding = true;
      clearInterval(vars.timer);
      vars.timer = null;
      setActivePage( next );
      if ( getElementTransitionDuration(slides[next]) && element.classList.contains('slide') ) {
        slides[next].classList.add(("carousel-item-" + orientation));
        slides[next].offsetWidth;
        slides[next].classList.add(("carousel-item-" + (vars.direction)));
        slides[activeItem].classList.add(("carousel-item-" + (vars.direction)));
        emulateTransitionEnd(slides[next], transitionEndHandler);
      } else {
        slides[next].classList.add('active');
        slides[next].offsetWidth;
        slides[activeItem].classList.remove('active');
        setTimeout(function () {
          vars.isSliding = false;
          if ( ops.interval && element && !element.classList.contains('paused') ) {
            self.cycle();
          }
          dispatchCustomEvent.call(element, slidCustomEvent);
        }, 100 );
      }
    };
    self.getActiveIndex = function () { return Array.from(slides).indexOf(element.getElementsByClassName('carousel-item active')[0]) || 0; };
    self.dispose = function () {
      var itemClasses = ['left','right','prev','next'];
      Array.from(slides).map(function (slide,idx) {
        slide.classList.contains('active') && setActivePage( idx );
        itemClasses.map(function (cls) { return slide.classList.remove(("carousel-item-" + cls)); });
      });
      clearInterval(vars.timer);
      toggleEvents();
      vars = {};
      ops = {};
      delete element.Carousel;
    };
    element = queryElement( element );
    element.Carousel && element.Carousel.dispose();
    slides = element.getElementsByClassName('carousel-item');
    leftArrow = element.getElementsByClassName('carousel-control-prev')[0];
    rightArrow = element.getElementsByClassName('carousel-control-next')[0];
    indicator = element.getElementsByClassName('carousel-indicators')[0];
    indicators = indicator && indicator.getElementsByTagName( "LI" ) || [];
    if (slides.length < 2) { return }
    var
      intervalAttribute = element.getAttribute('data-interval'),
      intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),
      touchData = element.getAttribute('data-touch') === 'false' ? 0 : 1,
      pauseData = element.getAttribute('data-pause') === 'hover' || false,
      keyboardData = element.getAttribute('data-keyboard') === 'true' || false,
      intervalOption = options.interval,
      touchOption = options.touch;
    ops = {};
    ops.keyboard = options.keyboard === true || keyboardData;
    ops.pause = (options.pause === 'hover' || pauseData) ? 'hover' : false;
    ops.touch = touchOption || touchData;
    ops.interval = typeof intervalOption === 'number' ? intervalOption
                : intervalOption === false || intervalData === 0 || intervalData === false ? 0
                : isNaN(intervalData) ? 5000
                : intervalData;
    if (self.getActiveIndex()<0) {
      slides.length && slides[0].classList.add('active');
      indicators.length && setActivePage(0);
    }
    vars = {};
    vars.direction = 'left';
    vars.index = 0;
    vars.timer = null;
    vars.isSliding = false;
    vars.isTouch = false;
    vars.touchPosition = {
      startX : 0,
      currentX : 0,
      endX : 0
    };
    toggleEvents(1);
    if ( ops.interval ){ self.cycle(); }
    element.Carousel = self;
  }

  function Collapse(element,options) {
    options = options || {};
    var self = this;
    var accordion = null,
        collapse = null,
        activeCollapse,
        activeElement,
        showCustomEvent,
        shownCustomEvent,
        hideCustomEvent,
        hiddenCustomEvent;
    function openAction(collapseElement, toggle) {
      dispatchCustomEvent.call(collapseElement, showCustomEvent);
      if ( showCustomEvent.defaultPrevented ) { return; }
      collapseElement.isAnimating = true;
      collapseElement.classList.add('collapsing');
      collapseElement.classList.remove('collapse');
      collapseElement.style.height = (collapseElement.scrollHeight) + "px";
      emulateTransitionEnd(collapseElement, function () {
        collapseElement.isAnimating = false;
        collapseElement.setAttribute('aria-expanded','true');
        toggle.setAttribute('aria-expanded','true');
        collapseElement.classList.remove('collapsing');
        collapseElement.classList.add('collapse');
        collapseElement.classList.add('show');
        collapseElement.style.height = '';
        dispatchCustomEvent.call(collapseElement, shownCustomEvent);
      });
    }
    function closeAction(collapseElement, toggle) {
      dispatchCustomEvent.call(collapseElement, hideCustomEvent);
      if ( hideCustomEvent.defaultPrevented ) { return; }
      collapseElement.isAnimating = true;
      collapseElement.style.height = (collapseElement.scrollHeight) + "px";
      collapseElement.classList.remove('collapse');
      collapseElement.classList.remove('show');
      collapseElement.classList.add('collapsing');
      collapseElement.offsetWidth;
      collapseElement.style.height = '0px';
      emulateTransitionEnd(collapseElement, function () {
        collapseElement.isAnimating = false;
        collapseElement.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-expanded','false');
        collapseElement.classList.remove('collapsing');
        collapseElement.classList.add('collapse');
        collapseElement.style.height = '';
        dispatchCustomEvent.call(collapseElement, hiddenCustomEvent);
      });
    }
    self.toggle = function (e) {
      if (e && e.target.tagName === 'A' || element.tagName === 'A') {e.preventDefault();}
      if (element.contains(e.target) || e.target === element) {
        if (!collapse.classList.contains('show')) { self.show(); }
        else { self.hide(); }
      }
    };
    self.hide = function () {
      if ( collapse.isAnimating ) { return; }
      closeAction(collapse,element);
      element.classList.add('collapsed');
    };
    self.show = function () {
      if ( accordion ) {
        activeCollapse = accordion.getElementsByClassName("collapse show")[0];
        activeElement = activeCollapse && (queryElement(("[data-target=\"#" + (activeCollapse.id) + "\"]"),accordion)
                      || queryElement(("[href=\"#" + (activeCollapse.id) + "\"]"),accordion) );
      }
      if ( !collapse.isAnimating ) {
        if ( activeElement && activeCollapse !== collapse ) {
          closeAction(activeCollapse,activeElement);
          activeElement.classList.add('collapsed');
        }
        openAction(collapse,element);
        element.classList.remove('collapsed');
      }
    };
    self.dispose = function () {
      element.removeEventListener('click',self.toggle,false);
      delete element.Collapse;
    };
      element = queryElement(element);
      element.Collapse && element.Collapse.dispose();
      var accordionData = element.getAttribute('data-parent');
      showCustomEvent = bootstrapCustomEvent('show', 'collapse');
      shownCustomEvent = bootstrapCustomEvent('shown', 'collapse');
      hideCustomEvent = bootstrapCustomEvent('hide', 'collapse');
      hiddenCustomEvent = bootstrapCustomEvent('hidden', 'collapse');
      collapse = queryElement(options.target || element.getAttribute('data-target') || element.getAttribute('href'));
      collapse.isAnimating = false;
      accordion = element.closest(options.parent || accordionData);
      if ( !element.Collapse ) {
        element.addEventListener('click',self.toggle,false);
      }
      element.Collapse = self;
  }

  function setFocus (element){
    element.focus ? element.focus() : element.setActive();
  }

  function Dropdown(element,option) {
    var self = this,
        showCustomEvent,
        shownCustomEvent,
        hideCustomEvent,
        hiddenCustomEvent,
        relatedTarget = null,
        parent, menu, menuItems = [],
        persist;
    function preventEmptyAnchor(anchor) {
      (anchor.href && anchor.href.slice(-1) === '#' || anchor.parentNode && anchor.parentNode.href
        && anchor.parentNode.href.slice(-1) === '#') && this.preventDefault();
    }
    function toggleDismiss() {
      var action = element.open ? 'addEventListener' : 'removeEventListener';
      document[action]('click',dismissHandler,false);
      document[action]('keydown',preventScroll,false);
      document[action]('keyup',keyHandler,false);
      document[action]('focus',dismissHandler,false);
    }
    function dismissHandler(e) {
      var eventTarget = e.target,
            hasData = eventTarget && (eventTarget.getAttribute('data-toggle')
                                  || eventTarget.parentNode && eventTarget.parentNode.getAttribute
                                  && eventTarget.parentNode.getAttribute('data-toggle'));
      if ( e.type === 'focus' && (eventTarget === element || eventTarget === menu || menu.contains(eventTarget) ) ) {
        return;
      }
      if ( (eventTarget === menu || menu.contains(eventTarget)) && (persist || hasData) ) { return; }
      else {
        relatedTarget = eventTarget === element || element.contains(eventTarget) ? element : null;
        self.hide();
      }
      preventEmptyAnchor.call(e,eventTarget);
    }
    function clickHandler(e) {
      relatedTarget = element;
      self.show();
      preventEmptyAnchor.call(e,e.target);
    }
    function preventScroll(e) {
      var key = e.which || e.keyCode;
      if( key === 38 || key === 40 ) { e.preventDefault(); }
    }
    function keyHandler(e) {
      var key = e.which || e.keyCode,
          activeItem = document.activeElement,
          isSameElement = activeItem === element,
          isInsideMenu = menu.contains(activeItem),
          isMenuItem = activeItem.parentNode === menu || activeItem.parentNode.parentNode === menu,
          idx = menuItems.indexOf(activeItem);
      if ( isMenuItem ) {
        idx = isSameElement ? 0
                            : key === 38 ? (idx>1?idx-1:0)
                            : key === 40 ? (idx<menuItems.length-1?idx+1:idx) : idx;
        menuItems[idx] && setFocus(menuItems[idx]);
      }
      if ( (menuItems.length && isMenuItem
            || !menuItems.length && (isInsideMenu || isSameElement)
            || !isInsideMenu )
            && element.open && key === 27
      ) {
        self.toggle();
        relatedTarget = null;
      }
    }
    self.show = function () {
      showCustomEvent = bootstrapCustomEvent('show', 'dropdown', relatedTarget);
      dispatchCustomEvent.call(parent, showCustomEvent);
      if ( showCustomEvent.defaultPrevented ) { return; }
      menu.classList.add('show');
      parent.classList.add('show');
      element.setAttribute('aria-expanded',true);
      element.open = true;
      element.removeEventListener('click',clickHandler,false);
      setTimeout(function () {
        setFocus( menu.getElementsByTagName('INPUT')[0] || element );
        toggleDismiss();
        shownCustomEvent = bootstrapCustomEvent( 'shown', 'dropdown', relatedTarget);
        dispatchCustomEvent.call(parent, shownCustomEvent);
      },1);
    };
    self.hide = function () {
      hideCustomEvent = bootstrapCustomEvent('hide', 'dropdown', relatedTarget);
      dispatchCustomEvent.call(parent, hideCustomEvent);
      if ( hideCustomEvent.defaultPrevented ) { return; }
      menu.classList.remove('show');
      parent.classList.remove('show');
      element.setAttribute('aria-expanded',false);
      element.open = false;
      toggleDismiss();
      setFocus(element);
      setTimeout(function () {
        element.Dropdown && element.addEventListener('click',clickHandler,false);
      },1);
      hiddenCustomEvent = bootstrapCustomEvent('hidden', 'dropdown', relatedTarget);
      dispatchCustomEvent.call(parent, hiddenCustomEvent);
    };
    self.toggle = function () {
      if (parent.classList.contains('show') && element.open) { self.hide(); }
      else { self.show(); }
    };
    self.dispose = function () {
      if (parent.classList.contains('show') && element.open) { self.hide(); }
      element.removeEventListener('click',clickHandler,false);
      delete element.Dropdown;
    };
    element = queryElement(element);
    element.Dropdown && element.Dropdown.dispose();
    parent = element.parentNode;
    menu = queryElement('.dropdown-menu', parent);
    Array.from(menu.children).map(function (child){
      child.children.length && (child.children[0].tagName === 'A' && menuItems.push(child.children[0]));
      child.tagName === 'A' && menuItems.push(child);
    });
    if ( !element.Dropdown ) {
      !('tabindex' in menu) && menu.setAttribute('tabindex', '0');
      element.addEventListener('click',clickHandler,false);
    }
    persist = option === true || element.getAttribute('data-persist') === 'true' || false;
    element.open = false;
    element.Dropdown = self;
  }

  function Modal(element,options) {
    options = options || {};
    var self = this, modal,
      showCustomEvent,
      shownCustomEvent,
      hideCustomEvent,
      hiddenCustomEvent,
      relatedTarget = null,
      scrollBarWidth,
      overlay,
      overlayDelay,
      fixedItems,
      ops = {};
    function setScrollbar() {
      var openModal = document.body.classList.contains('modal-open'),
          bodyPad = parseInt(getComputedStyle(document.body).paddingRight),
          bodyOverflow = document.documentElement.clientHeight !== document.documentElement.scrollHeight
                      || document.body.clientHeight !== document.body.scrollHeight,
          modalOverflow = modal.clientHeight !== modal.scrollHeight;
      scrollBarWidth = measureScrollbar();
      modal.style.paddingRight = !modalOverflow && scrollBarWidth ? (scrollBarWidth + "px") : '';
      document.body.style.paddingRight = modalOverflow || bodyOverflow ? ((bodyPad + (openModal ? 0:scrollBarWidth)) + "px") : '';
      fixedItems.length && fixedItems.map(function (fixed){
        var itemPad = getComputedStyle(fixed).paddingRight;
        fixed.style.paddingRight = modalOverflow || bodyOverflow ? ((parseInt(itemPad) + (openModal?0:scrollBarWidth)) + "px") : ((parseInt(itemPad)) + "px");
      });
    }
    function resetScrollbar() {
      document.body.style.paddingRight = '';
      modal.style.paddingRight = '';
      fixedItems.length && fixedItems.map(function (fixed){
        fixed.style.paddingRight = '';
      });
    }
    function measureScrollbar() {
      var scrollDiv = document.createElement('div'), widthValue;
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      widthValue = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return widthValue;
    }
    function createOverlay() {
      var newOverlay = document.createElement('div');
      overlay = queryElement('.modal-backdrop');
      if ( overlay === null ) {
        newOverlay.setAttribute('class', 'modal-backdrop' + (ops.animation ? ' fade' : ''));
        overlay = newOverlay;
        document.body.appendChild(overlay);
      }
      return overlay;
    }
    function removeOverlay () {
      overlay = queryElement('.modal-backdrop');
      if ( overlay && !document.getElementsByClassName('modal show')[0] ) {
        document.body.removeChild(overlay); overlay = null;
      }
      overlay === null && (document.body.classList.remove('modal-open'), resetScrollbar());
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      window[action]( 'resize', self.update, passiveHandler);
      modal[action]( 'click',dismissHandler,false);
      document[action]( 'keydown',keyHandler,false);
    }
    function beforeShow() {
      modal.style.display = 'block';
      setScrollbar();
      !document.getElementsByClassName('modal show')[0] && document.body.classList.add('modal-open');
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', false);
      modal.classList.contains('fade') ? emulateTransitionEnd(modal, triggerShow) : triggerShow();
    }
    function triggerShow() {
      setFocus(modal);
      modal.isAnimating = false;
      toggleEvents(1);
      shownCustomEvent = bootstrapCustomEvent('shown', 'modal', relatedTarget);
      dispatchCustomEvent.call(modal, shownCustomEvent);
    }
    function triggerHide(force) {
      modal.style.display = '';
      element && (setFocus(element));
      overlay = queryElement('.modal-backdrop');
      if (force !== 1 && overlay && overlay.classList.contains('show') && !document.getElementsByClassName('modal show')[0]) {
        overlay.classList.remove('show');
        emulateTransitionEnd(overlay,removeOverlay);
      } else {
        removeOverlay();
      }
      toggleEvents();
      modal.isAnimating = false;
      hiddenCustomEvent = bootstrapCustomEvent('hidden', 'modal');
      dispatchCustomEvent.call(modal, hiddenCustomEvent);
    }
    function clickHandler(e) {
      if ( modal.isAnimating ) { return; }
      var clickTarget = e.target,
          modalID = "#" + (modal.getAttribute('id')),
          targetAttrValue = clickTarget.getAttribute('data-target') || clickTarget.getAttribute('href'),
          elemAttrValue = element.getAttribute('data-target') || element.getAttribute('href');
      if ( !modal.classList.contains('show')
          && (clickTarget === element && targetAttrValue === modalID
          || element.contains(clickTarget) && elemAttrValue === modalID) ) {
        modal.modalTrigger = element;
        relatedTarget = element;
        self.show();
        e.preventDefault();
      }
    }
    function keyHandler(ref) {
      var which = ref.which;
      if (!modal.isAnimating && ops.keyboard && which == 27 && modal.classList.contains('show') ) {
        self.hide();
      }
    }
    function dismissHandler(e) {
      if ( modal.isAnimating ) { return; }
      var clickTarget = e.target,
          hasData = clickTarget.getAttribute('data-dismiss') === 'modal',
          parentWithData = clickTarget.closest('[data-dismiss="modal"]');
      if ( modal.classList.contains('show') && ( parentWithData || hasData
          || clickTarget === modal && ops.backdrop !== 'static' ) ) {
        self.hide(); relatedTarget = null;
        e.preventDefault();
      }
    }
    self.toggle = function () {
      if ( modal.classList.contains('show') ) {self.hide();} else {self.show();}
    };
    self.show = function () {
      if (modal.classList.contains('show') && !!modal.isAnimating ) {return}
      showCustomEvent = bootstrapCustomEvent('show', 'modal', relatedTarget);
      dispatchCustomEvent.call(modal, showCustomEvent);
      if ( showCustomEvent.defaultPrevented ) { return; }
      modal.isAnimating = true;
      var currentOpen = document.getElementsByClassName('modal show')[0];
      if (currentOpen && currentOpen !== modal) {
        currentOpen.modalTrigger && currentOpen.modalTrigger.Modal.hide();
        currentOpen.Modal && currentOpen.Modal.hide();
      }
      if ( ops.backdrop ) {
        overlay = createOverlay();
      }
      if ( overlay && !currentOpen && !overlay.classList.contains('show') ) {
        overlay.offsetWidth;
        overlayDelay = getElementTransitionDuration(overlay);
        overlay.classList.add('show');
      }
      !currentOpen ? setTimeout( beforeShow, overlay && overlayDelay ? overlayDelay:0 ) : beforeShow();
    };
    self.hide = function (force) {
      if ( !modal.classList.contains('show') ) {return}
      hideCustomEvent = bootstrapCustomEvent( 'hide', 'modal');
      dispatchCustomEvent.call(modal, hideCustomEvent);
      if ( hideCustomEvent.defaultPrevented ) { return; }
      modal.isAnimating = true;
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', true);
      modal.classList.contains('fade') && force !== 1 ? emulateTransitionEnd(modal, triggerHide) : triggerHide();
    };
    self.setContent = function (content) {
      queryElement('.modal-content',modal).innerHTML = content;
    };
    self.update = function () {
      if (modal.classList.contains('show')) {
        setScrollbar();
      }
    };
    self.dispose = function () {
      self.hide(1);
      if (element) {element.removeEventListener('click',clickHandler,false); delete element.Modal; }
      else {delete modal.Modal;}
    };
    element = queryElement(element);
    var checkModal = queryElement( element.getAttribute('data-target') || element.getAttribute('href') );
    modal = element.classList.contains('modal') ? element : checkModal;
    fixedItems = Array.from(document.getElementsByClassName('fixed-top'))
                      .concat(Array.from(document.getElementsByClassName('fixed-bottom')));
    if ( element.classList.contains('modal') ) { element = null; }
    element && element.Modal && element.Modal.dispose();
    modal && modal.Modal && modal.Modal.dispose();
    ops.keyboard = options.keyboard === false || modal.getAttribute('data-keyboard') === 'false' ? false : true;
    ops.backdrop = options.backdrop === 'static' || modal.getAttribute('data-backdrop') === 'static' ? 'static' : true;
    ops.backdrop = options.backdrop === false || modal.getAttribute('data-backdrop') === 'false' ? false : ops.backdrop;
    ops.animation = modal.classList.contains('fade') ? true : false;
    ops.content = options.content;
    modal.isAnimating = false;
    if ( element && !element.Modal ) {
      element.addEventListener('click',clickHandler,false);
    }
    if ( ops.content ) {
      self.setContent( ops.content.trim() );
    }
    if (element) {
      modal.modalTrigger = element;
      element.Modal = self;
    } else {
      modal.Modal = self;
    }
  }

  var mouseClickEvents = { down: 'mousedown', up: 'mouseup' };

  function getScroll() {
    return {
      y : window.pageYOffset || document.documentElement.scrollTop,
      x : window.pageXOffset || document.documentElement.scrollLeft
    }
  }

  function styleTip(link,element,position,parent) {
    var tipPositions = /\b(top|bottom|left|right)+/,
        elementDimensions = { w : element.offsetWidth, h: element.offsetHeight },
        windowWidth = (document.documentElement.clientWidth || document.body.clientWidth),
        windowHeight = (document.documentElement.clientHeight || document.body.clientHeight),
        rect = link.getBoundingClientRect(),
        scroll = parent === document.body ? getScroll() : { x: parent.offsetLeft + parent.scrollLeft, y: parent.offsetTop + parent.scrollTop },
        linkDimensions = { w: rect.right - rect.left, h: rect.bottom - rect.top },
        isPopover = element.classList.contains('popover'),
        arrow = element.getElementsByClassName('arrow')[0],
        halfTopExceed = rect.top + linkDimensions.h/2 - elementDimensions.h/2 < 0,
        halfLeftExceed = rect.left + linkDimensions.w/2 - elementDimensions.w/2 < 0,
        halfRightExceed = rect.left + elementDimensions.w/2 + linkDimensions.w/2 >= windowWidth,
        halfBottomExceed = rect.top + elementDimensions.h/2 + linkDimensions.h/2 >= windowHeight,
        topExceed = rect.top - elementDimensions.h < 0,
        leftExceed = rect.left - elementDimensions.w < 0,
        bottomExceed = rect.top + elementDimensions.h + linkDimensions.h >= windowHeight,
        rightExceed = rect.left + elementDimensions.w + linkDimensions.w >= windowWidth;
    position = (position === 'left' || position === 'right') && leftExceed && rightExceed ? 'top' : position;
    position = position === 'top' && topExceed ? 'bottom' : position;
    position = position === 'bottom' && bottomExceed ? 'top' : position;
    position = position === 'left' && leftExceed ? 'right' : position;
    position = position === 'right' && rightExceed ? 'left' : position;
    var topPosition,
      leftPosition,
      arrowTop,
      arrowLeft,
      arrowWidth,
      arrowHeight;
    element.className.indexOf(position) === -1 && (element.className = element.className.replace(tipPositions,position));
    arrowWidth = arrow.offsetWidth; arrowHeight = arrow.offsetHeight;
    if ( position === 'left' || position === 'right' ) {
      if ( position === 'left' ) {
        leftPosition = rect.left + scroll.x - elementDimensions.w - ( isPopover ? arrowWidth : 0 );
      } else {
        leftPosition = rect.left + scroll.x + linkDimensions.w;
      }
      if (halfTopExceed) {
        topPosition = rect.top + scroll.y;
        arrowTop = linkDimensions.h/2 - arrowWidth;
      } else if (halfBottomExceed) {
        topPosition = rect.top + scroll.y - elementDimensions.h + linkDimensions.h;
        arrowTop = elementDimensions.h - linkDimensions.h/2 - arrowWidth;
      } else {
        topPosition = rect.top + scroll.y - elementDimensions.h/2 + linkDimensions.h/2;
        arrowTop = elementDimensions.h/2 - (isPopover ? arrowHeight*0.9 : arrowHeight/2);
      }
    } else if ( position === 'top' || position === 'bottom' ) {
      if ( position === 'top') {
        topPosition =  rect.top + scroll.y - elementDimensions.h - ( isPopover ? arrowHeight : 0 );
      } else {
        topPosition = rect.top + scroll.y + linkDimensions.h;
      }
      if (halfLeftExceed) {
        leftPosition = 0;
        arrowLeft = rect.left + linkDimensions.w/2 - arrowWidth;
      } else if (halfRightExceed) {
        leftPosition = windowWidth - elementDimensions.w*1.01;
        arrowLeft = elementDimensions.w - ( windowWidth - rect.left ) + linkDimensions.w/2 - arrowWidth/2;
      } else {
        leftPosition = rect.left + scroll.x - elementDimensions.w/2 + linkDimensions.w/2;
        arrowLeft = elementDimensions.w/2 - ( isPopover ? arrowWidth : arrowWidth/2 );
      }
    }
    element.style.top = topPosition + 'px';
    element.style.left = leftPosition + 'px';
    arrowTop && (arrow.style.top = arrowTop + 'px');
    arrowLeft && (arrow.style.left = arrowLeft + 'px');
  }

  function Popover(element,options) {
    options = options || {};
    var self = this;
    var popover = null,
        timer = 0,
        isIphone = /(iPhone|iPod|iPad)/.test(navigator.userAgent),
        titleString,
        contentString,
        ops = {};
    var triggerData,
        animationData,
        placementData,
        dismissibleData,
        delayData,
        containerData,
        closeBtn,
        showCustomEvent,
        shownCustomEvent,
        hideCustomEvent,
        hiddenCustomEvent,
        containerElement,
        containerDataElement,
        modal,
        navbarFixedTop,
        navbarFixedBottom,
        placementClass;
    function dismissibleHandler(e) {
      if (popover !== null && e.target === queryElement('.close',popover)) {
        self.hide();
      }
    }
    function getContents() {
      return {
        0 : options.title || element.getAttribute('data-title') || null,
        1 : options.content || element.getAttribute('data-content') || null
      }
    }
    function removePopover() {
      ops.container.removeChild(popover);
      timer = null; popover = null;
    }
    function createPopover() {
      titleString = getContents()[0] || null;
      contentString = getContents()[1];
      contentString = !!contentString ? contentString.trim() : null;
      popover = document.createElement('div');
      var popoverArrow = document.createElement('div');
      popoverArrow.classList.add('arrow');
      popover.appendChild(popoverArrow);
      if ( contentString !== null && ops.template === null ) {
        popover.setAttribute('role','tooltip');
        if (titleString !== null) {
          var popoverTitle = document.createElement('h3');
          popoverTitle.classList.add('popover-header');
          popoverTitle.innerHTML = ops.dismissible ? titleString + closeBtn : titleString;
          popover.appendChild(popoverTitle);
        }
        var popoverBodyMarkup = document.createElement('div');
        popoverBodyMarkup.classList.add('popover-body');
        popoverBodyMarkup.innerHTML = ops.dismissible && titleString === null ? contentString + closeBtn : contentString;
        popover.appendChild(popoverBodyMarkup);
      } else {
        var popoverTemplate = document.createElement('div');
        popoverTemplate.innerHTML = ops.template.trim();
        popover.className = popoverTemplate.firstChild.className;
        popover.innerHTML = popoverTemplate.firstChild.innerHTML;
        var popoverHeader = queryElement('.popover-header',popover),
            popoverBody = queryElement('.popover-body',popover);
        titleString && popoverHeader && (popoverHeader.innerHTML = titleString.trim());
        contentString && popoverBody && (popoverBody.innerHTML = contentString.trim());
      }
      ops.container.appendChild(popover);
      popover.style.display = 'block';
      !popover.classList.contains( 'popover') && popover.classList.add('popover');
      !popover.classList.contains( ops.animation) && popover.classList.add(ops.animation);
      !popover.classList.contains( placementClass) && popover.classList.add(placementClass);
    }
    function showPopover() {
      !popover.classList.contains('show') && ( popover.classList.add('show') );
    }
    function updatePopover() {
      styleTip(element, popover, ops.placement, ops.container);
    }
    function forceFocus () {
      if (popover === null) { element.focus(); }
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      if (ops.trigger === 'hover') {
        element[action]( mouseClickEvents.down, self.show );
        element[action]( mouseHoverEvents[0], self.show );
        if (!ops.dismissible) { element[action]( mouseHoverEvents[1], self.hide ); }
      } else if ('click' == ops.trigger) {
        element[action]( ops.trigger, self.toggle );
      } else if ('focus' == ops.trigger) {
        isIphone && element[action]( 'click', forceFocus, false );
        element[action]( ops.trigger, self.toggle );
      }
    }
    function touchHandler(e){
      if ( popover && popover.contains(e.target) || e.target === element || element.contains(e.target)) ; else {
        self.hide();
      }
    }
    function dismissHandlerToggle(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      if (ops.dismissible) {
        document[action]('click', dismissibleHandler, false );
      } else {
        'focus' == ops.trigger && element[action]( 'blur', self.hide );
        'hover' == ops.trigger && document[action]( 'touchstart', touchHandler, passiveHandler );
      }
      window[action]('resize', self.hide, passiveHandler );
    }
    function showTrigger() {
      dismissHandlerToggle(1);
      dispatchCustomEvent.call(element, shownCustomEvent);
    }
    function hideTrigger() {
      dismissHandlerToggle();
      removePopover();
      dispatchCustomEvent.call(element, hiddenCustomEvent);
    }
    self.toggle = function () {
      if (popover === null) { self.show(); }
      else { self.hide(); }
    };
    self.show = function () {
      clearTimeout(timer);
      timer = setTimeout( function () {
        if (popover === null) {
          dispatchCustomEvent.call(element, showCustomEvent);
          if ( showCustomEvent.defaultPrevented ) { return; }
          createPopover();
          updatePopover();
          showPopover();
          !!ops.animation ? emulateTransitionEnd(popover, showTrigger) : showTrigger();
        }
      }, 20 );
    };
    self.hide = function () {
      clearTimeout(timer);
      timer = setTimeout( function () {
        if (popover && popover !== null && popover.classList.contains('show')) {
          dispatchCustomEvent.call(element, hideCustomEvent);
          if ( hideCustomEvent.defaultPrevented ) { return; }
          popover.classList.remove('show');
          !!ops.animation ? emulateTransitionEnd(popover, hideTrigger) : hideTrigger();
        }
      }, ops.delay );
    };
    self.dispose = function () {
      self.hide();
      toggleEvents();
      delete element.Popover;
    };
    element = queryElement(element);
    element.Popover && element.Popover.dispose();
    triggerData = element.getAttribute('data-trigger');
    animationData = element.getAttribute('data-animation');
    placementData = element.getAttribute('data-placement');
    dismissibleData = element.getAttribute('data-dismissible');
    delayData = element.getAttribute('data-delay');
    containerData = element.getAttribute('data-container');
    closeBtn = '<button type="button" class="close">×</button>';
    showCustomEvent = bootstrapCustomEvent('show', 'popover');
    shownCustomEvent = bootstrapCustomEvent('shown', 'popover');
    hideCustomEvent = bootstrapCustomEvent('hide', 'popover');
    hiddenCustomEvent = bootstrapCustomEvent('hidden', 'popover');
    containerElement = queryElement(options.container);
    containerDataElement = queryElement(containerData);
    modal = element.closest('.modal');
    navbarFixedTop = element.closest('.fixed-top');
    navbarFixedBottom = element.closest('.fixed-bottom');
    ops.template = options.template ? options.template : null;
    ops.trigger = options.trigger ? options.trigger : triggerData || 'hover';
    ops.animation = options.animation && options.animation !== 'fade' ? options.animation : animationData || 'fade';
    ops.placement = options.placement ? options.placement : placementData || 'top';
    ops.delay = parseInt(options.delay || delayData) || 200;
    ops.dismissible = options.dismissible || dismissibleData === 'true' ? true : false;
    ops.container = containerElement ? containerElement
                            : containerDataElement ? containerDataElement
                            : navbarFixedTop ? navbarFixedTop
                            : navbarFixedBottom ? navbarFixedBottom
                            : modal ? modal : document.body;
    placementClass = "bs-popover-" + (ops.placement);
    var popoverContents = getContents();
    titleString = popoverContents[0];
    contentString = popoverContents[1];
    if ( !contentString && !ops.template ) { return; }
    if ( !element.Popover ) {
      toggleEvents(1);
    }
    element.Popover = self;
  }

  function ScrollSpy(element,options) {
    options = options || {};
    var self = this,
      vars,
      targetData,
      offsetData,
      spyTarget,
      scrollTarget,
      ops = {};
    function updateTargets(){
      var links = spyTarget.getElementsByTagName('A');
      if (vars.length !== links.length) {
        vars.items = [];
        vars.targets = [];
        Array.from(links).map(function (link){
          var href = link.getAttribute('href'),
            targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);
          if ( targetItem ) {
            vars.items.push(link);
            vars.targets.push(targetItem);
          }
        });
        vars.length = links.length;
      }
    }
    function updateItem(index) {
      var item = vars.items[index],
        targetItem = vars.targets[index],
        dropmenu = item.classList.contains('dropdown-item') && item.closest('.dropdown-menu'),
        dropLink = dropmenu && dropmenu.previousElementSibling,
        nextSibling = item.nextElementSibling,
        activeSibling = nextSibling && nextSibling.getElementsByClassName('active').length,
        targetRect = vars.isWindow && targetItem.getBoundingClientRect(),
        isActive = item.classList.contains('active') || false,
        topEdge = (vars.isWindow ? targetRect.top + vars.scrollOffset : targetItem.offsetTop) - ops.offset,
        bottomEdge = vars.isWindow ? targetRect.bottom + vars.scrollOffset - ops.offset
                   : vars.targets[index+1] ? vars.targets[index+1].offsetTop - ops.offset
                   : element.scrollHeight,
        inside = activeSibling || vars.scrollOffset >= topEdge && bottomEdge > vars.scrollOffset;
       if ( !isActive && inside ) {
        item.classList.add('active');
        if (dropLink && !dropLink.classList.contains('active') ) {
          dropLink.classList.add('active');
        }
        dispatchCustomEvent.call(element, bootstrapCustomEvent( 'activate', 'scrollspy', vars.items[index]));
      } else if ( isActive && !inside ) {
        item.classList.remove('active');
        if (dropLink && dropLink.classList.contains('active') && !item.parentNode.getElementsByClassName('active').length ) {
          dropLink.classList.remove('active');
        }
      } else if ( isActive && inside || !inside && !isActive ) {
        return;
      }
    }
    function updateItems() {
      updateTargets();
      vars.scrollOffset = vars.isWindow ? getScroll().y : element.scrollTop;
      vars.items.map(function (l,idx){ return updateItem(idx); });
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      scrollTarget[action]('scroll', self.refresh, passiveHandler );
      window[action]( 'resize', self.refresh, passiveHandler );
    }
    self.refresh = function () {
      updateItems();
    };
    self.dispose = function () {
      toggleEvents();
      delete element.ScrollSpy;
    };
    element = queryElement(element);
    element.ScrollSpy && element.ScrollSpy.dispose();
    targetData = element.getAttribute('data-target');
    offsetData = element.getAttribute('data-offset');
    spyTarget = queryElement(options.target || targetData);
    scrollTarget = element.offsetHeight < element.scrollHeight ? element : window;
    if (!spyTarget) { return }
    ops.target = spyTarget;
    ops.offset = parseInt(options.offset || offsetData) || 10;
    vars = {};
    vars.length = 0;
    vars.items = [];
    vars.targets = [];
    vars.isWindow = scrollTarget === window;
    if ( !element.ScrollSpy ) {
      toggleEvents(1);
    }
    self.refresh();
    element.ScrollSpy = self;
  }

  function Tab(element,options) {
    options = options || {};
    var self = this,
      heightData,
      tabs, dropdown,
      showCustomEvent,
      shownCustomEvent,
      hideCustomEvent,
      hiddenCustomEvent,
      next,
      tabsContentContainer = false,
      activeTab,
      activeContent,
      nextContent,
      containerHeight,
      equalContents,
      nextHeight,
      animateHeight;
    function triggerEnd() {
      tabsContentContainer.style.height = '';
      tabsContentContainer.classList.remove('collapsing');
      tabs.isAnimating = false;
    }
    function triggerShow() {
      if (tabsContentContainer) {
        if ( equalContents ) {
          triggerEnd();
        } else {
          setTimeout(function () {
            tabsContentContainer.style.height = nextHeight + "px";
            tabsContentContainer.offsetWidth;
            emulateTransitionEnd(tabsContentContainer, triggerEnd);
          },50);
        }
      } else {
        tabs.isAnimating = false;
      }
      shownCustomEvent = bootstrapCustomEvent('shown', 'tab', activeTab);
      dispatchCustomEvent.call(next, shownCustomEvent);
    }
    function triggerHide() {
      if (tabsContentContainer) {
        activeContent.style.float = 'left';
        nextContent.style.float = 'left';
        containerHeight = activeContent.scrollHeight;
      }
      showCustomEvent = bootstrapCustomEvent('show', 'tab', activeTab);
      hiddenCustomEvent = bootstrapCustomEvent('hidden', 'tab', next);
      dispatchCustomEvent.call(next, showCustomEvent);
      if ( showCustomEvent.defaultPrevented ) { return; }
      nextContent.classList.add('active');
      activeContent.classList.remove('active');
      if (tabsContentContainer) {
        nextHeight = nextContent.scrollHeight;
        equalContents = nextHeight === containerHeight;
        tabsContentContainer.classList.add('collapsing');
        tabsContentContainer.style.height = containerHeight + "px";
        tabsContentContainer.offsetHeight;
        activeContent.style.float = '';
        nextContent.style.float = '';
      }
      if ( nextContent.classList.contains('fade') ) {
        setTimeout(function () {
          nextContent.classList.add('show');
          emulateTransitionEnd(nextContent,triggerShow);
        },20);
      } else { triggerShow(); }
      dispatchCustomEvent.call(activeTab, hiddenCustomEvent);
    }
    function getActiveTab() {
      var activeTabs = tabs.getElementsByClassName('active'), activeTab;
      if ( activeTabs.length === 1 && !activeTabs[0].parentNode.classList.contains('dropdown') ) {
        activeTab = activeTabs[0];
      } else if ( activeTabs.length > 1 ) {
        activeTab = activeTabs[activeTabs.length-1];
      }
      return activeTab;
    }
    function getActiveContent() { return queryElement(getActiveTab().getAttribute('href')) }
    function clickHandler(e) {
      e.preventDefault();
      next = e.currentTarget;
      !tabs.isAnimating && self.show();
    }
    self.show = function () {
      next = next || element;
      if (!next.classList.contains('active')) {
        nextContent = queryElement(next.getAttribute('href'));
        activeTab = getActiveTab();
        activeContent = getActiveContent();
        hideCustomEvent = bootstrapCustomEvent( 'hide', 'tab', next);
        dispatchCustomEvent.call(activeTab, hideCustomEvent);
        if (hideCustomEvent.defaultPrevented) { return; }
        tabs.isAnimating = true;
        activeTab.classList.remove('active');
        activeTab.setAttribute('aria-selected','false');
        next.classList.add('active');
        next.setAttribute('aria-selected','true');
        if ( dropdown ) {
          if ( !element.parentNode.classList.contains('dropdown-menu') ) {
            if (dropdown.classList.contains('active')) { dropdown.classList.remove('active'); }
          } else {
            if (!dropdown.classList.contains('active')) { dropdown.classList.add('active'); }
          }
        }
        if (activeContent.classList.contains('fade')) {
          activeContent.classList.remove('show');
          emulateTransitionEnd(activeContent, triggerHide);
        } else { triggerHide(); }
      }
    };
    self.dispose = function () {
      element.removeEventListener('click',clickHandler,false);
      delete element.Tab;
    };
    element = queryElement(element);
    element.Tab && element.Tab.dispose();
    heightData = element.getAttribute('data-height');
    tabs = element.closest('.nav');
    dropdown = tabs && queryElement('.dropdown-toggle',tabs);
    animateHeight = !supportTransition || (options.height === false || heightData === 'false') ? false : true;
    tabs.isAnimating = false;
    if ( !element.Tab ) {
      element.addEventListener('click',clickHandler,false);
    }
    if (animateHeight) { tabsContentContainer = getActiveContent().parentNode; }
    element.Tab = self;
  }

  function Toast(element,options) {
    options = options || {};
    var self = this,
        toast, timer = 0,
        animationData,
        autohideData,
        delayData,
        showCustomEvent,
        hideCustomEvent,
        shownCustomEvent,
        hiddenCustomEvent,
        ops = {};
    function showComplete() {
      toast.classList.remove( 'showing' );
      toast.classList.add( 'show' );
      dispatchCustomEvent.call(toast,shownCustomEvent);
      if (ops.autohide) { self.hide(); }
    }
    function hideComplete() {
      toast.classList.add( 'hide' );
      dispatchCustomEvent.call(toast,hiddenCustomEvent);
    }
    function close () {
      toast.classList.remove('show' );
      ops.animation ? emulateTransitionEnd(toast, hideComplete) : hideComplete();
    }
    function disposeComplete() {
      clearTimeout(timer);
      element.removeEventListener('click',self.hide,false);
      delete element.Toast;
    }
    self.show = function () {
      if (toast && !toast.classList.contains('show')) {
        dispatchCustomEvent.call(toast,showCustomEvent);
        if (showCustomEvent.defaultPrevented) { return; }
        ops.animation && toast.classList.add( 'fade' );
        toast.classList.remove('hide' );
        toast.offsetWidth;
        toast.classList.add('showing' );
        ops.animation ? emulateTransitionEnd(toast, showComplete) : showComplete();
      }
    };
    self.hide = function (noTimer) {
      if (toast && toast.classList.contains('show')) {
        dispatchCustomEvent.call(toast,hideCustomEvent);
        if(hideCustomEvent.defaultPrevented) { return; }
        noTimer ? close() : (timer = setTimeout( close, ops.delay));
      }
    };
    self.dispose = function () {
      ops.animation ? emulateTransitionEnd(toast, disposeComplete) : disposeComplete();
    };
    element = queryElement(element);
    element.Toast && element.Toast.dispose();
    toast = element.closest('.toast');
    animationData = element.getAttribute('data-animation');
    autohideData = element.getAttribute('data-autohide');
    delayData = element.getAttribute('data-delay');
    showCustomEvent = bootstrapCustomEvent('show', 'toast');
    hideCustomEvent = bootstrapCustomEvent('hide', 'toast');
    shownCustomEvent = bootstrapCustomEvent('shown', 'toast');
    hiddenCustomEvent = bootstrapCustomEvent('hidden', 'toast');
    ops.animation = options.animation === false || animationData === 'false' ? 0 : 1;
    ops.autohide = options.autohide === false || autohideData === 'false' ? 0 : 1;
    ops.delay = parseInt(options.delay || delayData) || 500;
    if ( !element.Toast ) {
      element.addEventListener('click',self.hide,false);
    }
    element.Toast = self;
  }

  function Tooltip(element,options) {
    options = options || {};
    var self = this,
        tooltip = null, timer = 0, titleString,
        animationData,
        placementData,
        delayData,
        containerData,
        showCustomEvent,
        shownCustomEvent,
        hideCustomEvent,
        hiddenCustomEvent,
        containerElement,
        containerDataElement,
        modal,
        navbarFixedTop,
        navbarFixedBottom,
        placementClass,
        ops = {};
    function getTitle() {
      return element.getAttribute('title')
          || element.getAttribute('data-title')
          || element.getAttribute('data-original-title')
    }
    function removeToolTip() {
      ops.container.removeChild(tooltip);
      tooltip = null; timer = null;
    }
    function createToolTip() {
      titleString = getTitle();
      if ( titleString ) {
        tooltip = document.createElement('div');
        if (ops.template) {
          var tooltipMarkup = document.createElement('div');
          tooltipMarkup.innerHTML = ops.template.trim();
          tooltip.className = tooltipMarkup.firstChild.className;
          tooltip.innerHTML = tooltipMarkup.firstChild.innerHTML;
          queryElement('.tooltip-inner',tooltip).innerHTML = titleString.trim();
        } else {
          var tooltipArrow = document.createElement('div');
          tooltipArrow.classList.add('arrow');
          tooltip.appendChild(tooltipArrow);
          var tooltipInner = document.createElement('div');
          tooltipInner.classList.add('tooltip-inner');
          tooltip.appendChild(tooltipInner);
          tooltipInner.innerHTML = titleString;
        }
        tooltip.style.left = '0';
        tooltip.style.top = '0';
        tooltip.setAttribute('role','tooltip');
        !tooltip.classList.contains('tooltip') && tooltip.classList.add('tooltip');
        !tooltip.classList.contains(ops.animation) && tooltip.classList.add(ops.animation);
        !tooltip.classList.contains(placementClass) && tooltip.classList.add(placementClass);
        ops.container.appendChild(tooltip);
      }
    }
    function updateTooltip() {
      styleTip(element, tooltip, ops.placement, ops.container);
    }
    function showTooltip() {
      !tooltip.classList.contains('show') && ( tooltip.classList.add('show') );
    }
    function touchHandler(e){
      if ( tooltip && tooltip.contains(e.target) || e.target === element || element.contains(e.target)) ; else {
        self.hide();
      }
    }
    function toggleAction(action){
      action = action ? 'addEventListener' : 'removeEventListener';
      document[action]( 'touchstart', touchHandler, passiveHandler );
      window[action]( 'resize', self.hide, passiveHandler );
    }
    function showAction() {
      toggleAction(1);
      dispatchCustomEvent.call(element, shownCustomEvent);
    }
    function hideAction() {
      toggleAction();
      removeToolTip();
      dispatchCustomEvent.call(element, hiddenCustomEvent);
    }
    function toggleEvents(action) {
      action = action ? 'addEventListener' : 'removeEventListener';
      element[action](mouseClickEvents.down, self.show,false);
      element[action](mouseHoverEvents[0], self.show,false);
      element[action](mouseHoverEvents[1], self.hide,false);
    }
    self.show = function () {
      clearTimeout(timer);
      timer = setTimeout( function () {
        if (tooltip === null) {
          dispatchCustomEvent.call(element, showCustomEvent);
          if (showCustomEvent.defaultPrevented) { return; }
          if(createToolTip() !== false) {
            updateTooltip();
            showTooltip();
            !!ops.animation ? emulateTransitionEnd(tooltip, showAction) : showAction();
          }
        }
      }, 20 );
    };
    self.hide = function () {
      clearTimeout(timer);
      timer = setTimeout( function () {
        if (tooltip && tooltip.classList.contains('show')) {
          dispatchCustomEvent.call(element, hideCustomEvent);
          if (hideCustomEvent.defaultPrevented) { return; }
          tooltip.classList.remove('show');
          !!ops.animation ? emulateTransitionEnd(tooltip, hideAction) : hideAction();
        }
      }, ops.delay);
    };
    self.toggle = function () {
      if (!tooltip) { self.show(); }
      else { self.hide(); }
    };
    self.dispose = function () {
      toggleEvents();
      self.hide();
      element.setAttribute('title', element.getAttribute('data-original-title'));
      element.removeAttribute('data-original-title');
      delete element.Tooltip;
    };
    element = queryElement(element);
    element.Tooltip && element.Tooltip.dispose();
    animationData = element.getAttribute('data-animation');
    placementData = element.getAttribute('data-placement');
    delayData = element.getAttribute('data-delay');
    containerData = element.getAttribute('data-container');
    showCustomEvent = bootstrapCustomEvent('show', 'tooltip');
    shownCustomEvent = bootstrapCustomEvent('shown', 'tooltip');
    hideCustomEvent = bootstrapCustomEvent('hide', 'tooltip');
    hiddenCustomEvent = bootstrapCustomEvent('hidden', 'tooltip');
    containerElement = queryElement(options.container);
    containerDataElement = queryElement(containerData);
    modal = element.closest('.modal');
    navbarFixedTop = element.closest('.fixed-top');
    navbarFixedBottom = element.closest('.fixed-bottom');
    ops.animation = options.animation && options.animation !== 'fade' ? options.animation : animationData || 'fade';
    ops.placement = options.placement ? options.placement : placementData || 'top';
    ops.template = options.template ? options.template : null;
    ops.delay = parseInt(options.delay || delayData) || 200;
    ops.container = containerElement ? containerElement
                            : containerDataElement ? containerDataElement
                            : navbarFixedTop ? navbarFixedTop
                            : navbarFixedBottom ? navbarFixedBottom
                            : modal ? modal : document.body;
    placementClass = "bs-tooltip-" + (ops.placement);
    titleString = getTitle();
    if ( !titleString ) { return; }
    if (!element.Tooltip) {
      element.setAttribute('data-original-title',titleString);
      element.removeAttribute('title');
      toggleEvents(1);
    }
    element.Tooltip = self;
  }

  var componentsInit = {};

  function initializeDataAPI( Constructor, collection ){
    Array.from(collection).map(function (x){ return new Constructor(x); });
  }
  function initCallback(lookUp){
    lookUp = lookUp || document;
    for (var component in componentsInit) {
      initializeDataAPI( componentsInit[component][0], lookUp.querySelectorAll (componentsInit[component][1]) );
    }
  }

  componentsInit.Alert = [ Alert, '[data-dismiss="alert"]'];
  componentsInit.Button = [ Button, '[data-toggle="buttons"]' ];
  componentsInit.Carousel = [ Carousel, '[data-ride="carousel"]' ];
  componentsInit.Collapse = [ Collapse, '[data-toggle="collapse"]' ];
  componentsInit.Dropdown = [ Dropdown, '[data-toggle="dropdown"]'];
  componentsInit.Modal = [ Modal, '[data-toggle="modal"]' ];
  componentsInit.Popover = [ Popover, '[data-toggle="popover"],[data-tip="popover"]' ];
  componentsInit.ScrollSpy = [ ScrollSpy, '[data-spy="scroll"]' ];
  componentsInit.Tab = [ Tab, '[data-toggle="tab"]' ];
  componentsInit.Toast = [ Toast, '[data-dismiss="toast"]' ];
  componentsInit.Tooltip = [ Tooltip, '[data-toggle="tooltip"],[data-tip="tooltip"]' ];
  document.body ? initCallback() : document.addEventListener( 'DOMContentLoaded', function initWrapper(){
  	initCallback();
  	document.removeEventListener('DOMContentLoaded',initWrapper,false);
  }, false );

  function removeElementDataAPI( ConstructorName, collection ){
    Array.from(collection).map(function (x){ return x[ConstructorName].dispose(); });
  }
  function removeDataAPI(lookUp) {
    lookUp = lookUp || document;
    for (var component in componentsInit) {
      removeElementDataAPI( component, lookUp.querySelectorAll (componentsInit[component][1]) );
    }
  }

  var version = "3.0.10";

  var index = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip,
    initCallback: initCallback,
    removeDataAPI: removeDataAPI,
    componentsInit: componentsInit,
    Version: version
  };

  return index;

})));


/***/ }),

/***/ "./node_modules/form-serialize/index.js":
/*!**********************************************!*\
  !*** ./node_modules/form-serialize/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (val == undefined && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;


/***/ }),

/***/ "./node_modules/glightbox/dist/js/glightbox.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/glightbox/dist/js/glightbox.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var o=Date.now();function r(){var e={},t=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=r(!0,e[n],i[n]):e[n]=i[n])};i<n;i++){var l=arguments[i];s(l)}return e}function a(e,t){if((A(e)||e===window||e===document)&&(e=[e]),O(e)||P(e)||(e=[e]),0!=X(e))if(O(e)&&!P(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(P(e))for(var s in e)if(I(e,s)&&!1===t.call(e[s],e[s],s,e))break}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e[o]=e[o]||[],s={all:n,evt:null,found:null};return t&&i&&X(n)>0&&a(n,(function(e,n){if(e.eventName==t&&e.fn.toString()==i.toString())return s.found=!0,s.evt=n,!1})),s}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.onElement,n=t.withCallback,s=t.avoidDuplicate,l=void 0===s||s,o=t.once,r=void 0!==o&&o,c=t.useCapture,d=void 0!==c&&c,u=arguments.length>2?arguments[2]:void 0,g=i||[];function v(e){C(n)&&n.call(u,e,this),r&&v.destroy()}return E(g)&&(g=document.querySelectorAll(g)),v.destroy=function(){a(g,(function(t){var i=h(t,e,v);i.found&&i.all.splice(i.evt,1),t.removeEventListener&&t.removeEventListener(e,v,d)}))},a(g,(function(t){var i=h(t,e,v);(t.addEventListener&&l&&!i.found||!l)&&(t.addEventListener(e,v,d),i.all.push({eventName:e,fn:v}))})),v}function d(e,t){a(t.split(" "),(function(t){return e.classList.add(t)}))}function u(e,t){a(t.split(" "),(function(t){return e.classList.remove(t)}))}function g(e,t){return e.classList.contains(t)}function v(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e}}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"==t)return C(i)&&i(),!1;var n=S(),s=t.split(" ");a(s,(function(t){d(e,"g"+t)})),c(n,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){a(s,(function(e){u(t,"g"+e)})),C(i)&&i()}})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function m(e){e.style.display="block"}function y(e){e.style.display="none"}function b(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function x(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function S(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function w(e,t,i,n){if(e())t();else{var s;i||(i=100);var l=setInterval((function(){e()&&(clearInterval(l),s&&clearTimeout(s),t())}),i);n&&(s=setTimeout((function(){clearInterval(l)}),n))}}function T(e,t,i){if(M(e))console.error("Inject videos api error");else{var n;if(C(t)&&(i=t,t=!1),-1!==e.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+e+'"]'))&&n.length>0)return void(C(i)&&i());var s=document.getElementsByTagName("head")[0],l=s.querySelectorAll('link[rel="stylesheet"]'),o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=e,o.media="all",l?s.insertBefore(o,l[0]):s.appendChild(o),void(C(i)&&i())}if((n=document.querySelectorAll('script[src="'+e+'"]'))&&n.length>0){if(C(i)){if(E(t))return w((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=function(){if(C(i)){if(E(t))return w((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}},document.body.appendChild(r)}}}function k(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function C(e){return"function"==typeof e}function E(e){return"string"==typeof e}function A(e){return!(!e||!e.nodeType||1!=e.nodeType)}function L(e){return Array.isArray(e)}function O(e){return e&&e.length&&isFinite(e.length)}function P(t){return"object"===e(t)&&null!=t&&!C(t)&&!L(t)}function M(e){return null==e}function I(e,t){return null!==e&&hasOwnProperty.call(e,t)}function X(e){if(P(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)I(e,i)&&t++;return t}return e.length}function z(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Y(e){if(e.events.hasOwnProperty("keyboard"))return!1;e.events.keyboard=c("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;if(9==n){var l=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==l||"textarea"==l||"button"==l)return;t.preventDefault();var o=document.querySelectorAll(".gbtn");if(!o||o.length<=0)return;var r=s(o).filter((function(e){return g(e,"focused")}));if(!r.length){var a=document.querySelector('.gbtn[tabindex="0"]');return void(a&&(a.focus(),d(a,"focused")))}o.forEach((function(e){return u(e,"focused")}));var h=r[0].getAttribute("tabindex");h=h||"0";var c=parseInt(h)+1;c>o.length-1&&(c="0");var v=document.querySelector('.gbtn[tabindex="'.concat(c,'"]'));v&&(v.focus(),d(v,"focused"))}39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}})}function q(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function D(e,t){var i=function(e,t){var i=q(e)*q(t);if(0===i)return 0;var n=function(e,t){return e.x*t.x+e.y*t.y}(e,t)/i;return n>1&&(n=1),Math.acos(n)}(e,t);return function(e,t){return e.x*t.y-t.x*e.y}(e,t)>0&&(i*=-1),180*i/Math.PI}var _=function(){function e(i){t(this,e),this.handlers=[],this.el=i}return n(e,[{key:"add",value:function(e){this.handlers.push(e)}},{key:"del",value:function(e){e||(this.handlers=[]);for(var t=this.handlers.length;t>=0;t--)this.handlers[t]===e&&this.handlers.splice(t,1)}},{key:"dispatch",value:function(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments)}}}]),e}();function N(e,t){var i=new _(e);return i.add(t),i}var B=function(){function e(i,n){t(this,e),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=N(this.element,n.rotate||s),this.touchStart=N(this.element,n.touchStart||s),this.multipointStart=N(this.element,n.multipointStart||s),this.multipointEnd=N(this.element,n.multipointEnd||s),this.pinch=N(this.element,n.pinch||s),this.swipe=N(this.element,n.swipe||s),this.tap=N(this.element,n.tap||s),this.doubleTap=N(this.element,n.doubleTap||s),this.longTap=N(this.element,n.longTap||s),this.singleTap=N(this.element,n.singleTap||s),this.pressMove=N(this.element,n.pressMove||s),this.twoFingerPressMove=N(this.element,n.twoFingerPressMove||s),this.touchMove=N(this.element,n.touchMove||s),this.touchEnd=N(this.element,n.touchEnd||s),this.touchCancel=N(this.element,n.touchCancel||s),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(e,[{key:"start",value:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var t=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};t.x=i.x,t.y=i.y,this.pinchStartLen=q(t),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(e){if(e.touches){var t=this.preV,i=e.touches.length,n=e.touches[0].pageX,s=e.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var l=e.touches[1].pageX,o=e.touches[1].pageY,r={x:e.touches[1].pageX-n,y:e.touches[1].pageY-s};null!==t.x&&(this.pinchStartLen>0&&(e.zoom=q(r)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=D(r,t),this.rotate.dispatch(e,this.element)),t.x=r.x,t.y=r.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(n-this.x2+l-this.sx2)/2,e.deltaY=(s-this.y2+o-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=l,this.sy2=o}else{if(null!==this.x2){e.deltaX=n-this.x2,e.deltaY=s-this.y2;var a=Math.abs(this.x1-this.x2),h=Math.abs(this.y1-this.y2);(a>10||h>10)&&(this._preventTap=!0)}else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&e.preventDefault()}}},{key:"end",value:function(e){if(e.changedTouches){this._cancelLongTap();var t=this;e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){t.swipe.dispatch(e,t.element)}),0)):(this.tapTimeout=setTimeout((function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1)}),0),t.isDoubleTap||(t.singleTapTimeout=setTimeout((function(){t.singleTap.dispatch(e,t.element)}),250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(e,t){this[e]&&this[e].add(t)}},{key:"off",value:function(e,t){this[e]&&this[e].del(t)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),e}();function W(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),i=g(e,"gslide-media")?e:e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description");d(i,"greset"),p(i,"translate3d(0, 0, 0)");c(t,{onElement:i,once:!0,withCallback:function(e,t){u(i,"greset")}});i.style.opacity="",n&&(n.style.opacity="")}function H(e){if(e.events.hasOwnProperty("touch"))return!1;var t,i,n,s=x(),l=s.width,o=s.height,r=!1,a=null,h=null,c=null,f=!1,m=1,y=1,b=!1,S=!1,w=null,T=null,k=null,C=null,E=0,A=0,L=!1,O=!1,P={},M={},I=0,X=0,z=document.getElementById("glightbox-slider"),Y=document.querySelector(".goverlay"),q=new B(z,{touchStart:function(t){if(g(t.targetTouches[0].target,"ginner-container")||v(t.targetTouches[0].target,".gslide-desc"))return r=!1,!1;r=!0,M=t.targetTouches[0],P.pageX=t.targetTouches[0].pageX,P.pageY=t.targetTouches[0].pageY,I=t.targetTouches[0].clientX,X=t.targetTouches[0].clientY,a=e.activeSlide,h=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),c=null,g(h,"gslide-image")&&(c=h.querySelector("img")),u(Y,"greset"),t.pageX>20&&t.pageX<window.innerWidth-20||t.preventDefault()},touchMove:function(s){if(r&&(M=s.targetTouches[0],!b&&!S)){if(n&&n.offsetHeight>o){var a=P.pageX-M.pageX;if(Math.abs(a)<=13)return!1}f=!0;var d,u=s.targetTouches[0].clientX,g=s.targetTouches[0].clientY,v=I-u,m=X-g;if(Math.abs(v)>Math.abs(m)?(L=!1,O=!0):(O=!1,L=!0),t=M.pageX-P.pageX,E=100*t/l,i=M.pageY-P.pageY,A=100*i/o,L&&c&&(d=1-Math.abs(i)/o,Y.style.opacity=d,e.settings.touchFollowAxis&&(E=0)),O&&(d=1-Math.abs(t)/l,h.style.opacity=d,e.settings.touchFollowAxis&&(A=0)),!c)return p(h,"translate3d(".concat(E,"%, 0, 0)"));p(h,"translate3d(".concat(E,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(r){if(f=!1,S||b)return k=w,void(C=T);var t=Math.abs(parseInt(A)),i=Math.abs(parseInt(E));if(!(t>29&&c))return t<29&&i<25?(d(Y,"greset"),Y.style.opacity=1,W(h)):void 0;e.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,m=y||1},pinch:function(e){if(!c||f)return!1;b=!0,c.scaleX=c.scaleY=m*e.zoom;var t=m*e.zoom;if(S=!0,t<=1)return S=!1,t=1,C=null,k=null,w=null,T=null,void c.setAttribute("style","");t>4.5&&(t=4.5),c.style.transform="scale3d(".concat(t,", ").concat(t,", 1)"),y=t},pressMove:function(e){if(S&&!b){var t=M.pageX-P.pageX,i=M.pageY-P.pageY;k&&(t+=k),C&&(i+=C),w=t,T=i;var n="translate3d(".concat(t,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),p(c,n)}},swipe:function(t){if(!S)if(b)b=!1;else{if("Left"==t.direction){if(e.index==e.elements.length-1)return W(h);e.nextSlide()}if("Right"==t.direction){if(0==e.index)return W(h);e.prevSlide()}}}});e.events.touch=q}var j=function(){function e(i,n){var s=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t(this,e),this.img=i,this.slide=n,this.onclose=l,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(e){return s.dragStart(e)}),!1),this.img.addEventListener("mouseup",(function(e){return s.dragEnd(e)}),!1),this.img.addEventListener("mousemove",(function(e){return s.drag(e)}),!1),this.img.addEventListener("click",(function(e){return s.slide.classList.contains("dragging-nav")?(s.zoomOut(),!1):s.zoomedIn?void(s.zoomedIn&&!s.dragging&&s.zoomOut()):s.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(e,[{key:"zoomIn",value:function(){var e=this.widowWidth();if(!(this.zoomedIn||e<=768)){var t=this.img;if(t.setAttribute("data-style",t.getAttribute("style")),t.style.maxWidth=t.naturalWidth+"px",t.style.maxHeight=t.naturalHeight+"px",t.naturalWidth>e){var i=e/2-t.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(e){if(this.zoomedIn){var t=e.clientX-this.img.naturalWidth/2,i=e.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,t,i)}}},{key:"setTranslate",value:function(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),e}(),V=function(){function e(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e);var s=n.dragEl,l=n.toleranceX,o=void 0===l?40:l,r=n.toleranceY,a=void 0===r?65:r,h=n.slide,c=void 0===h?null:h,d=n.instance,u=void 0===d?null:d;this.el=s,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=o,this.toleranceY=a,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=c,this.instance=u,this.el.addEventListener("mousedown",(function(e){return i.dragStart(e)}),!1),this.el.addEventListener("mouseup",(function(e){return i.dragEnd(e)}),!1),this.el.addEventListener("mousemove",(function(e){return i.drag(e)}),!1)}return n(e,[{key:"dragStart",value:function(e){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset);var t=e.target.nodeName.toLowerCase();e.target.classList.contains("nodrag")||v(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&v(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=v(e.target,".ginner-container")))}}},{key:"dragEnd",value:function(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var t=Math.abs(this.currentX),i=Math.abs(this.currentY);if(t>0&&t>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=t&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var s=this.shouldClose();return!this.instance.settings.dragAutoSnap&&s&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&s&&this.instance.close())}}}},{key:"shouldChange",value:function(){var e=!1;if(Math.abs(this.currentX)>=this.toleranceX){var t=this.currentX>0?"right":"left";("left"==t&&this.slide!==this.slide.parentNode.lastChild||"right"==t&&this.slide!==this.slide.parentNode.firstChild)&&(e=t)}return e}},{key:"shouldClose",value:function(){var e=!1;return Math.abs(this.currentY)>=this.toleranceY&&(e=!0),e}},{key:"setTranslate",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.style.transition=n?"all .2s ease":"",e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}}]),e}();function F(e,t,i){var n=e.querySelector(".gslide-media"),s=new Image,l="gSlideTitle_"+t.index,o="gSlideDesc_"+t.index;s.addEventListener("load",(function(){C(i)&&i()}),!1),s.src=t.href,s.alt="",""!==t.title&&s.setAttribute("aria-labelledby",l),""!==t.description&&s.setAttribute("aria-describedby",o),n.insertBefore(s,n.firstChild)}function R(e,t,i){var n=this,s=e.querySelector(".ginner-container"),l="gvideo"+t.index,o=e.querySelector(".gslide-media"),r=this.getAllPlayers();d(s,"gvideo-container"),o.insertBefore(b('<div class="gvideo-wrapper"></div>'),o.firstChild);var a=e.querySelector(".gvideo-wrapper");T(this.settings.plyr.css);var h=t.href,c=location.protocol.replace(":",""),u="",g="",v=!1;"file"==c&&(c="http"),o.style.maxWidth=t.width,T(this.settings.plyr.js,"Plyr",(function(){if(h.match(/vimeo\.com\/([0-9]*)/)){var e=/vimeo.*\/(\d+)/i.exec(h);u="vimeo",g=e[1]}if(h.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||h.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var s=function(e){var t="";t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e;return t}(h);u="youtube",g=s}if(null!==h.match(/\.(mp4|ogg|webm|mov)$/)){u="local";var o='<video id="'+l+'" ';o+='style="background:#000; max-width: '.concat(t.width,';" '),o+='preload="metadata" ',o+='x-webkit-airplay="allow" ',o+='webkit-playsinline="" ',o+="controls ",o+='class="gvideo-local">';var c=h.toLowerCase().split(".").pop(),f={mp4:"",ogg:"",webm:""};for(var p in f[c="mov"==c?"mp4":c]=h,f)if(f.hasOwnProperty(p)){var m=f[p];t.hasOwnProperty(p)&&(m=t[p]),""!==m&&(o+='<source src="'.concat(m,'" type="video/').concat(p,'">'))}v=b(o+="</video>")}var y=v||b('<div id="'.concat(l,'" data-plyr-provider="').concat(u,'" data-plyr-embed-id="').concat(g,'"></div>'));d(a,"".concat(u,"-video gvideo")),a.appendChild(y),a.setAttribute("data-id",l),a.setAttribute("data-index",t.index);var x=I(n.settings.plyr,"config")?n.settings.plyr.config:{},S=new Plyr("#"+l,x);S.on("ready",(function(e){var t=e.detail.plyr;r[l]=t,C(i)&&i()})),S.on("enterfullscreen",G),S.on("exitfullscreen",G)}))}function G(e){var t=v(e.target,".gslide-media");"enterfullscreen"==e.type&&d(t,"fullscreen"),"exitfullscreen"==e.type&&u(t,"fullscreen")}function Z(e,t,i){var n,s=this,l=e.querySelector(".gslide-media"),o=!(!I(t,"href")||!t.href)&&t.href.split("#").pop().trim(),r=!(!I(t,"content")||!t.content)&&t.content;if(r&&(E(r)&&(n=b('<div class="ginlined-content">'.concat(r,"</div>"))),A(r))){"none"==r.style.display&&(r.style.display="block");var a=document.createElement("div");a.className="ginlined-content",a.appendChild(r),n=a}if(o){var h=document.getElementById(o);if(!h)return!1;var u=h.cloneNode(!0);u.style.height=t.height,u.style.maxWidth=t.width,d(u,"ginlined-content"),n=u}if(!n)return console.error("Unable to append inline slide content",t),!1;l.style.height=t.height,l.style.width=t.width,l.appendChild(n),this.events["inlineclose"+o]=c("click",{onElement:l.querySelectorAll(".gtrigger-close"),withCallback:function(e){e.preventDefault(),s.close()}}),C(i)&&i()}function $(e,t,i){var n=e.querySelector(".gslide-media"),s=function(e){var t=e.url,i=e.allow,n=e.callback,s=e.appendTo,l=document.createElement("iframe");return l.className="vimeo-video gvideo",l.src=t,l.style.width="100%",l.style.height="100%",i&&l.setAttribute("allow",i),l.onload=function(){d(l,"node-ready"),C(n)&&n()},s&&s.appendChild(l),l}({url:t.href,callback:i});n.parentNode.style.maxWidth=t.width,n.parentNode.style.height=t.height,n.appendChild(s)}var U=function(){function e(i,n){t(this,e),this.element=i,this.settings=n,this.defaults={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",width:"",height:"",node:!1,content:!1,zoomable:!0,draggable:!0}}return n(e,[{key:"sourceType",value:function(e){var t=e;if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/))return"image";if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(e.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==e.match(/\.(mp4|ogg|webm|mov)$/))return"video";if(null!==e.match(/\.(mp3|wav|wma|aac|ogg)$/))return"audio";if(e.indexOf("#")>-1&&""!==t.split("#").pop().trim())return"inline";return e.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(e,t){var i=this,n=r({descPosition:t.descPosition},this.defaults);if(P(e)&&!A(e)){I(e,"type")||(I(e,"content")&&e.content?e.type="inline":I(e,"href")&&(e.type=this.sourceType(e.href)));var s=r(n,e);return this.setSize(s,t),s}var l="",o=e.getAttribute("data-glightbox"),h=e.nodeName.toLowerCase();if("a"===h&&(l=e.href),"img"===h&&(l=e.src),n.href=l,a(n,(function(s,l){I(t,l)&&"width"!==l&&(n[l]=t[l]);var o=e.dataset[l];M(o)||(n[l]=i.sanitizeValue(o))})),n.content&&(n.type="inline"),!n.type&&l&&(n.type=this.sourceType(l)),M(o)){if("a"==h){var c=e.title;M(c)||""===c||(n.title=c)}if("img"==h){var d=e.alt;M(d)||""===d||(n.title=d)}var u=e.getAttribute("data-description");M(u)||""===u||(n.description=u)}else{var g=[];a(n,(function(e,t){g.push(";\\s?"+t)})),g=g.join("\\s?:|"),""!==o.trim()&&a(n,(function(e,t){var s=o,l=new RegExp("s?"+t+"s?:s?(.*?)("+g+"s?:|$)"),r=s.match(l);if(r&&r.length&&r[1]){var a=r[1].trim().replace(/;\s*$/,"");n[t]=i.sanitizeValue(a)}}))}if(n.description&&"."==n.description.substring(0,1)&&document.querySelector(n.description))n.description=document.querySelector(n.description).innerHTML;else{var v=e.querySelector(".glightbox-desc");v&&(n.description=v.innerHTML)}return this.setSize(n,t),this.slideConfig=n,n}},{key:"setSize",value:function(e,t){var i="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),n=this.checkSize(t.height);return e.width=I(e,"width")&&""!==e.width?this.checkSize(e.width):i,e.height=I(e,"height")&&""!==e.height?this.checkSize(e.height):n,e}},{key:"checkSize",value:function(e){return z(e)?"".concat(e,"px"):e}},{key:"sanitizeValue",value:function(e){return"true"!==e&&"false"!==e?e:"true"===e}}]),e}(),J=function(){function e(i,n){t(this,e),this.element=i,this.instance=n}return n(e,[{key:"setContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(g(t,"loaded"))return!1;var n=this.instance.settings,s=this.slideConfig,l=k();C(n.beforeSlideLoad)&&n.beforeSlideLoad({index:s.index,slide:t,player:!1});var o=s.type,r=s.descPosition,a=t.querySelector(".gslide-media"),h=t.querySelector(".gslide-title"),c=t.querySelector(".gslide-desc"),u=t.querySelector(".gdesc-inner"),v=i,f="gSlideTitle_"+s.index,p="gSlideDesc_"+s.index;if(C(n.afterSlideLoad)&&(v=function(){C(i)&&i(),n.afterSlideLoad({index:s.index,slide:t,player:e.instance.getSlidePlayerInstance(s.index)})}),""==s.title&&""==s.description?u&&u.parentNode.parentNode.removeChild(u.parentNode):(h&&""!==s.title?(h.id=f,h.innerHTML=s.title):h.parentNode.removeChild(h),c&&""!==s.description?(c.id=p,l&&n.moreLength>0?(s.smallDescription=this.slideShortDesc(s.description,n.moreLength,n.moreText),c.innerHTML=s.smallDescription,this.descriptionEvents(c,s)):c.innerHTML=s.description):c.parentNode.removeChild(c),d(a.parentNode,"desc-".concat(r)),d(u.parentNode,"description-".concat(r))),d(a,"gslide-".concat(o)),d(t,"loaded"),"video"!==o){if("external"!==o)return"inline"===o?(Z.apply(this.instance,[t,s,v]),void(s.draggable&&new V({dragEl:t.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:this.instance}))):void("image"!==o?C(v)&&v():F(t,s,(function(){var i=t.querySelector("img");s.draggable&&new V({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:e.instance}),s.zoomable&&i.naturalWidth>i.offsetWidth&&(d(i,"zoomable"),new j(i,t,(function(){e.instance.resize()}))),C(v)&&v()})));$.apply(this,[t,s,v])}else R.apply(this.instance,[t,s,v])}},{key:"slideShortDesc",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i;if((e=e.trim()).length<=t)return e;var s=e.substr(0,t-1);return n?s+'... <a href="#" class="desc-more">'+i+"</a>":s}},{key:"descriptionEvents",value:function(e,t){var i=this,n=e.querySelector(".desc-more");if(!n)return!1;c("click",{onElement:n,withCallback:function(e,n){e.preventDefault();var s=document.body,l=v(n,".gslide-desc");if(!l)return!1;l.innerHTML=t.description,d(s,"gdesc-open");var o=c("click",{onElement:[s,v(l,".gslide-description")],withCallback:function(e,n){"a"!==e.target.nodeName.toLowerCase()&&(u(s,"gdesc-open"),d(s,"gdesc-closed"),l.innerHTML=t.smallDescription,i.descriptionEvents(l,t),setTimeout((function(){u(s,"gdesc-closed")}),400),o.destroy())}})}})}},{key:"create",value:function(){return b(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){var e=new U;return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),e}(),K=k(),Q=null!==k()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,ee=document.getElementsByTagName("html")[0],te={selector:".glightbox",elements:null,skin:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plyr:{css:"https://cdn.plyr.io/3.5.6/plyr.css",js:"https://cdn.plyr.io/3.5.6/plyr.js",config:{ratio:"16:9",youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,lightboxHTML:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'};te.lightboxHTML='<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>';var ie=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.settings=r(te,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(e,[{key:"init",value:function(){var e=this,t=this.getSelector();t&&(this.baseEvents=c("click",{onElement:t,withCallback:function(t,i){t.preventDefault(),e.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=z(t)?t:this.settings.startAt;if(A(e)){var n=e.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),M(i)&&(i=this.getElementIndex(e))<0&&(i=0)}z(i)||(i=0),this.build(),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var s=document.body,l=window.innerWidth-document.documentElement.clientWidth;if(l>0){var o=document.createElement("style");o.type="text/css",o.className="gcss-styles",o.innerText=".gscrollbar-fixer {margin-right: ".concat(l,"px}"),document.head.appendChild(o),d(s,"gscrollbar-fixer")}d(s,"glightbox-open"),d(ee,"glightbox-open"),K&&(d(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(y(this.prevButton),y(this.nextButton)):(m(this.prevButton),m(this.nextButton)),this.lightboxOpen=!0,this.trigger("open"),C(this.settings.onOpen)&&this.settings.onOpen(),Q&&this.settings.touchNavigation&&H(this),this.settings.keyboardNavigation&&Y(this)}},{key:"openAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,e)}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m(this.loader),this.index=parseInt(t);var n=this.slidesContainer.querySelector(".current");n&&u(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[t];if(g(s,"loaded"))this.slideAnimateIn(s,i),y(this.loader);else{m(this.loader);var l=this.elements[t];this.trigger("slide_before_load",l),l.instance.setContent(s,(function(){y(e.loader),e.resize(),e.slideAnimateIn(s,i),e.trigger("slide_after_load",l)}))}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(t+1),this.preloadSlide(t-1)),this.updateNavigationClasses(),this.activeSlide=s}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(M(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(g(i,"loaded"))return!1;var n=this.elements[e],s=n.type;this.trigger("slide_before_load",n),"video"==s||"external"==s?setTimeout((function(){n.instance.setContent(i,(function(){t.trigger("slide_after_load",n)}))}),200):n.instance.setContent(i,(function(){t.trigger("slide_after_load",n)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e)}},{key:"insertSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=new J(e,this),n=i.getConfig(),s=i.create(),l=this.elements.length-1;if(t<0&&(t=this.elements.length),n.index=t,n.node=!1,n.instance=i,this.elements.splice(t,0,n),this.slidesContainer){if(t>l)this.slidesContainer.appendChild(s);else{var o=this.slidesContainer.querySelectorAll(".gslide")[t];this.slidesContainer.insertBefore(s,o)}(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0==this.index&&0==t&&(this.index=1),this.updateNavigationClasses()}this.trigger("slide_inserted",{index:t,slide:this.slidesContainer.querySelectorAll(".gslide")[t],player:this.getSlidePlayerInstance(t)}),C(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:this.slidesContainer.querySelectorAll(".gslide")[t],player:this.getSlidePlayerInstance(t)})}},{key:"removeSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),C(this.settings.slideRemoved)&&this.settings.slideRemoved(e)}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),s=e.querySelector(".gslide-description"),l={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},o={index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&s&&(y(s),s.style.display=""),u(e,this.effectsClasses),t)f(e,this.settings.cssEfects[this.settings.openEffect].in,(function(){!K&&i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}));else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slide_back.in),f(e,a,(function(){!K&&i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}))}setTimeout((function(){i.resize(e)}),100),d(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;u(e,this.effectsClasses),d(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.slidePlayerPause(e),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}}),C(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slide_back.out),f(e,i,(function(){var t=e.querySelector(".gslide-media"),i=e.querySelector(".gslide-description");t.style.transform="",u(t,"greset"),t.style.opacity="",i&&(i.style.opacity=""),u(e,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(e){var t="gvideo"+e,i=this.getAllPlayers();return!(!I(i,t)||!i[t])&&i[t]}},{key:"stopSlideVideo",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"setElements",value:function(e){var t=this;this.settings.elements=!1;var i=[];e&&e.length&&a(e,(function(e,n){var s=new J(e,t),l=s.getConfig();l.instance=s,l.index=n,i.push(l)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(a(this.elements,(function(){var e=b(t.settings.slideHTML);t.slidesContainer.appendChild(e)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(e){var t=!1;return a(this.elements,(function(i,n){if(I(i,"node")&&i.node==e)return t=n,!0})),t}},{key:"getElements",value:function(){var e=this,t=[];this.elements=this.elements?this.elements:[],!M(this.settings.elements)&&L(this.settings.elements)&&this.settings.elements.length&&a(this.settings.elements,(function(i,n){var s=new J(i,e),l=s.getConfig();l.node=!1,l.index=n,l.instance=s,t.push(l)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(a(i,(function(i,n){var s=new J(i,e),l=s.getConfig();l.node=i,l.index=n,l.instance=s,l.gallery=i.getAttribute("data-gallery"),t.push(l)})),t):t}},{key:"getGalleryElements",value:function(e,t){return e.filter((function(e){return e.gallery==t}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g".concat(i.in)),e.push("g".concat(i.out))}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=I(this.settings.svg,"next")?this.settings.svg.next:"",i=I(this.settings.svg,"prev")?this.settings.svg.prev:"",n=I(this.settings.svg,"close")?this.settings.svg.close:"",s=this.settings.lightboxHTML;s=b(s=(s=(s=s.replace(/{nextSVG}/g,t)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(s);var l=document.getElementById("glightbox-body");this.modal=l;var o=l.querySelector(".gclose");this.prevButton=l.querySelector(".gprev"),this.nextButton=l.querySelector(".gnext"),this.overlay=l.querySelector(".goverlay"),this.loader=l.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},d(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&o&&(this.events.close=c("click",{onElement:o,withCallback:function(t,i){t.preventDefault(),e.close()}})),o&&!this.settings.closeButton&&o.parentNode.removeChild(o),this.nextButton&&(this.events.next=c("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=c("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=c("click",{onElement:l,withCallback:function(t,i){e.preventOutsideClick||g(document.body,"glightbox-mobile")||v(t.target,".ginner-container")||v(t.target,".gbtn")||g(t.target,"gnext")||g(t.target,"gprev")||e.close()}})),a(this.elements,(function(t){e.slidesContainer.appendChild(t.instance.create())})),Q&&d(document.body,"glightbox-touch"),this.events.resize=c("resize",{onElement:window,withCallback:function(){e.resize()}}),this.built=!0}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((e=e||this.activeSlide)&&!g(e,"zoomed")){var t=x(),i=e.querySelector(".gvideo-wrapper"),n=e.querySelector(".gslide-image"),s=this.slideDescription,l=t.width,o=t.height;if(l<=768?d(document.body,"glightbox-mobile"):u(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(g(s,"description-bottom")||g(s,"description-top"))&&!g(s,"gabsolute")&&(r=!0),n)if(l<=768){var a=n.querySelector("img");a.setAttribute("style","")}else if(r){var h=s.offsetHeight,c=n.querySelector("img");c.setAttribute("style","max-height: calc(100vh - ".concat(h,"px)")),s.setAttribute("style","max-width: ".concat(c.offsetWidth,"px;"))}if(i){var v=I(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9",f=v.split(":"),p=900,m=p/(parseInt(f[0])/parseInt(f[1]));if(m=Math.floor(m),r&&(o-=s.offsetHeight),o<m&&l>p){var y=i.offsetWidth,b=i.offsetHeight,S=o/b,w={width:y*S,height:b*S};i.parentNode.setAttribute("style","max-width: ".concat(w.width,"px")),r&&s.setAttribute("style","max-width: ".concat(w.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),r&&s.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var e=this.loop();u(this.nextButton,"disabled"),u(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(d(this.prevButton,"disabled"),d(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||d(this.nextButton,"disabled"):d(this.prevButton,"disabled")}},{key:"loop",value:function(){var e=I(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=I(this.settings,"loop")?this.settings.loop:e,e}},{key:"close",value:function(){var e=this;if(!this.lightboxOpen){if(this.events){for(var t in this.events)this.events.hasOwnProperty(t)&&this.events[t].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),d(this.modal,"glightbox-closing"),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),f(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events){for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();e.events=null}var i=document.body;u(ee,"glightbox-open"),u(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),e.modal.parentNode.removeChild(e.modal),e.trigger("close"),C(e.settings.onClose)&&e.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),e.lightboxOpen=!1,e.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents.destroy()}},{key:"on",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!C(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t})}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"trigger",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];a(this.apiEvents,(function(t,s){var l=t.evt,o=t.once,r=t.callback;l==e&&(r(i),o&&n.push(s))})),n.length&&a(n,(function(e){return t.apiEvents.splice(e,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.push({evt:evt,once:once,callback:callback})}},{key:"version",value:function(){return"3.0.5"}}]),e}();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new ie(e);return t.init(),t}}));

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./themes/LChanvreTheme/assets/app.js":
/*!********************************************!*\
  !*** ./themes/LChanvreTheme/assets/app.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./js/index */ "./themes/LChanvreTheme/assets/js/index.js");

__webpack_require__(/*! ./scss/index.scss */ "./themes/LChanvreTheme/assets/scss/index.scss");

__webpack_require__(/*! ./media/logo.png */ "./themes/LChanvreTheme/assets/media/logo.png");

__webpack_require__(/*! ./media/logo-black.png */ "./themes/LChanvreTheme/assets/media/logo-black.png");

__webpack_require__(/*! ./media/homepage-banner.jpg */ "./themes/LChanvreTheme/assets/media/homepage-banner.jpg");

__webpack_require__(/*! ./js/fontawesome */ "./themes/LChanvreTheme/assets/js/fontawesome.js");

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/fontawesome.js":
/*!*******************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/fontawesome.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _faStar = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStar */ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js");

var _faShoppingBag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingBag */ "./node_modules/@fortawesome/free-solid-svg-icons/faShoppingBag.js");

var _faCheck = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");

var _faExclamationCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js");

var _faInfoCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfoCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js");

var _faChevronUp = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronUp */ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronUp.js");

var _faMapMarkerAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMapMarkerAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js");

var _faShuttleVan = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShuttleVan */ "./node_modules/@fortawesome/free-solid-svg-icons/faShuttleVan.js");

var _faCreditCard = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCreditCard */ "./node_modules/@fortawesome/free-solid-svg-icons/faCreditCard.js");

var _faFlag = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faFlag */ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js");

var _faCcMastercard = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcMastercard */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcMastercard.js");

var _faCcVisa = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcVisa */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcVisa.js");

var _faCcPaypal = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faCcPaypal */ "./node_modules/@fortawesome/free-brands-svg-icons/faCcPaypal.js");

var _faTimes = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");

var _faSearch = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");

var _faPlus = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js");

var _faPencilAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPencilAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js");

var _faSyncAlt = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSyncAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js");

var _faQuestionCircle = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faQuestionCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faQuestionCircle.js");

var _faFacebook = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebook */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js");

var _faTwitter = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");

var _faInstagram = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faInstagram */ "./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js");

var _faBan = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBan */ "./node_modules/@fortawesome/free-solid-svg-icons/faBan.js");

var _faAdjust = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAdjust */ "./node_modules/@fortawesome/free-solid-svg-icons/faAdjust.js");

var _faClock = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js");

var _faReplyAll = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faReplyAll */ "./node_modules/@fortawesome/free-solid-svg-icons/faReplyAll.js");

// FontAwesome Icons
// Import icons one by one to reduce size of the output
_fontawesomeSvgCore.library.add(_faStar.faStar, _faQuestionCircle.faQuestionCircle, _faShoppingBag.faShoppingBag, _faCheck.faCheck, _faExclamationCircle.faExclamationCircle, _faInfoCircle.faInfoCircle, _faChevronUp.faChevronUp, _faMapMarkerAlt.faMapMarkerAlt, _faShuttleVan.faShuttleVan, _faCreditCard.faCreditCard, _faFlag.faFlag, _faCcMastercard.faCcMastercard, _faCcVisa.faCcVisa, _faCcPaypal.faCcPaypal, _faTimes.faTimes, _faSearch.faSearch, _faPlus.faPlus, _faPencilAlt.faPencilAlt, _faSyncAlt.faSyncAlt, _faFacebook.faFacebook, _faTwitter.faTwitter, _faInstagram.faInstagram, _faBan.faBan, _faAdjust.faAdjust, _faClock.faClock, _faReplyAll.faReplyAll);

_fontawesomeSvgCore.dom.watch();

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/index.js":
/*!*************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _glightbox = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");

var _glightbox2 = _interopRequireDefault(_glightbox);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(/*! bootstrap.native/dist/bootstrap-native */ "./node_modules/bootstrap.native/dist/bootstrap-native.js");

var _syliusRating = __webpack_require__(/*! ./sylius-rating */ "./themes/LChanvreTheme/assets/js/sylius-rating.js");

var _syliusRating2 = _interopRequireDefault(_syliusRating);

var _syliusToggle = __webpack_require__(/*! ./sylius-toggle */ "./themes/LChanvreTheme/assets/js/sylius-toggle.js");

var _syliusToggle2 = _interopRequireDefault(_syliusToggle);

var _syliusAddToCart = __webpack_require__(/*! ./sylius-add-to-cart */ "./themes/LChanvreTheme/assets/js/sylius-add-to-cart.js");

var _syliusAddToCart2 = _interopRequireDefault(_syliusAddToCart);

var _syliusRemoveFromCart = __webpack_require__(/*! ./sylius-remove-from-cart */ "./themes/LChanvreTheme/assets/js/sylius-remove-from-cart.js");

var _syliusRemoveFromCart2 = _interopRequireDefault(_syliusRemoveFromCart);

var _syliusApiToggle = __webpack_require__(/*! ./sylius-api-toggle */ "./themes/LChanvreTheme/assets/js/sylius-api-toggle.js");

var _syliusApiToggle2 = _interopRequireDefault(_syliusApiToggle);

var _syliusApiLogin = __webpack_require__(/*! ./sylius-api-login */ "./themes/LChanvreTheme/assets/js/sylius-api-login.js");

var _syliusApiLogin2 = _interopRequireDefault(_syliusApiLogin);

var _syliusVariantsPrices = __webpack_require__(/*! ./sylius-variants-prices */ "./themes/LChanvreTheme/assets/js/sylius-variants-prices.js");

var _syliusVariantsPrices2 = _interopRequireDefault(_syliusVariantsPrices);

var _syliusVariantImages = __webpack_require__(/*! ./sylius-variant-images */ "./themes/LChanvreTheme/assets/js/sylius-variant-images.js");

var _syliusVariantImages2 = _interopRequireDefault(_syliusVariantImages);

var _syliusProvinceField = __webpack_require__(/*! ./sylius-province-field */ "./themes/LChanvreTheme/assets/js/sylius-province-field.js");

var _syliusProvinceField2 = _interopRequireDefault(_syliusProvinceField);

var _syliusAddressBook = __webpack_require__(/*! ./sylius-address-book */ "./themes/LChanvreTheme/assets/js/sylius-address-book.js");

var _syliusAddressBook2 = _interopRequireDefault(_syliusAddressBook);

var _syliusLoadableForms = __webpack_require__(/*! ./sylius-loadable-forms */ "./themes/LChanvreTheme/assets/js/sylius-loadable-forms.js");

var _syliusLoadableForms2 = _interopRequireDefault(_syliusLoadableForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
// Global axios settings
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
_axios2.default.defaults.headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
_axios2.default.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  const glightbox = (0, _glightbox2.default)({
    selector: '.glightbox'
  }); // Add to cart

  document.querySelectorAll('[data-js-add-to-cart="form"]').forEach(el => (0, _syliusAddToCart2.default)(el)); // Remove from cart

  document.querySelectorAll('[data-js-remove-from-cart-button]').forEach(el => (0, _syliusRemoveFromCart2.default)(el)); // Province field

  (0, _syliusProvinceField2.default)(); // Address book

  const syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');

  if (syliusShippingAddress && syliusShippingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusShippingAddress);
  }

  const syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');

  if (syliusBillingAddress && syliusBillingAddress.querySelector('.dropdown')) {
    (0, _syliusAddressBook2.default)(syliusBillingAddress);
  } // Variant prices


  (0, _syliusVariantsPrices2.default)(); // Star rating

  document.querySelectorAll('[data-js-rating]').forEach(elem => {
    new _syliusRating2.default(elem, {
      onRate(value) {
        document.querySelector(`#sylius_product_review_rating_${value - 1}`).checked = true;
      }

    });
  }); // Toggle and login from checkout

  if (document.querySelector('[data-js-login]')) {
    (0, _syliusApiToggle2.default)(document.querySelector('[data-js-login="email"]'));
    (0, _syliusApiLogin2.default)(document.querySelector('[data-js-login]'));
  } // Toggle billing address on the checkout page


  document.querySelectorAll('[data-js-toggle]').forEach(elem => new _syliusToggle2.default(elem)); // Product images for variants

  if (document.querySelector('[data-variant-options], [data-variant-code]')) {
    new _syliusVariantImages2.default();
  } // Loadable forms


  (0, _syliusLoadableForms2.default)();
});

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-add-to-cart.js":
/*!**************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-add-to-cart.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _formSerialize = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusAddToCart = el => {
  const element = el;
  const url = element.getAttribute('action');
  const redirectUrl = element.getAttribute('data-redirect');
  const validationElement = element.querySelector('[data-js-add-to-cart="error"]');
  element.addEventListener('submit', e => {
    const request = _axios2.default.post(url, (0, _formSerialize2.default)(element));

    e.preventDefault();
    request.then(() => {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });
    request.catch(error => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';
      Object.entries(error.response.data).forEach(([, message]) => {
        validationMessage += message.errors;
      });
      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
    });
  });
};

exports.default = SyliusAddToCart;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-address-book.js":
/*!***************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-address-book.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};

const SyliusAddressBook = function SyliusAddressBook(el) {
  const element = el;
  const select = element.querySelector('.dropdown');

  const findByName = function findByName(name) {
    return element.querySelector(`[name*=${parseKey(name)}]`);
  };

  const changeEvent = new Event('change');
  select.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      const choice = e.currentTarget;
      const choiceData = {};
      [...choice.attributes].forEach(attr => {
        if (attr.name.startsWith('data-')) {
          const camelCased = attr.name.replace('data-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
          choiceData[camelCased] = attr.value;
        }
      });
      const provinceCode = choiceData.provinceCode,
            provinceName = choiceData.provinceName;
      const provinceContainer = select.closest('[data-js-address-book]').querySelector('.province-container');
      element.querySelectorAll('input, select').forEach(input => {
        input.value = '';
      });
      Object.entries(choiceData).forEach(([property, value]) => {
        const field = findByName(property);

        if (property.indexOf('countryCode') !== -1) {
          field.value = value;
          field.dispatchEvent(changeEvent);
          const exists = setInterval(() => {
            const provinceCodeField = findByName('provinceCode');
            const provinceNameField = findByName('provinceName');

            if (!provinceContainer.hasAttribute('data-loading')) {
              if (provinceCodeField && provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                provinceCodeField.value = provinceCode;
                clearInterval(exists);
              } else if (provinceNameField && provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                provinceNameField.value = provinceName;
                clearInterval(exists);
              }
            }
          }, 100);
        } else if (field) {
          field.value = value;
        }
      });
    });
  });
};

exports.default = SyliusAddressBook;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-api-login.js":
/*!************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-api-login.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiLogin = el => {
  const element = el;
  const signInButton = element.querySelector('.btn');
  const validationField = element.querySelector('.alert');
  const url = signInButton.getAttribute('data-js-login-url');
  const emailField = element.querySelector('input[type="email"]');
  const passwordField = element.querySelector('input[type="password"]');
  const csrfTokenField = element.querySelector('input[type="hidden"]');
  const csrfTokenName = csrfTokenField.getAttribute('name');
  signInButton.addEventListener('click', e => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('_username', emailField.value);
    params.append('_password', passwordField.value);
    params.append([csrfTokenName], csrfTokenField.value);

    _axios2.default.post(url, params).then(() => {
      window.location.reload();
    }).catch(error => {
      validationField.classList.remove('d-none');
      validationField.innerHTML = error.response.data.message;
    });
  });
};

exports.default = SyliusApiLogin;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-api-toggle.js":
/*!*************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-api-toggle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusApiToggle = el => {
  const element = el;
  const url = element.getAttribute('data-js-login-check-email-url');
  const toggleableElement = document.querySelector('[data-js-login="form"]');
  element.addEventListener('input', (0, _lodash2.default)(e => {
    toggleableElement.classList.add('d-none');

    if (e.target.value.length > 3) {
      _axios2.default.get(url, {
        params: {
          email: e.target.value
        }
      }).then(() => {
        toggleableElement.classList.remove('d-none');
      }).catch(() => {
        toggleableElement.classList.add('d-none');
      });
    }
  }, 1500));
};

exports.default = SyliusApiToggle;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-loadable-forms.js":
/*!*****************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-loadable-forms.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusLoadableForms = function SyliusLoadableForms() {
  const overlay = document.querySelector('[data-js-loading-overlay]');
  document.querySelectorAll('form.loadable').forEach(form => {
    form.appendChild(overlay.cloneNode(true));
    form.addEventListener('submit', () => {
      form.classList.add('loading');
    });
    window.addEventListener('pageshow', () => {
      if (event.persisted) {
        form.classList.remove('loading');
      }
    });
  });
};

exports.default = SyliusLoadableForms;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-province-field.js":
/*!*****************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-province-field.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const getProvinceInputValue = function getProvinceInputValue(valueSelector) {
  const val = valueSelector ? valueSelector.value : null;
  return !val || val == undefined ? '' : `value="${val}"`;
};

const SyliusProvinceField = function SyliusProvinceField() {
  const countrySelect = document.querySelectorAll('select[name$="[countryCode]"]');
  const changeEvent = new Event('change');
  countrySelect.forEach(countrySelectItem => {
    countrySelectItem.addEventListener('change', event => {
      const select = event.currentTarget;
      const provinceContainer = document.querySelector('[data-parent="' + select.id + '"]');
      const provinceSelectFieldName = select.getAttribute('name').replace('country', 'province');
      const provinceInputFieldName = select.getAttribute('name').replace('countryCode', 'provinceName');
      const provinceSelectFieldId = select.getAttribute('id').replace('country', 'province');
      const provinceInputFieldId = select.getAttribute('id').replace('countryCode', 'provinceName');

      if (select.value === '' || select.value == undefined) {
        provinceContainer.innerHTML = '';
        return;
      }

      provinceContainer.setAttribute('data-loading', '');

      _axios2.default.get(provinceContainer.getAttribute('data-url'), {
        params: {
          countryCode: select.value
        }
      }).then(response => {
        if (!response.data.content) {
          provinceContainer.removeAttribute('data-loading');
          provinceContainer.innerHTML = '';
        } else if (response.data.content.indexOf('select') !== -1) {
          const provinceSelectValue = getProvinceInputValue(provinceContainer.querySelector('select > option[selected$="selected"]'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceSelectFieldName}"${provinceSelectValue}`).replace('id="sylius_address_province"', `id="${provinceSelectFieldId}"`).replace('option value="" selected="selected"', 'option value=""').replace(`option ${provinceSelectValue}`, `option ${provinceSelectValue}" selected="selected"`);
          provinceContainer.querySelector('select').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        } else {
          const provinceInputValue = getProvinceInputValue(provinceContainer.querySelector('input'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', `name="${provinceInputFieldName}"${provinceInputValue}`).replace('id="sylius_address_province"', `id="${provinceInputFieldId}"`);
          provinceContainer.querySelector('input').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        }
      });
    });

    if (countrySelectItem.value !== '') {
      countrySelectItem.dispatchEvent(changeEvent);
    }
  });
};

exports.default = SyliusProvinceField;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-rating.js":
/*!*********************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-rating.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusRating {
  constructor(container, settings) {
    this.container = container;
    this.settings = settings;

    if (this.container) {
      this.ratingMax = Number(this.container.dataset.jsRatingMax) || 5;
      this.ratingAverage = Number(this.container.dataset.jsRatingAverage) || 0;
      this.viewOnly = this.container.dataset.jsRatingViewonly !== 'false';
      this.btnOnElement = this.container.querySelector('[data-js-rating-btn-on]');
      this.btnOffElement = this.container.querySelector('[data-js-rating-btn-off]');
      this.render();
    }
  }

  render() {
    this.container.innerHTML = '';
    const renderElement = document.createElement('div');

    for (let i = 1; i <= this.ratingMax; i++) {
      const element = document.createElement('span');
      element.dataset.jsRatingValue = i;

      if (this.viewOnly === false) {
        element.addEventListener('click', this.changeInputValue.bind(this));
      }

      if (i <= this.ratingAverage) {
        element.innerHTML = this.btnOnElement.innerHTML;
      } else {
        element.innerHTML = this.btnOffElement.innerHTML;
      }

      renderElement.appendChild(element);
    }

    this.container.appendChild(renderElement);
  }

  changeInputValue(e) {
    const value = Number(e.currentTarget.dataset.jsRatingValue);
    this.ratingAverage = value;
    this.container.dataset.jsRatingAverage = value;
    this.render();
    this.settings.onRate(value);
  }

}

exports.default = SyliusRating;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-remove-from-cart.js":
/*!*******************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-remove-from-cart.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const SyliusRemoveFromCart = el => {
  const element = el;
  const redirectUrl = element.getAttribute('data-js-remove-from-cart-redirect-url');
  const csrfToken = element.getAttribute('data-js-remove-from-cart-csrf-token');
  const url = element.getAttribute('data-js-remove-from-cart-api-url');
  element.addEventListener('click', e => {
    e.preventDefault();

    _axios2.default.delete(url, {
      data: {
        _csrf_token: csrfToken
      }
    }).then(() => {
      window.location.replace(redirectUrl);
    });
  });
};

exports.default = SyliusRemoveFromCart;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-toggle.js":
/*!*********************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-toggle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SyliusToggle {
  constructor(trigger) {
    this.trigger = trigger;
    this.trigger.addEventListener('change', this.toggle.bind(this));
    this.toggleElement = document.querySelector(this.trigger.dataset.jsToggle);
    this.toggle();
  }

  toggle() {
    if (this.trigger.checked) {
      this.toggleElement.style.display = '';
    } else {
      this.toggleElement.style.display = 'none';
    }
  }

}

exports.default = SyliusToggle;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-variant-images.js":
/*!*****************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-variant-images.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
class SyliusVariantImages {
  constructor() {
    this.mainImageLink = document.querySelector('[data-js-product-image]');
    this.mainImage = this.mainImageLink.querySelector('img');
    this.defaultImageLink = this.mainImageLink.getAttribute('href');
    this.defaultImageSrc = this.mainImage.getAttribute('src');
    document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
      item.addEventListener('change', () => this.setImage());
    });
    this.setImage();
  }

  getActiveVariant() {
    const items = document.querySelectorAll(`
      input[name="sylius_add_to_cart[cartItem][variant]"]:checked, 
      select[name*="sylius_add_to_cart[cartItem][variant]"] option:checked
    `);
    return [...items].map(el => el.value).join(' ');
  }

  getActiveImageSrc(variant) {
    let imageLink = this.defaultImageLink;
    let imageSrc = this.defaultImageSrc;
    const item = document.querySelector(`
      .sylius-image-variants [data-variant-code="${variant}"], 
      .sylius-image-variants [data-variant-options="${variant} "]
    `);

    if (item) {
      const parent = item.closest('[data-js-product-thumbnail]');
      imageLink = parent.querySelector('a').getAttribute('href');
      imageSrc = parent.querySelector('img').getAttribute('data-large-thumbnail');
    }

    return {
      imageLink,
      imageSrc
    };
  }

  setImage() {
    const img = this.getActiveImageSrc(this.getActiveVariant());
    this.mainImageLink.setAttribute('href', img.imageLink);
    this.mainImage.setAttribute('src', img.imageSrc);
  }

}

exports.default = SyliusVariantImages;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/js/sylius-variants-prices.js":
/*!******************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/js/sylius-variants-prices.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
const handleProductOptionsChange = function handleProductOptionsChange() {
  document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', () => {
      let selector = '';
      document.querySelectorAll('#sylius-product-adding-to-cart select[data-option]').forEach(element => {
        const select = element;
        const option = select[select.selectedIndex].value;
        selector += `[data-${select.getAttribute('data-option')}="${option}"]`;
      });
      const priceElement = document.querySelector('#sylius-variants-pricing').querySelector(selector);
      let price = '';

      if (priceElement !== null) {
        price = priceElement.getAttribute('data-value');
      }

      if (price !== '') {
        document.querySelector('[data-js-product-price]').innerHTML = price;
        document.querySelector('button[type=submit]').removeAttribute('disabled');
      } else {
        document.querySelector('[data-js-product-price]').innerHTML = document.querySelector('#sylius-variants-pricing').getAttribute('data-unavailable-text');
        document.querySelector('button[type=submit]').setAttribute('disabled', 'disabled');
      }
    });
  });
};

const handleProductVariantsChange = function handleProductVariantsChange() {
  document.querySelectorAll('[name="sylius_add_to_cart[cartItem][variant]"]').forEach(item => {
    item.addEventListener('change', e => {
      const price = item.closest('tr').querySelector('[data-js-product-variant-price]').innerHTML;
      document.querySelector('[data-js-product-price]').innerHTML = price;
    });
  });
};

const SyliusVariantsPrices = () => {
  const syliusVariantsPricing = document.getElementById('sylius-variants-pricing') || null;
  const syliusProductVariants = document.getElementById('sylius-product-variants') || null;

  if (syliusVariantsPricing) {
    handleProductOptionsChange();
  } else if (syliusProductVariants) {
    handleProductVariantsChange();
  }
};

exports.default = SyliusVariantsPrices;

/***/ }),

/***/ "./themes/LChanvreTheme/assets/media/homepage-banner.jpg":
/*!***************************************************************!*\
  !*** ./themes/LChanvreTheme/assets/media/homepage-banner.jpg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/bootstrap-theme/images/homepage-banner.0bf0700c.jpg");

/***/ }),

/***/ "./themes/LChanvreTheme/assets/media/logo-black.png":
/*!**********************************************************!*\
  !*** ./themes/LChanvreTheme/assets/media/logo-black.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/bootstrap-theme/images/logo-black.1154bc5a.png");

/***/ }),

/***/ "./themes/LChanvreTheme/assets/media/logo.png":
/*!****************************************************!*\
  !*** ./themes/LChanvreTheme/assets/media/logo.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/bootstrap-theme/images/logo.6de997ac.png");

/***/ }),

/***/ "./themes/LChanvreTheme/assets/scss/index.scss":
/*!*****************************************************!*\
  !*** ./themes/LChanvreTheme/assets/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjTWFzdGVyY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUNjUGF5cGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhRmFjZWJvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFJbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFUd2l0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBZGp1c3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUJhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFGbGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFNYXBNYXJrZXJBbHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBlbmNpbEFsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVJlcGx5QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTdGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLm5hdGl2ZS9kaXN0L2Jvb3RzdHJhcC1uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm0tc2VyaWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbGlnaHRib3gvZGlzdC9qcy9nbGlnaHRib3gubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL2pzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTENoYW52cmVUaGVtZS9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYWRkcmVzcy1ib29rLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTENoYW52cmVUaGVtZS9hc3NldHMvanMvc3lsaXVzLWxvYWRhYmxlLWZvcm1zLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtcHJvdmluY2UtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL2pzL3N5bGl1cy12YXJpYW50cy1wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL21lZGlhL2hvbWVwYWdlLWJhbm5lci5qcGciLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL0xDaGFudnJlVGhlbWUvYXNzZXRzL21lZGlhL2xvZ28tYmxhY2sucG5nIiwid2VicGFjazovLy8uL3RoZW1lcy9MQ2hhbnZyZVRoZW1lL2Fzc2V0cy9tZWRpYS9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvTENoYW52cmVUaGVtZS9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVN0YXIiLCJmYVF1ZXN0aW9uQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsImZhQ2hlY2siLCJmYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZmFJbmZvQ2lyY2xlIiwiZmFDaGV2cm9uVXAiLCJmYU1hcE1hcmtlckFsdCIsImZhU2h1dHRsZVZhbiIsImZhQ3JlZGl0Q2FyZCIsImZhRmxhZyIsImZhQ2NNYXN0ZXJjYXJkIiwiZmFDY1Zpc2EiLCJmYUNjUGF5cGFsIiwiZmFUaW1lcyIsImZhU2VhcmNoIiwiZmFQbHVzIiwiZmFQZW5jaWxBbHQiLCJmYVN5bmNBbHQiLCJmYUZhY2Vib29rIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYUJhbiIsImZhQWRqdXN0IiwiZmFDbG9jayIsImZhUmVwbHlBbGwiLCJkb20iLCJ3YXRjaCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImFjY2VwdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsaWdodGJveCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN5bGl1c1NoaXBwaW5nQWRkcmVzcyIsInF1ZXJ5U2VsZWN0b3IiLCJzeWxpdXNCaWxsaW5nQWRkcmVzcyIsImVsZW0iLCJTeWxpdXNSYXRpbmciLCJvblJhdGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJTeWxpdXNUb2dnbGUiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwiU3lsaXVzQWRkVG9DYXJ0IiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJlIiwicmVxdWVzdCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNsYXNzTGlzdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIlN5bGl1c0FkZHJlc3NCb29rIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJTeWxpdXNBcGlMb2dpbiIsInNpZ25JbkJ1dHRvbiIsInZhbGlkYXRpb25GaWVsZCIsImVtYWlsRmllbGQiLCJwYXNzd29yZEZpZWxkIiwiY3NyZlRva2VuRmllbGQiLCJjc3JmVG9rZW5OYW1lIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVsb2FkIiwiU3lsaXVzQXBpVG9nZ2xlIiwidG9nZ2xlYWJsZUVsZW1lbnQiLCJ0YXJnZXQiLCJnZXQiLCJlbWFpbCIsIlN5bGl1c0xvYWRhYmxlRm9ybXMiLCJvdmVybGF5IiwiZm9ybSIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiZXZlbnQiLCJwZXJzaXN0ZWQiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwidmFsIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsImNvdW50cnlTZWxlY3QiLCJjb3VudHJ5U2VsZWN0SXRlbSIsImlkIiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudHJ5Q29kZSIsImNvbnRlbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcm92aW5jZVNlbGVjdFZhbHVlIiwicHJvdmluY2VJbnB1dFZhbHVlIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJzZXR0aW5ncyIsInJhdGluZ01heCIsIk51bWJlciIsImRhdGFzZXQiLCJqc1JhdGluZ01heCIsInJhdGluZ0F2ZXJhZ2UiLCJqc1JhdGluZ0F2ZXJhZ2UiLCJ2aWV3T25seSIsImpzUmF0aW5nVmlld29ubHkiLCJidG5PbkVsZW1lbnQiLCJidG5PZmZFbGVtZW50IiwicmVuZGVyIiwicmVuZGVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwianNSYXRpbmdWYWx1ZSIsImNoYW5nZUlucHV0VmFsdWUiLCJiaW5kIiwiU3lsaXVzUmVtb3ZlRnJvbUNhcnQiLCJjc3JmVG9rZW4iLCJkZWxldGUiLCJfY3NyZl90b2tlbiIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiaW1nIiwiaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2VFbGVtZW50IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJTeWxpdXNWYXJpYW50c1ByaWNlcyIsInN5bGl1c1ZhcmlhbnRzUHJpY2luZyIsImdldEVsZW1lbnRCeUlkIiwic3lsaXVzUHJvZHVjdFZhcmlhbnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHdCQUF3Qix1QkFBdUIsc0JBQXNCLHNCQUFzQjtBQUN2STtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsd0VBQXdFO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0EsR0FBRyxLQUFLO0FBQ1I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxHQUFHLEtBQUs7QUFDUjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksTUFBTTtBQUNsQixZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLFFBQVEsWUFBWTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsK0NBQStDLGdDQUFnQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esa0JBQWtCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNqQyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXVHOzs7Ozs7Ozs7Ozs7OztBQ3ozRTFGO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7QUM1QkEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBdUI7QUFDbkQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLHlGQUE4QjtBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDekxhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QixXQUFXLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyw0REFBYztBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLHdEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsNEVBQXNCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHNFQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQWtCOztBQUV6Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMkRBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsZUFBZSxtQkFBTyxDQUFDLHlFQUFxQjtBQUM1Qyx5QkFBeUIsbUJBQU8sQ0FBQyxpRkFBc0I7QUFDdkQsc0JBQXNCLG1CQUFPLENBQUMsMkVBQW1CO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLG1GQUEwQjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQywrRUFBd0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLHVFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsdUVBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyx5REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzlFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG1EQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEZhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkEsK0NBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGtEQUFTO0FBQzdCLDBCQUEwQixtQkFBTyxDQUFDLDhGQUErQjs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsU0FBUzs7QUFFVDtBQUNBLDREQUE0RCx3QkFBd0I7QUFDcEY7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsK0JBQStCLGFBQWEsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDbkVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGVBQWU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjs7QUFFbkM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNpRDtBQUNuRCxDQUFDLHFCQUFxQjs7QUFFdEI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLHNDQUFzQyxrQ0FBa0MsRUFBRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixpQkFBaUI7QUFDckc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLCtCQUErQix5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSCx5Q0FBeUMsZ0JBQWdCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU8sT0FBTyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CLFFBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQsd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUNBQXVDLG1HQUFtRztBQUMxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5REFBeUQsRUFBRTtBQUNuRyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsUUFBUTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxhQUFhO0FBQzNFLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsOERBQThELGFBQWE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWEsT0FBTztBQUNuRTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQXdELHNCQUFzQjtBQUNsRyxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFtRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsbUZBQW1GO0FBQzlJLDBCQUEwQix1REFBdUQ7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBbUQ7QUFDbEYsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUMsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sT0FBTyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHFDQUFxQztBQUM3RixXQUFXO0FBQ1gseURBQXlELGtDQUFrQztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQXNEO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNENBQTRDLDJCQUEyQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsNENBQTRDLHFDQUFxQyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN25ERDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLG9CQUFvQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdGJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0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LENBQUNRLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEaUMsU0FBbEQsR0FBOEQrSCxLQUE5RDtBQUNELEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxNQUFNRSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLHFCQUFxQixHQUFHM0ssUUFBUSxDQUFDNEssY0FBVCxDQUF3Qix5QkFBeEIsS0FBc0QsSUFBcEY7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRzdLLFFBQVEsQ0FBQzRLLGNBQVQsQ0FBd0IseUJBQXhCLEtBQXNELElBQXBGOztBQUVBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCUCw4QkFBMEI7QUFDM0IsR0FGRCxNQUVPLElBQUlTLHFCQUFKLEVBQTJCO0FBQ2hDSiwrQkFBMkI7QUFDNUI7QUFDRixDQVREOztrQkFXZUMsb0I7Ozs7Ozs7Ozs7OztBQzVEZjtBQUFlLHFIQUFzRCxFOzs7Ozs7Ozs7Ozs7QUNBckU7QUFBZSxnSEFBaUQsRTs7Ozs7Ozs7Ozs7O0FDQWhFO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7O0FDQTFELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Jvb3RzdHJhcC10aGVtZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90aGVtZXMvTENoYW52cmVUaGVtZS9hc3NldHMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX1dJTkRPVyA9IHt9O1xudmFyIF9ET0NVTUVOVCA9IHt9O1xudmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0ge1xuICBtYXJrOiBub29wLFxuICBtZWFzdXJlOiBub29wXG59O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xufSBjYXRjaCAoZSkge31cblxudmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuXG52YXIgV0lORE9XID0gX1dJTkRPVztcbnZhciBET0NVTUVOVCA9IF9ET0NVTUVOVDtcbnZhciBNVVRBVElPTl9PQlNFUlZFUiA9IF9NVVRBVElPTl9PQlNFUlZFUjtcbnZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbnZhciBJU19CUk9XU0VSID0gISFXSU5ET1cuZG9jdW1lbnQ7XG52YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xudmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG52YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbnZhciBVTklUU19JTl9HUklEID0gMTY7XG52YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbnZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbnZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG52YXIgREFUQV9QUkVGSVggPSAnZGF0YS1wcmVmaXgnO1xudmFyIERBVEFfSUNPTiA9ICdkYXRhLWljb24nO1xudmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG52YXIgTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMgPSAnYXN5bmMnO1xudmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG52YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFBSRUZJWF9UT19TVFlMRSA9IHtcbiAgJ2Zhcyc6ICdzb2xpZCcsXG4gICdmYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmFkJzogJ2R1b3RvbmUnLFxuICAnZmFiJzogJ2JyYW5kcycsXG4gICdmYSc6ICdzb2xpZCdcbn07XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICdkdW90b25lJzogJ2ZhZCcsXG4gICdicmFuZHMnOiAnZmFiJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIDUgKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8RHVvdG9uZXxCcmFuZHN8RnJlZXxQcm8pLztcbnZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSB7XG4gICc5MDAnOiAnZmFzJyxcbiAgJzQwMCc6ICdmYXInLFxuICAnbm9ybWFsJzogJ2ZhcicsXG4gICczMDAnOiAnZmFsJ1xufTtcbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG52YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xudmFyIERVT1RPTkVfQ0xBU1NFUyA9IHtcbiAgR1JPVVA6ICdncm91cCcsXG4gIFNXQVBfT1BBQ0lUWTogJ3N3YXAtb3BhY2l0eScsXG4gIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5J1xufTtcbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ2ZsaXAtYm90aCcsICdzdGFjaycsICdzdGFjay0xeCcsICdzdGFjay0yeCcsICdpbnZlcnNlJywgJ2xheWVycycsICdsYXllcnMtdGV4dCcsICdsYXllcnMtY291bnRlcicsIERVT1RPTkVfQ0xBU1NFUy5HUk9VUCwgRFVPVE9ORV9DTEFTU0VTLlNXQVBfT1BBQ0lUWSwgRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlksIERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlldLmNvbmNhdChvbmVUb1Rlbi5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcInctXCIuY29uY2F0KG4pO1xufSkpO1xuXG52YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuZnVuY3Rpb24gZ2V0QXR0ckNvbmZpZyhhdHRyKSB7XG4gIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICAvLyBGb3IgZXhhbXBsZSA8c2NyaXB0IGRhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cyBzcmM9XCIuLi5cIj48L3NjcmlwdD5cbiAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICBpZiAodmFsID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh2YWwgPT09ICd0cnVlJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiB2YWw7XG59XG5cbmlmIChET0NVTUVOVCAmJiB0eXBlb2YgRE9DVU1FTlQucXVlcnlTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAga2V5ID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAga2VlcE9yaWdpbmFsU291cmNlOiB0cnVlLFxuICBtZWFzdXJlUGVyZm9ybWFuY2U6IGZhbHNlLFxuICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG59O1xuXG52YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0LCBpbml0aWFsKTtcblxuaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcblxudmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9jb25maWcpO1xuXG5XSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xudmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG52YXIgZnVuY3Rpb25zID0gW107XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZG9tcmVhZHkgKGZuKSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xufVxuXG52YXIgUEVORElORyA9ICdwZW5kaW5nJztcbnZhciBTRVRUTEVEID0gJ3NldHRsZWQnO1xudmFyIEZVTEZJTExFRCA9ICdmdWxmaWxsZWQnO1xudmFyIFJFSkVDVEVEID0gJ3JlamVjdGVkJztcblxudmFyIE5PT1AgPSBmdW5jdGlvbiBOT09QKCkge307XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jU2V0VGltZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAndW5kZWZpbmVkJyA/IHNldFRpbWVvdXQgOiBzZXRJbW1lZGlhdGU7XG52YXIgYXN5bmNRdWV1ZSA9IFtdO1xudmFyIGFzeW5jVGltZXI7XG5cbmZ1bmN0aW9uIGFzeW5jRmx1c2goKSB7XG4gIC8vIHJ1biBwcm9taXNlIGNhbGxiYWNrc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzeW5jUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBhc3luY1F1ZXVlW2ldWzBdKGFzeW5jUXVldWVbaV1bMV0pO1xuICB9IC8vIHJlc2V0IGFzeW5jIGFzeW5jUXVldWVcblxuXG4gIGFzeW5jUXVldWUgPSBbXTtcbiAgYXN5bmNUaW1lciA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc3luY0NhbGwoY2FsbGJhY2ssIGFyZykge1xuICBhc3luY1F1ZXVlLnB1c2goW2NhbGxiYWNrLCBhcmddKTtcblxuICBpZiAoIWFzeW5jVGltZXIpIHtcbiAgICBhc3luY1RpbWVyID0gdHJ1ZTtcbiAgICBhc3luY1NldFRpbWVyKGFzeW5jRmx1c2gsIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCBwcm9taXNlKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlcihyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3RQcm9taXNlKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHN1YnNjcmliZXIpIHtcbiAgdmFyIG93bmVyID0gc3Vic2NyaWJlci5vd25lcjtcbiAgdmFyIHNldHRsZWQgPSBvd25lci5fc3RhdGU7XG4gIHZhciB2YWx1ZSA9IG93bmVyLl9kYXRhO1xuICB2YXIgY2FsbGJhY2sgPSBzdWJzY3JpYmVyW3NldHRsZWRdO1xuICB2YXIgcHJvbWlzZSA9IHN1YnNjcmliZXIudGhlbjtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0dGxlZCA9IEZVTEZJTExFRDtcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSB7XG4gIHZhciByZXNvbHZlZDtcblxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykpIHtcbiAgICAgIC8vIHRoZW4gc2hvdWxkIGJlIHJldHJpZXZlZCBvbmx5IG9uY2VcbiAgICAgIHZhciB0aGVuID0gdmFsdWUudGhlbjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUgfHwgIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSB2YWx1ZTtcbiAgICBhc3luY0NhbGwocHVibGlzaEZ1bGZpbGxtZW50LCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gcmVhc29uO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fdGhlbiA9IHByb21pc2UuX3RoZW4uZm9yRWFjaChpbnZva2VDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hGdWxmaWxsbWVudChwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcblxuICBpZiAoIXByb21pc2UuX2hhbmRsZWQgJiYgaXNOb2RlKSB7XG4gICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgcHJvbWlzZS5fZGF0YSwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5UmVqZWN0aW9uSGFuZGxlZChwcm9taXNlKSB7XG4gIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbn1cbi8qKlxuICogQGNsYXNzXG4gKi9cblxuXG5mdW5jdGlvbiBQKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyICcgKyByZXNvbHZlciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1Byb21pc2VcXCc6IFBsZWFzZSB1c2UgdGhlIFxcJ25ld1xcJyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdGhpcy5fdGhlbiA9IFtdO1xuICBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgdGhpcyk7XG59XG5cblAucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUCxcbiAgX3N0YXRlOiBQRU5ESU5HLFxuICBfdGhlbjogbnVsbCxcbiAgX2RhdGE6IHVuZGVmaW5lZCxcbiAgX2hhbmRsZWQ6IGZhbHNlLFxuICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSB7XG4gICAgICBvd25lcjogdGhpcyxcbiAgICAgIHRoZW46IG5ldyB0aGlzLmNvbnN0cnVjdG9yKE5PT1ApLFxuICAgICAgZnVsZmlsbGVkOiBvbkZ1bGZpbGxtZW50LFxuICAgICAgcmVqZWN0ZWQ6IG9uUmVqZWN0aW9uXG4gICAgfTtcblxuICAgIGlmICgob25SZWplY3Rpb24gfHwgb25GdWxmaWxsbWVudCkgJiYgIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEICYmIGlzTm9kZSkge1xuICAgICAgICBhc3luY0NhbGwobm90aWZ5UmVqZWN0aW9uSGFuZGxlZCwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBGVUxGSUxMRUQgfHwgdGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAvLyBhbHJlYWR5IHJlc29sdmVkLCBjYWxsIGNhbGxiYWNrIGFzeW5jXG4gICAgICBhc3luY0NhbGwoaW52b2tlQ2FsbGJhY2ssIHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdWJzY3JpYmVcbiAgICAgIHRoaXMuX3RoZW4ucHVzaChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlci50aGVuO1xuICB9LFxuICBjYXRjaDogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cblAuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlbWFpbmluZyA9IDA7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcihpbmRleCkge1xuICAgICAgcmVtYWluaW5nKys7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCEgLS1yZW1haW5pbmcpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ldID0gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUC5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblAucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbnZhciBwaWNrZWQgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UgOiBQO1xuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG52YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gIHNpemU6IDE2LFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGU6IDAsXG4gIGZsaXBYOiBmYWxzZSxcbiAgZmxpcFk6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1Jlc2VydmVkKG5hbWUpIHtcbiAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcbiAgcmV0dXJuIGNzcztcbn1cbnZhciBpZFBvb2wgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICB2YXIgc2l6ZSA9IDEyO1xuICB2YXIgaWQgPSAnJztcblxuICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgIGlkICs9IGlkUG9vbFtNYXRoLnJhbmRvbSgpICogNjIgfCAwXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gZmFtaWx5UHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChzdHIpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cbmZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gIH0sICcnKS50cmltKCk7XG59XG5mdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KHN0eWxlTmFtZSwgXCI6IFwiKS5jb25jYXQoc3R5bGVzW3N0eWxlTmFtZV0sIFwiO1wiKTtcbiAgfSwgJycpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgdmFyIHZhbCA9ICcnO1xuXG4gIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICB9XG5cbiAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICByZXR1cm4gdmFsO1xufVxuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gZmlsbEJsYWNrKGFic3RyYWN0KSB7XG4gIHZhciBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICBpZiAoYWJzdHJhY3QuYXR0cmlidXRlcyAmJiAoYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgIGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCA9ICdibGFjayc7XG4gIH1cblxuICByZXR1cm4gYWJzdHJhY3Q7XG59XG5cbmZ1bmN0aW9uIGRlR3JvdXAoYWJzdHJhY3QpIHtcbiAgaWYgKGFic3RyYWN0LnRhZyA9PT0gJ2cnKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0LmNoaWxkcmVuO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbYWJzdHJhY3RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uTWFza2luZyAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgZXhwbGljaXRNYXNrSWQgPSBfcmVmLm1hc2tJZCxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuICB2YXIgbWFpbldpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgIG1haW5QYXRoID0gbWFpbi5pY29uO1xuICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgIG1hc2tQYXRoID0gbWFzay5pY29uO1xuICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIGNvbnRhaW5lcldpZHRoOiBtYXNrV2lkdGgsXG4gICAgaWNvbldpZHRoOiBtYWluV2lkdGhcbiAgfSk7XG4gIHZhciBtYXNrUmVjdCA9IHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICB9KVxuICB9O1xuICB2YXIgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluID0gbWFpblBhdGguY2hpbGRyZW4gPyB7XG4gICAgY2hpbGRyZW46IG1haW5QYXRoLmNoaWxkcmVuLm1hcChmaWxsQmxhY2spXG4gIH0gOiB7fTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICBjaGlsZHJlbjogW2ZpbGxCbGFjayhfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHRhZzogbWFpblBhdGgudGFnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpblBhdGguYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICB9LCBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4pKV1cbiAgfTtcbiAgdmFyIG1hc2tPdXRlckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICBjaGlsZHJlbjogW21hc2tJbm5lckdyb3VwXVxuICB9O1xuICB2YXIgbWFza0lkID0gXCJtYXNrLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBjbGlwSWQgPSBcImNsaXAtXCIuY29uY2F0KGV4cGxpY2l0TWFza0lkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIG1hc2tUYWcgPSB7XG4gICAgdGFnOiAnbWFzaycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBpZDogbWFza0lkLFxuICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgbWFza0NvbnRlbnRVbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICB9O1xuICB2YXIgZGVmcyA9IHtcbiAgICB0YWc6ICdkZWZzJyxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ2NsaXBQYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IGNsaXBJZFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBkZUdyb3VwKG1hc2tQYXRoKVxuICAgIH0sIG1hc2tUYWddXG4gIH07XG4gIGNoaWxkcmVuLnB1c2goZGVmcywge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICB9LCBBTExfU1BBQ0UpXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uU3RhbmRhcmQgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsXG4gICAgICBpY29uV2lkdGg6IG1haW4ud2lkdGhcbiAgICB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogbWFpbi5pY29uLnRhZyxcbiAgICAgICAgICBjaGlsZHJlbjogbWFpbi5pY29uLmNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbi5wdXNoKG1haW4uaWNvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzSWNvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICB5OiAwLjVcbiAgICB9O1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlcywge1xuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBhc1N5bWJvbCAoX3JlZikge1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6IHN5bWJvbDtcbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgIH0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV1cbiAgfV07XG59XG5cbmZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIF9wYXJhbXMkaWNvbnMgPSBwYXJhbXMuaWNvbnMsXG4gICAgICBtYWluID0gX3BhcmFtcyRpY29ucy5tYWluLFxuICAgICAgbWFzayA9IF9wYXJhbXMkaWNvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICBzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZSA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHZhciB3aWR0aENsYXNzID0gXCJmYS13LVwiLmNvbmNhdChNYXRoLmNlaWwod2lkdGggLyBoZWlnaHQgKiAxNikpO1xuICB2YXIgYXR0ckNsYXNzID0gW2NvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogJycsIHdpZHRoQ2xhc3NdLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICB9KS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuICB2YXIgY29udGVudCA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywge1xuICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgJ3JvbGUnOiBleHRyYS5hdHRyaWJ1dGVzLnJvbGUgfHwgJ2ltZycsXG4gICAgICAneG1sbnMnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgJ3ZpZXdCb3gnOiBcIjAgMCBcIi5jb25jYXQod2lkdGgsIFwiIFwiKS5jb25jYXQoaGVpZ2h0KVxuICAgIH0pXG4gIH07XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgaWYgKHRpdGxlKSBjb250ZW50LmNoaWxkcmVuLnB1c2goe1xuICAgIHRhZzogJ3RpdGxlJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCBcInRpdGxlLVwiLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgfSk7XG5cbiAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkKHt9LCBjb250ZW50LCB7XG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIG1haW46IG1haW4sXG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBzdHlsZXM6IGV4dHJhLnN0eWxlc1xuICB9KTtcblxuICB2YXIgX3JlZjIgPSBtYXNrLmZvdW5kICYmIG1haW4uZm91bmQgPyBtYWtlSWNvbk1hc2tpbmcoYXJncykgOiBtYWtlSWNvblN0YW5kYXJkKGFyZ3MpLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG4gIGFyZ3MuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgYXJncy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgcmV0dXJuIGFzU3ltYm9sKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhc0ljb24oYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNUZXh0QWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgIGhlaWdodCA9IHBhcmFtcy5oZWlnaHQsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlMiA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBzdGFydENlbnRlcmVkOiB0cnVlLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9KTtcbiAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICB9XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYTtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoZXh0cmEuc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgcCA9IGNvbmZpZy5tZWFzdXJlUGVyZm9ybWFuY2UgJiYgUEVSRk9STUFOQ0UgJiYgUEVSRk9STUFOQ0UubWFyayAmJiBQRVJGT1JNQU5DRS5tZWFzdXJlID8gUEVSRk9STUFOQ0UgOiB7XG4gIG1hcms6IG5vb3AkMSxcbiAgbWVhc3VyZTogbm9vcCQxXG59O1xudmFyIHByZWFtYmxlID0gXCJGQSBcXFwiNS4xNC4wXFxcIlwiO1xuXG52YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIikpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbmQobmFtZSk7XG4gIH07XG59O1xuXG52YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICBwLm1lYXN1cmUoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG59O1xuXG52YXIgcGVyZiA9IHtcbiAgYmVnaW46IGJlZ2luLFxuICBlbmQ6IGVuZFxufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBoZWxwZXIgdG8gYmluZCBhIGZ1bmN0aW9uIGtub3duIHRvIGhhdmUgNCBhcmd1bWVudHNcbiAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqL1xuXG52YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYywgZCk7XG4gIH07XG59O1xuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xuXG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0KHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdCksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSxcbiAgICAgIGtleSxcbiAgICAgIHJlc3VsdDtcblxuICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpID0gMTtcbiAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgc3ViamVjdFtrZXldLCBrZXksIHN1YmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pY29kZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBoZXggPSB1bmljb2RlLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgIHJlc3VsdCArPSAoJzAwMCcgKyBoZXgpLnNsaWNlKC00KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUljb25zKHByZWZpeCwgaWNvbnMpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBfcGFyYW1zJHNraXBIb29rcyA9IHBhcmFtcy5za2lwSG9va3MsXG4gICAgICBza2lwSG9va3MgPSBfcGFyYW1zJHNraXBIb29rcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHNraXBIb29rcztcbiAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhpY29ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb25OYW1lKSB7XG4gICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgdmFyIGV4cGFuZGVkID0gISFpY29uLmljb247XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGFjY1tpY29uLmljb25OYW1lXSA9IGljb24uaWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2sgPT09ICdmdW5jdGlvbicgJiYgIXNraXBIb29rcykge1xuICAgIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrKHByZWZpeCwgbm9ybWFsaXplZCk7XG4gIH0gZWxzZSB7XG4gICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZCh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBub3JtYWxpemVkKTtcbiAgfVxuICAvKipcbiAgICogRm9udCBBd2Vzb21lIDQgdXNlZCB0aGUgcHJlZml4IG9mIGBmYWAgZm9yIGFsbCBpY29ucy4gV2l0aCB0aGUgaW50cm9kdWN0aW9uXG4gICAqIG9mIG5ldyBzdHlsZXMgd2UgbmVlZGVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVtLiBQcmVmaXggYGZhYCBpcyBub3cgYW4gYWxpYXNcbiAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc3kgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICogdGhpcyBhcyB3ZWxsLlxuICAgKi9cblxuXG4gIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgZGVmaW5lSWNvbnMoJ2ZhJywgaWNvbnMpO1xuICB9XG59XG5cbnZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzLFxuICAgIHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zO1xudmFyIF9ieVVuaWNvZGUgPSB7fTtcbnZhciBfYnlMaWdhdHVyZSA9IHt9O1xudmFyIF9ieU9sZE5hbWUgPSB7fTtcbnZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gcmVkdWNlKHN0eWxlcywgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICB9O1xuXG4gIF9ieVVuaWNvZGUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICBpZiAoaWNvblszXSkge1xuICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgdmFyIGxpZ2F0dXJlcyA9IGljb25bMl07XG4gICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgIGxpZ2F0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdhdHVyZSkge1xuICAgICAgYWNjW2xpZ2F0dXJlXSA9IGljb25OYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICB2YXIgaGFzUmVndWxhciA9ICdmYXInIGluIHN0eWxlcztcbiAgX2J5T2xkTmFtZSA9IHJlZHVjZShzaGltcywgZnVuY3Rpb24gKGFjYywgc2hpbSkge1xuICAgIHZhciBvbGROYW1lID0gc2hpbVswXTtcbiAgICB2YXIgcHJlZml4ID0gc2hpbVsxXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgIHByZWZpeCA9ICdmYXMnO1xuICAgIH1cblxuICAgIGFjY1tvbGROYW1lXSA9IHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lXG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuYnVpbGQoKTtcbmZ1bmN0aW9uIGJ5VW5pY29kZShwcmVmaXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIChfYnlVbmljb2RlW3ByZWZpeF0gfHwge30pW3VuaWNvZGVdO1xufVxuZnVuY3Rpb24gYnlMaWdhdHVyZShwcmVmaXgsIGxpZ2F0dXJlKSB7XG4gIHJldHVybiAoX2J5TGlnYXR1cmVbcHJlZml4XSB8fCB7fSlbbGlnYXR1cmVdO1xufVxuZnVuY3Rpb24gYnlPbGROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbFxuICB9O1xufVxuXG52YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xudmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgcmVzdDogW11cbiAgfTtcbn07XG5mdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgaWYgKHN0eWxlcyQxW2Nsc10pIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChjb25maWcuYXV0b0ZldGNoU3ZnICYmIFsnZmFzJywgJ2ZhcicsICdmYWwnLCAnZmFkJywgJ2ZhYicsICdmYSddLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgIHZhciBzaGltID0gYWNjLnByZWZpeCA9PT0gJ2ZhJyA/IGJ5T2xkTmFtZShpY29uTmFtZSkgOiB7fTtcbiAgICAgIGFjYy5pY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzLmluZGV4T2YoJ2ZhLXctJykgIT09IDApIHtcbiAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBlbXB0eUNhbm9uaWNhbEljb24oKSk7XG59XG5mdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSHRtbChhYnN0cmFjdE5vZGVzKSB7XG4gIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPT09IHZvaWQgMCA/IHt9IDogX2Fic3RyYWN0Tm9kZXMkYXR0cmliLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcsIFwiIFwiKS5jb25jYXQoam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIFwiPlwiKS5jb25jYXQoY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJyksIFwiPC9cIikuY29uY2F0KHRhZywgXCI+XCIpO1xuICB9XG59XG5cbnZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlO1xuICB9XG5cbiAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICByZXR1cm4gbXV0YXRvciB8fCBtdXRhdG9ycy5yZXBsYWNlO1xufVxuXG52YXIgbXV0YXRvcnMgPSB7XG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuICAgIHZhciBuZXdPdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWcua2VlcE9yaWdpbmFsU291cmNlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJyA/IFwiPCEtLSBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIC0tPlwiKSA6ICcnKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpO1xuICAgICAgbmV3Tm9kZS5vdXRlckhUTUwgPSBuZXdPdXRlckhUTUw7XG4gICAgfVxuICB9LFxuICBuZXN0OiBmdW5jdGlvbiBuZXN0KG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTsgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IHRvIHRoZSBzdGFuZGFyZCByZXBsYWNlbWVudFxuXG4gICAgaWYgKH5jbGFzc0FycmF5KG5vZGUpLmluZGV4T2YoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MpKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgdmFyIGZvclN2ZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItLipcIikpO1xuICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLnN0eWxlO1xuICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmlkO1xuICAgIHZhciBzcGxpdENsYXNzZXMgPSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgaWYgKGNscyA9PT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgfHwgY2xzLm1hdGNoKGZvclN2ZykpIHtcbiAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy50b05vZGUucHVzaChjbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgIHRvTm9kZTogW10sXG4gICAgICB0b1N2ZzogW11cbiAgICB9KTtcbiAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcbiAgICB2YXIgbmV3SW5uZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNwbGl0Q2xhc3Nlcy50b05vZGUuam9pbignICcpKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHLCAnJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gIG9wKCk7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuXG4gICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBwZXJmb3JtT3BlcmF0aW9uU3luYztcbiAgICB9XG5cbiAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignbXV0YXRlJyk7XG4gICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgbWFyaygpO1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG52YXIgZGlzYWJsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGRpc2FibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG52YXIgbW8gPSBudWxsO1xuZnVuY3Rpb24gb2JzZXJ2ZShvcHRpb25zKSB7XG4gIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgbm9kZUNhbGxiYWNrID0gb3B0aW9ucy5ub2RlQ2FsbGJhY2ssXG4gICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrLFxuICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9vcHRpb25zJG9ic2VydmVNdXRhdDtcbiAgbW8gPSBuZXcgTVVUQVRJT05fT0JTRVJWRVIoZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICB0b0FycmF5KG9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uUmVjb3JkKSB7XG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlICYmIGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdmFyIF9nZXRDYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG11dGF0aW9uUmVjb3JkLnRhcmdldCkpLFxuICAgICAgICAgICAgICBwcmVmaXggPSBfZ2V0Q2Fub25pY2FsSWNvbi5wcmVmaXgsXG4gICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICBpZiAocHJlZml4KSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcsIHByZWZpeCk7XG4gICAgICAgICAgaWYgKGljb25OYW1lKSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCBpY29uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIG1vLm9ic2VydmUob2JzZXJ2ZU11dGF0aW9uc1Jvb3QsIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBpZiAoIW1vKSByZXR1cm47XG4gIG1vLmRpc2Nvbm5lY3QoKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIHZhciB2YWwgPSBbXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcblxuICAgICAgaWYgKHByb3AgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleGlzdGluZ1ByZWZpeCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcpO1xuICB2YXIgZXhpc3RpbmdJY29uTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcbiAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgdmFyIHZhbCA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShub2RlKSk7XG5cbiAgaWYgKGV4aXN0aW5nUHJlZml4ICYmIGV4aXN0aW5nSWNvbk5hbWUpIHtcbiAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgdmFsLmljb25OYW1lID0gZXhpc3RpbmdJY29uTmFtZTtcbiAgfVxuXG4gIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCk7XG4gIH0gZWxzZSBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID09PSAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgcGFyc2VUcmFuc2Zvcm1TdHJpbmcgPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICBzaXplOiAxNixcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZSxcbiAgICByb3RhdGU6IDBcbiAgfTtcblxuICBpZiAoIXRyYW5zZm9ybVN0cmluZykge1xuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IG4udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuICAgICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgICB2YXIgcmVzdCA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICdoJykge1xuICAgICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgIGFjYy5mbGlwWSA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHJlc3QgPSBwYXJzZUZsb2F0KHJlc3QpO1xuXG4gICAgICBpZiAoaXNOYU4ocmVzdCkpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChmaXJzdCkge1xuICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICBhY2Mucm90YXRlID0gYWNjLnJvdGF0ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdHJhbnNmb3JtKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHRyYW5zZm9ybVBhcnNlciAobm9kZSkge1xuICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJykpO1xufVxuXG5mdW5jdGlvbiBzeW1ib2xQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN5bWJvbCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXN5bWJvbCcpO1xuICByZXR1cm4gc3ltYm9sID09PSBudWxsID8gZmFsc2UgOiBzeW1ib2wgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gdG9BcnJheShub2RlLmF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyKSB7XG4gICAgaWYgKGFjYy5uYW1lICE9PSAnY2xhc3MnICYmIGFjYy5uYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgdmFyIHRpdGxlSWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpO1xuXG4gIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbn1cblxuZnVuY3Rpb24gbWFza1BhcnNlciAobm9kZSkge1xuICB2YXIgbWFzayA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2snKTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4gZW1wdHlDYW5vbmljYWxJY29uKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldENhbm9uaWNhbEljb24obWFzay5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibGFua01ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdGl0bGVJZDogbnVsbCxcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICBzeW1ib2w6IGZhbHNlLFxuICAgIG1hc2s6IG51bGwsXG4gICAgbWFza0lkOiBudWxsLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBbXSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gIHZhciBleHRyYVN0eWxlcyA9IHN0eWxlUGFyc2VyKG5vZGUpO1xuICB2YXIgdHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyc2VyKG5vZGUpO1xuICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIG1hc2sgPSBtYXNrUGFyc2VyKG5vZGUpO1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgdGl0bGVJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdGl0bGUtaWQnKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBtYXNrOiBtYXNrLFxuICAgIG1hc2tJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzay1pZCcpLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBNaXNzaW5nSWNvbihlcnJvcikge1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0ljb24nO1xuICB0aGlzLm1lc3NhZ2UgPSBlcnJvciB8fCAnSWNvbiB1bmF2YWlsYWJsZSc7XG4gIHRoaXMuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbn1cbk1pc3NpbmdJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdJY29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdJY29uO1xuXG52YXIgRklMTCA9IHtcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbn07XG52YXIgQU5JTUFUSU9OX0JBU0UgPSB7XG4gIGF0dHJpYnV0ZVR5cGU6ICdYTUwnLFxuICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnLFxuICBkdXI6ICcycydcbn07XG52YXIgUklORyA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBkOiAnTTE1Ni41LDQ0Ny43bC0xMi42LDI5LjVjLTE4LjctOS41LTM1LjktMjEuMi01MS41LTM0LjlsMjIuNy0yMi43QzEyNy42LDQzMC41LDE0MS41LDQ0MCwxNTYuNSw0NDcuN3ogTTQwLjYsMjcySDguNSBjMS40LDIxLjIsNS40LDQxLjcsMTEuNyw2MS4xTDUwLDMyMS4yQzQ1LjEsMzA1LjUsNDEuOCwyODksNDAuNiwyNzJ6IE00MC42LDI0MGMxLjQtMTguOCw1LjItMzcsMTEuMS01NC4xbC0yOS41LTEyLjYgQzE0LjcsMTk0LjMsMTAsMjE2LjcsOC41LDI0MEg0MC42eiBNNjQuMywxNTYuNWM3LjgtMTQuOSwxNy4yLTI4LjgsMjguMS00MS41TDY5LjcsOTIuM2MtMTMuNywxNS42LTI1LjUsMzIuOC0zNC45LDUxLjUgTDY0LjMsMTU2LjV6IE0zOTcsNDE5LjZjLTEzLjksMTItMjkuNCwyMi4zLTQ2LjEsMzAuNGwxMS45LDI5LjhjMjAuNy05LjksMzkuOC0yMi42LDU2LjktMzcuNkwzOTcsNDE5LjZ6IE0xMTUsOTIuNCBjMTMuOS0xMiwyOS40LTIyLjMsNDYuMS0zMC40bC0xMS45LTI5LjhjLTIwLjcsOS45LTM5LjgsMjIuNi01Ni44LDM3LjZMMTE1LDkyLjR6IE00NDcuNywzNTUuNWMtNy44LDE0LjktMTcuMiwyOC44LTI4LjEsNDEuNSBsMjIuNywyMi43YzEzLjctMTUuNiwyNS41LTMyLjksMzQuOS01MS41TDQ0Ny43LDM1NS41eiBNNDcxLjQsMjcyYy0xLjQsMTguOC01LjIsMzctMTEuMSw1NC4xbDI5LjUsMTIuNiBjNy41LTIxLjEsMTIuMi00My41LDEzLjYtNjYuOEg0NzEuNHogTTMyMS4yLDQ2MmMtMTUuNyw1LTMyLjIsOC4yLTQ5LjIsOS40djMyLjFjMjEuMi0xLjQsNDEuNy01LjQsNjEuMS0xMS43TDMyMS4yLDQ2MnogTTI0MCw0NzEuNGMtMTguOC0xLjQtMzctNS4yLTU0LjEtMTEuMWwtMTIuNiwyOS41YzIxLjEsNy41LDQzLjUsMTIuMiw2Ni44LDEzLjZWNDcxLjR6IE00NjIsMTkwLjhjNSwxNS43LDguMiwzMi4yLDkuNCw0OS4yaDMyLjEgYy0xLjQtMjEuMi01LjQtNDEuNy0xMS43LTYxLjFMNDYyLDE5MC44eiBNOTIuNCwzOTdjLTEyLTEzLjktMjIuMy0yOS40LTMwLjQtNDYuMWwtMjkuOCwxMS45YzkuOSwyMC43LDIyLjYsMzkuOCwzNy42LDU2LjkgTDkyLjQsMzk3eiBNMjcyLDQwLjZjMTguOCwxLjQsMzYuOSw1LjIsNTQuMSwxMS4xbDEyLjYtMjkuNUMzMTcuNywxNC43LDI5NS4zLDEwLDI3Miw4LjVWNDAuNnogTTE5MC44LDUwIGMxNS43LTUsMzIuMi04LjIsNDkuMi05LjRWOC41Yy0yMS4yLDEuNC00MS43LDUuNC02MS4xLDExLjdMMTkwLjgsNTB6IE00NDIuMyw5Mi4zTDQxOS42LDExNWMxMiwxMy45LDIyLjMsMjkuNCwzMC41LDQ2LjEgbDI5LjgtMTEuOUM0NzAsMTI4LjUsNDU3LjMsMTA5LjQsNDQyLjMsOTIuM3ogTTM5Nyw5Mi40bDIyLjctMjIuN2MtMTUuNi0xMy43LTMyLjgtMjUuNS01MS41LTM0LjlsLTEyLjYsMjkuNSBDMzcwLjQsNzIuMSwzODQuNCw4MS41LDM5Nyw5Mi40eidcbiAgfSlcbn07XG5cbnZhciBPUEFDSVRZX0FOSU1BVEUgPSBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICBhdHRyaWJ1dGVOYW1lOiAnb3BhY2l0eSdcbn0pO1xuXG52YXIgRE9UID0ge1xuICB0YWc6ICdjaXJjbGUnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgY3g6ICcyNTYnLFxuICAgIGN5OiAnMzY0JyxcbiAgICByOiAnMjgnXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgdmFsdWVzOiAnMjg7MTQ7Mjg7Mjg7MTQ7Mjg7J1xuICAgIH0pXG4gIH0sIHtcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDsxOzE7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBRVUVTVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBFWENMQU1BVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMCcsXG4gICAgZDogJ00yMzIuNSwxMzQuNWw3LDE2OGMwLjMsNi40LDUuNiwxMS41LDEyLDExLjVoOWM2LjQsMCwxMS43LTUuMSwxMi0xMS41bDctMTY4YzAuMy02LjgtNS4yLTEyLjUtMTItMTIuNWgtMjMgQzIzNy43LDEyMiwyMzIuMiwxMjcuNywyMzIuNSwxMzQuNXonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzA7MDsxOzE7MDswOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBtaXNzaW5nID0ge1xuICB0YWc6ICdnJyxcbiAgY2hpbGRyZW46IFtSSU5HLCBET1QsIFFVRVNUSU9OLCBFWENMQU1BVElPTl1cbn07XG5cbnZhciBzdHlsZXMkMiA9IG5hbWVzcGFjZS5zdHlsZXM7XG5mdW5jdGlvbiBhc0ZvdW5kSWNvbihpY29uKSB7XG4gIHZhciB3aWR0aCA9IGljb25bMF07XG4gIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuXG4gIHZhciBfaWNvbiRzbGljZSA9IGljb24uc2xpY2UoNCksXG4gICAgICBfaWNvbiRzbGljZTIgPSBfc2xpY2VkVG9BcnJheShfaWNvbiRzbGljZSwgMSksXG4gICAgICB2ZWN0b3JEYXRhID0gX2ljb24kc2xpY2UyWzBdO1xuXG4gIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2ZWN0b3JEYXRhKSkge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLkdST1VQKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZKSxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzFdXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0ge1xuICAgICAgdGFnOiAncGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBkOiB2ZWN0b3JEYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm91bmQ6IHRydWUsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGljb246IGVsZW1lbnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciB2YWwgPSB7XG4gICAgICBmb3VuZDogZmFsc2UsXG4gICAgICB3aWR0aDogNTEyLFxuICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICBpY29uOiBtaXNzaW5nXG4gICAgfTtcblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgc3R5bGVzJDJbcHJlZml4XSAmJiBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXSkge1xuICAgICAgdmFyIGljb24gPSBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXTtcbiAgICAgIHJldHVybiByZXNvbHZlKGFzRm91bmRJY29uKGljb24pKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZGVycyA9IHt9O1xuXG4gICAgaWYgKF90eXBlb2YoV0lORE9XLkZvbnRBd2Vzb21lS2l0Q29uZmlnKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZy50b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhlYWRlcnNbJ2ZhLWtpdC10b2tlbiddID0gV0lORE9XLkZvbnRBd2Vzb21lS2l0Q29uZmlnLnRva2VuO1xuICAgIH1cblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zKSB7XG4gICAgICByZWplY3QobmV3IE1pc3NpbmdJY29uKFwiSWNvbiBpcyBtaXNzaW5nIGZvciBwcmVmaXggXCIuY29uY2F0KHByZWZpeCwgXCIgd2l0aCBpY29uIG5hbWUgXCIpLmNvbmNhdChpY29uTmFtZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBzdHlsZXMkMyA9IG5hbWVzcGFjZS5zdHlsZXM7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSkge1xuICB2YXIgaWNvbk5hbWUgPSBub2RlTWV0YS5pY29uTmFtZSxcbiAgICAgIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0aXRsZUlkID0gbm9kZU1ldGEudGl0bGVJZCxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgbWFza0lkID0gbm9kZU1ldGEubWFza0lkLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICB9KV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgdmFyIHdpZHRoID0gbnVsbDtcbiAgdmFyIGhlaWdodCA9IG51bGw7XG5cbiAgaWYgKElTX0lFKSB7XG4gICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICB9XG5cbiAgcmV0dXJuIHBpY2tlZC5yZXNvbHZlKFtub2RlLCBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGV4dHJhOiBleHRyYSxcbiAgICB3YXRjaGFibGU6IHRydWVcbiAgfSldKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gIHZhciBub2RlTWV0YSA9IHBhcnNlTWV0YShub2RlKTtcblxuICBpZiAofm5vZGVNZXRhLmV4dHJhLmNsYXNzZXMuaW5kZXhPZihMQVlFUlNfVEVYVF9DTEFTU05BTUUpKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25UcmVlKHJvb3QpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICB2YXIgaHRtbENsYXNzTGlzdCA9IERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XG5cbiAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QucmVtb3ZlKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8gT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFKSA6IE9iamVjdC5rZXlzKHN0eWxlcyQzKTtcbiAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbXCIuXCIuY29uY2F0KExBWUVSU19URVhUX0NMQVNTTkFNRSwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIildLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KHAsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpO1xuICB9KSkuam9pbignLCAnKTtcblxuICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgfSBjYXRjaCAoZSkgey8vIG5vb3BcbiAgfVxuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nSWNvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwaWNrZWQuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgIHBlcmZvcm0ocmVzb2x2ZWRNdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGNsQWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBtYXJrKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgPT09IHBvc2l0aW9uO1xuICAgIH0pWzBdO1xuICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKS5tYXRjaChGT05UX0ZBTUlMWV9QQVRURVJOKTtcbiAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCAmJiAhZm9udEZhbWlseSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgLy8gcmVtb3ZlZC4gU28gd2Ugbm93IHNob3VsZCBkZWxldGUgdGhlIGljb24uXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChmb250RmFtaWx5ICYmIGNvbnRlbnQgIT09ICdub25lJyAmJiBjb250ZW50ICE9PSAnJykge1xuICAgICAgdmFyIHByZWZpeCA9IH5bJ1NvbGlkJywgJ1JlZ3VsYXInLCAnTGlnaHQnLCAnRHVvdG9uZScsICdCcmFuZHMnXS5pbmRleE9mKGZvbnRGYW1pbHlbMV0pID8gU1RZTEVfVE9fUFJFRklYW2ZvbnRGYW1pbHlbMV0udG9Mb3dlckNhc2UoKV0gOiBGT05UX1dFSUdIVF9UT19QUkVGSVhbZm9udFdlaWdodF07XG4gICAgICB2YXIgaGV4VmFsdWUgPSB0b0hleChjb250ZW50Lmxlbmd0aCA9PT0gMyA/IGNvbnRlbnQuc3Vic3RyKDEsIDEpIDogY29udGVudCk7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTsgLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDpiZWZvcmUvOmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAvLyBhbHJlYWR5IGRvbmUgc28gd2l0aCB0aGUgc2FtZSBwcmVmaXggYW5kIGljb25OYW1lXG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUsIGljb25JZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICAvLyBEZWxldGUgdGhlIG9sZCBvbmUsIHNpbmNlIHdlJ3JlIHJlcGxhY2luZyBpdCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldGEgPSBibGFua01ldGEoKTtcbiAgICAgICAgdmFyIGV4dHJhID0gbWV0YS5leHRyYTtcbiAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KS50aGVuKGZ1bmN0aW9uIChtYWluKSB7XG4gICAgICAgICAgdmFyIGFic3RyYWN0ID0gbWFrZUlubGluZVN2Z0Fic3RyYWN0KF9vYmplY3RTcHJlYWQoe30sIG1ldGEsIHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgIG1hc2s6IGVtcHR5Q2Fub25pY2FsSWNvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZTogaWNvbklkZW50aWZpZXIsXG4gICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJzpiZWZvcmUnKSB7XG4gICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2Uobm9kZSkge1xuICByZXR1cm4gcGlja2VkLmFsbChbcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmFmdGVyJyldKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzIChyb290KSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZpbHRlcihwcm9jZXNzYWJsZSkubWFwKHJlcGxhY2UpO1xuICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgIHBpY2tlZC5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwic3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjIyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xIHtcXG4gIHdpZHRoOiAwLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMiB7XFxuICB3aWR0aDogMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XFxuICB3aWR0aDogMC4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTQge1xcbiAgd2lkdGg6IDAuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNSB7XFxuICB3aWR0aDogMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xcbiAgd2lkdGg6IDAuMzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTcge1xcbiAgd2lkdGg6IDAuNDM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy04IHtcXG4gIHdpZHRoOiAwLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XFxuICB3aWR0aDogMC41NjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEwIHtcXG4gIHdpZHRoOiAwLjYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMSB7XFxuICB3aWR0aDogMC42ODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcXG4gIHdpZHRoOiAwLjc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEzIHtcXG4gIHdpZHRoOiAwLjgxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTQge1xcbiAgd2lkdGg6IDAuODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcXG4gIHdpZHRoOiAwLjkzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTYge1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTcge1xcbiAgd2lkdGg6IDEuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOCB7XFxuICB3aWR0aDogMS4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTkge1xcbiAgd2lkdGg6IDEuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yMCB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1ib3JkZXIge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxpIHtcXG4gIHdpZHRoOiAyZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1mdyB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciwgLmZhLWxheWVycy10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyNTNhO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXgtd2lkdGg6IDVlbTtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDY2N2VtO1xcbn1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxufVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07XFxufVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbn1cXG5cXG4uZmEtZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLmZhLXVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmEtbGkge1xcbiAgbGVmdDogLTJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbSAwLjI1ZW0gMC4xNWVtO1xcbn1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5mYS5mYS1wdWxsLWxlZnQsXFxuLmZhcy5mYS1wdWxsLWxlZnQsXFxuLmZhci5mYS1wdWxsLWxlZnQsXFxuLmZhbC5mYS1wdWxsLWxlZnQsXFxuLmZhYi5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQsXFxuLmZhcy5mYS1wdWxsLXJpZ2h0LFxcbi5mYXIuZmEtcHVsbC1yaWdodCxcXG4uZmFsLmZhLXB1bGwtcmlnaHQsXFxuLmZhYi5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG59XFxuXFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcblxcbi5mYS1mbGlwLWJvdGgsIC5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxufVxcblxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCxcXG46cm9vdCAuZmEtZmxpcC1ib3RoIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0yeCB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwgLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIGNsaXA6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wcmltYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXByaW1hcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtc2Vjb25kYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXByaW1hcnkge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXNlY29uZGFyeSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmZhZC5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzICgpIHtcbiAgdmFyIGRmcCA9IERFRkFVTFRfRkFNSUxZX1BSRUZJWDtcbiAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gIHZhciBmcCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIGN1c3RvbVByb3BQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwtLVwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoY3VzdG9tUHJvcFBhdHQsIFwiLS1cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIExpYnJhcnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcbiAgICAgIE9iamVjdC5rZXlzKGFkZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVsbERlZmluaXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAwOiBkZWZpbml0aW9uXG4gICAgICB9IDogZGVmaW5pdGlvbjtcbiAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfbm9ybWFsaXplZCRrZXkgPSBub3JtYWxpemVkW2tleV0sXG4gICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICBpY29uID0gX25vcm1hbGl6ZWQka2V5Lmljb247XG4gICAgICAgIGlmICghYWRkaXRpb25zW3ByZWZpeF0pIGFkZGl0aW9uc1twcmVmaXhdID0ge307XG4gICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhZGRpdGlvbnM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpYnJhcnk7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlPYmplY3QodmFsLCBhYnN0cmFjdENyZWF0b3IpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgIGdldDogYWJzdHJhY3RDcmVhdG9yXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWwuYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdmFsLmh0bWw7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihpY29uTG9va3VwKSB7XG4gIHZhciBfaWNvbkxvb2t1cCRwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9pY29uTG9va3VwJHByZWZpeCA9PT0gdm9pZCAwID8gJ2ZhJyA6IF9pY29uTG9va3VwJHByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkxvb2t1cC5pY29uTmFtZTtcbiAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgIHZhciBtYXNrID0gcGFyYW1zLm1hc2s7XG5cbiAgICBpZiAobWFzaykge1xuICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChpY29uRGVmaW5pdGlvbiwgX29iamVjdFNwcmVhZCh7fSwgcGFyYW1zLCB7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSkpO1xuICB9O1xufVxuXG52YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgZGlzY29ubmVjdCgpO1xufTtcbnZhciBfY3NzSW5zZXJ0ZWQgPSBmYWxzZTtcbnZhciBkb20gPSB7XG4gIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmIChJU19ET00pIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG5cbiAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblRyZWUobm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGlja2VkLnJlamVjdCgnT3BlcmF0aW9uIHJlcXVpcmVzIGEgRE9NIG9mIHNvbWUga2luZC4nKTtcbiAgICB9XG4gIH0sXG4gIGNzczogY3NzLFxuICBpbnNlcnRDc3M6IGZ1bmN0aW9uIGluc2VydENzcyQkMSgpIHtcbiAgICBpZiAoIV9jc3NJbnNlcnRlZCkge1xuICAgICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYXV0b1JlcGxhY2VTdmdSb290ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBwYXJhbXMub2JzZXJ2ZU11dGF0aW9uc1Jvb3Q7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgYXV0b1JlcGxhY2Uoe1xuICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlKHtcbiAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrOiBzZWFyY2hQc2V1ZG9FbGVtZW50cyxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBwYXJzZSA9IHtcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gIH1cbn07XG52YXIgaWNvbiA9IHJlc29sdmVJY29ucyhmdW5jdGlvbiAoaWNvbkRlZmluaXRpb24pIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgX3BhcmFtcyRtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgbWFza0lkID0gX3BhcmFtcyRtYXNrSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2tJZCxcbiAgICAgIF9wYXJhbXMkdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlLFxuICAgICAgX3BhcmFtcyR0aXRsZUlkID0gcGFyYW1zLnRpdGxlSWQsXG4gICAgICB0aXRsZUlkID0gX3BhcmFtcyR0aXRsZUlkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZUlkLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcyxcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMsXG4gICAgICBfcGFyYW1zJHN0eWxlcyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlcztcbiAgaWYgKCFpY29uRGVmaW5pdGlvbikgcmV0dXJuO1xuICB2YXIgcHJlZml4ID0gaWNvbkRlZmluaXRpb24ucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uRGVmaW5pdGlvbi5pY29uTmFtZSxcbiAgICAgIGljb24gPSBpY29uRGVmaW5pdGlvbi5pY29uO1xuICByZXR1cm4gYXBpT2JqZWN0KF9vYmplY3RTcHJlYWQoe1xuICAgIHR5cGU6ICdpY29uJ1xuICB9LCBpY29uRGVmaW5pdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcblxuICAgIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgIG1hc2s6IG1hc2sgPyBhc0ZvdW5kSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbWFza0lkOiBtYXNrSWQsXG4gICAgICB0aXRsZUlkOiB0aXRsZUlkLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbnZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0yID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtMiA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybTIsXG4gICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTIgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMixcbiAgICAgIF9wYXJhbXMkY2xhc3NlczIgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMyID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMyLFxuICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczI7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBjb3VudGVyID0gZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0aXRsZTMgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUzID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTMsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzMyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMzO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnY291bnRlcicsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtY291bnRlclwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGxheWVyID0gZnVuY3Rpb24gbGF5ZXIoYXNzZW1ibGVyKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRjbGFzc2VzNCA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczQgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzNDtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2xheWVyJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKS5qb2luKCcgJylcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xudmFyIGFwaSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGNvbmZpZzogY29uZmlnLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgY291bnRlcjogY291bnRlcixcbiAgbGF5ZXI6IGxheWVyLFxuICB0b0h0bWw6IHRvSHRtbFxufTtcblxudmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpY29uLCBub0F1dG8sIGNvbmZpZywgdG9IdG1sLCBsYXllciwgdGV4dCwgY291bnRlciwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYWInO1xudmFyIGljb25OYW1lID0gJ2NjLW1hc3RlcmNhcmQnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxZjEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000ODIuOSA0MTAuM2MwIDYuOC00LjYgMTEuNy0xMS4yIDExLjctNi44IDAtMTEuMi01LjItMTEuMi0xMS43IDAtNi41IDQuNC0xMS43IDExLjItMTEuNyA2LjYgMCAxMS4yIDUuMiAxMS4yIDExLjd6bS0zMTAuOC0xMS43Yy03LjEgMC0xMS4yIDUuMi0xMS4yIDExLjcgMCA2LjUgNC4xIDExLjcgMTEuMiAxMS43IDYuNSAwIDEwLjktNC45IDEwLjktMTEuNy0uMS02LjUtNC40LTExLjctMTAuOS0xMS43em0xMTcuNS0uM2MtNS40IDAtOC43IDMuNS05LjUgOC43aDE5LjFjLS45LTUuNy00LjQtOC43LTkuNi04Ljd6bTEwNy44LjNjLTYuOCAwLTEwLjkgNS4yLTEwLjkgMTEuNyAwIDYuNSA0LjEgMTEuNyAxMC45IDExLjcgNi44IDAgMTEuMi00LjkgMTEuMi0xMS43IDAtNi41LTQuNC0xMS43LTExLjItMTEuN3ptMTA1LjkgMjYuMWMwIC4zLjMuNS4zIDEuMSAwIC4zLS4zLjUtLjMgMS4xLS4zLjMtLjMuNS0uNS44LS4zLjMtLjUuNS0xLjEuNS0uMy4zLS41LjMtMS4xLjMtLjMgMC0uNSAwLTEuMS0uMy0uMyAwLS41LS4zLS44LS41LS4zLS4zLS41LS41LS41LS44LS4zLS41LS4zLS44LS4zLTEuMSAwLS41IDAtLjguMy0xLjEgMC0uNS4zLS44LjUtMS4xLjMtLjMuNS0uMy44LS41LjUtLjMuOC0uMyAxLjEtLjMuNSAwIC44IDAgMS4xLjMuNS4zLjguMyAxLjEuNXMuMi42LjUgMS4xem0tMi4yIDEuNGMuNSAwIC41LS4zLjgtLjMuMy0uMy4zLS41LjMtLjggMC0uMyAwLS41LS4zLS44LS4zIDAtLjUtLjMtMS4xLS4zaC0xLjZ2My41aC44VjQyNmguM2wxLjEgMS40aC44bC0xLjEtMS4zek01NzYgODF2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MWMwLTI2LjUgMjEuNS00OCA0OC00OGg0ODBjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTY0IDIyMC42YzAgNzYuNSA2Mi4xIDEzOC41IDEzOC41IDEzOC41IDI3LjIgMCA1My45LTguMiA3Ni41LTIzLjEtNzIuOS01OS4zLTcyLjQtMTcxLjIgMC0yMzAuNS0yMi42LTE1LTQ5LjMtMjMuMS03Ni41LTIzLjEtNzYuNC0uMS0xMzguNSA2Mi0xMzguNSAxMzguMnptMjI0IDEwOC44YzcwLjUtNTUgNzAuMi0xNjIuMiAwLTIxNy41LTcwLjIgNTUuMy03MC41IDE2Mi42IDAgMjE3LjV6bS0xNDIuMyA3Ni4zYzAtOC43LTUuNy0xNC40LTE0LjctMTQuNy00LjYgMC05LjUgMS40LTEyLjggNi41LTIuNC00LjEtNi41LTYuNS0xMi4yLTYuNS0zLjggMC03LjYgMS40LTEwLjYgNS40VjM5MmgtOC4ydjM2LjdoOC4yYzAtMTguOS0yLjUtMzAuMiA5LTMwLjIgMTAuMiAwIDguMiAxMC4yIDguMiAzMC4yaDcuOWMwLTE4LjMtMi41LTMwLjIgOS0zMC4yIDEwLjIgMCA4LjIgMTAgOC4yIDMwLjJoOC4ydi0yM3ptNDQuOS0xMy43aC03Ljl2NC40Yy0yLjctMy4zLTYuNS01LjQtMTEuNy01LjQtMTAuMyAwLTE4LjIgOC4yLTE4LjIgMTkuMyAwIDExLjIgNy45IDE5LjMgMTguMiAxOS4zIDUuMiAwIDktMS45IDExLjctNS40djQuNmg3LjlWMzkyem00MC41IDI1LjZjMC0xNS0yMi45LTguMi0yMi45LTE1LjIgMC01LjcgMTEuOS00LjggMTguNS0xLjFsMy4zLTYuNWMtOS40LTYuMS0zMC4yLTYtMzAuMiA4LjIgMCAxNC4zIDIyLjkgOC4zIDIyLjkgMTUgMCA2LjMtMTMuNSA1LjgtMjAuNy44bC0zLjUgNi4zYzExLjIgNy42IDMyLjYgNiAzMi42LTcuNXptMzUuNCA5LjNsLTIuMi02LjhjLTMuOCAyLjEtMTIuMiA0LjQtMTIuMi00LjF2LTE2LjZoMTMuMVYzOTJoLTEzLjF2LTExLjJoLTguMlYzOTJoLTcuNnY3LjNoNy42VjQxNmMwIDE3LjYgMTcuMyAxNC40IDIyLjYgMTAuOXptMTMuMy0xMy40aDI3LjVjMC0xNi4yLTcuNC0yMi42LTE3LjQtMjIuNi0xMC42IDAtMTguMiA3LjktMTguMiAxOS4zIDAgMjAuNSAyMi42IDIzLjkgMzMuOCAxNC4ybC0zLjgtNmMtNy44IDYuNC0xOS42IDUuOC0yMS45LTQuOXptNTkuMS0yMS41Yy00LjYtMi0xMS42LTEuOC0xNS4yIDQuNFYzOTJoLTguMnYzNi43aDguMlY0MDhjMC0xMS42IDkuNS0xMC4xIDEyLjgtOC40bDIuNC03LjZ6bTEwLjYgMTguM2MwLTExLjQgMTEuNi0xNS4xIDIwLjctOC40bDMuOC02LjVjLTExLjYtOS4xLTMyLjctNC4xLTMyLjcgMTUgMCAxOS44IDIyLjQgMjMuOCAzMi43IDE1bC0zLjgtNi41Yy05LjIgNi41LTIwLjcgMi42LTIwLjctOC42em02Ni43LTE4LjNINDA4djQuNGMtOC4zLTExLTI5LjktNC44LTI5LjkgMTMuOSAwIDE5LjIgMjIuNCAyNC43IDI5LjkgMTMuOXY0LjZoOC4yVjM5MnptMzMuNyAwYy0yLjQtMS4yLTExLTIuOS0xNS4yIDQuNFYzOTJoLTcuOXYzNi43aDcuOVY0MDhjMC0xMSA5LTEwLjMgMTIuOC04LjRsMi40LTcuNnptNDAuMy0xNC45aC03Ljl2MTkuM2MtOC4yLTEwLjktMjkuOS01LjEtMjkuOSAxMy45IDAgMTkuNCAyMi41IDI0LjYgMjkuOSAxMy45djQuNmg3Ljl2LTUxLjd6bTcuNi03NS4xdjQuNmguOFYzMDJoMS45di0uOGgtNC42di44aDEuOXptNi42IDEyMy44YzAtLjUgMC0xLjEtLjMtMS42LS4zLS4zLS41LS44LS44LTEuMS0uMy0uMy0uOC0uNS0xLjEtLjgtLjUgMC0xLjEtLjMtMS42LS4zLS4zIDAtLjguMy0xLjQuMy0uNS4zLS44LjUtMS4xLjgtLjUuMy0uOC44LS44IDEuMS0uMy41LS4zIDEuMS0uMyAxLjYgMCAuMyAwIC44LjMgMS40IDAgLjMuMy44LjggMS4xLjMuMy41LjUgMS4xLjguNS4zIDEuMS4zIDEuNC4zLjUgMCAxLjEgMCAxLjYtLjMuMy0uMy44LS41IDEuMS0uOC4zLS4zLjUtLjguOC0xLjEuMy0uNi4zLTEuMS4zLTEuNHptMy4yLTEyNC43aC0xLjRsLTEuNiAzLjUtMS42LTMuNWgtMS40djUuNGguOHYtNC4xbDEuNiAzLjVoMS4xbDEuNC0zLjV2NC4xaDEuMXYtNS40em00LjQtODAuNWMwLTc2LjItNjIuMS0xMzguMy0xMzguNS0xMzguMy0yNy4yIDAtNTMuOSA4LjItNzYuNSAyMy4xIDcyLjEgNTkuMyA3My4yIDE3MS41IDAgMjMwLjUgMjIuNiAxNSA0OS41IDIzLjEgNzYuNSAyMy4xIDc2LjQuMSAxMzguNS02MS45IDEzOC41LTEzOC40eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNjTWFzdGVyY2FyZCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFiJztcbnZhciBpY29uTmFtZSA9ICdjYy1wYXlwYWwnO1xudmFyIHdpZHRoID0gNTc2O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxZjQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00xODYuMyAyNTguMmMwIDEyLjItOS43IDIxLjUtMjIgMjEuNS05LjIgMC0xNi01LjItMTYtMTUgMC0xMi4yIDkuNS0yMiAyMS43LTIyIDkuMyAwIDE2LjMgNS43IDE2LjMgMTUuNXpNODAuNSAyMDkuN2gtNC43Yy0xLjUgMC0zIDEtMy4yIDIuN2wtNC4zIDI2LjcgOC4yLS4zYzExIDAgMTkuNS0xLjUgMjEuNS0xNC4yIDIuMy0xMy40LTYuMi0xNC45LTE3LjUtMTQuOXptMjg0IDBIMzYwYy0xLjggMC0zIDEtMy4yIDIuN2wtNC4yIDI2LjcgOC0uM2MxMyAwIDIyLTMgMjItMTgtLjEtMTAuNi05LjYtMTEuMS0xOC4xLTExLjF6TTU3NiA4MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHpNMTI4LjMgMjE1LjRjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTQwYy0yLjUgMC01IDItNS4yIDQuN0wzMiAyOTQuMmMtLjMgMiAxLjIgNCAzLjIgNGgxOWMyLjcgMCA1LjItMi45IDUuNS01LjdsNC41LTI2LjZjMS03LjIgMTMuMi00LjcgMTgtNC43IDI4LjYgMCA0Ni4xLTE3IDQ2LjEtNDUuOHptODQuMiA4LjhoLTE5Yy0zLjggMC00IDUuNS00LjIgOC4yLTUuOC04LjUtMTQuMi0xMC0yMy43LTEwLTI0LjUgMC00My4yIDIxLjUtNDMuMiA0NS4yIDAgMTkuNSAxMi4yIDMyLjIgMzEuNyAzMi4yIDkgMCAyMC4yLTQuOSAyNi41LTExLjktLjUgMS41LTEgNC43LTEgNi4yIDAgMi4zIDEgNCAzLjIgNEgyMDBjMi43IDAgNS0yLjkgNS41LTUuN2wxMC4yLTY0LjNjLjMtMS45LTEuMi0zLjktMy4yLTMuOXptNDAuNSA5Ny45bDYzLjctOTIuNmMuNS0uNS41LTEgLjUtMS43IDAtMS43LTEuNS0zLjUtMy4yLTMuNWgtMTkuMmMtMS43IDAtMy41IDEtNC41IDIuNWwtMjYuNSAzOS0xMS0zNy41Yy0uOC0yLjItMy00LTUuNS00aC0xOC43Yy0xLjcgMC0zLjIgMS44LTMuMiAzLjUgMCAxLjIgMTkuNSA1Ni44IDIxLjIgNjIuMS0yLjcgMy44LTIwLjUgMjguNi0yMC41IDMxLjYgMCAxLjggMS41IDMuMiAzLjIgMy4yaDE5LjJjMS44LS4xIDMuNS0xLjEgNC41LTIuNnptMTU5LjMtMTA2LjdjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTM5LjdjLTIuNyAwLTUuMiAyLTUuNSA0LjdsLTE2LjIgMTAyYy0uMiAyIDEuMyA0IDMuMiA0aDIwLjVjMiAwIDMuNS0xLjUgNC0zLjJsNC41LTI5YzEtNy4yIDEzLjItNC43IDE4LTQuNyAyOC40IDAgNDUuOS0xNyA0NS45LTQ1Ljh6bTg0LjIgOC44aC0xOWMtMy44IDAtNCA1LjUtNC4zIDguMi01LjUtOC41LTE0LTEwLTIzLjctMTAtMjQuNSAwLTQzLjIgMjEuNS00My4yIDQ1LjIgMCAxOS41IDEyLjIgMzIuMiAzMS43IDMyLjIgOS4zIDAgMjAuNS00LjkgMjYuNS0xMS45LS4zIDEuNS0xIDQuNy0xIDYuMiAwIDIuMyAxIDQgMy4yIDRINDg0YzIuNyAwIDUtMi45IDUuNS01LjdsMTAuMi02NC4zYy4zLTEuOS0xLjItMy45LTMuMi0zLjl6bTQ3LjUtMzMuM2MwLTItMS41LTMuNS0zLjItMy41aC0xOC41Yy0xLjUgMC0zIDEuMi0zLjIgMi43bC0xNi4yIDEwNC0uMy41YzAgMS44IDEuNSAzLjUgMy41IDMuNWgxNi41YzIuNSAwIDUtMi45IDUuMi01LjdMNTQ0IDE5MS4ydi0uM3ptLTkwIDUxLjhjLTEyLjIgMC0yMS43IDkuNy0yMS43IDIyIDAgOS43IDcgMTUgMTYuMiAxNSAxMiAwIDIxLjctOS4yIDIxLjctMjEuNS4xLTkuOC02LjktMTUuNS0xNi4yLTE1LjV6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2NQYXlwYWwgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2ZhYic7XG52YXIgaWNvbk5hbWUgPSAnY2MtdmlzYSc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjFmMCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ3MC4xIDIzMS4zczcuNiAzNy4yIDkuMyA0NUg0NDZjMy4zLTguOSAxNi00My41IDE2LTQzLjUtLjIuMyAzLjMtOS4xIDUuMy0xNC45bDIuOCAxMy40ek01NzYgODB2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGg0ODBjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTE1Mi41IDMzMS4yTDIxNS43IDE3NmgtNDIuNWwtMzkuMyAxMDYtNC4zLTIxLjUtMTQtNzEuNGMtMi4zLTkuOS05LjQtMTIuNy0xOC4yLTEzLjFIMzIuN2wtLjcgMy4xYzE1LjggNCAyOS45IDkuOCA0Mi4yIDE3LjFsMzUuOCAxMzVoNDIuNXptOTQuNC4yTDI3Mi4xIDE3NmgtNDAuMmwtMjUuMSAxNTUuNGg0MC4xem0xMzkuOS01MC44Yy4yLTE3LjctMTAuNi0zMS4yLTMzLjctNDIuMy0xNC4xLTcuMS0yMi43LTExLjktMjIuNy0xOS4yLjItNi42IDcuMy0xMy40IDIzLjEtMTMuNCAxMy4xLS4zIDIyLjcgMi44IDI5LjkgNS45bDMuNiAxLjcgNS41LTMzLjZjLTcuOS0zLjEtMjAuNS02LjYtMzYtNi42LTM5LjcgMC02Ny42IDIxLjItNjcuOCA1MS40LS4zIDIyLjMgMjAgMzQuNyAzNS4yIDQyLjIgMTUuNSA3LjYgMjAuOCAxMi42IDIwLjggMTkuMy0uMiAxMC40LTEyLjYgMTUuMi0yNC4xIDE1LjItMTYgMC0yNC42LTIuNS0zNy43LTguM2wtNS4zLTIuNS01LjYgMzQuOWM5LjQgNC4zIDI2LjggOC4xIDQ0LjggOC4zIDQyLjIuMSA2OS43LTIwLjggNzAtNTN6TTUyOCAzMzEuNEw0OTUuNiAxNzZoLTMxLjFjLTkuNiAwLTE2LjkgMi44LTIxIDEyLjlsLTU5LjcgMTQyLjVINDI2czYuOS0xOS4yIDguNC0yMy4zSDQ4NmMxLjIgNS41IDQuOCAyMy4zIDQuOCAyMy4zSDUyOHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDY1Zpc2EgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2ZhYic7XG52YXIgaWNvbk5hbWUgPSAnZmFjZWJvb2snO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwOWEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ001MDQgMjU2QzUwNCAxMTkgMzkzIDggMjU2IDhTOCAxMTkgOCAyNTZjMCAxMjMuNzggOTAuNjkgMjI2LjM4IDIwOS4yNSAyNDVWMzI3LjY5aC02M1YyNTZoNjN2LTU0LjY0YzAtNjIuMTUgMzctOTYuNDggOTMuNjctOTYuNDggMjcuMTQgMCA1NS41MiA0Ljg0IDU1LjUyIDQuODR2NjFoLTMxLjI4Yy0zMC44IDAtNDAuNDEgMTkuMTItNDAuNDEgMzguNzNWMjU2aDY4Ljc4bC0xMSA3MS42OWgtNTcuNzhWNTAxQzQxMy4zMSA0ODIuMzggNTA0IDM3OS43OCA1MDQgMjU2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUZhY2Vib29rID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYWInO1xudmFyIGljb25OYW1lID0gJ2luc3RhZ3JhbSc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjE2ZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUluc3RhZ3JhbSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFiJztcbnZhciBpY29uTmFtZSA9ICd0d2l0dGVyJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDk5JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVR3aXR0ZXIgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnYWRqdXN0JztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDQyJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNOCAyNTZjMCAxMzYuOTY2IDExMS4wMzMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMzQgMjQ4LTI0OFMzOTIuOTY2IDggMjU2IDggOCAxMTkuMDMzIDggMjU2em0yNDggMTg0VjcyYzEwMS43MDUgMCAxODQgODIuMzExIDE4NCAxODQgMCAxMDEuNzA1LTgyLjMxMSAxODQtMTg0IDE4NHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFBZGp1c3QgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnYmFuJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDVlJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU2IDhDMTE5LjAzNCA4IDggMTE5LjAzMyA4IDI1NnMxMTEuMDM0IDI0OCAyNDggMjQ4IDI0OC0xMTEuMDM0IDI0OC0yNDhTMzkyLjk2NyA4IDI1NiA4em0xMzAuMTA4IDExNy44OTJjNjUuNDQ4IDY1LjQ0OCA3MCAxNjUuNDgxIDIwLjY3NyAyMzUuNjM3TDE1MC40NyAxMDUuMjE2YzcwLjIwNC00OS4zNTYgMTcwLjIyNi00NC43MzUgMjM1LjYzOCAyMC42NzZ6TTEyNS44OTIgMzg2LjEwOGMtNjUuNDQ4LTY1LjQ0OC03MC0xNjUuNDgxLTIwLjY3Ny0yMzUuNjM3TDM2MS41MyA0MDYuNzg0Yy03MC4yMDMgNDkuMzU2LTE3MC4yMjYgNDQuNzM2LTIzNS42MzgtMjAuNjc2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUJhbiA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjaGVjayc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwYyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNoZWNrID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2NoZXZyb24tdXAnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwNzcnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDAuOTcxIDEzMC41MjRsMTk0LjM0MyAxOTQuMzQzYzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MWwtMjIuNjY3IDIyLjY2N2MtOS4zNTcgOS4zNTctMjQuNTIyIDkuMzc1LTMzLjkwMS4wNEwyMjQgMjI3LjQ5NSA2OS4yNTUgMzgxLjUxNmMtOS4zNzkgOS4zMzUtMjQuNTQ0IDkuMzE3LTMzLjkwMS0uMDRsLTIyLjY2Ny0yMi42NjdjLTkuMzczLTkuMzczLTkuMzczLTI0LjU2OSAwLTMzLjk0MUwyMDcuMDMgMTMwLjUyNWM5LjM3Mi05LjM3MyAyNC41NjgtOS4zNzMgMzMuOTQxLS4wMDF6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhQ2hldnJvblVwID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2Nsb2NrJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDE3JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU2LDhDMTE5LDgsOCwxMTksOCwyNTZTMTE5LDUwNCwyNTYsNTA0LDUwNCwzOTMsNTA0LDI1NiwzOTMsOCwyNTYsOFptOTIuNDksMzEzaDBsLTIwLDI1YTE2LDE2LDAsMCwxLTIyLjQ5LDIuNWgwbC02Ny00OS43MmE0MCw0MCwwLDAsMS0xNS0zMS4yM1YxMTJhMTYsMTYsMCwwLDEsMTYtMTZoMzJhMTYsMTYsMCwwLDEsMTYsMTZWMjU2bDU4LDQyLjVBMTYsMTYsMCwwLDEsMzQ4LjQ5LDMyMVonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDbG9jayA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjcmVkaXQtY2FyZCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA5ZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTAgNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQ4MGMyNi41IDAgNDgtMjEuNSA0OC00OFYyNTZIMHYxNzZ6bTE5Mi02OGMwLTYuNiA1LjQtMTIgMTItMTJoMTM2YzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJIMjA0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0tMTI4IDBjMC02LjYgNS40LTEyIDEyLTEyaDcyYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTU3NiA4MHY0OEgwVjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFDcmVkaXRDYXJkID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA2YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNCAyNTZjMCAxMzYuOTk3LTExMS4wNDMgMjQ4LTI0OCAyNDhTOCAzOTIuOTk3IDggMjU2QzggMTE5LjA4MyAxMTkuMDQzIDggMjU2IDhzMjQ4IDExMS4wODMgMjQ4IDI0OHptLTI0OCA1MGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUV4Y2xhbWF0aW9uQ2lyY2xlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2ZsYWcnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMjQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNDkuNTY1IDk4Ljc4M0MyOTUuOTc4IDk4Ljc4MyAyNTEuNzIxIDY0IDE4NC4zNDggNjRjLTI0Ljk1NSAwLTQ3LjMwOSA0LjM4NC02OC4wNDUgMTIuMDEzYTU1Ljk0NyA1NS45NDcgMCAwIDAgMy41ODYtMjMuNTYyQzExOC4xMTcgMjQuMDE1IDk0LjgwNiAxLjIwNiA2Ni4zMzguMDQ4IDM0LjM0NS0xLjI1NCA4IDI0LjI5NiA4IDU2YzAgMTkuMDI2IDkuNDk3IDM1LjgyNSAyNCA0NS45NDVWNDg4YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxNmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTk0LjRjMjguMzExLTEyLjA2NCA2My41ODItMjIuMTIyIDExNC40MzUtMjIuMTIyIDUzLjU4OCAwIDk3Ljg0NCAzNC43ODMgMTY1LjIxNyAzNC43ODMgNDguMTY5IDAgODYuNjY3LTE2LjI5NCAxMjIuNTA1LTQwLjg1OEM1MDYuODQgMzU5LjQ1MiA1MTIgMzQ5LjU3MSA1MTIgMzM5LjA0NXYtMjQzLjFjMC0yMy4zOTMtMjQuMjY5LTM4Ljg3LTQ1LjQ4NS0yOS4wMTYtMzQuMzM4IDE1Ljk0OC03Ni40NTQgMzEuODU0LTExNi45NSAzMS44NTR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRmxhZyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdpbmZvLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA1YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhSW5mb0NpcmNsZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdtYXAtbWFya2VyLWFsdCc7XG52YXIgd2lkdGggPSAzODQ7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjNjNSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYU1hcE1hcmtlckFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwZW5jaWwtYWx0JztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMzAzJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDk3LjkgMTQyLjFsLTQ2LjEgNDYuMWMtNC43IDQuNy0xMi4zIDQuNy0xNyAwbC0xMTEtMTExYy00LjctNC43LTQuNy0xMi4zIDAtMTdsNDYuMS00Ni4xYzE4LjctMTguNyA0OS4xLTE4LjcgNjcuOSAwbDYwLjEgNjAuMWMxOC44IDE4LjcgMTguOCA0OS4xIDAgNjcuOXpNMjg0LjIgOTkuOEwyMS42IDM2Mi40LjQgNDgzLjljLTIuOSAxNi40IDExLjQgMzAuNiAyNy44IDI3LjhsMTIxLjUtMjEuMyAyNjIuNi0yNjIuNmM0LjctNC43IDQuNy0xMi4zIDAtMTdsLTExMS0xMTFjLTQuOC00LjctMTIuNC00LjctMTcuMSAwek0xMjQuMSAzMzkuOWMtNS41LTUuNS01LjUtMTQuMyAwLTE5LjhsMTU0LTE1NGM1LjUtNS41IDE0LjMtNS41IDE5LjggMHM1LjUgMTQuMyAwIDE5LjhsLTE1NCAxNTRjLTUuNSA1LjUtMTQuMyA1LjUtMTkuOCAwek04OCA0MjRoNDh2MzYuM2wtNjQuNSAxMS4zLTMxLjEtMzEuMUw1MS43IDM3Nkg4OHY0OHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQZW5jaWxBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAncGx1cyc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA2Nyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQxNiAyMDhIMjcyVjY0YzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjE0NEgzMmMtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDE0NHYxNDRjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjMwNGgxNDRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFQbHVzID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3F1ZXN0aW9uLWNpcmNsZSc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA1OSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTUwNCAyNTZjMCAxMzYuOTk3LTExMS4wNDMgMjQ4LTI0OCAyNDhTOCAzOTIuOTk3IDggMjU2QzggMTE5LjA4MyAxMTkuMDQzIDggMjU2IDhzMjQ4IDExMS4wODMgMjQ4IDI0OHpNMjYyLjY1NSA5MGMtNTQuNDk3IDAtODkuMjU1IDIyLjk1Ny0xMTYuNTQ5IDYzLjc1OC0zLjUzNiA1LjI4Ni0yLjM1MyAxMi40MTUgMi43MTUgMTYuMjU4bDM0LjY5OSAyNi4zMWM1LjIwNSAzLjk0NyAxMi42MjEgMy4wMDggMTYuNjY1LTIuMTIyIDE3Ljg2NC0yMi42NTggMzAuMTEzLTM1Ljc5NyA1Ny4zMDMtMzUuNzk3IDIwLjQyOSAwIDQ1LjY5OCAxMy4xNDggNDUuNjk4IDMyLjk1OCAwIDE0Ljk3Ni0xMi4zNjMgMjIuNjY3LTMyLjUzNCAzMy45NzZDMjQ3LjEyOCAyMzguNTI4IDIxNiAyNTQuOTQxIDIxNiAyOTZ2NGMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDU2YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTEuMzMzYzAtMjguNDYyIDgzLjE4Ni0yOS42NDcgODMuMTg2LTEwNi42NjcgMC01OC4wMDItNjAuMTY1LTEwMi0xMTYuNTMxLTEwMnpNMjU2IDMzOGMtMjUuMzY1IDAtNDYgMjAuNjM1LTQ2IDQ2IDAgMjUuMzY0IDIwLjYzNSA0NiA0NiA0NnM0Ni0yMC42MzYgNDYtNDZjMC0yNS4zNjUtMjAuNjM1LTQ2LTQ2LTQ2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVF1ZXN0aW9uQ2lyY2xlID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3JlcGx5LWFsbCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjEyMic7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTEzNi4zMDkgMTg5LjgzNkwzMTIuMzEzIDM3Ljg1MUMzMjcuNzIgMjQuNTQ2IDM1MiAzNS4zNDggMzUyIDU2LjAxNXY4Mi43NjNjMTI5LjE4MiAxMC4yMzEgMjI0IDUyLjIxMiAyMjQgMTgzLjU0OCAwIDYxLjQ0MS0zOS41ODIgMTIyLjMwOS04My4zMzMgMTU0LjEzMi0xMy42NTMgOS45MzEtMzMuMTExLTIuNTMzLTI4LjA3Ny0xOC42MzEgMzguNTEyLTEyMy4xNjItMy45MjItMTY5LjQ4Mi0xMTIuNTktMTgyLjAxNXY4NC4xNzVjMCAyMC43MDEtMjQuMyAzMS40NTMtMzkuNjg3IDE4LjE2NEwxMzYuMzA5IDIyNi4xNjRjLTExLjA3MS05LjU2MS0xMS4wODYtMjYuNzUzIDAtMzYuMzI4em0tMTI4IDM2LjMyOEwxODQuMzEzIDM3OC4xNUMxOTkuNyAzOTEuNDM5IDIyNCAzODAuNjg3IDIyNCAzNTkuOTg2di0xNS44MThsLTEwOC42MDYtOTMuNzg1QTU1Ljk2IDU1Ljk2IDAgMCAxIDk2IDIwNy45OThhNTUuOTUzIDU1Ljk1MyAwIDAgMSAxOS4zOTMtNDIuMzhMMjI0IDcxLjgzMlY1Ni4wMTVjMC0yMC42NjctMjQuMjgtMzEuNDY5LTM5LjY4Ny0xOC4xNjRMOC4zMDkgMTg5LjgzNmMtMTEuMDg2IDkuNTc1LTExLjA3MSAyNi43NjcgMCAzNi4zMjh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhUmVwbHlBbGwgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2VhcmNoJztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDAyJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTZWFyY2ggPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2hvcHBpbmctYmFnJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMjkwJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMzUyIDE2MHYtMzJDMzUyIDU3LjQyIDI5NC41NzkgMCAyMjQgMCAxNTMuNDIgMCA5NiA1Ny40MiA5NiAxMjh2MzJIMHYyNzJjMCA0NC4xODMgMzUuODE3IDgwIDgwIDgwaDI4OGM0NC4xODMgMCA4MC0zNS44MTcgODAtODBWMTYwaC05NnptLTE5Mi0zMmMwLTM1LjI5IDI4LjcxLTY0IDY0LTY0czY0IDI4LjcxIDY0IDY0djMySDE2MHYtMzJ6bTE2MCAxMjBjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNHMxMC43NDUtMjQgMjQtMjQgMjQgMTAuNzQ1IDI0IDI0LTEwLjc0NSAyNC0yNCAyNHptLTE5MiAwYy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRzMTAuNzQ1LTI0IDI0LTI0IDI0IDEwLjc0NSAyNCAyNC0xMC43NDUgMjQtMjQgMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2hvcHBpbmdCYWcgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2h1dHRsZS12YW4nO1xudmFyIHdpZHRoID0gNjQwO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2Y1YjYnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ002MjguODggMjEwLjY1TDQ5NC4zOSA0OS4yN0E0OC4wMSA0OC4wMSAwIDAgMCA0NTcuNTIgMzJIMzJDMTQuMzMgMzIgMCA0Ni4zMyAwIDY0djI4OGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZoMTI4YzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMlYyNDEuMzhjMC0xMS4yMy0zLjk0LTIyLjEtMTEuMTItMzAuNzN6TTY0IDE5MlY5Nmg5NnY5Nkg2NHptOTYgMjQwYy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4czIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4LTIxLjQ5IDQ4LTQ4IDQ4em0xNjAtMjQwaC05NlY5Nmg5NnY5NnptMTYwIDI0MGMtMjYuNTEgMC00OC0yMS40OS00OC00OHMyMS40OS00OCA0OC00OCA0OCAyMS40OSA0OCA0OC0yMS40OSA0OC00OCA0OHptLTk2LTI0MFY5Nmg2Ni4wMmw4MCA5NkgzODR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2h1dHRsZVZhbiA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzdGFyJztcbnZhciB3aWR0aCA9IDU3NjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDA1JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3RhciA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzeW5jLWFsdCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjJmMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM3MC43MiAxMzMuMjhDMzM5LjQ1OCAxMDQuMDA4IDI5OC44ODggODcuOTYyIDI1NS44NDggODhjLTc3LjQ1OC4wNjgtMTQ0LjMyOCA1My4xNzgtMTYyLjc5MSAxMjYuODUtMS4zNDQgNS4zNjMtNi4xMjIgOS4xNS0xMS42NTEgOS4xNUgyNC4xMDNjLTcuNDk4IDAtMTMuMTk0LTYuODA3LTExLjgwNy0xNC4xNzZDMzMuOTMzIDk0LjkyNCAxMzQuODEzIDggMjU2IDhjNjYuNDQ4IDAgMTI2Ljc5MSAyNi4xMzYgMTcxLjMxNSA2OC42ODVMNDYzLjAzIDQwLjk3QzQ3OC4xNDkgMjUuODUxIDUwNCAzNi41NTkgNTA0IDU3Ljk0MVYxOTJjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDM0NS45NDFjLTIxLjM4MiAwLTMyLjA5LTI1Ljg1MS0xNi45NzEtNDAuOTcxbDQxLjc1LTQxLjc0OXpNMzIgMjk2aDEzNC4wNTljMjEuMzgyIDAgMzIuMDkgMjUuODUxIDE2Ljk3MSA0MC45NzFsLTQxLjc1IDQxLjc1YzMxLjI2MiAyOS4yNzMgNzEuODM1IDQ1LjMxOSAxMTQuODc2IDQ1LjI4IDc3LjQxOC0uMDcgMTQ0LjMxNS01My4xNDQgMTYyLjc4Ny0xMjYuODQ5IDEuMzQ0LTUuMzYzIDYuMTIyLTkuMTUgMTEuNjUxLTkuMTVoNTcuMzA0YzcuNDk4IDAgMTMuMTk0IDYuODA3IDExLjgwNyAxNC4xNzZDNDc4LjA2NyA0MTcuMDc2IDM3Ny4xODcgNTA0IDI1NiA1MDRjLTY2LjQ0OCAwLTEyNi43OTEtMjYuMTM2LTE3MS4zMTUtNjguNjg1TDQ4Ljk3IDQ3MS4wM0MzMy44NTEgNDg2LjE0OSA4IDQ3NS40NDEgOCA0NTQuMDU5VjMyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3luY0FsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0aW1lcyc7XG52YXIgd2lkdGggPSAzNTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRpbWVzID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICh1dGlscy5pc0Jsb2IocmVxdWVzdERhdGEpIHx8IHV0aWxzLmlzRmlsZShyZXF1ZXN0RGF0YSkpICYmXG4gICAgICByZXF1ZXN0RGF0YS50eXBlXG4gICAgKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiLyohXG4gICogTmF0aXZlIEphdmFTY3JpcHQgZm9yIEJvb3RzdHJhcCB2My4wLjEwIChodHRwczovL3RoZWRucC5naXRodWIuaW8vYm9vdHN0cmFwLm5hdGl2ZS8pXG4gICogQ29weXJpZ2h0IDIwMTUtMjAyMCDCqSBkbnBfdGhlbWVcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90aGVkbnAvYm9vdHN0cmFwLm5hdGl2ZS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CU04gPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uJyBpbiBkb2N1bWVudC5oZWFkLnN0eWxlID8gJ3dlYmtpdFRyYW5zaXRpb25FbmQnIDogJ3RyYW5zaXRpb25lbmQnO1xuXG4gIHZhciBzdXBwb3J0VHJhbnNpdGlvbiA9ICd3ZWJraXRUcmFuc2l0aW9uJyBpbiBkb2N1bWVudC5oZWFkLnN0eWxlIHx8ICd0cmFuc2l0aW9uJyBpbiBkb2N1bWVudC5oZWFkLnN0eWxlO1xuXG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSAnd2Via2l0VHJhbnNpdGlvbicgaW4gZG9jdW1lbnQuaGVhZC5zdHlsZSA/ICd3ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24nIDogJ3RyYW5zaXRpb25EdXJhdGlvbic7XG5cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zaXRpb25EdXJhdGlvbihlbGVtZW50KSB7XG4gICAgdmFyIGR1cmF0aW9uID0gc3VwcG9ydFRyYW5zaXRpb24gPyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbdHJhbnNpdGlvbkR1cmF0aW9uXSkgOiAwO1xuICAgIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oZHVyYXRpb24pID8gZHVyYXRpb24gKiAxMDAwIDogMDtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBlbXVsYXRlVHJhbnNpdGlvbkVuZChlbGVtZW50LGhhbmRsZXIpe1xuICAgIHZhciBjYWxsZWQgPSAwLCBkdXJhdGlvbiA9IGdldEVsZW1lbnRUcmFuc2l0aW9uRHVyYXRpb24oZWxlbWVudCk7XG4gICAgZHVyYXRpb24gPyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZFdyYXBwZXIoZSl7XG4gICAgICAgICAgICAgICAgIWNhbGxlZCAmJiBoYW5kbGVyKGUpLCBjYWxsZWQgPSAxO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0cmFuc2l0aW9uRW5kV3JhcHBlcik7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgOiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAhY2FsbGVkICYmIGhhbmRsZXIoKSwgY2FsbGVkID0gMTsgfSwgMTcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVlcnlFbGVtZW50KHNlbGVjdG9yLCBwYXJlbnQpIHtcbiAgICB2YXIgbG9va1VwID0gcGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBwYXJlbnQgOiBkb2N1bWVudDtcbiAgICByZXR1cm4gc2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50ID8gc2VsZWN0b3IgOiBsb29rVXAucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICBmdW5jdGlvbiBib290c3RyYXBDdXN0b21FdmVudChldmVudE5hbWUsIGNvbXBvbmVudE5hbWUsIHJlbGF0ZWQpIHtcbiAgICB2YXIgT3JpZ2luYWxDdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCggZXZlbnROYW1lICsgJy5icy4nICsgY29tcG9uZW50TmFtZSwge2NhbmNlbGFibGU6IHRydWV9KTtcbiAgICBPcmlnaW5hbEN1c3RvbUV2ZW50LnJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkO1xuICAgIHJldHVybiBPcmlnaW5hbEN1c3RvbUV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2hDdXN0b21FdmVudChjdXN0b21FdmVudCl7XG4gICAgdGhpcyAmJiB0aGlzLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gQWxlcnQoZWxlbWVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFsZXJ0LFxuICAgICAgY2xvc2VDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdjbG9zZScsJ2FsZXJ0JyksXG4gICAgICBjbG9zZWRDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdjbG9zZWQnLCdhbGVydCcpO1xuICAgIGZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKCkge1xuICAgICAgYWxlcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChhbGVydCx0cmFuc2l0aW9uRW5kSGFuZGxlcikgOiB0cmFuc2l0aW9uRW5kSGFuZGxlcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFdmVudHMoYWN0aW9uKXtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIGVsZW1lbnRbYWN0aW9uXSgnY2xpY2snLGNsaWNrSGFuZGxlcixmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICBhbGVydCA9IGUgJiYgZS50YXJnZXQuY2xvc2VzdChcIi5hbGVydFwiKTtcbiAgICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsYWxlcnQpO1xuICAgICAgZWxlbWVudCAmJiBhbGVydCAmJiAoZWxlbWVudCA9PT0gZS50YXJnZXQgfHwgZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpICYmIHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEhhbmRsZXIoKSB7XG4gICAgICB0b2dnbGVFdmVudHMoKTtcbiAgICAgIGFsZXJ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxlcnQpO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGFsZXJ0LGNsb3NlZEN1c3RvbUV2ZW50KTtcbiAgICB9XG4gICAgc2VsZi5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICggYWxlcnQgJiYgZWxlbWVudCAmJiBhbGVydC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSApIHtcbiAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGFsZXJ0LGNsb3NlQ3VzdG9tRXZlbnQpO1xuICAgICAgICBpZiAoIGNsb3NlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgIHNlbGYuZGlzcG9zZSgpO1xuICAgICAgICBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHRyaWdnZXJIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzZWxmLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVFdmVudHMoKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LkFsZXJ0O1xuICAgIH07XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgICBhbGVydCA9IGVsZW1lbnQuY2xvc2VzdCgnLmFsZXJ0Jyk7XG4gICAgZWxlbWVudC5BbGVydCAmJiBlbGVtZW50LkFsZXJ0LmRpc3Bvc2UoKTtcbiAgICBpZiAoICFlbGVtZW50LkFsZXJ0ICkge1xuICAgICAgdG9nZ2xlRXZlbnRzKDEpO1xuICAgIH1cbiAgICBzZWxmLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGVsZW1lbnQuQWxlcnQgPSBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGxhYmVscyxcbiAgICAgICAgY2hhbmdlQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnY2hhbmdlJywgJ2J1dHRvbicpO1xuICAgIGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICB2YXIgaW5wdXQsXG4gICAgICAgICAgbGFiZWwgPSBlLnRhcmdldC50YWdOYW1lID09PSAnTEFCRUwnID8gZS50YXJnZXRcbiAgICAgICAgICAgICAgICA6IGUudGFyZ2V0LmNsb3Nlc3QoJ0xBQkVMJykgPyBlLnRhcmdldC5jbG9zZXN0KCdMQUJFTCcpIDogbnVsbDtcbiAgICAgIGlucHV0ID0gbGFiZWwgJiYgbGFiZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lOUFVUJylbMF07XG4gICAgICBpZiAoICFpbnB1dCApIHsgcmV0dXJuOyB9XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoaW5wdXQsIGNoYW5nZUN1c3RvbUV2ZW50KTtcbiAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBjaGFuZ2VDdXN0b21FdmVudCk7XG4gICAgICBpZiAoIGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgKSB7XG4gICAgICAgIGlmICggY2hhbmdlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICggIWlucHV0LmNoZWNrZWQgKSB7XG4gICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgaW5wdXQuZ2V0QXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywnY2hlY2tlZCcpO1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGlucHV0LmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQudG9nZ2xlZCkge1xuICAgICAgICAgIGVsZW1lbnQudG9nZ2xlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICggaW5wdXQudHlwZSA9PT0gJ3JhZGlvJyAmJiAhZWxlbWVudC50b2dnbGVkICkge1xuICAgICAgICBpZiAoIGNoYW5nZUN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoICFpbnB1dC5jaGVja2VkIHx8IChlLnNjcmVlblggPT09IDAgJiYgZS5zY3JlZW5ZID09IDApICkge1xuICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywnY2hlY2tlZCcpO1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGVsZW1lbnQudG9nZ2xlZCA9IHRydWU7XG4gICAgICAgICAgQXJyYXkuZnJvbShsYWJlbHMpLm1hcChmdW5jdGlvbiAob3RoZXJMYWJlbCl7XG4gICAgICAgICAgICB2YXIgb3RoZXJJbnB1dCA9IG90aGVyTGFiZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lOUFVUJylbMF07XG4gICAgICAgICAgICBpZiAoIG90aGVyTGFiZWwgIT09IGxhYmVsICYmIG90aGVyTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSApICB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChvdGhlcklucHV0LCBjaGFuZ2VDdXN0b21FdmVudCk7XG4gICAgICAgICAgICAgIG90aGVyTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIG90aGVySW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgIG90aGVySW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7IGVsZW1lbnQudG9nZ2xlZCA9IGZhbHNlOyB9LCA1MCApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBrZXlIYW5kbGVyKGUpIHtcbiAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgIGtleSA9PT0gMzIgJiYgZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdG9nZ2xlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmV2ZW50U2Nyb2xsKGUpIHtcbiAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgIGtleSA9PT0gMzIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb2N1c1RvZ2dsZShlKSB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyApIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGUudHlwZSA9PT0gJ2ZvY3VzaW4nID8gJ2FkZCcgOiAncmVtb3ZlJztcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmJ0bicpLmNsYXNzTGlzdFthY3Rpb25dKCdmb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFdmVudHMoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24gPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgICBlbGVtZW50W2FjdGlvbl0oJ2NsaWNrJyx0b2dnbGUsZmFsc2UgKTtcbiAgICAgIGVsZW1lbnRbYWN0aW9uXSgna2V5dXAnLGtleUhhbmRsZXIsZmFsc2UpLCBlbGVtZW50W2FjdGlvbl0oJ2tleWRvd24nLHByZXZlbnRTY3JvbGwsZmFsc2UpO1xuICAgICAgZWxlbWVudFthY3Rpb25dKCdmb2N1c2luJyxmb2N1c1RvZ2dsZSxmYWxzZSksIGVsZW1lbnRbYWN0aW9uXSgnZm9jdXNvdXQnLGZvY3VzVG9nZ2xlLGZhbHNlKTtcbiAgICB9XG4gICAgc2VsZi5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlRXZlbnRzKCk7XG4gICAgICBkZWxldGUgZWxlbWVudC5CdXR0b247XG4gICAgfTtcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuQnV0dG9uICYmIGVsZW1lbnQuQnV0dG9uLmRpc3Bvc2UoKTtcbiAgICBsYWJlbHMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bicpO1xuICAgIGlmICghbGFiZWxzLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgICBpZiAoICFlbGVtZW50LkJ1dHRvbiApIHtcbiAgICAgIHRvZ2dsZUV2ZW50cygxKTtcbiAgICB9XG4gICAgZWxlbWVudC50b2dnbGVkID0gZmFsc2U7XG4gICAgZWxlbWVudC5CdXR0b24gPSBzZWxmO1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5tYXAoZnVuY3Rpb24gKGJ0bil7XG4gICAgICAhYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJylcbiAgICAgICAgJiYgcXVlcnlFbGVtZW50KCdpbnB1dDpjaGVja2VkJyxidG4pXG4gICAgICAgICYmIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXG4gICAgICAgICYmICFxdWVyeUVsZW1lbnQoJ2lucHV0OmNoZWNrZWQnLGJ0bilcbiAgICAgICAgJiYgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIG1vdXNlSG92ZXJFdmVudHMgPSAoJ29ubW91c2VsZWF2ZScgaW4gZG9jdW1lbnQpID8gWyAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ10gOiBbICdtb3VzZW92ZXInLCAnbW91c2VvdXQnIF07XG5cbiAgdmFyIHN1cHBvcnRQYXNzaXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiB3cmFwKCl7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB3cmFwLCBvcHRzKTtcbiAgICAgIH0sIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSkoKTtcblxuICB2YXIgcGFzc2l2ZUhhbmRsZXIgPSBzdXBwb3J0UGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50SW5TY3JvbGxSYW5nZShlbGVtZW50KSB7XG4gICAgdmFyIGJjciA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgcmV0dXJuIGJjci50b3AgPD0gdmlld3BvcnRIZWlnaHQgJiYgYmNyLmJvdHRvbSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWwgKGVsZW1lbnQsb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIHZhcnMsIG9wcyxcbiAgICAgIHNsaWRlQ3VzdG9tRXZlbnQsIHNsaWRDdXN0b21FdmVudCxcbiAgICAgIHNsaWRlcywgbGVmdEFycm93LCByaWdodEFycm93LCBpbmRpY2F0b3IsIGluZGljYXRvcnM7XG4gICAgZnVuY3Rpb24gcGF1c2VIYW5kbGVyKCkge1xuICAgICAgaWYgKCBvcHMuaW50ZXJ2YWwgIT09ZmFsc2UgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWQnKSApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcbiAgICAgICAgIXZhcnMuaXNTbGlkaW5nICYmICggY2xlYXJJbnRlcnZhbCh2YXJzLnRpbWVyKSwgdmFycy50aW1lciA9IG51bGwgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdW1lSGFuZGxlcigpIHtcbiAgICAgIGlmICggb3BzLmludGVydmFsICE9PSBmYWxzZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGF1c2VkJykgKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XG4gICAgICAgICF2YXJzLmlzU2xpZGluZyAmJiAoIGNsZWFySW50ZXJ2YWwodmFycy50aW1lciksIHZhcnMudGltZXIgPSBudWxsICk7XG4gICAgICAgICF2YXJzLmlzU2xpZGluZyAmJiBzZWxmLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZGljYXRvckhhbmRsZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHZhcnMuaXNTbGlkaW5nKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoIGV2ZW50VGFyZ2V0ICYmICFldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmIGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpICkge1xuICAgICAgICB2YXJzLmluZGV4ID0gcGFyc2VJbnQoIGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpKTtcbiAgICAgIH0gZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgc2VsZi5zbGlkZVRvKCB2YXJzLmluZGV4ICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRyb2xzSGFuZGxlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodmFycy5pc1NsaWRpbmcpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgZXZlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgaWYgKCBldmVudFRhcmdldCA9PT0gcmlnaHRBcnJvdyApIHtcbiAgICAgICAgdmFycy5pbmRleCsrO1xuICAgICAgfSBlbHNlIGlmICggZXZlbnRUYXJnZXQgPT09IGxlZnRBcnJvdyApIHtcbiAgICAgICAgdmFycy5pbmRleC0tO1xuICAgICAgfVxuICAgICAgc2VsZi5zbGlkZVRvKCB2YXJzLmluZGV4ICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGtleUhhbmRsZXIocmVmKSB7XG4gICAgICB2YXIgd2hpY2ggPSByZWYud2hpY2g7XG4gICAgICBpZiAodmFycy5pc1NsaWRpbmcpIHsgcmV0dXJuOyB9XG4gICAgICBzd2l0Y2ggKHdoaWNoKSB7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgdmFycy5pbmRleCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIHZhcnMuaW5kZXgtLTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5zbGlkZVRvKCB2YXJzLmluZGV4ICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhhY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIGlmICggb3BzLnBhdXNlICYmIG9wcy5pbnRlcnZhbCApIHtcbiAgICAgICAgZWxlbWVudFthY3Rpb25dKCBtb3VzZUhvdmVyRXZlbnRzWzBdLCBwYXVzZUhhbmRsZXIsIGZhbHNlICk7XG4gICAgICAgIGVsZW1lbnRbYWN0aW9uXSggbW91c2VIb3ZlckV2ZW50c1sxXSwgcmVzdW1lSGFuZGxlciwgZmFsc2UgKTtcbiAgICAgICAgZWxlbWVudFthY3Rpb25dKCAndG91Y2hzdGFydCcsIHBhdXNlSGFuZGxlciwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICAgICAgZWxlbWVudFthY3Rpb25dKCAndG91Y2hlbmQnLCByZXN1bWVIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgfVxuICAgICAgb3BzLnRvdWNoICYmIHNsaWRlcy5sZW5ndGggPiAxICYmIGVsZW1lbnRbYWN0aW9uXSggJ3RvdWNoc3RhcnQnLCB0b3VjaERvd25IYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgcmlnaHRBcnJvdyAmJiByaWdodEFycm93W2FjdGlvbl0oICdjbGljaycsIGNvbnRyb2xzSGFuZGxlcixmYWxzZSApO1xuICAgICAgbGVmdEFycm93ICYmIGxlZnRBcnJvd1thY3Rpb25dKCAnY2xpY2snLCBjb250cm9sc0hhbmRsZXIsZmFsc2UgKTtcbiAgICAgIGluZGljYXRvciAmJiBpbmRpY2F0b3JbYWN0aW9uXSggJ2NsaWNrJywgaW5kaWNhdG9ySGFuZGxlcixmYWxzZSApO1xuICAgICAgb3BzLmtleWJvYXJkICYmIHdpbmRvd1thY3Rpb25dKCAna2V5ZG93bicsIGtleUhhbmRsZXIsZmFsc2UgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlVG91Y2hFdmVudHMoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24gPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgICBlbGVtZW50W2FjdGlvbl0oICd0b3VjaG1vdmUnLCB0b3VjaE1vdmVIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgZWxlbWVudFthY3Rpb25dKCAndG91Y2hlbmQnLCB0b3VjaEVuZEhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoRG93bkhhbmRsZXIoZSkge1xuICAgICAgaWYgKCB2YXJzLmlzVG91Y2ggKSB7IHJldHVybjsgfVxuICAgICAgdmFycy50b3VjaFBvc2l0aW9uLnN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBpZiAoIGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpICkge1xuICAgICAgICB2YXJzLmlzVG91Y2ggPSB0cnVlO1xuICAgICAgICB0b2dnbGVUb3VjaEV2ZW50cygxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihlKSB7XG4gICAgICBpZiAoICF2YXJzLmlzVG91Y2ggKSB7IGUucHJldmVudERlZmF1bHQoKTsgcmV0dXJuOyB9XG4gICAgICB2YXJzLnRvdWNoUG9zaXRpb24uY3VycmVudFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgaWYgKCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlciAoZSkge1xuICAgICAgaWYgKCAhdmFycy5pc1RvdWNoIHx8IHZhcnMuaXNTbGlkaW5nICkgeyByZXR1cm4gfVxuICAgICAgdmFycy50b3VjaFBvc2l0aW9uLmVuZFggPSB2YXJzLnRvdWNoUG9zaXRpb24uY3VycmVudFggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIGlmICggdmFycy5pc1RvdWNoICkge1xuICAgICAgICBpZiAoICghZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgfHwgIWVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSApXG4gICAgICAgICAgICAmJiBNYXRoLmFicyh2YXJzLnRvdWNoUG9zaXRpb24uc3RhcnRYIC0gdmFycy50b3VjaFBvc2l0aW9uLmVuZFgpIDwgNzUgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICggdmFycy50b3VjaFBvc2l0aW9uLmN1cnJlbnRYIDwgdmFycy50b3VjaFBvc2l0aW9uLnN0YXJ0WCApIHtcbiAgICAgICAgICAgIHZhcnMuaW5kZXgrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKCB2YXJzLnRvdWNoUG9zaXRpb24uY3VycmVudFggPiB2YXJzLnRvdWNoUG9zaXRpb24uc3RhcnRYICkge1xuICAgICAgICAgICAgdmFycy5pbmRleC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXJzLmlzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLnNsaWRlVG8odmFycy5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlVG91Y2hFdmVudHMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUGFnZShwYWdlSW5kZXgpIHtcbiAgICAgIEFycmF5LmZyb20oaW5kaWNhdG9ycykubWFwKGZ1bmN0aW9uICh4KXt4LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO30pO1xuICAgICAgaW5kaWNhdG9yc1twYWdlSW5kZXhdICYmIGluZGljYXRvcnNbcGFnZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEhhbmRsZXIoZSl7XG4gICAgICBpZiAodmFycy50b3VjaFBvc2l0aW9uKXtcbiAgICAgICAgdmFyIG5leHQgPSB2YXJzLmluZGV4LFxuICAgICAgICAgICAgdGltZW91dCA9IGUgJiYgZS50YXJnZXQgIT09IHNsaWRlc1tuZXh0XSA/IGUuZWxhcHNlZFRpbWUqMTAwMCsxMDAgOiAyMCxcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBzZWxmLmdldEFjdGl2ZUluZGV4KCksXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IHZhcnMuZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnbmV4dCcgOiAncHJldic7XG4gICAgICAgIHZhcnMuaXNTbGlkaW5nICYmIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh2YXJzLnRvdWNoUG9zaXRpb24pe1xuICAgICAgICAgICAgdmFycy5pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNsaWRlc1tuZXh0XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNsaWRlc1thY3RpdmVJdGVtXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNsaWRlc1tuZXh0XS5jbGFzc0xpc3QucmVtb3ZlKChcImNhcm91c2VsLWl0ZW0tXCIgKyBvcmllbnRhdGlvbikpO1xuICAgICAgICAgICAgc2xpZGVzW25leHRdLmNsYXNzTGlzdC5yZW1vdmUoKFwiY2Fyb3VzZWwtaXRlbS1cIiArICh2YXJzLmRpcmVjdGlvbikpKTtcbiAgICAgICAgICAgIHNsaWRlc1thY3RpdmVJdGVtXS5jbGFzc0xpc3QucmVtb3ZlKChcImNhcm91c2VsLWl0ZW0tXCIgKyAodmFycy5kaXJlY3Rpb24pKSk7XG4gICAgICAgICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZEN1c3RvbUV2ZW50KTtcbiAgICAgICAgICAgIGlmICggIWRvY3VtZW50LmhpZGRlbiAmJiBvcHMuaW50ZXJ2YWwgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWQnKSApIHtcbiAgICAgICAgICAgICAgc2VsZi5jeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGYuY3ljbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodmFycy50aW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHZhcnMudGltZXIpO1xuICAgICAgICB2YXJzLnRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhcnMudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSB2YXJzLmluZGV4IHx8IHNlbGYuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgICAgaXNFbGVtZW50SW5TY3JvbGxSYW5nZShlbGVtZW50KSAmJiAoaWR4KyssIHNlbGYuc2xpZGVUbyggaWR4ICkgKTtcbiAgICAgIH0sIG9wcy5pbnRlcnZhbCk7XG4gICAgfTtcbiAgICBzZWxmLnNsaWRlVG8gPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgaWYgKHZhcnMuaXNTbGlkaW5nKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBzZWxmLmdldEFjdGl2ZUluZGV4KCksIG9yaWVudGF0aW9uO1xuICAgICAgaWYgKCBhY3RpdmVJdGVtID09PSBuZXh0ICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgICggKGFjdGl2ZUl0ZW0gPCBuZXh0ICkgfHwgKGFjdGl2ZUl0ZW0gPT09IDAgJiYgbmV4dCA9PT0gc2xpZGVzLmxlbmd0aCAtMSApICkge1xuICAgICAgICB2YXJzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgIH0gZWxzZSBpZiAgKCAoYWN0aXZlSXRlbSA+IG5leHQpIHx8IChhY3RpdmVJdGVtID09PSBzbGlkZXMubGVuZ3RoIC0gMSAmJiBuZXh0ID09PSAwICkgKSB7XG4gICAgICAgIHZhcnMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH1cbiAgICAgIGlmICggbmV4dCA8IDAgKSB7IG5leHQgPSBzbGlkZXMubGVuZ3RoIC0gMTsgfVxuICAgICAgZWxzZSBpZiAoIG5leHQgPj0gc2xpZGVzLmxlbmd0aCApeyBuZXh0ID0gMDsgfVxuICAgICAgb3JpZW50YXRpb24gPSB2YXJzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgc2xpZGVDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdzbGlkZScsICdjYXJvdXNlbCcsIHNsaWRlc1tuZXh0XSk7XG4gICAgICBzbGlkQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2xpZCcsICdjYXJvdXNlbCcsIHNsaWRlc1tuZXh0XSk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZGVDdXN0b21FdmVudCk7XG4gICAgICBpZiAoc2xpZGVDdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfVxuICAgICAgdmFycy5pbmRleCA9IG5leHQ7XG4gICAgICB2YXJzLmlzU2xpZGluZyA9IHRydWU7XG4gICAgICBjbGVhckludGVydmFsKHZhcnMudGltZXIpO1xuICAgICAgdmFycy50aW1lciA9IG51bGw7XG4gICAgICBzZXRBY3RpdmVQYWdlKCBuZXh0ICk7XG4gICAgICBpZiAoIGdldEVsZW1lbnRUcmFuc2l0aW9uRHVyYXRpb24oc2xpZGVzW25leHRdKSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUnKSApIHtcbiAgICAgICAgc2xpZGVzW25leHRdLmNsYXNzTGlzdC5hZGQoKFwiY2Fyb3VzZWwtaXRlbS1cIiArIG9yaWVudGF0aW9uKSk7XG4gICAgICAgIHNsaWRlc1tuZXh0XS5vZmZzZXRXaWR0aDtcbiAgICAgICAgc2xpZGVzW25leHRdLmNsYXNzTGlzdC5hZGQoKFwiY2Fyb3VzZWwtaXRlbS1cIiArICh2YXJzLmRpcmVjdGlvbikpKTtcbiAgICAgICAgc2xpZGVzW2FjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5hZGQoKFwiY2Fyb3VzZWwtaXRlbS1cIiArICh2YXJzLmRpcmVjdGlvbikpKTtcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoc2xpZGVzW25leHRdLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNbbmV4dF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNsaWRlc1tuZXh0XS5vZmZzZXRXaWR0aDtcbiAgICAgICAgc2xpZGVzW2FjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXJzLmlzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICggb3BzLmludGVydmFsICYmIGVsZW1lbnQgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWQnKSApIHtcbiAgICAgICAgICAgIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNsaWRDdXN0b21FdmVudCk7XG4gICAgICAgIH0sIDEwMCApO1xuICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5nZXRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmZyb20oc2xpZGVzKS5pbmRleE9mKGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWwtaXRlbSBhY3RpdmUnKVswXSkgfHwgMDsgfTtcbiAgICBzZWxmLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXRlbUNsYXNzZXMgPSBbJ2xlZnQnLCdyaWdodCcsJ3ByZXYnLCduZXh0J107XG4gICAgICBBcnJheS5mcm9tKHNsaWRlcykubWFwKGZ1bmN0aW9uIChzbGlkZSxpZHgpIHtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiBzZXRBY3RpdmVQYWdlKCBpZHggKTtcbiAgICAgICAgaXRlbUNsYXNzZXMubWFwKGZ1bmN0aW9uIChjbHMpIHsgcmV0dXJuIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoKFwiY2Fyb3VzZWwtaXRlbS1cIiArIGNscykpOyB9KTtcbiAgICAgIH0pO1xuICAgICAgY2xlYXJJbnRlcnZhbCh2YXJzLnRpbWVyKTtcbiAgICAgIHRvZ2dsZUV2ZW50cygpO1xuICAgICAgdmFycyA9IHt9O1xuICAgICAgb3BzID0ge307XG4gICAgICBkZWxldGUgZWxlbWVudC5DYXJvdXNlbDtcbiAgICB9O1xuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgICBlbGVtZW50LkNhcm91c2VsICYmIGVsZW1lbnQuQ2Fyb3VzZWwuZGlzcG9zZSgpO1xuICAgIHNsaWRlcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWwtaXRlbScpO1xuICAgIGxlZnRBcnJvdyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWwtY29udHJvbC1wcmV2JylbMF07XG4gICAgcmlnaHRBcnJvdyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWwtY29udHJvbC1uZXh0JylbMF07XG4gICAgaW5kaWNhdG9yID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbC1pbmRpY2F0b3JzJylbMF07XG4gICAgaW5kaWNhdG9ycyA9IGluZGljYXRvciAmJiBpbmRpY2F0b3IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiTElcIiApIHx8IFtdO1xuICAgIGlmIChzbGlkZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gfVxuICAgIHZhclxuICAgICAgaW50ZXJ2YWxBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLFxuICAgICAgaW50ZXJ2YWxEYXRhID0gaW50ZXJ2YWxBdHRyaWJ1dGUgPT09ICdmYWxzZScgPyAwIDogcGFyc2VJbnQoaW50ZXJ2YWxBdHRyaWJ1dGUpLFxuICAgICAgdG91Y2hEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG91Y2gnKSA9PT0gJ2ZhbHNlJyA/IDAgOiAxLFxuICAgICAgcGF1c2VEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF1c2UnKSA9PT0gJ2hvdmVyJyB8fCBmYWxzZSxcbiAgICAgIGtleWJvYXJkRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleWJvYXJkJykgPT09ICd0cnVlJyB8fCBmYWxzZSxcbiAgICAgIGludGVydmFsT3B0aW9uID0gb3B0aW9ucy5pbnRlcnZhbCxcbiAgICAgIHRvdWNoT3B0aW9uID0gb3B0aW9ucy50b3VjaDtcbiAgICBvcHMgPSB7fTtcbiAgICBvcHMua2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkID09PSB0cnVlIHx8IGtleWJvYXJkRGF0YTtcbiAgICBvcHMucGF1c2UgPSAob3B0aW9ucy5wYXVzZSA9PT0gJ2hvdmVyJyB8fCBwYXVzZURhdGEpID8gJ2hvdmVyJyA6IGZhbHNlO1xuICAgIG9wcy50b3VjaCA9IHRvdWNoT3B0aW9uIHx8IHRvdWNoRGF0YTtcbiAgICBvcHMuaW50ZXJ2YWwgPSB0eXBlb2YgaW50ZXJ2YWxPcHRpb24gPT09ICdudW1iZXInID8gaW50ZXJ2YWxPcHRpb25cbiAgICAgICAgICAgICAgICA6IGludGVydmFsT3B0aW9uID09PSBmYWxzZSB8fCBpbnRlcnZhbERhdGEgPT09IDAgfHwgaW50ZXJ2YWxEYXRhID09PSBmYWxzZSA/IDBcbiAgICAgICAgICAgICAgICA6IGlzTmFOKGludGVydmFsRGF0YSkgPyA1MDAwXG4gICAgICAgICAgICAgICAgOiBpbnRlcnZhbERhdGE7XG4gICAgaWYgKHNlbGYuZ2V0QWN0aXZlSW5kZXgoKTwwKSB7XG4gICAgICBzbGlkZXMubGVuZ3RoICYmIHNsaWRlc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGluZGljYXRvcnMubGVuZ3RoICYmIHNldEFjdGl2ZVBhZ2UoMCk7XG4gICAgfVxuICAgIHZhcnMgPSB7fTtcbiAgICB2YXJzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICB2YXJzLmluZGV4ID0gMDtcbiAgICB2YXJzLnRpbWVyID0gbnVsbDtcbiAgICB2YXJzLmlzU2xpZGluZyA9IGZhbHNlO1xuICAgIHZhcnMuaXNUb3VjaCA9IGZhbHNlO1xuICAgIHZhcnMudG91Y2hQb3NpdGlvbiA9IHtcbiAgICAgIHN0YXJ0WCA6IDAsXG4gICAgICBjdXJyZW50WCA6IDAsXG4gICAgICBlbmRYIDogMFxuICAgIH07XG4gICAgdG9nZ2xlRXZlbnRzKDEpO1xuICAgIGlmICggb3BzLmludGVydmFsICl7IHNlbGYuY3ljbGUoKTsgfVxuICAgIGVsZW1lbnQuQ2Fyb3VzZWwgPSBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UoZWxlbWVudCxvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhY2NvcmRpb24gPSBudWxsLFxuICAgICAgICBjb2xsYXBzZSA9IG51bGwsXG4gICAgICAgIGFjdGl2ZUNvbGxhcHNlLFxuICAgICAgICBhY3RpdmVFbGVtZW50LFxuICAgICAgICBzaG93Q3VzdG9tRXZlbnQsXG4gICAgICAgIHNob3duQ3VzdG9tRXZlbnQsXG4gICAgICAgIGhpZGVDdXN0b21FdmVudCxcbiAgICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQ7XG4gICAgZnVuY3Rpb24gb3BlbkFjdGlvbihjb2xsYXBzZUVsZW1lbnQsIHRvZ2dsZSkge1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgc2hvd0N1c3RvbUV2ZW50KTtcbiAgICAgIGlmICggc2hvd0N1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgKSB7IHJldHVybjsgfVxuICAgICAgY29sbGFwc2VFbGVtZW50LmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGNvbGxhcHNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaW5nJyk7XG4gICAgICBjb2xsYXBzZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgICAgIGNvbGxhcHNlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoY29sbGFwc2VFbGVtZW50LnNjcm9sbEhlaWdodCkgKyBcInB4XCI7XG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChjb2xsYXBzZUVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50LmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCd0cnVlJyk7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCd0cnVlJyk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzaW5nJyk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIHNob3duQ3VzdG9tRXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlQWN0aW9uKGNvbGxhcHNlRWxlbWVudCwgdG9nZ2xlKSB7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoY29sbGFwc2VFbGVtZW50LCBoaWRlQ3VzdG9tRXZlbnQpO1xuICAgICAgaWYgKCBoaWRlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICBjb2xsYXBzZUVsZW1lbnQuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgY29sbGFwc2VFbGVtZW50LnN0eWxlLmhlaWdodCA9IChjb2xsYXBzZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSArIFwicHhcIjtcbiAgICAgIGNvbGxhcHNlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgICAgY29sbGFwc2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIGNvbGxhcHNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaW5nJyk7XG4gICAgICBjb2xsYXBzZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb2xsYXBzZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChjb2xsYXBzZUVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50LmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgaGlkZGVuQ3VzdG9tRXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbGYudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdBJykge2UucHJldmVudERlZmF1bHQoKTt9XG4gICAgICBpZiAoZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFjb2xsYXBzZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkgeyBzZWxmLnNob3coKTsgfVxuICAgICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICggY29sbGFwc2UuaXNBbmltYXRpbmcgKSB7IHJldHVybjsgfVxuICAgICAgY2xvc2VBY3Rpb24oY29sbGFwc2UsZWxlbWVudCk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIH07XG4gICAgc2VsZi5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCBhY2NvcmRpb24gKSB7XG4gICAgICAgIGFjdGl2ZUNvbGxhcHNlID0gYWNjb3JkaW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xsYXBzZSBzaG93XCIpWzBdO1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlQ29sbGFwc2UgJiYgKHF1ZXJ5RWxlbWVudCgoXCJbZGF0YS10YXJnZXQ9XFxcIiNcIiArIChhY3RpdmVDb2xsYXBzZS5pZCkgKyBcIlxcXCJdXCIpLGFjY29yZGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB8fCBxdWVyeUVsZW1lbnQoKFwiW2hyZWY9XFxcIiNcIiArIChhY3RpdmVDb2xsYXBzZS5pZCkgKyBcIlxcXCJdXCIpLGFjY29yZGlvbikgKTtcbiAgICAgIH1cbiAgICAgIGlmICggIWNvbGxhcHNlLmlzQW5pbWF0aW5nICkge1xuICAgICAgICBpZiAoIGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlQ29sbGFwc2UgIT09IGNvbGxhcHNlICkge1xuICAgICAgICAgIGNsb3NlQWN0aW9uKGFjdGl2ZUNvbGxhcHNlLGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbkFjdGlvbihjb2xsYXBzZSxlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHNlbGYudG9nZ2xlLGZhbHNlKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LkNvbGxhcHNlO1xuICAgIH07XG4gICAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5Db2xsYXBzZSAmJiBlbGVtZW50LkNvbGxhcHNlLmRpc3Bvc2UoKTtcbiAgICAgIHZhciBhY2NvcmRpb25EYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50Jyk7XG4gICAgICBzaG93Q3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvdycsICdjb2xsYXBzZScpO1xuICAgICAgc2hvd25DdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdzaG93bicsICdjb2xsYXBzZScpO1xuICAgICAgaGlkZUN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGUnLCAnY29sbGFwc2UnKTtcbiAgICAgIGhpZGRlbkN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGRlbicsICdjb2xsYXBzZScpO1xuICAgICAgY29sbGFwc2UgPSBxdWVyeUVsZW1lbnQob3B0aW9ucy50YXJnZXQgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICBjb2xsYXBzZS5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgYWNjb3JkaW9uID0gZWxlbWVudC5jbG9zZXN0KG9wdGlvbnMucGFyZW50IHx8IGFjY29yZGlvbkRhdGEpO1xuICAgICAgaWYgKCAhZWxlbWVudC5Db2xsYXBzZSApIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2VsZi50b2dnbGUsZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5Db2xsYXBzZSA9IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb2N1cyAoZWxlbWVudCl7XG4gICAgZWxlbWVudC5mb2N1cyA/IGVsZW1lbnQuZm9jdXMoKSA6IGVsZW1lbnQuc2V0QWN0aXZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LG9wdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgc2hvd0N1c3RvbUV2ZW50LFxuICAgICAgICBzaG93bkN1c3RvbUV2ZW50LFxuICAgICAgICBoaWRlQ3VzdG9tRXZlbnQsXG4gICAgICAgIGhpZGRlbkN1c3RvbUV2ZW50LFxuICAgICAgICByZWxhdGVkVGFyZ2V0ID0gbnVsbCxcbiAgICAgICAgcGFyZW50LCBtZW51LCBtZW51SXRlbXMgPSBbXSxcbiAgICAgICAgcGVyc2lzdDtcbiAgICBmdW5jdGlvbiBwcmV2ZW50RW1wdHlBbmNob3IoYW5jaG9yKSB7XG4gICAgICAoYW5jaG9yLmhyZWYgJiYgYW5jaG9yLmhyZWYuc2xpY2UoLTEpID09PSAnIycgfHwgYW5jaG9yLnBhcmVudE5vZGUgJiYgYW5jaG9yLnBhcmVudE5vZGUuaHJlZlxuICAgICAgICAmJiBhbmNob3IucGFyZW50Tm9kZS5ocmVmLnNsaWNlKC0xKSA9PT0gJyMnKSAmJiB0aGlzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZURpc21pc3MoKSB7XG4gICAgICB2YXIgYWN0aW9uID0gZWxlbWVudC5vcGVuID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICAgICAgZG9jdW1lbnRbYWN0aW9uXSgnY2xpY2snLGRpc21pc3NIYW5kbGVyLGZhbHNlKTtcbiAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ2tleWRvd24nLHByZXZlbnRTY3JvbGwsZmFsc2UpO1xuICAgICAgZG9jdW1lbnRbYWN0aW9uXSgna2V5dXAnLGtleUhhbmRsZXIsZmFsc2UpO1xuICAgICAgZG9jdW1lbnRbYWN0aW9uXSgnZm9jdXMnLGRpc21pc3NIYW5kbGVyLGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzbWlzc0hhbmRsZXIoZSkge1xuICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgICBoYXNEYXRhID0gZXZlbnRUYXJnZXQgJiYgKGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50VGFyZ2V0LnBhcmVudE5vZGUgJiYgZXZlbnRUYXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBldmVudFRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSk7XG4gICAgICBpZiAoIGUudHlwZSA9PT0gJ2ZvY3VzJyAmJiAoZXZlbnRUYXJnZXQgPT09IGVsZW1lbnQgfHwgZXZlbnRUYXJnZXQgPT09IG1lbnUgfHwgbWVudS5jb250YWlucyhldmVudFRhcmdldCkgKSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCAoZXZlbnRUYXJnZXQgPT09IG1lbnUgfHwgbWVudS5jb250YWlucyhldmVudFRhcmdldCkpICYmIChwZXJzaXN0IHx8IGhhc0RhdGEpICkgeyByZXR1cm47IH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZXZlbnRUYXJnZXQgPT09IGVsZW1lbnQgfHwgZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldCkgPyBlbGVtZW50IDogbnVsbDtcbiAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICB9XG4gICAgICBwcmV2ZW50RW1wdHlBbmNob3IuY2FsbChlLGV2ZW50VGFyZ2V0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgc2VsZi5zaG93KCk7XG4gICAgICBwcmV2ZW50RW1wdHlBbmNob3IuY2FsbChlLGUudGFyZ2V0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJldmVudFNjcm9sbChlKSB7XG4gICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgICBpZigga2V5ID09PSAzOCB8fCBrZXkgPT09IDQwICkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICB9XG4gICAgZnVuY3Rpb24ga2V5SGFuZGxlcihlKSB7XG4gICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGUsXG4gICAgICAgICAgYWN0aXZlSXRlbSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgaXNTYW1lRWxlbWVudCA9IGFjdGl2ZUl0ZW0gPT09IGVsZW1lbnQsXG4gICAgICAgICAgaXNJbnNpZGVNZW51ID0gbWVudS5jb250YWlucyhhY3RpdmVJdGVtKSxcbiAgICAgICAgICBpc01lbnVJdGVtID0gYWN0aXZlSXRlbS5wYXJlbnROb2RlID09PSBtZW51IHx8IGFjdGl2ZUl0ZW0ucGFyZW50Tm9kZS5wYXJlbnROb2RlID09PSBtZW51LFxuICAgICAgICAgIGlkeCA9IG1lbnVJdGVtcy5pbmRleE9mKGFjdGl2ZUl0ZW0pO1xuICAgICAgaWYgKCBpc01lbnVJdGVtICkge1xuICAgICAgICBpZHggPSBpc1NhbWVFbGVtZW50ID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAzOCA/IChpZHg+MT9pZHgtMTowKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSA0MCA/IChpZHg8bWVudUl0ZW1zLmxlbmd0aC0xP2lkeCsxOmlkeCkgOiBpZHg7XG4gICAgICAgIG1lbnVJdGVtc1tpZHhdICYmIHNldEZvY3VzKG1lbnVJdGVtc1tpZHhdKTtcbiAgICAgIH1cbiAgICAgIGlmICggKG1lbnVJdGVtcy5sZW5ndGggJiYgaXNNZW51SXRlbVxuICAgICAgICAgICAgfHwgIW1lbnVJdGVtcy5sZW5ndGggJiYgKGlzSW5zaWRlTWVudSB8fCBpc1NhbWVFbGVtZW50KVxuICAgICAgICAgICAgfHwgIWlzSW5zaWRlTWVudSApXG4gICAgICAgICAgICAmJiBlbGVtZW50Lm9wZW4gJiYga2V5ID09PSAyN1xuICAgICAgKSB7XG4gICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93Q3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvdycsICdkcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgc2hvd0N1c3RvbUV2ZW50KTtcbiAgICAgIGlmICggc2hvd0N1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgKSB7IHJldHVybjsgfVxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xuICAgICAgZWxlbWVudC5vcGVuID0gdHJ1ZTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsaWNrSGFuZGxlcixmYWxzZSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Rm9jdXMoIG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lOUFVUJylbMF0gfHwgZWxlbWVudCApO1xuICAgICAgICB0b2dnbGVEaXNtaXNzKCk7XG4gICAgICAgIHNob3duQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCggJ3Nob3duJywgJ2Ryb3Bkb3duJywgcmVsYXRlZFRhcmdldCk7XG4gICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIHNob3duQ3VzdG9tRXZlbnQpO1xuICAgICAgfSwxKTtcbiAgICB9O1xuICAgIHNlbGYuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpZGVDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdoaWRlJywgJ2Ryb3Bkb3duJywgcmVsYXRlZFRhcmdldCk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBoaWRlQ3VzdG9tRXZlbnQpO1xuICAgICAgaWYgKCBoaWRlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsZmFsc2UpO1xuICAgICAgZWxlbWVudC5vcGVuID0gZmFsc2U7XG4gICAgICB0b2dnbGVEaXNtaXNzKCk7XG4gICAgICBzZXRGb2N1cyhlbGVtZW50KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LkRyb3Bkb3duICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsaWNrSGFuZGxlcixmYWxzZSk7XG4gICAgICB9LDEpO1xuICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnaGlkZGVuJywgJ2Ryb3Bkb3duJywgcmVsYXRlZFRhcmdldCk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBoaWRkZW5DdXN0b21FdmVudCk7XG4gICAgfTtcbiAgICBzZWxmLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgJiYgZWxlbWVudC5vcGVuKSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgICBlbHNlIHsgc2VsZi5zaG93KCk7IH1cbiAgICB9O1xuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgJiYgZWxlbWVudC5vcGVuKSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbGlja0hhbmRsZXIsZmFsc2UpO1xuICAgICAgZGVsZXRlIGVsZW1lbnQuRHJvcGRvd247XG4gICAgfTtcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuRHJvcGRvd24gJiYgZWxlbWVudC5Ecm9wZG93bi5kaXNwb3NlKCk7XG4gICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIG1lbnUgPSBxdWVyeUVsZW1lbnQoJy5kcm9wZG93bi1tZW51JywgcGFyZW50KTtcbiAgICBBcnJheS5mcm9tKG1lbnUuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoY2hpbGQpe1xuICAgICAgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoICYmIChjaGlsZC5jaGlsZHJlblswXS50YWdOYW1lID09PSAnQScgJiYgbWVudUl0ZW1zLnB1c2goY2hpbGQuY2hpbGRyZW5bMF0pKTtcbiAgICAgIGNoaWxkLnRhZ05hbWUgPT09ICdBJyAmJiBtZW51SXRlbXMucHVzaChjaGlsZCk7XG4gICAgfSk7XG4gICAgaWYgKCAhZWxlbWVudC5Ecm9wZG93biApIHtcbiAgICAgICEoJ3RhYmluZGV4JyBpbiBtZW51KSAmJiBtZW51LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2xpY2tIYW5kbGVyLGZhbHNlKTtcbiAgICB9XG4gICAgcGVyc2lzdCA9IG9wdGlvbiA9PT0gdHJ1ZSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJzaXN0JykgPT09ICd0cnVlJyB8fCBmYWxzZTtcbiAgICBlbGVtZW50Lm9wZW4gPSBmYWxzZTtcbiAgICBlbGVtZW50LkRyb3Bkb3duID0gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1vZGFsKGVsZW1lbnQsb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBzZWxmID0gdGhpcywgbW9kYWwsXG4gICAgICBzaG93Q3VzdG9tRXZlbnQsXG4gICAgICBzaG93bkN1c3RvbUV2ZW50LFxuICAgICAgaGlkZUN1c3RvbUV2ZW50LFxuICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQsXG4gICAgICByZWxhdGVkVGFyZ2V0ID0gbnVsbCxcbiAgICAgIHNjcm9sbEJhcldpZHRoLFxuICAgICAgb3ZlcmxheSxcbiAgICAgIG92ZXJsYXlEZWxheSxcbiAgICAgIGZpeGVkSXRlbXMsXG4gICAgICBvcHMgPSB7fTtcbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxiYXIoKSB7XG4gICAgICB2YXIgb3Blbk1vZGFsID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLW9wZW4nKSxcbiAgICAgICAgICBib2R5UGFkID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5wYWRkaW5nUmlnaHQpLFxuICAgICAgICAgIGJvZHlPdmVyZmxvdyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAhPT0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgbW9kYWxPdmVyZmxvdyA9IG1vZGFsLmNsaWVudEhlaWdodCAhPT0gbW9kYWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBtZWFzdXJlU2Nyb2xsYmFyKCk7XG4gICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAhbW9kYWxPdmVyZmxvdyAmJiBzY3JvbGxCYXJXaWR0aCA/IChzY3JvbGxCYXJXaWR0aCArIFwicHhcIikgOiAnJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gbW9kYWxPdmVyZmxvdyB8fCBib2R5T3ZlcmZsb3cgPyAoKGJvZHlQYWQgKyAob3Blbk1vZGFsID8gMDpzY3JvbGxCYXJXaWR0aCkpICsgXCJweFwiKSA6ICcnO1xuICAgICAgZml4ZWRJdGVtcy5sZW5ndGggJiYgZml4ZWRJdGVtcy5tYXAoZnVuY3Rpb24gKGZpeGVkKXtcbiAgICAgICAgdmFyIGl0ZW1QYWQgPSBnZXRDb21wdXRlZFN0eWxlKGZpeGVkKS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgIGZpeGVkLnN0eWxlLnBhZGRpbmdSaWdodCA9IG1vZGFsT3ZlcmZsb3cgfHwgYm9keU92ZXJmbG93ID8gKChwYXJzZUludChpdGVtUGFkKSArIChvcGVuTW9kYWw/MDpzY3JvbGxCYXJXaWR0aCkpICsgXCJweFwiKSA6ICgocGFyc2VJbnQoaXRlbVBhZCkpICsgXCJweFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgIGZpeGVkSXRlbXMubGVuZ3RoICYmIGZpeGVkSXRlbXMubWFwKGZ1bmN0aW9uIChmaXhlZCl7XG4gICAgICAgIGZpeGVkLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gICAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHdpZHRoVmFsdWU7XG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgIHdpZHRoVmFsdWUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgICByZXR1cm4gd2lkdGhWYWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICAgIHZhciBuZXdPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBvdmVybGF5ID0gcXVlcnlFbGVtZW50KCcubW9kYWwtYmFja2Ryb3AnKTtcbiAgICAgIGlmICggb3ZlcmxheSA9PT0gbnVsbCApIHtcbiAgICAgICAgbmV3T3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsLWJhY2tkcm9wJyArIChvcHMuYW5pbWF0aW9uID8gJyBmYWRlJyA6ICcnKSk7XG4gICAgICAgIG92ZXJsYXkgPSBuZXdPdmVybGF5O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG92ZXJsYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXkgKCkge1xuICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLm1vZGFsLWJhY2tkcm9wJyk7XG4gICAgICBpZiAoIG92ZXJsYXkgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsIHNob3cnKVswXSApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTsgb3ZlcmxheSA9IG51bGw7XG4gICAgICB9XG4gICAgICBvdmVybGF5ID09PSBudWxsICYmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKSwgcmVzZXRTY3JvbGxiYXIoKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhhY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIHdpbmRvd1thY3Rpb25dKCAncmVzaXplJywgc2VsZi51cGRhdGUsIHBhc3NpdmVIYW5kbGVyKTtcbiAgICAgIG1vZGFsW2FjdGlvbl0oICdjbGljaycsZGlzbWlzc0hhbmRsZXIsZmFsc2UpO1xuICAgICAgZG9jdW1lbnRbYWN0aW9uXSggJ2tleWRvd24nLGtleUhhbmRsZXIsZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiZWZvcmVTaG93KCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBzZXRTY3JvbGxiYXIoKTtcbiAgICAgICFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCBzaG93JylbMF0gJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbCwgdHJpZ2dlclNob3cpIDogdHJpZ2dlclNob3coKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlclNob3coKSB7XG4gICAgICBzZXRGb2N1cyhtb2RhbCk7XG4gICAgICBtb2RhbC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdG9nZ2xlRXZlbnRzKDEpO1xuICAgICAgc2hvd25DdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdzaG93bicsICdtb2RhbCcsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBzaG93bkN1c3RvbUV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlckhpZGUoZm9yY2UpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIGVsZW1lbnQgJiYgKHNldEZvY3VzKGVsZW1lbnQpKTtcbiAgICAgIG92ZXJsYXkgPSBxdWVyeUVsZW1lbnQoJy5tb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgaWYgKGZvcmNlICE9PSAxICYmIG92ZXJsYXkgJiYgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwgc2hvdycpWzBdKSB7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChvdmVybGF5LHJlbW92ZU92ZXJsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlT3ZlcmxheSgpO1xuICAgICAgfVxuICAgICAgdG9nZ2xlRXZlbnRzKCk7XG4gICAgICBtb2RhbC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnaGlkZGVuJywgJ21vZGFsJyk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwobW9kYWwsIGhpZGRlbkN1c3RvbUV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIGlmICggbW9kYWwuaXNBbmltYXRpbmcgKSB7IHJldHVybjsgfVxuICAgICAgdmFyIGNsaWNrVGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgbW9kYWxJRCA9IFwiI1wiICsgKG1vZGFsLmdldEF0dHJpYnV0ZSgnaWQnKSksXG4gICAgICAgICAgdGFyZ2V0QXR0clZhbHVlID0gY2xpY2tUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpIHx8IGNsaWNrVGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgIGVsZW1BdHRyVmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgaWYgKCAhbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JylcbiAgICAgICAgICAmJiAoY2xpY2tUYXJnZXQgPT09IGVsZW1lbnQgJiYgdGFyZ2V0QXR0clZhbHVlID09PSBtb2RhbElEXG4gICAgICAgICAgfHwgZWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgZWxlbUF0dHJWYWx1ZSA9PT0gbW9kYWxJRCkgKSB7XG4gICAgICAgIG1vZGFsLm1vZGFsVHJpZ2dlciA9IGVsZW1lbnQ7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBrZXlIYW5kbGVyKHJlZikge1xuICAgICAgdmFyIHdoaWNoID0gcmVmLndoaWNoO1xuICAgICAgaWYgKCFtb2RhbC5pc0FuaW1hdGluZyAmJiBvcHMua2V5Ym9hcmQgJiYgd2hpY2ggPT0gMjcgJiYgbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgKSB7XG4gICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNtaXNzSGFuZGxlcihlKSB7XG4gICAgICBpZiAoIG1vZGFsLmlzQW5pbWF0aW5nICkgeyByZXR1cm47IH1cbiAgICAgIHZhciBjbGlja1RhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgIGhhc0RhdGEgPSBjbGlja1RhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzbWlzcycpID09PSAnbW9kYWwnLFxuICAgICAgICAgIHBhcmVudFdpdGhEYXRhID0gY2xpY2tUYXJnZXQuY2xvc2VzdCgnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyk7XG4gICAgICBpZiAoIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpICYmICggcGFyZW50V2l0aERhdGEgfHwgaGFzRGF0YVxuICAgICAgICAgIHx8IGNsaWNrVGFyZ2V0ID09PSBtb2RhbCAmJiBvcHMuYmFja2Ryb3AgIT09ICdzdGF0aWMnICkgKSB7XG4gICAgICAgIHNlbGYuaGlkZSgpOyByZWxhdGVkVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICggbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgKSB7c2VsZi5oaWRlKCk7fSBlbHNlIHtzZWxmLnNob3coKTt9XG4gICAgfTtcbiAgICBzZWxmLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgJiYgISFtb2RhbC5pc0FuaW1hdGluZyApIHtyZXR1cm59XG4gICAgICBzaG93Q3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvdycsICdtb2RhbCcsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBzaG93Q3VzdG9tRXZlbnQpO1xuICAgICAgaWYgKCBzaG93Q3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICBtb2RhbC5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICB2YXIgY3VycmVudE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCBzaG93JylbMF07XG4gICAgICBpZiAoY3VycmVudE9wZW4gJiYgY3VycmVudE9wZW4gIT09IG1vZGFsKSB7XG4gICAgICAgIGN1cnJlbnRPcGVuLm1vZGFsVHJpZ2dlciAmJiBjdXJyZW50T3Blbi5tb2RhbFRyaWdnZXIuTW9kYWwuaGlkZSgpO1xuICAgICAgICBjdXJyZW50T3Blbi5Nb2RhbCAmJiBjdXJyZW50T3Blbi5Nb2RhbC5oaWRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIG9wcy5iYWNrZHJvcCApIHtcbiAgICAgICAgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICAgIGlmICggb3ZlcmxheSAmJiAhY3VycmVudE9wZW4gJiYgIW92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgKSB7XG4gICAgICAgIG92ZXJsYXkub2Zmc2V0V2lkdGg7XG4gICAgICAgIG92ZXJsYXlEZWxheSA9IGdldEVsZW1lbnRUcmFuc2l0aW9uRHVyYXRpb24ob3ZlcmxheSk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgfVxuICAgICAgIWN1cnJlbnRPcGVuID8gc2V0VGltZW91dCggYmVmb3JlU2hvdywgb3ZlcmxheSAmJiBvdmVybGF5RGVsYXkgPyBvdmVybGF5RGVsYXk6MCApIDogYmVmb3JlU2hvdygpO1xuICAgIH07XG4gICAgc2VsZi5oaWRlID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICBpZiAoICFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSApIHtyZXR1cm59XG4gICAgICBoaWRlQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCggJ2hpZGUnLCAnbW9kYWwnKTtcbiAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgaGlkZUN1c3RvbUV2ZW50KTtcbiAgICAgIGlmICggaGlkZUN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgKSB7IHJldHVybjsgfVxuICAgICAgbW9kYWwuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWRlJykgJiYgZm9yY2UgIT09IDEgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbCwgdHJpZ2dlckhpZGUpIDogdHJpZ2dlckhpZGUoKTtcbiAgICB9O1xuICAgIHNlbGYuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBxdWVyeUVsZW1lbnQoJy5tb2RhbC1jb250ZW50Jyxtb2RhbCkuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9O1xuICAgIHNlbGYudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgIHNldFNjcm9sbGJhcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5oaWRlKDEpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbGlja0hhbmRsZXIsZmFsc2UpOyBkZWxldGUgZWxlbWVudC5Nb2RhbDsgfVxuICAgICAgZWxzZSB7ZGVsZXRlIG1vZGFsLk1vZGFsO31cbiAgICB9O1xuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gICAgdmFyIGNoZWNrTW9kYWwgPSBxdWVyeUVsZW1lbnQoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgKTtcbiAgICBtb2RhbCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpID8gZWxlbWVudCA6IGNoZWNrTW9kYWw7XG4gICAgZml4ZWRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZml4ZWQtdG9wJykpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpeGVkLWJvdHRvbScpKSk7XG4gICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSApIHsgZWxlbWVudCA9IG51bGw7IH1cbiAgICBlbGVtZW50ICYmIGVsZW1lbnQuTW9kYWwgJiYgZWxlbWVudC5Nb2RhbC5kaXNwb3NlKCk7XG4gICAgbW9kYWwgJiYgbW9kYWwuTW9kYWwgJiYgbW9kYWwuTW9kYWwuZGlzcG9zZSgpO1xuICAgIG9wcy5rZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQgPT09IGZhbHNlIHx8IG1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXlib2FyZCcpID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xuICAgIG9wcy5iYWNrZHJvcCA9IG9wdGlvbnMuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8IG1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZHJvcCcpID09PSAnc3RhdGljJyA/ICdzdGF0aWMnIDogdHJ1ZTtcbiAgICBvcHMuYmFja2Ryb3AgPSBvcHRpb25zLmJhY2tkcm9wID09PSBmYWxzZSB8fCBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2Ryb3AnKSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogb3BzLmJhY2tkcm9wO1xuICAgIG9wcy5hbmltYXRpb24gPSBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhZGUnKSA/IHRydWUgOiBmYWxzZTtcbiAgICBvcHMuY29udGVudCA9IG9wdGlvbnMuY29udGVudDtcbiAgICBtb2RhbC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGlmICggZWxlbWVudCAmJiAhZWxlbWVudC5Nb2RhbCApIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsaWNrSGFuZGxlcixmYWxzZSk7XG4gICAgfVxuICAgIGlmICggb3BzLmNvbnRlbnQgKSB7XG4gICAgICBzZWxmLnNldENvbnRlbnQoIG9wcy5jb250ZW50LnRyaW0oKSApO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbW9kYWwubW9kYWxUcmlnZ2VyID0gZWxlbWVudDtcbiAgICAgIGVsZW1lbnQuTW9kYWwgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RhbC5Nb2RhbCA9IHNlbGY7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1vdXNlQ2xpY2tFdmVudHMgPSB7IGRvd246ICdtb3VzZWRvd24nLCB1cDogJ21vdXNldXAnIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgICB5IDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICB4IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVUaXAobGluayxlbGVtZW50LHBvc2l0aW9uLHBhcmVudCkge1xuICAgIHZhciB0aXBQb3NpdGlvbnMgPSAvXFxiKHRvcHxib3R0b218bGVmdHxyaWdodCkrLyxcbiAgICAgICAgZWxlbWVudERpbWVuc2lvbnMgPSB7IHcgOiBlbGVtZW50Lm9mZnNldFdpZHRoLCBoOiBlbGVtZW50Lm9mZnNldEhlaWdodCB9LFxuICAgICAgICB3aW5kb3dXaWR0aCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCksXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcbiAgICAgICAgcmVjdCA9IGxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbCA9IHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSA/IGdldFNjcm9sbCgpIDogeyB4OiBwYXJlbnQub2Zmc2V0TGVmdCArIHBhcmVudC5zY3JvbGxMZWZ0LCB5OiBwYXJlbnQub2Zmc2V0VG9wICsgcGFyZW50LnNjcm9sbFRvcCB9LFxuICAgICAgICBsaW5rRGltZW5zaW9ucyA9IHsgdzogcmVjdC5yaWdodCAtIHJlY3QubGVmdCwgaDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCB9LFxuICAgICAgICBpc1BvcG92ZXIgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9wb3ZlcicpLFxuICAgICAgICBhcnJvdyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXJyb3cnKVswXSxcbiAgICAgICAgaGFsZlRvcEV4Y2VlZCA9IHJlY3QudG9wICsgbGlua0RpbWVuc2lvbnMuaC8yIC0gZWxlbWVudERpbWVuc2lvbnMuaC8yIDwgMCxcbiAgICAgICAgaGFsZkxlZnRFeGNlZWQgPSByZWN0LmxlZnQgKyBsaW5rRGltZW5zaW9ucy53LzIgLSBlbGVtZW50RGltZW5zaW9ucy53LzIgPCAwLFxuICAgICAgICBoYWxmUmlnaHRFeGNlZWQgPSByZWN0LmxlZnQgKyBlbGVtZW50RGltZW5zaW9ucy53LzIgKyBsaW5rRGltZW5zaW9ucy53LzIgPj0gd2luZG93V2lkdGgsXG4gICAgICAgIGhhbGZCb3R0b21FeGNlZWQgPSByZWN0LnRvcCArIGVsZW1lbnREaW1lbnNpb25zLmgvMiArIGxpbmtEaW1lbnNpb25zLmgvMiA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgIHRvcEV4Y2VlZCA9IHJlY3QudG9wIC0gZWxlbWVudERpbWVuc2lvbnMuaCA8IDAsXG4gICAgICAgIGxlZnRFeGNlZWQgPSByZWN0LmxlZnQgLSBlbGVtZW50RGltZW5zaW9ucy53IDwgMCxcbiAgICAgICAgYm90dG9tRXhjZWVkID0gcmVjdC50b3AgKyBlbGVtZW50RGltZW5zaW9ucy5oICsgbGlua0RpbWVuc2lvbnMuaCA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgIHJpZ2h0RXhjZWVkID0gcmVjdC5sZWZ0ICsgZWxlbWVudERpbWVuc2lvbnMudyArIGxpbmtEaW1lbnNpb25zLncgPj0gd2luZG93V2lkdGg7XG4gICAgcG9zaXRpb24gPSAocG9zaXRpb24gPT09ICdsZWZ0JyB8fCBwb3NpdGlvbiA9PT0gJ3JpZ2h0JykgJiYgbGVmdEV4Y2VlZCAmJiByaWdodEV4Y2VlZCA/ICd0b3AnIDogcG9zaXRpb247XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gJ3RvcCcgJiYgdG9wRXhjZWVkID8gJ2JvdHRvbScgOiBwb3NpdGlvbjtcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBib3R0b21FeGNlZWQgPyAndG9wJyA6IHBvc2l0aW9uO1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09ICdsZWZ0JyAmJiBsZWZ0RXhjZWVkID8gJ3JpZ2h0JyA6IHBvc2l0aW9uO1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09ICdyaWdodCcgJiYgcmlnaHRFeGNlZWQgPyAnbGVmdCcgOiBwb3NpdGlvbjtcbiAgICB2YXIgdG9wUG9zaXRpb24sXG4gICAgICBsZWZ0UG9zaXRpb24sXG4gICAgICBhcnJvd1RvcCxcbiAgICAgIGFycm93TGVmdCxcbiAgICAgIGFycm93V2lkdGgsXG4gICAgICBhcnJvd0hlaWdodDtcbiAgICBlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKHBvc2l0aW9uKSA9PT0gLTEgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSh0aXBQb3NpdGlvbnMscG9zaXRpb24pKTtcbiAgICBhcnJvd1dpZHRoID0gYXJyb3cub2Zmc2V0V2lkdGg7IGFycm93SGVpZ2h0ID0gYXJyb3cub2Zmc2V0SGVpZ2h0O1xuICAgIGlmICggcG9zaXRpb24gPT09ICdsZWZ0JyB8fCBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyApIHtcbiAgICAgIGlmICggcG9zaXRpb24gPT09ICdsZWZ0JyApIHtcbiAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdC5sZWZ0ICsgc2Nyb2xsLnggLSBlbGVtZW50RGltZW5zaW9ucy53IC0gKCBpc1BvcG92ZXIgPyBhcnJvd1dpZHRoIDogMCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdC5sZWZ0ICsgc2Nyb2xsLnggKyBsaW5rRGltZW5zaW9ucy53O1xuICAgICAgfVxuICAgICAgaWYgKGhhbGZUb3BFeGNlZWQpIHtcbiAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0LnRvcCArIHNjcm9sbC55O1xuICAgICAgICBhcnJvd1RvcCA9IGxpbmtEaW1lbnNpb25zLmgvMiAtIGFycm93V2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKGhhbGZCb3R0b21FeGNlZWQpIHtcbiAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0LnRvcCArIHNjcm9sbC55IC0gZWxlbWVudERpbWVuc2lvbnMuaCArIGxpbmtEaW1lbnNpb25zLmg7XG4gICAgICAgIGFycm93VG9wID0gZWxlbWVudERpbWVuc2lvbnMuaCAtIGxpbmtEaW1lbnNpb25zLmgvMiAtIGFycm93V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3QudG9wICsgc2Nyb2xsLnkgLSBlbGVtZW50RGltZW5zaW9ucy5oLzIgKyBsaW5rRGltZW5zaW9ucy5oLzI7XG4gICAgICAgIGFycm93VG9wID0gZWxlbWVudERpbWVuc2lvbnMuaC8yIC0gKGlzUG9wb3ZlciA/IGFycm93SGVpZ2h0KjAuOSA6IGFycm93SGVpZ2h0LzIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScgKSB7XG4gICAgICBpZiAoIHBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICB0b3BQb3NpdGlvbiA9ICByZWN0LnRvcCArIHNjcm9sbC55IC0gZWxlbWVudERpbWVuc2lvbnMuaCAtICggaXNQb3BvdmVyID8gYXJyb3dIZWlnaHQgOiAwICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3QudG9wICsgc2Nyb2xsLnkgKyBsaW5rRGltZW5zaW9ucy5oO1xuICAgICAgfVxuICAgICAgaWYgKGhhbGZMZWZ0RXhjZWVkKSB7XG4gICAgICAgIGxlZnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIGFycm93TGVmdCA9IHJlY3QubGVmdCArIGxpbmtEaW1lbnNpb25zLncvMiAtIGFycm93V2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKGhhbGZSaWdodEV4Y2VlZCkge1xuICAgICAgICBsZWZ0UG9zaXRpb24gPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnREaW1lbnNpb25zLncqMS4wMTtcbiAgICAgICAgYXJyb3dMZWZ0ID0gZWxlbWVudERpbWVuc2lvbnMudyAtICggd2luZG93V2lkdGggLSByZWN0LmxlZnQgKSArIGxpbmtEaW1lbnNpb25zLncvMiAtIGFycm93V2lkdGgvMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRQb3NpdGlvbiA9IHJlY3QubGVmdCArIHNjcm9sbC54IC0gZWxlbWVudERpbWVuc2lvbnMudy8yICsgbGlua0RpbWVuc2lvbnMudy8yO1xuICAgICAgICBhcnJvd0xlZnQgPSBlbGVtZW50RGltZW5zaW9ucy53LzIgLSAoIGlzUG9wb3ZlciA/IGFycm93V2lkdGggOiBhcnJvd1dpZHRoLzIgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSB0b3BQb3NpdGlvbiArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdFBvc2l0aW9uICsgJ3B4JztcbiAgICBhcnJvd1RvcCAmJiAoYXJyb3cuc3R5bGUudG9wID0gYXJyb3dUb3AgKyAncHgnKTtcbiAgICBhcnJvd0xlZnQgJiYgKGFycm93LnN0eWxlLmxlZnQgPSBhcnJvd0xlZnQgKyAncHgnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFBvcG92ZXIoZWxlbWVudCxvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwb3BvdmVyID0gbnVsbCxcbiAgICAgICAgdGltZXIgPSAwLFxuICAgICAgICBpc0lwaG9uZSA9IC8oaVBob25lfGlQb2R8aVBhZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgICAgIHRpdGxlU3RyaW5nLFxuICAgICAgICBjb250ZW50U3RyaW5nLFxuICAgICAgICBvcHMgPSB7fTtcbiAgICB2YXIgdHJpZ2dlckRhdGEsXG4gICAgICAgIGFuaW1hdGlvbkRhdGEsXG4gICAgICAgIHBsYWNlbWVudERhdGEsXG4gICAgICAgIGRpc21pc3NpYmxlRGF0YSxcbiAgICAgICAgZGVsYXlEYXRhLFxuICAgICAgICBjb250YWluZXJEYXRhLFxuICAgICAgICBjbG9zZUJ0bixcbiAgICAgICAgc2hvd0N1c3RvbUV2ZW50LFxuICAgICAgICBzaG93bkN1c3RvbUV2ZW50LFxuICAgICAgICBoaWRlQ3VzdG9tRXZlbnQsXG4gICAgICAgIGhpZGRlbkN1c3RvbUV2ZW50LFxuICAgICAgICBjb250YWluZXJFbGVtZW50LFxuICAgICAgICBjb250YWluZXJEYXRhRWxlbWVudCxcbiAgICAgICAgbW9kYWwsXG4gICAgICAgIG5hdmJhckZpeGVkVG9wLFxuICAgICAgICBuYXZiYXJGaXhlZEJvdHRvbSxcbiAgICAgICAgcGxhY2VtZW50Q2xhc3M7XG4gICAgZnVuY3Rpb24gZGlzbWlzc2libGVIYW5kbGVyKGUpIHtcbiAgICAgIGlmIChwb3BvdmVyICE9PSBudWxsICYmIGUudGFyZ2V0ID09PSBxdWVyeUVsZW1lbnQoJy5jbG9zZScscG9wb3ZlcikpIHtcbiAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgMCA6IG9wdGlvbnMudGl0bGUgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSB8fCBudWxsLFxuICAgICAgICAxIDogb3B0aW9ucy5jb250ZW50IHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSB8fCBudWxsXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVBvcG92ZXIoKSB7XG4gICAgICBvcHMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHBvcG92ZXIpO1xuICAgICAgdGltZXIgPSBudWxsOyBwb3BvdmVyID0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUG9wb3ZlcigpIHtcbiAgICAgIHRpdGxlU3RyaW5nID0gZ2V0Q29udGVudHMoKVswXSB8fCBudWxsO1xuICAgICAgY29udGVudFN0cmluZyA9IGdldENvbnRlbnRzKClbMV07XG4gICAgICBjb250ZW50U3RyaW5nID0gISFjb250ZW50U3RyaW5nID8gY29udGVudFN0cmluZy50cmltKCkgOiBudWxsO1xuICAgICAgcG9wb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdmFyIHBvcG92ZXJBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9wb3ZlckFycm93LmNsYXNzTGlzdC5hZGQoJ2Fycm93Jyk7XG4gICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJBcnJvdyk7XG4gICAgICBpZiAoIGNvbnRlbnRTdHJpbmcgIT09IG51bGwgJiYgb3BzLnRlbXBsYXRlID09PSBudWxsICkge1xuICAgICAgICBwb3BvdmVyLnNldEF0dHJpYnV0ZSgncm9sZScsJ3Rvb2x0aXAnKTtcbiAgICAgICAgaWYgKHRpdGxlU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIHBvcG92ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgcG9wb3ZlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItaGVhZGVyJyk7XG4gICAgICAgICAgcG9wb3ZlclRpdGxlLmlubmVySFRNTCA9IG9wcy5kaXNtaXNzaWJsZSA/IHRpdGxlU3RyaW5nICsgY2xvc2VCdG4gOiB0aXRsZVN0cmluZztcbiAgICAgICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJUaXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvcG92ZXJCb2R5TWFya3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcG92ZXJCb2R5TWFya3VwLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItYm9keScpO1xuICAgICAgICBwb3BvdmVyQm9keU1hcmt1cC5pbm5lckhUTUwgPSBvcHMuZGlzbWlzc2libGUgJiYgdGl0bGVTdHJpbmcgPT09IG51bGwgPyBjb250ZW50U3RyaW5nICsgY2xvc2VCdG4gOiBjb250ZW50U3RyaW5nO1xuICAgICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJCb2R5TWFya3VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwb3BvdmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wb3ZlclRlbXBsYXRlLmlubmVySFRNTCA9IG9wcy50ZW1wbGF0ZS50cmltKCk7XG4gICAgICAgIHBvcG92ZXIuY2xhc3NOYW1lID0gcG9wb3ZlclRlbXBsYXRlLmZpcnN0Q2hpbGQuY2xhc3NOYW1lO1xuICAgICAgICBwb3BvdmVyLmlubmVySFRNTCA9IHBvcG92ZXJUZW1wbGF0ZS5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgdmFyIHBvcG92ZXJIZWFkZXIgPSBxdWVyeUVsZW1lbnQoJy5wb3BvdmVyLWhlYWRlcicscG9wb3ZlciksXG4gICAgICAgICAgICBwb3BvdmVyQm9keSA9IHF1ZXJ5RWxlbWVudCgnLnBvcG92ZXItYm9keScscG9wb3Zlcik7XG4gICAgICAgIHRpdGxlU3RyaW5nICYmIHBvcG92ZXJIZWFkZXIgJiYgKHBvcG92ZXJIZWFkZXIuaW5uZXJIVE1MID0gdGl0bGVTdHJpbmcudHJpbSgpKTtcbiAgICAgICAgY29udGVudFN0cmluZyAmJiBwb3BvdmVyQm9keSAmJiAocG9wb3ZlckJvZHkuaW5uZXJIVE1MID0gY29udGVudFN0cmluZy50cmltKCkpO1xuICAgICAgfVxuICAgICAgb3BzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BvdmVyKTtcbiAgICAgIHBvcG92ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAhcG9wb3Zlci5jbGFzc0xpc3QuY29udGFpbnMoICdwb3BvdmVyJykgJiYgcG9wb3Zlci5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyJyk7XG4gICAgICAhcG9wb3Zlci5jbGFzc0xpc3QuY29udGFpbnMoIG9wcy5hbmltYXRpb24pICYmIHBvcG92ZXIuY2xhc3NMaXN0LmFkZChvcHMuYW5pbWF0aW9uKTtcbiAgICAgICFwb3BvdmVyLmNsYXNzTGlzdC5jb250YWlucyggcGxhY2VtZW50Q2xhc3MpICYmIHBvcG92ZXIuY2xhc3NMaXN0LmFkZChwbGFjZW1lbnRDbGFzcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dQb3BvdmVyKCkge1xuICAgICAgIXBvcG92ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgJiYgKCBwb3BvdmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3BvdmVyKCkge1xuICAgICAgc3R5bGVUaXAoZWxlbWVudCwgcG9wb3Zlciwgb3BzLnBsYWNlbWVudCwgb3BzLmNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcmNlRm9jdXMgKCkge1xuICAgICAgaWYgKHBvcG92ZXIgPT09IG51bGwpIHsgZWxlbWVudC5mb2N1cygpOyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhhY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIGlmIChvcHMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgICBlbGVtZW50W2FjdGlvbl0oIG1vdXNlQ2xpY2tFdmVudHMuZG93biwgc2VsZi5zaG93ICk7XG4gICAgICAgIGVsZW1lbnRbYWN0aW9uXSggbW91c2VIb3ZlckV2ZW50c1swXSwgc2VsZi5zaG93ICk7XG4gICAgICAgIGlmICghb3BzLmRpc21pc3NpYmxlKSB7IGVsZW1lbnRbYWN0aW9uXSggbW91c2VIb3ZlckV2ZW50c1sxXSwgc2VsZi5oaWRlICk7IH1cbiAgICAgIH0gZWxzZSBpZiAoJ2NsaWNrJyA9PSBvcHMudHJpZ2dlcikge1xuICAgICAgICBlbGVtZW50W2FjdGlvbl0oIG9wcy50cmlnZ2VyLCBzZWxmLnRvZ2dsZSApO1xuICAgICAgfSBlbHNlIGlmICgnZm9jdXMnID09IG9wcy50cmlnZ2VyKSB7XG4gICAgICAgIGlzSXBob25lICYmIGVsZW1lbnRbYWN0aW9uXSggJ2NsaWNrJywgZm9yY2VGb2N1cywgZmFsc2UgKTtcbiAgICAgICAgZWxlbWVudFthY3Rpb25dKCBvcHMudHJpZ2dlciwgc2VsZi50b2dnbGUgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG91Y2hIYW5kbGVyKGUpe1xuICAgICAgaWYgKCBwb3BvdmVyICYmIHBvcG92ZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0ID09PSBlbGVtZW50IHx8IGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSA7IGVsc2Uge1xuICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzbWlzc0hhbmRsZXJUb2dnbGUoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24gPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgICBpZiAob3BzLmRpc21pc3NpYmxlKSB7XG4gICAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ2NsaWNrJywgZGlzbWlzc2libGVIYW5kbGVyLCBmYWxzZSApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJ2ZvY3VzJyA9PSBvcHMudHJpZ2dlciAmJiBlbGVtZW50W2FjdGlvbl0oICdibHVyJywgc2VsZi5oaWRlICk7XG4gICAgICAgICdob3ZlcicgPT0gb3BzLnRyaWdnZXIgJiYgZG9jdW1lbnRbYWN0aW9uXSggJ3RvdWNoc3RhcnQnLCB0b3VjaEhhbmRsZXIsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICB9XG4gICAgICB3aW5kb3dbYWN0aW9uXSgncmVzaXplJywgc2VsZi5oaWRlLCBwYXNzaXZlSGFuZGxlciApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG93VHJpZ2dlcigpIHtcbiAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKDEpO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3duQ3VzdG9tRXZlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoaWRlVHJpZ2dlcigpIHtcbiAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKCk7XG4gICAgICByZW1vdmVQb3BvdmVyKCk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZGVuQ3VzdG9tRXZlbnQpO1xuICAgIH1cbiAgICBzZWxmLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwb3BvdmVyID09PSBudWxsKSB7IHNlbGYuc2hvdygpOyB9XG4gICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICB9O1xuICAgIHNlbGYuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd0N1c3RvbUV2ZW50KTtcbiAgICAgICAgICBpZiAoIHNob3dDdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkICkgeyByZXR1cm47IH1cbiAgICAgICAgICBjcmVhdGVQb3BvdmVyKCk7XG4gICAgICAgICAgdXBkYXRlUG9wb3ZlcigpO1xuICAgICAgICAgIHNob3dQb3BvdmVyKCk7XG4gICAgICAgICAgISFvcHMuYW5pbWF0aW9uID8gZW11bGF0ZVRyYW5zaXRpb25FbmQocG9wb3Zlciwgc2hvd1RyaWdnZXIpIDogc2hvd1RyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAgKTtcbiAgICB9O1xuICAgIHNlbGYuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgJiYgcG9wb3ZlciAhPT0gbnVsbCAmJiBwb3BvdmVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGVDdXN0b21FdmVudCk7XG4gICAgICAgICAgaWYgKCBoaWRlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgcG9wb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgISFvcHMuYW5pbWF0aW9uID8gZW11bGF0ZVRyYW5zaXRpb25FbmQocG9wb3ZlciwgaGlkZVRyaWdnZXIpIDogaGlkZVRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgb3BzLmRlbGF5ICk7XG4gICAgfTtcbiAgICBzZWxmLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmhpZGUoKTtcbiAgICAgIHRvZ2dsZUV2ZW50cygpO1xuICAgICAgZGVsZXRlIGVsZW1lbnQuUG9wb3ZlcjtcbiAgICB9O1xuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5Qb3BvdmVyICYmIGVsZW1lbnQuUG9wb3Zlci5kaXNwb3NlKCk7XG4gICAgdHJpZ2dlckRhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10cmlnZ2VyJyk7XG4gICAgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnKTtcbiAgICBkaXNtaXNzaWJsZURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNtaXNzaWJsZScpO1xuICAgIGRlbGF5RGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlbGF5Jyk7XG4gICAgY29udGFpbmVyRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5lcicpO1xuICAgIGNsb3NlQnRuID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj7DlzwvYnV0dG9uPic7XG4gICAgc2hvd0N1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ3Nob3cnLCAncG9wb3ZlcicpO1xuICAgIHNob3duQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvd24nLCAncG9wb3ZlcicpO1xuICAgIGhpZGVDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdoaWRlJywgJ3BvcG92ZXInKTtcbiAgICBoaWRkZW5DdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdoaWRkZW4nLCAncG9wb3ZlcicpO1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPSBxdWVyeUVsZW1lbnQob3B0aW9ucy5jb250YWluZXIpO1xuICAgIGNvbnRhaW5lckRhdGFFbGVtZW50ID0gcXVlcnlFbGVtZW50KGNvbnRhaW5lckRhdGEpO1xuICAgIG1vZGFsID0gZWxlbWVudC5jbG9zZXN0KCcubW9kYWwnKTtcbiAgICBuYXZiYXJGaXhlZFRvcCA9IGVsZW1lbnQuY2xvc2VzdCgnLmZpeGVkLXRvcCcpO1xuICAgIG5hdmJhckZpeGVkQm90dG9tID0gZWxlbWVudC5jbG9zZXN0KCcuZml4ZWQtYm90dG9tJyk7XG4gICAgb3BzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZSA/IG9wdGlvbnMudGVtcGxhdGUgOiBudWxsO1xuICAgIG9wcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyID8gb3B0aW9ucy50cmlnZ2VyIDogdHJpZ2dlckRhdGEgfHwgJ2hvdmVyJztcbiAgICBvcHMuYW5pbWF0aW9uID0gb3B0aW9ucy5hbmltYXRpb24gJiYgb3B0aW9ucy5hbmltYXRpb24gIT09ICdmYWRlJyA/IG9wdGlvbnMuYW5pbWF0aW9uIDogYW5pbWF0aW9uRGF0YSB8fCAnZmFkZSc7XG4gICAgb3BzLnBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50ID8gb3B0aW9ucy5wbGFjZW1lbnQgOiBwbGFjZW1lbnREYXRhIHx8ICd0b3AnO1xuICAgIG9wcy5kZWxheSA9IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkgfHwgZGVsYXlEYXRhKSB8fCAyMDA7XG4gICAgb3BzLmRpc21pc3NpYmxlID0gb3B0aW9ucy5kaXNtaXNzaWJsZSB8fCBkaXNtaXNzaWJsZURhdGEgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICBvcHMuY29udGFpbmVyID0gY29udGFpbmVyRWxlbWVudCA/IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRhaW5lckRhdGFFbGVtZW50ID8gY29udGFpbmVyRGF0YUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkVG9wID8gbmF2YmFyRml4ZWRUb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5hdmJhckZpeGVkQm90dG9tID8gbmF2YmFyRml4ZWRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGFsID8gbW9kYWwgOiBkb2N1bWVudC5ib2R5O1xuICAgIHBsYWNlbWVudENsYXNzID0gXCJicy1wb3BvdmVyLVwiICsgKG9wcy5wbGFjZW1lbnQpO1xuICAgIHZhciBwb3BvdmVyQ29udGVudHMgPSBnZXRDb250ZW50cygpO1xuICAgIHRpdGxlU3RyaW5nID0gcG9wb3ZlckNvbnRlbnRzWzBdO1xuICAgIGNvbnRlbnRTdHJpbmcgPSBwb3BvdmVyQ29udGVudHNbMV07XG4gICAgaWYgKCAhY29udGVudFN0cmluZyAmJiAhb3BzLnRlbXBsYXRlICkgeyByZXR1cm47IH1cbiAgICBpZiAoICFlbGVtZW50LlBvcG92ZXIgKSB7XG4gICAgICB0b2dnbGVFdmVudHMoMSk7XG4gICAgfVxuICAgIGVsZW1lbnQuUG9wb3ZlciA9IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBTY3JvbGxTcHkoZWxlbWVudCxvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgdmFycyxcbiAgICAgIHRhcmdldERhdGEsXG4gICAgICBvZmZzZXREYXRhLFxuICAgICAgc3B5VGFyZ2V0LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgb3BzID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlVGFyZ2V0cygpe1xuICAgICAgdmFyIGxpbmtzID0gc3B5VGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBJyk7XG4gICAgICBpZiAodmFycy5sZW5ndGggIT09IGxpbmtzLmxlbmd0aCkge1xuICAgICAgICB2YXJzLml0ZW1zID0gW107XG4gICAgICAgIHZhcnMudGFyZ2V0cyA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGxpbmtzKS5tYXAoZnVuY3Rpb24gKGxpbmspe1xuICAgICAgICAgIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgICAgIHRhcmdldEl0ZW0gPSBocmVmICYmIGhyZWYuY2hhckF0KDApID09PSAnIycgJiYgaHJlZi5zbGljZSgtMSkgIT09ICcjJyAmJiBxdWVyeUVsZW1lbnQoaHJlZik7XG4gICAgICAgICAgaWYgKCB0YXJnZXRJdGVtICkge1xuICAgICAgICAgICAgdmFycy5pdGVtcy5wdXNoKGxpbmspO1xuICAgICAgICAgICAgdmFycy50YXJnZXRzLnB1c2godGFyZ2V0SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFycy5sZW5ndGggPSBsaW5rcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBpdGVtID0gdmFycy5pdGVtc1tpbmRleF0sXG4gICAgICAgIHRhcmdldEl0ZW0gPSB2YXJzLnRhcmdldHNbaW5kZXhdLFxuICAgICAgICBkcm9wbWVudSA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1pdGVtJykgJiYgaXRlbS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLFxuICAgICAgICBkcm9wTGluayA9IGRyb3BtZW51ICYmIGRyb3BtZW51LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsXG4gICAgICAgIG5leHRTaWJsaW5nID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgIGFjdGl2ZVNpYmxpbmcgPSBuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKS5sZW5ndGgsXG4gICAgICAgIHRhcmdldFJlY3QgPSB2YXJzLmlzV2luZG93ICYmIHRhcmdldEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGlzQWN0aXZlID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8IGZhbHNlLFxuICAgICAgICB0b3BFZGdlID0gKHZhcnMuaXNXaW5kb3cgPyB0YXJnZXRSZWN0LnRvcCArIHZhcnMuc2Nyb2xsT2Zmc2V0IDogdGFyZ2V0SXRlbS5vZmZzZXRUb3ApIC0gb3BzLm9mZnNldCxcbiAgICAgICAgYm90dG9tRWRnZSA9IHZhcnMuaXNXaW5kb3cgPyB0YXJnZXRSZWN0LmJvdHRvbSArIHZhcnMuc2Nyb2xsT2Zmc2V0IC0gb3BzLm9mZnNldFxuICAgICAgICAgICAgICAgICAgIDogdmFycy50YXJnZXRzW2luZGV4KzFdID8gdmFycy50YXJnZXRzW2luZGV4KzFdLm9mZnNldFRvcCAtIG9wcy5vZmZzZXRcbiAgICAgICAgICAgICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBpbnNpZGUgPSBhY3RpdmVTaWJsaW5nIHx8IHZhcnMuc2Nyb2xsT2Zmc2V0ID49IHRvcEVkZ2UgJiYgYm90dG9tRWRnZSA+IHZhcnMuc2Nyb2xsT2Zmc2V0O1xuICAgICAgIGlmICggIWlzQWN0aXZlICYmIGluc2lkZSApIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGRyb3BMaW5rICYmICFkcm9wTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICkge1xuICAgICAgICAgIGRyb3BMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBib290c3RyYXBDdXN0b21FdmVudCggJ2FjdGl2YXRlJywgJ3Njcm9sbHNweScsIHZhcnMuaXRlbXNbaW5kZXhdKSk7XG4gICAgICB9IGVsc2UgaWYgKCBpc0FjdGl2ZSAmJiAhaW5zaWRlICkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZiAoZHJvcExpbmsgJiYgZHJvcExpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhaXRlbS5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpLmxlbmd0aCApIHtcbiAgICAgICAgICBkcm9wTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggaXNBY3RpdmUgJiYgaW5zaWRlIHx8ICFpbnNpZGUgJiYgIWlzQWN0aXZlICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zKCkge1xuICAgICAgdXBkYXRlVGFyZ2V0cygpO1xuICAgICAgdmFycy5zY3JvbGxPZmZzZXQgPSB2YXJzLmlzV2luZG93ID8gZ2V0U2Nyb2xsKCkueSA6IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgdmFycy5pdGVtcy5tYXAoZnVuY3Rpb24gKGwsaWR4KXsgcmV0dXJuIHVwZGF0ZUl0ZW0oaWR4KTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhhY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIHNjcm9sbFRhcmdldFthY3Rpb25dKCdzY3JvbGwnLCBzZWxmLnJlZnJlc2gsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgICB3aW5kb3dbYWN0aW9uXSggJ3Jlc2l6ZScsIHNlbGYucmVmcmVzaCwgcGFzc2l2ZUhhbmRsZXIgKTtcbiAgICB9XG4gICAgc2VsZi5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlSXRlbXMoKTtcbiAgICB9O1xuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZUV2ZW50cygpO1xuICAgICAgZGVsZXRlIGVsZW1lbnQuU2Nyb2xsU3B5O1xuICAgIH07XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgICBlbGVtZW50LlNjcm9sbFNweSAmJiBlbGVtZW50LlNjcm9sbFNweS5kaXNwb3NlKCk7XG4gICAgdGFyZ2V0RGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgIG9mZnNldERhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vZmZzZXQnKTtcbiAgICBzcHlUYXJnZXQgPSBxdWVyeUVsZW1lbnQob3B0aW9ucy50YXJnZXQgfHwgdGFyZ2V0RGF0YSk7XG4gICAgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPCBlbGVtZW50LnNjcm9sbEhlaWdodCA/IGVsZW1lbnQgOiB3aW5kb3c7XG4gICAgaWYgKCFzcHlUYXJnZXQpIHsgcmV0dXJuIH1cbiAgICBvcHMudGFyZ2V0ID0gc3B5VGFyZ2V0O1xuICAgIG9wcy5vZmZzZXQgPSBwYXJzZUludChvcHRpb25zLm9mZnNldCB8fCBvZmZzZXREYXRhKSB8fCAxMDtcbiAgICB2YXJzID0ge307XG4gICAgdmFycy5sZW5ndGggPSAwO1xuICAgIHZhcnMuaXRlbXMgPSBbXTtcbiAgICB2YXJzLnRhcmdldHMgPSBbXTtcbiAgICB2YXJzLmlzV2luZG93ID0gc2Nyb2xsVGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgaWYgKCAhZWxlbWVudC5TY3JvbGxTcHkgKSB7XG4gICAgICB0b2dnbGVFdmVudHMoMSk7XG4gICAgfVxuICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIGVsZW1lbnQuU2Nyb2xsU3B5ID0gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFRhYihlbGVtZW50LG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBoZWlnaHREYXRhLFxuICAgICAgdGFicywgZHJvcGRvd24sXG4gICAgICBzaG93Q3VzdG9tRXZlbnQsXG4gICAgICBzaG93bkN1c3RvbUV2ZW50LFxuICAgICAgaGlkZUN1c3RvbUV2ZW50LFxuICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQsXG4gICAgICBuZXh0LFxuICAgICAgdGFic0NvbnRlbnRDb250YWluZXIgPSBmYWxzZSxcbiAgICAgIGFjdGl2ZVRhYixcbiAgICAgIGFjdGl2ZUNvbnRlbnQsXG4gICAgICBuZXh0Q29udGVudCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIGVxdWFsQ29udGVudHMsXG4gICAgICBuZXh0SGVpZ2h0LFxuICAgICAgYW5pbWF0ZUhlaWdodDtcbiAgICBmdW5jdGlvbiB0cmlnZ2VyRW5kKCkge1xuICAgICAgdGFic0NvbnRlbnRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB0YWJzQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzaW5nJyk7XG4gICAgICB0YWJzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyaWdnZXJTaG93KCkge1xuICAgICAgaWYgKHRhYnNDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGlmICggZXF1YWxDb250ZW50cyApIHtcbiAgICAgICAgICB0cmlnZ2VyRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBuZXh0SGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0YWJzQ29udGVudENvbnRhaW5lciwgdHJpZ2dlckVuZCk7XG4gICAgICAgICAgfSw1MCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYnMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNob3duQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvd24nLCAndGFiJywgYWN0aXZlVGFiKTtcbiAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChuZXh0LCBzaG93bkN1c3RvbUV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlckhpZGUoKSB7XG4gICAgICBpZiAodGFic0NvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgYWN0aXZlQ29udGVudC5zdHlsZS5mbG9hdCA9ICdsZWZ0JztcbiAgICAgICAgbmV4dENvbnRlbnQuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodCA9IGFjdGl2ZUNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuICAgICAgc2hvd0N1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ3Nob3cnLCAndGFiJywgYWN0aXZlVGFiKTtcbiAgICAgIGhpZGRlbkN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGRlbicsICd0YWInLCBuZXh0KTtcbiAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChuZXh0LCBzaG93Q3VzdG9tRXZlbnQpO1xuICAgICAgaWYgKCBzaG93Q3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCApIHsgcmV0dXJuOyB9XG4gICAgICBuZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGFjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBpZiAodGFic0NvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgbmV4dEhlaWdodCA9IG5leHRDb250ZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgZXF1YWxDb250ZW50cyA9IG5leHRIZWlnaHQgPT09IGNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgdGFic0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2luZycpO1xuICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjb250YWluZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgYWN0aXZlQ29udGVudC5zdHlsZS5mbG9hdCA9ICcnO1xuICAgICAgICBuZXh0Q29udGVudC5zdHlsZS5mbG9hdCA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKCBuZXh0Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhZGUnKSApIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbmV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKG5leHRDb250ZW50LHRyaWdnZXJTaG93KTtcbiAgICAgICAgfSwyMCk7XG4gICAgICB9IGVsc2UgeyB0cmlnZ2VyU2hvdygpOyB9XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoYWN0aXZlVGFiLCBoaWRkZW5DdXN0b21FdmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYigpIHtcbiAgICAgIHZhciBhY3RpdmVUYWJzID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKSwgYWN0aXZlVGFiO1xuICAgICAgaWYgKCBhY3RpdmVUYWJzLmxlbmd0aCA9PT0gMSAmJiAhYWN0aXZlVGFic1swXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApIHtcbiAgICAgICAgYWN0aXZlVGFiID0gYWN0aXZlVGFic1swXTtcbiAgICAgIH0gZWxzZSBpZiAoIGFjdGl2ZVRhYnMubGVuZ3RoID4gMSApIHtcbiAgICAgICAgYWN0aXZlVGFiID0gYWN0aXZlVGFic1thY3RpdmVUYWJzLmxlbmd0aC0xXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3RpdmVUYWI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZUNvbnRlbnQoKSB7IHJldHVybiBxdWVyeUVsZW1lbnQoZ2V0QWN0aXZlVGFiKCkuZ2V0QXR0cmlidXRlKCdocmVmJykpIH1cbiAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICF0YWJzLmlzQW5pbWF0aW5nICYmIHNlbGYuc2hvdygpO1xuICAgIH1cbiAgICBzZWxmLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBuZXh0ID0gbmV4dCB8fCBlbGVtZW50O1xuICAgICAgaWYgKCFuZXh0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbmV4dENvbnRlbnQgPSBxdWVyeUVsZW1lbnQobmV4dC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgIGFjdGl2ZVRhYiA9IGdldEFjdGl2ZVRhYigpO1xuICAgICAgICBhY3RpdmVDb250ZW50ID0gZ2V0QWN0aXZlQ29udGVudCgpO1xuICAgICAgICBoaWRlQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCggJ2hpZGUnLCAndGFiJywgbmV4dCk7XG4gICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChhY3RpdmVUYWIsIGhpZGVDdXN0b21FdmVudCk7XG4gICAgICAgIGlmIChoaWRlQ3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGFicy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgYWN0aXZlVGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsJ2ZhbHNlJyk7XG4gICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIG5leHQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywndHJ1ZScpO1xuICAgICAgICBpZiAoIGRyb3Bkb3duICkge1xuICAgICAgICAgIGlmICggIWVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUnKSApIHtcbiAgICAgICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7IGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgeyBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhZGUnKSkge1xuICAgICAgICAgIGFjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFjdGl2ZUNvbnRlbnQsIHRyaWdnZXJIaWRlKTtcbiAgICAgICAgfSBlbHNlIHsgdHJpZ2dlckhpZGUoKTsgfVxuICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsY2xpY2tIYW5kbGVyLGZhbHNlKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LlRhYjtcbiAgICB9O1xuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5UYWIgJiYgZWxlbWVudC5UYWIuZGlzcG9zZSgpO1xuICAgIGhlaWdodERhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKTtcbiAgICB0YWJzID0gZWxlbWVudC5jbG9zZXN0KCcubmF2Jyk7XG4gICAgZHJvcGRvd24gPSB0YWJzICYmIHF1ZXJ5RWxlbWVudCgnLmRyb3Bkb3duLXRvZ2dsZScsdGFicyk7XG4gICAgYW5pbWF0ZUhlaWdodCA9ICFzdXBwb3J0VHJhbnNpdGlvbiB8fCAob3B0aW9ucy5oZWlnaHQgPT09IGZhbHNlIHx8IGhlaWdodERhdGEgPT09ICdmYWxzZScpID8gZmFsc2UgOiB0cnVlO1xuICAgIHRhYnMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICBpZiAoICFlbGVtZW50LlRhYiApIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsaWNrSGFuZGxlcixmYWxzZSk7XG4gICAgfVxuICAgIGlmIChhbmltYXRlSGVpZ2h0KSB7IHRhYnNDb250ZW50Q29udGFpbmVyID0gZ2V0QWN0aXZlQ29udGVudCgpLnBhcmVudE5vZGU7IH1cbiAgICBlbGVtZW50LlRhYiA9IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBUb2FzdChlbGVtZW50LG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHRvYXN0LCB0aW1lciA9IDAsXG4gICAgICAgIGFuaW1hdGlvbkRhdGEsXG4gICAgICAgIGF1dG9oaWRlRGF0YSxcbiAgICAgICAgZGVsYXlEYXRhLFxuICAgICAgICBzaG93Q3VzdG9tRXZlbnQsXG4gICAgICAgIGhpZGVDdXN0b21FdmVudCxcbiAgICAgICAgc2hvd25DdXN0b21FdmVudCxcbiAgICAgICAgaGlkZGVuQ3VzdG9tRXZlbnQsXG4gICAgICAgIG9wcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHNob3dDb21wbGV0ZSgpIHtcbiAgICAgIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoICdzaG93aW5nJyApO1xuICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwodG9hc3Qsc2hvd25DdXN0b21FdmVudCk7XG4gICAgICBpZiAob3BzLmF1dG9oaWRlKSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVDb21wbGV0ZSgpIHtcbiAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoICdoaWRlJyApO1xuICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKHRvYXN0LGhpZGRlbkN1c3RvbUV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycgKTtcbiAgICAgIG9wcy5hbmltYXRpb24gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b2FzdCwgaGlkZUNvbXBsZXRlKSA6IGhpZGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwb3NlQ29tcGxldGUoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsc2VsZi5oaWRlLGZhbHNlKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LlRvYXN0O1xuICAgIH1cbiAgICBzZWxmLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodG9hc3QgJiYgIXRvYXN0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbCh0b2FzdCxzaG93Q3VzdG9tRXZlbnQpO1xuICAgICAgICBpZiAoc2hvd0N1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIG9wcy5hbmltYXRpb24gJiYgdG9hc3QuY2xhc3NMaXN0LmFkZCggJ2ZhZGUnICk7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnICk7XG4gICAgICAgIHRvYXN0Lm9mZnNldFdpZHRoO1xuICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCdzaG93aW5nJyApO1xuICAgICAgICBvcHMuYW5pbWF0aW9uID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9hc3QsIHNob3dDb21wbGV0ZSkgOiBzaG93Q29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuaGlkZSA9IGZ1bmN0aW9uIChub1RpbWVyKSB7XG4gICAgICBpZiAodG9hc3QgJiYgdG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKHRvYXN0LGhpZGVDdXN0b21FdmVudCk7XG4gICAgICAgIGlmKGhpZGVDdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfVxuICAgICAgICBub1RpbWVyID8gY2xvc2UoKSA6ICh0aW1lciA9IHNldFRpbWVvdXQoIGNsb3NlLCBvcHMuZGVsYXkpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9wcy5hbmltYXRpb24gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b2FzdCwgZGlzcG9zZUNvbXBsZXRlKSA6IGRpc3Bvc2VDb21wbGV0ZSgpO1xuICAgIH07XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgICBlbGVtZW50LlRvYXN0ICYmIGVsZW1lbnQuVG9hc3QuZGlzcG9zZSgpO1xuICAgIHRvYXN0ID0gZWxlbWVudC5jbG9zZXN0KCcudG9hc3QnKTtcbiAgICBhbmltYXRpb25EYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJyk7XG4gICAgYXV0b2hpZGVEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0b2hpZGUnKTtcbiAgICBkZWxheURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxheScpO1xuICAgIHNob3dDdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdzaG93JywgJ3RvYXN0Jyk7XG4gICAgaGlkZUN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGUnLCAndG9hc3QnKTtcbiAgICBzaG93bkN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ3Nob3duJywgJ3RvYXN0Jyk7XG4gICAgaGlkZGVuQ3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnaGlkZGVuJywgJ3RvYXN0Jyk7XG4gICAgb3BzLmFuaW1hdGlvbiA9IG9wdGlvbnMuYW5pbWF0aW9uID09PSBmYWxzZSB8fCBhbmltYXRpb25EYXRhID09PSAnZmFsc2UnID8gMCA6IDE7XG4gICAgb3BzLmF1dG9oaWRlID0gb3B0aW9ucy5hdXRvaGlkZSA9PT0gZmFsc2UgfHwgYXV0b2hpZGVEYXRhID09PSAnZmFsc2UnID8gMCA6IDE7XG4gICAgb3BzLmRlbGF5ID0gcGFyc2VJbnQob3B0aW9ucy5kZWxheSB8fCBkZWxheURhdGEpIHx8IDUwMDtcbiAgICBpZiAoICFlbGVtZW50LlRvYXN0ICkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2VsZi5oaWRlLGZhbHNlKTtcbiAgICB9XG4gICAgZWxlbWVudC5Ub2FzdCA9IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgdG9vbHRpcCA9IG51bGwsIHRpbWVyID0gMCwgdGl0bGVTdHJpbmcsXG4gICAgICAgIGFuaW1hdGlvbkRhdGEsXG4gICAgICAgIHBsYWNlbWVudERhdGEsXG4gICAgICAgIGRlbGF5RGF0YSxcbiAgICAgICAgY29udGFpbmVyRGF0YSxcbiAgICAgICAgc2hvd0N1c3RvbUV2ZW50LFxuICAgICAgICBzaG93bkN1c3RvbUV2ZW50LFxuICAgICAgICBoaWRlQ3VzdG9tRXZlbnQsXG4gICAgICAgIGhpZGRlbkN1c3RvbUV2ZW50LFxuICAgICAgICBjb250YWluZXJFbGVtZW50LFxuICAgICAgICBjb250YWluZXJEYXRhRWxlbWVudCxcbiAgICAgICAgbW9kYWwsXG4gICAgICAgIG5hdmJhckZpeGVkVG9wLFxuICAgICAgICBuYXZiYXJGaXhlZEJvdHRvbSxcbiAgICAgICAgcGxhY2VtZW50Q2xhc3MsXG4gICAgICAgIG9wcyA9IHt9O1xuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuICAgICAgICAgIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9vbFRpcCgpIHtcbiAgICAgIG9wcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodG9vbHRpcCk7XG4gICAgICB0b29sdGlwID0gbnVsbDsgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVUb29sVGlwKCkge1xuICAgICAgdGl0bGVTdHJpbmcgPSBnZXRUaXRsZSgpO1xuICAgICAgaWYgKCB0aXRsZVN0cmluZyApIHtcbiAgICAgICAgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAob3BzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgdmFyIHRvb2x0aXBNYXJrdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b29sdGlwTWFya3VwLmlubmVySFRNTCA9IG9wcy50ZW1wbGF0ZS50cmltKCk7XG4gICAgICAgICAgdG9vbHRpcC5jbGFzc05hbWUgPSB0b29sdGlwTWFya3VwLmZpcnN0Q2hpbGQuY2xhc3NOYW1lO1xuICAgICAgICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gdG9vbHRpcE1hcmt1cC5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICBxdWVyeUVsZW1lbnQoJy50b29sdGlwLWlubmVyJyx0b29sdGlwKS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZy50cmltKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRvb2x0aXBBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvb2x0aXBBcnJvdy5jbGFzc0xpc3QuYWRkKCdhcnJvdycpO1xuICAgICAgICAgIHRvb2x0aXAuYXBwZW5kQ2hpbGQodG9vbHRpcEFycm93KTtcbiAgICAgICAgICB2YXIgdG9vbHRpcElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdG9vbHRpcElubmVyLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAtaW5uZXInKTtcbiAgICAgICAgICB0b29sdGlwLmFwcGVuZENoaWxkKHRvb2x0aXBJbm5lcik7XG4gICAgICAgICAgdG9vbHRpcElubmVyLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdyb2xlJywndG9vbHRpcCcpO1xuICAgICAgICAhdG9vbHRpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvb2x0aXAnKSAmJiB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcbiAgICAgICAgIXRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKG9wcy5hbmltYXRpb24pICYmIHRvb2x0aXAuY2xhc3NMaXN0LmFkZChvcHMuYW5pbWF0aW9uKTtcbiAgICAgICAgIXRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYWNlbWVudENsYXNzKSAmJiB0b29sdGlwLmNsYXNzTGlzdC5hZGQocGxhY2VtZW50Q2xhc3MpO1xuICAgICAgICBvcHMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXApO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUb29sdGlwKCkge1xuICAgICAgc3R5bGVUaXAoZWxlbWVudCwgdG9vbHRpcCwgb3BzLnBsYWNlbWVudCwgb3BzLmNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dUb29sdGlwKCkge1xuICAgICAgIXRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgJiYgKCB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b3VjaEhhbmRsZXIoZSl7XG4gICAgICBpZiAoIHRvb2x0aXAgJiYgdG9vbHRpcC5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgPT09IGVsZW1lbnQgfHwgZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIDsgZWxzZSB7XG4gICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVBY3Rpb24oYWN0aW9uKXtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIGRvY3VtZW50W2FjdGlvbl0oICd0b3VjaHN0YXJ0JywgdG91Y2hIYW5kbGVyLCBwYXNzaXZlSGFuZGxlciApO1xuICAgICAgd2luZG93W2FjdGlvbl0oICdyZXNpemUnLCBzZWxmLmhpZGUsIHBhc3NpdmVIYW5kbGVyICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dBY3Rpb24oKSB7XG4gICAgICB0b2dnbGVBY3Rpb24oMSk7XG4gICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2hvd25DdXN0b21FdmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVBY3Rpb24oKSB7XG4gICAgICB0b2dnbGVBY3Rpb24oKTtcbiAgICAgIHJlbW92ZVRvb2xUaXAoKTtcbiAgICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRkZW5DdXN0b21FdmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhhY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGFjdGlvbiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIGVsZW1lbnRbYWN0aW9uXShtb3VzZUNsaWNrRXZlbnRzLmRvd24sIHNlbGYuc2hvdyxmYWxzZSk7XG4gICAgICBlbGVtZW50W2FjdGlvbl0obW91c2VIb3ZlckV2ZW50c1swXSwgc2VsZi5zaG93LGZhbHNlKTtcbiAgICAgIGVsZW1lbnRbYWN0aW9uXShtb3VzZUhvdmVyRXZlbnRzWzFdLCBzZWxmLmhpZGUsZmFsc2UpO1xuICAgIH1cbiAgICBzZWxmLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0b29sdGlwID09PSBudWxsKSB7XG4gICAgICAgICAgZGlzcGF0Y2hDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3dDdXN0b21FdmVudCk7XG4gICAgICAgICAgaWYgKHNob3dDdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIGlmKGNyZWF0ZVRvb2xUaXAoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRvb2x0aXAoKTtcbiAgICAgICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgICAgICAhIW9wcy5hbmltYXRpb24gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b29sdGlwLCBzaG93QWN0aW9uKSA6IHNob3dBY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDIwICk7XG4gICAgfTtcbiAgICBzZWxmLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0b29sdGlwICYmIHRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICBkaXNwYXRjaEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZUN1c3RvbUV2ZW50KTtcbiAgICAgICAgICBpZiAoaGlkZUN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgISFvcHMuYW5pbWF0aW9uID8gZW11bGF0ZVRyYW5zaXRpb25FbmQodG9vbHRpcCwgaGlkZUFjdGlvbikgOiBoaWRlQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIG9wcy5kZWxheSk7XG4gICAgfTtcbiAgICBzZWxmLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdG9vbHRpcCkgeyBzZWxmLnNob3coKTsgfVxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgICBzZWxmLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVFdmVudHMoKTtcbiAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKSk7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuICAgICAgZGVsZXRlIGVsZW1lbnQuVG9vbHRpcDtcbiAgICB9O1xuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5Ub29sdGlwICYmIGVsZW1lbnQuVG9vbHRpcC5kaXNwb3NlKCk7XG4gICAgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnKTtcbiAgICBkZWxheURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxheScpO1xuICAgIGNvbnRhaW5lckRhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluZXInKTtcbiAgICBzaG93Q3VzdG9tRXZlbnQgPSBib290c3RyYXBDdXN0b21FdmVudCgnc2hvdycsICd0b29sdGlwJyk7XG4gICAgc2hvd25DdXN0b21FdmVudCA9IGJvb3RzdHJhcEN1c3RvbUV2ZW50KCdzaG93bicsICd0b29sdGlwJyk7XG4gICAgaGlkZUN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGUnLCAndG9vbHRpcCcpO1xuICAgIGhpZGRlbkN1c3RvbUV2ZW50ID0gYm9vdHN0cmFwQ3VzdG9tRXZlbnQoJ2hpZGRlbicsICd0b29sdGlwJyk7XG4gICAgY29udGFpbmVyRWxlbWVudCA9IHF1ZXJ5RWxlbWVudChvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyRGF0YUVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoY29udGFpbmVyRGF0YSk7XG4gICAgbW9kYWwgPSBlbGVtZW50LmNsb3Nlc3QoJy5tb2RhbCcpO1xuICAgIG5hdmJhckZpeGVkVG9wID0gZWxlbWVudC5jbG9zZXN0KCcuZml4ZWQtdG9wJyk7XG4gICAgbmF2YmFyRml4ZWRCb3R0b20gPSBlbGVtZW50LmNsb3Nlc3QoJy5maXhlZC1ib3R0b20nKTtcbiAgICBvcHMuYW5pbWF0aW9uID0gb3B0aW9ucy5hbmltYXRpb24gJiYgb3B0aW9ucy5hbmltYXRpb24gIT09ICdmYWRlJyA/IG9wdGlvbnMuYW5pbWF0aW9uIDogYW5pbWF0aW9uRGF0YSB8fCAnZmFkZSc7XG4gICAgb3BzLnBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50ID8gb3B0aW9ucy5wbGFjZW1lbnQgOiBwbGFjZW1lbnREYXRhIHx8ICd0b3AnO1xuICAgIG9wcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGUgPyBvcHRpb25zLnRlbXBsYXRlIDogbnVsbDtcbiAgICBvcHMuZGVsYXkgPSBwYXJzZUludChvcHRpb25zLmRlbGF5IHx8IGRlbGF5RGF0YSkgfHwgMjAwO1xuICAgIG9wcy5jb250YWluZXIgPSBjb250YWluZXJFbGVtZW50ID8gY29udGFpbmVyRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGFpbmVyRGF0YUVsZW1lbnQgPyBjb250YWluZXJEYXRhRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRUb3AgPyBuYXZiYXJGaXhlZFRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRCb3R0b20gPyBuYXZiYXJGaXhlZEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kYWwgPyBtb2RhbCA6IGRvY3VtZW50LmJvZHk7XG4gICAgcGxhY2VtZW50Q2xhc3MgPSBcImJzLXRvb2x0aXAtXCIgKyAob3BzLnBsYWNlbWVudCk7XG4gICAgdGl0bGVTdHJpbmcgPSBnZXRUaXRsZSgpO1xuICAgIGlmICggIXRpdGxlU3RyaW5nICkgeyByZXR1cm47IH1cbiAgICBpZiAoIWVsZW1lbnQuVG9vbHRpcCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLHRpdGxlU3RyaW5nKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgdG9nZ2xlRXZlbnRzKDEpO1xuICAgIH1cbiAgICBlbGVtZW50LlRvb2x0aXAgPSBzZWxmO1xuICB9XG5cbiAgdmFyIGNvbXBvbmVudHNJbml0ID0ge307XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZURhdGFBUEkoIENvbnN0cnVjdG9yLCBjb2xsZWN0aW9uICl7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5tYXAoZnVuY3Rpb24gKHgpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHgpOyB9KTtcbiAgfVxuICBmdW5jdGlvbiBpbml0Q2FsbGJhY2sobG9va1VwKXtcbiAgICBsb29rVXAgPSBsb29rVXAgfHwgZG9jdW1lbnQ7XG4gICAgZm9yICh2YXIgY29tcG9uZW50IGluIGNvbXBvbmVudHNJbml0KSB7XG4gICAgICBpbml0aWFsaXplRGF0YUFQSSggY29tcG9uZW50c0luaXRbY29tcG9uZW50XVswXSwgbG9va1VwLnF1ZXJ5U2VsZWN0b3JBbGwgKGNvbXBvbmVudHNJbml0W2NvbXBvbmVudF1bMV0pICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50c0luaXQuQWxlcnQgPSBbIEFsZXJ0LCAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ107XG4gIGNvbXBvbmVudHNJbml0LkJ1dHRvbiA9IFsgQnV0dG9uLCAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScgXTtcbiAgY29tcG9uZW50c0luaXQuQ2Fyb3VzZWwgPSBbIENhcm91c2VsLCAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJyBdO1xuICBjb21wb25lbnRzSW5pdC5Db2xsYXBzZSA9IFsgQ29sbGFwc2UsICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScgXTtcbiAgY29tcG9uZW50c0luaXQuRHJvcGRvd24gPSBbIERyb3Bkb3duLCAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXTtcbiAgY29tcG9uZW50c0luaXQuTW9kYWwgPSBbIE1vZGFsLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nIF07XG4gIGNvbXBvbmVudHNJbml0LlBvcG92ZXIgPSBbIFBvcG92ZXIsICdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdLFtkYXRhLXRpcD1cInBvcG92ZXJcIl0nIF07XG4gIGNvbXBvbmVudHNJbml0LlNjcm9sbFNweSA9IFsgU2Nyb2xsU3B5LCAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJyBdO1xuICBjb21wb25lbnRzSW5pdC5UYWIgPSBbIFRhYiwgJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScgXTtcbiAgY29tcG9uZW50c0luaXQuVG9hc3QgPSBbIFRvYXN0LCAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJyBdO1xuICBjb21wb25lbnRzSW5pdC5Ub29sdGlwID0gWyBUb29sdGlwLCAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXSxbZGF0YS10aXA9XCJ0b29sdGlwXCJdJyBdO1xuICBkb2N1bWVudC5ib2R5ID8gaW5pdENhbGxiYWNrKCkgOiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIGluaXRXcmFwcGVyKCl7XG4gIFx0aW5pdENhbGxiYWNrKCk7XG4gIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsaW5pdFdyYXBwZXIsZmFsc2UpO1xuICB9LCBmYWxzZSApO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnREYXRhQVBJKCBDb25zdHJ1Y3Rvck5hbWUsIGNvbGxlY3Rpb24gKXtcbiAgICBBcnJheS5mcm9tKGNvbGxlY3Rpb24pLm1hcChmdW5jdGlvbiAoeCl7IHJldHVybiB4W0NvbnN0cnVjdG9yTmFtZV0uZGlzcG9zZSgpOyB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVEYXRhQVBJKGxvb2tVcCkge1xuICAgIGxvb2tVcCA9IGxvb2tVcCB8fCBkb2N1bWVudDtcbiAgICBmb3IgKHZhciBjb21wb25lbnQgaW4gY29tcG9uZW50c0luaXQpIHtcbiAgICAgIHJlbW92ZUVsZW1lbnREYXRhQVBJKCBjb21wb25lbnQsIGxvb2tVcC5xdWVyeVNlbGVjdG9yQWxsIChjb21wb25lbnRzSW5pdFtjb21wb25lbnRdWzFdKSApO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gXCIzLjAuMTBcIjtcblxuICB2YXIgaW5kZXggPSB7XG4gICAgQWxlcnQ6IEFsZXJ0LFxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIENhcm91c2VsOiBDYXJvdXNlbCxcbiAgICBDb2xsYXBzZTogQ29sbGFwc2UsXG4gICAgRHJvcGRvd246IERyb3Bkb3duLFxuICAgIE1vZGFsOiBNb2RhbCxcbiAgICBQb3BvdmVyOiBQb3BvdmVyLFxuICAgIFNjcm9sbFNweTogU2Nyb2xsU3B5LFxuICAgIFRhYjogVGFiLFxuICAgIFRvYXN0OiBUb2FzdCxcbiAgICBUb29sdGlwOiBUb29sdGlwLFxuICAgIGluaXRDYWxsYmFjazogaW5pdENhbGxiYWNrLFxuICAgIHJlbW92ZURhdGFBUEk6IHJlbW92ZURhdGFBUEksXG4gICAgY29tcG9uZW50c0luaXQ6IGNvbXBvbmVudHNJbml0LFxuICAgIFZlcnNpb246IHZlcnNpb25cbiAgfTtcblxuICByZXR1cm4gaW5kZXg7XG5cbn0pKSk7XG4iLCIvLyBnZXQgc3VjY2Vzc2Z1bCBjb250cm9sIGZyb20gZm9ybSBhbmQgYXNzZW1ibGUgaW50byBvYmplY3Rcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjEzLjJcblxuLy8gdHlwZXMgd2hpY2ggaW5kaWNhdGUgYSBzdWJtaXQgYWN0aW9uIGFuZCBhcmUgbm90IHN1Y2Nlc3NmdWwgY29udHJvbHNcbi8vIHRoZXNlIHdpbGwgYmUgaWdub3JlZFxudmFyIGtfcl9zdWJtaXR0ZXIgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2k7XG5cbi8vIG5vZGUgbmFtZXMgd2hpY2ggY291bGQgYmUgc3VjY2Vzc2Z1bCBjb250cm9sc1xudmFyIGtfcl9zdWNjZXNzX2NvbnRybHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbi8vIE1hdGNoZXMgYnJhY2tldCBub3RhdGlvbi5cbnZhciBicmFja2V0cyA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuLy8gc2VyaWFsaXplcyBmb3JtIGZpZWxkc1xuLy8gQHBhcmFtIGZvcm0gTVVTVCBiZSBhbiBIVE1MRm9ybSBlbGVtZW50XG4vLyBAcGFyYW0gb3B0aW9ucyBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0byBjb25maWd1cmUgdGhlIHNlcmlhbGl6YXRpb24uIERlZmF1bHQgb3V0cHV0XG4vLyB3aXRoIG5vIG9wdGlvbnMgc3BlY2lmaWVkIGlzIGEgdXJsIGVuY29kZWQgc3RyaW5nXG4vLyAgICAtIGhhc2g6IFt0cnVlIHwgZmFsc2VdIENvbmZpZ3VyZSB0aGUgb3V0cHV0IHR5cGUuIElmIHRydWUsIHRoZSBvdXRwdXQgd2lsbFxuLy8gICAgYmUgYSBqcyBvYmplY3QuXG4vLyAgICAtIHNlcmlhbGl6ZXI6IFtmdW5jdGlvbl0gT3B0aW9uYWwgc2VyaWFsaXplciBmdW5jdGlvbiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvbmUuXG4vLyAgICBUaGUgZnVuY3Rpb24gdGFrZXMgMyBhcmd1bWVudHMgKHJlc3VsdCwga2V5LCB2YWx1ZSkgYW5kIHNob3VsZCByZXR1cm4gbmV3IHJlc3VsdFxuLy8gICAgaGFzaCBhbmQgdXJsIGVuY29kZWQgc3RyIHNlcmlhbGl6ZXJzIGFyZSBwcm92aWRlZCB3aXRoIHRoaXMgbW9kdWxlXG4vLyAgICAtIGRpc2FibGVkOiBbdHJ1ZSB8IGZhbHNlXS4gSWYgdHJ1ZSBzZXJpYWxpemUgZGlzYWJsZWQgZmllbGRzLlxuLy8gICAgLSBlbXB0eTogW3RydWUgfCBmYWxzZV0uIElmIHRydWUgc2VyaWFsaXplIGVtcHR5IGZpZWxkc1xuZnVuY3Rpb24gc2VyaWFsaXplKGZvcm0sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgaGFzaDogISFvcHRpb25zIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdGlvbnMuaGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMuaGFzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IChvcHRpb25zLmhhc2gpID8ge30gOiAnJztcbiAgICB2YXIgc2VyaWFsaXplciA9IG9wdGlvbnMuc2VyaWFsaXplciB8fCAoKG9wdGlvbnMuaGFzaCkgPyBoYXNoX3NlcmlhbGl6ZXIgOiBzdHJfc2VyaWFsaXplKTtcblxuICAgIHZhciBlbGVtZW50cyA9IGZvcm0gJiYgZm9ybS5lbGVtZW50cyA/IGZvcm0uZWxlbWVudHMgOiBbXTtcblxuICAgIC8vT2JqZWN0IHN0b3JlIGVhY2ggcmFkaW8gYW5kIHNldCBpZiBpdCdzIGVtcHR5IG9yIG5vdFxuICAgIHZhciByYWRpb19zdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICBmb3IgKHZhciBpPTAgOyBpPGVsZW1lbnRzLmxlbmd0aCA7ICsraSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICAgIC8vIGluZ29yZSBkaXNhYmxlZCBmaWVsZHNcbiAgICAgICAgaWYgKCghb3B0aW9ucy5kaXNhYmxlZCAmJiBlbGVtZW50LmRpc2FibGVkKSB8fCAhZWxlbWVudC5uYW1lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZ25vcmUgYW55aHRpbmcgdGhhdCBpcyBub3QgY29uc2lkZXJlZCBhIHN1Y2Nlc3MgZmllbGRcbiAgICAgICAgaWYgKCFrX3Jfc3VjY2Vzc19jb250cmxzLnRlc3QoZWxlbWVudC5ub2RlTmFtZSkgfHxcbiAgICAgICAgICAgIGtfcl9zdWJtaXR0ZXIudGVzdChlbGVtZW50LnR5cGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgIHZhciB2YWwgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIC8vIHdlIGNhbid0IGp1c3QgdXNlIGVsZW1lbnQudmFsdWUgZm9yIGNoZWNrYm94ZXMgY2F1c2Ugc29tZSBicm93c2VycyBsaWUgdG8gdXNcbiAgICAgICAgLy8gdGhleSBzYXkgXCJvblwiIGZvciB2YWx1ZSB3aGVuIHRoZSBib3ggaXNuJ3QgY2hlY2tlZFxuICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpICYmICFlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHdhbnQgZW1wdHkgZWxlbWVudHNcbiAgICAgICAgaWYgKG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgICAgIC8vIGZvciBjaGVja2JveFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiAhZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciByYWRpb1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGlmICghcmFkaW9fc3RvcmVbZWxlbWVudC5uYW1lXSAmJiAhZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvX3N0b3JlW2VsZW1lbnQubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvX3N0b3JlW2VsZW1lbnQubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgb3B0aW9ucyBlbXB0eSBpcyB0cnVlLCBjb250aW51ZSBvbmx5IGlmIGl0cyByYWRpb1xuICAgICAgICAgICAgaWYgKHZhbCA9PSB1bmRlZmluZWQgJiYgZWxlbWVudC50eXBlID09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHZhbHVlLWxlc3MgZmllbGRzIGFyZSBpZ25vcmVkIHVubGVzcyBvcHRpb25zLmVtcHR5IGlzIHRydWVcbiAgICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdWx0aSBzZWxlY3QgYm94ZXNcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgICAgIHZhbCA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9IGVsZW1lbnQub3B0aW9ucztcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkT3B0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaj0wIDsgajxzZWxlY3RPcHRpb25zLmxlbmd0aCA7ICsraikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBzZWxlY3RPcHRpb25zW2pdO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvd2VkRW1wdHkgPSBvcHRpb25zLmVtcHR5ICYmICFvcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1ZhbHVlID0gKG9wdGlvbi52YWx1ZSB8fCBhbGxvd2VkRW1wdHkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgJiYgaGFzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZE9wdGlvbnMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHVzaW5nIGEgaGFzaCBzZXJpYWxpemVyIGJlIHN1cmUgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IG5vdGF0aW9uIGZvciBhbiBhcnJheSBpbiB0aGUgbXVsdGktc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRleHQuIEhlcmUgdGhlIG5hbWUgYXR0cmlidXRlIG9uIHRoZSBzZWxlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBtaWdodCBiZSBtaXNzaW5nIHRoZSB0cmFpbGluZyBicmFja2V0IHBhaXIuIEJvdGggbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJmb29cIiBhbmQgXCJmb29bXVwiIHNob3VsZCBiZSBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc2ggJiYga2V5LnNsaWNlKGtleS5sZW5ndGggLSAyKSAhPT0gJ1tdJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSArICdbXScsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXJpYWxpemUgaWYgbm8gc2VsZWN0ZWQgb3B0aW9ucyBhbmQgb3B0aW9ucy5lbXB0eSBpcyB0cnVlXG4gICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWRPcHRpb25zICYmIG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzZXJpYWxpemVyKHJlc3VsdCwga2V5LCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gc2VyaWFsaXplcihyZXN1bHQsIGtleSwgdmFsKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYWxsIGVtcHR5IHJhZGlvIGJ1dHRvbnMgYW5kIHNlcmlhbGl6ZSB0aGVtIHdpdGgga2V5PVwiXCJcbiAgICBpZiAob3B0aW9ucy5lbXB0eSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmFkaW9fc3RvcmUpIHtcbiAgICAgICAgICAgIGlmICghcmFkaW9fc3RvcmVba2V5XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlcmlhbGl6ZXIocmVzdWx0LCBrZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlX2tleXMoc3RyaW5nKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcHJlZml4ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZHJlbiA9IG5ldyBSZWdFeHAoYnJhY2tldHMpO1xuICAgIHZhciBtYXRjaCA9IHByZWZpeC5leGVjKHN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKG1hdGNoWzFdKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gY2hpbGRyZW4uZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xuICAgICAgICBrZXlzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBoYXNoX2Fzc2lnbihyZXN1bHQsIGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgdmFyIGJldHdlZW4gPSBrZXkubWF0Y2goL15cXFsoLis/KVxcXSQvKTtcblxuICAgIGlmIChrZXkgPT09ICdbXScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IFtdO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGhhc2hfYXNzaWduKG51bGwsIGtleXMsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1pZ2h0IGJlIHRoZSByZXN1bHQgb2YgYmFkIG5hbWUgYXR0cmlidXRlcyBsaWtlIFwiW11bZm9vXVwiLFxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBvcmlnaW5hbCBgcmVzdWx0YCBvYmplY3Qgd2lsbCBhbHJlYWR5IGJlXG4gICAgICAgICAgICAvLyBhc3NpZ25lZCB0byBhbiBvYmplY3QgbGl0ZXJhbC4gUmF0aGVyIHRoYW4gY29lcmNlIHRoZSBvYmplY3QgdG9cbiAgICAgICAgICAgIC8vIGFuIGFycmF5LCBvciBjYXVzZSBhbiBleGNlcHRpb24gdGhlIGF0dHJpYnV0ZSBcIl92YWx1ZXNcIiBpc1xuICAgICAgICAgICAgLy8gYXNzaWduZWQgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXN1bHQuX3ZhbHVlcyA9IHJlc3VsdC5fdmFsdWVzIHx8IFtdO1xuICAgICAgICAgICAgcmVzdWx0Ll92YWx1ZXMucHVzaChoYXNoX2Fzc2lnbihudWxsLCBrZXlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBLZXkgaXMgYW4gYXR0cmlidXRlIG5hbWUgYW5kIGNhbiBiZSBhc3NpZ25lZCBkaXJlY3RseS5cbiAgICBpZiAoIWJldHdlZW4pIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBoYXNoX2Fzc2lnbihyZXN1bHRba2V5XSwga2V5cywgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGJldHdlZW5bMV07XG4gICAgICAgIC8vICt2YXIgY29udmVydHMgdGhlIHZhcmlhYmxlIGludG8gYSBudW1iZXJcbiAgICAgICAgLy8gYmV0dGVyIHRoYW4gcGFyc2VJbnQgYmVjYXVzZSBpdCBkb2Vzbid0IHRydW5jYXRlIGF3YXkgdHJhaWxpbmdcbiAgICAgICAgLy8gbGV0dGVycyBhbmQgYWN0dWFsbHkgZmFpbHMgaWYgd2hvbGUgdGhpbmcgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIHZhciBpbmRleCA9ICtzdHJpbmc7XG5cbiAgICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlcnMgYmV0d2VlbiB0aGUgYnJhY2tldHMgaXMgbm90IGEgbnVtYmVyIGl0IGlzIGFuXG4gICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCBjYW4gYmUgYXNzaWduZWQgZGlyZWN0bHkuXG4gICAgICAgIGlmIChpc05hTihpbmRleCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdFtzdHJpbmddID0gaGFzaF9hc3NpZ24ocmVzdWx0W3N0cmluZ10sIGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBbXTtcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBoYXNoX2Fzc2lnbihyZXN1bHRbaW5kZXhdLCBrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBPYmplY3QvaGFzaCBlbmNvZGluZyBzZXJpYWxpemVyLlxuZnVuY3Rpb24gaGFzaF9zZXJpYWxpemVyKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBtYXRjaGVzID0ga2V5Lm1hdGNoKGJyYWNrZXRzKTtcblxuICAgIC8vIEhhcyBicmFja2V0cz8gVXNlIHRoZSByZWN1cnNpdmUgYXNzaWdubWVudCBmdW5jdGlvbiB0byB3YWxrIHRoZSBrZXlzLFxuICAgIC8vIGNvbnN0cnVjdCBhbnkgbWlzc2luZyBvYmplY3RzIGluIHRoZSByZXN1bHQgdHJlZSBhbmQgbWFrZSB0aGUgYXNzaWdubWVudFxuICAgIC8vIGF0IHRoZSBlbmQgb2YgdGhlIGNoYWluLlxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhciBrZXlzID0gcGFyc2Vfa2V5cyhrZXkpO1xuICAgICAgICBoYXNoX2Fzc2lnbihyZXN1bHQsIGtleXMsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vbiBicmFja2V0IG5vdGF0aW9uIGNhbiBtYWtlIGFzc2lnbm1lbnRzIGRpcmVjdGx5LlxuICAgICAgICB2YXIgZXhpc3RpbmcgPSByZXN1bHRba2V5XTtcblxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzIGJlZW4gYXNzaWduZWQgYWxyZWFkeSAoZm9yIGluc3RhbmNlIHdoZW4gYSByYWRpbyBhbmRcbiAgICAgICAgLy8gYSBjaGVja2JveCBoYXZlIHRoZSBzYW1lIG5hbWUgYXR0cmlidXRlKSBjb252ZXJ0IHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAvLyBpbnRvIGFuIGFycmF5IGJlZm9yZSBwdXNoaW5nIGludG8gaXQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5PVEU6IElmIHRoaXMgcmVxdWlyZW1lbnQgd2VyZSByZW1vdmVkIGFsbCBoYXNoIGNyZWF0aW9uIGFuZFxuICAgICAgICAvLyBhc3NpZ25tZW50IGNvdWxkIGdvIHRocm91Z2ggYGhhc2hfYXNzaWduYC5cbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhpc3RpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbIGV4aXN0aW5nIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHVybGZvcm0gZW5jb2Rpbmcgc2VyaWFsaXplclxuZnVuY3Rpb24gc3RyX3NlcmlhbGl6ZShyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBlbmNvZGUgbmV3bGluZXMgYXMgXFxyXFxuIGNhdXNlIHRoZSBodG1sIHNwZWMgc2F5cyBzb1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKFxccik/XFxuL2csICdcXHJcXG4nKTtcbiAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAvLyBzcGFjZXMgc2hvdWxkIGJlICcrJyByYXRoZXIgdGhhbiAnJTIwJy5cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xuICAgIHJldHVybiByZXN1bHQgKyAocmVzdWx0ID8gJyYnIDogJycpICsgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXJpYWxpemU7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5HTGlnaHRib3g9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuKGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKHQpfWZ1bmN0aW9uIHQoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIG49dFtpXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fWZ1bmN0aW9uIG4oZSx0LG4pe3JldHVybiB0JiZpKGUucHJvdG90eXBlLHQpLG4mJmkoZSxuKSxlfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGwoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGwoZSx0KTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PWkmJmUuY29uc3RydWN0b3ImJihpPWUuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PWl8fFwiU2V0XCI9PT1pKXJldHVybiBBcnJheS5mcm9tKGUpO2lmKFwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSlyZXR1cm4gbChlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBsKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciBpPTAsbj1uZXcgQXJyYXkodCk7aTx0O2krKyluW2ldPWVbaV07cmV0dXJuIG59dmFyIG89RGF0ZS5ub3coKTtmdW5jdGlvbiByKCl7dmFyIGU9e30sdD0hMCxpPTAsbj1hcmd1bWVudHMubGVuZ3RoO1wiW29iamVjdCBCb29sZWFuXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50c1swXSkmJih0PWFyZ3VtZW50c1swXSxpKyspO2Zvcih2YXIgcz1mdW5jdGlvbihpKXtmb3IodmFyIG4gaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxuKSYmKHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaVtuXSk/ZVtuXT1yKCEwLGVbbl0saVtuXSk6ZVtuXT1pW25dKX07aTxuO2krKyl7dmFyIGw9YXJndW1lbnRzW2ldO3MobCl9cmV0dXJuIGV9ZnVuY3Rpb24gYShlLHQpe2lmKChBKGUpfHxlPT09d2luZG93fHxlPT09ZG9jdW1lbnQpJiYoZT1bZV0pLE8oZSl8fFAoZSl8fChlPVtlXSksMCE9WChlKSlpZihPKGUpJiYhUChlKSlmb3IodmFyIGk9ZS5sZW5ndGgsbj0wO248aSYmITEhPT10LmNhbGwoZVtuXSxlW25dLG4sZSk7bisrKTtlbHNlIGlmKFAoZSkpZm9yKHZhciBzIGluIGUpaWYoSShlLHMpJiYhMT09PXQuY2FsbChlW3NdLGVbc10scyxlKSlicmVha31mdW5jdGlvbiBoKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj1lW29dPWVbb118fFtdLHM9e2FsbDpuLGV2dDpudWxsLGZvdW5kOm51bGx9O3JldHVybiB0JiZpJiZYKG4pPjAmJmEobiwoZnVuY3Rpb24oZSxuKXtpZihlLmV2ZW50TmFtZT09dCYmZS5mbi50b1N0cmluZygpPT1pLnRvU3RyaW5nKCkpcmV0dXJuIHMuZm91bmQ9ITAscy5ldnQ9biwhMX0pKSxzfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGk9dC5vbkVsZW1lbnQsbj10LndpdGhDYWxsYmFjayxzPXQuYXZvaWREdXBsaWNhdGUsbD12b2lkIDA9PT1zfHxzLG89dC5vbmNlLHI9dm9pZCAwIT09byYmbyxjPXQudXNlQ2FwdHVyZSxkPXZvaWQgMCE9PWMmJmMsdT1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCxnPWl8fFtdO2Z1bmN0aW9uIHYoZSl7QyhuKSYmbi5jYWxsKHUsZSx0aGlzKSxyJiZ2LmRlc3Ryb3koKX1yZXR1cm4gRShnKSYmKGc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChnKSksdi5kZXN0cm95PWZ1bmN0aW9uKCl7YShnLChmdW5jdGlvbih0KXt2YXIgaT1oKHQsZSx2KTtpLmZvdW5kJiZpLmFsbC5zcGxpY2UoaS5ldnQsMSksdC5yZW1vdmVFdmVudExpc3RlbmVyJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx2LGQpfSkpfSxhKGcsKGZ1bmN0aW9uKHQpe3ZhciBpPWgodCxlLHYpOyh0LmFkZEV2ZW50TGlzdGVuZXImJmwmJiFpLmZvdW5kfHwhbCkmJih0LmFkZEV2ZW50TGlzdGVuZXIoZSx2LGQpLGkuYWxsLnB1c2goe2V2ZW50TmFtZTplLGZuOnZ9KSl9KSksdn1mdW5jdGlvbiBkKGUsdCl7YSh0LnNwbGl0KFwiIFwiKSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pKX1mdW5jdGlvbiB1KGUsdCl7YSh0LnNwbGl0KFwiIFwiKSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pKX1mdW5jdGlvbiBnKGUsdCl7cmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpfWZ1bmN0aW9uIHYoZSx0KXtmb3IoO2UhPT1kb2N1bWVudC5ib2R5Oyl7aWYoIShlPWUucGFyZW50RWxlbWVudCkpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5tYXRjaGVzP2UubWF0Y2hlcyh0KTplLm1zTWF0Y2hlc1NlbGVjdG9yKHQpKXJldHVybiBlfX1mdW5jdGlvbiBmKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZighZXx8XCJcIj09PXQpcmV0dXJuITE7aWYoXCJub25lXCI9PXQpcmV0dXJuIEMoaSkmJmkoKSwhMTt2YXIgbj1TKCkscz10LnNwbGl0KFwiIFwiKTthKHMsKGZ1bmN0aW9uKHQpe2QoZSxcImdcIit0KX0pKSxjKG4se29uRWxlbWVudDplLGF2b2lkRHVwbGljYXRlOiExLG9uY2U6ITAsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsdCl7YShzLChmdW5jdGlvbihlKXt1KHQsXCJnXCIrZSl9KSksQyhpKSYmaSgpfX0pfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwiXCI7aWYoXCJcIj09dClyZXR1cm4gZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJcIixlLnN0eWxlLk1velRyYW5zZm9ybT1cIlwiLGUuc3R5bGUubXNUcmFuc2Zvcm09XCJcIixlLnN0eWxlLk9UcmFuc2Zvcm09XCJcIixlLnN0eWxlLnRyYW5zZm9ybT1cIlwiLCExO2Uuc3R5bGUud2Via2l0VHJhbnNmb3JtPXQsZS5zdHlsZS5Nb3pUcmFuc2Zvcm09dCxlLnN0eWxlLm1zVHJhbnNmb3JtPXQsZS5zdHlsZS5PVHJhbnNmb3JtPXQsZS5zdHlsZS50cmFuc2Zvcm09dH1mdW5jdGlvbiBtKGUpe2Uuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJ9ZnVuY3Rpb24geShlKXtlLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9ZnVuY3Rpb24gYihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihpLmlubmVySFRNTD1lO2kuZmlyc3RDaGlsZDspdC5hcHBlbmRDaGlsZChpLmZpcnN0Q2hpbGQpO3JldHVybiB0fWZ1bmN0aW9uIHgoKXtyZXR1cm57d2lkdGg6d2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxoZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fHxkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodH19ZnVuY3Rpb24gUygpe3ZhciBlLHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLGk9e2FuaW1hdGlvbjpcImFuaW1hdGlvbmVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kXCIsTW96QW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCIsV2Via2l0QW5pbWF0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2ZvcihlIGluIGkpaWYodm9pZCAwIT09dC5zdHlsZVtlXSlyZXR1cm4gaVtlXX1mdW5jdGlvbiB3KGUsdCxpLG4pe2lmKGUoKSl0KCk7ZWxzZXt2YXIgcztpfHwoaT0xMDApO3ZhciBsPXNldEludGVydmFsKChmdW5jdGlvbigpe2UoKSYmKGNsZWFySW50ZXJ2YWwobCkscyYmY2xlYXJUaW1lb3V0KHMpLHQoKSl9KSxpKTtuJiYocz1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobCl9KSxuKSl9fWZ1bmN0aW9uIFQoZSx0LGkpe2lmKE0oZSkpY29uc29sZS5lcnJvcihcIkluamVjdCB2aWRlb3MgYXBpIGVycm9yXCIpO2Vsc2V7dmFyIG47aWYoQyh0KSYmKGk9dCx0PSExKSwtMSE9PWUuaW5kZXhPZihcIi5jc3NcIikpe2lmKChuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbaHJlZj1cIicrZSsnXCJdJykpJiZuLmxlbmd0aD4wKXJldHVybiB2b2lkKEMoaSkmJmkoKSk7dmFyIHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGw9cy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiBvLnJlbD1cInN0eWxlc2hlZXRcIixvLnR5cGU9XCJ0ZXh0L2Nzc1wiLG8uaHJlZj1lLG8ubWVkaWE9XCJhbGxcIixsP3MuaW5zZXJ0QmVmb3JlKG8sbFswXSk6cy5hcHBlbmRDaGlsZChvKSx2b2lkKEMoaSkmJmkoKSl9aWYoKG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3NyYz1cIicrZSsnXCJdJykpJiZuLmxlbmd0aD4wKXtpZihDKGkpKXtpZihFKHQpKXJldHVybiB3KChmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT13aW5kb3dbdF19KSwoZnVuY3Rpb24oKXtpKCl9KSksITE7aSgpfX1lbHNle3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsci5zcmM9ZSxyLm9ubG9hZD1mdW5jdGlvbigpe2lmKEMoaSkpe2lmKEUodCkpcmV0dXJuIHcoKGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXdpbmRvd1t0XX0pLChmdW5jdGlvbigpe2koKX0pKSwhMTtpKCl9fSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpfX19ZnVuY3Rpb24gaygpe3JldHVyblwibmF2aWdhdG9yXCJpbiB3aW5kb3cmJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZCl8KGlQaG9uZSl8KGlQb2QpfChBbmRyb2lkKXwoUGxheUJvb2spfChCQjEwKXwoQmxhY2tCZXJyeSl8KE9wZXJhIE1pbmkpfChJRU1vYmlsZSl8KHdlYk9TKXwoTWVlR28pL2kpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBFKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIEEoZSl7cmV0dXJuISghZXx8IWUubm9kZVR5cGV8fDEhPWUubm9kZVR5cGUpfWZ1bmN0aW9uIEwoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl9ZnVuY3Rpb24gTyhlKXtyZXR1cm4gZSYmZS5sZW5ndGgmJmlzRmluaXRlKGUubGVuZ3RoKX1mdW5jdGlvbiBQKHQpe3JldHVyblwib2JqZWN0XCI9PT1lKHQpJiZudWxsIT10JiYhQyh0KSYmIUwodCl9ZnVuY3Rpb24gTShlKXtyZXR1cm4gbnVsbD09ZX1mdW5jdGlvbiBJKGUsdCl7cmV0dXJuIG51bGwhPT1lJiZoYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9ZnVuY3Rpb24gWChlKXtpZihQKGUpKXtpZihlLmtleXMpcmV0dXJuIGUua2V5cygpLmxlbmd0aDt2YXIgdD0wO2Zvcih2YXIgaSBpbiBlKUkoZSxpKSYmdCsrO3JldHVybiB0fXJldHVybiBlLmxlbmd0aH1mdW5jdGlvbiB6KGUpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGUpKSYmaXNGaW5pdGUoZSl9ZnVuY3Rpb24gWShlKXtpZihlLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShcImtleWJvYXJkXCIpKXJldHVybiExO2UuZXZlbnRzLmtleWJvYXJkPWMoXCJrZXlkb3duXCIse29uRWxlbWVudDp3aW5kb3csd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dmFyIG49KHQ9dHx8d2luZG93LmV2ZW50KS5rZXlDb2RlO2lmKDk9PW4pe3ZhciBsPSEoIWRvY3VtZW50LmFjdGl2ZUVsZW1lbnR8fCFkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lKSYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO2lmKFwiaW5wdXRcIj09bHx8XCJ0ZXh0YXJlYVwiPT1sfHxcImJ1dHRvblwiPT1sKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7dmFyIG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYnRuXCIpO2lmKCFvfHxvLmxlbmd0aDw9MClyZXR1cm47dmFyIHI9cyhvKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBnKGUsXCJmb2N1c2VkXCIpfSkpO2lmKCFyLmxlbmd0aCl7dmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdidG5bdGFiaW5kZXg9XCIwXCJdJyk7cmV0dXJuIHZvaWQoYSYmKGEuZm9jdXMoKSxkKGEsXCJmb2N1c2VkXCIpKSl9by5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gdShlLFwiZm9jdXNlZFwiKX0pKTt2YXIgaD1yWzBdLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpO2g9aHx8XCIwXCI7dmFyIGM9cGFyc2VJbnQoaCkrMTtjPm8ubGVuZ3RoLTEmJihjPVwiMFwiKTt2YXIgdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2J0blt0YWJpbmRleD1cIicuY29uY2F0KGMsJ1wiXScpKTt2JiYodi5mb2N1cygpLGQodixcImZvY3VzZWRcIikpfTM5PT1uJiZlLm5leHRTbGlkZSgpLDM3PT1uJiZlLnByZXZTbGlkZSgpLDI3PT1uJiZlLmNsb3NlKCl9fSl9ZnVuY3Rpb24gcShlKXtyZXR1cm4gTWF0aC5zcXJ0KGUueCplLngrZS55KmUueSl9ZnVuY3Rpb24gRChlLHQpe3ZhciBpPWZ1bmN0aW9uKGUsdCl7dmFyIGk9cShlKSpxKHQpO2lmKDA9PT1pKXJldHVybiAwO3ZhciBuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUueCp0LngrZS55KnQueX0oZSx0KS9pO3JldHVybiBuPjEmJihuPTEpLE1hdGguYWNvcyhuKX0oZSx0KTtyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS54KnQueS10LngqZS55fShlLHQpPjAmJihpKj0tMSksMTgwKmkvTWF0aC5QSX12YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoaSl7dCh0aGlzLGUpLHRoaXMuaGFuZGxlcnM9W10sdGhpcy5lbD1pfXJldHVybiBuKGUsW3trZXk6XCJhZGRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZXJzLnB1c2goZSl9fSx7a2V5OlwiZGVsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZXx8KHRoaXMuaGFuZGxlcnM9W10pO2Zvcih2YXIgdD10aGlzLmhhbmRsZXJzLmxlbmd0aDt0Pj0wO3QtLSl0aGlzLmhhbmRsZXJzW3RdPT09ZSYmdGhpcy5oYW5kbGVycy5zcGxpY2UodCwxKX19LHtrZXk6XCJkaXNwYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD10aGlzLmhhbmRsZXJzLmxlbmd0aDtlPHQ7ZSsrKXt2YXIgaT10aGlzLmhhbmRsZXJzW2VdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGkmJmkuYXBwbHkodGhpcy5lbCxhcmd1bWVudHMpfX19XSksZX0oKTtmdW5jdGlvbiBOKGUsdCl7dmFyIGk9bmV3IF8oZSk7cmV0dXJuIGkuYWRkKHQpLGl9dmFyIEI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGksbil7dCh0aGlzLGUpLHRoaXMuZWxlbWVudD1cInN0cmluZ1wiPT10eXBlb2YgaT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmksdGhpcy5zdGFydD10aGlzLnN0YXJ0LmJpbmQodGhpcyksdGhpcy5tb3ZlPXRoaXMubW92ZS5iaW5kKHRoaXMpLHRoaXMuZW5kPXRoaXMuZW5kLmJpbmQodGhpcyksdGhpcy5jYW5jZWw9dGhpcy5jYW5jZWwuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnN0YXJ0LCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMubW92ZSwhMSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMuZW5kLCExKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsdGhpcy5jYW5jZWwsITEpLHRoaXMucHJlVj17eDpudWxsLHk6bnVsbH0sdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy56b29tPTEsdGhpcy5pc0RvdWJsZVRhcD0hMTt2YXIgcz1mdW5jdGlvbigpe307dGhpcy5yb3RhdGU9Tih0aGlzLmVsZW1lbnQsbi5yb3RhdGV8fHMpLHRoaXMudG91Y2hTdGFydD1OKHRoaXMuZWxlbWVudCxuLnRvdWNoU3RhcnR8fHMpLHRoaXMubXVsdGlwb2ludFN0YXJ0PU4odGhpcy5lbGVtZW50LG4ubXVsdGlwb2ludFN0YXJ0fHxzKSx0aGlzLm11bHRpcG9pbnRFbmQ9Tih0aGlzLmVsZW1lbnQsbi5tdWx0aXBvaW50RW5kfHxzKSx0aGlzLnBpbmNoPU4odGhpcy5lbGVtZW50LG4ucGluY2h8fHMpLHRoaXMuc3dpcGU9Tih0aGlzLmVsZW1lbnQsbi5zd2lwZXx8cyksdGhpcy50YXA9Tih0aGlzLmVsZW1lbnQsbi50YXB8fHMpLHRoaXMuZG91YmxlVGFwPU4odGhpcy5lbGVtZW50LG4uZG91YmxlVGFwfHxzKSx0aGlzLmxvbmdUYXA9Tih0aGlzLmVsZW1lbnQsbi5sb25nVGFwfHxzKSx0aGlzLnNpbmdsZVRhcD1OKHRoaXMuZWxlbWVudCxuLnNpbmdsZVRhcHx8cyksdGhpcy5wcmVzc01vdmU9Tih0aGlzLmVsZW1lbnQsbi5wcmVzc01vdmV8fHMpLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPU4odGhpcy5lbGVtZW50LG4udHdvRmluZ2VyUHJlc3NNb3ZlfHxzKSx0aGlzLnRvdWNoTW92ZT1OKHRoaXMuZWxlbWVudCxuLnRvdWNoTW92ZXx8cyksdGhpcy50b3VjaEVuZD1OKHRoaXMuZWxlbWVudCxuLnRvdWNoRW5kfHxzKSx0aGlzLnRvdWNoQ2FuY2VsPU4odGhpcy5lbGVtZW50LG4udG91Y2hDYW5jZWx8fHMpLHRoaXMuX2NhbmNlbEFsbEhhbmRsZXI9dGhpcy5jYW5jZWxBbGwuYmluZCh0aGlzKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuX2NhbmNlbEFsbEhhbmRsZXIpLHRoaXMuZGVsdGE9bnVsbCx0aGlzLmxhc3Q9bnVsbCx0aGlzLm5vdz1udWxsLHRoaXMudGFwVGltZW91dD1udWxsLHRoaXMuc2luZ2xlVGFwVGltZW91dD1udWxsLHRoaXMubG9uZ1RhcFRpbWVvdXQ9bnVsbCx0aGlzLnN3aXBlVGltZW91dD1udWxsLHRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9bnVsbCx0aGlzLnByZVRhcFBvc2l0aW9uPXt4Om51bGwseTpudWxsfX1yZXR1cm4gbihlLFt7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnRvdWNoZXMpe3RoaXMubm93PURhdGUubm93KCksdGhpcy54MT1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy55MT1lLnRvdWNoZXNbMF0ucGFnZVksdGhpcy5kZWx0YT10aGlzLm5vdy0odGhpcy5sYXN0fHx0aGlzLm5vdyksdGhpcy50b3VjaFN0YXJ0LmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSxudWxsIT09dGhpcy5wcmVUYXBQb3NpdGlvbi54JiYodGhpcy5pc0RvdWJsZVRhcD10aGlzLmRlbHRhPjAmJnRoaXMuZGVsdGE8PTI1MCYmTWF0aC5hYnModGhpcy5wcmVUYXBQb3NpdGlvbi54LXRoaXMueDEpPDMwJiZNYXRoLmFicyh0aGlzLnByZVRhcFBvc2l0aW9uLnktdGhpcy55MSk8MzAsdGhpcy5pc0RvdWJsZVRhcCYmY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCkpLHRoaXMucHJlVGFwUG9zaXRpb24ueD10aGlzLngxLHRoaXMucHJlVGFwUG9zaXRpb24ueT10aGlzLnkxLHRoaXMubGFzdD10aGlzLm5vdzt2YXIgdD10aGlzLnByZVY7aWYoZS50b3VjaGVzLmxlbmd0aD4xKXt0aGlzLl9jYW5jZWxMb25nVGFwKCksdGhpcy5fY2FuY2VsU2luZ2xlVGFwKCk7dmFyIGk9e3g6ZS50b3VjaGVzWzFdLnBhZ2VYLXRoaXMueDEseTplLnRvdWNoZXNbMV0ucGFnZVktdGhpcy55MX07dC54PWkueCx0Lnk9aS55LHRoaXMucGluY2hTdGFydExlbj1xKHQpLHRoaXMubXVsdGlwb2ludFN0YXJ0LmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KX10aGlzLl9wcmV2ZW50VGFwPSExLHRoaXMubG9uZ1RhcFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMubG9uZ1RhcC5kaXNwYXRjaChlLHRoaXMuZWxlbWVudCksdGhpcy5fcHJldmVudFRhcD0hMH0uYmluZCh0aGlzKSw3NTApfX19LHtrZXk6XCJtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS50b3VjaGVzKXt2YXIgdD10aGlzLnByZVYsaT1lLnRvdWNoZXMubGVuZ3RoLG49ZS50b3VjaGVzWzBdLnBhZ2VYLHM9ZS50b3VjaGVzWzBdLnBhZ2VZO2lmKHRoaXMuaXNEb3VibGVUYXA9ITEsaT4xKXt2YXIgbD1lLnRvdWNoZXNbMV0ucGFnZVgsbz1lLnRvdWNoZXNbMV0ucGFnZVkscj17eDplLnRvdWNoZXNbMV0ucGFnZVgtbix5OmUudG91Y2hlc1sxXS5wYWdlWS1zfTtudWxsIT09dC54JiYodGhpcy5waW5jaFN0YXJ0TGVuPjAmJihlLnpvb209cShyKS90aGlzLnBpbmNoU3RhcnRMZW4sdGhpcy5waW5jaC5kaXNwYXRjaChlLHRoaXMuZWxlbWVudCkpLGUuYW5nbGU9RChyLHQpLHRoaXMucm90YXRlLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSksdC54PXIueCx0Lnk9ci55LG51bGwhPT10aGlzLngyJiZudWxsIT09dGhpcy5zeDI/KGUuZGVsdGFYPShuLXRoaXMueDIrbC10aGlzLnN4MikvMixlLmRlbHRhWT0ocy10aGlzLnkyK28tdGhpcy5zeTIpLzIpOihlLmRlbHRhWD0wLGUuZGVsdGFZPTApLHRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSx0aGlzLnN4Mj1sLHRoaXMuc3kyPW99ZWxzZXtpZihudWxsIT09dGhpcy54Mil7ZS5kZWx0YVg9bi10aGlzLngyLGUuZGVsdGFZPXMtdGhpcy55Mjt2YXIgYT1NYXRoLmFicyh0aGlzLngxLXRoaXMueDIpLGg9TWF0aC5hYnModGhpcy55MS10aGlzLnkyKTsoYT4xMHx8aD4xMCkmJih0aGlzLl9wcmV2ZW50VGFwPSEwKX1lbHNlIGUuZGVsdGFYPTAsZS5kZWx0YVk9MDt0aGlzLnByZXNzTW92ZS5kaXNwYXRjaChlLHRoaXMuZWxlbWVudCl9dGhpcy50b3VjaE1vdmUuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpLHRoaXMuX2NhbmNlbExvbmdUYXAoKSx0aGlzLngyPW4sdGhpcy55Mj1zLGk+MSYmZS5wcmV2ZW50RGVmYXVsdCgpfX19LHtrZXk6XCJlbmRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLmNoYW5nZWRUb3VjaGVzKXt0aGlzLl9jYW5jZWxMb25nVGFwKCk7dmFyIHQ9dGhpcztlLnRvdWNoZXMubGVuZ3RoPDImJih0aGlzLm11bHRpcG9pbnRFbmQuZGlzcGF0Y2goZSx0aGlzLmVsZW1lbnQpLHRoaXMuc3gyPXRoaXMuc3kyPW51bGwpLHRoaXMueDImJk1hdGguYWJzKHRoaXMueDEtdGhpcy54Mik+MzB8fHRoaXMueTImJk1hdGguYWJzKHRoaXMueTEtdGhpcy55Mik+MzA/KGUuZGlyZWN0aW9uPXRoaXMuX3N3aXBlRGlyZWN0aW9uKHRoaXMueDEsdGhpcy54Mix0aGlzLnkxLHRoaXMueTIpLHRoaXMuc3dpcGVUaW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5zd2lwZS5kaXNwYXRjaChlLHQuZWxlbWVudCl9KSwwKSk6KHRoaXMudGFwVGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuX3ByZXZlbnRUYXB8fHQudGFwLmRpc3BhdGNoKGUsdC5lbGVtZW50KSx0LmlzRG91YmxlVGFwJiYodC5kb3VibGVUYXAuZGlzcGF0Y2goZSx0LmVsZW1lbnQpLHQuaXNEb3VibGVUYXA9ITEpfSksMCksdC5pc0RvdWJsZVRhcHx8KHQuc2luZ2xlVGFwVGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3Quc2luZ2xlVGFwLmRpc3BhdGNoKGUsdC5lbGVtZW50KX0pLDI1MCkpKSx0aGlzLnRvdWNoRW5kLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KSx0aGlzLnByZVYueD0wLHRoaXMucHJlVi55PTAsdGhpcy56b29tPTEsdGhpcy5waW5jaFN0YXJ0TGVuPW51bGwsdGhpcy54MT10aGlzLngyPXRoaXMueTE9dGhpcy55Mj1udWxsfX19LHtrZXk6XCJjYW5jZWxBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3ByZXZlbnRUYXA9ITAsY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCksY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpLGNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCl9fSx7a2V5OlwiY2FuY2VsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jYW5jZWxBbGwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRpc3BhdGNoKGUsdGhpcy5lbGVtZW50KX19LHtrZXk6XCJfY2FuY2VsTG9uZ1RhcFwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RhcFRpbWVvdXQpfX0se2tleTpcIl9jYW5jZWxTaW5nbGVUYXBcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnNpbmdsZVRhcFRpbWVvdXQpfX0se2tleTpcIl9zd2lwZURpcmVjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpLG4pe3JldHVybiBNYXRoLmFicyhlLXQpPj1NYXRoLmFicyhpLW4pP2UtdD4wP1wiTGVmdFwiOlwiUmlnaHRcIjppLW4+MD9cIlVwXCI6XCJEb3duXCJ9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXNbZV0mJnRoaXNbZV0uYWRkKHQpfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpc1tlXSYmdGhpc1tlXS5kZWwodCl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2luZ2xlVGFwVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuc2luZ2xlVGFwVGltZW91dCksdGhpcy50YXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KSx0aGlzLmxvbmdUYXBUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5sb25nVGFwVGltZW91dCksdGhpcy5zd2lwZVRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLnN3aXBlVGltZW91dCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5zdGFydCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm1vdmUpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLmVuZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMuY2FuY2VsKSx0aGlzLnJvdGF0ZS5kZWwoKSx0aGlzLnRvdWNoU3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50U3RhcnQuZGVsKCksdGhpcy5tdWx0aXBvaW50RW5kLmRlbCgpLHRoaXMucGluY2guZGVsKCksdGhpcy5zd2lwZS5kZWwoKSx0aGlzLnRhcC5kZWwoKSx0aGlzLmRvdWJsZVRhcC5kZWwoKSx0aGlzLmxvbmdUYXAuZGVsKCksdGhpcy5zaW5nbGVUYXAuZGVsKCksdGhpcy5wcmVzc01vdmUuZGVsKCksdGhpcy50d29GaW5nZXJQcmVzc01vdmUuZGVsKCksdGhpcy50b3VjaE1vdmUuZGVsKCksdGhpcy50b3VjaEVuZC5kZWwoKSx0aGlzLnRvdWNoQ2FuY2VsLmRlbCgpLHRoaXMucHJlVj10aGlzLnBpbmNoU3RhcnRMZW49dGhpcy56b29tPXRoaXMuaXNEb3VibGVUYXA9dGhpcy5kZWx0YT10aGlzLmxhc3Q9dGhpcy5ub3c9dGhpcy50YXBUaW1lb3V0PXRoaXMuc2luZ2xlVGFwVGltZW91dD10aGlzLmxvbmdUYXBUaW1lb3V0PXRoaXMuc3dpcGVUaW1lb3V0PXRoaXMueDE9dGhpcy54Mj10aGlzLnkxPXRoaXMueTI9dGhpcy5wcmVUYXBQb3NpdGlvbj10aGlzLnJvdGF0ZT10aGlzLnRvdWNoU3RhcnQ9dGhpcy5tdWx0aXBvaW50U3RhcnQ9dGhpcy5tdWx0aXBvaW50RW5kPXRoaXMucGluY2g9dGhpcy5zd2lwZT10aGlzLnRhcD10aGlzLmRvdWJsZVRhcD10aGlzLmxvbmdUYXA9dGhpcy5zaW5nbGVUYXA9dGhpcy5wcmVzc01vdmU9dGhpcy50b3VjaE1vdmU9dGhpcy50b3VjaEVuZD10aGlzLnRvdWNoQ2FuY2VsPXRoaXMudHdvRmluZ2VyUHJlc3NNb3ZlPW51bGwsd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9jYW5jZWxBbGxIYW5kbGVyKSxudWxsfX1dKSxlfSgpO2Z1bmN0aW9uIFcoZSl7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgZSx0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxpPXt0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLFdlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9O2ZvcihlIGluIGkpaWYodm9pZCAwIT09dC5zdHlsZVtlXSlyZXR1cm4gaVtlXX0oKSxpPWcoZSxcImdzbGlkZS1tZWRpYVwiKT9lOmUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbj1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpO2QoaSxcImdyZXNldFwiKSxwKGksXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiKTtjKHQse29uRWxlbWVudDppLG9uY2U6ITAsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKGUsdCl7dShpLFwiZ3Jlc2V0XCIpfX0pO2kuc3R5bGUub3BhY2l0eT1cIlwiLG4mJihuLnN0eWxlLm9wYWNpdHk9XCJcIil9ZnVuY3Rpb24gSChlKXtpZihlLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShcInRvdWNoXCIpKXJldHVybiExO3ZhciB0LGksbixzPXgoKSxsPXMud2lkdGgsbz1zLmhlaWdodCxyPSExLGE9bnVsbCxoPW51bGwsYz1udWxsLGY9ITEsbT0xLHk9MSxiPSExLFM9ITEsdz1udWxsLFQ9bnVsbCxrPW51bGwsQz1udWxsLEU9MCxBPTAsTD0hMSxPPSExLFA9e30sTT17fSxJPTAsWD0wLHo9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtc2xpZGVyXCIpLFk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb3ZlcmxheVwiKSxxPW5ldyBCKHose3RvdWNoU3RhcnQ6ZnVuY3Rpb24odCl7aWYoZyh0LnRhcmdldFRvdWNoZXNbMF0udGFyZ2V0LFwiZ2lubmVyLWNvbnRhaW5lclwiKXx8dih0LnRhcmdldFRvdWNoZXNbMF0udGFyZ2V0LFwiLmdzbGlkZS1kZXNjXCIpKXJldHVybiByPSExLCExO3I9ITAsTT10LnRhcmdldFRvdWNoZXNbMF0sUC5wYWdlWD10LnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsUC5wYWdlWT10LnRhcmdldFRvdWNoZXNbMF0ucGFnZVksST10LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxYPXQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLGE9ZS5hY3RpdmVTbGlkZSxoPWEucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtbWVkaWFcIiksbj1hLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWlubGluZVwiKSxjPW51bGwsZyhoLFwiZ3NsaWRlLWltYWdlXCIpJiYoYz1oLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpLHUoWSxcImdyZXNldFwiKSx0LnBhZ2VYPjIwJiZ0LnBhZ2VYPHdpbmRvdy5pbm5lcldpZHRoLTIwfHx0LnByZXZlbnREZWZhdWx0KCl9LHRvdWNoTW92ZTpmdW5jdGlvbihzKXtpZihyJiYoTT1zLnRhcmdldFRvdWNoZXNbMF0sIWImJiFTKSl7aWYobiYmbi5vZmZzZXRIZWlnaHQ+byl7dmFyIGE9UC5wYWdlWC1NLnBhZ2VYO2lmKE1hdGguYWJzKGEpPD0xMylyZXR1cm4hMX1mPSEwO3ZhciBkLHU9cy50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsZz1zLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSx2PUktdSxtPVgtZztpZihNYXRoLmFicyh2KT5NYXRoLmFicyhtKT8oTD0hMSxPPSEwKTooTz0hMSxMPSEwKSx0PU0ucGFnZVgtUC5wYWdlWCxFPTEwMCp0L2wsaT1NLnBhZ2VZLVAucGFnZVksQT0xMDAqaS9vLEwmJmMmJihkPTEtTWF0aC5hYnMoaSkvbyxZLnN0eWxlLm9wYWNpdHk9ZCxlLnNldHRpbmdzLnRvdWNoRm9sbG93QXhpcyYmKEU9MCkpLE8mJihkPTEtTWF0aC5hYnModCkvbCxoLnN0eWxlLm9wYWNpdHk9ZCxlLnNldHRpbmdzLnRvdWNoRm9sbG93QXhpcyYmKEE9MCkpLCFjKXJldHVybiBwKGgsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoRSxcIiUsIDAsIDApXCIpKTtwKGgsXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoRSxcIiUsIFwiKS5jb25jYXQoQSxcIiUsIDApXCIpKX19LHRvdWNoRW5kOmZ1bmN0aW9uKCl7aWYocil7aWYoZj0hMSxTfHxiKXJldHVybiBrPXcsdm9pZChDPVQpO3ZhciB0PU1hdGguYWJzKHBhcnNlSW50KEEpKSxpPU1hdGguYWJzKHBhcnNlSW50KEUpKTtpZighKHQ+MjkmJmMpKXJldHVybiB0PDI5JiZpPDI1PyhkKFksXCJncmVzZXRcIiksWS5zdHlsZS5vcGFjaXR5PTEsVyhoKSk6dm9pZCAwO2UuY2xvc2UoKX19LG11bHRpcG9pbnRFbmQ6ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2I9ITF9KSw1MCl9LG11bHRpcG9pbnRTdGFydDpmdW5jdGlvbigpe2I9ITAsbT15fHwxfSxwaW5jaDpmdW5jdGlvbihlKXtpZighY3x8ZilyZXR1cm4hMTtiPSEwLGMuc2NhbGVYPWMuc2NhbGVZPW0qZS56b29tO3ZhciB0PW0qZS56b29tO2lmKFM9ITAsdDw9MSlyZXR1cm4gUz0hMSx0PTEsQz1udWxsLGs9bnVsbCx3PW51bGwsVD1udWxsLHZvaWQgYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpO3Q+NC41JiYodD00LjUpLGMuc3R5bGUudHJhbnNmb3JtPVwic2NhbGUzZChcIi5jb25jYXQodCxcIiwgXCIpLmNvbmNhdCh0LFwiLCAxKVwiKSx5PXR9LHByZXNzTW92ZTpmdW5jdGlvbihlKXtpZihTJiYhYil7dmFyIHQ9TS5wYWdlWC1QLnBhZ2VYLGk9TS5wYWdlWS1QLnBhZ2VZO2smJih0Kz1rKSxDJiYoaSs9Qyksdz10LFQ9aTt2YXIgbj1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh0LFwicHgsIFwiKS5jb25jYXQoaSxcInB4LCAwKVwiKTt5JiYobis9XCIgc2NhbGUzZChcIi5jb25jYXQoeSxcIiwgXCIpLmNvbmNhdCh5LFwiLCAxKVwiKSkscChjLG4pfX0sc3dpcGU6ZnVuY3Rpb24odCl7aWYoIVMpaWYoYiliPSExO2Vsc2V7aWYoXCJMZWZ0XCI9PXQuZGlyZWN0aW9uKXtpZihlLmluZGV4PT1lLmVsZW1lbnRzLmxlbmd0aC0xKXJldHVybiBXKGgpO2UubmV4dFNsaWRlKCl9aWYoXCJSaWdodFwiPT10LmRpcmVjdGlvbil7aWYoMD09ZS5pbmRleClyZXR1cm4gVyhoKTtlLnByZXZTbGlkZSgpfX19fSk7ZS5ldmVudHMudG91Y2g9cX12YXIgaj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoaSxuKXt2YXIgcz10aGlzLGw9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYodCh0aGlzLGUpLHRoaXMuaW1nPWksdGhpcy5zbGlkZT1uLHRoaXMub25jbG9zZT1sLHRoaXMuaW1nLnNldFpvb21FdmVudHMpcmV0dXJuITE7dGhpcy5hY3RpdmU9ITEsdGhpcy56b29tZWRJbj0hMSx0aGlzLmRyYWdnaW5nPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsKGZ1bmN0aW9uKGUpe3JldHVybiBzLmRyYWdTdGFydChlKX0pLCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLChmdW5jdGlvbihlKXtyZXR1cm4gcy5kcmFnRW5kKGUpfSksITEpLHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHMuZHJhZyhlKX0pLCExKSx0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHMuc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZ2dpbmctbmF2XCIpPyhzLnpvb21PdXQoKSwhMSk6cy56b29tZWRJbj92b2lkKHMuem9vbWVkSW4mJiFzLmRyYWdnaW5nJiZzLnpvb21PdXQoKSk6cy56b29tSW4oKX0pLCExKSx0aGlzLmltZy5zZXRab29tRXZlbnRzPSEwfXJldHVybiBuKGUsW3trZXk6XCJ6b29tSW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMud2lkb3dXaWR0aCgpO2lmKCEodGhpcy56b29tZWRJbnx8ZTw9NzY4KSl7dmFyIHQ9dGhpcy5pbWc7aWYodC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlXCIsdC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksdC5zdHlsZS5tYXhXaWR0aD10Lm5hdHVyYWxXaWR0aCtcInB4XCIsdC5zdHlsZS5tYXhIZWlnaHQ9dC5uYXR1cmFsSGVpZ2h0K1wicHhcIix0Lm5hdHVyYWxXaWR0aD5lKXt2YXIgaT1lLzItdC5uYXR1cmFsV2lkdGgvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZy5wYXJlbnROb2RlLGksMCl9dGhpcy5zbGlkZS5jbGFzc0xpc3QuYWRkKFwiem9vbWVkXCIpLHRoaXMuem9vbWVkSW49ITB9fX0se2tleTpcInpvb21PdXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW1nLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIlwiKSx0aGlzLmltZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLHRoaXMuaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVcIikpLHRoaXMuc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInpvb21lZFwiKSx0aGlzLnpvb21lZEluPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLm9uY2xvc2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub25jbG9zZSYmdGhpcy5vbmNsb3NlKCl9fSx7a2V5OlwiZHJhZ1N0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuem9vbWVkSW4/KFwidG91Y2hzdGFydFwiPT09ZS50eXBlPyh0aGlzLmluaXRpYWxYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMueU9mZnNldCk6KHRoaXMuaW5pdGlhbFg9ZS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUuY2xpZW50WS10aGlzLnlPZmZzZXQpLGUudGFyZ2V0PT09dGhpcy5pbWcmJih0aGlzLmFjdGl2ZT0hMCx0aGlzLmltZy5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIikpKTp0aGlzLmFjdGl2ZT0hMX19LHtrZXk6XCJkcmFnRW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLnByZXZlbnREZWZhdWx0KCksdGhpcy5pbml0aWFsWD10aGlzLmN1cnJlbnRYLHRoaXMuaW5pdGlhbFk9dGhpcy5jdXJyZW50WSx0aGlzLmFjdGl2ZT0hMSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuZHJhZ2dpbmc9ITEsdC5pbWcuaXNEcmFnZ2luZz0hMSx0LmltZy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIil9KSwxMDApfX0se2tleTpcImRyYWdcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmFjdGl2ZSYmKGUucHJldmVudERlZmF1bHQoKSxcInRvdWNobW92ZVwiPT09ZS50eXBlPyh0aGlzLmN1cnJlbnRYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMuaW5pdGlhbFgsdGhpcy5jdXJyZW50WT1lLnRvdWNoZXNbMF0uY2xpZW50WS10aGlzLmluaXRpYWxZKToodGhpcy5jdXJyZW50WD1lLmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPWUuY2xpZW50WS10aGlzLmluaXRpYWxZKSx0aGlzLnhPZmZzZXQ9dGhpcy5jdXJyZW50WCx0aGlzLnlPZmZzZXQ9dGhpcy5jdXJyZW50WSx0aGlzLmltZy5pc0RyYWdnaW5nPSEwLHRoaXMuZHJhZ2dpbmc9ITAsdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5pbWcsdGhpcy5jdXJyZW50WCx0aGlzLmN1cnJlbnRZKSl9fSx7a2V5Olwib25Nb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy56b29tZWRJbil7dmFyIHQ9ZS5jbGllbnRYLXRoaXMuaW1nLm5hdHVyYWxXaWR0aC8yLGk9ZS5jbGllbnRZLXRoaXMuaW1nLm5hdHVyYWxIZWlnaHQvMjt0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmltZyx0LGkpfX19LHtrZXk6XCJzZXRUcmFuc2xhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7ZS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIit0K1wicHgsIFwiK2krXCJweCwgMClcIn19LHtrZXk6XCJ3aWRvd1dpZHRoXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aHx8ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aH19XSksZX0oKSxWPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBpPXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dCh0aGlzLGUpO3ZhciBzPW4uZHJhZ0VsLGw9bi50b2xlcmFuY2VYLG89dm9pZCAwPT09bD80MDpsLHI9bi50b2xlcmFuY2VZLGE9dm9pZCAwPT09cj82NTpyLGg9bi5zbGlkZSxjPXZvaWQgMD09PWg/bnVsbDpoLGQ9bi5pbnN0YW5jZSx1PXZvaWQgMD09PWQ/bnVsbDpkO3RoaXMuZWw9cyx0aGlzLmFjdGl2ZT0hMSx0aGlzLmRyYWdnaW5nPSExLHRoaXMuY3VycmVudFg9bnVsbCx0aGlzLmN1cnJlbnRZPW51bGwsdGhpcy5pbml0aWFsWD1udWxsLHRoaXMuaW5pdGlhbFk9bnVsbCx0aGlzLnhPZmZzZXQ9MCx0aGlzLnlPZmZzZXQ9MCx0aGlzLmRpcmVjdGlvbj1udWxsLHRoaXMubGFzdERpcmVjdGlvbj1udWxsLHRoaXMudG9sZXJhbmNlWD1vLHRoaXMudG9sZXJhbmNlWT1hLHRoaXMudG9sZXJhbmNlUmVhY2hlZD0hMSx0aGlzLmRyYWdDb250YWluZXI9dGhpcy5lbCx0aGlzLnNsaWRlPWMsdGhpcy5pbnN0YW5jZT11LHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnU3RhcnQoZSl9KSwhMSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnRW5kKGUpfSksITEpLHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLChmdW5jdGlvbihlKXtyZXR1cm4gaS5kcmFnKGUpfSksITEpfXJldHVybiBuKGUsW3trZXk6XCJkcmFnU3RhcnRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLnNsaWRlLmNsYXNzTGlzdC5jb250YWlucyhcInpvb21lZFwiKSl0aGlzLmFjdGl2ZT0hMTtlbHNle1widG91Y2hzdGFydFwiPT09ZS50eXBlPyh0aGlzLmluaXRpYWxYPWUudG91Y2hlc1swXS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMueU9mZnNldCk6KHRoaXMuaW5pdGlhbFg9ZS5jbGllbnRYLXRoaXMueE9mZnNldCx0aGlzLmluaXRpYWxZPWUuY2xpZW50WS10aGlzLnlPZmZzZXQpO3ZhciB0PWUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7ZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm9kcmFnXCIpfHx2KGUudGFyZ2V0LFwiLm5vZHJhZ1wiKXx8LTEhPT1bXCJpbnB1dFwiLFwic2VsZWN0XCIsXCJ0ZXh0YXJlYVwiLFwiYnV0dG9uXCIsXCJhXCJdLmluZGV4T2YodCk/dGhpcy5hY3RpdmU9ITE6KGUucHJldmVudERlZmF1bHQoKSwoZS50YXJnZXQ9PT10aGlzLmVsfHxcImltZ1wiIT09dCYmdihlLnRhcmdldCxcIi5nc2xpZGUtaW5saW5lXCIpKSYmKHRoaXMuYWN0aXZlPSEwLHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpLHRoaXMuZHJhZ0NvbnRhaW5lcj12KGUudGFyZ2V0LFwiLmdpbm5lci1jb250YWluZXJcIikpKX19fSx7a2V5OlwiZHJhZ0VuZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaW5pdGlhbFg9MCx0aGlzLmluaXRpYWxZPTAsdGhpcy5jdXJyZW50WD1udWxsLHRoaXMuY3VycmVudFk9bnVsbCx0aGlzLmluaXRpYWxYPW51bGwsdGhpcy5pbml0aWFsWT1udWxsLHRoaXMueE9mZnNldD0wLHRoaXMueU9mZnNldD0wLHRoaXMuYWN0aXZlPSExLHRoaXMuZG9TbGlkZUNoYW5nZSYmKHRoaXMuaW5zdGFuY2UucHJldmVudE91dHNpZGVDbGljaz0hMCxcInJpZ2h0XCI9PXRoaXMuZG9TbGlkZUNoYW5nZSYmdGhpcy5pbnN0YW5jZS5wcmV2U2xpZGUoKSxcImxlZnRcIj09dGhpcy5kb1NsaWRlQ2hhbmdlJiZ0aGlzLmluc3RhbmNlLm5leHRTbGlkZSgpKSx0aGlzLmRvU2xpZGVDbG9zZSYmdGhpcy5pbnN0YW5jZS5jbG9zZSgpLHRoaXMudG9sZXJhbmNlUmVhY2hlZHx8dGhpcy5zZXRUcmFuc2xhdGUodGhpcy5kcmFnQ29udGFpbmVyLDAsMCwhMCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0Lmluc3RhbmNlLnByZXZlbnRPdXRzaWRlQ2xpY2s9ITEsdC50b2xlcmFuY2VSZWFjaGVkPSExLHQubGFzdERpcmVjdGlvbj1udWxsLHQuZHJhZ2dpbmc9ITEsdC5lbC5pc0RyYWdnaW5nPSExLHQuZWwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpLHQuc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nLW5hdlwiKSx0LmRyYWdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtPVwiXCIsdC5kcmFnQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb249XCJcIn0pLDEwMCl9fSx7a2V5OlwiZHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuYWN0aXZlKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5zbGlkZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmctbmF2XCIpLFwidG91Y2htb3ZlXCI9PT1lLnR5cGU/KHRoaXMuY3VycmVudFg9ZS50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy5pbml0aWFsWCx0aGlzLmN1cnJlbnRZPWUudG91Y2hlc1swXS5jbGllbnRZLXRoaXMuaW5pdGlhbFkpOih0aGlzLmN1cnJlbnRYPWUuY2xpZW50WC10aGlzLmluaXRpYWxYLHRoaXMuY3VycmVudFk9ZS5jbGllbnRZLXRoaXMuaW5pdGlhbFkpLHRoaXMueE9mZnNldD10aGlzLmN1cnJlbnRYLHRoaXMueU9mZnNldD10aGlzLmN1cnJlbnRZLHRoaXMuZWwuaXNEcmFnZ2luZz0hMCx0aGlzLmRyYWdnaW5nPSEwLHRoaXMuZG9TbGlkZUNoYW5nZT0hMSx0aGlzLmRvU2xpZGVDbG9zZT0hMTt2YXIgdD1NYXRoLmFicyh0aGlzLmN1cnJlbnRYKSxpPU1hdGguYWJzKHRoaXMuY3VycmVudFkpO2lmKHQ+MCYmdD49TWF0aC5hYnModGhpcy5jdXJyZW50WSkmJighdGhpcy5sYXN0RGlyZWN0aW9ufHxcInhcIj09dGhpcy5sYXN0RGlyZWN0aW9uKSl7dGhpcy55T2Zmc2V0PTAsdGhpcy5sYXN0RGlyZWN0aW9uPVwieFwiLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuZHJhZ0NvbnRhaW5lcix0aGlzLmN1cnJlbnRYLDApO3ZhciBuPXRoaXMuc2hvdWxkQ2hhbmdlKCk7aWYoIXRoaXMuaW5zdGFuY2Uuc2V0dGluZ3MuZHJhZ0F1dG9TbmFwJiZuJiYodGhpcy5kb1NsaWRlQ2hhbmdlPW4pLHRoaXMuaW5zdGFuY2Uuc2V0dGluZ3MuZHJhZ0F1dG9TbmFwJiZuKXJldHVybiB0aGlzLmluc3RhbmNlLnByZXZlbnRPdXRzaWRlQ2xpY2s9ITAsdGhpcy50b2xlcmFuY2VSZWFjaGVkPSEwLHRoaXMuYWN0aXZlPSExLHRoaXMuaW5zdGFuY2UucHJldmVudE91dHNpZGVDbGljaz0hMCx0aGlzLmRyYWdFbmQobnVsbCksXCJyaWdodFwiPT1uJiZ0aGlzLmluc3RhbmNlLnByZXZTbGlkZSgpLHZvaWQoXCJsZWZ0XCI9PW4mJnRoaXMuaW5zdGFuY2UubmV4dFNsaWRlKCkpfWlmKHRoaXMudG9sZXJhbmNlWT4wJiZpPjAmJmk+PXQmJighdGhpcy5sYXN0RGlyZWN0aW9ufHxcInlcIj09dGhpcy5sYXN0RGlyZWN0aW9uKSl7dGhpcy54T2Zmc2V0PTAsdGhpcy5sYXN0RGlyZWN0aW9uPVwieVwiLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuZHJhZ0NvbnRhaW5lciwwLHRoaXMuY3VycmVudFkpO3ZhciBzPXRoaXMuc2hvdWxkQ2xvc2UoKTtyZXR1cm4hdGhpcy5pbnN0YW5jZS5zZXR0aW5ncy5kcmFnQXV0b1NuYXAmJnMmJih0aGlzLmRvU2xpZGVDbG9zZT0hMCksdm9pZCh0aGlzLmluc3RhbmNlLnNldHRpbmdzLmRyYWdBdXRvU25hcCYmcyYmdGhpcy5pbnN0YW5jZS5jbG9zZSgpKX19fX0se2tleTpcInNob3VsZENoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9ITE7aWYoTWF0aC5hYnModGhpcy5jdXJyZW50WCk+PXRoaXMudG9sZXJhbmNlWCl7dmFyIHQ9dGhpcy5jdXJyZW50WD4wP1wicmlnaHRcIjpcImxlZnRcIjsoXCJsZWZ0XCI9PXQmJnRoaXMuc2xpZGUhPT10aGlzLnNsaWRlLnBhcmVudE5vZGUubGFzdENoaWxkfHxcInJpZ2h0XCI9PXQmJnRoaXMuc2xpZGUhPT10aGlzLnNsaWRlLnBhcmVudE5vZGUuZmlyc3RDaGlsZCkmJihlPXQpfXJldHVybiBlfX0se2tleTpcInNob3VsZENsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0hMTtyZXR1cm4gTWF0aC5hYnModGhpcy5jdXJyZW50WSk+PXRoaXMudG9sZXJhbmNlWSYmKGU9ITApLGV9fSx7a2V5Olwic2V0VHJhbnNsYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdJiZhcmd1bWVudHNbM107ZS5zdHlsZS50cmFuc2l0aW9uPW4/XCJhbGwgLjJzIGVhc2VcIjpcIlwiLGUuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrdCtcInB4LCBcIitpK1wicHgsIDApXCJ9fV0pLGV9KCk7ZnVuY3Rpb24gRihlLHQsaSl7dmFyIG49ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxzPW5ldyBJbWFnZSxsPVwiZ1NsaWRlVGl0bGVfXCIrdC5pbmRleCxvPVwiZ1NsaWRlRGVzY19cIit0LmluZGV4O3MuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtDKGkpJiZpKCl9KSwhMSkscy5zcmM9dC5ocmVmLHMuYWx0PVwiXCIsXCJcIiE9PXQudGl0bGUmJnMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsbCksXCJcIiE9PXQuZGVzY3JpcHRpb24mJnMuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLG8pLG4uaW5zZXJ0QmVmb3JlKHMsbi5maXJzdENoaWxkKX1mdW5jdGlvbiBSKGUsdCxpKXt2YXIgbj10aGlzLHM9ZS5xdWVyeVNlbGVjdG9yKFwiLmdpbm5lci1jb250YWluZXJcIiksbD1cImd2aWRlb1wiK3QuaW5kZXgsbz1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLHI9dGhpcy5nZXRBbGxQbGF5ZXJzKCk7ZChzLFwiZ3ZpZGVvLWNvbnRhaW5lclwiKSxvLmluc2VydEJlZm9yZShiKCc8ZGl2IGNsYXNzPVwiZ3ZpZGVvLXdyYXBwZXJcIj48L2Rpdj4nKSxvLmZpcnN0Q2hpbGQpO3ZhciBhPWUucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKTtUKHRoaXMuc2V0dGluZ3MucGx5ci5jc3MpO3ZhciBoPXQuaHJlZixjPWxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoXCI6XCIsXCJcIiksdT1cIlwiLGc9XCJcIix2PSExO1wiZmlsZVwiPT1jJiYoYz1cImh0dHBcIiksby5zdHlsZS5tYXhXaWR0aD10LndpZHRoLFQodGhpcy5zZXR0aW5ncy5wbHlyLmpzLFwiUGx5clwiLChmdW5jdGlvbigpe2lmKGgubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFswLTldKikvKSl7dmFyIGU9L3ZpbWVvLipcXC8oXFxkKykvaS5leGVjKGgpO3U9XCJ2aW1lb1wiLGc9ZVsxXX1pZihoLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL3dhdGNoXFw/dj0oW2EtekEtWjAtOVxcLV9dKykvKXx8aC5tYXRjaCgveW91dHVcXC5iZVxcLyhbYS16QS1aMC05XFwtX10rKS8pfHxoLm1hdGNoKC8oeW91dHViZVxcLmNvbXx5b3V0dWJlLW5vY29va2llXFwuY29tKVxcL2VtYmVkXFwvKFthLXpBLVowLTlcXC1fXSspLykpe3ZhciBzPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dD12b2lkIDAhPT0oZT1lLnJlcGxhY2UoLyg+fDwpL2dpLFwiXCIpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pKVsyXT8odD1lWzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpKVswXTplO3JldHVybiB0fShoKTt1PVwieW91dHViZVwiLGc9c31pZihudWxsIT09aC5tYXRjaCgvXFwuKG1wNHxvZ2d8d2VibXxtb3YpJC8pKXt1PVwibG9jYWxcIjt2YXIgbz0nPHZpZGVvIGlkPVwiJytsKydcIiAnO28rPSdzdHlsZT1cImJhY2tncm91bmQ6IzAwMDsgbWF4LXdpZHRoOiAnLmNvbmNhdCh0LndpZHRoLCc7XCIgJyksbys9J3ByZWxvYWQ9XCJtZXRhZGF0YVwiICcsbys9J3gtd2Via2l0LWFpcnBsYXk9XCJhbGxvd1wiICcsbys9J3dlYmtpdC1wbGF5c2lubGluZT1cIlwiICcsbys9XCJjb250cm9scyBcIixvKz0nY2xhc3M9XCJndmlkZW8tbG9jYWxcIj4nO3ZhciBjPWgudG9Mb3dlckNhc2UoKS5zcGxpdChcIi5cIikucG9wKCksZj17bXA0OlwiXCIsb2dnOlwiXCIsd2VibTpcIlwifTtmb3IodmFyIHAgaW4gZltjPVwibW92XCI9PWM/XCJtcDRcIjpjXT1oLGYpaWYoZi5oYXNPd25Qcm9wZXJ0eShwKSl7dmFyIG09ZltwXTt0Lmhhc093blByb3BlcnR5KHApJiYobT10W3BdKSxcIlwiIT09bSYmKG8rPSc8c291cmNlIHNyYz1cIicuY29uY2F0KG0sJ1wiIHR5cGU9XCJ2aWRlby8nKS5jb25jYXQocCwnXCI+JykpfXY9YihvKz1cIjwvdmlkZW8+XCIpfXZhciB5PXZ8fGIoJzxkaXYgaWQ9XCInLmNvbmNhdChsLCdcIiBkYXRhLXBseXItcHJvdmlkZXI9XCInKS5jb25jYXQodSwnXCIgZGF0YS1wbHlyLWVtYmVkLWlkPVwiJykuY29uY2F0KGcsJ1wiPjwvZGl2PicpKTtkKGEsXCJcIi5jb25jYXQodSxcIi12aWRlbyBndmlkZW9cIikpLGEuYXBwZW5kQ2hpbGQoeSksYS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsbCksYS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsdC5pbmRleCk7dmFyIHg9SShuLnNldHRpbmdzLnBseXIsXCJjb25maWdcIik/bi5zZXR0aW5ncy5wbHlyLmNvbmZpZzp7fSxTPW5ldyBQbHlyKFwiI1wiK2wseCk7Uy5vbihcInJlYWR5XCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZGV0YWlsLnBseXI7cltsXT10LEMoaSkmJmkoKX0pKSxTLm9uKFwiZW50ZXJmdWxsc2NyZWVuXCIsRyksUy5vbihcImV4aXRmdWxsc2NyZWVuXCIsRyl9KSl9ZnVuY3Rpb24gRyhlKXt2YXIgdD12KGUudGFyZ2V0LFwiLmdzbGlkZS1tZWRpYVwiKTtcImVudGVyZnVsbHNjcmVlblwiPT1lLnR5cGUmJmQodCxcImZ1bGxzY3JlZW5cIiksXCJleGl0ZnVsbHNjcmVlblwiPT1lLnR5cGUmJnUodCxcImZ1bGxzY3JlZW5cIil9ZnVuY3Rpb24gWihlLHQsaSl7dmFyIG4scz10aGlzLGw9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxvPSEoIUkodCxcImhyZWZcIil8fCF0LmhyZWYpJiZ0LmhyZWYuc3BsaXQoXCIjXCIpLnBvcCgpLnRyaW0oKSxyPSEoIUkodCxcImNvbnRlbnRcIil8fCF0LmNvbnRlbnQpJiZ0LmNvbnRlbnQ7aWYociYmKEUocikmJihuPWIoJzxkaXYgY2xhc3M9XCJnaW5saW5lZC1jb250ZW50XCI+Jy5jb25jYXQocixcIjwvZGl2PlwiKSkpLEEocikpKXtcIm5vbmVcIj09ci5zdHlsZS5kaXNwbGF5JiYoci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIik7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmNsYXNzTmFtZT1cImdpbmxpbmVkLWNvbnRlbnRcIixhLmFwcGVuZENoaWxkKHIpLG49YX1pZihvKXt2YXIgaD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvKTtpZighaClyZXR1cm4hMTt2YXIgdT1oLmNsb25lTm9kZSghMCk7dS5zdHlsZS5oZWlnaHQ9dC5oZWlnaHQsdS5zdHlsZS5tYXhXaWR0aD10LndpZHRoLGQodSxcImdpbmxpbmVkLWNvbnRlbnRcIiksbj11fWlmKCFuKXJldHVybiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGFwcGVuZCBpbmxpbmUgc2xpZGUgY29udGVudFwiLHQpLCExO2wuc3R5bGUuaGVpZ2h0PXQuaGVpZ2h0LGwuc3R5bGUud2lkdGg9dC53aWR0aCxsLmFwcGVuZENoaWxkKG4pLHRoaXMuZXZlbnRzW1wiaW5saW5lY2xvc2VcIitvXT1jKFwiY2xpY2tcIix7b25FbGVtZW50OmwucXVlcnlTZWxlY3RvckFsbChcIi5ndHJpZ2dlci1jbG9zZVwiKSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHMuY2xvc2UoKX19KSxDKGkpJiZpKCl9ZnVuY3Rpb24gJChlLHQsaSl7dmFyIG49ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxzPWZ1bmN0aW9uKGUpe3ZhciB0PWUudXJsLGk9ZS5hbGxvdyxuPWUuY2FsbGJhY2sscz1lLmFwcGVuZFRvLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtyZXR1cm4gbC5jbGFzc05hbWU9XCJ2aW1lby12aWRlbyBndmlkZW9cIixsLnNyYz10LGwuc3R5bGUud2lkdGg9XCIxMDAlXCIsbC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsaSYmbC5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLGkpLGwub25sb2FkPWZ1bmN0aW9uKCl7ZChsLFwibm9kZS1yZWFkeVwiKSxDKG4pJiZuKCl9LHMmJnMuYXBwZW5kQ2hpbGQobCksbH0oe3VybDp0LmhyZWYsY2FsbGJhY2s6aX0pO24ucGFyZW50Tm9kZS5zdHlsZS5tYXhXaWR0aD10LndpZHRoLG4ucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQ9dC5oZWlnaHQsbi5hcHBlbmRDaGlsZChzKX12YXIgVT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoaSxuKXt0KHRoaXMsZSksdGhpcy5lbGVtZW50PWksdGhpcy5zZXR0aW5ncz1uLHRoaXMuZGVmYXVsdHM9e2hyZWY6XCJcIix0aXRsZTpcIlwiLHR5cGU6XCJcIixkZXNjcmlwdGlvbjpcIlwiLGRlc2NQb3NpdGlvbjpcImJvdHRvbVwiLGVmZmVjdDpcIlwiLHdpZHRoOlwiXCIsaGVpZ2h0OlwiXCIsbm9kZTohMSxjb250ZW50OiExLHpvb21hYmxlOiEwLGRyYWdnYWJsZTohMH19cmV0dXJuIG4oZSxbe2tleTpcInNvdXJjZVR5cGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lO2lmKG51bGwhPT0oZT1lLnRvTG93ZXJDYXNlKCkpLm1hdGNoKC9cXC4oanBlZ3xqcGd8anBlfGdpZnxwbmd8YXBufHdlYnB8c3ZnKSQvKSlyZXR1cm5cImltYWdlXCI7aWYoZS5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC93YXRjaFxcP3Y9KFthLXpBLVowLTlcXC1fXSspLyl8fGUubWF0Y2goL3lvdXR1XFwuYmVcXC8oW2EtekEtWjAtOVxcLV9dKykvKXx8ZS5tYXRjaCgvKHlvdXR1YmVcXC5jb218eW91dHViZS1ub2Nvb2tpZVxcLmNvbSlcXC9lbWJlZFxcLyhbYS16QS1aMC05XFwtX10rKS8pKXJldHVyblwidmlkZW9cIjtpZihlLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhbMC05XSopLykpcmV0dXJuXCJ2aWRlb1wiO2lmKG51bGwhPT1lLm1hdGNoKC9cXC4obXA0fG9nZ3x3ZWJtfG1vdikkLykpcmV0dXJuXCJ2aWRlb1wiO2lmKG51bGwhPT1lLm1hdGNoKC9cXC4obXAzfHdhdnx3bWF8YWFjfG9nZykkLykpcmV0dXJuXCJhdWRpb1wiO2lmKGUuaW5kZXhPZihcIiNcIik+LTEmJlwiXCIhPT10LnNwbGl0KFwiI1wiKS5wb3AoKS50cmltKCkpcmV0dXJuXCJpbmxpbmVcIjtyZXR1cm4gZS5pbmRleE9mKFwiZ29hamF4PXRydWVcIik+LTE/XCJhamF4XCI6XCJleHRlcm5hbFwifX0se2tleTpcInBhcnNlQ29uZmlnXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLG49cih7ZGVzY1Bvc2l0aW9uOnQuZGVzY1Bvc2l0aW9ufSx0aGlzLmRlZmF1bHRzKTtpZihQKGUpJiYhQShlKSl7SShlLFwidHlwZVwiKXx8KEkoZSxcImNvbnRlbnRcIikmJmUuY29udGVudD9lLnR5cGU9XCJpbmxpbmVcIjpJKGUsXCJocmVmXCIpJiYoZS50eXBlPXRoaXMuc291cmNlVHlwZShlLmhyZWYpKSk7dmFyIHM9cihuLGUpO3JldHVybiB0aGlzLnNldFNpemUocyx0KSxzfXZhciBsPVwiXCIsbz1lLmdldEF0dHJpYnV0ZShcImRhdGEtZ2xpZ2h0Ym94XCIpLGg9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwiYVwiPT09aCYmKGw9ZS5ocmVmKSxcImltZ1wiPT09aCYmKGw9ZS5zcmMpLG4uaHJlZj1sLGEobiwoZnVuY3Rpb24ocyxsKXtJKHQsbCkmJlwid2lkdGhcIiE9PWwmJihuW2xdPXRbbF0pO3ZhciBvPWUuZGF0YXNldFtsXTtNKG8pfHwobltsXT1pLnNhbml0aXplVmFsdWUobykpfSkpLG4uY29udGVudCYmKG4udHlwZT1cImlubGluZVwiKSwhbi50eXBlJiZsJiYobi50eXBlPXRoaXMuc291cmNlVHlwZShsKSksTShvKSl7aWYoXCJhXCI9PWgpe3ZhciBjPWUudGl0bGU7TShjKXx8XCJcIj09PWN8fChuLnRpdGxlPWMpfWlmKFwiaW1nXCI9PWgpe3ZhciBkPWUuYWx0O00oZCl8fFwiXCI9PT1kfHwobi50aXRsZT1kKX12YXIgdT1lLmdldEF0dHJpYnV0ZShcImRhdGEtZGVzY3JpcHRpb25cIik7TSh1KXx8XCJcIj09PXV8fChuLmRlc2NyaXB0aW9uPXUpfWVsc2V7dmFyIGc9W107YShuLChmdW5jdGlvbihlLHQpe2cucHVzaChcIjtcXFxccz9cIit0KX0pKSxnPWcuam9pbihcIlxcXFxzPzp8XCIpLFwiXCIhPT1vLnRyaW0oKSYmYShuLChmdW5jdGlvbihlLHQpe3ZhciBzPW8sbD1uZXcgUmVnRXhwKFwicz9cIit0K1wicz86cz8oLio/KShcIitnK1wicz86fCQpXCIpLHI9cy5tYXRjaChsKTtpZihyJiZyLmxlbmd0aCYmclsxXSl7dmFyIGE9clsxXS50cmltKCkucmVwbGFjZSgvO1xccyokLyxcIlwiKTtuW3RdPWkuc2FuaXRpemVWYWx1ZShhKX19KSl9aWYobi5kZXNjcmlwdGlvbiYmXCIuXCI9PW4uZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsMSkmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobi5kZXNjcmlwdGlvbikpbi5kZXNjcmlwdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4uZGVzY3JpcHRpb24pLmlubmVySFRNTDtlbHNle3ZhciB2PWUucXVlcnlTZWxlY3RvcihcIi5nbGlnaHRib3gtZGVzY1wiKTt2JiYobi5kZXNjcmlwdGlvbj12LmlubmVySFRNTCl9cmV0dXJuIHRoaXMuc2V0U2l6ZShuLHQpLHRoaXMuc2xpZGVDb25maWc9bixufX0se2tleTpcInNldFNpemVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPVwidmlkZW9cIj09ZS50eXBlP3RoaXMuY2hlY2tTaXplKHQudmlkZW9zV2lkdGgpOnRoaXMuY2hlY2tTaXplKHQud2lkdGgpLG49dGhpcy5jaGVja1NpemUodC5oZWlnaHQpO3JldHVybiBlLndpZHRoPUkoZSxcIndpZHRoXCIpJiZcIlwiIT09ZS53aWR0aD90aGlzLmNoZWNrU2l6ZShlLndpZHRoKTppLGUuaGVpZ2h0PUkoZSxcImhlaWdodFwiKSYmXCJcIiE9PWUuaGVpZ2h0P3RoaXMuY2hlY2tTaXplKGUuaGVpZ2h0KTpuLGV9fSx7a2V5OlwiY2hlY2tTaXplXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHooZSk/XCJcIi5jb25jYXQoZSxcInB4XCIpOmV9fSx7a2V5Olwic2FuaXRpemVWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVyblwidHJ1ZVwiIT09ZSYmXCJmYWxzZVwiIT09ZT9lOlwidHJ1ZVwiPT09ZX19XSksZX0oKSxKPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShpLG4pe3QodGhpcyxlKSx0aGlzLmVsZW1lbnQ9aSx0aGlzLmluc3RhbmNlPW59cmV0dXJuIG4oZSxbe2tleTpcInNldENvbnRlbnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYoZyh0LFwibG9hZGVkXCIpKXJldHVybiExO3ZhciBuPXRoaXMuaW5zdGFuY2Uuc2V0dGluZ3Mscz10aGlzLnNsaWRlQ29uZmlnLGw9aygpO0Mobi5iZWZvcmVTbGlkZUxvYWQpJiZuLmJlZm9yZVNsaWRlTG9hZCh7aW5kZXg6cy5pbmRleCxzbGlkZTp0LHBsYXllcjohMX0pO3ZhciBvPXMudHlwZSxyPXMuZGVzY1Bvc2l0aW9uLGE9dC5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxoPXQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtdGl0bGVcIiksYz10LnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWRlc2NcIiksdT10LnF1ZXJ5U2VsZWN0b3IoXCIuZ2Rlc2MtaW5uZXJcIiksdj1pLGY9XCJnU2xpZGVUaXRsZV9cIitzLmluZGV4LHA9XCJnU2xpZGVEZXNjX1wiK3MuaW5kZXg7aWYoQyhuLmFmdGVyU2xpZGVMb2FkKSYmKHY9ZnVuY3Rpb24oKXtDKGkpJiZpKCksbi5hZnRlclNsaWRlTG9hZCh7aW5kZXg6cy5pbmRleCxzbGlkZTp0LHBsYXllcjplLmluc3RhbmNlLmdldFNsaWRlUGxheWVySW5zdGFuY2Uocy5pbmRleCl9KX0pLFwiXCI9PXMudGl0bGUmJlwiXCI9PXMuZGVzY3JpcHRpb24/dSYmdS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodS5wYXJlbnROb2RlKTooaCYmXCJcIiE9PXMudGl0bGU/KGguaWQ9ZixoLmlubmVySFRNTD1zLnRpdGxlKTpoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaCksYyYmXCJcIiE9PXMuZGVzY3JpcHRpb24/KGMuaWQ9cCxsJiZuLm1vcmVMZW5ndGg+MD8ocy5zbWFsbERlc2NyaXB0aW9uPXRoaXMuc2xpZGVTaG9ydERlc2Mocy5kZXNjcmlwdGlvbixuLm1vcmVMZW5ndGgsbi5tb3JlVGV4dCksYy5pbm5lckhUTUw9cy5zbWFsbERlc2NyaXB0aW9uLHRoaXMuZGVzY3JpcHRpb25FdmVudHMoYyxzKSk6Yy5pbm5lckhUTUw9cy5kZXNjcmlwdGlvbik6Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpLGQoYS5wYXJlbnROb2RlLFwiZGVzYy1cIi5jb25jYXQocikpLGQodS5wYXJlbnROb2RlLFwiZGVzY3JpcHRpb24tXCIuY29uY2F0KHIpKSksZChhLFwiZ3NsaWRlLVwiLmNvbmNhdChvKSksZCh0LFwibG9hZGVkXCIpLFwidmlkZW9cIiE9PW8pe2lmKFwiZXh0ZXJuYWxcIiE9PW8pcmV0dXJuXCJpbmxpbmVcIj09PW8/KFouYXBwbHkodGhpcy5pbnN0YW5jZSxbdCxzLHZdKSx2b2lkKHMuZHJhZ2dhYmxlJiZuZXcgVih7ZHJhZ0VsOnQucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtaW5saW5lXCIpLHRvbGVyYW5jZVg6bi5kcmFnVG9sZXJhbmNlWCx0b2xlcmFuY2VZOm4uZHJhZ1RvbGVyYW5jZVksc2xpZGU6dCxpbnN0YW5jZTp0aGlzLmluc3RhbmNlfSkpKTp2b2lkKFwiaW1hZ2VcIiE9PW8/Qyh2KSYmdigpOkYodCxzLChmdW5jdGlvbigpe3ZhciBpPXQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtzLmRyYWdnYWJsZSYmbmV3IFYoe2RyYWdFbDppLHRvbGVyYW5jZVg6bi5kcmFnVG9sZXJhbmNlWCx0b2xlcmFuY2VZOm4uZHJhZ1RvbGVyYW5jZVksc2xpZGU6dCxpbnN0YW5jZTplLmluc3RhbmNlfSkscy56b29tYWJsZSYmaS5uYXR1cmFsV2lkdGg+aS5vZmZzZXRXaWR0aCYmKGQoaSxcInpvb21hYmxlXCIpLG5ldyBqKGksdCwoZnVuY3Rpb24oKXtlLmluc3RhbmNlLnJlc2l6ZSgpfSkpKSxDKHYpJiZ2KCl9KSkpOyQuYXBwbHkodGhpcyxbdCxzLHZdKX1lbHNlIFIuYXBwbHkodGhpcy5pbnN0YW5jZSxbdCxzLHZdKX19LHtrZXk6XCJzbGlkZVNob3J0RGVzY1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTo1MCxpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0sbj1pO2lmKChlPWUudHJpbSgpKS5sZW5ndGg8PXQpcmV0dXJuIGU7dmFyIHM9ZS5zdWJzdHIoMCx0LTEpO3JldHVybiBuP3MrJy4uLiA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZGVzYy1tb3JlXCI+JytpK1wiPC9hPlwiOnN9fSx7a2V5OlwiZGVzY3JpcHRpb25FdmVudHNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMsbj1lLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy1tb3JlXCIpO2lmKCFuKXJldHVybiExO2MoXCJjbGlja1wiLHtvbkVsZW1lbnQ6bix3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxuKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHM9ZG9jdW1lbnQuYm9keSxsPXYobixcIi5nc2xpZGUtZGVzY1wiKTtpZighbClyZXR1cm4hMTtsLmlubmVySFRNTD10LmRlc2NyaXB0aW9uLGQocyxcImdkZXNjLW9wZW5cIik7dmFyIG89YyhcImNsaWNrXCIse29uRWxlbWVudDpbcyx2KGwsXCIuZ3NsaWRlLWRlc2NyaXB0aW9uXCIpXSx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24oZSxuKXtcImFcIiE9PWUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJih1KHMsXCJnZGVzYy1vcGVuXCIpLGQocyxcImdkZXNjLWNsb3NlZFwiKSxsLmlubmVySFRNTD10LnNtYWxsRGVzY3JpcHRpb24saS5kZXNjcmlwdGlvbkV2ZW50cyhsLHQpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dShzLFwiZ2Rlc2MtY2xvc2VkXCIpfSksNDAwKSxvLmRlc3Ryb3koKSl9fSl9fSl9fSx7a2V5OlwiY3JlYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gYih0aGlzLmluc3RhbmNlLnNldHRpbmdzLnNsaWRlSFRNTCl9fSx7a2V5OlwiZ2V0Q29uZmlnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1uZXcgVTtyZXR1cm4gdGhpcy5zbGlkZUNvbmZpZz1lLnBhcnNlQ29uZmlnKHRoaXMuZWxlbWVudCx0aGlzLmluc3RhbmNlLnNldHRpbmdzKSx0aGlzLnNsaWRlQ29uZmlnfX1dKSxlfSgpLEs9aygpLFE9bnVsbCE9PWsoKXx8dm9pZCAwIT09ZG9jdW1lbnQuY3JlYXRlVG91Y2h8fFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fFwib25tc2dlc3R1cmVjaGFuZ2VcImluIHdpbmRvd3x8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMsZWU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLHRlPXtzZWxlY3RvcjpcIi5nbGlnaHRib3hcIixlbGVtZW50czpudWxsLHNraW46XCJjbGVhblwiLGNsb3NlQnV0dG9uOiEwLHN0YXJ0QXQ6bnVsbCxhdXRvcGxheVZpZGVvczohMCxkZXNjUG9zaXRpb246XCJib3R0b21cIix3aWR0aDpcIjkwMHB4XCIsaGVpZ2h0OlwiNTA2cHhcIix2aWRlb3NXaWR0aDpcIjk2MHB4XCIsYmVmb3JlU2xpZGVDaGFuZ2U6bnVsbCxhZnRlclNsaWRlQ2hhbmdlOm51bGwsYmVmb3JlU2xpZGVMb2FkOm51bGwsYWZ0ZXJTbGlkZUxvYWQ6bnVsbCxzbGlkZUluc2VydGVkOm51bGwsc2xpZGVSZW1vdmVkOm51bGwsb25PcGVuOm51bGwsb25DbG9zZTpudWxsLGxvb3A6ITEsem9vbWFibGU6ITAsZHJhZ2dhYmxlOiEwLGRyYWdBdXRvU25hcDohMSxkcmFnVG9sZXJhbmNlWDo0MCxkcmFnVG9sZXJhbmNlWTo2NSxwcmVsb2FkOiEwLG9uZVNsaWRlUGVyT3BlbjohMSx0b3VjaE5hdmlnYXRpb246ITAsdG91Y2hGb2xsb3dBeGlzOiEwLGtleWJvYXJkTmF2aWdhdGlvbjohMCxjbG9zZU9uT3V0c2lkZUNsaWNrOiEwLHBseXI6e2NzczpcImh0dHBzOi8vY2RuLnBseXIuaW8vMy41LjYvcGx5ci5jc3NcIixqczpcImh0dHBzOi8vY2RuLnBseXIuaW8vMy41LjYvcGx5ci5qc1wiLGNvbmZpZzp7cmF0aW86XCIxNjo5XCIseW91dHViZTp7bm9Db29raWU6ITAscmVsOjAsc2hvd2luZm86MCxpdl9sb2FkX3BvbGljeTozfSx2aW1lbzp7YnlsaW5lOiExLHBvcnRyYWl0OiExLHRpdGxlOiExLHRyYW5zcGFyZW50OiExfX19LG9wZW5FZmZlY3Q6XCJ6b29tXCIsY2xvc2VFZmZlY3Q6XCJ6b29tXCIsc2xpZGVFZmZlY3Q6XCJzbGlkZVwiLG1vcmVUZXh0OlwiU2VlIG1vcmVcIixtb3JlTGVuZ3RoOjYwLGxpZ2h0Ym94SFRNTDpcIlwiLGNzc0VmZWN0czp7ZmFkZTp7aW46XCJmYWRlSW5cIixvdXQ6XCJmYWRlT3V0XCJ9LHpvb206e2luOlwiem9vbUluXCIsb3V0Olwiem9vbU91dFwifSxzbGlkZTp7aW46XCJzbGlkZUluUmlnaHRcIixvdXQ6XCJzbGlkZU91dExlZnRcIn0sc2xpZGVfYmFjazp7aW46XCJzbGlkZUluTGVmdFwiLG91dDpcInNsaWRlT3V0UmlnaHRcIn0sbm9uZTp7aW46XCJub25lXCIsb3V0Olwibm9uZVwifX0sc3ZnOntjbG9zZTonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48Zz48cGF0aCBkPVwiTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDlDMTAuMDk2LDUwOS45ODIsMTUuMzksNTEyLDIwLjY4Myw1MTJjNS4yOTMsMCwxMC41ODYtMi4wMTksMTQuNjI1LTYuMDU5TDUwNS45NDMsMzUuMzA2QzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHpcIi8+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVwiTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNmM0LjAzOCw0LjAzOSw5LjMzMiw2LjA1OCwxNC42MjUsNi4wNThjNS4yOTMsMCwxMC41ODctMi4wMTksMTQuNjI0LTYuMDU3QzUxNC4wMTgsNDk3Ljg2Niw1MTQuMDE4LDQ4NC43NzEsNTA1Ljk0Miw0NzYuNjk0elwiLz48L2c+PC9nPjwvc3ZnPicsbmV4dDonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ3Ny4xNzUgNDc3LjE3NVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IDxnPjxwYXRoIGQ9XCJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjVjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXpcIi8+PC9nPjwvc3ZnPicscHJldjonPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ3Ny4xNzUgNDc3LjE3NVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggZD1cIk0xNDUuMTg4LDIzOC41NzVsMjE1LjUtMjE1LjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFzLTEzLjgtNS4zLTE5LjEsMGwtMjI1LjEsMjI1LjFjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDIyNS4xLDIyNWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMMTQ1LjE4OCwyMzguNTc1elwiLz48L2c+PC9zdmc+J30sc2xpZGVIVE1MOic8ZGl2IGNsYXNzPVwiZ3NsaWRlXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJnc2xpZGUtaW5uZXItY29udGVudFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImdpbm5lci1jb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLW1lZGlhXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdzbGlkZS1kZXNjcmlwdGlvblwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Rlc2MtaW5uZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImdzbGlkZS10aXRsZVwiPjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3NsaWRlLWRlc2NcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+J307dGUubGlnaHRib3hIVE1MPSc8ZGl2IGlkPVwiZ2xpZ2h0Ym94LWJvZHlcIiBjbGFzcz1cImdsaWdodGJveC1jb250YWluZXJcIj5cXG4gICAgPGRpdiBjbGFzcz1cImdsb2FkZXIgdmlzaWJsZVwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZ292ZXJsYXlcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImdjb250YWluZXJcIj5cXG4gICAgPGRpdiBpZD1cImdsaWdodGJveC1zbGlkZXJcIiBjbGFzcz1cImdzbGlkZXJcIj48L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cImduZXh0IGdidG5cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPntuZXh0U1ZHfTwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGNsYXNzPVwiZ3ByZXYgZ2J0blwiIHRhYmluZGV4PVwiMVwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPntwcmV2U1ZHfTwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGNsYXNzPVwiZ2Nsb3NlIGdidG5cIiB0YWJpbmRleD1cIjJcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj57Y2xvc2VTVkd9PC9idXR0b24+XFxuPC9kaXY+XFxuPC9kaXY+Jzt2YXIgaWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3QodGhpcyxlKSx0aGlzLnNldHRpbmdzPXIodGUsaSksdGhpcy5lZmZlY3RzQ2xhc3Nlcz10aGlzLmdldEFuaW1hdGlvbkNsYXNzZXMoKSx0aGlzLnZpZGVvUGxheWVycz17fSx0aGlzLmFwaUV2ZW50cz1bXSx0aGlzLmZ1bGxFbGVtZW50c0xpc3Q9ITF9cmV0dXJuIG4oZSxbe2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLmdldFNlbGVjdG9yKCk7dCYmKHRoaXMuYmFzZUV2ZW50cz1jKFwiY2xpY2tcIix7b25FbGVtZW50OnQsd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUub3BlbihpKX19KSksdGhpcy5lbGVtZW50cz10aGlzLmdldEVsZW1lbnRzKCl9fSx7a2V5Olwib3BlblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbDtpZigwPT10aGlzLmVsZW1lbnRzLmxlbmd0aClyZXR1cm4hMTt0aGlzLmFjdGl2ZVNsaWRlPW51bGwsdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD1udWxsLHRoaXMucHJldkFjdGl2ZVNsaWRlPW51bGw7dmFyIGk9eih0KT90OnRoaXMuc2V0dGluZ3Muc3RhcnRBdDtpZihBKGUpKXt2YXIgbj1lLmdldEF0dHJpYnV0ZShcImRhdGEtZ2FsbGVyeVwiKTtuJiYodGhpcy5mdWxsRWxlbWVudHNMaXN0PXRoaXMuZWxlbWVudHMsdGhpcy5lbGVtZW50cz10aGlzLmdldEdhbGxlcnlFbGVtZW50cyh0aGlzLmVsZW1lbnRzLG4pKSxNKGkpJiYoaT10aGlzLmdldEVsZW1lbnRJbmRleChlKSk8MCYmKGk9MCl9eihpKXx8KGk9MCksdGhpcy5idWlsZCgpLGYodGhpcy5vdmVybGF5LFwibm9uZVwiPT10aGlzLnNldHRpbmdzLm9wZW5FZmZlY3Q/XCJub25lXCI6dGhpcy5zZXR0aW5ncy5jc3NFZmVjdHMuZmFkZS5pbik7dmFyIHM9ZG9jdW1lbnQuYm9keSxsPXdpbmRvdy5pbm5lcldpZHRoLWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtpZihsPjApe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtvLnR5cGU9XCJ0ZXh0L2Nzc1wiLG8uY2xhc3NOYW1lPVwiZ2Nzcy1zdHlsZXNcIixvLmlubmVyVGV4dD1cIi5nc2Nyb2xsYmFyLWZpeGVyIHttYXJnaW4tcmlnaHQ6IFwiLmNvbmNhdChsLFwicHh9XCIpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobyksZChzLFwiZ3Njcm9sbGJhci1maXhlclwiKX1kKHMsXCJnbGlnaHRib3gtb3BlblwiKSxkKGVlLFwiZ2xpZ2h0Ym94LW9wZW5cIiksSyYmKGQoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIiksdGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdD1cInNsaWRlXCIpLHRoaXMuc2hvd1NsaWRlKGksITApLDE9PXRoaXMuZWxlbWVudHMubGVuZ3RoPyh5KHRoaXMucHJldkJ1dHRvbikseSh0aGlzLm5leHRCdXR0b24pKToobSh0aGlzLnByZXZCdXR0b24pLG0odGhpcy5uZXh0QnV0dG9uKSksdGhpcy5saWdodGJveE9wZW49ITAsdGhpcy50cmlnZ2VyKFwib3BlblwiKSxDKHRoaXMuc2V0dGluZ3Mub25PcGVuKSYmdGhpcy5zZXR0aW5ncy5vbk9wZW4oKSxRJiZ0aGlzLnNldHRpbmdzLnRvdWNoTmF2aWdhdGlvbiYmSCh0aGlzKSx0aGlzLnNldHRpbmdzLmtleWJvYXJkTmF2aWdhdGlvbiYmWSh0aGlzKX19LHtrZXk6XCJvcGVuQXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowO3RoaXMub3BlbihudWxsLGUpfX0se2tleTpcInNob3dTbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTttKHRoaXMubG9hZGVyKSx0aGlzLmluZGV4PXBhcnNlSW50KHQpO3ZhciBuPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFwiKTtuJiZ1KG4sXCJjdXJyZW50XCIpLHRoaXMuc2xpZGVBbmltYXRlT3V0KCk7dmFyIHM9dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdF07aWYoZyhzLFwibG9hZGVkXCIpKXRoaXMuc2xpZGVBbmltYXRlSW4ocyxpKSx5KHRoaXMubG9hZGVyKTtlbHNle20odGhpcy5sb2FkZXIpO3ZhciBsPXRoaXMuZWxlbWVudHNbdF07dGhpcy50cmlnZ2VyKFwic2xpZGVfYmVmb3JlX2xvYWRcIixsKSxsLmluc3RhbmNlLnNldENvbnRlbnQocywoZnVuY3Rpb24oKXt5KGUubG9hZGVyKSxlLnJlc2l6ZSgpLGUuc2xpZGVBbmltYXRlSW4ocyxpKSxlLnRyaWdnZXIoXCJzbGlkZV9hZnRlcl9sb2FkXCIsbCl9KSl9dGhpcy5zbGlkZURlc2NyaXB0aW9uPXMucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIiksdGhpcy5zbGlkZURlc2NyaXB0aW9uQ29udGFpbmVkPXRoaXMuc2xpZGVEZXNjcmlwdGlvbiYmZyh0aGlzLnNsaWRlRGVzY3JpcHRpb24ucGFyZW50Tm9kZSxcImdzbGlkZS1tZWRpYVwiKSx0aGlzLnNldHRpbmdzLnByZWxvYWQmJih0aGlzLnByZWxvYWRTbGlkZSh0KzEpLHRoaXMucHJlbG9hZFNsaWRlKHQtMSkpLHRoaXMudXBkYXRlTmF2aWdhdGlvbkNsYXNzZXMoKSx0aGlzLmFjdGl2ZVNsaWRlPXN9fSx7a2V5OlwicHJlbG9hZFNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZihlPDB8fGU+dGhpcy5lbGVtZW50cy5sZW5ndGgtMSlyZXR1cm4hMTtpZihNKHRoaXMuZWxlbWVudHNbZV0pKXJldHVybiExO3ZhciBpPXRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW2VdO2lmKGcoaSxcImxvYWRlZFwiKSlyZXR1cm4hMTt2YXIgbj10aGlzLmVsZW1lbnRzW2VdLHM9bi50eXBlO3RoaXMudHJpZ2dlcihcInNsaWRlX2JlZm9yZV9sb2FkXCIsbiksXCJ2aWRlb1wiPT1zfHxcImV4dGVybmFsXCI9PXM/c2V0VGltZW91dCgoZnVuY3Rpb24oKXtuLmluc3RhbmNlLnNldENvbnRlbnQoaSwoZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJzbGlkZV9hZnRlcl9sb2FkXCIsbil9KSl9KSwyMDApOm4uaW5zdGFuY2Uuc2V0Q29udGVudChpLChmdW5jdGlvbigpe3QudHJpZ2dlcihcInNsaWRlX2FmdGVyX2xvYWRcIixuKX0pKX19LHtrZXk6XCJwcmV2U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZ29Ub1NsaWRlKHRoaXMuaW5kZXgtMSl9fSx7a2V5OlwibmV4dFNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmdvVG9TbGlkZSh0aGlzLmluZGV4KzEpfX0se2tleTpcImdvVG9TbGlkZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZih0aGlzLnByZXZBY3RpdmVTbGlkZT10aGlzLmFjdGl2ZVNsaWRlLHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg9dGhpcy5pbmRleCwhdGhpcy5sb29wKCkmJihlPDB8fGU+dGhpcy5lbGVtZW50cy5sZW5ndGgtMSkpcmV0dXJuITE7ZTwwP2U9dGhpcy5lbGVtZW50cy5sZW5ndGgtMTplPj10aGlzLmVsZW1lbnRzLmxlbmd0aCYmKGU9MCksdGhpcy5zaG93U2xpZGUoZSl9fSx7a2V5OlwiaW5zZXJ0U2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTotMSxpPW5ldyBKKGUsdGhpcyksbj1pLmdldENvbmZpZygpLHM9aS5jcmVhdGUoKSxsPXRoaXMuZWxlbWVudHMubGVuZ3RoLTE7aWYodDwwJiYodD10aGlzLmVsZW1lbnRzLmxlbmd0aCksbi5pbmRleD10LG4ubm9kZT0hMSxuLmluc3RhbmNlPWksdGhpcy5lbGVtZW50cy5zcGxpY2UodCwwLG4pLHRoaXMuc2xpZGVzQ29udGFpbmVyKXtpZih0PmwpdGhpcy5zbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocyk7ZWxzZXt2YXIgbz10aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XTt0aGlzLnNsaWRlc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUocyxvKX0odGhpcy5zZXR0aW5ncy5wcmVsb2FkJiYwPT10aGlzLmluZGV4JiYwPT10fHx0aGlzLmluZGV4LTE9PXR8fHRoaXMuaW5kZXgrMT09dCkmJnRoaXMucHJlbG9hZFNsaWRlKHQpLDA9PXRoaXMuaW5kZXgmJjA9PXQmJih0aGlzLmluZGV4PTEpLHRoaXMudXBkYXRlTmF2aWdhdGlvbkNsYXNzZXMoKX10aGlzLnRyaWdnZXIoXCJzbGlkZV9pbnNlcnRlZFwiLHtpbmRleDp0LHNsaWRlOnRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3NsaWRlXCIpW3RdLHBsYXllcjp0aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UodCl9KSxDKHRoaXMuc2V0dGluZ3Muc2xpZGVJbnNlcnRlZCkmJnRoaXMuc2V0dGluZ3Muc2xpZGVJbnNlcnRlZCh7aW5kZXg6dCxzbGlkZTp0aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmdzbGlkZVwiKVt0XSxwbGF5ZXI6dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKHQpfSl9fSx7a2V5OlwicmVtb3ZlU2xpZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTotMTtpZihlPDB8fGU+dGhpcy5lbGVtZW50cy5sZW5ndGgtMSlyZXR1cm4hMTt2YXIgdD10aGlzLnNsaWRlc0NvbnRhaW5lciYmdGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbZV07dCYmKHRoaXMuZ2V0QWN0aXZlU2xpZGVJbmRleCgpPT1lJiYoZT09dGhpcy5lbGVtZW50cy5sZW5ndGgtMT90aGlzLnByZXZTbGlkZSgpOnRoaXMubmV4dFNsaWRlKCkpLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSksdGhpcy5lbGVtZW50cy5zcGxpY2UoZSwxKSx0aGlzLnRyaWdnZXIoXCJzbGlkZV9yZW1vdmVkXCIsZSksQyh0aGlzLnNldHRpbmdzLnNsaWRlUmVtb3ZlZCkmJnRoaXMuc2V0dGluZ3Muc2xpZGVSZW1vdmVkKGUpfX0se2tleTpcInNsaWRlQW5pbWF0ZUluXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLG49ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1tZWRpYVwiKSxzPWUucXVlcnlTZWxlY3RvcihcIi5nc2xpZGUtZGVzY3JpcHRpb25cIiksbD17aW5kZXg6dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCxzbGlkZTp0aGlzLnByZXZBY3RpdmVTbGlkZSxwbGF5ZXI6dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgpfSxvPXtpbmRleDp0aGlzLmluZGV4LHNsaWRlOnRoaXMuYWN0aXZlU2xpZGUscGxheWVyOnRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZSh0aGlzLmluZGV4KX07aWYobi5vZmZzZXRXaWR0aD4wJiZzJiYoeShzKSxzLnN0eWxlLmRpc3BsYXk9XCJcIiksdShlLHRoaXMuZWZmZWN0c0NsYXNzZXMpLHQpZihlLHRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzW3RoaXMuc2V0dGluZ3Mub3BlbkVmZmVjdF0uaW4sKGZ1bmN0aW9uKCl7IUsmJmkuc2V0dGluZ3MuYXV0b3BsYXlWaWRlb3MmJmkuc2xpZGVQbGF5ZXJQbGF5KGUpLGkudHJpZ2dlcihcInNsaWRlX2NoYW5nZWRcIix7cHJldjpsLGN1cnJlbnQ6b30pLEMoaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlKSYmaS5zZXR0aW5ncy5hZnRlclNsaWRlQ2hhbmdlLmFwcGx5KGksW2wsb10pfSkpO2Vsc2V7dmFyIHI9dGhpcy5zZXR0aW5ncy5zbGlkZUVmZmVjdCxhPVwibm9uZVwiIT09cj90aGlzLnNldHRpbmdzLmNzc0VmZWN0c1tyXS5pbjpyO3RoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXg+dGhpcy5pbmRleCYmXCJzbGlkZVwiPT10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0JiYoYT10aGlzLnNldHRpbmdzLmNzc0VmZWN0cy5zbGlkZV9iYWNrLmluKSxmKGUsYSwoZnVuY3Rpb24oKXshSyYmaS5zZXR0aW5ncy5hdXRvcGxheVZpZGVvcyYmaS5zbGlkZVBsYXllclBsYXkoZSksaS50cmlnZ2VyKFwic2xpZGVfY2hhbmdlZFwiLHtwcmV2OmwsY3VycmVudDpvfSksQyhpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UpJiZpLnNldHRpbmdzLmFmdGVyU2xpZGVDaGFuZ2UuYXBwbHkoaSxbbCxvXSl9KSl9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtpLnJlc2l6ZShlKX0pLDEwMCksZChlLFwiY3VycmVudFwiKX19LHtrZXk6XCJzbGlkZUFuaW1hdGVPdXRcIix2YWx1ZTpmdW5jdGlvbigpe2lmKCF0aGlzLnByZXZBY3RpdmVTbGlkZSlyZXR1cm4hMTt2YXIgZT10aGlzLnByZXZBY3RpdmVTbGlkZTt1KGUsdGhpcy5lZmZlY3RzQ2xhc3NlcyksZChlLFwicHJldlwiKTt2YXIgdD10aGlzLnNldHRpbmdzLnNsaWRlRWZmZWN0LGk9XCJub25lXCIhPT10P3RoaXMuc2V0dGluZ3MuY3NzRWZlY3RzW3RdLm91dDp0O3RoaXMuc2xpZGVQbGF5ZXJQYXVzZShlKSx0aGlzLnRyaWdnZXIoXCJzbGlkZV9iZWZvcmVfY2hhbmdlXCIse3ByZXY6e2luZGV4OnRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgsc2xpZGU6dGhpcy5wcmV2QWN0aXZlU2xpZGUscGxheWVyOnRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZSh0aGlzLnByZXZBY3RpdmVTbGlkZUluZGV4KX0sY3VycmVudDp7aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0aGlzLmFjdGl2ZVNsaWRlLHBsYXllcjp0aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UodGhpcy5pbmRleCl9fSksQyh0aGlzLnNldHRpbmdzLmJlZm9yZVNsaWRlQ2hhbmdlKSYmdGhpcy5zZXR0aW5ncy5iZWZvcmVTbGlkZUNoYW5nZS5hcHBseSh0aGlzLFt7aW5kZXg6dGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleCxzbGlkZTp0aGlzLnByZXZBY3RpdmVTbGlkZSxwbGF5ZXI6dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKHRoaXMucHJldkFjdGl2ZVNsaWRlSW5kZXgpfSx7aW5kZXg6dGhpcy5pbmRleCxzbGlkZTp0aGlzLmFjdGl2ZVNsaWRlLHBsYXllcjp0aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UodGhpcy5pbmRleCl9XSksdGhpcy5wcmV2QWN0aXZlU2xpZGVJbmRleD50aGlzLmluZGV4JiZcInNsaWRlXCI9PXRoaXMuc2V0dGluZ3Muc2xpZGVFZmZlY3QmJihpPXRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLnNsaWRlX2JhY2sub3V0KSxmKGUsaSwoZnVuY3Rpb24oKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLW1lZGlhXCIpLGk9ZS5xdWVyeVNlbGVjdG9yKFwiLmdzbGlkZS1kZXNjcmlwdGlvblwiKTt0LnN0eWxlLnRyYW5zZm9ybT1cIlwiLHUodCxcImdyZXNldFwiKSx0LnN0eWxlLm9wYWNpdHk9XCJcIixpJiYoaS5zdHlsZS5vcGFjaXR5PVwiXCIpLHUoZSxcInByZXZcIil9KSl9fSx7a2V5OlwiZ2V0QWxsUGxheWVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlkZW9QbGF5ZXJzfX0se2tleTpcImdldFNsaWRlUGxheWVySW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1cImd2aWRlb1wiK2UsaT10aGlzLmdldEFsbFBsYXllcnMoKTtyZXR1cm4hKCFJKGksdCl8fCFpW3RdKSYmaVt0XX19LHtrZXk6XCJzdG9wU2xpZGVWaWRlb1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKEEoZSkpe3ZhciB0PWUucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKTt0JiYoZT10LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpfWNvbnNvbGUubG9nKFwic3RvcFNsaWRlVmlkZW8gaXMgZGVwcmVjYXRlZCwgdXNlIHNsaWRlUGxheWVyUGF1c2VcIik7dmFyIGk9dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKGUpO2kmJmkucGxheWluZyYmaS5wYXVzZSgpfX0se2tleTpcInNsaWRlUGxheWVyUGF1c2VcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihBKGUpKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIik7dCYmKGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKX12YXIgaT10aGlzLmdldFNsaWRlUGxheWVySW5zdGFuY2UoZSk7aSYmaS5wbGF5aW5nJiZpLnBhdXNlKCl9fSx7a2V5OlwicGxheVNsaWRlVmlkZW9cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihBKGUpKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIik7dCYmKGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKX1jb25zb2xlLmxvZyhcInBsYXlTbGlkZVZpZGVvIGlzIGRlcHJlY2F0ZWQsIHVzZSBzbGlkZVBsYXllclBsYXlcIik7dmFyIGk9dGhpcy5nZXRTbGlkZVBsYXllckluc3RhbmNlKGUpO2kmJiFpLnBsYXlpbmcmJmkucGxheSgpfX0se2tleTpcInNsaWRlUGxheWVyUGxheVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKEEoZSkpe3ZhciB0PWUucXVlcnlTZWxlY3RvcihcIi5ndmlkZW8td3JhcHBlclwiKTt0JiYoZT10LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpfXZhciBpPXRoaXMuZ2V0U2xpZGVQbGF5ZXJJbnN0YW5jZShlKTtpJiYhaS5wbGF5aW5nJiZpLnBsYXkoKX19LHtrZXk6XCJzZXRFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy5zZXR0aW5ncy5lbGVtZW50cz0hMTt2YXIgaT1bXTtlJiZlLmxlbmd0aCYmYShlLChmdW5jdGlvbihlLG4pe3ZhciBzPW5ldyBKKGUsdCksbD1zLmdldENvbmZpZygpO2wuaW5zdGFuY2U9cyxsLmluZGV4PW4saS5wdXNoKGwpfSkpLHRoaXMuZWxlbWVudHM9aSx0aGlzLmxpZ2h0Ym94T3BlbiYmKHRoaXMuc2xpZGVzQ29udGFpbmVyLmlubmVySFRNTD1cIlwiLHRoaXMuZWxlbWVudHMubGVuZ3RoJiYoYSh0aGlzLmVsZW1lbnRzLChmdW5jdGlvbigpe3ZhciBlPWIodC5zZXR0aW5ncy5zbGlkZUhUTUwpO3Quc2xpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpfSkpLHRoaXMuc2hvd1NsaWRlKDAsITApKSl9fSx7a2V5OlwiZ2V0RWxlbWVudEluZGV4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ITE7cmV0dXJuIGEodGhpcy5lbGVtZW50cywoZnVuY3Rpb24oaSxuKXtpZihJKGksXCJub2RlXCIpJiZpLm5vZGU9PWUpcmV0dXJuIHQ9biwhMH0pKSx0fX0se2tleTpcImdldEVsZW1lbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9W107dGhpcy5lbGVtZW50cz10aGlzLmVsZW1lbnRzP3RoaXMuZWxlbWVudHM6W10sIU0odGhpcy5zZXR0aW5ncy5lbGVtZW50cykmJkwodGhpcy5zZXR0aW5ncy5lbGVtZW50cykmJnRoaXMuc2V0dGluZ3MuZWxlbWVudHMubGVuZ3RoJiZhKHRoaXMuc2V0dGluZ3MuZWxlbWVudHMsKGZ1bmN0aW9uKGksbil7dmFyIHM9bmV3IEooaSxlKSxsPXMuZ2V0Q29uZmlnKCk7bC5ub2RlPSExLGwuaW5kZXg9bixsLmluc3RhbmNlPXMsdC5wdXNoKGwpfSkpO3ZhciBpPSExO3JldHVybiB0aGlzLmdldFNlbGVjdG9yKCkmJihpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRTZWxlY3RvcigpKSksaT8oYShpLChmdW5jdGlvbihpLG4pe3ZhciBzPW5ldyBKKGksZSksbD1zLmdldENvbmZpZygpO2wubm9kZT1pLGwuaW5kZXg9bixsLmluc3RhbmNlPXMsbC5nYWxsZXJ5PWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1nYWxsZXJ5XCIpLHQucHVzaChsKX0pKSx0KTp0fX0se2tleTpcImdldEdhbGxlcnlFbGVtZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5nYWxsZXJ5PT10fSkpfX0se2tleTpcImdldFNlbGVjdG9yXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5zZXR0aW5ncy5lbGVtZW50cyYmKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3ImJlwiZGF0YS1cIj09dGhpcy5zZXR0aW5ncy5zZWxlY3Rvci5zdWJzdHJpbmcoMCw1KT9cIipbXCIuY29uY2F0KHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IsXCJdXCIpOnRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpfX0se2tleTpcImdldEFjdGl2ZVNsaWRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nc2xpZGVcIilbdGhpcy5pbmRleF19fSx7a2V5OlwiZ2V0QWN0aXZlU2xpZGVJbmRleFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5kZXh9fSx7a2V5OlwiZ2V0QW5pbWF0aW9uQ2xhc3Nlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9W107Zm9yKHZhciB0IGluIHRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzKWlmKHRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmhhc093blByb3BlcnR5KHQpKXt2YXIgaT10aGlzLnNldHRpbmdzLmNzc0VmZWN0c1t0XTtlLnB1c2goXCJnXCIuY29uY2F0KGkuaW4pKSxlLnB1c2goXCJnXCIuY29uY2F0KGkub3V0KSl9cmV0dXJuIGUuam9pbihcIiBcIil9fSx7a2V5OlwiYnVpbGRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5idWlsdClyZXR1cm4hMTt2YXIgdD1JKHRoaXMuc2V0dGluZ3Muc3ZnLFwibmV4dFwiKT90aGlzLnNldHRpbmdzLnN2Zy5uZXh0OlwiXCIsaT1JKHRoaXMuc2V0dGluZ3Muc3ZnLFwicHJldlwiKT90aGlzLnNldHRpbmdzLnN2Zy5wcmV2OlwiXCIsbj1JKHRoaXMuc2V0dGluZ3Muc3ZnLFwiY2xvc2VcIik/dGhpcy5zZXR0aW5ncy5zdmcuY2xvc2U6XCJcIixzPXRoaXMuc2V0dGluZ3MubGlnaHRib3hIVE1MO3M9YihzPShzPShzPXMucmVwbGFjZSgve25leHRTVkd9L2csdCkpLnJlcGxhY2UoL3twcmV2U1ZHfS9nLGkpKS5yZXBsYWNlKC97Y2xvc2VTVkd9L2csbikpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7dmFyIGw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbGlnaHRib3gtYm9keVwiKTt0aGlzLm1vZGFsPWw7dmFyIG89bC5xdWVyeVNlbGVjdG9yKFwiLmdjbG9zZVwiKTt0aGlzLnByZXZCdXR0b249bC5xdWVyeVNlbGVjdG9yKFwiLmdwcmV2XCIpLHRoaXMubmV4dEJ1dHRvbj1sLnF1ZXJ5U2VsZWN0b3IoXCIuZ25leHRcIiksdGhpcy5vdmVybGF5PWwucXVlcnlTZWxlY3RvcihcIi5nb3ZlcmxheVwiKSx0aGlzLmxvYWRlcj1sLnF1ZXJ5U2VsZWN0b3IoXCIuZ2xvYWRlclwiKSx0aGlzLnNsaWRlc0NvbnRhaW5lcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsaWdodGJveC1zbGlkZXJcIiksdGhpcy5ldmVudHM9e30sZCh0aGlzLm1vZGFsLFwiZ2xpZ2h0Ym94LVwiK3RoaXMuc2V0dGluZ3Muc2tpbiksdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmbyYmKHRoaXMuZXZlbnRzLmNsb3NlPWMoXCJjbGlja1wiLHtvbkVsZW1lbnQ6byx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXt0LnByZXZlbnREZWZhdWx0KCksZS5jbG9zZSgpfX0pKSxvJiYhdGhpcy5zZXR0aW5ncy5jbG9zZUJ1dHRvbiYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLHRoaXMubmV4dEJ1dHRvbiYmKHRoaXMuZXZlbnRzLm5leHQ9YyhcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLm5leHRCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUubmV4dFNsaWRlKCl9fSkpLHRoaXMucHJldkJ1dHRvbiYmKHRoaXMuZXZlbnRzLnByZXY9YyhcImNsaWNrXCIse29uRWxlbWVudDp0aGlzLnByZXZCdXR0b24sd2l0aENhbGxiYWNrOmZ1bmN0aW9uKHQsaSl7dC5wcmV2ZW50RGVmYXVsdCgpLGUucHJldlNsaWRlKCl9fSkpLHRoaXMuc2V0dGluZ3MuY2xvc2VPbk91dHNpZGVDbGljayYmKHRoaXMuZXZlbnRzLm91dENsb3NlPWMoXCJjbGlja1wiLHtvbkVsZW1lbnQ6bCx3aXRoQ2FsbGJhY2s6ZnVuY3Rpb24odCxpKXtlLnByZXZlbnRPdXRzaWRlQ2xpY2t8fGcoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIil8fHYodC50YXJnZXQsXCIuZ2lubmVyLWNvbnRhaW5lclwiKXx8dih0LnRhcmdldCxcIi5nYnRuXCIpfHxnKHQudGFyZ2V0LFwiZ25leHRcIil8fGcodC50YXJnZXQsXCJncHJldlwiKXx8ZS5jbG9zZSgpfX0pKSxhKHRoaXMuZWxlbWVudHMsKGZ1bmN0aW9uKHQpe2Uuc2xpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHQuaW5zdGFuY2UuY3JlYXRlKCkpfSkpLFEmJmQoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC10b3VjaFwiKSx0aGlzLmV2ZW50cy5yZXNpemU9YyhcInJlc2l6ZVwiLHtvbkVsZW1lbnQ6d2luZG93LHdpdGhDYWxsYmFjazpmdW5jdGlvbigpe2UucmVzaXplKCl9fSksdGhpcy5idWlsdD0hMH19LHtrZXk6XCJyZXNpemVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO2lmKChlPWV8fHRoaXMuYWN0aXZlU2xpZGUpJiYhZyhlLFwiem9vbWVkXCIpKXt2YXIgdD14KCksaT1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3ZpZGVvLXdyYXBwZXJcIiksbj1lLnF1ZXJ5U2VsZWN0b3IoXCIuZ3NsaWRlLWltYWdlXCIpLHM9dGhpcy5zbGlkZURlc2NyaXB0aW9uLGw9dC53aWR0aCxvPXQuaGVpZ2h0O2lmKGw8PTc2OD9kKGRvY3VtZW50LmJvZHksXCJnbGlnaHRib3gtbW9iaWxlXCIpOnUoZG9jdW1lbnQuYm9keSxcImdsaWdodGJveC1tb2JpbGVcIiksaXx8bil7dmFyIHI9ITE7aWYocyYmKGcocyxcImRlc2NyaXB0aW9uLWJvdHRvbVwiKXx8ZyhzLFwiZGVzY3JpcHRpb24tdG9wXCIpKSYmIWcocyxcImdhYnNvbHV0ZVwiKSYmKHI9ITApLG4paWYobDw9NzY4KXt2YXIgYT1uLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7YS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiXCIpfWVsc2UgaWYocil7dmFyIGg9cy5vZmZzZXRIZWlnaHQsYz1uLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7Yy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWF4LWhlaWdodDogY2FsYygxMDB2aCAtIFwiLmNvbmNhdChoLFwicHgpXCIpKSxzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdChjLm9mZnNldFdpZHRoLFwicHg7XCIpKX1pZihpKXt2YXIgdj1JKHRoaXMuc2V0dGluZ3MucGx5ci5jb25maWcsXCJyYXRpb1wiKT90aGlzLnNldHRpbmdzLnBseXIuY29uZmlnLnJhdGlvOlwiMTY6OVwiLGY9di5zcGxpdChcIjpcIikscD05MDAsbT1wLyhwYXJzZUludChmWzBdKS9wYXJzZUludChmWzFdKSk7aWYobT1NYXRoLmZsb29yKG0pLHImJihvLT1zLm9mZnNldEhlaWdodCksbzxtJiZsPnApe3ZhciB5PWkub2Zmc2V0V2lkdGgsYj1pLm9mZnNldEhlaWdodCxTPW8vYix3PXt3aWR0aDp5KlMsaGVpZ2h0OmIqU307aS5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdCh3LndpZHRoLFwicHhcIikpLHImJnMuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIm1heC13aWR0aDogXCIuY29uY2F0KHcud2lkdGgsXCJweDtcIikpfWVsc2UgaS5wYXJlbnROb2RlLnN0eWxlLm1heFdpZHRoPVwiXCIuY29uY2F0KHAsXCJweFwiKSxyJiZzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJtYXgtd2lkdGg6IFwiLmNvbmNhdChwLFwicHg7XCIpKX19fX19LHtrZXk6XCJyZWxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW5pdCgpfX0se2tleTpcInVwZGF0ZU5hdmlnYXRpb25DbGFzc2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxvb3AoKTt1KHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpLHUodGhpcy5wcmV2QnV0dG9uLFwiZGlzYWJsZWRcIiksMD09dGhpcy5pbmRleCYmdGhpcy5lbGVtZW50cy5sZW5ndGgtMT09MD8oZCh0aGlzLnByZXZCdXR0b24sXCJkaXNhYmxlZFwiKSxkKHRoaXMubmV4dEJ1dHRvbixcImRpc2FibGVkXCIpKTowIT09dGhpcy5pbmRleHx8ZT90aGlzLmluZGV4IT09dGhpcy5lbGVtZW50cy5sZW5ndGgtMXx8ZXx8ZCh0aGlzLm5leHRCdXR0b24sXCJkaXNhYmxlZFwiKTpkKHRoaXMucHJldkJ1dHRvbixcImRpc2FibGVkXCIpfX0se2tleTpcImxvb3BcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPUkodGhpcy5zZXR0aW5ncyxcImxvb3BBdEVuZFwiKT90aGlzLnNldHRpbmdzLmxvb3BBdEVuZDpudWxsO3JldHVybiBlPUkodGhpcy5zZXR0aW5ncyxcImxvb3BcIik/dGhpcy5zZXR0aW5ncy5sb29wOmUsZX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZighdGhpcy5saWdodGJveE9wZW4pe2lmKHRoaXMuZXZlbnRzKXtmb3IodmFyIHQgaW4gdGhpcy5ldmVudHMpdGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkodCkmJnRoaXMuZXZlbnRzW3RdLmRlc3Ryb3koKTt0aGlzLmV2ZW50cz1udWxsfXJldHVybiExfWlmKHRoaXMuY2xvc2luZylyZXR1cm4hMTt0aGlzLmNsb3Npbmc9ITAsdGhpcy5zbGlkZVBsYXllclBhdXNlKHRoaXMuYWN0aXZlU2xpZGUpLHRoaXMuZnVsbEVsZW1lbnRzTGlzdCYmKHRoaXMuZWxlbWVudHM9dGhpcy5mdWxsRWxlbWVudHNMaXN0KSxkKHRoaXMubW9kYWwsXCJnbGlnaHRib3gtY2xvc2luZ1wiKSxmKHRoaXMub3ZlcmxheSxcIm5vbmVcIj09dGhpcy5zZXR0aW5ncy5vcGVuRWZmZWN0P1wibm9uZVwiOnRoaXMuc2V0dGluZ3MuY3NzRWZlY3RzLmZhZGUub3V0KSxmKHRoaXMuYWN0aXZlU2xpZGUsdGhpcy5zZXR0aW5ncy5jc3NFZmVjdHNbdGhpcy5zZXR0aW5ncy5jbG9zZUVmZmVjdF0ub3V0LChmdW5jdGlvbigpe2lmKGUuYWN0aXZlU2xpZGU9bnVsbCxlLnByZXZBY3RpdmVTbGlkZUluZGV4PW51bGwsZS5wcmV2QWN0aXZlU2xpZGU9bnVsbCxlLmJ1aWx0PSExLGUuZXZlbnRzKXtmb3IodmFyIHQgaW4gZS5ldmVudHMpZS5ldmVudHMuaGFzT3duUHJvcGVydHkodCkmJmUuZXZlbnRzW3RdLmRlc3Ryb3koKTtlLmV2ZW50cz1udWxsfXZhciBpPWRvY3VtZW50LmJvZHk7dShlZSxcImdsaWdodGJveC1vcGVuXCIpLHUoaSxcImdsaWdodGJveC1vcGVuIHRvdWNoaW5nIGdkZXNjLW9wZW4gZ2xpZ2h0Ym94LXRvdWNoIGdsaWdodGJveC1tb2JpbGUgZ3Njcm9sbGJhci1maXhlclwiKSxlLm1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS5tb2RhbCksZS50cmlnZ2VyKFwiY2xvc2VcIiksQyhlLnNldHRpbmdzLm9uQ2xvc2UpJiZlLnNldHRpbmdzLm9uQ2xvc2UoKTt2YXIgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdjc3Mtc3R5bGVzXCIpO24mJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxlLmxpZ2h0Ym94T3Blbj0hMSxlLmNsb3Npbmc9bnVsbH0pKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCksdGhpcy5jbGVhckFsbEV2ZW50cygpLHRoaXMuYmFzZUV2ZW50cy5kZXN0cm95KCl9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl07aWYoIWV8fCFDKHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudCBuYW1lIGFuZCBjYWxsYmFjayBtdXN0IGJlIGRlZmluZWRcIik7dGhpcy5hcGlFdmVudHMucHVzaCh7ZXZ0OmUsb25jZTppLGNhbGxiYWNrOnR9KX19LHtrZXk6XCJvbmNlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLm9uKGUsdCwhMCl9fSx7a2V5OlwidHJpZ2dlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbCxuPVtdO2EodGhpcy5hcGlFdmVudHMsKGZ1bmN0aW9uKHQscyl7dmFyIGw9dC5ldnQsbz10Lm9uY2Uscj10LmNhbGxiYWNrO2w9PWUmJihyKGkpLG8mJm4ucHVzaChzKSl9KSksbi5sZW5ndGgmJmEobiwoZnVuY3Rpb24oZSl7cmV0dXJuIHQuYXBpRXZlbnRzLnNwbGljZShlLDEpfSkpfX0se2tleTpcImNsZWFyQWxsRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmFwaUV2ZW50cy5wdXNoKHtldnQ6ZXZ0LG9uY2U6b25jZSxjYWxsYmFjazpjYWxsYmFja30pfX0se2tleTpcInZlcnNpb25cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiMy4wLjVcIn19XSksZX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1uZXcgaWUoZSk7cmV0dXJuIHQuaW5pdCgpLHR9fSkpOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vIE1haW4gc2NyaXB0cyBmaWxlXG5pbXBvcnQgJy4vanMvaW5kZXgnO1xuXG4vLyBNYWluIHN0eWxlcyBmaWxlXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcblxuLy8gSW1hZ2VzXG5pbXBvcnQgJy4vbWVkaWEvbG9nby5wbmcnO1xuaW1wb3J0ICcuL21lZGlhL2xvZ28tYmxhY2sucG5nJztcbmltcG9ydCAnLi9tZWRpYS9ob21lcGFnZS1iYW5uZXIuanBnJztcblxuLy8gRm9udCBhd2Vzb21lIGljb25zXG5pbXBvcnQgJy4vanMvZm9udGF3ZXNvbWUnO1xuIiwiLy8gRm9udEF3ZXNvbWUgSWNvbnNcbi8vIEltcG9ydCBpY29ucyBvbmUgYnkgb25lIHRvIHJlZHVjZSBzaXplIG9mIHRoZSBvdXRwdXRcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN0YXInO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNob3BwaW5nQmFnJztcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVjayc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFJbmZvQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZXZyb25VcCc7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYU1hcE1hcmtlckFsdCc7XG5pbXBvcnQgeyBmYVNodXR0bGVWYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaHV0dGxlVmFuJztcbmltcG9ydCB7IGZhQ3JlZGl0Q2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNyZWRpdENhcmQnO1xuaW1wb3J0IHsgZmFGbGFnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRmxhZyc7XG5pbXBvcnQgeyBmYUNjTWFzdGVyY2FyZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFDY01hc3RlcmNhcmQnO1xuaW1wb3J0IHsgZmFDY1Zpc2EgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NWaXNhJztcbmltcG9ydCB7IGZhQ2NQYXlwYWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhQ2NQYXlwYWwnO1xuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRpbWVzJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcbmltcG9ydCB7IGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVBsdXMnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFQZW5jaWxBbHQnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdCc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUXVlc3Rpb25DaXJjbGUnO1xuaW1wb3J0IHsgZmFGYWNlYm9vayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFGYWNlYm9vayc7XG5pbXBvcnQgeyBmYVR3aXR0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zL2ZhVHdpdHRlcic7XG5pbXBvcnQgeyBmYUluc3RhZ3JhbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFJbnN0YWdyYW0nO1xuaW1wb3J0IHsgZmFCYW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFCYW4nO1xuaW1wb3J0IHsgZmFBZGp1c3QgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFBZGp1c3QnO1xuaW1wb3J0IHsgZmFDbG9jayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNsb2NrJztcbmltcG9ydCB7IGZhUmVwbHlBbGwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFSZXBseUFsbCc7XG5cbmxpYnJhcnkuYWRkKGZhU3RhciwgZmFRdWVzdGlvbkNpcmNsZSwgZmFTaG9wcGluZ0JhZywgZmFDaGVjaywgZmFFeGNsYW1hdGlvbkNpcmNsZSxcbiAgZmFJbmZvQ2lyY2xlLCBmYUNoZXZyb25VcCwgZmFNYXBNYXJrZXJBbHQsIGZhU2h1dHRsZVZhbiwgZmFDcmVkaXRDYXJkLCBmYUZsYWcsXG4gIGZhQ2NNYXN0ZXJjYXJkLCBmYUNjVmlzYSwgZmFDY1BheXBhbCwgZmFUaW1lcywgZmFTZWFyY2gsIGZhUGx1cywgZmFQZW5jaWxBbHQsXG4gIGZhU3luY0FsdCwgZmFGYWNlYm9vaywgZmFUd2l0dGVyLCBmYUluc3RhZ3JhbSwgZmFCYW4sIGZhQWRqdXN0LCBmYUNsb2NrLCBmYVJlcGx5QWxsXG4pO1xuZG9tLndhdGNoKCk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwLm5hdGl2ZS9kaXN0L2Jvb3RzdHJhcC1uYXRpdmUnO1xuXG5pbXBvcnQgU3lsaXVzUmF0aW5nIGZyb20gJy4vc3lsaXVzLXJhdGluZyc7XG5pbXBvcnQgU3lsaXVzVG9nZ2xlIGZyb20gJy4vc3lsaXVzLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQWRkVG9DYXJ0IGZyb20gJy4vc3lsaXVzLWFkZC10by1jYXJ0JztcbmltcG9ydCBTeWxpdXNSZW1vdmVGcm9tQ2FydCBmcm9tICcuL3N5bGl1cy1yZW1vdmUtZnJvbS1jYXJ0JztcbmltcG9ydCBTeWxpdXNBcGlUb2dnbGUgZnJvbSAnLi9zeWxpdXMtYXBpLXRvZ2dsZSc7XG5pbXBvcnQgU3lsaXVzQXBpTG9naW4gZnJvbSAnLi9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCBTeWxpdXNWYXJpYW50c1ByaWNlcyBmcm9tICcuL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuaW1wb3J0IFN5bGl1c1ZhcmlhbnRJbWFnZXMgZnJvbSAnLi9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0IFN5bGl1c1Byb3ZpbmNlRmllbGQgZnJvbSAnLi9zeWxpdXMtcHJvdmluY2UtZmllbGQnO1xuaW1wb3J0IFN5bGl1c0FkZHJlc3NCb29rIGZyb20gJy4vc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgU3lsaXVzTG9hZGFibGVGb3JtcyBmcm9tICcuL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcyc7XG5cbi8vIEdsb2JhbCBheGlvcyBzZXR0aW5nc1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0LmFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gTGlnaHRib3hcbiAgY29uc3QgZ2xpZ2h0Ym94ID0gR0xpZ2h0Ym94KHsgc2VsZWN0b3I6ICcuZ2xpZ2h0Ym94JyB9KTtcblxuICAvLyBBZGQgdG8gY2FydFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImZvcm1cIl0nKVxuICAgIC5mb3JFYWNoKGVsID0+IFN5bGl1c0FkZFRvQ2FydChlbCkpO1xuXG4gIC8vIFJlbW92ZSBmcm9tIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1idXR0b25dJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNSZW1vdmVGcm9tQ2FydChlbCkpO1xuXG4gIC8vIFByb3ZpbmNlIGZpZWxkXG4gIFN5bGl1c1Byb3ZpbmNlRmllbGQoKTtcblxuICAvLyBBZGRyZXNzIGJvb2tcbiAgY29uc3Qgc3lsaXVzU2hpcHBpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLXNoaXBwaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c1NoaXBwaW5nQWRkcmVzcyAmJiBzeWxpdXNTaGlwcGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNTaGlwcGluZ0FkZHJlc3MpO1xuICB9XG4gIGNvbnN0IHN5bGl1c0JpbGxpbmdBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkcmVzcy1ib29rPVwic3lsaXVzLWJpbGxpbmctYWRkcmVzc1wiXScpO1xuICBpZiAoc3lsaXVzQmlsbGluZ0FkZHJlc3MgJiYgc3lsaXVzQmlsbGluZ0FkZHJlc3MucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICBTeWxpdXNBZGRyZXNzQm9vayhzeWxpdXNCaWxsaW5nQWRkcmVzcyk7XG4gIH1cblxuICAvLyBWYXJpYW50IHByaWNlc1xuICBTeWxpdXNWYXJpYW50c1ByaWNlcygpO1xuXG4gIC8vIFN0YXIgcmF0aW5nXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJhdGluZ10nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbmV3IFN5bGl1c1JhdGluZyhlbGVtLCB7XG4gICAgICBvblJhdGUodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBUb2dnbGUgYW5kIGxvZ2luIGZyb20gY2hlY2tvdXRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKSB7XG4gICAgU3lsaXVzQXBpVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luPVwiZW1haWxcIl0nKSk7XG4gICAgU3lsaXVzQXBpTG9naW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW5dJykpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2hlY2tvdXQgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy10b2dnbGVdJykuZm9yRWFjaChlbGVtID0+IG5ldyBTeWxpdXNUb2dnbGUoZWxlbSkpO1xuXG4gIC8vIFByb2R1Y3QgaW1hZ2VzIGZvciB2YXJpYW50c1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFyaWFudC1vcHRpb25zXSwgW2RhdGEtdmFyaWFudC1jb2RlXScpKSB7IG5ldyBTeWxpdXNWYXJpYW50SW1hZ2VzKCk7IH1cblxuICAvLyBMb2FkYWJsZSBmb3Jtc1xuICBTeWxpdXNMb2FkYWJsZUZvcm1zKCk7XG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XG5cbmNvbnN0IFN5bGl1c0FkZFRvQ2FydCA9IChlbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWRpcmVjdCcpO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJlcnJvclwiXScpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCh1cmwsIHNlcmlhbGl6ZShlbGVtZW50KSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXF1ZXN0LnRoZW4oKCkgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGVycm9yLnJlc3BvbnNlLmRhdGEpLmZvckVhY2goKFssIG1lc3NhZ2VdKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2UuZXJyb3JzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRpb25FbGVtZW50LmlubmVySFRNTCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkVG9DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKF9cXHcpL2csIHdvcmRzID0+IHdvcmRzWzFdLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuY29uc3QgU3lsaXVzQWRkcmVzc0Jvb2sgPSBmdW5jdGlvbiBTeWxpdXNBZGRyZXNzQm9vayhlbCkge1xuICBjb25zdCBlbGVtZW50ID0gZWw7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZSo9JHtwYXJzZUtleShuYW1lKX1dYCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2UgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaG9pY2VEYXRhID0ge307XG5cbiAgICAgIFsuLi5jaG9pY2UuYXR0cmlidXRlc10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBjb25zdCBjYW1lbENhc2VkID0gYXR0ci5uYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpLnJlcGxhY2UoLy0oW2Etel0pL2csIGcgPT4gZ1sxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBjaG9pY2VEYXRhW2NhbWVsQ2FzZWRdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZURhdGE7XG4gICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5jbG9zZXN0KCdbZGF0YS1qcy1hZGRyZXNzLWJvb2tdJykucXVlcnlTZWxlY3RvcignLnByb3ZpbmNlLWNvbnRhaW5lcicpO1xuXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZURhdGEpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlQ29kZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VDb2RlJyk7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkICYmIHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlQ29kZUZpZWxkLnZhbHVlID0gcHJvdmluY2VDb2RlO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpbmNlTmFtZUZpZWxkICYmIHByb3ZpbmNlTmFtZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VOYW1lICE9PSAnJyB8fCBwcm92aW5jZU5hbWUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbHVlID0gcHJvdmluY2VOYW1lO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FkZHJlc3NCb29rO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c0FwaUxvZ2luID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2lnbkluQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jyk7XG4gIGNvbnN0IHVybCA9IHNpZ25JbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tdXJsJyk7XG4gIGNvbnN0IGVtYWlsRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgY29uc3QgY3NyZlRva2VuTmFtZSA9IGNzcmZUb2tlbkZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gIHNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ191c2VybmFtZScsIGVtYWlsRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ19wYXNzd29yZCcsIHBhc3N3b3JkRmllbGQudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoW2NzcmZUb2tlbk5hbWVdLCBjc3JmVG9rZW5GaWVsZC52YWx1ZSk7XG5cbiAgICBheGlvcy5wb3N0KHVybCwgcGFyYW1zKVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmlubmVySFRNTCA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0FwaUxvZ2luO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRocm90dGxlKChlKSA9PiB7XG4gICAgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgYXhpb3MuZ2V0KHVybCwgeyBwYXJhbXM6IHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgdG9nZ2xlYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7IH0pO1xuICAgIH1cbiAgfSwgMTUwMCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IFN5bGl1c0xvYWRhYmxlRm9ybXMgPSBmdW5jdGlvbiBTeWxpdXNMb2FkYWJsZUZvcm1zKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9hZGluZy1vdmVybGF5XScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0ubG9hZGFibGUnKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCAoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucGVyc2lzdGVkKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c0xvYWRhYmxlRm9ybXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgZ2V0UHJvdmluY2VJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHZhbHVlU2VsZWN0b3IpIHtcbiAgY29uc3QgdmFsID0gdmFsdWVTZWxlY3RvciA/IHZhbHVlU2VsZWN0b3IudmFsdWUgOiBudWxsO1xuICByZXR1cm4gIXZhbCB8fCB2YWwgPT0gdW5kZWZpbmVkID8gJycgOiBgdmFsdWU9XCIke3ZhbH1cImA7XG59O1xuXG5cbmNvbnN0IFN5bGl1c1Byb3ZpbmNlRmllbGQgPSBmdW5jdGlvbiBTeWxpdXNQcm92aW5jZUZpZWxkKCkge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWUkPVwiW2NvdW50cnlDb2RlXVwiXScpO1xuICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cbiAgY291bnRyeVNlbGVjdC5mb3JFYWNoKChjb3VudHJ5U2VsZWN0SXRlbSkgPT4ge1xuICAgIGNvdW50cnlTZWxlY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGFyZW50PVwiJyArIHNlbGVjdC5pZCArICdcIl0nKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCduYW1lJykucmVwbGFjZSgnY291bnRyeScsICdwcm92aW5jZScpO1xuICAgICAgY29uc3QgcHJvdmluY2VJbnB1dEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykucmVwbGFjZSgnY291bnRyeUNvZGUnLCAncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICcnIHx8IHNlbGVjdC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJvdmluY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XG5cbiAgICAgIGF4aW9zLmdldChwcm92aW5jZUNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5jb250ZW50LmluZGV4T2YoJ3NlbGVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKCduYW1lPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBuYW1lPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkTmFtZX1cIiR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnb3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJywgJ29wdGlvbiB2YWx1ZT1cIlwiJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YCwgYG9wdGlvbiAke3Byb3ZpbmNlU2VsZWN0VmFsdWV9XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJbnB1dFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZE5hbWV9XCIke3Byb3ZpbmNlSW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZUlucHV0RmllbGRJZH1cImApO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvdW50cnlTZWxlY3RJdGVtLnZhbHVlICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdEl0ZW0uZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1Byb3ZpbmNlRmllbGQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNSYXRpbmcge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJhdGluZ01heCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5kYXRhc2V0LmpzUmF0aW5nTWF4KSB8fCA1O1xuICAgICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlKSB8fCAwO1xuICAgICAgdGhpcy52aWV3T25seSA9IHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdWaWV3b25seSAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuYnRuT25FbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vbl0nKTtcbiAgICAgIHRoaXMuYnRuT2ZmRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXJhdGluZy1idG4tb2ZmXScpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByZW5kZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnJhdGluZ01heDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWxlbWVudC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUgPSBpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T25seSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPD0gdGhpcy5yYXRpbmdBdmVyYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5idG5PbkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9mZkVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGNoYW5nZUlucHV0VmFsdWUoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmpzUmF0aW5nVmFsdWUpO1xuICAgIHRoaXMucmF0aW5nQXZlcmFnZSA9IHZhbHVlO1xuICAgIHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzLm9uUmF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmF0aW5nO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN5bGl1c1JlbW92ZUZyb21DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LXJlZGlyZWN0LXVybCcpO1xuICBjb25zdCBjc3JmVG9rZW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWNzcmYtdG9rZW4nKTtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtcmVtb3ZlLWZyb20tY2FydC1hcGktdXJsJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXhpb3MuZGVsZXRlKHVybCwgeyBkYXRhOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7IH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1JlbW92ZUZyb21DYXJ0O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgU3lsaXVzVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IodHJpZ2dlcikge1xuICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50cmlnZ2VyLmRhdGFzZXQuanNUb2dnbGUpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlci5jaGVja2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzVG9nZ2xlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNsYXNzIFN5bGl1c1ZhcmlhbnRJbWFnZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LWltYWdlXScpO1xuICAgIHRoaXMubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2VMaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlTGluayA9IHRoaXMubWFpbkltYWdlTGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB0aGlzLmRlZmF1bHRJbWFnZVNyYyA9IHRoaXMubWFpbkltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldEltYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgaW5wdXRbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl06Y2hlY2tlZCwgXG4gICAgICBzZWxlY3RbbmFtZSo9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdIG9wdGlvbjpjaGVja2VkXG4gICAgYCk7XG5cbiAgICByZXR1cm4gWy4uLml0ZW1zXS5tYXAoZWwgPT4gZWwudmFsdWUpLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUltYWdlU3JjKHZhcmlhbnQpIHtcbiAgICBsZXQgaW1hZ2VMaW5rID0gdGhpcy5kZWZhdWx0SW1hZ2VMaW5rO1xuICAgIGxldCBpbWFnZVNyYyA9IHRoaXMuZGVmYXVsdEltYWdlU3JjO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1jb2RlPVwiJHt2YXJpYW50fVwiXSwgXG4gICAgICAuc3lsaXVzLWltYWdlLXZhcmlhbnRzIFtkYXRhLXZhcmlhbnQtb3B0aW9ucz1cIiR7dmFyaWFudH0gXCJdXG4gICAgYCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1qcy1wcm9kdWN0LXRodW1ibmFpbF0nKTtcbiAgICAgIGltYWdlTGluayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhJykuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBpbWFnZVNyYyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFyZ2UtdGh1bWJuYWlsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1hZ2VMaW5rLCBpbWFnZVNyYyB9O1xuICB9XG5cbiAgc2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRBY3RpdmVJbWFnZVNyYyh0aGlzLmdldEFjdGl2ZVZhcmlhbnQoKSk7XG4gICAgdGhpcy5tYWluSW1hZ2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGltZy5pbWFnZUxpbmspO1xuICAgIHRoaXMubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmltYWdlU3JjKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50SW1hZ2VzO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgUGF3ZcWCIErEmWRyemVqZXdza2lcbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSAnJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0IHNlbGVjdFtkYXRhLW9wdGlvbl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdFtzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHNlbGVjdG9yICs9IGBbZGF0YS0ke3NlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIGxldCBwcmljZSA9ICcnO1xuXG4gICAgICBpZiAocHJpY2VFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByaWNlID0gcHJpY2VFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJpY2UgIT09ICcnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLmdldEF0dHJpYnV0ZSgnZGF0YS11bmF2YWlsYWJsZS10ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpLmlubmVySFRNTDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gcHJpY2U7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgU3lsaXVzVmFyaWFudHNQcmljZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN5bGl1c1ZhcmlhbnRzUHJpY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpIHx8IG51bGw7XG4gIGNvbnN0IHN5bGl1c1Byb2R1Y3RWYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeWxpdXMtcHJvZHVjdC12YXJpYW50cycpIHx8IG51bGw7XG5cbiAgaWYgKHN5bGl1c1ZhcmlhbnRzUHJpY2luZykge1xuICAgIGhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlKCk7XG4gIH0gZWxzZSBpZiAoc3lsaXVzUHJvZHVjdFZhcmlhbnRzKSB7XG4gICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvYm9vdHN0cmFwLXRoZW1lL2ltYWdlcy9ob21lcGFnZS1iYW5uZXIuMGJmMDcwMGMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYm9vdHN0cmFwLXRoZW1lL2ltYWdlcy9sb2dvLWJsYWNrLjExNTRiYzVhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2Jvb3RzdHJhcC10aGVtZS9pbWFnZXMvbG9nby42ZGU5OTdhYy5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9