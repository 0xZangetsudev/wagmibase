"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectkit */ \"./node_modules/connectkit/build/index.es.js\");\n\nvar _this = undefined;\n\n\n\n\n\nvar walletConnectProjectId = \"09715aa1bc320bc383512ceb814eb581\";\nvar chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.scrollTestnet\n];\nvar config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultConfig)({\n    autoConnect: true,\n    appName: \"frontfarm\",\n    walletConnectProjectId: walletConnectProjectId,\n    chains: chains\n}));\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n                config: config,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_2__.ConnectKitProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUNnQztBQUNrQztBQUN0QjtBQUN3QztBQUtwRixJQUFNTSxzQkFBc0IsR0FBRyxrQ0FBa0M7QUFDakUsSUFBTUMsTUFBTSxHQUFHO0lBQUNKLHVEQUFhO0NBQUM7QUFDOUIsSUFBTUssTUFBTSxHQUFHTixtREFBWSxDQUFDRyw0REFBZ0IsQ0FBQztJQUN6Q0ksV0FBVyxFQUFDLElBQUk7SUFDaEJDLE9BQU8sRUFBQyxXQUFXO0lBQ25CSixzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMsTUFBTSxFQUFOQSxNQUFNO0NBQ1QsQ0FBQyxDQUNEO0FBRUQsSUFBTUksR0FBRyxHQUFHLGdCQUF3QztRQUFyQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztJQUNqQyxxQkFDRTs7MEJBQ0UsOERBQUNiLGtEQUFROzBCQUNQLDRFQUFDYyxPQUFLOzhCQUFDLE9BQUs7Ozs7O3lCQUFROzs7OztxQkFDWDswQkFFWCw4REFBQ2IsOENBQVc7Z0JBQUNPLE1BQU0sRUFBRUEsTUFBTTswQkFDM0IsNEVBQUNKLDBEQUFrQjs4QkFDakIsNEVBQUNRLFNBQVMscUZBQUtDLFNBQVM7Ozs7NkJBQUk7Ozs7O3lCQUNUOzs7OztxQkFDUDs7b0JBQ2IsQ0FDSjtBQUNILENBQUM7QUFkS0YsS0FBQUEsR0FBRztBQWdCVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgV2FnbWlDb25maWcsIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ29uZmlnIH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyBzY3JvbGxUZXN0bmV0IH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuaW1wb3J0IHsgQ29ubmVjdEtpdFByb3ZpZGVyLCBDb25uZWN0S2l0QnV0dG9uLCBnZXREZWZhdWx0Q29uZmlnIH0gZnJvbSBcImNvbm5lY3RraXRcIjtcblxuXG5cblxuY29uc3Qgd2FsbGV0Q29ubmVjdFByb2plY3RJZCA9ICcwOTcxNWFhMWJjMzIwYmMzODM1MTJjZWI4MTRlYjU4MSdcbmNvbnN0IGNoYWlucyA9IFtzY3JvbGxUZXN0bmV0XTtcbmNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyhnZXREZWZhdWx0Q29uZmlnKHtcbiAgICBhdXRvQ29ubmVjdDp0cnVlLFxuICAgIGFwcE5hbWU6J2Zyb250ZmFybScsXG4gICAgd2FsbGV0Q29ubmVjdFByb2plY3RJZCxcbiAgICBjaGFpbnMsXG59KVxuKTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRIZWFkPlxuICAgICAgICA8dGl0bGU+d2FnbWk8L3RpdGxlPlxuICAgICAgPC9OZXh0SGVhZD5cblxuICAgICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgIDxDb25uZWN0S2l0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29ubmVjdEtpdFByb3ZpZGVyPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJOZXh0SGVhZCIsIldhZ21pQ29uZmlnIiwiY3JlYXRlQ29uZmlnIiwic2Nyb2xsVGVzdG5ldCIsIkNvbm5lY3RLaXRQcm92aWRlciIsImdldERlZmF1bHRDb25maWciLCJ3YWxsZXRDb25uZWN0UHJvamVjdElkIiwiY2hhaW5zIiwiY29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJhcHBOYW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});