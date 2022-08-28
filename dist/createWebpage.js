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
/* harmony import */ var _assets_pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpeg */ "./src/assets/pizza.jpeg");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsWUFBWTtBQUN0RTtBQUNBLGNBQWMsb0RBQU87QUFDckI7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1QjtBQUNWO0FBQ3RDO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQWE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVXZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvVXJsIGZyb20gJy4vYXNzZXRzL2dpdGh1Yi1sb2dvLnBuZydcbmZ1bmN0aW9uIGFkZEZvb3Rlcihsb2NhdGlvbiwgcHJvamVjdE5hbWUpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cblx0Y29uc3QgbXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0bXlOYW1lLmlubmVyVGV4dCA9ICdIw6ljdG9yIEdvbnrDoWxleiBPcm96Y28nO1xuXG5cdGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGdpdGh1YkxpbmsuaHJlZiA9ICBgaHR0cHM6Ly9naXRodWIuY29tL2hlY3RvcmdvbnphbGV6by8ke3Byb2plY3ROYW1lfWA7XG5cdGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0bG9nb0ltZy5zcmM9IGxvZ29Vcmw7XG4gICAgbG9nb0ltZy5hbHQ9ICdHaXRodWIgbG9nbyc7XG4gICAgbG9nb0ltZy5pZD0nZ2l0aHViLWxvZ28nXG5cdGdpdGh1YkxpbmsuYXBwZW5kKGxvZ29JbWcpOy8vYWRkIGltZyBpbnNpZGUgbGlua1xuXG5cdGZvb3Rlci5hcHBlbmQobXlOYW1lLCBnaXRodWJMaW5rKTtcblxuXHQvL2FkZCB0byBsb2NhdGlvbiBpbmRpY2F0ZWQgYnkgd2VicGFnZVxuXHRsb2NhdGlvbi5hcHBlbmQoZm9vdGVyKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFkZEZvb3RlcjtcbiIsImltcG9ydCBwaXp6YUltYWdlVXJsIGZyb20gJy4vYXNzZXRzL3BpenphLmpwZWcnO1xuaW1wb3J0IGFkZEZvb3RlciBmcm9tICcuL2NyZWF0ZUZvb3RlcidcbmNvbnN0IHdlYnBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vbWFpbiBjb250YWluZXIgZGl2XG4gICAgY29udGVudERpdi5pZCA9ICdjb250YWluZXInXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuXG4gICAgLy9oZWFkZXIgZWxlbWVudHNcbiAgICBjb25zdCBuYW1lUmVzdGF1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbmFtZVJlc3RhdXJhbnQuaW5uZXJUZXh0ID0gJ1BpenphIHBsYWNlJ1xuICAgIGNvbnN0IGhlYWRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIC8vY3JlYXRlIGhlYWRlciBtZW51IG9wdGlvbnMgb2JqZWN0XG4gICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IHt9O1xuICAgIC8vc3RvcmUgZWFjaCBvcHRpb24gaW4gb2JqZWN0IGFuZCBhcHBlbmQgaXQgdG8gRE9NXG4gICAgWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBoZWFkZXJPcHRpb25zW29wdGlvbl0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBoZWFkZXJPcHRpb25zW29wdGlvbl0uaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBoZWFkZXJMaXN0LmFwcGVuZChoZWFkZXJPcHRpb25zW29wdGlvbl0pO1xuICAgIH0pO1xuXG4gICAgLy9tYWluIGVsZW1lbnRzXG4gICAgY29uc3QgaGVyb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlcm9BcmVhLmlkID0gJ2hlcm8tYXJlYSdcbiAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpblRleHQuaW5uZXJUZXh0ID0gJ1RoZSBiZXN0IE5ldyBIYXZlbiBzdHlsZSBwaXp6YSBpbiBTYW4gQ3Jpc3RvYmFsIGRlIExhcyBjYXNhcydcbiAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBpenphSW1nLnNyYyA9IHBpenphSW1hZ2VVcmw7XG4gICAgcGl6emFJbWcuaWQgPSAncGl6emEtaW1nJztcbiAgICBjb25zdCBidXR0b25PcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbk9yZGVyLmlubmVyVGV4dCA9ICdPcmRlciBvbmxpbmUnO1xuXG4gICAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQXJlYS5pZCA9ICdpbmZvLWFyZWEnXG5cbiAgICAvL2luZm9BcmVhIGVsZW1lbnRzXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJUZXh0ID0gJ0hvdXJzJztcbiAgICAvL3RhYmxlIHdpdGggaG91cnNcbiAgICBjb25zdCBob3Vyc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIGNvbnN0IG1vblRvVGh1clJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgbW9uVG9UaHVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJDb2wuaW5uZXJUZXh0ID0gJ01vbmRheS1UaHVyc2RheSc7XG4gICAgY29uc3QgbW9uVG9UaHVySG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG1vblRvVGh1ckhvdXJzLmlubmVyVGV4dCA9ICcxMEFNLTVQTSc7XG4gICAgbW9uVG9UaHVyUm93LmFwcGVuZChtb25Ub1RodXJDb2wsIG1vblRvVGh1ckhvdXJzKVxuXG4gICAgY29uc3QgZnJpVG9TYXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IGZyaVRvU2F0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBmcmlUb1NhdENvbC5pbm5lclRleHQgPSAnRnJpZGF5LVNhdHVyZGF5JztcbiAgICBjb25zdCBmcmlUb1NhdEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBmcmlUb1NhdEhvdXJzLmlubmVyVGV4dCA9ICcxMEFNLThQTSc7XG4gICAgZnJpVG9TYXRSb3cuYXBwZW5kKGZyaVRvU2F0Q29sLCBmcmlUb1NhdEhvdXJzKVxuXG5cbiAgICBjb25zdCBzdW5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHN1bkNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuQ29sLmlubmVyVGV4dCA9ICdTdW5kYXknO1xuICAgIGNvbnN0IHN1bkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBzdW5Ib3Vycy5pbm5lclRleHQgPSAnQ2xvc2VkJztcbiAgICBzdW5Sb3cuYXBwZW5kKHN1bkNvbCwgc3VuSG91cnMpXG5cbiAgICBob3Vyc1RhYmxlLmFwcGVuZChtb25Ub1RodXJSb3csIGZyaVRvU2F0Um93LCBzdW5Sb3cpXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgYm9keS5hcHBlbmQoY29udGVudERpdilcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbiAgICAgICAgYWRkRm9vdGVyKGJvZHksICdyZXN0YXVyYW50LXBhZ2UnKTtcbiAgICAgICAgaGVyb0FyZWEuYXBwZW5kKG1haW5UZXh0LCBwaXp6YUltZywgYnV0dG9uT3JkZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmQobmFtZVJlc3RhdXJhbnQsIGhlYWRlckxpc3QpO1xuICAgICAgICBpbmZvQXJlYS5hcHBlbmQoaW5mb1RpdGxlLCBob3Vyc1RhYmxlKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoaGVyb0FyZWEsIGluZm9BcmVhKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgIHdlYnBhZ2UucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhZ2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==