(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var images = ['url("img/01-img.png")', 'url("img/02-img.png")', 'url("img/03-img.png")', 'url("img/04-img.png")', 'url("img/05-img.png")']; // let colors = ["#C5EBC7", "#D7D1EB", "#D8EABA", "#EBA2C0", "#EBE5AE"];

var colors = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4" // "#C5EBC7",
// "#D7D1EB",
// "#D8EABA",
// "#EBA2C0",
// "#EBE5AE",
];

function dropImage() {
  var section = document.querySelector(".section-popimg");
  var drop = document.createElement("span"); // drop.style.left = `${Math.random() * innerWidth}px`;

  drop.style.top = "".concat(Math.random() * innerHeight, "px");
  var bg = images[Math.floor(Math.random() * images.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  setTimeout(function () {
    drop.remove();
  }, 4000);
  var size = Math.random() * 150; // drop.style.width = `${size}px`;
  // drop.style.height = `${size}px`;

  drop.style.width = "".concat(50 + size, "px");
  drop.style.height = "".concat(50 + size, "px");
  drop.style.backgroundImage = bg;
  drop.style.backgroundColor = color; // drop.style.backgroundPositionY = "5px";

  section.appendChild(drop);
}

var interval = setInterval(function () {
  dropImage();
}, 50);
setTimeout(function () {
  clearInterval(interval);
}, 4000);

},{}],2:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getInitialScroll = function getInitialScroll() {
  return document.documentElement.scrollTop;
};

var getFinalScroll = function getFinalScroll(element) {
  return Math.floor(element.getBoundingClientRect().top + getInitialScroll());
};

var animatedScrollTo = function animatedScrollTo(targetElement, time) {
  var initialPosition = getInitialScroll(),
      finalPosition = getFinalScroll(targetElement),
      distanceToScroll = finalPosition - initialPosition,
      scrollFragment = Math.ceil(distanceToScroll / time);
  animateScroll(scrollFragment, finalPosition);
};

var animateScroll = function animateScroll(scrollFragment, finalPosition) {
  var animatedScroll = setInterval(function () {
    document.documentElement.scrollTop += scrollFragment;

    if (scrollFragment > 0) {
      if (document.documentElement.scrollTop > finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
    } else {
      if (document.documentElement.scrollTop < finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
    }
  }, 1);
};

var animatedScrollEvent = function animatedScrollEvent(originElement, time) {
  if (originElement.tagName === 'A' && originElement.hash !== '') {
    var targetElement = document.getElementById(originElement.hash.slice(1));
    originElement.addEventListener('click', function (e) {
      e.preventDefault();
      animatedScrollTo(targetElement, time);
    });
  }
};

var animatedScrollAllLinks = function animatedScrollAllLinks(time) {
  var links = document.links;

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      animatedScrollEvent(link, time);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

animatedScrollAllLinks(200);

},{}],3:[function(require,module,exports){
"use strict";

var navtoggle = document.getElementById('navtoggle'),
    mainMenu = document.getElementById('main-menu');
navtoggle.addEventListener('click', function () {
  mainMenu.classList.toggle('show');
  mainMenu.classList.contains('show') ? navtoggle.innerHTML = '<span>Ocultar</span>' : navtoggle.innerHTML = '<i class="fa fa-bars"></i>';
});

},{}],4:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.WOW = mod.exports;
  }
})(void 0, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function isIn(needle, haystack) {
    return haystack.indexOf(needle) >= 0;
  }

  function extend(custom, defaults) {
    for (var key in defaults) {
      if (custom[key] == null) {
        var value = defaults[key];
        custom[key] = value;
      }
    }

    return custom;
  }

  function isMobile(agent) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
  }

  function createEvent(event) {
    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var customEvent = void 0;

    if (document.createEvent != null) {
      // W3C DOM
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, bubble, cancel, detail);
    } else if (document.createEventObject != null) {
      // IE DOM < 9
      customEvent = document.createEventObject();
      customEvent.eventType = event;
    } else {
      customEvent.eventName = event;
    }

    return customEvent;
  }

  function emitEvent(elem, event) {
    if (elem.dispatchEvent != null) {
      // W3C DOM
      elem.dispatchEvent(event);
    } else if (event in (elem != null)) {
      elem[event]();
    } else if ('on' + event in (elem != null)) {
      elem['on' + event]();
    }
  }

  function addEvent(elem, event, fn) {
    if (elem.addEventListener != null) {
      // W3C DOM
      elem.addEventListener(event, fn, false);
    } else if (elem.attachEvent != null) {
      // IE DOM
      elem.attachEvent('on' + event, fn);
    } else {
      // fallback
      elem[event] = fn;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener != null) {
      // W3C DOM
      elem.removeEventListener(event, fn, false);
    } else if (elem.detachEvent != null) {
      // IE DOM
      elem.detachEvent('on' + event, fn);
    } else {
      // fallback
      delete elem[event];
    }
  }

  function getInnerHeight() {
    if ('innerHeight' in window) {
      return window.innerHeight;
    }

    return document.documentElement.clientHeight;
  } // Minimalistic WeakMap shim, just in case.


  var WeakMap = window.WeakMap || window.MozWeakMap || function () {
    function WeakMap() {
      _classCallCheck(this, WeakMap);

      this.keys = [];
      this.values = [];
    }

    _createClass(WeakMap, [{
      key: 'get',
      value: function get(key) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];

          if (item === key) {
            return this.values[i];
          }
        }

        return undefined;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];

          if (item === key) {
            this.values[i] = value;
            return this;
          }
        }

        this.keys.push(key);
        this.values.push(value);
        return this;
      }
    }]);

    return WeakMap;
  }(); // Dummy MutationObserver, to avoid raising exceptions.


  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
    function MutationObserver() {
      _classCallCheck(this, MutationObserver);

      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    _createClass(MutationObserver, [{
      key: 'observe',
      value: function observe() {}
    }]);

    return MutationObserver;
  }(), _class.notSupported = true, _temp); // getComputedStyle shim, from http://stackoverflow.com/a/21797294

  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
    var getComputedStyleRX = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(prop) {
        if (prop === 'float') {
          prop = 'styleFloat';
        }

        if (getComputedStyleRX.test(prop)) {
          prop.replace(getComputedStyleRX, function (_, _char) {
            return _char.toUpperCase();
          });
        }

        var currentStyle = el.currentStyle;
        return (currentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };

  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, WOW);

      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null,
        resetAnimation: true
      };

      this.animate = function animateFactory() {
        if ('requestAnimationFrame' in window) {
          return function (callback) {
            return window.requestAnimationFrame(callback);
          };
        }

        return function (callback) {
          return callback();
        };
      }();

      this.vendors = ['moz', 'webkit'];
      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);

      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      } // Map of elements to animation names:


      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.config.boxClass);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        this.element = window.document.documentElement;

        if (isIn(document.readyState, ['interactive', 'complete'])) {
          this.start();
        } else {
          addEvent(document, 'DOMContentLoaded', this.start);
        }

        this.finished = [];
      }
    }, {
      key: 'start',
      value: function start() {
        var _this = this;

        this.stopped = false;
        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
        this.all = this.boxes.slice(0);

        if (this.boxes.length) {
          if (this.disabled()) {
            this.resetStyle();
          } else {
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              this.applyStyle(box, true);
            }
          }
        }

        if (!this.disabled()) {
          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }

        if (this.config.live) {
          var mut = new MutationObserver(function (records) {
            for (var j = 0; j < records.length; j++) {
              var record = records[j];

              for (var k = 0; k < record.addedNodes.length; k++) {
                var node = record.addedNodes[k];

                _this.doSync(node);
              }
            }

            return undefined;
          });
          mut.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.stopped = true;
        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        removeEvent(window, 'resize', this.scrollHandler);

        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'sync',
      value: function sync() {
        if (MutationObserver.notSupported) {
          this.doSync(this.element);
        }
      }
    }, {
      key: 'doSync',
      value: function doSync(element) {
        if (typeof element === 'undefined' || element === null) {
          element = this.element;
        }

        if (element.nodeType !== 1) {
          return;
        }

        element = element.parentNode || element;
        var iterable = element.querySelectorAll('.' + this.config.boxClass);

        for (var i = 0; i < iterable.length; i++) {
          var box = iterable[i];

          if (!isIn(box, this.all)) {
            this.boxes.push(box);
            this.all.push(box);

            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(box, true);
            }

            this.scrolled = true;
          }
        }
      }
    }, {
      key: 'show',
      value: function show(box) {
        this.applyStyle(box);
        box.className = box.className + ' ' + this.config.animateClass;

        if (this.config.callback != null) {
          this.config.callback(box);
        }

        emitEvent(box, this.wowEvent);

        if (this.config.resetAnimation) {
          addEvent(box, 'animationend', this.resetAnimation);
          addEvent(box, 'oanimationend', this.resetAnimation);
          addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
          addEvent(box, 'MSAnimationEnd', this.resetAnimation);
        }

        return box;
      }
    }, {
      key: 'applyStyle',
      value: function applyStyle(box, hidden) {
        var _this2 = this;

        var duration = box.getAttribute('data-wow-duration');
        var delay = box.getAttribute('data-wow-delay');
        var iteration = box.getAttribute('data-wow-iteration');
        return this.animate(function () {
          return _this2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          box.style.visibility = 'visible';
        }

        return undefined;
      }
    }, {
      key: 'resetAnimation',
      value: function resetAnimation(event) {
        if (event.type.toLowerCase().indexOf('animationend') >= 0) {
          var target = event.target || event.srcElement;
          target.className = target.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }

        box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, {
            animationDuration: duration
          });
        }

        if (delay) {
          this.vendorSet(box.style, {
            animationDelay: delay
          });
        }

        if (iteration) {
          this.vendorSet(box.style, {
            animationIterationCount: iteration
          });
        }

        this.vendorSet(box.style, {
          animationName: hidden ? 'none' : this.cachedAnimationName(box)
        });
        return box;
      }
    }, {
      key: 'vendorSet',
      value: function vendorSet(elem, properties) {
        for (var name in properties) {
          if (properties.hasOwnProperty(name)) {
            var value = properties[name];
            elem['' + name] = value;

            for (var i = 0; i < this.vendors.length; i++) {
              var vendor = this.vendors[i];
              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
            }
          }
        }
      }
    }, {
      key: 'vendorCSS',
      value: function vendorCSS(elem, property) {
        var style = getComputedStyle(elem);
        var result = style.getPropertyCSSValue(property);

        for (var i = 0; i < this.vendors.length; i++) {
          var vendor = this.vendors[i];
          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
        }

        return result;
      }
    }, {
      key: 'animationName',
      value: function animationName(box) {
        var aName = void 0;

        try {
          aName = this.vendorCSS(box, 'animation-name').cssText;
        } catch (error) {
          // Opera, fall back to plain property value
          aName = getComputedStyle(box).getPropertyValue('animation-name');
        }

        if (aName === 'none') {
          return ''; // SVG/Firefox, unable to get animation name?
        }

        return aName;
      }
    }, {
      key: 'cacheAnimationName',
      value: function cacheAnimationName(box) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
        // box.dataset is not supported for SVG elements in Firefox
        return this.animationNameCache.set(box, this.animationName(box));
      }
    }, {
      key: 'cachedAnimationName',
      value: function cachedAnimationName(box) {
        return this.animationNameCache.get(box);
      }
    }, {
      key: 'scrollHandler',
      value: function scrollHandler() {
        this.scrolled = true;
      }
    }, {
      key: 'scrollCallback',
      value: function scrollCallback() {
        if (this.scrolled) {
          this.scrolled = false;
          var results = [];

          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];

            if (box) {
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }

              results.push(box);
            }
          }

          this.boxes = results;

          if (!this.boxes.length && !this.config.live) {
            this.stop();
          }
        }
      }
    }, {
      key: 'offsetTop',
      value: function offsetTop(element) {
        // SVG elements don't have an offsetTop in Firefox.
        // This will use their nearest parent that has an offsetTop.
        // Also, using ('offsetTop' of element) causes an exception in Firefox.
        while (element.offsetTop === undefined) {
          element = element.parentNode;
        }

        var top = element.offsetTop;

        while (element.offsetParent) {
          element = element.offsetParent;
          top += element.offsetTop;
        }

        return top;
      }
    }, {
      key: 'isVisible',
      value: function isVisible(box) {
        var offset = box.getAttribute('data-wow-offset') || this.config.offset;
        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
        var top = this.offsetTop(box);
        var bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      }
    }, {
      key: 'disabled',
      value: function disabled() {
        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);

    return WOW;
  }();

  exports["default"] = WOW;
  module.exports = exports['default'];
});

},{}],5:[function(require,module,exports){
"use strict";

var _toggle = _interopRequireDefault(require("./components/toggle"));

var _scroll = _interopRequireDefault(require("./components/scroll"));

var _wow = _interopRequireDefault(require("./components/wow"));

var _popimgs = _interopRequireDefault(require("./components/popimgs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import slider from "./components/slider";
// import lightbox from "./components/lightbox";
new _wow["default"]().init();

},{"./components/popimgs":1,"./components/scroll":2,"./components/toggle":3,"./components/wow":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9wb3BpbWdzLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvd293LmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sR0FBRyxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLEVBS1gsdUJBTFcsQ0FBYixDLENBT0E7O0FBQ0EsSUFBSSxNQUFNLEdBQUcsQ0FDWCxTQURXLEVBRVgsU0FGVyxFQUdYLFNBSFcsRUFJWCxTQUpXLEVBS1gsU0FMVyxDQU1YO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWVyxDQUFiOztBQWFBLFNBQVMsU0FBVCxHQUFxQjtFQUNuQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZDtFQUVBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQVgsQ0FIbUIsQ0FJbkI7O0VBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLGFBQW9CLElBQUksQ0FBQyxNQUFMLEtBQWdCLFdBQXBDO0VBRUEsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsTUFBTSxDQUFDLE1BQWxDLENBQUQsQ0FBZjtFQUNBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLE1BQU0sQ0FBQyxNQUFsQyxDQUFELENBQWxCO0VBRUEsVUFBVSxDQUFDLFlBQU07SUFDZixJQUFJLENBQUMsTUFBTDtFQUNELENBRlMsRUFFUCxJQUZPLENBQVY7RUFJQSxJQUFJLElB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QUFKLEdBQVUsSUFBViIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBpbWFnZXMgPSBbXG4gICd1cmwoXCJpbWcvMDEtaW1nLnBuZ1wiKScsXG4gICd1cmwoXCJpbWcvMDItaW1nLnBuZ1wiKScsXG4gICd1cmwoXCJpbWcvMDMtaW1nLnBuZ1wiKScsXG4gICd1cmwoXCJpbWcvMDQtaW1nLnBuZ1wiKScsXG4gICd1cmwoXCJpbWcvMDUtaW1nLnBuZ1wiKScsXG5dO1xuLy8gbGV0IGNvbG9ycyA9IFtcIiNDNUVCQzdcIiwgXCIjRDdEMUVCXCIsIFwiI0Q4RUFCQVwiLCBcIiNFQkEyQzBcIiwgXCIjRUJFNUFFXCJdO1xubGV0IGNvbG9ycyA9IFtcbiAgXCIjOWI1ZGU1XCIsXG4gIFwiI2YxNWJiNVwiLFxuICBcIiNmZWU0NDBcIixcbiAgXCIjMDBiYmY5XCIsXG4gIFwiIzAwZjVkNFwiLFxuICAvLyBcIiNDNUVCQzdcIixcbiAgLy8gXCIjRDdEMUVCXCIsXG4gIC8vIFwiI0Q4RUFCQVwiLFxuICAvLyBcIiNFQkEyQzBcIixcbiAgLy8gXCIjRUJFNUFFXCIsXG5dO1xuXG5mdW5jdGlvbiBkcm9wSW1hZ2UoKSB7XG4gIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uLXBvcGltZ1wiKTtcblxuICBsZXQgZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAvLyBkcm9wLnN0eWxlLmxlZnQgPSBgJHtNYXRoLnJhbmRvbSgpICogaW5uZXJXaWR0aH1weGA7XG4gIGRyb3Auc3R5bGUudG9wID0gYCR7TWF0aC5yYW5kb20oKSAqIGlubmVySGVpZ2h0fXB4YDtcblxuICBsZXQgYmcgPSBpbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VzLmxlbmd0aCldO1xuICBsZXQgY29sb3IgPSBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRyb3AucmVtb3ZlKCk7XG4gIH0sIDQwMDApO1xuXG4gIGxldCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDE1MDtcbiAgLy8gZHJvcC5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAvLyBkcm9wLnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICBkcm9wLnN0eWxlLndpZHRoID0gYCR7NTAgKyBzaXplfXB4YDtcbiAgZHJvcC5zdHlsZS5oZWlnaHQgPSBgJHs1MCArIHNpemV9cHhgO1xuICBkcm9wLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJnO1xuICBkcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAvLyBkcm9wLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjVweFwiO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGRyb3ApO1xufVxuXG5sZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGRyb3BJbWFnZSgpO1xufSwgNTApO1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG59LCA0MDAwKTtcbiIsImNvbnN0IGdldEluaXRpYWxTY3JvbGwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5jb25zdCBnZXRGaW5hbFNjcm9sbCA9IGVsZW1lbnQgPT4gTWF0aC5mbG9vcihlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGdldEluaXRpYWxTY3JvbGwoKSk7XHJcblxyXG5jb25zdCBhbmltYXRlZFNjcm9sbFRvID0gKHRhcmdldEVsZW1lbnQsdGltZSkgPT4ge1xyXG4gIGxldCBpbml0aWFsUG9zaXRpb24gPSBnZXRJbml0aWFsU2Nyb2xsKCksXHJcbiAgICAgIGZpbmFsUG9zaXRpb24gPSBnZXRGaW5hbFNjcm9sbCh0YXJnZXRFbGVtZW50KSxcclxuICAgICAgZGlzdGFuY2VUb1Njcm9sbCA9IGZpbmFsUG9zaXRpb24gLSBpbml0aWFsUG9zaXRpb24sXHJcbiAgICAgIHNjcm9sbEZyYWdtZW50ID0gTWF0aC5jZWlsKGRpc3RhbmNlVG9TY3JvbGwgLyB0aW1lKTtcclxuICBhbmltYXRlU2Nyb2xsKHNjcm9sbEZyYWdtZW50LCBmaW5hbFBvc2l0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGFuaW1hdGVTY3JvbGwgPSAoc2Nyb2xsRnJhZ21lbnQsZmluYWxQb3NpdGlvbikgPT4ge1xyXG4gIGxldCBhbmltYXRlZFNjcm9sbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICs9IHNjcm9sbEZyYWdtZW50O1xyXG4gICAgaWYgKHNjcm9sbEZyYWdtZW50ID4gMCkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IGZpbmFsUG9zaXRpb24gLSAoc2Nyb2xsRnJhZ21lbnQgLyAyKSkgY2xlYXJJbnRlcnZhbChhbmltYXRlZFNjcm9sbClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgZmluYWxQb3NpdGlvbiAtIChzY3JvbGxGcmFnbWVudCAvIDIpKSBjbGVhckludGVydmFsKGFuaW1hdGVkU2Nyb2xsKVxyXG4gICAgfVxyXG5cclxuICB9LDEpO1xyXG59O1xyXG5cclxuY29uc3QgYW5pbWF0ZWRTY3JvbGxFdmVudCA9IChvcmlnaW5FbGVtZW50LHRpbWUpID0+IHtcclxuICBpZiAob3JpZ2luRWxlbWVudC50YWdOYW1lID09PSAnQScgJiYgb3JpZ2luRWxlbWVudC5oYXNoICE9PSAnJykge1xyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnaW5FbGVtZW50Lmhhc2guc2xpY2UoMSkpO1xyXG4gICAgb3JpZ2luRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGFuaW1hdGVkU2Nyb2xsVG8odGFyZ2V0RWxlbWVudCx0aW1lKVxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhbmltYXRlZFNjcm9sbEFsbExpbmtzID0gdGltZSA9PiB7XHJcbiAgbGV0IGxpbmtzID0gZG9jdW1lbnQubGlua3M7XHJcbiAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgYW5pbWF0ZWRTY3JvbGxFdmVudChsaW5rLHRpbWUpXHJcbiAgfVxyXG59O1xyXG5cclxuYW5pbWF0ZWRTY3JvbGxBbGxMaW5rcygyMDApO1xyXG4iLCJsZXQgbmF2dG9nZ2xlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2dG9nZ2xlJyksXHJcbiAgICAgbWFpbk1lbnUgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbWVudScpO1xyXG5cclxubmF2dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcbiAgICBtYWluTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKVxyXG4gICAgICAgID9cdG5hdnRvZ2dsZS5pbm5lckhUTUwgPSAnPHNwYW4+T2N1bHRhcjwvc3Bhbj4nXHJcblx0XHRcdFx0Olx0bmF2dG9nZ2xlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+J1xyXG59KVxyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydtb2R1bGUnLCAnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlLCBleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLCBtb2QuZXhwb3J0cyk7XG4gICAgZ2xvYmFsLldPVyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBpc0luKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoY3VzdG9tLCBkZWZhdWx0cykge1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGN1c3RvbVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgY3VzdG9tW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1c3RvbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTW9iaWxlKGFnZW50KSB7XG4gICAgcmV0dXJuICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYWdlbnQpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIGJ1YmJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzFdO1xuICAgIHZhciBjYW5jZWwgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgZGV0YWlsID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICAgIHZhciBjdXN0b21FdmVudCA9IHZvaWQgMDtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudCwgYnViYmxlLCBjYW5jZWwsIGRldGFpbCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET00gPCA5XG4gICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgICBjdXN0b21FdmVudC5ldmVudFR5cGUgPSBldmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9tRXZlbnQuZXZlbnROYW1lID0gZXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdEV2ZW50KGVsZW0sIGV2ZW50KSB7XG4gICAgaWYgKGVsZW0uZGlzcGF0Y2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBXM0MgRE9NXG4gICAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgaW4gKGVsZW0gIT0gbnVsbCkpIHtcbiAgICAgIGVsZW1bZXZlbnRdKCk7XG4gICAgfSBlbHNlIGlmICgnb24nICsgZXZlbnQgaW4gKGVsZW0gIT0gbnVsbCkpIHtcbiAgICAgIGVsZW1bJ29uJyArIGV2ZW50XSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW0sIGV2ZW50LCBmbikge1xuICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET01cbiAgICAgIGVsZW0uYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGxiYWNrXG4gICAgICBlbGVtW2V2ZW50XSA9IGZuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsZW0sIGV2ZW50LCBmbikge1xuICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5kZXRhY2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET01cbiAgICAgIGVsZW0uZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGxiYWNrXG4gICAgICBkZWxldGUgZWxlbVtldmVudF07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJIZWlnaHQoKSB7XG4gICAgaWYgKCdpbm5lckhlaWdodCcgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLy8gTWluaW1hbGlzdGljIFdlYWtNYXAgc2hpbSwganVzdCBpbiBjYXNlLlxuICB2YXIgV2Vha01hcCA9IHdpbmRvdy5XZWFrTWFwIHx8IHdpbmRvdy5Nb3pXZWFrTWFwIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYWtNYXApO1xuXG4gICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdlYWtNYXAsIFt7XG4gICAgICBrZXk6ICdnZXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMua2V5c1tpXTtcbiAgICAgICAgICBpZiAoaXRlbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5rZXlzW2ldO1xuICAgICAgICAgIGlmIChpdGVtID09PSBrZXkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXZWFrTWFwO1xuICB9KCk7XG5cbiAgLy8gRHVtbXkgTXV0YXRpb25PYnNlcnZlciwgdG8gYXZvaWQgcmFpc2luZyBleGNlcHRpb25zLlxuICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyIHx8IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLicpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dPVy5qcyBjYW5ub3QgZGV0ZWN0IGRvbSBtdXRhdGlvbnMsIHBsZWFzZSBjYWxsIC5zeW5jKCkgYWZ0ZXIgbG9hZGluZyBuZXcgY29udGVudC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTXV0YXRpb25PYnNlcnZlciwgW3tcbiAgICAgIGtleTogJ29ic2VydmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9ic2VydmUoKSB7fVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNdXRhdGlvbk9ic2VydmVyO1xuICB9KCksIF9jbGFzcy5ub3RTdXBwb3J0ZWQgPSB0cnVlLCBfdGVtcCk7XG5cbiAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSBzaGltLCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzk3Mjk0XG4gIHZhciBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgfHwgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICAgIHZhciBnZXRDb21wdXRlZFN0eWxlUlggPSAvKFxcLShbYS16XSl7MX0pL2c7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUocHJvcCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgIHByb3AgPSAnc3R5bGVGbG9hdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGVSWC50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgcHJvcC5yZXBsYWNlKGdldENvbXB1dGVkU3R5bGVSWCwgZnVuY3Rpb24gKF8sIF9jaGFyKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFN0eWxlID0gZWwuY3VycmVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiAoY3VycmVudFN0eWxlICE9IG51bGwgPyBjdXJyZW50U3R5bGVbcHJvcF0gOiB2b2lkIDApIHx8IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgV09XID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdPVygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXT1cpO1xuXG4gICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICBib3hDbGFzczogJ3dvdycsXG4gICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBtb2JpbGU6IHRydWUsXG4gICAgICAgIGxpdmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICBzY3JvbGxDb250YWluZXI6IG51bGwsXG4gICAgICAgIHJlc2V0QW5pbWF0aW9uOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiBhbmltYXRlRmFjdG9yeSgpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgdGhpcy52ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J107XG5cbiAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gdGhpcy5yZXNldEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnNjcm9sbENhbGxiYWNrID0gdGhpcy5zY3JvbGxDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbmZpZyA9IGV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgICAgIGlmIChvcHRpb25zLnNjcm9sbENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zY3JvbGxDb250YWluZXIpO1xuICAgICAgfVxuICAgICAgLy8gTWFwIG9mIGVsZW1lbnRzIHRvIGFuaW1hdGlvbiBuYW1lczpcbiAgICAgIHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgIHRoaXMud293RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLmNvbmZpZy5ib3hDbGFzcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdPVywgW3tcbiAgICAgIGtleTogJ2luaXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChpc0luKGRvY3VtZW50LnJlYWR5U3RhdGUsIFsnaW50ZXJhY3RpdmUnLCAnY29tcGxldGUnXSkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IFtdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jb25maWcuYm94Q2xhc3MpKTtcbiAgICAgICAgdGhpcy5hbGwgPSB0aGlzLmJveGVzLnNsaWNlKDApO1xuICAgICAgICBpZiAodGhpcy5ib3hlcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBib3ggPSB0aGlzLmJveGVzW2ldO1xuICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoYm94LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgICAgICBhZGRFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93LCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICBhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbENhbGxiYWNrLCA1MCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxpdmUpIHtcbiAgICAgICAgICB2YXIgbXV0ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVjb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gcmVjb3Jkc1tqXTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCByZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gcmVjb3JkLmFkZGVkTm9kZXNba107XG4gICAgICAgICAgICAgICAgX3RoaXMuZG9TeW5jKG5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG11dC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lciB8fCB3aW5kb3csICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICByZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N5bmMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgICAgIGlmIChNdXRhdGlvbk9ic2VydmVyLm5vdFN1cHBvcnRlZCkge1xuICAgICAgICAgIHRoaXMuZG9TeW5jKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkb1N5bmMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvU3luYyhlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXRlcmFibGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jb25maWcuYm94Q2xhc3MpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJveCA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgIGlmICghaXNJbihib3gsIHRoaXMuYWxsKSkge1xuICAgICAgICAgICAgdGhpcy5ib3hlcy5wdXNoKGJveCk7XG4gICAgICAgICAgICB0aGlzLmFsbC5wdXNoKGJveCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9wcGVkIHx8IHRoaXMuZGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZShib3gsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2hvdycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyhib3gpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlKGJveCk7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBib3guY2xhc3NOYW1lICsgJyAnICsgdGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmNhbGxiYWNrKGJveCk7XG4gICAgICAgIH1cbiAgICAgICAgZW1pdEV2ZW50KGJveCwgdGhpcy53b3dFdmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJlc2V0QW5pbWF0aW9uKSB7XG4gICAgICAgICAgYWRkRXZlbnQoYm94LCAnYW5pbWF0aW9uZW5kJywgdGhpcy5yZXNldEFuaW1hdGlvbik7XG4gICAgICAgICAgYWRkRXZlbnQoYm94LCAnb2FuaW1hdGlvbmVuZCcsIHRoaXMucmVzZXRBbmltYXRpb24pO1xuICAgICAgICAgIGFkZEV2ZW50KGJveCwgJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIHRoaXMucmVzZXRBbmltYXRpb24pO1xuICAgICAgICAgIGFkZEV2ZW50KGJveCwgJ01TQW5pbWF0aW9uRW5kJywgdGhpcy5yZXNldEFuaW1hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm94O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FwcGx5U3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5U3R5bGUoYm94LCBoaWRkZW4pIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZHVyYXRpb24nKTtcbiAgICAgICAgdmFyIGRlbGF5ID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZGVsYXknKTtcbiAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd293LWl0ZXJhdGlvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuY3VzdG9tU3R5bGUoYm94LCBoaWRkZW4sIGR1cmF0aW9uLCBkZWxheSwgaXRlcmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVzZXRTdHlsZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRTdHlsZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJveCA9IHRoaXMuYm94ZXNbaV07XG4gICAgICAgICAgYm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZXNldEFuaW1hdGlvbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRBbmltYXRpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhbmltYXRpb25lbmQnKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgICAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzLCAnJykudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY3VzdG9tU3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGN1c3RvbVN0eWxlKGJveCwgaGlkZGVuLCBkdXJhdGlvbiwgZGVsYXksIGl0ZXJhdGlvbikge1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5jYWNoZUFuaW1hdGlvbk5hbWUoYm94KTtcbiAgICAgICAgfVxuICAgICAgICBib3guc3R5bGUudmlzaWJpbGl0eSA9IGhpZGRlbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgIHRoaXMudmVuZG9yU2V0KGJveC5zdHlsZSwgeyBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbkRlbGF5OiBkZWxheSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlcmF0aW9uKSB7XG4gICAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBpdGVyYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbk5hbWU6IGhpZGRlbiA/ICdub25lJyA6IHRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShib3gpIH0pO1xuXG4gICAgICAgIHJldHVybiBib3g7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndmVuZG9yU2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2ZW5kb3JTZXQoZWxlbSwgcHJvcGVydGllcykge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgICAgIGVsZW1bJycgKyBuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIHZlbmRvciA9IHRoaXMudmVuZG9yc1tpXTtcbiAgICAgICAgICAgICAgZWxlbVsnJyArIHZlbmRvciArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd2ZW5kb3JDU1MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZlbmRvckNTUyhlbGVtLCBwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3R5bGUuZ2V0UHJvcGVydHlDU1NWYWx1ZShwcm9wZXJ0eSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHZlbmRvciA9IHRoaXMudmVuZG9yc1tpXTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgc3R5bGUuZ2V0UHJvcGVydHlDU1NWYWx1ZSgnLScgKyB2ZW5kb3IgKyAnLScgKyBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhbmltYXRpb25OYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRpb25OYW1lKGJveCkge1xuICAgICAgICB2YXIgYU5hbWUgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYU5hbWUgPSB0aGlzLnZlbmRvckNTUyhib3gsICdhbmltYXRpb24tbmFtZScpLmNzc1RleHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gT3BlcmEsIGZhbGwgYmFjayB0byBwbGFpbiBwcm9wZXJ0eSB2YWx1ZVxuICAgICAgICAgIGFOYW1lID0gZ2V0Q29tcHV0ZWRTdHlsZShib3gpLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1uYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYU5hbWUgPT09ICdub25lJykge1xuICAgICAgICAgIHJldHVybiAnJzsgLy8gU1ZHL0ZpcmVmb3gsIHVuYWJsZSB0byBnZXQgYW5pbWF0aW9uIG5hbWU/XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYU5hbWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FjaGVBbmltYXRpb25OYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWNoZUFuaW1hdGlvbk5hbWUoYm94KSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMTgzNFxuICAgICAgICAvLyBib3guZGF0YXNldCBpcyBub3Qgc3VwcG9ydGVkIGZvciBTVkcgZWxlbWVudHMgaW4gRmlyZWZveFxuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25OYW1lQ2FjaGUuc2V0KGJveCwgdGhpcy5hbmltYXRpb25OYW1lKGJveCkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhY2hlZEFuaW1hdGlvbk5hbWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhY2hlZEFuaW1hdGlvbk5hbWUoYm94KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYm94KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzY3JvbGxIYW5kbGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzY3JvbGxDYWxsYmFjaycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGVkKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm94ID0gdGhpcy5ib3hlc1tpXTtcbiAgICAgICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKGJveCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coYm94KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ib3hlcyA9IHJlc3VsdHM7XG4gICAgICAgICAgaWYgKCF0aGlzLmJveGVzLmxlbmd0aCAmJiAhdGhpcy5jb25maWcubGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb2Zmc2V0VG9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvZmZzZXRUb3AoZWxlbWVudCkge1xuICAgICAgICAvLyBTVkcgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBvZmZzZXRUb3AgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHVzZSB0aGVpciBuZWFyZXN0IHBhcmVudCB0aGF0IGhhcyBhbiBvZmZzZXRUb3AuXG4gICAgICAgIC8vIEFsc28sIHVzaW5nICgnb2Zmc2V0VG9wJyBvZiBlbGVtZW50KSBjYXVzZXMgYW4gZXhjZXB0aW9uIGluIEZpcmVmb3guXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lm9mZnNldFRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHdoaWxlIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc1Zpc2libGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZShib3gpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd293LW9mZnNldCcpIHx8IHRoaXMuY29uZmlnLm9mZnNldDtcbiAgICAgICAgdmFyIHZpZXdUb3AgPSB0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHZhciB2aWV3Qm90dG9tID0gdmlld1RvcCArIE1hdGgubWluKHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsIGdldElubmVySGVpZ2h0KCkpIC0gb2Zmc2V0O1xuICAgICAgICB2YXIgdG9wID0gdGhpcy5vZmZzZXRUb3AoYm94KTtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGJveC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHRvcCA8PSB2aWV3Qm90dG9tICYmIGJvdHRvbSA+PSB2aWV3VG9wO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc2FibGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbmZpZy5tb2JpbGUgJiYgaXNNb2JpbGUobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdPVztcbiAgfSgpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFdPVztcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcbiIsImltcG9ydCB0b2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy90b2dnbGVcIjtcclxuLy8gaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgc2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsXCI7XHJcbi8vIGltcG9ydCBsaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL2xpZ2h0Ym94XCI7XHJcbmltcG9ydCBXT1cgZnJvbSBcIi4vY29tcG9uZW50cy93b3dcIjtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcbmltcG9ydCBwb3BpbWdzIGZyb20gXCIuL2NvbXBvbmVudHMvcG9waW1nc1wiO1xyXG4iXX0=
