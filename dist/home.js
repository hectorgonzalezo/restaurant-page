"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpeg */ "./src/assets/pizza.jpeg");

 
const home = (function () {

    //main elements
    const heroArea = document.createElement('div')
    heroArea.id = 'hero-area'
    const mainText = document.createElement('h2');
    mainText.innerText = 'The best New Haven style pizza in San Cristobal de Las casas'
    const pizzaImg = document.createElement('img');
    pizzaImg.src = _assets_pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    pizzaImg.id = 'pizza-img';
    const buttonOrder = document.createElement('button');
    buttonOrder.innerText = 'Order online';

    const infoArea = document.createElement('div');
    infoArea.id = 'info-area'

    //infoArea elements
    const infoTitle = document.createElement('h2');
    infoTitle.innerText = 'Hours';

    //table with hours
    const hoursTable = document.createElement('table');
    //1st table row
    const monToThurRow = document.createElement('tr');
    const monToThurCol = document.createElement('td');
    monToThurCol.innerText = 'Monday-Thursday';
    const monToThurHours = document.createElement('td');
    monToThurHours.innerText = '10AM-5PM';
    monToThurRow.append(monToThurCol, monToThurHours)
    //2nd table row
    const friToSatRow = document.createElement('tr');
    const friToSatCol = document.createElement('td');
    friToSatCol.innerText = 'Friday-Saturday';
    const friToSatHours = document.createElement('td');
    friToSatHours.innerText = '10AM-8PM';
    friToSatRow.append(friToSatCol, friToSatHours)
    //3rd table row
    const sunRow = document.createElement('tr');
    const sunCol = document.createElement('td');
    sunCol.innerText = 'Sunday';
    const sunHours = document.createElement('td');
    sunHours.innerText = 'Closed';
    sunRow.append(sunCol, sunHours)

    hoursTable.append(monToThurRow, friToSatRow, sunRow)

    function render(main) {
        heroArea.append(mainText, pizzaImg, buttonOrder)
        infoArea.append(infoTitle, hoursTable);
        main.append(heroArea, infoArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/assets/pizza.jpeg":
/*!*******************************!*\
  !*** ./src/assets/pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3465420826def7e78e4b.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBpenphSW1hZ2VVcmwgZnJvbSAnLi9hc3NldHMvcGl6emEuanBlZyc7XG4gXG5jb25zdCBob21lID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IGhlcm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZXJvQXJlYS5pZCA9ICdoZXJvLWFyZWEnXG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UZXh0LmlubmVyVGV4dCA9ICdUaGUgYmVzdCBOZXcgSGF2ZW4gc3R5bGUgcGl6emEgaW4gU2FuIENyaXN0b2JhbCBkZSBMYXMgY2FzYXMnXG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltZy5zcmMgPSBwaXp6YUltYWdlVXJsO1xuICAgIHBpenphSW1nLmlkID0gJ3BpenphLWltZyc7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25PcmRlci5pbm5lclRleHQgPSAnT3JkZXIgb25saW5lJztcblxuICAgIGNvbnN0IGluZm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0FyZWEuaWQgPSAnaW5mby1hcmVhJ1xuXG4gICAgLy9pbmZvQXJlYSBlbGVtZW50c1xuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdIb3Vycyc7XG5cbiAgICAvL3RhYmxlIHdpdGggaG91cnNcbiAgICBjb25zdCBob3Vyc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAvLzFzdCB0YWJsZSByb3dcbiAgICBjb25zdCBtb25Ub1RodXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG1vblRvVGh1ckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9uVG9UaHVyQ29sLmlubmVyVGV4dCA9ICdNb25kYXktVGh1cnNkYXknO1xuICAgIGNvbnN0IG1vblRvVGh1ckhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJIb3Vycy5pbm5lclRleHQgPSAnMTBBTS01UE0nO1xuICAgIG1vblRvVGh1clJvdy5hcHBlbmQobW9uVG9UaHVyQ29sLCBtb25Ub1RodXJIb3VycylcbiAgICAvLzJuZCB0YWJsZSByb3dcbiAgICBjb25zdCBmcmlUb1NhdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZnJpVG9TYXRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZyaVRvU2F0Q29sLmlubmVyVGV4dCA9ICdGcmlkYXktU2F0dXJkYXknO1xuICAgIGNvbnN0IGZyaVRvU2F0SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZyaVRvU2F0SG91cnMuaW5uZXJUZXh0ID0gJzEwQU0tOFBNJztcbiAgICBmcmlUb1NhdFJvdy5hcHBlbmQoZnJpVG9TYXRDb2wsIGZyaVRvU2F0SG91cnMpXG4gICAgLy8zcmQgdGFibGUgcm93XG4gICAgY29uc3Qgc3VuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBzdW5Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHN1bkNvbC5pbm5lclRleHQgPSAnU3VuZGF5JztcbiAgICBjb25zdCBzdW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuSG91cnMuaW5uZXJUZXh0ID0gJ0Nsb3NlZCc7XG4gICAgc3VuUm93LmFwcGVuZChzdW5Db2wsIHN1bkhvdXJzKVxuXG4gICAgaG91cnNUYWJsZS5hcHBlbmQobW9uVG9UaHVyUm93LCBmcmlUb1NhdFJvdywgc3VuUm93KVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKG1haW4pIHtcbiAgICAgICAgaGVyb0FyZWEuYXBwZW5kKG1haW5UZXh0LCBwaXp6YUltZywgYnV0dG9uT3JkZXIpXG4gICAgICAgIGluZm9BcmVhLmFwcGVuZChpbmZvVGl0bGUsIGhvdXJzVGFibGUpO1xuICAgICAgICBtYWluLmFwcGVuZChoZXJvQXJlYSwgaW5mb0FyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==