"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["createWebpage"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = (function () {

    //main elements
    const menuArea = document.createElement('div');
    menuArea.id = 'menu-area';
    const mainText = document.createElement('h2');
    mainText.innerText = 'Contact!';


    function render(main) {
        menuArea.append(mainText);
        main.append(menuArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const webpage = (function () {
    const body = document.querySelector('body');
    const contentDiv = document.createElement('div');//main container div
    contentDiv.id = 'container';
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.classList.add('fade');


    //header elements
    function _createHeader() {
        const nameRestaurant = document.createElement('h1');
        nameRestaurant.innerText = 'Pizza place'
        const headerList = document.createElement('ul');

        //store each option in object and append it to DOM
        ['Home', 'Menu', 'Contact'].forEach((option) => {
            const headerOption = document.createElement('li');
            headerOption.classList.add('header-option');
             //this attribute is used by the option eventListener
            headerOption.setAttribute('data', option);
            headerOption.innerText = option;

            headerList.append(headerOption)
        })
        header.append(nameRestaurant, headerList);
};

    function _removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };
    }

    function _allowMainFadeIN() {//allows for retriggering of css animation
        const mainFade = document.querySelector('.fade');
        mainFade.addEventListener('animationend', () => {
            main.classList.remove('fade');
        })
    }

    function _highlightOption(choice) {
        const headerOptions = document.querySelectorAll('.header-option');
        headerOptions.forEach((option) => {
            console.log(option.getAttribute('data'))
            if (option.getAttribute('data') == choice) {
                option.classList.add('highlighted')
            } else{
                option.classList.remove('highlighted')
            }
        });
    }


    function render() {
        body.append(contentDiv);
        _createHeader(); 
        contentDiv.append(header, main);
        _highlightOption('Home');
        (0,_createFooter__WEBPACK_IMPORTED_MODULE_0__["default"])(body, 'restaurant-page');
        _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(main);
        _allowMainFadeIN();
    }

   
    function updateMain(choice) {
        main.classList.add('fade');//star fadeIn of choice
        _removeAllChildNodes(main);
        _highlightOption(choice);//highlights choice on header
        switch (choice) {
            case 'Home':
                _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(main);
                break;
            case 'Menu':
                _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].render(main);
                break;
            case 'Contact':
                _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].render(main);
                break;
            default:
                break;
        }
    }

    return { render, updateMain }
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
/* harmony import */ var _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chef.jpeg */ "./src/assets/chef.jpeg");


const home = (function () {

    //main elements
    const heroArea = document.createElement('div')
    heroArea.id = 'hero-area'
    const mainText = document.createElement('h2');
    mainText.innerText = 'The best Italian style pizza' + 
    ' in San Cristobal de Las Casas, Chiapas, Mexico.'
    const chefImg = document.createElement('img');
    chefImg.src = _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__
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
        heroArea.append(mainText, chefImg, buttonOrder)
        infoArea.append(infoTitle, hoursTable);
        main.append(heroArea, infoArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = (function () {

    //main elements
    const menuArea = document.createElement('div');
    menuArea.id = 'menu-area';
    const mainText = document.createElement('h2');
    mainText.innerText = 'Menu!';


    function render(main) {
        menuArea.append(mainText);
        main.append(menuArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/assets/chef.jpeg":
/*!******************************!*\
  !*** ./src/assets/chef.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b0dff151fb6f7d2c20d.jpeg";

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createWebpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNsQitCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0EsY0FBYyxvREFBTztBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCYztBQUNWO0FBQ0Q7QUFDTTs7QUFFbEM7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakIsUUFBUSx1REFBVztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGdCQUFnQix1REFBVztBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFXO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBR0QsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQzdGcUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFVO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUMxRG5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlV2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUFyZWEuaWQgPSAnbWVudS1hcmVhJztcbiAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFpblRleHQuaW5uZXJUZXh0ID0gJ0NvbnRhY3QhJztcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKG1haW4pIHtcbiAgICAgICAgbWVudUFyZWEuYXBwZW5kKG1haW5UZXh0KTtcbiAgICAgICAgbWFpbi5hcHBlbmQobWVudUFyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnUiLCJpbXBvcnQgbG9nb1VybCBmcm9tICcuL2Fzc2V0cy9naXRodWItbG9nby5wbmcnXG5mdW5jdGlvbiBhZGRGb290ZXIobG9jYXRpb24sIHByb2plY3ROYW1lKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5cdGNvbnN0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdG15TmFtZS5pbm5lclRleHQgPSAnSMOpY3RvciBHb256w6FsZXogT3JvemNvJztcblxuXHRjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRnaXRodWJMaW5rLmhyZWYgPSAgYGh0dHBzOi8vZ2l0aHViLmNvbS9oZWN0b3Jnb256YWxlem8vJHtwcm9qZWN0TmFtZX1gO1xuXHRjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGxvZ29JbWcuc3JjPSBsb2dvVXJsO1xuICAgIGxvZ29JbWcuYWx0PSAnR2l0aHViIGxvZ28nO1xuICAgIGxvZ29JbWcuaWQ9J2dpdGh1Yi1sb2dvJ1xuXHRnaXRodWJMaW5rLmFwcGVuZChsb2dvSW1nKTsvL2FkZCBpbWcgaW5zaWRlIGxpbmtcblxuXHRmb290ZXIuYXBwZW5kKG15TmFtZSwgZ2l0aHViTGluayk7XG5cblx0Ly9hZGQgdG8gbG9jYXRpb24gaW5kaWNhdGVkIGJ5IHdlYnBhZ2Vcblx0bG9jYXRpb24uYXBwZW5kKGZvb3Rlcilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhZGRGb290ZXI7XG4iLCJpbXBvcnQgYWRkRm9vdGVyIGZyb20gJy4vY3JlYXRlRm9vdGVyJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmNvbnN0IHdlYnBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vbWFpbiBjb250YWluZXIgZGl2XG4gICAgY29udGVudERpdi5pZCA9ICdjb250YWluZXInO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG5cblxuICAgIC8vaGVhZGVyIGVsZW1lbnRzXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgbmFtZVJlc3RhdXJhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBuYW1lUmVzdGF1cmFudC5pbm5lclRleHQgPSAnUGl6emEgcGxhY2UnXG4gICAgICAgIGNvbnN0IGhlYWRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICAgIC8vc3RvcmUgZWFjaCBvcHRpb24gaW4gb2JqZWN0IGFuZCBhcHBlbmQgaXQgdG8gRE9NXG4gICAgICAgIFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBoZWFkZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpO1xuICAgICAgICAgICAgIC8vdGhpcyBhdHRyaWJ1dGUgaXMgdXNlZCBieSB0aGUgb3B0aW9uIGV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIGhlYWRlck9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBvcHRpb24pO1xuICAgICAgICAgICAgaGVhZGVyT3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcblxuICAgICAgICAgICAgaGVhZGVyTGlzdC5hcHBlbmQoaGVhZGVyT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICBoZWFkZXIuYXBwZW5kKG5hbWVSZXN0YXVyYW50LCBoZWFkZXJMaXN0KTtcbn07XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hbGxvd01haW5GYWRlSU4oKSB7Ly9hbGxvd3MgZm9yIHJldHJpZ2dlcmluZyBvZiBjc3MgYW5pbWF0aW9uXG4gICAgICAgIGNvbnN0IG1haW5GYWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhZGUnKTtcbiAgICAgICAgbWFpbkZhZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItb3B0aW9uJyk7XG4gICAgICAgIGhlYWRlck9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhJykpXG4gICAgICAgICAgICBpZiAob3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YScpID09IGNob2ljZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGJvZHkuYXBwZW5kKGNvbnRlbnREaXYpO1xuICAgICAgICBfY3JlYXRlSGVhZGVyKCk7IFxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZChoZWFkZXIsIG1haW4pO1xuICAgICAgICBfaGlnaGxpZ2h0T3B0aW9uKCdIb21lJyk7XG4gICAgICAgIGFkZEZvb3Rlcihib2R5LCAncmVzdGF1cmFudC1wYWdlJyk7XG4gICAgICAgIGhvbWUucmVuZGVyKG1haW4pO1xuICAgICAgICBfYWxsb3dNYWluRmFkZUlOKCk7XG4gICAgfVxuXG4gICBcbiAgICBmdW5jdGlvbiB1cGRhdGVNYWluKGNob2ljZSkge1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTsvL3N0YXIgZmFkZUluIG9mIGNob2ljZVxuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluKTtcbiAgICAgICAgX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpOy8vaGlnaGxpZ2h0cyBjaG9pY2Ugb24gaGVhZGVyXG4gICAgICAgIHN3aXRjaCAoY2hvaWNlKSB7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBob21lLnJlbmRlcihtYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIG1lbnUucmVuZGVyKG1haW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdC5yZW5kZXIobWFpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyLCB1cGRhdGVNYWluIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgd2VicGFnZVxuIiwiaW1wb3J0IGNoZWZJbWdVcmwgZnJvbSAnLi9hc3NldHMvY2hlZi5qcGVnJ1xuXG5jb25zdCBob21lID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IGhlcm9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZXJvQXJlYS5pZCA9ICdoZXJvLWFyZWEnXG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UZXh0LmlubmVyVGV4dCA9ICdUaGUgYmVzdCBJdGFsaWFuIHN0eWxlIHBpenphJyArIFxuICAgICcgaW4gU2FuIENyaXN0b2JhbCBkZSBMYXMgQ2FzYXMsIENoaWFwYXMsIE1leGljby4nXG4gICAgY29uc3QgY2hlZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWZJbWcuc3JjID0gY2hlZkltZ1VybFxuICAgIGNvbnN0IGJ1dHRvbk9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uT3JkZXIuaW5uZXJUZXh0ID0gJ09yZGVyIG9ubGluZSc7XG5cbiAgICBjb25zdCBpbmZvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9BcmVhLmlkID0gJ2luZm8tYXJlYSdcblxuICAgIC8vaW5mb0FyZWEgZWxlbWVudHNcbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluZm9UaXRsZS5pbm5lclRleHQgPSAnSG91cnMnO1xuXG4gICAgLy90YWJsZSB3aXRoIGhvdXJzXG4gICAgY29uc3QgaG91cnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgLy8xc3QgdGFibGUgcm93XG4gICAgY29uc3QgbW9uVG9UaHVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBtb25Ub1RodXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG1vblRvVGh1ckNvbC5pbm5lclRleHQgPSAnTW9uZGF5LVRodXJzZGF5JztcbiAgICBjb25zdCBtb25Ub1RodXJIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9uVG9UaHVySG91cnMuaW5uZXJUZXh0ID0gJzEwQU0tNVBNJztcbiAgICBtb25Ub1RodXJSb3cuYXBwZW5kKG1vblRvVGh1ckNvbCwgbW9uVG9UaHVySG91cnMpXG4gICAgLy8ybmQgdGFibGUgcm93XG4gICAgY29uc3QgZnJpVG9TYXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IGZyaVRvU2F0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBmcmlUb1NhdENvbC5pbm5lclRleHQgPSAnRnJpZGF5LVNhdHVyZGF5JztcbiAgICBjb25zdCBmcmlUb1NhdEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBmcmlUb1NhdEhvdXJzLmlubmVyVGV4dCA9ICcxMEFNLThQTSc7XG4gICAgZnJpVG9TYXRSb3cuYXBwZW5kKGZyaVRvU2F0Q29sLCBmcmlUb1NhdEhvdXJzKVxuICAgIC8vM3JkIHRhYmxlIHJvd1xuICAgIGNvbnN0IHN1blJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3Qgc3VuQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBzdW5Db2wuaW5uZXJUZXh0ID0gJ1N1bmRheSc7XG4gICAgY29uc3Qgc3VuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHN1bkhvdXJzLmlubmVyVGV4dCA9ICdDbG9zZWQnO1xuICAgIHN1blJvdy5hcHBlbmQoc3VuQ29sLCBzdW5Ib3VycylcblxuICAgIGhvdXJzVGFibGUuYXBwZW5kKG1vblRvVGh1clJvdywgZnJpVG9TYXRSb3csIHN1blJvdylcblxuICAgIGZ1bmN0aW9uIHJlbmRlcihtYWluKSB7XG4gICAgICAgIGhlcm9BcmVhLmFwcGVuZChtYWluVGV4dCwgY2hlZkltZywgYnV0dG9uT3JkZXIpXG4gICAgICAgIGluZm9BcmVhLmFwcGVuZChpbmZvVGl0bGUsIGhvdXJzVGFibGUpO1xuICAgICAgICBtYWluLmFwcGVuZChoZXJvQXJlYSwgaW5mb0FyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVcbiIsImNvbnN0IG1lbnUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgLy9tYWluIGVsZW1lbnRzXG4gICAgY29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51QXJlYS5pZCA9ICdtZW51LWFyZWEnO1xuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluVGV4dC5pbm5lclRleHQgPSAnTWVudSEnO1xuXG5cbiAgICBmdW5jdGlvbiByZW5kZXIobWFpbikge1xuICAgICAgICBtZW51QXJlYS5hcHBlbmQobWFpblRleHQpO1xuICAgICAgICBtYWluLmFwcGVuZChtZW51QXJlYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgbWVudVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9