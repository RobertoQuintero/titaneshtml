(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// al hacer click en una imagen se abra su version grande
// Obtener la galería de imágenes
var getImages = function getImages(container) {
  return _toConsumableArray(container.querySelectorAll("img"));
}; // Obtener un array de las rutas de las imagenes grandes


var getLargeImages = function getLargeImages(gallery) {
  return gallery.map(function (el) {
    return el.src;
  });
}; // .map( el => el.replace('thumb', 'large'));
// Obtener las descripciones de las imágenes


var getDescriptions = function getDescriptions(gallery) {
  return gallery.map(function (el) {
    return el.alt;
  });
}; // Capturar el evento click en la galería para abrir el lightbox


var openLigthboxEvent = function openLigthboxEvent(container, gallery, larges, descriptions) {
  container.addEventListener("click", function (e) {
    var el = e.target,
        i = gallery.indexOf(el);

    if (el.tagName === "IMG") {
      openLightbox(gallery, i, larges, descriptions);
    }
  });
}; // Imprimir overlay del lightbox en el body


var openLightbox = function openLightbox(gallery, i, larges, descriptions) {
  var lightboxElement = document.createElement("div");
  lightboxElement.innerHTML = "\n    <div class=\"lightbox-overlay\">\n      <figure class=\"lightbox-container\">\n        <div class=\"close-modal\">\u2716</div>\n        <img src=\"".concat(larges[i], "\" class=\"ligthbox-image\">\n        <figcaption>\n          <p class=\"lightbox-description\">").concat(descriptions[i], "</p>\n          <nav class=\"lightbox-navigation\">\n            <a href=\"#\" class=\"lightbox-navigation__button prev\">\u25C0</a>\n            <span class=\"lightbox-navigation__counter\">Imagen ").concat(i + 1, " de ").concat(gallery.length, "</span>\n            <a href=\"#\" class=\"lightbox-navigation__button next\">\u25B6</a>\n          </nav>\n        </figcaption>\n      </figure>\n    </div>\n  ");
  lightboxElement.id = "lightbox";
  document.body.appendChild(lightboxElement);
  closeModal(lightboxElement);
  navigateLightbox(lightboxElement, i, larges, descriptions);
};

var closeModal = function closeModal(modalElement) {
  var closeModal = modalElement.querySelector(".close-modal");
  closeModal.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.removeChild(modalElement);
  });
};

var navigateLightbox = function navigateLightbox(lightboxElement, i, larges, descriptions) {
  var prevButton = lightboxElement.querySelector(".prev"),
      nextButton = lightboxElement.querySelector(".next"),
      image = lightboxElement.querySelector("img"),
      description = lightboxElement.querySelector("p"),
      counter = lightboxElement.querySelector("span"),
      closeButton = lightboxElement.querySelector(".close-modal");
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowRight") nextButton.click();
    if (e.key === "ArrowLeft") prevButton.click();
    if (e.key === "Escape") closeButton.click();
  });
  lightboxElement.addEventListener("click", function (e) {
    e.preventDefault();
    var target = e.target;

    if (target === prevButton) {
      if (i > 0) {
        image.src = larges[i - 1];
        i--;
      } else {
        image.src = larges[larges.length - 1];
        i = larges.length - 1;
      }
    } else if (target === nextButton) {
      if (i < larges.length - 1) {
        image.src = larges[i + 1];
        i++;
      } else {
        image.src = larges[0];
        i = 0;
      }
    }

    description.textContent = descriptions[i];
    counter.textContent = "Imagen ".concat(i + 1, " de ").concat(larges.length);
  });
};

var lightbox = function lightbox(container) {
  var images = getImages(container),
      larges = getLargeImages(images),
      descriptions = getDescriptions(images);
  openLigthboxEvent(container, images, larges, descriptions);
};

lightbox(document.getElementById("gallery-container"));

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

var container = document.getElementById('container');
var width = container.firstElementChild.nextElementSibling.getBoundingClientRect().width; //el ancho del proximo hermano

container.firstElementChild.before(container.lastElementChild);
container.style.transform = "translateX(-".concat(width, "px)");
setInterval(function () {
  container.style.transform = "translateX(-".concat(width * 2, "px)");
  container.classList.add('animation');
  container.append(container.firstElementChild);
  container.style.transform = "translateX(-".concat(width, "px)");
}, 15000);
container.addEventListener('animationend', function () {
  return container.classList.remove('animation');
});
window.addEventListener('resize', function () {
  width = container.firstElementChild.nextElementSibling.getBoundingClientRect().width;
  container.style.transform = "translateX(-".concat(width, "px)");
});

},{}],4:[function(require,module,exports){
"use strict";

var navtoggle = document.getElementById('navtoggle'),
    mainMenu = document.getElementById('main-menu');
navtoggle.addEventListener('click', function () {
  mainMenu.classList.toggle('show');
  mainMenu.classList.contains('show') ? navtoggle.innerHTML = '<span>Ocultar</span>' : navtoggle.innerHTML = '<i class="fa fa-bars"></i>';
});

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

var _toggle = _interopRequireDefault(require("./components/toggle"));

var _slider = _interopRequireDefault(require("./components/slider"));

var _scroll = _interopRequireDefault(require("./components/scroll"));

var _lightbox = _interopRequireDefault(require("./components/lightbox"));

var _wow = _interopRequireDefault(require("./components/wow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _wow["default"]().init();

},{"./components/lightbox":1,"./components/scroll":2,"./components/slider":3,"./components/toggle":4,"./components/wow":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9saWdodGJveC5qcyIsInNyYy9qcy9jb21wb25lbnRzL3Njcm9sbC5qcyIsInNyYy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsInNyYy9qcy9jb21wb25lbnRzL3RvZ2dsZS5qcyIsInNyYy9qcy9jb21wb25lbnRzL3dvdy5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLFNBQUQ7RUFBQSwwQkFBbUIsU0FBUyxDQUFDLGdCQUFWLENBQTJCLEtBQTNCLENBQW5CO0FBQUEsQ0FBbEIsQyxDQUVBOzs7QUFDQSxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFDLE9BQUQ7RUFBQSxPQUFhLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBQyxFQUFEO0lBQUEsT0FBUSxFQUFFLENBQUMsR0FBWDtFQUFBLENBQVosQ0FBYjtBQUFBLENBQXZCLEMsQ0FDQTtBQUVBOzs7QUFDQSxJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFrQixDQUFDLE9BQUQ7RUFBQSxPQUFhLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBQyxFQUFEO0lBQUEsT0FBUSxFQUFFLENBQUMsR0FBWDtFQUFBLENBQVosQ0FBYjtBQUFBLENBQXhCLEMsQ0FFQTs7O0FBQ0EsSUFBTSxpQkFBaUIsR0FBRyxTQUFwQixpQkFBb0IsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixNQUFyQixFQUE2QixZQUE3QixFQUE4QztFQUN0RSxTQUFTLENBQUMsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQyxDQUFELEVBQU87SUFDekMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQVg7SUFBQSxJQUNFLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBUixDQUFnQixFQUFo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QWtCLEdBQWxCO0VBQ0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7QUFDRCxDQXZoQkQ7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLGVBQUosR0FBVSxJQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gYWwgaGFjZXIgY2xpY2sgZW4gdW5hIGltYWdlbiBzZSBhYnJhIHN1IHZlcnNpb24gZ3JhbmRlXHJcblxyXG4vLyBPYnRlbmVyIGxhIGdhbGVyw61hIGRlIGltw6FnZW5lc1xyXG5jb25zdCBnZXRJbWFnZXMgPSAoY29udGFpbmVyKSA9PiBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIildO1xyXG5cclxuLy8gT2J0ZW5lciB1biBhcnJheSBkZSBsYXMgcnV0YXMgZGUgbGFzIGltYWdlbmVzIGdyYW5kZXNcclxuY29uc3QgZ2V0TGFyZ2VJbWFnZXMgPSAoZ2FsbGVyeSkgPT4gZ2FsbGVyeS5tYXAoKGVsKSA9PiBlbC5zcmMpO1xyXG4vLyAubWFwKCBlbCA9PiBlbC5yZXBsYWNlKCd0aHVtYicsICdsYXJnZScpKTtcclxuXHJcbi8vIE9idGVuZXIgbGFzIGRlc2NyaXBjaW9uZXMgZGUgbGFzIGltw6FnZW5lc1xyXG5jb25zdCBnZXREZXNjcmlwdGlvbnMgPSAoZ2FsbGVyeSkgPT4gZ2FsbGVyeS5tYXAoKGVsKSA9PiBlbC5hbHQpO1xyXG5cclxuLy8gQ2FwdHVyYXIgZWwgZXZlbnRvIGNsaWNrIGVuIGxhIGdhbGVyw61hIHBhcmEgYWJyaXIgZWwgbGlnaHRib3hcclxuY29uc3Qgb3BlbkxpZ3RoYm94RXZlbnQgPSAoY29udGFpbmVyLCBnYWxsZXJ5LCBsYXJnZXMsIGRlc2NyaXB0aW9ucykgPT4ge1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICBpID0gZ2FsbGVyeS5pbmRleE9mKGVsKTtcclxuICAgIGlmIChlbC50YWdOYW1lID09PSBcIklNR1wiKSB7XHJcbiAgICAgIG9wZW5MaWdodGJveChnYWxsZXJ5LCBpLCBsYXJnZXMsIGRlc2NyaXB0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBJbXByaW1pciBvdmVybGF5IGRlbCBsaWdodGJveCBlbiBlbCBib2R5XHJcbmNvbnN0IG9wZW5MaWdodGJveCA9IChnYWxsZXJ5LCBpLCBsYXJnZXMsIGRlc2NyaXB0aW9ucykgPT4ge1xyXG4gIGxldCBsaWdodGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxpZ2h0Ym94RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibGlnaHRib3gtb3ZlcmxheVwiPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzPVwibGlnaHRib3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCI+4pyWPC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2xhcmdlc1tpXX1cIiBjbGFzcz1cImxpZ3RoYm94LWltYWdlXCI+XHJcbiAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxpZ2h0Ym94LWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbnNbaV19PC9wPlxyXG4gICAgICAgICAgPG5hdiBjbGFzcz1cImxpZ2h0Ym94LW5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpZ2h0Ym94LW5hdmlnYXRpb25fX2J1dHRvbiBwcmV2XCI+4peAPC9hPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpZ2h0Ym94LW5hdmlnYXRpb25fX2NvdW50ZXJcIj5JbWFnZW4gJHtpICsgMX0gZGUgJHtcclxuICAgIGdhbGxlcnkubGVuZ3RoXHJcbiAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpZ2h0Ym94LW5hdmlnYXRpb25fX2J1dHRvbiBuZXh0XCI+4pa2PC9hPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgbGlnaHRib3hFbGVtZW50LmlkID0gXCJsaWdodGJveFwiO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlnaHRib3hFbGVtZW50KTtcclxuICBjbG9zZU1vZGFsKGxpZ2h0Ym94RWxlbWVudCk7XHJcbiAgbmF2aWdhdGVMaWdodGJveChsaWdodGJveEVsZW1lbnQsIGksIGxhcmdlcywgZGVzY3JpcHRpb25zKTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWxFbGVtZW50KSA9PiB7XHJcbiAgbGV0IGNsb3NlTW9kYWwgPSBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2RhbFwiKTtcclxuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbEVsZW1lbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbmF2aWdhdGVMaWdodGJveCA9IChsaWdodGJveEVsZW1lbnQsIGksIGxhcmdlcywgZGVzY3JpcHRpb25zKSA9PiB7XHJcbiAgbGV0IHByZXZCdXR0b24gPSBsaWdodGJveEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2XCIpLFxyXG4gICAgbmV4dEJ1dHRvbiA9IGxpZ2h0Ym94RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIiksXHJcbiAgICBpbWFnZSA9IGxpZ2h0Ym94RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLFxyXG4gICAgZGVzY3JpcHRpb24gPSBsaWdodGJveEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIiksXHJcbiAgICBjb3VudGVyID0gbGlnaHRib3hFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLFxyXG4gICAgY2xvc2VCdXR0b24gPSBsaWdodGJveEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2RhbFwiKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikgbmV4dEJ1dHRvbi5jbGljaygpO1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSBwcmV2QnV0dG9uLmNsaWNrKCk7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIGNsb3NlQnV0dG9uLmNsaWNrKCk7XHJcbiAgfSk7XHJcbiAgbGlnaHRib3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXQgPT09IHByZXZCdXR0b24pIHtcclxuICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGFyZ2VzW2kgLSAxXTtcclxuICAgICAgICBpLS07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGFyZ2VzW2xhcmdlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpID0gbGFyZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBuZXh0QnV0dG9uKSB7XHJcbiAgICAgIGlmIChpIDwgbGFyZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsYXJnZXNbaSArIDFdO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZS5zcmMgPSBsYXJnZXNbMF07XHJcbiAgICAgICAgaSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uc1tpXTtcclxuICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBgSW1hZ2VuICR7aSArIDF9IGRlICR7bGFyZ2VzLmxlbmd0aH1gO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbGlnaHRib3ggPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgbGV0IGltYWdlcyA9IGdldEltYWdlcyhjb250YWluZXIpLFxyXG4gICAgbGFyZ2VzID0gZ2V0TGFyZ2VJbWFnZXMoaW1hZ2VzKSxcclxuICAgIGRlc2NyaXB0aW9ucyA9IGdldERlc2NyaXB0aW9ucyhpbWFnZXMpO1xyXG4gIG9wZW5MaWd0aGJveEV2ZW50KGNvbnRhaW5lciwgaW1hZ2VzLCBsYXJnZXMsIGRlc2NyaXB0aW9ucyk7XHJcbn07XHJcblxyXG5saWdodGJveChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbGxlcnktY29udGFpbmVyXCIpKTtcclxuIiwiY29uc3QgZ2V0SW5pdGlhbFNjcm9sbCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbmNvbnN0IGdldEZpbmFsU2Nyb2xsID0gZWxlbWVudCA9PiBNYXRoLmZsb29yKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0SW5pdGlhbFNjcm9sbCgpKTtcclxuXHJcbmNvbnN0IGFuaW1hdGVkU2Nyb2xsVG8gPSAodGFyZ2V0RWxlbWVudCx0aW1lKSA9PiB7XHJcbiAgbGV0IGluaXRpYWxQb3NpdGlvbiA9IGdldEluaXRpYWxTY3JvbGwoKSxcclxuICAgICAgZmluYWxQb3NpdGlvbiA9IGdldEZpbmFsU2Nyb2xsKHRhcmdldEVsZW1lbnQpLFxyXG4gICAgICBkaXN0YW5jZVRvU2Nyb2xsID0gZmluYWxQb3NpdGlvbiAtIGluaXRpYWxQb3NpdGlvbixcclxuICAgICAgc2Nyb2xsRnJhZ21lbnQgPSBNYXRoLmNlaWwoZGlzdGFuY2VUb1Njcm9sbCAvIHRpbWUpO1xyXG4gIGFuaW1hdGVTY3JvbGwoc2Nyb2xsRnJhZ21lbnQsIGZpbmFsUG9zaXRpb24pO1xyXG59O1xyXG5cclxuY29uc3QgYW5pbWF0ZVNjcm9sbCA9IChzY3JvbGxGcmFnbWVudCxmaW5hbFBvc2l0aW9uKSA9PiB7XHJcbiAgbGV0IGFuaW1hdGVkU2Nyb2xsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKz0gc2Nyb2xsRnJhZ21lbnQ7XHJcbiAgICBpZiAoc2Nyb2xsRnJhZ21lbnQgPiAwKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gZmluYWxQb3NpdGlvbiAtIChzY3JvbGxGcmFnbWVudCAvIDIpKSBjbGVhckludGVydmFsKGFuaW1hdGVkU2Nyb2xsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPCBmaW5hbFBvc2l0aW9uIC0gKHNjcm9sbEZyYWdtZW50IC8gMikpIGNsZWFySW50ZXJ2YWwoYW5pbWF0ZWRTY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gIH0sMSk7XHJcbn07XHJcblxyXG5jb25zdCBhbmltYXRlZFNjcm9sbEV2ZW50ID0gKG9yaWdpbkVsZW1lbnQsdGltZSkgPT4ge1xyXG4gIGlmIChvcmlnaW5FbGVtZW50LnRhZ05hbWUgPT09ICdBJyAmJiBvcmlnaW5FbGVtZW50Lmhhc2ggIT09ICcnKSB7XHJcbiAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yaWdpbkVsZW1lbnQuaGFzaC5zbGljZSgxKSk7XHJcbiAgICBvcmlnaW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYW5pbWF0ZWRTY3JvbGxUbyh0YXJnZXRFbGVtZW50LHRpbWUpXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGFuaW1hdGVkU2Nyb2xsQWxsTGlua3MgPSB0aW1lID0+IHtcclxuICBsZXQgbGlua3MgPSBkb2N1bWVudC5saW5rcztcclxuICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICBhbmltYXRlZFNjcm9sbEV2ZW50KGxpbmssdGltZSlcclxuICB9XHJcbn07XHJcblxyXG5hbmltYXRlZFNjcm9sbEFsbExpbmtzKDIwMCk7XHJcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxyXG5sZXQgd2lkdGggPSBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbi8vZWwgYW5jaG8gZGVsIHByb3hpbW8gaGVybWFub1xyXG5cclxuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmJlZm9yZShjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcclxuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybT0gYHRyYW5zbGF0ZVgoLSR7d2lkdGh9cHgpYFxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtPSBgdHJhbnNsYXRlWCgtJHt3aWR0aCoyfXB4KWBcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZChjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpXHJcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtPSBgdHJhbnNsYXRlWCgtJHt3aWR0aH1weClgXHJcbn0sIDE1MDAwKTtcclxuXHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCgpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgIHdpZHRoID0gY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybT0gYHRyYW5zbGF0ZVgoLSR7d2lkdGh9cHgpYFxyXG5cclxufSkiLCJsZXQgbmF2dG9nZ2xlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2dG9nZ2xlJyksXHJcbiAgICAgbWFpbk1lbnUgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbWVudScpO1xyXG5cclxubmF2dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcbiAgICBtYWluTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKVxyXG4gICAgICAgID9cdG5hdnRvZ2dsZS5pbm5lckhUTUwgPSAnPHNwYW4+T2N1bHRhcjwvc3Bhbj4nXHJcblx0XHRcdFx0Olx0bmF2dG9nZ2xlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+J1xyXG59KVxyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydtb2R1bGUnLCAnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlLCBleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLCBtb2QuZXhwb3J0cyk7XG4gICAgZ2xvYmFsLldPVyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBpc0luKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoY3VzdG9tLCBkZWZhdWx0cykge1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGN1c3RvbVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgY3VzdG9tW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1c3RvbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTW9iaWxlKGFnZW50KSB7XG4gICAgcmV0dXJuICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYWdlbnQpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIGJ1YmJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzFdO1xuICAgIHZhciBjYW5jZWwgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgZGV0YWlsID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICAgIHZhciBjdXN0b21FdmVudCA9IHZvaWQgMDtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudCwgYnViYmxlLCBjYW5jZWwsIGRldGFpbCk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET00gPCA5XG4gICAgICBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgICBjdXN0b21FdmVudC5ldmVudFR5cGUgPSBldmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9tRXZlbnQuZXZlbnROYW1lID0gZXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1c3RvbUV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdEV2ZW50KGVsZW0sIGV2ZW50KSB7XG4gICAgaWYgKGVsZW0uZGlzcGF0Y2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBXM0MgRE9NXG4gICAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgaW4gKGVsZW0gIT0gbnVsbCkpIHtcbiAgICAgIGVsZW1bZXZlbnRdKCk7XG4gICAgfSBlbHNlIGlmICgnb24nICsgZXZlbnQgaW4gKGVsZW0gIT0gbnVsbCkpIHtcbiAgICAgIGVsZW1bJ29uJyArIGV2ZW50XSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW0sIGV2ZW50LCBmbikge1xuICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET01cbiAgICAgIGVsZW0uYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGxiYWNrXG4gICAgICBlbGVtW2V2ZW50XSA9IGZuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsZW0sIGV2ZW50LCBmbikge1xuICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgLy8gVzNDIERPTVxuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5kZXRhY2hFdmVudCAhPSBudWxsKSB7XG4gICAgICAvLyBJRSBET01cbiAgICAgIGVsZW0uZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGxiYWNrXG4gICAgICBkZWxldGUgZWxlbVtldmVudF07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJIZWlnaHQoKSB7XG4gICAgaWYgKCdpbm5lckhlaWdodCcgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLy8gTWluaW1hbGlzdGljIFdlYWtNYXAgc2hpbSwganVzdCBpbiBjYXNlLlxuICB2YXIgV2Vha01hcCA9IHdpbmRvdy5XZWFrTWFwIHx8IHdpbmRvdy5Nb3pXZWFrTWFwIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYWtNYXApO1xuXG4gICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdlYWtNYXAsIFt7XG4gICAgICBrZXk6ICdnZXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMua2V5c1tpXTtcbiAgICAgICAgICBpZiAoaXRlbSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5rZXlzW2ldO1xuICAgICAgICAgIGlmIChpdGVtID09PSBrZXkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXZWFrTWFwO1xuICB9KCk7XG5cbiAgLy8gRHVtbXkgTXV0YXRpb25PYnNlcnZlciwgdG8gYXZvaWQgcmFpc2luZyBleGNlcHRpb25zLlxuICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyIHx8IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLicpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dPVy5qcyBjYW5ub3QgZGV0ZWN0IGRvbSBtdXRhdGlvbnMsIHBsZWFzZSBjYWxsIC5zeW5jKCkgYWZ0ZXIgbG9hZGluZyBuZXcgY29udGVudC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTXV0YXRpb25PYnNlcnZlciwgW3tcbiAgICAgIGtleTogJ29ic2VydmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9ic2VydmUoKSB7fVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNdXRhdGlvbk9ic2VydmVyO1xuICB9KCksIF9jbGFzcy5ub3RTdXBwb3J0ZWQgPSB0cnVlLCBfdGVtcCk7XG5cbiAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSBzaGltLCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxNzk3Mjk0XG4gIHZhciBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgfHwgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICAgIHZhciBnZXRDb21wdXRlZFN0eWxlUlggPSAvKFxcLShbYS16XSl7MX0pL2c7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUocHJvcCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgIHByb3AgPSAnc3R5bGVGbG9hdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGVSWC50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgcHJvcC5yZXBsYWNlKGdldENvbXB1dGVkU3R5bGVSWCwgZnVuY3Rpb24gKF8sIF9jaGFyKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFN0eWxlID0gZWwuY3VycmVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiAoY3VycmVudFN0eWxlICE9IG51bGwgPyBjdXJyZW50U3R5bGVbcHJvcF0gOiB2b2lkIDApIHx8IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgV09XID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdPVygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXT1cpO1xuXG4gICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICBib3hDbGFzczogJ3dvdycsXG4gICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBtb2JpbGU6IHRydWUsXG4gICAgICAgIGxpdmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICBzY3JvbGxDb250YWluZXI6IG51bGwsXG4gICAgICAgIHJlc2V0QW5pbWF0aW9uOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiBhbmltYXRlRmFjdG9yeSgpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgdGhpcy52ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J107XG5cbiAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gdGhpcy5yZXNldEFuaW1hdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnNjcm9sbENhbGxiYWNrID0gdGhpcy5zY3JvbGxDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbmZpZyA9IGV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgICAgIGlmIChvcHRpb25zLnNjcm9sbENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zY3JvbGxDb250YWluZXIpO1xuICAgICAgfVxuICAgICAgLy8gTWFwIG9mIGVsZW1lbnRzIHRvIGFuaW1hdGlvbiBuYW1lczpcbiAgICAgIHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgIHRoaXMud293RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLmNvbmZpZy5ib3hDbGFzcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdPVywgW3tcbiAgICAgIGtleTogJ2luaXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChpc0luKGRvY3VtZW50LnJlYWR5U3RhdGUsIFsnaW50ZXJhY3RpdmUnLCAnY29tcGxldGUnXSkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IFtdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jb25maWcuYm94Q2xhc3MpKTtcbiAgICAgICAgdGhpcy5hbGwgPSB0aGlzLmJveGVzLnNsaWNlKDApO1xuICAgICAgICBpZiAodGhpcy5ib3hlcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBib3ggPSB0aGlzLmJveGVzW2ldO1xuICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoYm94LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgICAgICBhZGRFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93LCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICBhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbENhbGxiYWNrLCA1MCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxpdmUpIHtcbiAgICAgICAgICB2YXIgbXV0ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVjb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gcmVjb3Jkc1tqXTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCByZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gcmVjb3JkLmFkZGVkTm9kZXNba107XG4gICAgICAgICAgICAgICAgX3RoaXMuZG9TeW5jKG5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG11dC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lciB8fCB3aW5kb3csICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICByZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N5bmMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgICAgIGlmIChNdXRhdGlvbk9ic2VydmVyLm5vdFN1cHBvcnRlZCkge1xuICAgICAgICAgIHRoaXMuZG9TeW5jKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkb1N5bmMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvU3luYyhlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXRlcmFibGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jb25maWcuYm94Q2xhc3MpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJveCA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgIGlmICghaXNJbihib3gsIHRoaXMuYWxsKSkge1xuICAgICAgICAgICAgdGhpcy5ib3hlcy5wdXNoKGJveCk7XG4gICAgICAgICAgICB0aGlzLmFsbC5wdXNoKGJveCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9wcGVkIHx8IHRoaXMuZGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZShib3gsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2hvdycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyhib3gpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlKGJveCk7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBib3guY2xhc3NOYW1lICsgJyAnICsgdGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmNhbGxiYWNrKGJveCk7XG4gICAgICAgIH1cbiAgICAgICAgZW1pdEV2ZW50KGJveCwgdGhpcy53b3dFdmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJlc2V0QW5pbWF0aW9uKSB7XG4gICAgICAgICAgYWRkRXZlbnQoYm94LCAnYW5pbWF0aW9uZW5kJywgdGhpcy5yZXNldEFuaW1hdGlvbik7XG4gICAgICAgICAgYWRkRXZlbnQoYm94LCAnb2FuaW1hdGlvbmVuZCcsIHRoaXMucmVzZXRBbmltYXRpb24pO1xuICAgICAgICAgIGFkZEV2ZW50KGJveCwgJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIHRoaXMucmVzZXRBbmltYXRpb24pO1xuICAgICAgICAgIGFkZEV2ZW50KGJveCwgJ01TQW5pbWF0aW9uRW5kJywgdGhpcy5yZXNldEFuaW1hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm94O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FwcGx5U3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5U3R5bGUoYm94LCBoaWRkZW4pIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZHVyYXRpb24nKTtcbiAgICAgICAgdmFyIGRlbGF5ID0gYm94LmdldEF0dHJpYnV0ZSgnZGF0YS13b3ctZGVsYXknKTtcbiAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd293LWl0ZXJhdGlvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuY3VzdG9tU3R5bGUoYm94LCBoaWRkZW4sIGR1cmF0aW9uLCBkZWxheSwgaXRlcmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVzZXRTdHlsZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRTdHlsZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJveCA9IHRoaXMuYm94ZXNbaV07XG4gICAgICAgICAgYm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZXNldEFuaW1hdGlvbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRBbmltYXRpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhbmltYXRpb25lbmQnKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgICAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzLCAnJykudHJpbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY3VzdG9tU3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGN1c3RvbVN0eWxlKGJveCwgaGlkZGVuLCBkdXJhdGlvbiwgZGVsYXksIGl0ZXJhdGlvbikge1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5jYWNoZUFuaW1hdGlvbk5hbWUoYm94KTtcbiAgICAgICAgfVxuICAgICAgICBib3guc3R5bGUudmlzaWJpbGl0eSA9IGhpZGRlbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgIHRoaXMudmVuZG9yU2V0KGJveC5zdHlsZSwgeyBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbkRlbGF5OiBkZWxheSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlcmF0aW9uKSB7XG4gICAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBpdGVyYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZW5kb3JTZXQoYm94LnN0eWxlLCB7IGFuaW1hdGlvbk5hbWU6IGhpZGRlbiA/ICdub25lJyA6IHRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShib3gpIH0pO1xuXG4gICAgICAgIHJldHVybiBib3g7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndmVuZG9yU2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2ZW5kb3JTZXQoZWxlbSwgcHJvcGVydGllcykge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgICAgIGVsZW1bJycgKyBuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIHZlbmRvciA9IHRoaXMudmVuZG9yc1tpXTtcbiAgICAgICAgICAgICAgZWxlbVsnJyArIHZlbmRvciArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd2ZW5kb3JDU1MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZlbmRvckNTUyhlbGVtLCBwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3R5bGUuZ2V0UHJvcGVydHlDU1NWYWx1ZShwcm9wZXJ0eSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHZlbmRvciA9IHRoaXMudmVuZG9yc1tpXTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgc3R5bGUuZ2V0UHJvcGVydHlDU1NWYWx1ZSgnLScgKyB2ZW5kb3IgKyAnLScgKyBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhbmltYXRpb25OYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRpb25OYW1lKGJveCkge1xuICAgICAgICB2YXIgYU5hbWUgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYU5hbWUgPSB0aGlzLnZlbmRvckNTUyhib3gsICdhbmltYXRpb24tbmFtZScpLmNzc1RleHQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gT3BlcmEsIGZhbGwgYmFjayB0byBwbGFpbiBwcm9wZXJ0eSB2YWx1ZVxuICAgICAgICAgIGFOYW1lID0gZ2V0Q29tcHV0ZWRTdHlsZShib3gpLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1uYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYU5hbWUgPT09ICdub25lJykge1xuICAgICAgICAgIHJldHVybiAnJzsgLy8gU1ZHL0ZpcmVmb3gsIHVuYWJsZSB0byBnZXQgYW5pbWF0aW9uIG5hbWU/XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYU5hbWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FjaGVBbmltYXRpb25OYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWNoZUFuaW1hdGlvbk5hbWUoYm94KSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMTgzNFxuICAgICAgICAvLyBib3guZGF0YXNldCBpcyBub3Qgc3VwcG9ydGVkIGZvciBTVkcgZWxlbWVudHMgaW4gRmlyZWZveFxuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25OYW1lQ2FjaGUuc2V0KGJveCwgdGhpcy5hbmltYXRpb25OYW1lKGJveCkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhY2hlZEFuaW1hdGlvbk5hbWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhY2hlZEFuaW1hdGlvbk5hbWUoYm94KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYm94KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzY3JvbGxIYW5kbGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzY3JvbGxDYWxsYmFjaycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGVkKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm94ID0gdGhpcy5ib3hlc1tpXTtcbiAgICAgICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKGJveCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coYm94KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ib3hlcyA9IHJlc3VsdHM7XG4gICAgICAgICAgaWYgKCF0aGlzLmJveGVzLmxlbmd0aCAmJiAhdGhpcy5jb25maWcubGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb2Zmc2V0VG9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvZmZzZXRUb3AoZWxlbWVudCkge1xuICAgICAgICAvLyBTVkcgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBvZmZzZXRUb3AgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHVzZSB0aGVpciBuZWFyZXN0IHBhcmVudCB0aGF0IGhhcyBhbiBvZmZzZXRUb3AuXG4gICAgICAgIC8vIEFsc28sIHVzaW5nICgnb2Zmc2V0VG9wJyBvZiBlbGVtZW50KSBjYXVzZXMgYW4gZXhjZXB0aW9uIGluIEZpcmVmb3guXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lm9mZnNldFRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHdoaWxlIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc1Zpc2libGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZShib3gpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd293LW9mZnNldCcpIHx8IHRoaXMuY29uZmlnLm9mZnNldDtcbiAgICAgICAgdmFyIHZpZXdUb3AgPSB0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHZhciB2aWV3Qm90dG9tID0gdmlld1RvcCArIE1hdGgubWluKHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsIGdldElubmVySGVpZ2h0KCkpIC0gb2Zmc2V0O1xuICAgICAgICB2YXIgdG9wID0gdGhpcy5vZmZzZXRUb3AoYm94KTtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGJveC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHRvcCA8PSB2aWV3Qm90dG9tICYmIGJvdHRvbSA+PSB2aWV3VG9wO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc2FibGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbmZpZy5tb2JpbGUgJiYgaXNNb2JpbGUobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdPVztcbiAgfSgpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFdPVztcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcbiIsImltcG9ydCB0b2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy90b2dnbGVcIjtcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgc2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsXCI7XHJcbmltcG9ydCBsaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL2xpZ2h0Ym94XCI7XHJcbmltcG9ydCBXT1cgZnJvbSBcIi4vY29tcG9uZW50cy93b3dcIjtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcbiJdfQ==
