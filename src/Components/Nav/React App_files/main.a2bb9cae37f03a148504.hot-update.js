webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.a2bb9cae37f03a148504.hot-update.js.map