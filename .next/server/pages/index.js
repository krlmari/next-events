"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ME": () => (/* binding */ getIndexPage),
  "v5": () => (/* binding */ getWeatherYandex)
});

// UNUSED EXPORTS: getWeather

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./data/index.json
const data_namespaceObject = JSON.parse('{"events":{"title":"Ближайшие мероприятия","weather":{"title":"Погода в Cочи","coordinates":{"lat":43.5992,"lon":39.7257}},"cardsSlider":[{"title":"Евгений Чебатков","description":"Новая программа в&nbsp;сольном стендап-концерте Евгения Чебаткова","date":"1&nbsp;апреля, 19:00","place":"Роза Холл","image":"/images/cards/1.jpg"},{"title":"&laquo;Золотое кольцо Абхазии&raquo;&#58; Гагры, Рица, Новый Афон","date":"апрель&nbsp;&mdash; июнь","place":"Золотое кольцо Абхазии","image":"/images/cards/12.jpg"}],"cards":[{"title":"Моя Мишель","date":"1&nbsp;апреля, 19:00","place":"Роза Холл","images":["/images/cards/2.jpg"]},{"title":"Сочи Парк","date":"март&nbsp;&mdash; май","place":"Сочи Парк","images":["/images/cards/3.jpg","/images/cards/9.jpg","/images/cards/10.jpg","/images/cards/11.jpg"]},{"title":"Concord Orchestra. Симфоническое рок-шоу &laquo;Рождение мира&raquo;","date":"1&nbsp;апреля, 19:00","place":"Роза Холл","images":["/images/cards/4.jpg"]},{"title":"Конные прогулки по&nbsp;живописным местам Адлера","date":"март&nbsp;&mdash; июнь","place":"Конные прогулки по&nbsp;живописным местам Адлера","images":["/images/cards/5.jpg","/images/cards/8.jpg"]},{"title":"&laquo;Золотое кольцо Абхазии&raquo;&#58; Гагры, Рица, Новый Афон","date":"апрель&nbsp;&mdash; июнь","place":"Золотое кольцо Абхазии","images":["/images/cards/6.jpg"]},{"title":"New Star Camp. L&rsquo;One","date":"1&nbsp;апреля, 19:00","place":"Аллея флагов","images":["/images/cards/7.jpg"]}]}}');
;// CONCATENATED MODULE: ./lib/api.ts


/** @description - Адрес /api для запросов на бэк */ const getIndexPage = ()=>data_namespaceObject;
const createWeatherAxiosInstance = (baseURL)=>external_axios_default().create({
        baseURL: baseURL,
        headers: {
            Accept: "application/json",
            "X-Yandex-API-Key": process.env.WEATHER_KEY
        }
    });
const axiosWeatherInstance = createWeatherAxiosInstance(process.env.API_URL_WEATHER);
const getWeather = (params)=>axiosWeatherInstance.get(`forecast`, {
        params
    });
const stubDelay = async (delayMs)=>new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(null);
        }, delayMs);
    });
const getWeatherYandex = async (params)=>{
    await stubDelay(1000);
    return external_axios_default().post(`/api/getWeatherYandex`, {
        params
    });
};


/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gc": () => (/* binding */ CardEventTitle),
/* harmony export */   "JL": () => (/* binding */ Nav),
/* harmony export */   "Ll": () => (/* binding */ CardEventCopy),
/* harmony export */   "Sh": () => (/* binding */ CardEventSubtitle),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "iR": () => (/* binding */ Slider),
/* harmony export */   "kp": () => (/* binding */ CardEventImage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(657);
/* harmony import */ var _style_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9507);
/* harmony import */ var _components_common_CopyButton_CopyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8106);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
swiper_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-d97844f0-0"
})`
    position: relative;
`;
const CardEventImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_Image_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d97844f0-1"
})`
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    user-select: none;
    pointer-events: none;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("height", 300, 200, 220, 220)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("margin-bottom", 20, 12, 8, 8)};
`;
const CardEventTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-d97844f0-2"
})`
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .font */ .LZ)("text-b")};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("margin-bottom", 20, 12, 8, 8)};
`;
const CardEventSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-d97844f0-3"
})`
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .font */ .LZ)("text-l")};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .clampText */ .cP)(1)};

    color: ${({ theme  })=>theme.mode === "dark" ? "white" : "rgba(35, 35, 35, 0.6);"};
`;
const CardEventCopy = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_CopyButton_CopyButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d97844f0-4"
})`
    position: absolute;
    z-index: 1;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("top", 21, 12, 12, 12)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("left", 19, 12, 12, 12)};

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("width", 50, 34, 30, 30)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("height", 50, 34, 30, 30)};

    & > svg {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("width", 24, 16, 14, 14)};
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("height", 24, 16, 14, 14)};
    }
`;
const Slider = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper).withConfig({
    componentId: "sc-d97844f0-5"
})``;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d97844f0-6"
})`
    position: absolute;
    z-index: 1;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("top", 21, 12, 12, 12)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("right", 19, 12, 12, 12)};

    .swiper-button {
        background-color: rgba(35, 35, 35, 0.2);
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("width", 50, 34, 30, 30)};
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_2__/* .allBreakpointValue */ .Di)("height", 50, 34, 30, 30)};
    }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9183);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SWIPER_OPTIONS = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 8,
    loop: true,
    allowTouchMove: false
};
const CardEvent = ({ title , images , date , place ,  })=>{
    const { 0: swiper , 1: setSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
        children: [
            images && (images.length > 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .Slider */ .iR, {
                onSwiper: setSwiper,
                ...SWIPER_OPTIONS,
                children: [
                    images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .CardEventImage */ .kp, {
                                src: image,
                                alt: title,
                                layout: "fill",
                                objectFit: "cover"
                            })
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .Nav */ .JL, {
                        swiper: swiper
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .CardEventImage */ .kp, {
                src: images[0],
                alt: title,
                layout: "fill",
                objectFit: "cover"
            })),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .CardEventCopy */ .Ll, {
                copyText: `${title}, ${date}, ${place}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .CardEventTitle */ .Gc, {
                dangerouslySetInnerHTML: {
                    __html: title
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardEvent_styled__WEBPACK_IMPORTED_MODULE_3__/* .CardEventSubtitle */ .Sh, {
                dangerouslySetInnerHTML: {
                    __html: `${date}&ensp;&bull;&ensp;${place}`
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardEvent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardEventMain_CardEventMain)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/CopyButton/CopyButton.tsx + 3 modules
var CopyButton = __webpack_require__(8106);
// EXTERNAL MODULE: ./src/style/mixins.ts + 3 modules
var mixins = __webpack_require__(9507);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/blocks/CardEventMain/CardEventMain.styled.tsx



const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-5e137e80-0"
})`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    color: ${(0,mixins/* color */.$_)("white")};
    height: ${(0,mixins.vw)(360, "xs")};
    width: 100%;

    ${(0,mixins/* allBreakpointValue */.Di)("padding", 40, 28, 20, 12)};

    ${(0,mixins/* mediaBreakpointUp */.Ot)("md")} {
        height: 100%;
    }

    ${({ backgroundImage  })=>backgroundImage && `
            background-image: url(${backgroundImage});
            background-color: ${(0,mixins/* color */.$_)("gray")};
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
    `};
`;
const CardEventMainText = external_styled_components_default().div.withConfig({
    componentId: "sc-5e137e80-1"
})`
    margin-top: auto;
`;
const CardEventMainTitle = external_styled_components_default().p.withConfig({
    componentId: "sc-5e137e80-2"
})`
    ${(0,mixins/* font */.LZ)("text-b")};
    ${(0,mixins/* allBreakpointValue */.Di)("margin-bottom", 20, 12, 8, 8)};
`;
const CardEventMainDescription = external_styled_components_default().p.withConfig({
    componentId: "sc-5e137e80-3"
})`
    ${(0,mixins/* font */.LZ)("text-l")};
    ${(0,mixins/* allBreakpointValue */.Di)("margin-bottom", 20, 12, 8, 8)};
`;
const CardEventMainSubtitle = external_styled_components_default().p.withConfig({
    componentId: "sc-5e137e80-4"
})`
    ${(0,mixins/* font */.LZ)("text-l")};
`;
const CardEventMainCopy = external_styled_components_default()(CopyButton/* default */.Z).withConfig({
    componentId: "sc-5e137e80-5"
})`
    background-color: rgba(255, 255, 255, 0.15);
`;

;// CONCATENATED MODULE: ./src/components/blocks/CardEventMain/CardEventMain.tsx



const CardEventMain = ({ title , description , image , date , place ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        backgroundImage: image,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardEventMainCopy, {
                copyText: `${title}, ${description && description + "," || ""} ${date}, ${place}`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardEventMainText, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CardEventMainTitle, {
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx(CardEventMainDescription, {
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CardEventMainSubtitle, {
                        dangerouslySetInnerHTML: {
                            __html: `${date}&ensp;&bull;&ensp;${place}`
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CardEventMain_CardEventMain = (CardEventMain);


/***/ }),

/***/ 9178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Nav),
/* harmony export */   "i": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2117);
/* harmony import */ var _style_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9507);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Slider = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper).withConfig({
    componentId: "sc-79a85d73-0"
})`
    position: relative;
    overflow: hidden;
    width: 100%;
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_SliderNavigation_SliderNavigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-79a85d73-1"
})`
    position: absolute;
    z-index: 1;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_3__/* .allBreakpointValue */ .Di)("top", 40, 28, 20, 12)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_3__/* .allBreakpointValue */ .Di)("right", 40, 28, 20, 12)};

    .swiper-button {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_3__/* .allBreakpointValue */ .Di)("width", 60, 40, 36, 36)};
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_3__/* .allBreakpointValue */ .Di)("height", 60, 40, 36, 36)};
    }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _EventSlider_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9178);
/* harmony import */ var _components_blocks_CardEventMain_CardEventMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(464);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _EventSlider_styled__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _EventSlider_styled__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SWIPER_OPTIONS = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 8,
    loop: true,
    allowTouchMove: false
};
const CardEventSlider = ({ cards  })=>{
    const { 0: swiper , 1: setSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (cards === null || cards === void 0 ? void 0 : cards.length) > 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_EventSlider_styled__WEBPACK_IMPORTED_MODULE_3__/* .Slider */ .i, {
            onSwiper: setSwiper,
            ...SWIPER_OPTIONS,
            children: [
                cards.map((card, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blocks_CardEventMain_CardEventMain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...card
                        })
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventSlider_styled__WEBPACK_IMPORTED_MODULE_3__/* .Nav */ .J, {
                    swiper: swiper
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blocks_CardEventMain_CardEventMain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...cards[0]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardEventSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CG": () => (/* binding */ WeatherError),
/* harmony export */   "NM": () => (/* binding */ WeatherParts),
/* harmony export */   "Tu": () => (/* binding */ WeatherFactIcon),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "Yu": () => (/* binding */ WeatherFeels),
/* harmony export */   "_E": () => (/* binding */ WeatherFact),
/* harmony export */   "pt": () => (/* binding */ WeatherCondition),
/* harmony export */   "rR": () => (/* binding */ WeatherPartIcon),
/* harmony export */   "xZ": () => (/* binding */ WeatherMessages),
/* harmony export */   "zj": () => (/* binding */ WeatherTitle)
/* harmony export */ });
/* harmony import */ var _style_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9507);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1cf29b3c-0"
})`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .color */ .$_)("gray")};
    border-radius: 16px;

    color: ${({ theme  })=>theme.mode === "dark" && "black"};

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .font */ .LZ)("text-l")};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("min-height", 439, 304, 291, 172)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("padding", 20, 12, 12, 12)};

    p::first-letter {
        text-transform: capitalize;
    }
`;
const WeatherMessages = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1cf29b3c-1"
})`
    margin: auto;
`;
const WeatherError = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1cf29b3c-2"
})`
    text-align: center;
`;
const WeatherTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1cf29b3c-3"
})`
    flex-direction: column;
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 60, 40, 40, 28)};

    & > div {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 20, 12, 12, 8)};

        p {
            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-left", 10, 7, 7, 8)};
            color: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .color */ .$_)("blue")};
            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .font */ .LZ)("text-2")};
        }

        & > svg {
            width: 14px;
            height: 14px;

            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointUp */ .Ot)("fhd")} {
                width: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(20)};
                height: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(20)};
            }
        }
    }
`;
const WeatherFact = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1cf29b3c-4"
})`
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 85 - 12, 66 - 12, 33 - 12, 20 - 12)};

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointDown */ .ip)("md")} {
        display: flex;
        align-items: center;
    }

    & > div:first-of-type {
        align-items: center;
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 20, 12, 12)};

        p {
            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-left", 20, 12, 8, 8)};
            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .font */ .LZ)("text-3")};
        }
    }

    & > div:nth-of-type(2) {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointDown */ .ip)("md")} {
            margin-left: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(20, "xs")};
        }
    }
`;
const WeatherParts = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1cf29b3c-5"
})`
    margin-top: auto;
    flex-wrap: wrap;

    & > div {
        & > p {
            color: rgba(35, 35, 35, 0.5);
            margin-top: 12px;
            ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 12, 12, 12, 8)};
        }

        & > div {
            display: flex;
            align-items: center;

            & > p {
                margin-left: 10px;
                ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .font */ .LZ)("text-2")};
            }
        }
    }

    & > div:not(:last-of-type) {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-right", 40, 20, 12, 40)};
    }
`;
const WeatherCondition = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1cf29b3c-6"
})`
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 10, 8, 8, 8)};
`;
const WeatherFeels = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1cf29b3c-7"
})``;
const WeatherFactIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-1cf29b3c-8"
})``;
const WeatherPartIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-1cf29b3c-9"
})``;


/***/ }),

/***/ 5816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Weather_Weather)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/blocks/Weather/Weather.styled.tsx
var Weather_styled = __webpack_require__(4333);
// EXTERNAL MODULE: ./lib/api.ts + 1 modules
var api = __webpack_require__(5314);
// EXTERNAL MODULE: ./src/style/mixins.ts + 3 modules
var mixins = __webpack_require__(9507);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/Spinner/Spinner.styled.tsx


const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ecfe3c3-0"
})`
    position: relative;
    border: 3px solid;
    border-color: ${(0,mixins/* color */.$_)("blue")} transparent ${(0,mixins/* color */.$_)("blue")} transparent;
    border-radius: 50%;
    animation: spin 1.4s linear infinite;

    ${(0,mixins/* allBreakpointValue */.Di)("height", 50, 50, 50, 50)};
    ${(0,mixins/* allBreakpointValue */.Di)("width", 50, 50, 50, 50)};

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

;// CONCATENATED MODULE: ./src/components/common/Spinner/Spinner.tsx



const Spinner = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {});
};
/* harmony default export */ const Spinner_Spinner = (Spinner);

;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: ./src/icons/location-arrow.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLocationArrow = function SvgLocationArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.634 13.142c.369 1.108 1.068 1.147 1.561.091L13.802 1.22c.493-1.058.035-1.514-1.022-1.021L.767 5.805C-.29 6.298-.25 6.997.857 7.367L5.19 8.81l1.444 4.332Z",
    fill: "#157BFB"
  })));
};

/* harmony default export */ const location_arrow = (SvgLocationArrow);
;// CONCATENATED MODULE: ./src/helpers/translate.ts
const translateCondition = (condition)=>{
    switch(condition){
        case "clear":
            return "\u042F\u0441\u043D\u043E";
        case "partly-cloudy":
            return "\u041C\u0430\u043B\u043E\u043E\u0431\u043B\u0430\u0447\u043D\u043E";
        case "cloudy":
            return "\u041E\u0431\u043B\u0430\u0447\u043D\u043E \u0441 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F\u043C\u0438";
        case "overcast":
            return "\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u043E";
        case "drizzle":
            return "\u041C\u043E\u0440\u043E\u0441\u044C";
        case "light-rain":
            return "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u043E\u0436\u0434\u044C";
        case "rain":
            return "\u0414\u043E\u0436\u0434\u044C";
        case "moderate-rain":
            return "\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u043E \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C";
        case "heavy-rain":
            return "\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C";
        case "continuous-heavy-rain":
            return "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C";
        case "showers":
            return "\u041B\u0438\u0432\u0435\u043D\u044C";
        case "wet-snow":
            return "\u0414\u043E\u0436\u0434\u044C \u0441\u043E \u0441\u043D\u0435\u0433\u043E\u043C";
        case "light-snow":
            return "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043D\u0435\u0433";
        case "snow":
            return "\u0421\u043D\u0435\u0433";
        case "snow-showers":
            return "C\u043D\u0435\u0433\u043E\u043F\u0430\u0434";
        case "hail":
            return "\u0413\u0440\u0430\u0434";
        case "thunderstorm":
            return "\u0413\u0440\u043E\u0437\u0430";
        case "thunderstorm-with-rain":
            return "\u0414\u043E\u0436\u0434\u044C \u0441 \u0433\u0440\u043E\u0437\u043E\u0439";
        case "thunderstorm-with-hail":
            return "\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C";
        default:
            return "";
    }
};

;// CONCATENATED MODULE: ./src/components/blocks/Weather/Weather.tsx








const getTemp = (temp)=>{
    if (temp > 0) {
        return `+${temp}°`;
    } else {
        return `${temp}°`;
    }
};
const Weather = ({ info  })=>{
    var ref, ref1, ref2, ref3, ref4;
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const getData = async ()=>{
            if (!info.coordinates) return;
            try {
                const { data  } = await (0,api/* getWeatherYandex */.v5)({
                    lat: info.coordinates.lat,
                    lon: info.coordinates.lon
                });
                if (data) {
                    setError(false);
                    setData(data);
                }
            } catch (err) {
                setError(true);
            }
        };
        getData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* Container */.W2, {
        children: [
            (!data || error) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherMessages */.xZ, {
                children: [
                    !data && !error && /*#__PURE__*/ jsx_runtime_.jsx(Spinner_Spinner, {}),
                    error && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherError */.CG, {
                        children: [
                            "\u041E\u0448\u0438\u0431\u043A\u0430 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043F\u043E\u0433\u043E\u0434\u0435"
                        ]
                    })
                ]
            }),
            data && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherTitle */.zj, {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(location_arrow, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: info.title
                                    })
                                ]
                            }),
                            data.now_dt && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: external_dayjs_default()(data.now_dt, "DD.MM.YYYY").locale("ru").format("dddd, DD MMMM")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherFact */._E, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    ((ref = data.fact) === null || ref === void 0 ? void 0 : ref.icon) && /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled/* WeatherFactIcon */.Tu, {
                                        src: `https://yastatic.net/weather/i/icons/funky/dark/${data.fact.icon}.svg`,
                                        alt: "icon",
                                        layout: "fixed",
                                        width: 80,
                                        height: 80
                                    }),
                                    ((ref1 = data.fact) === null || ref1 === void 0 ? void 0 : ref1.temp) && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: getTemp(data.fact.temp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    ((ref2 = data.fact) === null || ref2 === void 0 ? void 0 : ref2.condition) && /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled/* WeatherCondition */.pt, {
                                        children: translateCondition(data.fact.condition)
                                    }),
                                    ((ref3 = data.fact) === null || ref3 === void 0 ? void 0 : ref3.feels_like) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherFeels */.Yu, {
                                        children: [
                                            "\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A",
                                            " ",
                                            getTemp(data.fact.feels_like)
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !!((ref4 = data.forecasts) === null || ref4 === void 0 ? void 0 : ref4.length) && data.forecasts[0].parts && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled/* WeatherParts */.NM, {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\u0412\u0435\u0447\u0435\u0440\u043E\u043C "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled/* WeatherPartIcon */.rR, {
                                                src: `https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.evening.icon}.svg`,
                                                alt: "icon",
                                                layout: "fixed",
                                                width: 24,
                                                height: 24
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: getTemp(data.forecasts[0].parts.evening.temp_avg)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\u041D\u043E\u0447\u044C\u044E "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled/* WeatherPartIcon */.rR, {
                                                src: `https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.night.icon}.svg`,
                                                alt: "icon",
                                                layout: "fixed",
                                                width: 24,
                                                height: 24
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: getTemp(data.forecasts[0].parts.night.temp_avg)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\u0423\u0442\u0440\u043E\u043C "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled/* WeatherPartIcon */.rR, {
                                                src: `https://yastatic.net/weather/i/icons/funky/dark/${data.forecasts[0].parts.morning.icon}.svg`,
                                                alt: "icon",
                                                layout: "fixed",
                                                width: 24,
                                                height: 24
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: getTemp(data.forecasts[0].parts.morning.temp_avg)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Weather_Weather = (Weather);


/***/ }),

/***/ 8106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CopyButton_CopyButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "copy-to-clipboard"
const external_copy_to_clipboard_namespaceObject = require("copy-to-clipboard");
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_namespaceObject);
// EXTERNAL MODULE: ./src/style/mixins.ts + 3 modules
var mixins = __webpack_require__(9507);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/CopyButton/CopyButton.styled.tsx


const Container = external_styled_components_default().button.withConfig({
    componentId: "sc-d9b30fe7-0"
})`
    position: relative;
    border-radius: 50%;
    background-color: rgba(35, 35, 35, 0.2);
    cursor: pointer;

    ${(0,mixins/* allBreakpointValue */.Di)("width", 60, 40, 36, 36)};
    ${(0,mixins/* allBreakpointValue */.Di)("height", 60, 40, 36, 36)};

    &:hover {
        & > svg {
            opacity: 0.6;
        }
    }

    & > svg {
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease-in-out;

        ${(0,mixins/* allBreakpointValue */.Di)("width", 28.8, 19, 17, 17)};
        ${(0,mixins/* allBreakpointValue */.Di)("height", 28.8, 19, 17, 17)};
    }
`;

;// CONCATENATED MODULE: ./src/icons/copy.svg
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    opacity: 0.8,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#fff"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.719 3.781c2.088-2.088 5.46-2.102 7.531-.031 2.071 2.071 2.057 5.443-.031 7.531l-3.113 3.113-1.363-1.364 3.112-3.112c1.329-1.33 1.338-3.475.02-4.793s-3.464-1.309-4.793.02L11.38 7.847l-1.363-1.364 2.702-2.702ZM9.918 18.855l1.648-1.649 1.364 1.364-1.649 1.649c-2.088 2.088-5.46 2.102-7.531.031-2.071-2.071-2.057-5.443.031-7.531l1.571-1.571 1.364 1.364-1.571 1.57c-1.329 1.33-1.338 3.475-.02 4.793s3.464 1.31 4.793-.02Z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.954 9.91-7.5 7.5-1.5-1.5 7.5-7.5 1.5 1.5Z"
  }))));
};

/* harmony default export */ const copy = (SvgCopy);
;// CONCATENATED MODULE: ./src/components/common/CopyButton/CopyButton.tsx





const CopyButton = ({ copyText , className  })=>{
    const clickHandler = ()=>{
        const copyContent = async ()=>{
            try {
                const text = new DOMParser().parseFromString(copyText, "text/html").documentElement.textContent;
                external_copy_to_clipboard_default()(text);
            } catch (err) {
                console.error(err);
            }
        };
        copyContent();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: className,
        onClick: clickHandler,
        children: /*#__PURE__*/ jsx_runtime_.jsx(copy, {})
    });
};
/* harmony default export */ const CopyButton_CopyButton = (CopyButton);


/***/ }),

/***/ 657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Image_Image)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/placeholder.jpeg
/* harmony default export */ const placeholder = ({"src":"/_next/static/media/placeholder.931eabd3.jpeg","height":1080,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsIP/xAAXEAADAQAAAAAAAAAAAAAAAAAAEUJh/9oACAEBAAE/AMpn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/Image/Image.styled.tsx

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d905c302-0"
})`
    position: relative;
    display: inline-block;
`;

;// CONCATENATED MODULE: ./src/components/common/Image/Image.tsx





const defaultOption = {
    src: placeholder,
    quality: 100,
    lazyBoundary: "500px",
    placeholder: "blur",
    blurDataURL: placeholder.blurDataURL
};
const Image = (props)=>{
    const options = {
        ...defaultOption,
        ...props,
        src: props.src ?? defaultOption.src
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            ...options
        })
    });
};
/* harmony default export */ const Image_Image = (/*#__PURE__*/(0,external_react_.memo)(Image));


/***/ }),

/***/ 5029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/Layout/Layout.styled.tsx

const Container = external_styled_components_default().main.withConfig({
    componentId: "sc-c9283b59-0"
})`
    position: relative;
`;

;// CONCATENATED MODULE: ./src/components/common/Header/Header.styled.tsx

const Header_styled_Container = external_styled_components_default().header.withConfig({
    componentId: "sc-ec58b050-0"
})`
    position: relative;
`;

;// CONCATENATED MODULE: ./src/components/common/Header/Header.tsx



const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Header_styled_Container, {});
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/common/Footer/Footer.styled.tsx

const Footer_styled_Container = external_styled_components_default().footer.withConfig({
    componentId: "sc-36516dda-0"
})`
    position: relative;
`;

;// CONCATENATED MODULE: ./src/components/common/Footer/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Footer_styled_Container, {});
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/common/Sandwich/Sandwich.styled.tsx

const Sandwich_styled_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d558d250-0"
})`
    position: relative;
`;

;// CONCATENATED MODULE: ./src/components/common/Sandwich/Sandwich.tsx



const Sandwich = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Sandwich_styled_Container, {});
};
/* harmony default export */ const Sandwich_Sandwich = (Sandwich);

;// CONCATENATED MODULE: ./src/components/common/Layout/Layout.tsx







const Layout = ({ children , meta , header , sandwich  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: meta.keywords
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:description",
                        content: meta.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                ...header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sandwich_Sandwich, {
                ...sandwich
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);


/***/ }),

/***/ 2117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SliderNavigation_SliderNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/style/mixins.ts + 3 modules
var mixins = __webpack_require__(9507);
;// CONCATENATED MODULE: ./src/components/common/SliderNavigation/SliderNavigation.styled.tsx


const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ce1a51c2-0"
})`
    display: flex;
    align-items: center;

    .swiper-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        ${(0,mixins/* allBreakpointValue */.Di)("width", 60, 40, 36, 36)};
        ${(0,mixins/* allBreakpointValue */.Di)("height", 60, 40, 36, 36)};

        &.prev {
            svg {
                transform: rotate(-180deg);
            }
        }

        &.next {
            ${(0,mixins/* allBreakpointValue */.Di)("margin-left", 10, 8, 8, 8)};
        }

        &:hover {
            svg {
                opacity: 0.6;
            }
        }

        svg {
            display: block;
            ${(0,mixins/* allBreakpointValue */.Di)("width", 24, 16, 14, 14)};
            ${(0,mixins/* allBreakpointValue */.Di)("height", 24, 16, 14, 14)};
            stroke: currentColor;
            transition: opacity 0.3s ease-in-out;
        }
    }
`;

;// CONCATENATED MODULE: ./src/icons/arrow.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m10 22 9.218-8.326a1 1 0 0 0 .036-1.45L10 3",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round"
  })));
};

/* harmony default export */ const arrow = (SvgArrow);
;// CONCATENATED MODULE: ./src/components/common/SliderNavigation/SliderNavigation.tsx




const SliderNavigation = ({ swiper , className ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `swiper-button prev`,
                onClick: ()=>{
                    return swiper === null || swiper === void 0 ? void 0 : swiper.slidePrev();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `swiper-button next`,
                onClick: ()=>{
                    return swiper === null || swiper === void 0 ? void 0 : swiper.slideNext();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(arrow, {})
            })
        ]
    });
};
/* harmony default export */ const SliderNavigation_SliderNavigation = (SliderNavigation);


/***/ }),

/***/ 4551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ToggleTheme_ToggleTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/style/mixins.ts + 3 modules
var mixins = __webpack_require__(9507);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/ToggleTheme/ToggleTheme.styled.tsx


const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f53622b-0"
})`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${(0,mixins/* color */.$_)("gray")};
    border-radius: 16px;

    ${(0,mixins/* mediaBreakpointUp */.Ot)("md")} {
        flex-direction: column;
    }

    ${(0,mixins/* allBreakpointValue */.Di)("min-height", 101, 64, 57, 38)};
    ${(0,mixins/* allBreakpointValue */.Di)("padding", 20, 12, 12, 12)};
`;
const ToggleThemeTitle = external_styled_components_default().p.withConfig({
    componentId: "sc-f53622b-1"
})`
    color: ${(0,mixins/* color */.$_)("blue")};

    ${(0,mixins/* font */.LZ)("text-2")};
    ${(0,mixins/* allBreakpointValue */.Di)("margin-bottom", 10, 7, 7)};
`;
const ToggleThemeWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-f53622b-2"
})`
    display: flex;
    align-items: center;

    & > p {
        color: ${({ theme  })=>theme.mode === "dark" && "black"};
        user-select: none;
        ${(0,mixins/* font */.LZ)("text-l")};
        ${(0,mixins/* allBreakpointValue */.Di)("margin-right", 20, 12, 12, 12)};
    }
`;
const Input = external_styled_components_default().input.withConfig({
    componentId: "sc-f53622b-3"
})`
    position: relative;
    appearance: none;
    border: 2px solid rgba(35, 35, 35, 0.2);
    border-radius: 370px;
    cursor: pointer;

    ${(0,mixins/* allBreakpointValue */.Di)("width", 54, 34, 26, 26)};
    ${(0,mixins/* allBreakpointValue */.Di)("height", 28, 18, 14, 14)};

    &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 1px;
        background: ${(0,mixins/* color */.$_)("blue")};
        border-radius: 50%;
        transform: translate(0%, -50%);
        transition: left 0.3s linear;

        ${(0,mixins/* allBreakpointValue */.Di)("width", 21, 14, 10, 10)};
        ${(0,mixins/* allBreakpointValue */.Di)("height", 21, 14, 10, 10)};

        ${(0,mixins/* mediaBreakpointUp */.Ot)("fhd")} {
            left: 2px;
        }
    }

    &:checked::after {
        left: 50%;

        ${(0,mixins/* mediaBreakpointUp */.Ot)("fhd")} {
            left: 55%;
        }
    }
`;

// EXTERNAL MODULE: ./src/context/ThemeContext.ts
var ThemeContext = __webpack_require__(802);
;// CONCATENATED MODULE: ./src/hooks/useThemeMode.ts


const useThemeMode = ()=>{
    const themeCtx = (0,ThemeContext/* useThemeContext */.T)();
    const setMode = (mode)=>{
        window.localStorage.setItem("theme", mode);
        themeCtx.setTheme(mode);
    };
    const toggleTheme = ()=>{
        setMode(themeCtx.theme === "light" ? "dark" : "light");
    };
    (0,external_react_.useEffect)(()=>{
        const localTheme = window.localStorage.getItem("theme");
        if (localTheme) {
            setMode(localTheme);
        }
    }, []);
    return {
        theme: themeCtx.theme,
        toggleTheme
    };
};

;// CONCATENATED MODULE: ./src/components/common/ToggleTheme/ToggleTheme.tsx




const ToggleTheme = ()=>{
    const { toggleTheme , theme  } = useThemeMode();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ToggleThemeTitle, {
                children: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToggleThemeWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: theme === "dark" ? "\u0422\u0451\u043C\u043D\u0430\u044F" : "\u0421\u0432\u0435\u0442\u043B\u0430\u044F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                        type: "checkbox",
                        onChange: ()=>toggleTheme(),
                        checked: theme === "dark"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ToggleTheme_ToggleTheme = (ToggleTheme);


/***/ }),

/***/ 3539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bu": () => (/* binding */ EventsTitle),
/* harmony export */   "G8": () => (/* binding */ EventsMainInfo),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "hA": () => (/* binding */ EventsGrid)
/* harmony export */ });
/* harmony import */ var _style_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9507);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_blocks_Weather_Weather_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4333);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
    componentId: "sc-cbea9b09-0"
})`
    position: relative;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .sideOffsets */ .h$)()}
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("padding-top", 160, 100, 60, 60)};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("padding-bottom", 160, 100, 60, 60)};
`;
const EventsTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-cbea9b09-1"
})`
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .font */ .LZ)("h1")};
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 28, 20, 12, 20)};
`;
const EventsMainInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cbea9b09-2"
})`
    display: flex;
    flex-direction: column;
    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 120, 80, 60, 28)};

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointUp */ .Ot)("md")} {
        flex-direction: row;
    }

    & > div:nth-child(1) {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointDown */ .ip)("md")} {
            margin-bottom: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(20, "xs")};
        }
    }

    & > div:nth-child(2) {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("min-width", 370, 249, 159)};
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-left", 40, 28, 20)};
    }

    ${_components_blocks_Weather_Weather_styled__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2} {
        ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .allBreakpointValue */ .Di)("margin-bottom", 20, 12, 12, 12)};
    }
`;
const EventsGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-cbea9b09-3"
})`
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointUp */ .Ot)("md")} {
        grid-template-columns: 1fr 1fr;
        gap: 28px 20px;
    }

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointUp */ .Ot)("xl")} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 60px 28px;
    }

    ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__/* .mediaBreakpointUp */ .Ot)("fhd")} {
        gap: ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(80)} ${(0,_style_mixins__WEBPACK_IMPORTED_MODULE_0__.vw)(40)};
    }
`;


/***/ }),

/***/ 2557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Events_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3539);
/* harmony import */ var _components_blocks_CardEvent_CardEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(970);
/* harmony import */ var _components_blocks_EventSlider_EventSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1487);
/* harmony import */ var _components_blocks_Weather_Weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5816);
/* harmony import */ var _components_common_ToggleTheme_ToggleTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4551);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_blocks_CardEvent_CardEvent__WEBPACK_IMPORTED_MODULE_3__, _components_blocks_EventSlider_EventSlider__WEBPACK_IMPORTED_MODULE_4__]);
([_components_blocks_CardEvent_CardEvent__WEBPACK_IMPORTED_MODULE_3__, _components_blocks_EventSlider_EventSlider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CardsGrid = ({ title , cardsSlider , cards , weather ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Events_styled__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Events_styled__WEBPACK_IMPORTED_MODULE_2__/* .EventsTitle */ .Bu, {
                dangerouslySetInnerHTML: {
                    __html: title
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Events_styled__WEBPACK_IMPORTED_MODULE_2__/* .EventsMainInfo */ .G8, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blocks_EventSlider_EventSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        cards: cardsSlider
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blocks_Weather_Weather__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                info: weather
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ToggleTheme_ToggleTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Events_styled__WEBPACK_IMPORTED_MODULE_2__/* .EventsGrid */ .hA, {
                children: cards.map((card, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blocks_CardEvent_CardEvent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...card
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardsGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5029);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5314);
/* harmony import */ var _components_sections_Events_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_sections_Events_Events__WEBPACK_IMPORTED_MODULE_4__]);
_components_sections_Events_Events__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Index = ({ meta , header , sandwich , content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        meta: meta,
        header: header,
        sandwich: sandwich,
        children: (content === null || content === void 0 ? void 0 : content.events) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Events_Events__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...content.events
        })
    });
};
const getStaticProps = async ()=>{
    const content = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getIndexPage */ .ME)();
    return {
        props: {
            meta: {
                title: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
                description: "description",
                keywords: "keywords"
            },
            header: {},
            sandwich: {},
            content
        },
        revalidate: 10
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,667], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();