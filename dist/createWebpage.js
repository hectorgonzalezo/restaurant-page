"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["createWebpage"],{

/***/ "./src/createFooter.js":
/*!*****************************!*\
  !*** ./src/createFooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/github-logo.png */ "./src/assets/github-logo.png");

function addFooter(location, projectName) {
	const footer = document.createElement('footer');

	const myName = document.createElement('h2');
	myName.innerText = 'Héctor González Orozco';

	const githubLink = document.createElement('a');
	githubLink.href =  `https://github.com/hectorgonzalezo/${projectName}`;
	const logoImg = document.createElement('img');
	logoImg.src= _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logoImg.alt= 'Github logo';
    logoImg.id='github-logo'
	githubLink.append(logoImg);//add img inside link

	footer.append(myName, githubLink);

	//add to location indicated by webpage
	location.append(footer)
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addFooter);


/***/ }),

/***/ "./src/createWebpage.js":
/*!******************************!*\
  !*** ./src/createWebpage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFooter */ "./src/createFooter.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");




const webpage = (function () {
    const body = document.querySelector('body');
    const contentDiv = document.createElement('div');//main container div
    contentDiv.id = 'container';
    const header = document.createElement('header');
    const main = document.createElement('main');


    //header elements
    function _createHeader() {
        const nameRestaurant = document.createElement('h1');
        nameRestaurant.innerText = 'Pizza place'
        const headerList = document.createElement('ul');
        //create header menu options object
        const headerOptions = {};
        //store each option in object and append it to DOM
        ['Home', 'Menu', 'Contact'].forEach((option) => {
            headerOptions[option] = document.createElement('li');
            headerOptions[option].innerText = option;
            headerList.append(headerOptions[option]);
        });
        header.append(nameRestaurant, headerList);
    };

    function render() {
        body.append(contentDiv)
        _createHeader();
        contentDiv.append(header, main);
        (0,_createFooter__WEBPACK_IMPORTED_MODULE_0__["default"])(body, 'restaurant-page');
        _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(main);
    }


    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webpage);


/***/ }),

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

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createWebpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsWUFBWTtBQUN0RTtBQUNBLGNBQWMsb0RBQU87QUFDckI7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJjO0FBQ1g7OztBQUc1QjtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFTO0FBQ2pCLFFBQVEsdURBQVc7QUFDbkI7OztBQUdBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDekMwQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlV2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nb1VybCBmcm9tICcuL2Fzc2V0cy9naXRodWItbG9nby5wbmcnXG5mdW5jdGlvbiBhZGRGb290ZXIobG9jYXRpb24sIHByb2plY3ROYW1lKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5cdGNvbnN0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdG15TmFtZS5pbm5lclRleHQgPSAnSMOpY3RvciBHb256w6FsZXogT3JvemNvJztcblxuXHRjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRnaXRodWJMaW5rLmhyZWYgPSAgYGh0dHBzOi8vZ2l0aHViLmNvbS9oZWN0b3Jnb256YWxlem8vJHtwcm9qZWN0TmFtZX1gO1xuXHRjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGxvZ29JbWcuc3JjPSBsb2dvVXJsO1xuICAgIGxvZ29JbWcuYWx0PSAnR2l0aHViIGxvZ28nO1xuICAgIGxvZ29JbWcuaWQ9J2dpdGh1Yi1sb2dvJ1xuXHRnaXRodWJMaW5rLmFwcGVuZChsb2dvSW1nKTsvL2FkZCBpbWcgaW5zaWRlIGxpbmtcblxuXHRmb290ZXIuYXBwZW5kKG15TmFtZSwgZ2l0aHViTGluayk7XG5cblx0Ly9hZGQgdG8gbG9jYXRpb24gaW5kaWNhdGVkIGJ5IHdlYnBhZ2Vcblx0bG9jYXRpb24uYXBwZW5kKGZvb3Rlcilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhZGRGb290ZXI7XG4iLCJpbXBvcnQgYWRkRm9vdGVyIGZyb20gJy4vY3JlYXRlRm9vdGVyJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcydcblxuXG5jb25zdCB3ZWJwYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvL21haW4gY29udGFpbmVyIGRpdlxuICAgIGNvbnRlbnREaXYuaWQgPSAnY29udGFpbmVyJztcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5cbiAgICAvL2hlYWRlciBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVSZXN0YXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZVJlc3RhdXJhbnQuaW5uZXJUZXh0ID0gJ1BpenphIHBsYWNlJ1xuICAgICAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgLy9jcmVhdGUgaGVhZGVyIG1lbnUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IHt9O1xuICAgICAgICAvL3N0b3JlIGVhY2ggb3B0aW9uIGluIG9iamVjdCBhbmQgYXBwZW5kIGl0IHRvIERPTVxuICAgICAgICBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBoZWFkZXJPcHRpb25zW29wdGlvbl0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaGVhZGVyT3B0aW9uc1tvcHRpb25dLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgICAgIGhlYWRlckxpc3QuYXBwZW5kKGhlYWRlck9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kKG5hbWVSZXN0YXVyYW50LCBoZWFkZXJMaXN0KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBib2R5LmFwcGVuZChjb250ZW50RGl2KVxuICAgICAgICBfY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlciwgbWFpbik7XG4gICAgICAgIGFkZEZvb3Rlcihib2R5LCAncmVzdGF1cmFudC1wYWdlJyk7XG4gICAgICAgIGhvbWUucmVuZGVyKG1haW4pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgcmVuZGVyIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgd2VicGFnZVxuIiwiaW1wb3J0IHBpenphSW1hZ2VVcmwgZnJvbSAnLi9hc3NldHMvcGl6emEuanBlZyc7XG4gXG5jb25zdCBob21lID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IGhlcm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZXJvQXJlYS5pZCA9ICdoZXJvLWFyZWEnXG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UZXh0LmlubmVyVGV4dCA9ICdUaGUgYmVzdCBOZXcgSGF2ZW4gc3R5bGUgcGl6emEgaW4gU2FuIENyaXN0b2JhbCBkZSBMYXMgY2FzYXMnXG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltZy5zcmMgPSBwaXp6YUltYWdlVXJsO1xuICAgIHBpenphSW1nLmlkID0gJ3BpenphLWltZyc7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25PcmRlci5pbm5lclRleHQgPSAnT3JkZXIgb25saW5lJztcblxuICAgIGNvbnN0IGluZm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0FyZWEuaWQgPSAnaW5mby1hcmVhJ1xuXG4gICAgLy9pbmZvQXJlYSBlbGVtZW50c1xuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdIb3Vycyc7XG5cbiAgICAvL3RhYmxlIHdpdGggaG91cnNcbiAgICBjb25zdCBob3Vyc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAvLzFzdCB0YWJsZSByb3dcbiAgICBjb25zdCBtb25Ub1RodXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG1vblRvVGh1ckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9uVG9UaHVyQ29sLmlubmVyVGV4dCA9ICdNb25kYXktVGh1cnNkYXknO1xuICAgIGNvbnN0IG1vblRvVGh1ckhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJIb3Vycy5pbm5lclRleHQgPSAnMTBBTS01UE0nO1xuICAgIG1vblRvVGh1clJvdy5hcHBlbmQobW9uVG9UaHVyQ29sLCBtb25Ub1RodXJIb3VycylcbiAgICAvLzJuZCB0YWJsZSByb3dcbiAgICBjb25zdCBmcmlUb1NhdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZnJpVG9TYXRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZyaVRvU2F0Q29sLmlubmVyVGV4dCA9ICdGcmlkYXktU2F0dXJkYXknO1xuICAgIGNvbnN0IGZyaVRvU2F0SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZyaVRvU2F0SG91cnMuaW5uZXJUZXh0ID0gJzEwQU0tOFBNJztcbiAgICBmcmlUb1NhdFJvdy5hcHBlbmQoZnJpVG9TYXRDb2wsIGZyaVRvU2F0SG91cnMpXG4gICAgLy8zcmQgdGFibGUgcm93XG4gICAgY29uc3Qgc3VuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBzdW5Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHN1bkNvbC5pbm5lclRleHQgPSAnU3VuZGF5JztcbiAgICBjb25zdCBzdW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuSG91cnMuaW5uZXJUZXh0ID0gJ0Nsb3NlZCc7XG4gICAgc3VuUm93LmFwcGVuZChzdW5Db2wsIHN1bkhvdXJzKVxuXG4gICAgaG91cnNUYWJsZS5hcHBlbmQobW9uVG9UaHVyUm93LCBmcmlUb1NhdFJvdywgc3VuUm93KVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKG1haW4pIHtcbiAgICAgICAgaGVyb0FyZWEuYXBwZW5kKG1haW5UZXh0LCBwaXp6YUltZywgYnV0dG9uT3JkZXIpXG4gICAgICAgIGluZm9BcmVhLmFwcGVuZChpbmZvVGl0bGUsIGhvdXJzVGFibGUpO1xuICAgICAgICBtYWluLmFwcGVuZChoZXJvQXJlYSwgaW5mb0FyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==