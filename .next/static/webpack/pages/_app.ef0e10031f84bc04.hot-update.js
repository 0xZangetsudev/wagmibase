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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectkit */ \"./node_modules/connectkit/build/index.es.js\");\n\nvar _this = undefined;\n\n\n\n\n\nvar walletConnectProjectId = \"09715aa1bc320bc383512ceb814eb581\";\nvar chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.scrollTestnet\n];\nvar config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultConfig)({\n    autoConnect: true,\n    appName: \"frontfarm\",\n    walletConnectProjectId: walletConnectProjectId,\n    chains: chains\n}));\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n                config: config,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_2__.ConnectKitProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUNnQztBQUNrQztBQUN0QjtBQUN3QztBQUtwRixJQUFNTSxzQkFBc0IsR0FBR0Msa0NBQWdEO0FBQy9FLElBQU1HLE1BQU0sR0FBRztJQUFDUCx1REFBYTtDQUFDO0FBQzlCLElBQU1RLE1BQU0sR0FBR1QsbURBQVksQ0FBQ0csNERBQWdCLENBQUM7SUFDekNPLFdBQVcsRUFBQyxJQUFJO0lBQ2hCQyxPQUFPLEVBQUMsV0FBVztJQUNuQlAsc0JBQXNCLEVBQUVBLHNCQUFzQjtJQUM5Q0ksTUFBTSxFQUFOQSxNQUFNO0NBQ1QsQ0FBQyxDQUNEO0FBRUQsSUFBTUksR0FBRyxHQUFHLGdCQUF3QztRQUFyQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztJQUNqQyxxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBUTswQkFDUCw0RUFBQ2lCLE9BQUs7OEJBQUMsT0FBSzs7Ozs7eUJBQVE7Ozs7O3FCQUNYOzBCQUVYLDhEQUFDaEIsOENBQVc7Z0JBQUNVLE1BQU0sRUFBRUEsTUFBTTswQkFDM0IsNEVBQUNQLDBEQUFrQjs4QkFDakIsNEVBQUNXLFNBQVMscUZBQUtDLFNBQVM7Ozs7NkJBQUk7Ozs7O3lCQUNUOzs7OztxQkFDUDs7b0JBQ2IsQ0FDSjtBQUNILENBQUM7QUFkS0YsS0FBQUEsR0FBRztBQWdCVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgV2FnbWlDb25maWcsIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ29uZmlnIH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyBzY3JvbGxUZXN0bmV0IH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuaW1wb3J0IHsgQ29ubmVjdEtpdFByb3ZpZGVyLCBDb25uZWN0S2l0QnV0dG9uLCBnZXREZWZhdWx0Q29uZmlnIH0gZnJvbSBcImNvbm5lY3RraXRcIjtcblxuXG5cblxuY29uc3Qgd2FsbGV0Q29ubmVjdFByb2plY3RJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBTExFVENPTk5FQ1RfUFJPSkVDVF9JRDsgXG5jb25zdCBjaGFpbnMgPSBbc2Nyb2xsVGVzdG5ldF07XG5jb25zdCBjb25maWcgPSBjcmVhdGVDb25maWcoZ2V0RGVmYXVsdENvbmZpZyh7XG4gICAgYXV0b0Nvbm5lY3Q6dHJ1ZSxcbiAgICBhcHBOYW1lOidmcm9udGZhcm0nLFxuICAgIHdhbGxldENvbm5lY3RQcm9qZWN0SWQ6IHdhbGxldENvbm5lY3RQcm9qZWN0SWQsXG4gICAgY2hhaW5zLFxufSlcbik7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPHRpdGxlPndhZ21pPC90aXRsZT5cbiAgICAgIDwvTmV4dEhlYWQ+XG5cbiAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XG4gICAgICA8Q29ubmVjdEtpdFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Nvbm5lY3RLaXRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiTmV4dEhlYWQiLCJXYWdtaUNvbmZpZyIsImNyZWF0ZUNvbmZpZyIsInNjcm9sbFRlc3RuZXQiLCJDb25uZWN0S2l0UHJvdmlkZXIiLCJnZXREZWZhdWx0Q29uZmlnIiwid2FsbGV0Q29ubmVjdFByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XQUxMRVRDT05ORUNUX1BST0pFQ1RfSUQiLCJjaGFpbnMiLCJjb25maWciLCJhdXRvQ29ubmVjdCIsImFwcE5hbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});