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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"./node_modules/wagmi/dist/connectors/coinbaseWallet.js\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/connectors/injected */ \"./node_modules/wagmi/dist/connectors/injected.js\");\n/* harmony import */ var wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/connectors/ledger */ \"./node_modules/wagmi/dist/connectors/ledger.js\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"./node_modules/wagmi/dist/connectors/metaMask.js\");\n/* harmony import */ var wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi/connectors/safe */ \"./node_modules/wagmi/dist/connectors/safe.js\");\n/* harmony import */ var wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/connectors/walletConnectLegacy */ \"./node_modules/wagmi/dist/connectors/walletConnectLegacy.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.scrollTestnet\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)(), \n]), chains = ref.chains, publicClient = ref.publicClient, webSocketPublicClient = ref.webSocketPublicClient;\nvar _NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;\nvar config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n    autoConnect: true,\n    connectors: [\n        new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__.MetaMaskConnector({\n            chains: chains,\n            options: {\n                UNSTABLE_shimOnConnectSelectAccount: true\n            }\n        }),\n        new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__.CoinbaseWalletConnector({\n            chains: chains,\n            options: {\n                appName: \"wagmi\"\n            }\n        }),\n        new wagmi_connectors_walletConnectLegacy__WEBPACK_IMPORTED_MODULE_7__.WalletConnectLegacyConnector({\n            chains: chains,\n            options: {\n                qrcode: true\n            }\n        }),\n        new wagmi_connectors_ledger__WEBPACK_IMPORTED_MODULE_8__.LedgerConnector({\n            chains: chains,\n            options: {\n                projectId: (_NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID = \"09715aa1bc320bc383512ceb814eb581\") !== null && _NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID !== void 0 ? _NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID : \"\"\n            }\n        }),\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_9__.InjectedConnector({\n            chains: chains,\n            options: {\n                name: function(detectedName) {\n                    return \"Injected (\".concat(typeof detectedName === \"string\" ? detectedName : detectedName.join(\", \"), \")\");\n                },\n                shimDisconnect: true\n            }\n        }),\n        new wagmi_connectors_safe__WEBPACK_IMPORTED_MODULE_10__.SafeConnector({\n            chains: chains,\n            options: {\n                allowedDomains: [\n                    /https:\\/\\/app.safe.global$/\n                ],\n                debug: false\n            }\n        }), \n    ],\n    publicClient: publicClient,\n    webSocketPublicClient: webSocketPublicClient\n});\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                config: config,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zangetsu/scroll/wagmi/examples/_dev/src/pages/_app.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNnQztBQUNrQztBQUN0QjtBQUU2QjtBQUNaO0FBQ0o7QUFDSTtBQUNSO0FBRThCO0FBRTVCO0FBRXZELElBQXdERSxHQUt2RCxHQUx1REEsc0RBQWUsQ0FDckU7SUFBQ0UsdURBQWE7Q0FBQyxFQUNmO0lBQ0VPLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRixFQUxPQyxNQUFNLEdBQTBDVixHQUt2RCxDQUxPVSxNQUFNLEVBQUVDLFlBQVksR0FBNEJYLEdBS3ZELENBTGVXLFlBQVksRUFBRUMscUJBQXFCLEdBQUtaLEdBS3ZELENBTDZCWSxxQkFBcUI7SUErQmhDQyxxQ0FBZ0Q7QUF4Qm5FLElBQU1DLE1BQU0sR0FBR2IsbURBQVksQ0FBQztJQUMxQmMsV0FBVyxFQUFFLElBQUk7SUFDakJDLFVBQVUsRUFBRTtRQUNWLElBQUlWLHdFQUFpQixDQUFDO1lBQ3BCSSxNQUFNLEVBQU5BLE1BQU07WUFDTk8sT0FBTyxFQUFFO2dCQUNQQyxtQ0FBbUMsRUFBRSxJQUFJO2FBQzFDO1NBQ0YsQ0FBQztRQUNGLElBQUlmLG9GQUF1QixDQUFDO1lBQzFCTyxNQUFNLEVBQU5BLE1BQU07WUFDTk8sT0FBTyxFQUFFO2dCQUNQRSxPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLENBQUM7UUFDRixJQUFJWCw4RkFBNEIsQ0FBQztZQUMvQkUsTUFBTSxFQUFOQSxNQUFNO1lBQ05PLE9BQU8sRUFBRTtnQkFDUEcsTUFBTSxFQUFFLElBQUk7YUFDYjtTQUNGLENBQUM7UUFDRixJQUFJZixvRUFBZSxDQUFDO1lBQ2xCSyxNQUFNLEVBQU5BLE1BQU07WUFDTk8sT0FBTyxFQUFFO2dCQUNQSSxTQUFTLEVBQUVSLENBQUFBLHFDQUFnRCxHQUFoREEsa0NBQWdELGNBQWhEQSxxQ0FBZ0QsY0FBaERBLHFDQUFnRCxHQUFJLEVBQUU7YUFDbEU7U0FDRixDQUFDO1FBQ0YsSUFBSVQsd0VBQWlCLENBQUM7WUFDcEJNLE1BQU0sRUFBTkEsTUFBTTtZQUNOTyxPQUFPLEVBQUU7Z0JBQ1BPLElBQUksRUFBRSxTQUFDQyxZQUFZOzJCQUNqQixZQUFXLENBSVYsTUFBQyxDQUhBLE9BQU9BLFlBQVksS0FBSyxRQUFRLEdBQzVCQSxZQUFZLEdBQ1pBLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM1QixHQUFDLENBQUM7aUJBQUE7Z0JBQ0xDLGNBQWMsRUFBRSxJQUFJO2FBQ3JCO1NBQ0YsQ0FBQztRQUNGLElBQUlwQixpRUFBYSxDQUFDO1lBQ2hCRyxNQUFNLEVBQU5BLE1BQU07WUFDTk8sT0FBTyxFQUFFO2dCQUNQVyxjQUFjLEVBQUU7O2lCQUE4QjtnQkFDOUNDLEtBQUssRUFBRSxLQUFLO2FBQ2I7U0FDRixDQUFDO0tBQ0g7SUFDRGxCLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxxQkFBcUIsRUFBckJBLHFCQUFxQjtDQUN0QixDQUFDO0FBRUYsSUFBTWtCLEdBQUcsR0FBRyxnQkFBd0M7UUFBckNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7SUFDakMscUJBQ0U7OzBCQUNFLDhEQUFDbEMsa0RBQVE7MEJBQ1AsNEVBQUNtQyxPQUFLOzhCQUFDLE9BQUs7Ozs7O3lCQUFROzs7OztxQkFDWDswQkFFWCw4REFBQ2xDLDhDQUFXO2dCQUFDZSxNQUFNLEVBQUVBLE1BQU07MEJBQ3pCLDRFQUFDaUIsU0FBUyxzRkFBS0MsU0FBUzs7Ozt5QkFBSTs7Ozs7cUJBQ2hCOztvQkFDYixDQUNKO0FBQ0gsQ0FBQztBQVpLRixLQUFBQSxHQUFHO0FBY1QsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgc2Nyb2xsVGVzdG5ldCB9IGZyb20gJ3dhZ21pL2NoYWlucydcblxuaW1wb3J0IHsgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0J1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkJ1xuaW1wb3J0IHsgTGVkZ2VyQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9sZWRnZXInXG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvbWV0YU1hc2snXG5pbXBvcnQgeyBTYWZlQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9zYWZlJ1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdCdcbmltcG9ydCB7IFdhbGxldENvbm5lY3RMZWdhY3lDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3RMZWdhY3knXG5cbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYydcblxuY29uc3QgeyBjaGFpbnMsIHB1YmxpY0NsaWVudCwgd2ViU29ja2V0UHVibGljQ2xpZW50IH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtzY3JvbGxUZXN0bmV0XSxcbiAgW1xuICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gIF0sXG4pXG5cbmNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiBbXG4gICAgbmV3IE1ldGFNYXNrQ29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgVU5TVEFCTEVfc2hpbU9uQ29ubmVjdFNlbGVjdEFjY291bnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBDb2luYmFzZVdhbGxldENvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFwcE5hbWU6ICd3YWdtaScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBXYWxsZXRDb25uZWN0TGVnYWN5Q29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcXJjb2RlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBuZXcgTGVkZ2VyQ29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XQUxMRVRDT05ORUNUX1BST0pFQ1RfSUQgPz8gJycsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG5hbWU6IChkZXRlY3RlZE5hbWUpID0+XG4gICAgICAgICAgYEluamVjdGVkICgke1xuICAgICAgICAgICAgdHlwZW9mIGRldGVjdGVkTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBkZXRlY3RlZE5hbWVcbiAgICAgICAgICAgICAgOiBkZXRlY3RlZE5hbWUuam9pbignLCAnKVxuICAgICAgICAgIH0pYCxcbiAgICAgICAgc2hpbURpc2Nvbm5lY3Q6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5ldyBTYWZlQ29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWxsb3dlZERvbWFpbnM6IFsvaHR0cHM6XFwvXFwvYXBwLnNhZmUuZ2xvYmFsJC9dLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwdWJsaWNDbGllbnQsXG4gIHdlYlNvY2tldFB1YmxpY0NsaWVudCxcbn0pXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPHRpdGxlPndhZ21pPC90aXRsZT5cbiAgICAgIDwvTmV4dEhlYWQ+XG5cbiAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiTmV4dEhlYWQiLCJXYWdtaUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsInNjcm9sbFRlc3RuZXQiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIkluamVjdGVkQ29ubmVjdG9yIiwiTGVkZ2VyQ29ubmVjdG9yIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJTYWZlQ29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdExlZ2FjeUNvbm5lY3RvciIsInB1YmxpY1Byb3ZpZGVyIiwiY2hhaW5zIiwicHVibGljQ2xpZW50Iiwid2ViU29ja2V0UHVibGljQ2xpZW50IiwicHJvY2VzcyIsImNvbmZpZyIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsIm9wdGlvbnMiLCJVTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCIsImFwcE5hbWUiLCJxcmNvZGUiLCJwcm9qZWN0SWQiLCJlbnYiLCJORVhUX1BVQkxJQ19XQUxMRVRDT05ORUNUX1BST0pFQ1RfSUQiLCJuYW1lIiwiZGV0ZWN0ZWROYW1lIiwiam9pbiIsInNoaW1EaXNjb25uZWN0IiwiYWxsb3dlZERvbWFpbnMiLCJkZWJ1ZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});