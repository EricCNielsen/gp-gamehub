(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Group/group.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Group/group.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clanInfo {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  border: solid;\n  margin: 0 30% 0;\n}\n\n#logo {\n  margin: 50px auto;\n  width: 200px;\n  height: 200px;\n}\n\n.logo {\n  margin: 50px auto;\n  width: 300px;\n  height: 200px;\n}\n\n.feed {\n  border: solid;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/User/user.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/User/user.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileimg {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  margin: 0 auto;\n}\n\nbutton {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  margin: 0 auto;\n}\n\n.dropzone {\n  border: dashed;\n  width: 100px;\n  height: 100px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  font-size: 28;\n  margin: 0 auto;\n}\n\n#bio {\n  width: 400px;\n  height: 100px;\n  background: transparent;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 10px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n#root {\n  z-index: 1;\n}\n\n#account-img {\n  z-index: 2;\n}", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _Components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Nav/Nav */ "./src/Components/Nav/Nav.js");
/* harmony import */ var _utils_Auth_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/Auth/Auth */ "./src/utils/Auth/Auth.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ducks/store */ "./src/ducks/store.js");





var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/App.js";

 //routing props

 //components



 //icons


 // Setting redux store:



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faSearch"]);

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var auth = new _utils_Auth_Auth__WEBPACK_IMPORTED_MODULE_10__["default"]();
      var _this$props = this.props,
          history = _this$props.history,
          location = _this$props.location;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
        store: _ducks_store__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App" // style={{ backgroundColor: "#24283E" }}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        auth: auth,
        history: history,
        location: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), _routes__WEBPACK_IMPORTED_MODULE_8__["default"]));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(App));

/***/ }),

/***/ "./src/Components/ConsolesSelector/ConsolesSelector.js":
/*!*************************************************************!*\
  !*** ./src/Components/ConsolesSelector/ConsolesSelector.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsolesSelector; });
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/ConsolesSelector/ConsolesSelector.js";








function ConsolesSelector(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      consoleDb = _useState2[0],
      setConsoleDb = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      consoles = _useState4[0],
      setConsoles = _useState4[1],
      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      selectedConsoles = _useState6[0],
      setSelectedConsoles = _useState6[1];

  var getConsoles =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var db, list, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, gameConsole;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/consoles");

            case 3:
              db = _context.sent;
              _context.next = 6;
              return setConsoleDb(db.data);

            case 6:
              list = [];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 10;

              for (_iterator = db.data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                gameConsole = _step.value;
                list.push(gameConsole.name);
              }

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](10);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
              setConsoles([].concat(list));
              _context.next = 32;
              break;

            case 29:
              _context.prev = 29;
              _context.t1 = _context["catch"](0);
              console.log("error getting consoles: ".concat(_context.t1));

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 29], [10, 14, 18, 26], [19,, 21, 25]]);
    }));

    return function getConsoles() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getConsoles();
  }, []);

  function handleChange(_x) {
    return _handleChange.apply(this, arguments);
  }

  function _handleChange() {
    _handleChange = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return setSelectedConsoles(event.target.value);

            case 2:
              props.handleGamingConsoles(consoleDb, event.target.value);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleChange.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      minWidth: "15em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    htmlFor: "select-multiple-chip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Prefered Gaming console"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    multiple: true,
    value: selectedConsoles,
    onChange: handleChange,
    input: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        display: "flex",
        flexWrap: "wrap"
      },
      id: "select-multiple-chip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }),
    renderValue: function renderValue(selected) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, selected.map(function (value) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
          key: value,
          label: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, consoles.map(function (name) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: name,
      value: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, name);
  }))));
}

/***/ }),

/***/ "./src/Components/CreateClan/AddIMage/AddImage.js":
/*!********************************************************!*\
  !*** ./src/Components/CreateClan/AddIMage/AddImage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddImage; });
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/CreateClan/AddIMage/AddImage.js";





function AddImage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      uploading = _useState2[0],
      setUploading = _useState2[1],
      imgPlaceholder = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Placeholder_couple_superhero.png",
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(imgPlaceholder),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1];

  var uploadFile =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file, signedRequest, url) {
      var options;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              options = {
                headers: {
                  "content-type": file.type
                }
              };
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(signedRequest, file, options);

            case 4:
              setUploading(false);
              setUrl(url);
              props.setClanAvatar(url);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log("There was an error uploading file:".concat(_context.t0));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function uploadFile(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var getSignedRequest =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
      var _ref4, file, fileName, signS3, _signS3$data, signedRequest, _url;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 1), file = _ref4[0];
              _context2.prev = 1;
              setUploading({
                isUploading: true
              });
              fileName = "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), "-").concat(file.name.replace(/\s/g, "-"));
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/signs3", {
                params: {
                  "file-name": fileName,
                  "file-type": file.type
                }
              });

            case 6:
              signS3 = _context2.sent;
              console.log(signS3);
              _signS3$data = signS3.data, signedRequest = _signS3$data.signedRequest, _url = _signS3$data.url;
              uploadFile(file, signedRequest, _url);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log("There was an error signing up with S3:".concat(_context2.t0));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    }));

    return function getSignedRequest(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    style: {
      width: "6em",
      height: "6em"
    },
    src: url,
    alt: "clan-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      postion: "inherit"
    },
    className: "dropzone",
    onDropAccepted: getSignedRequest,
    accept: "image/*",
    multiple: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, uploading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_7__["GridLoader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Drop File here or Click to upload")));
}

/***/ }),

/***/ "./src/Components/CreateClan/CreateClan.js":
/*!*************************************************!*\
  !*** ./src/Components/CreateClan/CreateClan.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateClan; });
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ConsolesSelector_ConsolesSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ConsolesSelector/ConsolesSelector */ "./src/Components/ConsolesSelector/ConsolesSelector.js");
/* harmony import */ var _AddIMage_AddImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddIMage/AddImage */ "./src/Components/CreateClan/AddIMage/AddImage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/CreateClan/CreateClan.js";













function CreateClan() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      avatar = _useState4[0],
      setAvatar = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      privateClan = _useState6[0],
      setPrivateClan = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      competitive = _useState8[0],
      setCompetitive = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState10 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      clanName = _useState10[0],
      setClanName = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState12 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      bio = _useState12[0],
      setBio = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState14 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      gamingConsoles = _useState14[0],
      setGamingConsoles = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      console.log("cleaned up", gamingConsoles, avatar, privateClan, competitive, clanName, bio);
    };
  }, [gamingConsoles, avatar, privateClan, competitive, clanName, bio]);

  function setClanAvatar(url) {
    setAvatar(url);
  }

  function handleGamingConsoles(consoleDb, selectedConsoles) {
    var consolesObj = consoleDb.filter(function (gameConsole) {
      return gameConsole.name === selectedConsoles[selectedConsoles.indexOf(gameConsole.name)];
    }).map(function (gameConsole) {
      return {
        console_id: gameConsole.id
      };
    });
    setGamingConsoles(consolesObj);
  }

  function handleClickOpen() {
    setOpen(!open);
    setClanName("");
    setBio("");
    setAvatar("");
    setCompetitive(false);
    setPrivateClan(false);
  }

  function createClan() {
    return _createClan.apply(this, arguments);
  }

  function _createClan() {
    _createClan = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(clanName === "" || bio === "" || gamingConsoles[0] === "")) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", alert("all fields must be completed before submitting"));

            case 5:
              if (!(avatar === "")) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", alert("Add an image before submitting"));

            case 7:
              handleClickOpen();
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("/api/clan", {
                clanName: clanName,
                bio: bio,
                avatar: avatar,
                competitive: competitive,
                privateClan: privateClan
              });

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log("there was a problem creating the clan ".concat(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));
    return _createClan.apply(this, arguments);
  }

  function handleClose() {
    setOpen(false);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "+ create Clan"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "create-clan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "creat-clan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Create Clan"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AddIMage_AddImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setClanAvatar: setClanAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14___default.a, {
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13___default.a, {
      checked: privateClan,
      onChange: function onChange() {
        return setPrivateClan(!privateClan);
      },
      value: "privateClan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }),
    label: "Private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13___default.a, {
      checked: competitive,
      onChange: function onChange() {
        return setCompetitive(!competitive);
      },
      value: "competitive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }),
    label: "Competitive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoFocus: true,
    margin: "dense",
    id: "name",
    value: clanName,
    onChange: function onChange(event) {
      return setClanName(event.target.value);
    },
    label: "Clan name",
    type: "email" // fullWidth
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "standard-multiline-flexible",
    label: "Bio",
    multiline: true,
    value: bio,
    onChange: function onChange(event) {
      return setBio(event.target.value);
    },
    rowsMax: "4",
    fullWidth: true,
    margin: "normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ConsolesSelector_ConsolesSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleGamingConsoles: handleGamingConsoles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: createClan,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Create"))));
}

/***/ }),

/***/ "./src/Components/Dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/Components/Dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Group_GroupMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Group/GroupMini */ "./src/Components/Group/GroupMini.js");
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search/Search */ "./src/Components/Search/Search.js");
/* harmony import */ var _GamingNews_GamingNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GamingNews/GamingNews */ "./src/Components/GamingNews/GamingNews.js");
/* harmony import */ var _Rankings_Rankings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Rankings/Rankings */ "./src/Components/Rankings/Rankings.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ducks/reducer */ "./src/ducks/reducer.js");


var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Dashboard/Dashboard.js";









function Dashboard(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getUserInfo();
  }, []);

  function getUserInfo() {
    return _getUserInfo.apply(this, arguments);
  }

  function _getUserInfo() {
    _getUserInfo = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var updateUser, user;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              updateUser = props.updateUser;

              if (props.username) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/auth/account");

            case 4:
              user = _context.sent;
              updateUser(user.data[0]);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUserInfo.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Search_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Group_GroupMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GamingNews_GamingNews__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Rankings_Rankings__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
} // const mapSateToProps = reduxState => {
//   const { username } = reduxState;
//   return {
//     username
//   };
// };


var mapDispatchToProps = {
  updateUser: _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__["updateUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ "./src/Components/GamingNews/GamingNews.js":
/*!*************************************************!*\
  !*** ./src/Components/GamingNews/GamingNews.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/MobileContainer */ "./src/Components/Styles/MobileContainer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/GamingNews/GamingNews.js";

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  height: 40vh;\n  overflow: auto;\n  margin-left: 25vw;\n  margin-right: 25vw;\n  padding: 1%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var HeightContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

var GamingNews = function GamingNews(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      articles = _useState2[0],
      setArticles = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getNews();
  }, []);

  var getNews =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var REACT_APP_NEWS_API, targetUrl, res;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              REACT_APP_NEWS_API = "45ace7e6f9ad4f9583c696abc2d3ffb3";
              targetUrl = "https://newsapi.org/v2/everything?q=video+games&sortBy=relevancy&pageSize=5&apiKey=";
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(targetUrl + REACT_APP_NEWS_API);

            case 4:
              res = _context.sent;
              console.log(res.data.articles);
              setArticles(res.data.articles);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getNews() {
      return _ref.apply(this, arguments);
    };
  }(); // const pulses = async () => {
  //     const {REACT_APP_IGDB_API} = process.env
  //     const targetUrl = "https://api-v3.igdb.com/pulses/?fields=*"
  //     const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  //     const res = await axios.get(proxyUrl + targetUrl, {
  //         headers: {
  //             "user-key": REACT_APP_IGDB_API,
  //             Accept: "application/json",
  //         },
  //     })
  //     console.log(res)
  //     setArticles(res.data)
  // }


  console.log("articles", articles);
  var newsArticles = articles.map(function (article, i) {
    console.log(article.url);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: props.card,
      key: i,
      style: {
        marginBottom: ".5%",
        marginTop: ".2%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: article.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: article.urlToImage,
      alt: "Article Image",
      style: {
        objectFit: "cover",
        width: "80%",
        height: "80%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, article.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      component: "p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, article.description)))));
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, newsArticles));
};

GamingNews.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles)(GamingNews));

/***/ }),

/***/ "./src/Components/Group/Group.js":
/*!***************************************!*\
  !*** ./src/Components/Group/Group.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _group_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.css */ "./src/Components/Group/group.css");
/* harmony import */ var _group_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_group_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ducks/reducer */ "./src/ducks/reducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Group/Group.js";









var Group = function Group(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1],
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isUploading = _useState4[0],
      setUploading = _useState4[1],
      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1],
      _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      edit = _useState8[0],
      setEdit = _useState8[1],
      _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState10 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      bio = _useState10[0],
      setBio = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getClan();
  }, [] // [props.match.params.id]
  );

  var getClan = function getClan() {
    var id = props.match.params.id;

    if (id) {
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/clan/".concat(id)).then(function (res) {
        console.log("hello in getClan", res.data[0]);
        setName(res.data[0].name);
        setBio(res.data[0].bio);
        setUrl(res.data[0].avatar);
        props.updateClan(res.data[0]);
      });
    } else {
      var clanName = props.clanName,
          clanBio = props.clanBio,
          clanAvatar = props.clanAvatar;
      setName(clanName);
      setBio(clanBio);
      setUrl(clanAvatar);
    }
  };

  var getSignedRequest = function getSignedRequest(_ref) {
    var _ref2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
        file = _ref2[0];

    setUploading({
      isUploading: true
    });
    var fileName = "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), "-").concat(file.name.replace(/\s/g, "-"));
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/signs3", {
      params: {
        "file-name": fileName,
        "file-type": file.type
      }
    }).then(function (response) {
      var _response$data = response.data,
          signedRequest = _response$data.signedRequest,
          url = _response$data.url;
      uploadFile(file, signedRequest, url);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var uploadFile = function uploadFile(file, signedRequest, url) {
    var options = {
      headers: {
        "Content-Type": file.type
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(signedRequest, file, options).then(function () {
      setUploading(false);
      setUrl(url);
    }).catch(function (err) {
      setUploading({
        isUploading: false
      });

      if (err.response.status === 403) {
        alert("Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n".concat(err.stack));
      } else {
        alert("ERROR: ".concat(err.status, "\n ").concat(err.stack));
      }
    });
  };

  var handleSave =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var clan, res;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clan = {
                clan_id: props.clan_id,
                url: url,
                bio: bio,
                name: name
              };
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("/api/clan", clan);

            case 4:
              res = _context.sent;
              console.log("handleSave", res.data);
              props.updateClan(res.data);
              setEdit(false);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleEdit =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setEdit(!edit);
              setName(name);
              setBio(bio);
              setUrl(url);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleEdit() {
      return _ref4.apply(this, arguments);
    };
  }();

  if (props.user_id) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "clan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "clanInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, edit ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: "logo",
      src: url,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), url ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: function onClick() {
        return setUrl("");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "edit") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "dropzone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "dropzone",
      onDropAccepted: getSignedRequest,
      accept: "image/*",
      multiple: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, isUploading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_8__["GridLoader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Drop File or Click Here"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "name",
      placeholder: "Clan Name",
      value: name,
      onChange: function onChange(e) {
        return setName(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "bio",
      placeholder: "Bio Here",
      value: bio,
      onChange: function onChange(e) {
        return setBio(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleSave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Save")) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: "logo",
      src: url,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "About the Clan:"), " ", bio, props.user_id === props.owner_id ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleEdit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Edit") : null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "feed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Posts Go Here")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }
};

var mapStateToProps = function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user_id,
    clan_id: reduxState.clan_id,
    owner_id: reduxState.owner_id,
    clanBio: reduxState.clanBio,
    clanAvatar: reduxState.clanAvatar,
    clanName: reduxState.clanName
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  updateClan: _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__["updateClan"]
})(Group));

/***/ }),

/***/ "./src/Components/Group/GroupMini.js":
/*!*******************************************!*\
  !*** ./src/Components/Group/GroupMini.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/MobileContainer */ "./src/Components/Styles/MobileContainer.js");
/* harmony import */ var _CreateClan_CreateClan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CreateClan/CreateClan */ "./src/Components/CreateClan/CreateClan.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _GroupSelector_GroupSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GroupSelector/GroupSelector */ "./src/Components/Group/GroupSelector/GroupSelector.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Group/GroupMini.js";

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  background-color: white;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ClanMiniContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

var GroupMini = function GroupMini() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      registeredclans = _useState2[0],
      setRegisteredClans = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      showSelector = _useState4[0],
      setShowSelector = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getRegisteredClans();
  }, []);

  function getRegisteredClans() {
    return _getRegisteredClans.apply(this, arguments);
  }

  function _getRegisteredClans() {
    _getRegisteredClans = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _getRegisteredClans2;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/registeredclans");

            case 3:
              _getRegisteredClans2 = _context.sent;

              if (_getRegisteredClans2.data.length > 0) {
                setRegisteredClans(_getRegisteredClans2.data);
                setShowSelector(true);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log("there was an error getting your registered clan: ".concat(_context.t0));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _getRegisteredClans.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ClanMiniContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, showSelector && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_GroupSelector_GroupSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clans: registeredclans,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_CreateClan_CreateClan__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GroupMini);

/***/ }),

/***/ "./src/Components/Group/GroupSelector/GroupSelector.js":
/*!*************************************************************!*\
  !*** ./src/Components/Group/GroupSelector/GroupSelector.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/NativeSelect/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PostsViewer_PostViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../PostsViewer/PostViewer */ "./src/Components/PostsViewer/PostViewer.js");

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Group/GroupSelector/GroupSelector.js";







function GroupSelector(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedClan = _useState2[0],
      setSelectedClan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      showPosts = _useState4[0],
      setShowPosts = _useState4[1];

  function handleChange(event) {
    if (event.target.value === "") {
      setShowPosts(false);
      setSelectedClan(event.target.value);
    } else {
      setShowPosts(true);
      setSelectedClan(event.target.value);
    }
  }

  var clansList = props.clans.map(function (clan) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: clan.name,
      value: clan.clan_id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, clan.name);
  });

  function handleClanView() {
    props.history.push("group/".concat(selectedClan));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: selectedClan,
    onChange: handleChange,
    name: "clans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Select a Clan"), clansList)), selectedClan > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleClanView,
    variant: "contained",
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "View Clan") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, showPosts && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostsViewer_PostViewer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: selectedClan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(GroupSelector));

/***/ }),

/***/ "./src/Components/Group/group.css":
/*!****************************************!*\
  !*** ./src/Components/Group/group.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./group.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Group/group.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./group.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Group/group.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./group.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Group/group.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Landing/About.js":
/*!*****************************************!*\
  !*** ./src/Components/Landing/About.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_landing1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/landing1.jpg */ "./src/assets/landing1.jpg");
/* harmony import */ var _assets_landing1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_landing1_jpg__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Landing/About.js";

function _templateObject3() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  width: 300px;\n  border: 2px solid white;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: url(", ");\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 600px) {\n    background-image: url(\"https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n    background-position: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var AboutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _assets_landing1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var WelcomeMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());
var MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());

function About(_ref) {
  var id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AboutWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MessageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WelcomeMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Welcome to GameHub"))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/Components/Landing/Creators.js":
/*!********************************************!*\
  !*** ./src/Components/Landing/Creators.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_landing2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/landing2.jpg */ "./src/assets/landing2.jpg");
/* harmony import */ var _assets_landing2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_landing2_jpg__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Landing/Creators.js";

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: url(", ");\n  background-size: cover;\n  border: 0.1px solid transparent;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: "none"
    }
  };
};

var CreatorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _assets_landing2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

function Creators(props, _ref) {
  var id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CreatorsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "this is where the creator stuff will go"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "asdfghjk "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "creators",
    onClick: props.auth.login,
    style: {
      position: "absolute"
    },
    size: "large",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Sign up"));
}

Creators.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Creators));

/***/ }),

/***/ "./src/Components/Landing/Landing.js":
/*!*******************************************!*\
  !*** ./src/Components/Landing/Landing.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.js */ "./src/Components/Landing/About.js");
/* harmony import */ var _Creators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Creators.js */ "./src/Components/Landing/Creators.js");
/* harmony import */ var _utils_Auth_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Auth/Auth */ "./src/utils/Auth/Auth.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Landing/Landing.js";

function _templateObject3() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  diplay: flex;\n  width: 100%;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // import AnchorLink from "react-anchor-link-smooth-scroll";



 // import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

var styles = {
  root: {
    color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default.a[600],
    "&$checked": {
      color: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default.a[500]
    }
  },
  checked: {}
};
var LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());

function Landing(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  var auth = new _utils_Auth_Auth__WEBPACK_IMPORTED_MODULE_6__["default"](props.history);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LandingWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "about",
    scroll: "about",
    activeClass: "active",
    spy: true,
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
    checked: value === "about",
    onChange: handleChange,
    value: "about",
    name: "about",
    "aria-label": "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "creators",
    scroll: "creators",
    activeClass: "active",
    spy: true,
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
    checked: value === "creators",
    onChange: handleChange,
    value: "creators",
    name: "creators",
    "aria-label": "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_About_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Creators_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    auth: auth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./src/Components/Nav/AccountImage/AccountImage.js":
/*!*********************************************************!*\
  !*** ./src/Components/Nav/AccountImage/AccountImage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/MenuList/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-popup-state/hooks */ "./node_modules/material-ui-popup-state/hooks.js");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Nav/AccountImage/AccountImage.js";











function AccountImage(props) {
  var popupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9__["usePopupState"])({
    variant: "popper",
    popupId: "account-img"
  });
  var handleLogout = props.handleLogout,
      username = props.username,
      picture = props.picture;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "account-img",
    style: {
      display: "flex",
      flexFlow: "column",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", Object.assign({
    variant: "contained"
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9__["bindToggle"])(popupState), {
    src: picture,
    alt: username,
    style: {
      width: "3.5em",
      height: "3.5em",
      padding: ".1em",
      borderRadius: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      margin: ".1em 0 .7em 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5___default.a, Object.assign({}, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_9__["bindPopper"])(popupState), {
    transition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3___default.a, Object.assign({}, TransitionProps, {
      id: "menu-list-grow",
      style: {
        position: "relative",
        zIndex: 1000,
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default.a, {
      onClickAway: popupState.close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/user/".concat(props.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      button: true,
      onClick: popupState.close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "My account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      button: true,
      onClick: handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Logout")))));
  }));
}

var mapSateToProps = function mapSateToProps(reduxState) {
  var username = reduxState.username,
      picture = reduxState.picture,
      user_id = reduxState.user_id;
  return {
    id: user_id,
    username: username,
    picture: picture
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapSateToProps)(AccountImage));

/***/ }),

/***/ "./src/Components/Nav/Menu/Menu.js":
/*!*****************************************!*\
  !*** ./src/Components/Nav/Menu/Menu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Nav/Menu/Menu.js";














 //Routing:



function Menu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  function toggleDrawer() {
    setToggle(!toggle);
  }

  var sideList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
    to: "/group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    onClick: toggleDrawer,
    key: "Clans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faUsers"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Clans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    onClick: toggleDrawer,
    key: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faHome"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer,
    primary: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))));
  var EditAccount = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
    to: "/user/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    key: "Account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faUserCog"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer,
    primary: "Account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: toggleDrawer,
    color: "inherit",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: toggle,
    onClose: function onClose() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
    to: "/dashboard",
    onClick: toggleDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "GameHub"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    tabIndex: 0,
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, sideList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    tabIndex: 0,
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, EditAccount)));
}

function mapStateToProps(state) {
  return {
    id: state.user_id
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null)(Menu));

/***/ }),

/***/ "./src/Components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/Components/Nav/Nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ducks/reducer */ "./src/ducks/reducer.js");
/* harmony import */ var _AccountImage_AccountImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountImage/AccountImage */ "./src/Components/Nav/AccountImage/AccountImage.js");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Notification/Notification */ "./src/Components/Nav/Notification/Notification.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Menu/Menu */ "./src/Components/Nav/Menu/Menu.js");
/* harmony import */ var _gamehub_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gamehub.png */ "./src/Components/Nav/gamehub.png");
/* harmony import */ var _gamehub_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_gamehub_png__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Nav/Nav.js";

 // import { Link } from "react-router-dom"




 //MaterialUI








 // import NotificationsIcon from "@material-ui/icons/Notifications"
// import Badge from "@material-ui/core/Badge"
// import MenuItem from "@material-ui/core/MenuItem"
// import IconButton from "@material-ui/core/IconButton"

var styles = {
  root: {
    // flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "black",
    color: "#FF473A",
    transparency: 0.6,
    position: "relative",
    top: 0
  },
  card: {
    maxWidth: 345
  }
};

function Nav(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    handleCurrent();
  });

  function handleLogout() {
    try {
      props.auth.logout();
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/auth/logout");
    } catch (err) {
      console.log(err);
    }
  }

  function handleCurrent() {
    return _handleCurrent.apply(this, arguments);
  }

  function _handleCurrent() {
    _handleCurrent = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _updateUser, history, _location, user;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _updateUser = props.updateUser, history = props.history, _location = props.location;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/auth/account");

            case 4:
              user = _context.sent;

              _updateUser(user.data);

              if (user && _location.pathname === "/") {
                history.push("/dashboard");
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              if (location.pathname !== "/") {
                props.history.push("/");
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    return _handleCurrent.apply(this, arguments);
  }

  var classes = props.classes,
      location = props.location;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.navbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, location.pathname !== "/" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    history: props.history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    style: {
      width: "300px",
      height: "75px"
    },
    src: _gamehub_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), location.pathname === "/" ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: props.auth.login,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Login") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AccountImage_AccountImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleLogout: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })))));
}

Nav.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var mapDispatchToProps = {
  updateUser: _ducks_reducer__WEBPACK_IMPORTED_MODULE_5__["updateUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(Nav)));

/***/ }),

/***/ "./src/Components/Nav/Notification/Notification.js":
/*!*********************************************************!*\
  !*** ./src/Components/Nav/Notification/Notification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/Badge/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! material-ui-popup-state/hooks */ "./node_modules/material-ui-popup-state/hooks.js");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _notificationbanner_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notificationbanner.jpeg */ "./src/Components/Nav/Notification/notificationbanner.jpeg");
/* harmony import */ var _notificationbanner_jpeg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_notificationbanner_jpeg__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Nav/Notification/Notification.js";


















var styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  root: {
    // flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  navbar: {
    position: "relative",
    top: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Notification(props) {
  var popupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16__["usePopupState"])({
    variant: "popper",
    popupId: "account-img"
  }); // const {  } = props

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, Object.assign({
    color: "inherit",
    variant: "contained"
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16__["bindToggle"])(popupState), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11___default.a, {
    badgeContent: 1,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4___default.a, Object.assign({}, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_16__["bindPopper"])(popupState), {
    transition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2___default.a, Object.assign({}, TransitionProps, {
      id: "menu-list-grow",
      style: {
        position: "relative",
        zIndex: 1000,
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_15___default.a, {
      onClickAway: popupState.close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: styles.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: styles.media,
      image: _notificationbanner_jpeg__WEBPACK_IMPORTED_MODULE_17___default.a,
      title: "switch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Lizard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
      component: "p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Learn More"))))));
  }));
}

var mapSateToProps = function mapSateToProps(reduxState) {
  var username = reduxState.username,
      picture = reduxState.picture,
      user_id = reduxState.user_id;
  return {
    id: user_id,
    username: username,
    picture: picture
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapSateToProps)(Notification));

/***/ }),

/***/ "./src/Components/Nav/Notification/notificationbanner.jpeg":
/*!*****************************************************************!*\
  !*** ./src/Components/Nav/Notification/notificationbanner.jpeg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/notificationbanner.22078359.jpeg";

/***/ }),

/***/ "./src/Components/Nav/gamehub.png":
/*!****************************************!*\
  !*** ./src/Components/Nav/gamehub.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/Components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/Components/Post/Post.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Post/Post.js";





var Editor = {};
Editor.modules = {};
Editor.modules.toolbar = [["bold", "italic", "underline", "strike"], // toggled buttons
["blockquote", "code-block"], // blocks
[{
  header: 1
}, {
  header: 2
}], // custom button values
[{
  list: "ordered"
}, {
  list: "bullet"
}], // lists
[{
  script: "sub"
}, {
  script: "super"
}], // superscript/subscript
[{
  indent: "-1"
}, {
  indent: "+1"
}], // outdent/indent
[{
  direction: "rtl"
}], // text direction
[{
  size: ["small", false, "large", "huge"]
}], // custom dropdown
[{
  header: [1, 2, 3, 4, 5, 6, false]
}], // header dropdown
[{
  color: []
}, {
  background: []
}], // dropdown with defaults
[{
  font: []
}], // font family
[{
  align: []
}], // text align
["clean"] // remove formatting
];
Editor.formats = ["header", "font", "background", "color", "code", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "script", "align", "direction", "link", "image", "code-block", "formula", "video"];

function Post(props) {
  var classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      quillRef = _useState2[0],
      setQuillRef = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      reactQuillRef = _useState4[0],
      setReactQuillRef = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      post = _useState6[0],
      setPost = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    attachQuillRefs();
    getPost();
  }, []);

  var attachQuillRefs = function attachQuillRefs() {
    if (typeof reactQuillRef.getEditor !== "function") return;
    if (quillRef != null) return;
    var copyOfQuillRef = reactQuillRef.getEditor();
    if (quillRef != null) setQuillRef(quillRef);
  };

  var getPost =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/post/".concat(props.match.params.id));

            case 2:
              res = _context.sent;
              console.log(res.data);
              setPost(res.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPost() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, post.content));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/Components/PostsViewer/PostViewer.js":
/*!**************************************************!*\
  !*** ./src/Components/PostsViewer/PostViewer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill/dist/quill.bubble.css */ "./node_modules/react-quill/dist/quill.bubble.css");
/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/PostsViewer/PostViewer.js";





function PostViewer(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getClanPosts();
  }, [props.id]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      noPosts = _useState4[0],
      setNoPosts = _useState4[1];

  function getClanPosts() {
    return _getClanPosts.apply(this, arguments);
  }

  function _getClanPosts() {
    _getClanPosts = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var clanPosts;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/clan-posts/".concat(props.id));

            case 3:
              clanPosts = _context.sent;

              if (clanPosts.data.length > 0) {
                setNoPosts(false);
                setPosts(clanPosts.data);
              } else {
                setNoPosts(true);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log("there was an error pulling the posts: ".concat(_context.t0));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _getClanPosts.apply(this, arguments);
  }

  var postsList = posts.filter(function (post) {
    return !post.parent_id;
  }).map(function (post) {
    function replies() {
      var replies = posts.filter(function (post) {
        return post.parent_id;
      });

      if (replies.length > 0 && replies[0].parent_id === post.post_id) {
        var repliesCount = replies.length;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, repliesCount, " ", repliesCount === 1 ? "reply" : "replies");
      } else {
        return null;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: post.post_id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: post.picture,
      alt: post.username,
      style: {
        width: "2.5em",
        height: "2.5em",
        borderRadius: "50%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "by ", post.username, " on ", post.date)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_4___default.a, {
      theme: "bubble",
      value: post.content,
      readOnly: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), replies());
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, !noPosts ? postsList : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "No posts to display"));
}

/* harmony default export */ __webpack_exports__["default"] = (PostViewer);

/***/ }),

/***/ "./src/Components/Rankings/Rankings.js":
/*!*********************************************!*\
  !*** ./src/Components/Rankings/Rankings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/MobileContainer */ "./src/Components/Styles/MobileContainer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Rankings/Rankings.js";





var Rankings = function Rankings(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getTop5Users();
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      top5Users = _useState2[0],
      setTop5Users = _useState2[1];

  var getTop5Users =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var top5;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/top5users");

            case 2:
              top5 = _context.sent;
              setTop5Users(top5.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getTop5Users() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Styles_MobileContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Rankings"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Top 5 Users"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, top5Users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: user.username,
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, user.username, " :", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_6___default.a, {
      rating: +user.a_r,
      starDimension: "20px",
      starSpacing: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rankings);

/***/ }),

/***/ "./src/Components/Search/Search.js":
/*!*****************************************!*\
  !*** ./src/Components/Search/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchResults_UsersResults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchResults/UsersResults */ "./src/Components/Search/SearchResults/UsersResults.js");
/* harmony import */ var _SearchResults_ClansResults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchResults/ClansResults */ "./src/Components/Search/SearchResults/ClansResults.js");




var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Search/Search.js";

function _templateObject3() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  /* position: relative; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    position: relative;\n    top: 1vh;\n    left: 1.5vw;\n    width: fit-content;\n    z-index:2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    position: relative;\n    height: 5vh;\n    width: 100vw;\n    input {\n        transition: width .5s;\n        border-radius:10px;\n        padding: .5%;\n        outline:none;\n        background-color: white;\n        height: 2vh;\n    };\n    z-index:1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var SearchResults = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());

var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      openSearch = _useState4[0],
      setOpenSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    users: [],
    clans: [],
    posts: []
  }),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      searchResults = _useState6[0],
      setSearchResults = _useState6[1];

  var fireSearch =
  /*#__PURE__*/
  function () {
    var _ref = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var searchData;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/search?search=".concat(searchInput));

            case 2:
              searchData = _context.sent;
              setSearchResults(searchData.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fireSearch() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleInput = function handleInput(e) {
    setSearchInput(e.target.value);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Enter") {
      fireSearch();
    }
  };

  var handleClickAway = function handleClickAway() {
    if (openSearch) {
      setOpenSearch(!openSearch);
    }
  };

  console.log(searchInput);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClickAway: handleClickAway,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SearchContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SearchIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: "search",
    onClick: function onClick(_) {
      return setOpenSearch(!openSearch);
    },
    style: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    onKeyDown: handleKeyDown,
    val: searchInput,
    onChange: handleInput,
    placeholder: openSearch ? "Search" : null,
    style: {
      width: openSearch ? "80vw" : "0",
      borderStyle: openSearch ? "solid" : "none",
      padding: openSearch ? "5px" : "0",
      textAlign: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SearchResults_UsersResults__WEBPACK_IMPORTED_MODULE_9__["default"], {
    users: searchResults.users,
    openSearch: openSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SearchResults_ClansResults__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clans: searchResults.clans,
    openSearch: openSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/Components/Search/SearchResults/ClansResults.js":
/*!*************************************************************!*\
  !*** ./src/Components/Search/SearchResults/ClansResults.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Search/SearchResults/ClansResults.js";

function _templateObject2() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: rgba(229, 229, 229, 0.9);\n  border: 2px solid black;\n  border-radius: 10px;\n  margin-top: 2vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  height: fit-content;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: rgba(229, 229, 229, 0.9);\n  border: 2px solid black;\n  border-radius: 10px;\n  margin-top: 2vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  height: fit-content;\n  box-shadow: 0px 0px 5px 1px grey;\n  img {\n    border: 1px solid black;\n    /* border-radius: 50%; */\n    height: 10vh;\n    width: 10vh;\n    object-fit: cover;\n  }\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Clan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ClanTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

var ClansResults = function ClansResults(_ref) {
  var clans = _ref.clans,
      openSearch = _ref.openSearch;
  var results = clans.map(function (clan, i) {
    return openSearch ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Clan, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Clans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: clan.avatar,
      alt: "clan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, clan.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, clan.ranking)) : null;
  });
  return openSearch ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClanTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Clans"), results) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (ClansResults);

/***/ }),

/***/ "./src/Components/Search/SearchResults/UsersResults.js":
/*!*************************************************************!*\
  !*** ./src/Components/Search/SearchResults/UsersResults.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/Search/SearchResults/UsersResults.js";

function _templateObject2() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: rgba(229, 229, 229, 0.9);\n  border: 2px solid black;\n  border-radius: 10px;\n  margin-top: 2vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  height: fit-content;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 1%;\n  position: relative;\n  margin-bottom: 2vh;\n  /* margin-left: 10vw;\n    margin-right: 10vw; */\n  height: fit-content;\n  border-top: 2px solid black;\n  width: 98%;\n  img {\n    border: 1px solid black;\n    border-radius: 50%;\n    height: 10vh;\n    width: 10vh;\n    object-fit: cover;\n  }\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var User = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var SearchTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

var UserResults = function UserResults(_ref, props) {
  var users = _ref.users,
      openSearch = _ref.openSearch;
  var results = users.map(function (user, i) {
    return openSearch ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/user/".concat(user.user_id),
      style: {
        width: "80vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(User, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: user.picture,
      alt: "user profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, user.ranking), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, user.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, user.location), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, user.user_id)))) : null;
  });
  return openSearch ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Users"), results) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (UserResults);

/***/ }),

/***/ "./src/Components/StarRating/StarRating.js":
/*!*************************************************!*\
  !*** ./src/Components/StarRating/StarRating.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/StarRating/StarRating.js";




function StarRating(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    ranking: 0,
    ranking_id: 0,
    id: props.id
  }),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      userRanking = _useState2[0],
      setUserRanking = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    CheckRanking();
  }, []);

  function CheckRanking() {
    return _CheckRanking.apply(this, arguments);
  }

  function _CheckRanking() {
    _CheckRanking = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var dbRanking, _dbRanking, ranking, id;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/user-ranking/".concat(props.id));

            case 3:
              dbRanking = _context.sent;
              dbRanking = dbRanking.data[0];

              if (dbRanking) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", setUserRanking(Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, userRanking, {
                id: props.id
              })));

            case 7:
              _dbRanking = dbRanking, ranking = _dbRanking.ranking, id = _dbRanking.id;
              setUserRanking(Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, userRanking, {
                ranking: ranking,
                ranking_id: id
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log("there was a problem getting the user rating:".concat(_context.t0));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    return _CheckRanking.apply(this, arguments);
  }

  function handleRatingChange(_x) {
    return _handleRatingChange.apply(this, arguments);
  }

  function _handleRatingChange() {
    _handleRatingChange = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(newRanking) {
      var dbRanking, _dbRanking$data$, id, user_id, ranking, _dbRanking2, _dbRanking2$data$, _id, _user_id, _ranking;

      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setUserRanking(Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, userRanking, {
                ranking: newRanking
              }));
              _context2.prev = 1;

              if (!(userRanking.ranking_id === 0)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/new-ranking", {
                newRanking: newRanking,
                id: props.id
              });

            case 5:
              dbRanking = _context2.sent;
              _dbRanking$data$ = dbRanking.data[0], id = _dbRanking$data$.id, user_id = _dbRanking$data$.user_id, ranking = _dbRanking$data$.ranking;
              setUserRanking({
                ranking: ranking,
                ranking_id: id,
                id: user_id
              });
              _context2.next = 15;
              break;

            case 10:
              _context2.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("/api/update-ranking", {
                ranking: newRanking,
                ranking_id: userRanking.ranking_id
              });

            case 12:
              _dbRanking2 = _context2.sent;
              _dbRanking2$data$ = _dbRanking2.data[0], _id = _dbRanking2$data$.id, _user_id = _dbRanking2$data$.user_id, _ranking = _dbRanking2$data$.ranking;
              setUserRanking({
                ranking: _ranking,
                ranking_id: _id,
                id: _user_id
              });

            case 15:
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](1);
              console.log("There was a problem updating the user ranking: ".concat(_context2.t0));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 17]]);
    }));
    return _handleRatingChange.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default.a, {
    rating: userRanking.ranking,
    starRatedColor: "red",
    changeRating: handleRatingChange,
    numberOfStars: 5,
    name: "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StarRating);

/***/ }),

/***/ "./src/Components/Styles/MobileContainer.js":
/*!**************************************************!*\
  !*** ./src/Components/Styles/MobileContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* background: red; */\n  margin-top: 2vh;\n  // margin-bottom: 2%;\n  // margin-left: 20px;\n  // margin-right: 20px;\n  border-radius: 5px;\n  border: 1px solid darkgrey;\n  box-shadow: 0px 0px 5px 1px grey;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject()));

/***/ }),

/***/ "./src/Components/User/User.js":
/*!*************************************!*\
  !*** ./src/Components/User/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.css */ "./src/Components/User/user.css");
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ducks/reducer */ "./src/ducks/reducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _StarRating_StarRating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../StarRating/StarRating */ "./src/Components/StarRating/StarRating.js");



var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/Components/User/User.js";










function User(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isUploading = _useState2[0],
      setUploading = _useState2[1],
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1],
      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      edit = _useState6[0],
      setEdit = _useState6[1],
      _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState8 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      exp = _useState8[0],
      setExp = _useState8[1],
      _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.picture),
      _useState10 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      picture = _useState10[0],
      setPicture = _useState10[1],
      _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState12 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      username = _useState12[0],
      setUsername = _useState12[1],
      _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState14 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      location = _useState14[0],
      setLocation = _useState14[1],
      _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState16 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
      bio = _useState16[0],
      setBio = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUser();
  }, [props.match.params.id]);

  var getUser = function getUser() {
    var id = props.match.params.id;

    if (id) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/user/".concat(id)).then(function (res) {
        setPicture(res.data[0].picture);
        setUsername(res.data[0].username);
        setLocation(res.data[0].location);
        setExp(res.data[0].exp);
        setBio(res.data[0].bio);
      });
    } else {
      var _picture = props.picture,
          _username = props.username,
          _location = props.location,
          _exp = props.exp,
          _bio = props.bio;
      setPicture(_picture);
      setUsername(_username);
      setLocation(_location);
      setExp(_exp);
      setBio(_bio);
    }
  };

  var getSignedRequest = function getSignedRequest(_ref) {
    var _ref2 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
        file = _ref2[0];

    setUploading({
      isUploading: true
    });
    var fileName = "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), "-").concat(file.name.replace(/\s/g, "-"));
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/signs3", {
      params: {
        "file-name": fileName,
        "file-type": file.type
      }
    }).then(function (response) {
      var _response$data = response.data,
          signedRequest = _response$data.signedRequest,
          url = _response$data.url;
      uploadFile(file, signedRequest, url);
    }).catch(function (err) {
      console.log(err);
    });
  };

  var uploadFile = function uploadFile(file, signedRequest, url) {
    var options = {
      headers: {
        "Content-Type": file.type
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(signedRequest, file, options).then(function () {
      setUploading(false);
      setUrl(url);
    }).catch(function (err) {
      setUploading({
        isUploading: false
      });

      if (err.response.status === 403) {
        alert("Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n".concat(err.stack));
      } else {
        alert("ERROR: ".concat(err.status, "\n ").concat(err.stack));
      }
    });
  };

  var handleSave =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var user, res;
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = {
                user_id: props.user_id,
                picture: url,
                bio: bio,
                location: location,
                username: username,
                exp: exp
              };
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("/api/user", user);

            case 4:
              res = _context.sent;
              props.updateUser(res.data[0]);
              setPicture(url);
              setEdit(false);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleEdit =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setEdit(!edit);
              setUsername(props.username);
              setLocation(props.location);
              setBio(props.bio);
              setUrl(props.picture);
              setExp(props.exp);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleEdit() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleCancel = function handleCancel() {
    setEdit(false);
  };

  if (props.user_id) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, edit ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, url === "" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: "profileimg",
      src: picture,
      alt: "profile img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: "profileimg",
      src: url,
      alt: "profile img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), url ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: function onClick() {
        return setUrl("");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Change picture") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "dropzone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "dropzone",
      onDropAccepted: getSignedRequest,
      accept: "image/*",
      multiple: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, isUploading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_7__["GridLoader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Drop File or Click Here"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "username",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        return setUsername(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "location",
      placeholder: "Location",
      value: location,
      onChange: function onChange(e) {
        return setLocation(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
      value: exp,
      onChange: function onChange(e) {
        return setExp(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      value: "Beginner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Beginner"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      value: "Intermediate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Intermediate"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      value: "Expert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Expert")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "bio",
      placeholder: "Bio Here",
      value: bio,
      onChange: function onChange(e) {
        return setBio(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleSave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Save"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleCancel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Cancel")) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: "profileimg",
      src: picture,
      alt: "profile img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }), props.user_id != props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StarRating_StarRating__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: props.match.params.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }) : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "Username:"), " ", username, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Location:"), " ", location, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Experience:"), " ", exp, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Bio:"), " ", bio, +props.user_id === +props.match.params.id ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleEdit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Edit") : null));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }
}

var mapStateToProps = function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user_id,
    username: reduxState.username,
    email: reduxState.email,
    location: reduxState.location,
    picture: reduxState.picture,
    bio: reduxState.bio,
    exp: reduxState.exp,
    console: reduxState.console
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  updateUser: _ducks_reducer__WEBPACK_IMPORTED_MODULE_9__["updateUser"]
})(User));

/***/ }),

/***/ "./src/Components/User/user.css":
/*!**************************************!*\
  !*** ./src/Components/User/user.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./user.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/User/user.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./user.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/User/user.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./user.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/User/user.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/landing1.jpg":
/*!*********************************!*\
  !*** ./src/assets/landing1.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing1.94ea88fa.jpg";

/***/ }),

/***/ "./src/assets/landing2.jpg":
/*!*********************************!*\
  !*** ./src/assets/landing2.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing2.6c6d440c.jpg";

/***/ }),

/***/ "./src/ducks/reducer.js":
/*!******************************!*\
  !*** ./src/ducks/reducer.js ***!
  \******************************/
/*! exports provided: updateUser, updateClan, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClan", function() { return updateClan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var initialState = {
  user_id: 0,
  username: "",
  email: "",
  location: "",
  picture: "",
  bio: "",
  exp: "",
  ranking: "",
  owner_id: 0,
  clan_id: 0,
  clanBio: "",
  clanName: "",
  clanAvatar: ""
};
var UPDATE_USER = "UPDATE_USER",
    UPDATE_CLAN = "UPDATE_CLAN";
function updateUser(user) {
  if (user[0]) {
    user = user[0];
  }

  return {
    type: UPDATE_USER,
    payload: user
  };
}
function updateClan(clan) {
  if (clan[0]) {
    clan = clan[0];
  }

  return {
    type: UPDATE_CLAN,
    payload: clan
  };
}
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case UPDATE_USER:
      var bio = payload.bio,
          username = payload.username,
          location = payload.location,
          picture = payload.picture,
          ranking = payload.ranking,
          exp = payload.exp,
          email = payload.email,
          user_id = payload.user_id;
      return Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        bio: bio,
        username: username,
        location: location,
        picture: picture,
        ranking: ranking,
        email: email,
        user_id: user_id,
        exp: exp
      });

    case UPDATE_CLAN:
      var owner_id = payload.owner_id,
          clan_id = payload.clan_id,
          clanBio = payload.bio,
          clanAvatar = payload.avatar,
          clanName = payload.name;
      console.log("reducin", payload);
      return Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        owner_id: owner_id,
        clan_id: clan_id,
        clanBio: clanBio,
        clanAvatar: clanAvatar,
        clanName: clanName
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/ducks/store.js":
/*!****************************!*\
  !*** ./src/ducks/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/ducks/reducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Landing/Landing */ "./src/Components/Landing/Landing.js");
/* harmony import */ var _Components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Dashboard/Dashboard */ "./src/Components/Dashboard/Dashboard.js");
/* harmony import */ var _Components_User_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/User/User */ "./src/Components/User/User.js");
/* harmony import */ var _Components_Group_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Group/Group */ "./src/Components/Group/Group.js");
/* harmony import */ var _Components_GamingNews_GamingNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/GamingNews/GamingNews */ "./src/Components/GamingNews/GamingNews.js");
/* harmony import */ var _Components_Post_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Post/Post */ "./src/Components/Post/Post.js");
var _jsxFileName = "/Users/willscholl/devmtn/projects/gp-gamehub/src/routes.js";








/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _Components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/dashboard",
  component: _Components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/group/:id",
  component: _Components_Group_Group__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/user/:id",
  component: _Components_User_User__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/gamingnews",
  component: _Components_GamingNews_GamingNews__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/post/:id",
  component: _Components_Post_Post__WEBPACK_IMPORTED_MODULE_7__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/utils/Auth/Auth.js":
/*!********************************!*\
  !*** ./src/utils/Auth/Auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    var _this = this;

    Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Auth);

    this.logout = function () {
      var _process$env = Object({"NODE_ENV":"development","PUBLIC_URL":"","REACT_APP_DOMAIN":"reactjsdev.auth0.com","REACT_APP_CLIENT_ID":"faQcwXEZHvdo16EBleg3rsoyUREOQ4JR","REACT_APP_CALLBACK_URL":"http://localhost:3000/callback","REACT_APP_LOGOUT_URL":"http://localhost:3000/","REACT_APP_NEWS_API":"45ace7e6f9ad4f9583c696abc2d3ffb3"}),
          REACT_APP_DOMAIN = _process$env.REACT_APP_DOMAIN,
          REACT_APP_CLIENT_ID = _process$env.REACT_APP_CLIENT_ID,
          REACT_APP_LOGOUT_URL = _process$env.REACT_APP_LOGOUT_URL;
      var webAuth = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["default"].WebAuth({
        domain: REACT_APP_DOMAIN,
        clientID: REACT_APP_CLIENT_ID
      });
      webAuth.logout({
        returnTo: REACT_APP_LOGOUT_URL,
        client_id: REACT_APP_CLIENT_ID
      });
    };

    this.handleAuthentication = function () {
      _this.auth0.parseHash(function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);

          _this.history.push("/");
        } else if (err) {
          _this.history.push("/");

          alert("error: ".concat(err.error, ". check console for more information"));
          console.log(err);
        }
      });
    };

    this.setSession = function (authResult) {
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
    };

    this.getAccessToken = function () {
      var accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        throw new Error("No access token found");
      }

      return accessToken;
    };

    this.getProfile = function (cb) {
      if (_this.userProfile) return cb(_this.userProfile);

      _this.auth0.client.userInfo(_this.getAccessToken(), function (err, profile) {
        if (profile) _this.userProfile = profile;
        cb(profile, err);
      });
    };

    this.logout = this.logout.bind(this);
  }

  Object(_Users_willscholl_devmtn_projects_gp_gamehub_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Auth, [{
    key: "login",
    value: function login() {
      var _process$env2 = Object({"NODE_ENV":"development","PUBLIC_URL":"","REACT_APP_DOMAIN":"reactjsdev.auth0.com","REACT_APP_CLIENT_ID":"faQcwXEZHvdo16EBleg3rsoyUREOQ4JR","REACT_APP_CALLBACK_URL":"http://localhost:3000/callback","REACT_APP_LOGOUT_URL":"http://localhost:3000/","REACT_APP_NEWS_API":"45ace7e6f9ad4f9583c696abc2d3ffb3"}),
          REACT_APP_DOMAIN = _process$env2.REACT_APP_DOMAIN,
          REACT_APP_CLIENT_ID = _process$env2.REACT_APP_CLIENT_ID;
      var url = "".concat(encodeURIComponent(window.location.origin), "/auth/callback");
      window.location = "https://".concat(REACT_APP_DOMAIN, "/authorize?client_id=").concat(REACT_APP_CLIENT_ID, "&scope=openid%20profile%20email&redirect_uri=").concat(url, "&response_type=code");
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      var expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
    } // logout = () => {
    //   localStorage.removeItem("access_token")
    //   localStorage.removeItem("id_token")
    //   localStorage.removeItem("expires_at")
    //   this.userProfile = null
    //   this.auth0.logout({
    //     clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    //     returnTo: "http://localhost:3000"
    //   })
    // }

  }]);

  return Auth;
}();

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/willscholl/devmtn/projects/gp-gamehub/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/willscholl/devmtn/projects/gp-gamehub/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map