webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/banner */ "./src/sections/banner.js");
/* harmony import */ var _sections_keuntungan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/keuntungan */ "./src/sections/keuntungan.js");
/* harmony import */ var _sections_service_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/service-section */ "./src/sections/service-section.js");
/* harmony import */ var _sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/feature */ "./src/sections/feature.js");
/* harmony import */ var _sections_portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/portfolio */ "./src/sections/portfolio.js");
/* harmony import */ var _sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var _sections_package__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/package */ "./src/sections/package.js");
/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/team-section */ "./src/sections/team-section.js");
/* harmony import */ var _sections_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/testimonial */ "./src/sections/testimonial.js");
/* harmony import */ var _sections_faq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sections/faq */ "./src/sections/faq.js");
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "E-Device Portal BNI ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_sections_service_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_sections_portfolio__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })));
}
_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLFNBQ0UsTUFBQyxzREFBRDtBQUFlLFNBQUssRUFBRUMsNkNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUssU0FBSyxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFLRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREosQ0FERjtBQWdCRDtLQWpCdUJELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDFlN2I2M2FjOTQ0MTU3NzIwMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcblxuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vc2VjdGlvbnMvYmFubmVyJztcbmltcG9ydCBLZXVudHVuZ2FuIGZyb20gJy4uL3NlY3Rpb25zL2tldW50dW5nYW4nO1xuaW1wb3J0IFNlcnZpY2VTZWN0aW9uIGZyb20gJy4uL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9mZWF0dXJlJztcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSAnLi4vc2VjdGlvbnMvcG9ydGZvbGlvJztcbmltcG9ydCBXb3JrRmxvdyBmcm9tICcuLi9zZWN0aW9ucy93b3JrZmxvdyc7XG5pbXBvcnQgUGFja2FnZSBmcm9tICcuLi9zZWN0aW9ucy9wYWNrYWdlJztcbmltcG9ydCBUZWFtU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9ucy90ZWFtLXNlY3Rpb24nO1xuaW1wb3J0IFRlc3RpbW9uaWFsQ2FyZCBmcm9tICcuLi9zZWN0aW9ucy90ZXN0aW1vbmlhbCc7XG5pbXBvcnQgRkFRIGZyb20gJy4uL3NlY3Rpb25zL2ZhcSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJFLURldmljZSBQb3J0YWwgQk5JIFwiIC8+XG4gICAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxuICAgICAgICAgIHsvKiA8RmVhdHVyZSAvPiAqL31cbiAgICAgICAgICA8UG9ydGZvbGlvIC8+XG4gICAgICAgICAgPFdvcmtGbG93IC8+XG4gICAgICAgICAgey8qIDxQYWNrYWdlIC8+XG4gICAgICAgICAgPEZBUS8+XG4gICAgICAgICAgPFRlYW1TZWN0aW9uIC8+ICovfVxuICAgICAgICAgIHsvKiA8VGVzdGltb25pYWxDYXJkIC8+ICovfVxuICAgICAgICA8L0xheW91dD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9