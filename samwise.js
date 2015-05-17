'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var samwise = (function () {

  'use strict';

  /**
   * Defaults
   */

  var defaults = {};

  /**
   * Helper functions
   */

  var compose = function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return function (value) {
      return funcs.reduce(function (a, b) {
        return b(a);
      }, value);
    };
  };
  var create = function create(tag, classes) {
    var el = document.createElement(tag);
    if (classes) classes.forEach(function (cls) {
      return el.classList.add(cls);
    });
    return el;
  };
  var createFragment = function createFragment() {
    return document.createDocumentFragment();
  };
  var bindEvent = function bindEvent(type, elem, cb) {
    return elem.addEventListener(type, cb);
  };

  /**
   * Base view class
   */

  var View = (function () {
    function View() {
      _classCallCheck(this, View);

      this._view = null;
    }

    _createClass(View, [{
      key: 'view',
      get: function () {
        return this._view;
      },
      set: function (elem) {
        var frag = createFragment();
        frag.appendChild(elem);
        this._view = frag;
      }
    }]);

    return View;
  })();

  /**
   * Full screen background
   */

  var BgView = (function (_View) {
    function BgView() {
      _classCallCheck(this, BgView);

      _get(Object.getPrototypeOf(BgView.prototype), 'constructor', this).call(this);
      this.render();
    }

    _inherits(BgView, _View);

    _createClass(BgView, [{
      key: 'render',
      value: function render() {
        var outerContainer = create('div', ['sw-outerContainer']);
        var frame = new FrameView();
        outerContainer.appendChild(frame.view);
        this.view = outerContainer;
      }
    }]);

    return BgView;
  })(View);

  /**
   * Main widget window
   */

  var FrameView = (function (_View2) {
    function FrameView(options) {
      _classCallCheck(this, FrameView);

      _get(Object.getPrototypeOf(FrameView.prototype), 'constructor', this).call(this);
      this.render();
    }

    _inherits(FrameView, _View2);

    _createClass(FrameView, [{
      key: 'render',
      value: function render() {
        var frame = create('div', ['sw']);

        var header = create('header');
        var content = new ContentView();
        var footer = create('footer', ['sw-footer']);

        frame.appendChild(header);
        frame.appendChild(content.view);
        frame.appendChild(footer);

        this.view = frame;
      }
    }]);

    return FrameView;
  })(View);

  /**
   * Content box
   */

  var ContentView = (function (_View3) {
    function ContentView(options) {
      _classCallCheck(this, ContentView);

      _get(Object.getPrototypeOf(ContentView.prototype), 'constructor', this).call(this);
      this.render();
    }

    _inherits(ContentView, _View3);

    _createClass(ContentView, [{
      key: 'render',
      value: function render() {
        var main = create('div', ['sw-main']);

        var mainContent = create('div', ['sw-content']);
        var leftCol = create('ul', ['sw-column', 'sw-column--left']);
        var rightCol = create('ul', ['sw-column', 'sw-column--left']);
        mainContent.appendChild(leftCol);
        mainContent.appendChild(rightCol);
        main.appendChild(mainContent);

        this.view = main;
      }
    }]);

    return ContentView;
  })(View);

  /**
   * Link to a document
   */

  var LinkView = (function () {
    function LinkView() {
      _classCallCheck(this, LinkView);
    }

    _createClass(LinkView, [{
      key: 'render',
      value: function render() {}
    }]);

    return LinkView;
  })();

  /**
   * DOM structure
   * <div class="sw-outerContainer">
   *   <div class="sw">
   *     <header class="sw-header">
   *       <h1 class="sw-title"></h1>
   *     </header>
   *     <div class="sw-main">
   *       <div class="sw-content">
   *         <ul class="sw-column sw-column--left">
   *           <li><a href=""></a></li>
   *         </ul>
   *         <ul class="sw-column sw-column--right"></ul>
   *       </div>
   *     </div>
   *     <footer class="sw-footer"></footer>
   *   </div>
   * </div>
   */

  var mountApp = function mountApp() {
    var bg = new BgView();
    document.body.appendChild(bg.view);
  };

  /**
   * Public interface
   *
   * @param {Object} params
   *   - el: selector of the element that triggers the widget
   *   - url: endpoint to extract the data
   *   - data: required if thre is no 'url'
   *   - section: only necessary if 'url' is present. Is
   */

  return function (params) {
    console.log(params);
    var button = document.querySelector(params.elem);
    button.addEventListener('click', mountApp);
  };
})();