"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Connect.tsx":
/*!************************************!*\
  !*** ./src/components/Connect.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Connect\": function() { return /* binding */ Connect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Connect = function() {\n    _s();\n    var isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)(), connector = ref.connector, isReconnecting = ref.isReconnecting;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)(), connect = ref1.connect, connectors = ref1.connectors, isLoading = ref1.isLoading, error = ref1.error, pendingConnector = ref1.pendingConnector;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"right\"\n                },\n                children: connectors.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: !x.ready || isReconnecting || (connector === null || connector === void 0 ? void 0 : connector.id) === x.id,\n                        type: \"button\",\n                        onClick: function() {\n                            return connect({\n                                connector: x\n                            });\n                        },\n                        children: [\n                            x.id === \"injected\" ? isMounted ? x.name : x.id : x.name,\n                            isMounted && !x.ready && \" (unsupported)\",\n                            isLoading && x.id === (pendingConnector === null || pendingConnector === void 0 ? void 0 : pendingConnector.id) && \"…\"\n                        ]\n                    }, x.name, true, {\n                        fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/components/Connect.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/components/Connect.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error === null || error === void 0 ? void 0 : error.message\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/components/Connect.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/components/Connect.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Connect, \"XYhl0bm3Z3HOnL/YTw1OJ285oyA=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useIsMounted,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect\n    ];\n});\n_c = Connect;\nvar _c;\n$RefreshReg$(_c, \"Connect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db25uZWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBOEM7QUFFUDtBQUVoQyxJQUFNRyxPQUFPLEdBQUcsV0FBTTs7SUFDM0IsSUFBTUMsU0FBUyxHQUFHRixvREFBWSxFQUFFO0lBQ2hDLElBQXNDRixHQUFZLEdBQVpBLGlEQUFVLEVBQUUsRUFBMUNLLFNBQVMsR0FBcUJMLEdBQVksQ0FBMUNLLFNBQVMsRUFBRUMsY0FBYyxHQUFLTixHQUFZLENBQS9CTSxjQUFjO0lBQ2pDLElBQ0VMLElBQVksR0FBWkEsaURBQVUsRUFBRSxFQUROTSxPQUFPLEdBQ2JOLElBQVksQ0FETk0sT0FBTyxFQUFFQyxVQUFVLEdBQ3pCUCxJQUFZLENBREdPLFVBQVUsRUFBRUMsU0FBUyxHQUNwQ1IsSUFBWSxDQURlUSxTQUFTLEVBQUVDLEtBQUssR0FDM0NULElBQVksQ0FEMEJTLEtBQUssRUFBRUMsZ0JBQWdCLEdBQzdEVixJQUFZLENBRGlDVSxnQkFBZ0I7SUFHL0QscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxPQUFPO2lCQUFFOzBCQUMvQk4sVUFBVSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsQ0FBQztrQ0FDaEIscUVBQUNDLFFBQU07d0JBQ0xDLFFBQVEsRUFBRSxDQUFDRixDQUFDLENBQUNHLEtBQUssSUFBSWIsY0FBYyxJQUFJRCxDQUFBQSxTQUFTLGFBQVRBLFNBQVMsV0FBSSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLFNBQVMsQ0FBRWUsRUFBRSxNQUFLSixDQUFDLENBQUNJLEVBQUU7d0JBQzlEQyxJQUFJLEVBQUMsUUFBUTt3QkFFYkMsT0FBTyxFQUFFO21DQUFNZixPQUFPLENBQUM7Z0NBQUVGLFNBQVMsRUFBRVcsQ0FBQzs2QkFBRSxDQUFDO3lCQUFBOzs0QkFFdkNBLENBQUMsQ0FBQ0ksRUFBRSxLQUFLLFVBQVUsR0FBSWhCLFNBQVMsR0FBR1ksQ0FBQyxDQUFDTyxJQUFJLEdBQUdQLENBQUMsQ0FBQ0ksRUFBRSxHQUFJSixDQUFDLENBQUNPLElBQUk7NEJBQzFEbkIsU0FBUyxJQUFJLENBQUNZLENBQUMsQ0FBQ0csS0FBSyxJQUFJLGdCQUFnQjs0QkFDekNWLFNBQVMsSUFBSU8sQ0FBQyxDQUFDSSxFQUFFLEtBQUtULENBQUFBLGdCQUFnQixhQUFoQkEsZ0JBQWdCLFdBQUksR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxnQkFBZ0IsQ0FBRVMsRUFBRSxLQUFJLEdBQUc7O3VCQUw3Q0osQ0FBQyxDQUFDTyxJQUFJOzs7OzZCQU1KO2lCQUNWLENBQUM7Ozs7O3FCQUNFOzBCQUVOLDhEQUFDWCxLQUFHOzBCQUFFRixLQUFLLGFBQUxBLEtBQUssV0FBUyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEtBQUssQ0FBRWMsT0FBTzs7Ozs7cUJBQU87Ozs7OzthQUN2QixDQUNQO0FBQ0gsQ0FBQztHQTFCWXJCLE9BQU87O1FBQ0FELGdEQUFZO1FBQ1FGLDZDQUFVO1FBRTlDQyw2Q0FBVTs7O0FBSkRFLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29ubmVjdC50c3g/NWZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0IH0gZnJvbSAnd2FnbWknXG5cbmltcG9ydCB7IHVzZUlzTW91bnRlZCB9IGZyb20gJy4uL2hvb2tzJ1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdCA9ICgpID0+IHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKClcbiAgY29uc3QgeyBjb25uZWN0b3IsIGlzUmVjb25uZWN0aW5nIH0gPSB1c2VBY2NvdW50KClcbiAgY29uc3QgeyBjb25uZWN0LCBjb25uZWN0b3JzLCBpc0xvYWRpbmcsIGVycm9yLCBwZW5kaW5nQ29ubmVjdG9yIH0gPVxuICAgIHVzZUNvbm5lY3QoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICB7Y29ubmVjdG9ycy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IXgucmVhZHkgfHwgaXNSZWNvbm5lY3RpbmcgfHwgY29ubmVjdG9yPy5pZCA9PT0geC5pZH1cbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGtleT17eC5uYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdCh7IGNvbm5lY3RvcjogeCB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eC5pZCA9PT0gJ2luamVjdGVkJyA/IChpc01vdW50ZWQgPyB4Lm5hbWUgOiB4LmlkKSA6IHgubmFtZX1cbiAgICAgICAgICAgIHtpc01vdW50ZWQgJiYgIXgucmVhZHkgJiYgJyAodW5zdXBwb3J0ZWQpJ31cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgeC5pZCA9PT0gcGVuZGluZ0Nvbm5lY3Rvcj8uaWQgJiYgJ+KApid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+e2Vycm9yPy5tZXNzYWdlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VJc01vdW50ZWQiLCJDb25uZWN0IiwiaXNNb3VudGVkIiwiY29ubmVjdG9yIiwiaXNSZWNvbm5lY3RpbmciLCJjb25uZWN0IiwiY29ubmVjdG9ycyIsImlzTG9hZGluZyIsImVycm9yIiwicGVuZGluZ0Nvbm5lY3RvciIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwibWFwIiwieCIsImJ1dHRvbiIsImRpc2FibGVkIiwicmVhZHkiLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwibmFtZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Connect.tsx\n"));

/***/ })

});