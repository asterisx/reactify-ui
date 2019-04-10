"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./switch.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Switch =
/*#__PURE__*/
function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      checked: _this.props.checked || false
    });

    _defineProperty(_assertThisInitialized(_this), "validFontSizes", ['small', 'medium', 'large']);

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState(function (prevProps) {
        return {
          checked: !prevProps.checked
        };
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.checked);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getStyle", function () {
      var style = {};
      var iconColor = _this.props.iconColor;

      if (iconColor) {
        style.color = iconColor;
      }

      return style;
    });

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          checked = _this$props.checked,
          iconColor = _this$props.iconColor,
          size = _this$props.size,
          disabled = _this$props.disabled,
          theme = _this$props.theme,
          onChange = _this$props.onChange,
          otherProps = _objectWithoutProperties(_this$props, ["className", "children", "checked", "iconColor", "size", "disabled", "theme", "onChange"]);

      var fontClass;

      if (this.validFontSizes.find(function (elem) {
        return elem === size;
      })) {
        fontClass = "reactify-switch--font-".concat(size);
      }

      var style = this.getStyle();
      return _react.default.createElement("div", _extends({
        className: "reactify-switch__container ".concat(fontClass || '', " ").concat(className || '', " ").concat(disabled ? 'reactify--disabled' : ''),
        style: !this.validFontSizes.find(function (elem) {
          return elem === size;
        }) ? {
          fontSize: size
        } : {}
      }, otherProps), _react.default.createElement("input", {
        className: "reactify-switch__input ".concat(theme ? "reactify-switch__input--theme-".concat(theme) : '', " "),
        type: "checkbox",
        style: style,
        onClick: this.toggle,
        onChange: function onChange() {},
        checked: this.state.checked
      }), children);
    }
  }]);

  return Switch;
}(_react.Component);

_defineProperty(Switch, "propTypes", {
  checked: _propTypes.default.bool,
  iconColor: _propTypes.default.string,
  size: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  theme: _propTypes.default.string,
  onChange: _propTypes.default.func
});

_defineProperty(Switch, "defaultProps", {
  checked: false,
  iconColor: undefined,
  size: 'medium',
  disabled: false,
  theme: undefined,
  onChange: function onChange() {}
});

var _default = Switch;
exports.default = _default;