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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectkit */ \"./node_modules/connectkit/build/index.es.js\");\n\nvar _this = undefined;\n\n\n\n\n\nvar walletConnectProjectId = \"09715aa1bc320bc383512ceb814eb581\";\nvar chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.scrollTestnet\n];\nvar config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultConfig)({\n    autoConnect: true,\n    appName: \"frontfarm\",\n    walletConnectProjectId: walletConnectProjectId,\n    chains: chains\n}));\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n                config: config,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_2__.ConnectKitProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUNnQztBQUNrQztBQUN0QjtBQUN3QztBQUtwRixJQUFNTSxzQkFBc0IsR0FBR0Msa0NBQWdEO0FBQy9FLElBQU1HLE1BQU0sR0FBRztJQUFDUCx1REFBYTtDQUFDO0FBQzlCLElBQU1RLE1BQU0sR0FBR1QsbURBQVksQ0FBQ0csNERBQWdCLENBQUM7SUFDekNPLFdBQVcsRUFBQyxJQUFJO0lBQ2hCQyxPQUFPLEVBQUMsV0FBVztJQUNuQlAsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJJLE1BQU0sRUFBTkEsTUFBTTtDQUNULENBQUMsQ0FDRDtBQUVELElBQU1JLEdBQUcsR0FBRyxnQkFBd0M7UUFBckNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7SUFDakMscUJBQ0U7OzBCQUNFLDhEQUFDaEIsa0RBQVE7MEJBQ1AsNEVBQUNpQixPQUFLOzhCQUFDLE9BQUs7Ozs7O3lCQUFROzs7OztxQkFDWDswQkFFWCw4REFBQ2hCLDhDQUFXO2dCQUFDVSxNQUFNLEVBQUVBLE1BQU07MEJBQzNCLDRFQUFDUCwwREFBa0I7OEJBQ2pCLDRFQUFDVyxTQUFTLHFGQUFLQyxTQUFTOzs7OzZCQUFJOzs7Ozt5QkFDVDs7Ozs7cUJBQ1A7O29CQUNiLENBQ0o7QUFDSCxDQUFDO0FBZEtGLEtBQUFBLEdBQUc7QUFnQlQsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgc2Nyb2xsVGVzdG5ldCB9IGZyb20gJ3dhZ21pL2NoYWlucydcbmltcG9ydCB7IENvbm5lY3RLaXRQcm92aWRlciwgQ29ubmVjdEtpdEJ1dHRvbiwgZ2V0RGVmYXVsdENvbmZpZyB9IGZyb20gXCJjb25uZWN0a2l0XCI7XG5cblxuXG5cbmNvbnN0IHdhbGxldENvbm5lY3RQcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XQUxMRVRDT05ORUNUX1BST0pFQ1RfSUQ7IFxuY29uc3QgY2hhaW5zID0gW3Njcm9sbFRlc3RuZXRdO1xuY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKGdldERlZmF1bHRDb25maWcoe1xuICAgIGF1dG9Db25uZWN0OnRydWUsXG4gICAgYXBwTmFtZTonZnJvbnRmYXJtJyxcbiAgICB3YWxsZXRDb25uZWN0UHJvamVjdElkLFxuICAgIGNoYWlucyxcbn0pXG4pO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmV4dEhlYWQ+XG4gICAgICAgIDx0aXRsZT53YWdtaTwvdGl0bGU+XG4gICAgICA8L05leHRIZWFkPlxuXG4gICAgICA8V2FnbWlDb25maWcgY29uZmlnPXtjb25maWd9PlxuICAgICAgPENvbm5lY3RLaXRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db25uZWN0S2l0UHJvdmlkZXI+XG4gICAgICA8L1dhZ21pQ29uZmlnPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbIk5leHRIZWFkIiwiV2FnbWlDb25maWciLCJjcmVhdGVDb25maWciLCJzY3JvbGxUZXN0bmV0IiwiQ29ubmVjdEtpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdENvbmZpZyIsIndhbGxldENvbm5lY3RQcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEIiwiY2hhaW5zIiwiY29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJhcHBOYW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});