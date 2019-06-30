webpackHotUpdate("static/development/pages/components/spinner/bars.js",{

/***/ "./common/with-header/with-header.js":
/*!*******************************************!*\
  !*** ./common/with-header/with-header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @githubprimer/octicons-react */ "./node_modules/@githubprimer/octicons-react/dist/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reactify-ui/build */ "../reactify-ui/build/index.js");
/* harmony import */ var _reactify_ui_build__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes/components */ "./routes/components.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function withHeader(Page) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_temp, _Component);

    function _temp() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_temp)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        isPortalOpen: false
      });

      _defineProperty(_assertThisInitialized(_this), "togglePortal", function () {
        _this.setState(function (prevState) {
          return {
            isPortalOpen: !prevState.isPortalOpen
          };
        });
      });

      return _this;
    }

    _createClass(_temp, [{
      key: "render",
      value: function render() {
        var sideMenu = function sideMenu(callback) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
            light: true,
            className: "d-block min-w-250px pl-2 pr-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
            className: "border-bottom p-1"
          }, "Components"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], {
            light: true,
            className: "w-100 pl-3"
          }, Object.keys(_routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"]).map(function (key) {
            return _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].sub ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
              className: "m-1",
              key: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].name,
              text: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].name
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["SubSidebar"], {
              className: "m-3"
            }, Object.keys(_routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].sub).map(function (subKey) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
                onClick: callback,
                className: "m-1 margin-left-0_2em link-color-dark",
                key: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].sub[subKey].name,
                content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].sub[subKey].path
                }, _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].sub[subKey].name)
              });
            }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
              onClick: callback,
              className: "pl-3 m-1 margin-left-0_2em link-color-dark",
              key: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].name,
              content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                onClick: callback,
                href: _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].path
              }, _routes_components__WEBPACK_IMPORTED_MODULE_6__["componentsRouting"][key].name)
            });
          })));
        };

        var isPortalOpen = this.state.isPortalOpen;
        var togglePortal = this.togglePortal;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Reactify UI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "shortcut icon",
          href: "~/public/favicon.ico"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "theme-color",
          content: "#000000"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          href: "/static/styles.css"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/vs.min.css",
          integrity: "sha256-iGs2TpBtdfGr1FIgzGyO4CKAD1+2QaDswtMmJwDtHAs=",
          crossOrigin: "anonymous"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          href: "https://fonts.googleapis.com/css?family=Dancing+Script:700|EB+Garamond",
          rel: "stylesheet",
          type: "text/css"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
          integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
          crossOrigin: "anonymous"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
          crossOrigin: "anonymous"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
          integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
          crossOrigin: "anonymous"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
          integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
          crossOrigin: "anonymous"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["TopBar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["TopBar"].Logo, {
          success: true,
          className: "cursor-pointer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
          className: "icon text-light",
          onClick: togglePortal
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
          success: true,
          large: true,
          noShadow: true,
          className: "logo p-2 pl-4 pr-4 h-100 dflex align-items-center"
        }, "reactify ui"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["TopBar"].Body, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["TopBar"].Menu, {
          style: {
            display: 'inline-flex',
            alignContent: 'center',
            alignItems: 'center',
            padding: '0em 0.5em'
          },
          warning: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          href: "https://github.com/asterisx/reactify"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_3__["MarkGithub"],
          size: "medium",
          ariaLabel: "GitHub"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          className: "ml-3",
          href: "https://spectrum.chat/reactify-ui"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "spectrum-icon",
          src: "/static/assets/spectrum-white.png",
          alt: "spectrum chat"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container-fluid"
        }, isPortalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reactify_ui_build__WEBPACK_IMPORTED_MODULE_5__["Portal"], {
          left: true,
          onClose: togglePortal
        }, function (closePortal) {
          return sideMenu(closePortal);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, null))));
      }
    }]);

    return _temp;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _temp;
}

/***/ })

})
//# sourceMappingURL=bars.js.dea23740832c112f3c8d.hot-update.js.map