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
/* harmony import */ var _github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-logo.png */ "./src/github-logo.png");

function addFooter(location, projectName) {
	const footer = document.createElement('footer');

	const myName = document.createElement('h2');
	myName.innerText = 'Héctor González Orozco';

	const githubLink = document.createElement('a');
	githubLink.href =  `https://github.com/hectorgonzalezo/${projectName}`;
	const logoImg = document.createElement('img');
	logoImg.src= _github_logo_png__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpeg */ "./src/pizza.jpeg");
/* harmony import */ var _createFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFooter */ "./src/createFooter.js");


const webpage = (function () {
    const body = document.querySelector('body');
    const contentDiv = document.createElement('div');//main container div
    contentDiv.id = 'container'
    const header = document.createElement('header');
    const main = document.createElement('main');


    //header elements
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

    //main elements
    const heroArea = document.createElement('div')
    heroArea.id = 'hero-area'
    const mainText = document.createElement('h2');
    mainText.innerText = 'The best New Haven style pizza in San Cristobal de Las casas'
    const pizzaImg = document.createElement('img');
    pizzaImg.src = _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__;
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

    const monToThurRow = document.createElement('tr');
    const monToThurCol = document.createElement('td');
    monToThurCol.innerText = 'Monday-Thursday';
    const monToThurHours = document.createElement('td');
    monToThurHours.innerText = '10AM-5PM';
    monToThurRow.append(monToThurCol, monToThurHours)

    const friToSatRow = document.createElement('tr');
    const friToSatCol = document.createElement('td');
    friToSatCol.innerText = 'Friday-Saturday';
    const friToSatHours = document.createElement('td');
    friToSatHours.innerText = '10AM-8PM';
    friToSatRow.append(friToSatCol, friToSatHours)


    const sunRow = document.createElement('tr');
    const sunCol = document.createElement('td');
    sunCol.innerText = 'Sunday';
    const sunHours = document.createElement('td');
    sunHours.innerText = 'Closed';
    sunRow.append(sunCol, sunHours)

    hoursTable.append(monToThurRow, friToSatRow, sunRow)


    function render() {
        body.append(contentDiv)
        contentDiv.append(header, main);
        (0,_createFooter__WEBPACK_IMPORTED_MODULE_1__["default"])(body, 'restaurant-page');
        heroArea.append(mainText, pizzaImg, buttonOrder)
        header.append(nameRestaurant, headerList);
        infoArea.append(infoTitle, hoursTable);
        main.append(heroArea, infoArea);

    }

    return { render }
})();

function renderPage() {
    webpage.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);


/***/ }),

/***/ "./src/github-logo.png":
/*!*****************************!*\
  !*** ./src/github-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/pizza.jpeg":
/*!************************!*\
  !*** ./src/pizza.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3465420826def7e78e4b.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createWebpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsWUFBWTtBQUN0RTtBQUNBLGNBQWMsNkNBQU87QUFDckI7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJnQjtBQUNIO0FBQ3RDO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQWE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVXZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvVXJsIGZyb20gJy4vZ2l0aHViLWxvZ28ucG5nJ1xuZnVuY3Rpb24gYWRkRm9vdGVyKGxvY2F0aW9uLCBwcm9qZWN0TmFtZSkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuXHRjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRteU5hbWUuaW5uZXJUZXh0ID0gJ0jDqWN0b3IgR29uesOhbGV6IE9yb3pjbyc7XG5cblx0Y29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0Z2l0aHViTGluay5ocmVmID0gIGBodHRwczovL2dpdGh1Yi5jb20vaGVjdG9yZ29uemFsZXpvLyR7cHJvamVjdE5hbWV9YDtcblx0Y29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRsb2dvSW1nLnNyYz0gbG9nb1VybDtcbiAgICBsb2dvSW1nLmFsdD0gJ0dpdGh1YiBsb2dvJztcbiAgICBsb2dvSW1nLmlkPSdnaXRodWItbG9nbydcblx0Z2l0aHViTGluay5hcHBlbmQobG9nb0ltZyk7Ly9hZGQgaW1nIGluc2lkZSBsaW5rXG5cblx0Zm9vdGVyLmFwcGVuZChteU5hbWUsIGdpdGh1YkxpbmspO1xuXG5cdC8vYWRkIHRvIGxvY2F0aW9uIGluZGljYXRlZCBieSB3ZWJwYWdlXG5cdGxvY2F0aW9uLmFwcGVuZChmb290ZXIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWRkRm9vdGVyO1xuIiwiaW1wb3J0IHBpenphSW1hZ2VVcmwgZnJvbSAnLi9waXp6YS5qcGVnJztcbmltcG9ydCBhZGRGb290ZXIgZnJvbSAnLi9jcmVhdGVGb290ZXInXG5jb25zdCB3ZWJwYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvL21haW4gY29udGFpbmVyIGRpdlxuICAgIGNvbnRlbnREaXYuaWQgPSAnY29udGFpbmVyJ1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblxuICAgIC8vaGVhZGVyIGVsZW1lbnRzXG4gICAgY29uc3QgbmFtZVJlc3RhdXJhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG5hbWVSZXN0YXVyYW50LmlubmVyVGV4dCA9ICdQaXp6YSBwbGFjZSdcbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAvL2NyZWF0ZSBoZWFkZXIgbWVudSBvcHRpb25zIG9iamVjdFxuICAgIGNvbnN0IGhlYWRlck9wdGlvbnMgPSB7fTtcbiAgICAvL3N0b3JlIGVhY2ggb3B0aW9uIGluIG9iamVjdCBhbmQgYXBwZW5kIGl0IHRvIERPTVxuICAgIFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgaGVhZGVyT3B0aW9uc1tvcHRpb25dID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaGVhZGVyT3B0aW9uc1tvcHRpb25dLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgaGVhZGVyTGlzdC5hcHBlbmQoaGVhZGVyT3B0aW9uc1tvcHRpb25dKTtcbiAgICB9KTtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IGhlcm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZXJvQXJlYS5pZCA9ICdoZXJvLWFyZWEnXG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UZXh0LmlubmVyVGV4dCA9ICdUaGUgYmVzdCBOZXcgSGF2ZW4gc3R5bGUgcGl6emEgaW4gU2FuIENyaXN0b2JhbCBkZSBMYXMgY2FzYXMnXG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltZy5zcmMgPSBwaXp6YUltYWdlVXJsO1xuICAgIHBpenphSW1nLmlkID0gJ3BpenphLWltZyc7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25PcmRlci5pbm5lclRleHQgPSAnT3JkZXIgb25saW5lJztcblxuICAgIGNvbnN0IGluZm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0FyZWEuaWQgPSAnaW5mby1hcmVhJ1xuXG4gICAgLy9pbmZvQXJlYSBlbGVtZW50c1xuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdIb3Vycyc7XG4gICAgLy90YWJsZSB3aXRoIGhvdXJzXG4gICAgY29uc3QgaG91cnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBjb25zdCBtb25Ub1RodXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG1vblRvVGh1ckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9uVG9UaHVyQ29sLmlubmVyVGV4dCA9ICdNb25kYXktVGh1cnNkYXknO1xuICAgIGNvbnN0IG1vblRvVGh1ckhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJIb3Vycy5pbm5lclRleHQgPSAnMTBBTS01UE0nO1xuICAgIG1vblRvVGh1clJvdy5hcHBlbmQobW9uVG9UaHVyQ29sLCBtb25Ub1RodXJIb3VycylcblxuICAgIGNvbnN0IGZyaVRvU2F0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBmcmlUb1NhdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRDb2wuaW5uZXJUZXh0ID0gJ0ZyaWRheS1TYXR1cmRheSc7XG4gICAgY29uc3QgZnJpVG9TYXRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRIb3Vycy5pbm5lclRleHQgPSAnMTBBTS04UE0nO1xuICAgIGZyaVRvU2F0Um93LmFwcGVuZChmcmlUb1NhdENvbCwgZnJpVG9TYXRIb3VycylcblxuXG4gICAgY29uc3Qgc3VuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBzdW5Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHN1bkNvbC5pbm5lclRleHQgPSAnU3VuZGF5JztcbiAgICBjb25zdCBzdW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuSG91cnMuaW5uZXJUZXh0ID0gJ0Nsb3NlZCc7XG4gICAgc3VuUm93LmFwcGVuZChzdW5Db2wsIHN1bkhvdXJzKVxuXG4gICAgaG91cnNUYWJsZS5hcHBlbmQobW9uVG9UaHVyUm93LCBmcmlUb1NhdFJvdywgc3VuUm93KVxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGJvZHkuYXBwZW5kKGNvbnRlbnREaXYpXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlciwgbWFpbik7XG4gICAgICAgIGFkZEZvb3Rlcihib2R5LCAncmVzdGF1cmFudC1wYWdlJyk7XG4gICAgICAgIGhlcm9BcmVhLmFwcGVuZChtYWluVGV4dCwgcGl6emFJbWcsIGJ1dHRvbk9yZGVyKVxuICAgICAgICBoZWFkZXIuYXBwZW5kKG5hbWVSZXN0YXVyYW50LCBoZWFkZXJMaXN0KTtcbiAgICAgICAgaW5mb0FyZWEuYXBwZW5kKGluZm9UaXRsZSwgaG91cnNUYWJsZSk7XG4gICAgICAgIG1haW4uYXBwZW5kKGhlcm9BcmVhLCBpbmZvQXJlYSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICB3ZWJwYWdlLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQYWdlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=