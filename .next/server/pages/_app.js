"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetcherPure = (apiUrl)=>{
    if (apiUrl === "") {
        console.error("fetcher.ts: Check your .env.local");
    }
    const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: apiUrl
    });
    return async (url)=>{
        const response = await axiosInstance.get(url);
        return response.data;
    };
};
const apiUrl = process.env.API_URL ? process.env.API_URL : "";
//
const fetcher = fetcherPure(apiUrl);
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);


/***/ }),

/***/ 8969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ context_ScrollBarContext)
});

// UNUSED EXPORTS: useScrollBar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "only-scrollbar"
const external_only_scrollbar_namespaceObject = require("only-scrollbar");
var external_only_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_only_scrollbar_namespaceObject);
;// CONCATENATED MODULE: ./src/context/ScrollBarContext.tsx



const ScrollBarContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const useScrollBar = ()=>useContext(ScrollBarContext);
const ScrollBarProvider = ({ children  })=>{
    const { 0: scrollBar , 1: setScrollBar  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setScrollBar(new (external_only_scrollbar_default())(window));
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        return ()=>{
            return scrollBar === null || scrollBar === void 0 ? void 0 : scrollBar.destroy();
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(ScrollBarContext.Provider, {
        value: scrollBar,
        children: children
    });
};
/* harmony default export */ const context_ScrollBarContext = (ScrollBarProvider);


/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8658);
/* harmony import */ var _context_ScrollBarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8969);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(949);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7701);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(802);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9161);
/* harmony import */ var dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__]);
swr__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const MyApp = ({ Component , pageProps , router  })=>{
    const { asPath  } = router;
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("light");
    const themeMode = theme === "light" ? _style_themes__WEBPACK_IMPORTED_MODULE_8__/* .lightTheme */ .W : _style_themes__WEBPACK_IMPORTED_MODULE_8__/* .darkTheme */ .$;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_5__.SWRConfig, {
            value: {
                fetcher: _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_ScrollBarContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_9__/* .ThemeContext.Provider */ .N.Provider, {
                    value: {
                        theme,
                        setTheme
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
                        theme: themeMode,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style_globalStyles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.SwitchTransition, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                    timeout: 600,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                }, asPath)
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6074);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9507);



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        font-family: ${_variables__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fonts["default"] */ .Z.fonts["default"]};
        scrollbar-gutter: stable;
        color: ${(0,_mixins__WEBPACK_IMPORTED_MODULE_2__/* .color */ .$_)("black")};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;

        transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;

        background-color: ${({ theme  })=>theme.backgroundColor};
        color: ${({ theme  })=>theme.color};
    }

    h1, h2, h3, h4, h5, span, a, p {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }

    input {
        margin: 0;
    }

    button {
        border: transparent;
        outline: transparent;
        padding: 0;

        &, &:active,
        &:focus {
            outline: none;
        }
    }

    .flex {
        display: flex;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);


/***/ }),

/***/ 7701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ darkTheme),
/* harmony export */   "W": () => (/* binding */ lightTheme)
/* harmony export */ });
const lightTheme = {
    backgroundColor: "white",
    color: "black",
    mode: "light"
};
const darkTheme = {
    backgroundColor: "black",
    color: "white",
    mode: "dark"
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9161:
/***/ ((module) => {

module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [667], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();