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


    function _addOptionsListeners() {
        const headerOptions = document.querySelectorAll('.header-option');
        headerOptions.forEach(
            (option) => {
                const data = option.getAttribute('data');
        option.addEventListener('click', () => webpage.updateMain(data));
            }
        );
    };


    function _clearMain() {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        };
    };

    function _allowMainFadeIn() {//allows for retriggering of css animation
        const mainFade = document.querySelector('.fade');
        mainFade.addEventListener('animationend', () => {
            main.classList.remove('fade');
        })
    };

    //highlights the chosen option on the webpage and deactivates eventListener
    function _highlightOption(choice) {
        const headerOptions = document.querySelectorAll('.header-option');
        headerOptions.forEach((option) => {
            if (option.getAttribute('data') == choice) {
                option.classList.add('highlighted')
            } else{
                option.classList.remove('highlighted')
            }
        });
    };


    function render() {
        body.append(contentDiv);
        _createHeader(); 
        contentDiv.append(header, main);
        _highlightOption('Home');
        (0,_createFooter__WEBPACK_IMPORTED_MODULE_0__["default"])(body, 'restaurant-page');
        _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(main);
        _allowMainFadeIn(); ``
        _addOptionsListeners();
    };

   
    function updateMain(choice) {
        main.classList.add('fade');//star fadeIn of choice
        _clearMain();
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
    };

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
    const infoTitle = document.createElement('h3');
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
/* harmony import */ var _assets_margherita_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/margherita.jpeg */ "./src/assets/margherita.jpeg");
/* harmony import */ var _assets_prosciutto_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/prosciutto.jpeg */ "./src/assets/prosciutto.jpeg");
/* harmony import */ var _assets_4formaggi_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/4formaggi.jpeg */ "./src/assets/4formaggi.jpeg");
/* harmony import */ var _assets_vegetarian_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/vegetarian.jpeg */ "./src/assets/vegetarian.jpeg");





const menu = (function () {
    //pizza
    const pizzasArea = document.createElement('div');
    pizzasArea.id = 'pizzas-area';
    const pizzasText = document.createElement('h3');
    pizzasText.innerText = 'Our pizzas';

    const margheritaImg = new Image();
    margheritaImg.src = _assets_margherita_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    const margheritaText = document.createElement('p');
    margheritaText.innerText = 'Mozzarella, tomato and basil';

    const prosciuttoImg = new Image();
    prosciuttoImg.src = _assets_prosciutto_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    const prosciuttoText = document.createElement('p');
    prosciuttoText.innerText = 'Ham and mushroom';

    const formaggiImg = new Image();
    formaggiImg.src = _assets_4formaggi_jpeg__WEBPACK_IMPORTED_MODULE_2__;
    const formaggiText = document.createElement('p');
    formaggiText.innerText = 'Provolone, parmigiano, mozarella and goat cheese';

    const veggieImg = new Image();
    veggieImg.src = _assets_vegetarian_jpeg__WEBPACK_IMPORTED_MODULE_3__;
    const veggieText = document.createElement('p');
    veggieText.innerText = 'Bell peppers, zuchini and capers';



    function render(main) {
        pizzasArea.append(pizzasText, 
            margheritaImg, margheritaText,
            prosciuttoImg, prosciuttoText,
            formaggiImg, formaggiText,
            veggieImg, veggieText);
        main.append(pizzasArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/assets/4formaggi.jpeg":
/*!***********************************!*\
  !*** ./src/assets/4formaggi.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bee4e4e2e81a4172f93e.jpeg";

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

/***/ }),

/***/ "./src/assets/margherita.jpeg":
/*!************************************!*\
  !*** ./src/assets/margherita.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5730088627d7a3c060f.jpeg";

/***/ }),

/***/ "./src/assets/prosciutto.jpeg":
/*!************************************!*\
  !*** ./src/assets/prosciutto.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5754edcfe42e16fa5c2.jpeg";

/***/ }),

/***/ "./src/assets/vegetarian.jpeg":
/*!************************************!*\
  !*** ./src/assets/vegetarian.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b62bdb194ac968daf0d1.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createWebpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNsQitCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0EsY0FBYyxvREFBTztBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCYztBQUNWO0FBQ0Q7QUFDTTs7QUFFbEM7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakIsUUFBUSx1REFBVztBQUNuQiw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVc7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQix1REFBVztBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR3FCOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBVTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBR0QsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEa0M7QUFDQTtBQUNIO0FBQ0Y7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvREFBYTtBQUNyQztBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9EQUFhO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbURBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvREFBUztBQUM3QjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBR0QsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZVdlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvL21haW4gZWxlbWVudHNcbiAgICBjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVBcmVhLmlkID0gJ21lbnUtYXJlYSc7XG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1haW5UZXh0LmlubmVyVGV4dCA9ICdDb250YWN0ISc7XG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlcihtYWluKSB7XG4gICAgICAgIG1lbnVBcmVhLmFwcGVuZChtYWluVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kKG1lbnVBcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZW51IiwiaW1wb3J0IGxvZ29VcmwgZnJvbSAnLi9hc3NldHMvZ2l0aHViLWxvZ28ucG5nJ1xuZnVuY3Rpb24gYWRkRm9vdGVyKGxvY2F0aW9uLCBwcm9qZWN0TmFtZSkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuXHRjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRteU5hbWUuaW5uZXJUZXh0ID0gJ0jDqWN0b3IgR29uesOhbGV6IE9yb3pjbyc7XG5cblx0Y29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0Z2l0aHViTGluay5ocmVmID0gIGBodHRwczovL2dpdGh1Yi5jb20vaGVjdG9yZ29uemFsZXpvLyR7cHJvamVjdE5hbWV9YDtcblx0Y29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRsb2dvSW1nLnNyYz0gbG9nb1VybDtcbiAgICBsb2dvSW1nLmFsdD0gJ0dpdGh1YiBsb2dvJztcbiAgICBsb2dvSW1nLmlkPSdnaXRodWItbG9nbydcblx0Z2l0aHViTGluay5hcHBlbmQobG9nb0ltZyk7Ly9hZGQgaW1nIGluc2lkZSBsaW5rXG5cblx0Zm9vdGVyLmFwcGVuZChteU5hbWUsIGdpdGh1YkxpbmspO1xuXG5cdC8vYWRkIHRvIGxvY2F0aW9uIGluZGljYXRlZCBieSB3ZWJwYWdlXG5cdGxvY2F0aW9uLmFwcGVuZChmb290ZXIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWRkRm9vdGVyO1xuIiwiaW1wb3J0IGFkZEZvb3RlciBmcm9tICcuL2NyZWF0ZUZvb3Rlcic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5jb25zdCB3ZWJwYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvL21haW4gY29udGFpbmVyIGRpdlxuICAgIGNvbnRlbnREaXYuaWQgPSAnY29udGFpbmVyJztcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuXG5cbiAgICAvL2hlYWRlciBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVSZXN0YXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZVJlc3RhdXJhbnQuaW5uZXJUZXh0ID0gJ1BpenphIHBsYWNlJ1xuICAgICAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgICAvL3N0b3JlIGVhY2ggb3B0aW9uIGluIG9iamVjdCBhbmQgYXBwZW5kIGl0IHRvIERPTVxuICAgICAgICBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaGVhZGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKTtcbiAgICAgICAgICAgICAvL3RoaXMgYXR0cmlidXRlIGlzIHVzZWQgYnkgdGhlIG9wdGlvbiBldmVudExpc3RlbmVyXG4gICAgICAgICAgICBoZWFkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhJywgb3B0aW9uKTtcbiAgICAgICAgICAgIGhlYWRlck9wdGlvbi5pbm5lclRleHQgPSBvcHRpb247XG5cbiAgICAgICAgICAgIGhlYWRlckxpc3QuYXBwZW5kKGhlYWRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgaGVhZGVyLmFwcGVuZChuYW1lUmVzdGF1cmFudCwgaGVhZGVyTGlzdCk7XG59O1xuXG5cbiAgICBmdW5jdGlvbiBfYWRkT3B0aW9uc0xpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItb3B0aW9uJyk7XG4gICAgICAgIGhlYWRlck9wdGlvbnMuZm9yRWFjaChcbiAgICAgICAgICAgIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB3ZWJwYWdlLnVwZGF0ZU1haW4oZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIF9jbGVhck1haW4oKSB7XG4gICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2FsbG93TWFpbkZhZGVJbigpIHsvL2FsbG93cyBmb3IgcmV0cmlnZ2VyaW5nIG9mIGNzcyBhbmltYXRpb25cbiAgICAgICAgY29uc3QgbWFpbkZhZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFkZScpO1xuICAgICAgICBtYWluRmFkZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy9oaWdobGlnaHRzIHRoZSBjaG9zZW4gb3B0aW9uIG9uIHRoZSB3ZWJwYWdlIGFuZCBkZWFjdGl2YXRlcyBldmVudExpc3RlbmVyXG4gICAgZnVuY3Rpb24gX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItb3B0aW9uJyk7XG4gICAgICAgIGhlYWRlck9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YScpID09IGNob2ljZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBib2R5LmFwcGVuZChjb250ZW50RGl2KTtcbiAgICAgICAgX2NyZWF0ZUhlYWRlcigpOyBcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbiAgICAgICAgX2hpZ2hsaWdodE9wdGlvbignSG9tZScpO1xuICAgICAgICBhZGRGb290ZXIoYm9keSwgJ3Jlc3RhdXJhbnQtcGFnZScpO1xuICAgICAgICBob21lLnJlbmRlcihtYWluKTtcbiAgICAgICAgX2FsbG93TWFpbkZhZGVJbigpOyBgYFxuICAgICAgICBfYWRkT3B0aW9uc0xpc3RlbmVycygpO1xuICAgIH07XG5cbiAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1haW4oY2hvaWNlKSB7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZScpOy8vc3RhciBmYWRlSW4gb2YgY2hvaWNlXG4gICAgICAgIF9jbGVhck1haW4oKTtcbiAgICAgICAgX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpOy8vaGlnaGxpZ2h0cyBjaG9pY2Ugb24gaGVhZGVyXG4gICAgICAgIHN3aXRjaCAoY2hvaWNlKSB7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBob21lLnJlbmRlcihtYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIG1lbnUucmVuZGVyKG1haW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdC5yZW5kZXIobWFpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IHJlbmRlciwgdXBkYXRlTWFpbiB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhZ2VcbiIsImltcG9ydCBjaGVmSW1nVXJsIGZyb20gJy4vYXNzZXRzL2NoZWYuanBlZydcblxuY29uc3QgaG9tZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvL21haW4gZWxlbWVudHNcbiAgICBjb25zdCBoZXJvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVyb0FyZWEuaWQgPSAnaGVyby1hcmVhJ1xuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluVGV4dC5pbm5lclRleHQgPSAnVGhlIGJlc3QgSXRhbGlhbiBzdHlsZSBwaXp6YScgKyBcbiAgICAnIGluIFNhbiBDcmlzdG9iYWwgZGUgTGFzIENhc2FzLCBDaGlhcGFzLCBNZXhpY28uJ1xuICAgIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVmSW1nLnNyYyA9IGNoZWZJbWdVcmxcbiAgICBjb25zdCBidXR0b25PcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbk9yZGVyLmlubmVyVGV4dCA9ICdPcmRlciBvbmxpbmUnO1xuXG4gICAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQXJlYS5pZCA9ICdpbmZvLWFyZWEnXG5cbiAgICAvL2luZm9BcmVhIGVsZW1lbnRzXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJUZXh0ID0gJ0hvdXJzJztcblxuICAgIC8vdGFibGUgd2l0aCBob3Vyc1xuICAgIGNvbnN0IGhvdXJzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIC8vMXN0IHRhYmxlIHJvd1xuICAgIGNvbnN0IG1vblRvVGh1clJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgbW9uVG9UaHVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJDb2wuaW5uZXJUZXh0ID0gJ01vbmRheS1UaHVyc2RheSc7XG4gICAgY29uc3QgbW9uVG9UaHVySG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG1vblRvVGh1ckhvdXJzLmlubmVyVGV4dCA9ICcxMEFNLTVQTSc7XG4gICAgbW9uVG9UaHVyUm93LmFwcGVuZChtb25Ub1RodXJDb2wsIG1vblRvVGh1ckhvdXJzKVxuICAgIC8vMm5kIHRhYmxlIHJvd1xuICAgIGNvbnN0IGZyaVRvU2F0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBmcmlUb1NhdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRDb2wuaW5uZXJUZXh0ID0gJ0ZyaWRheS1TYXR1cmRheSc7XG4gICAgY29uc3QgZnJpVG9TYXRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRIb3Vycy5pbm5lclRleHQgPSAnMTBBTS04UE0nO1xuICAgIGZyaVRvU2F0Um93LmFwcGVuZChmcmlUb1NhdENvbCwgZnJpVG9TYXRIb3VycylcbiAgICAvLzNyZCB0YWJsZSByb3dcbiAgICBjb25zdCBzdW5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHN1bkNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuQ29sLmlubmVyVGV4dCA9ICdTdW5kYXknO1xuICAgIGNvbnN0IHN1bkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBzdW5Ib3Vycy5pbm5lclRleHQgPSAnQ2xvc2VkJztcbiAgICBzdW5Sb3cuYXBwZW5kKHN1bkNvbCwgc3VuSG91cnMpXG5cbiAgICBob3Vyc1RhYmxlLmFwcGVuZChtb25Ub1RodXJSb3csIGZyaVRvU2F0Um93LCBzdW5Sb3cpXG5cbiAgICBmdW5jdGlvbiByZW5kZXIobWFpbikge1xuICAgICAgICBoZXJvQXJlYS5hcHBlbmQobWFpblRleHQsIGNoZWZJbWcsIGJ1dHRvbk9yZGVyKVxuICAgICAgICBpbmZvQXJlYS5hcHBlbmQoaW5mb1RpdGxlLCBob3Vyc1RhYmxlKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoaGVyb0FyZWEsIGluZm9BcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBob21lXG4iLCJpbXBvcnQgbWFyZ2hlcml0YVVybCBmcm9tICcuL2Fzc2V0cy9tYXJnaGVyaXRhLmpwZWcnO1xuaW1wb3J0IHByb3NjaXV0dG9VcmwgZnJvbSAnLi9hc3NldHMvcHJvc2NpdXR0by5qcGVnJztcbmltcG9ydCBmb3JtYWdnaVVybCBmcm9tICcuL2Fzc2V0cy80Zm9ybWFnZ2kuanBlZyc7XG5pbXBvcnQgdmVnZ2llVXJsIGZyb20gJy4vYXNzZXRzL3ZlZ2V0YXJpYW4uanBlZydcblxuY29uc3QgbWVudSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy9waXp6YVxuICAgIGNvbnN0IHBpenphc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YXNBcmVhLmlkID0gJ3Bpenphcy1hcmVhJztcbiAgICBjb25zdCBwaXp6YXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwaXp6YXNUZXh0LmlubmVyVGV4dCA9ICdPdXIgcGl6emFzJztcblxuICAgIGNvbnN0IG1hcmdoZXJpdGFJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXJnaGVyaXRhSW1nLnNyYyA9IG1hcmdoZXJpdGFVcmw7XG4gICAgY29uc3QgbWFyZ2hlcml0YVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFyZ2hlcml0YVRleHQuaW5uZXJUZXh0ID0gJ01venphcmVsbGEsIHRvbWF0byBhbmQgYmFzaWwnO1xuXG4gICAgY29uc3QgcHJvc2NpdXR0b0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHByb3NjaXV0dG9JbWcuc3JjID0gcHJvc2NpdXR0b1VybDtcbiAgICBjb25zdCBwcm9zY2l1dHRvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9zY2l1dHRvVGV4dC5pbm5lclRleHQgPSAnSGFtIGFuZCBtdXNocm9vbSc7XG5cbiAgICBjb25zdCBmb3JtYWdnaUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvcm1hZ2dpSW1nLnNyYyA9IGZvcm1hZ2dpVXJsO1xuICAgIGNvbnN0IGZvcm1hZ2dpVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb3JtYWdnaVRleHQuaW5uZXJUZXh0ID0gJ1Byb3ZvbG9uZSwgcGFybWlnaWFubywgbW96YXJlbGxhIGFuZCBnb2F0IGNoZWVzZSc7XG5cbiAgICBjb25zdCB2ZWdnaWVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2ZWdnaWVJbWcuc3JjID0gdmVnZ2llVXJsO1xuICAgIGNvbnN0IHZlZ2dpZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmVnZ2llVGV4dC5pbm5lclRleHQgPSAnQmVsbCBwZXBwZXJzLCB6dWNoaW5pIGFuZCBjYXBlcnMnO1xuXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlcihtYWluKSB7XG4gICAgICAgIHBpenphc0FyZWEuYXBwZW5kKHBpenphc1RleHQsIFxuICAgICAgICAgICAgbWFyZ2hlcml0YUltZywgbWFyZ2hlcml0YVRleHQsXG4gICAgICAgICAgICBwcm9zY2l1dHRvSW1nLCBwcm9zY2l1dHRvVGV4dCxcbiAgICAgICAgICAgIGZvcm1hZ2dpSW1nLCBmb3JtYWdnaVRleHQsXG4gICAgICAgICAgICB2ZWdnaWVJbWcsIHZlZ2dpZVRleHQpO1xuICAgICAgICBtYWluLmFwcGVuZChwaXp6YXNBcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZW51XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=