<<<<<<< HEAD
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
/* harmony import */ var _assets_phone_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/phone-icon.png */ "./src/assets/phone-icon.png");
/* harmony import */ var _assets_home_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/home-icon.png */ "./src/assets/home-icon.png");
/* harmony import */ var _assets_whatsapp_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/whatsapp-icon.png */ "./src/assets/whatsapp-icon.png");




const contact = (function () {

    //main elements
    const contactArea = document.createElement('div');
    contactArea.id = 'contact-area';
    const mainText = document.createElement('h3');
    mainText.innerText = 'Contact';
    contactArea.append(mainText)

    function _appendContact(url, text) {
        const icon = new Image();
        icon.src = url;
        icon.classList.add('icon')
        const textDisplay = document.createElement('p');
        textDisplay.innerText = text;
        contactArea.append(icon, textDisplay)
    }

    _appendContact(_assets_phone_icon_png__WEBPACK_IMPORTED_MODULE_0__, '967 678 7979');
    _appendContact(_assets_whatsapp_icon_png__WEBPACK_IMPORTED_MODULE_2__, '967 678 0047');
    _appendContact(_assets_home_icon_png__WEBPACK_IMPORTED_MODULE_1__, 'Real de Guadalupe 47, Barrio de Guadalupe,\n San Cristóbal de las Casas, Chis.')


    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7872915239805!2d-92.63620714936891!3d16.737461825571465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453c0a579d39%3A0x892ff9087a922df!2sPizzer%C3%ADa%20El%20Punto!5e0!3m2!1sen!2smx!4v1661805880874!5m2!1sen!2smx";
    map.setAttribute('loading', 'lazy');
    contactArea.append(map);

    function render(main) {
        main.append(contactArea);
    }

    return { render }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

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

=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pizza.jpeg":
/*!************************!*\
  !*** ./src/pizza.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3465420826def7e78e4b.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/createWebpage.js ***!
  \******************************/
>>>>>>> 140e01f (Create basic layout)
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
<<<<<<< HEAD
/* harmony import */ var _createFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFooter */ "./src/createFooter.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _assets_pizza_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pizza-icon.png */ "./src/assets/pizza-icon.png");





=======
/* harmony import */ var _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpeg */ "./src/pizza.jpeg");
>>>>>>> 140e01f (Create basic layout)

const webpage = (function () {
    const body = document.querySelector('body');
    const contentDiv = document.createElement('div');//main container div
<<<<<<< HEAD
    contentDiv.id = 'container';
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.classList.add('fade');

    function _createTabIcon(){//add pizza icon to broswer tab
        const head = document.querySelector('head');
        const icon = document.createElement('link');
        icon.setAttribute('rel', 'icon')
        icon.href = _assets_pizza_icon_png__WEBPACK_IMPORTED_MODULE_4__;
        head.append(icon)
    }


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
        _createTabIcon();
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
    pizzasArea.append(pizzasText);
    
    function _appendPizza(url, text) {
        const img= new Image();
        img.src = url;
        const textDisplay = document.createElement('p');
        textDisplay.innerText = text;
        pizzasArea.append(img, textDisplay)
    }

    _appendPizza(_assets_margherita_jpeg__WEBPACK_IMPORTED_MODULE_0__, 'Mozzarella, tomato and basil');
    _appendPizza(_assets_prosciutto_jpeg__WEBPACK_IMPORTED_MODULE_1__, 'Ham and mushroom');
    _appendPizza(_assets_4formaggi_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'Provolone, parmigiano, mozarella and goat cheese')
    _appendPizza(_assets_vegetarian_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'Bell peppers, Zucchini and capers'); 

    function render(main) {

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

/***/ "./src/assets/home-icon.png":
/*!**********************************!*\
  !*** ./src/assets/home-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e802d0437cab80a410b0.png";

/***/ }),

/***/ "./src/assets/margherita.jpeg":
/*!************************************!*\
  !*** ./src/assets/margherita.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5730088627d7a3c060f.jpeg";

/***/ }),

/***/ "./src/assets/phone-icon.png":
/*!***********************************!*\
  !*** ./src/assets/phone-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8a7feb27ad1c5d0dc75.png";

/***/ }),

/***/ "./src/assets/pizza-icon.png":
/*!***********************************!*\
  !*** ./src/assets/pizza-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec44c6144003fbbfd21f.png";

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

/***/ }),

/***/ "./src/assets/whatsapp-icon.png":
/*!**************************************!*\
  !*** ./src/assets/whatsapp-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8727900a77e0863b3e73.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createWebpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0Y7QUFDUTs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1EQUFZO0FBQy9CLG1CQUFtQixzREFBZTtBQUNsQyxtQkFBbUIsa0RBQVc7OztBQUc5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN4QytCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0EsY0FBYyxvREFBTztBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmM7QUFDVjtBQUNEO0FBQ007QUFDYTs7QUFFL0M7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFTO0FBQzdCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakIsUUFBUSx1REFBVztBQUNuQiw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVc7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQix1REFBVztBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSHFCOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBVTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBR0QsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEa0M7QUFDQTtBQUNIO0FBQ0Y7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsb0RBQWE7QUFDOUIsaUJBQWlCLG9EQUFhO0FBQzlCLGlCQUFpQixtREFBVztBQUM1QixpQkFBaUIsb0RBQVM7O0FBRTFCOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdELGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVXZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwaG9uZUljb25VcmwgZnJvbSAnLi9hc3NldHMvcGhvbmUtaWNvbi5wbmcnO1xuaW1wb3J0IGhvbWVJY29uVXJsIGZyb20gJy4vYXNzZXRzL2hvbWUtaWNvbi5wbmcnO1xuaW1wb3J0IHdoYXRhc3BwSWNvblVybCBmcm9tICcuL2Fzc2V0cy93aGF0c2FwcC1pY29uLnBuZyc7XG5cbmNvbnN0IGNvbnRhY3QgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgLy9tYWluIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFjdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0QXJlYS5pZCA9ICdjb250YWN0LWFyZWEnO1xuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYWluVGV4dC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEFyZWEuYXBwZW5kKG1haW5UZXh0KVxuXG4gICAgZnVuY3Rpb24gX2FwcGVuZENvbnRhY3QodXJsLCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5zcmMgPSB1cmw7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gICAgICAgIGNvbnN0IHRleHREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZXh0RGlzcGxheS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICBjb250YWN0QXJlYS5hcHBlbmQoaWNvbiwgdGV4dERpc3BsYXkpXG4gICAgfVxuXG4gICAgX2FwcGVuZENvbnRhY3QocGhvbmVJY29uVXJsLCAnOTY3IDY3OCA3OTc5Jyk7XG4gICAgX2FwcGVuZENvbnRhY3Qod2hhdGFzcHBJY29uVXJsLCAnOTY3IDY3OCAwMDQ3Jyk7XG4gICAgX2FwcGVuZENvbnRhY3QoaG9tZUljb25VcmwsICdSZWFsIGRlIEd1YWRhbHVwZSA0NywgQmFycmlvIGRlIEd1YWRhbHVwZSxcXG4gU2FuIENyaXN0w7NiYWwgZGUgbGFzIENhc2FzLCBDaGlzLicpXG5cblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG1hcC5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM4MjAuNzg3MjkxNTIzOTgwNSEyZC05Mi42MzYyMDcxNDkzNjg5MSEzZDE2LjczNzQ2MTgyNTU3MTQ2NSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODVlZDQ1M2MwYTU3OWQzOSUzQTB4ODkyZmY5MDg3YTkyMmRmITJzUGl6emVyJUMzJUFEYSUyMEVsJTIwUHVudG8hNWUwITNtMiExc2VuITJzbXghNHYxNjYxODA1ODgwODc0ITVtMiExc2VuITJzbXhcIjtcbiAgICBtYXAuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKTtcbiAgICBjb250YWN0QXJlYS5hcHBlbmQobWFwKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcihtYWluKSB7XG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhY3RBcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0IiwiaW1wb3J0IGxvZ29VcmwgZnJvbSAnLi9hc3NldHMvZ2l0aHViLWxvZ28ucG5nJ1xuZnVuY3Rpb24gYWRkRm9vdGVyKGxvY2F0aW9uLCBwcm9qZWN0TmFtZSkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuXHRjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRteU5hbWUuaW5uZXJUZXh0ID0gJ0jDqWN0b3IgR29uesOhbGV6IE9yb3pjbyc7XG5cblx0Y29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0Z2l0aHViTGluay5ocmVmID0gIGBodHRwczovL2dpdGh1Yi5jb20vaGVjdG9yZ29uemFsZXpvLyR7cHJvamVjdE5hbWV9YDtcblx0Y29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRsb2dvSW1nLnNyYz0gbG9nb1VybDtcbiAgICBsb2dvSW1nLmFsdD0gJ0dpdGh1YiBsb2dvJztcbiAgICBsb2dvSW1nLmlkPSdnaXRodWItbG9nbydcblx0Z2l0aHViTGluay5hcHBlbmQobG9nb0ltZyk7Ly9hZGQgaW1nIGluc2lkZSBsaW5rXG5cblx0Zm9vdGVyLmFwcGVuZChteU5hbWUsIGdpdGh1YkxpbmspO1xuXG5cdC8vYWRkIHRvIGxvY2F0aW9uIGluZGljYXRlZCBieSB3ZWJwYWdlXG5cdGxvY2F0aW9uLmFwcGVuZChmb290ZXIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWRkRm9vdGVyO1xuIiwiaW1wb3J0IGFkZEZvb3RlciBmcm9tICcuL2NyZWF0ZUZvb3Rlcic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuaW1wb3J0IHBpenphSWNvbiBmcm9tICcuL2Fzc2V0cy9waXp6YS1pY29uLnBuZydcblxuY29uc3Qgd2VicGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly9tYWluIGNvbnRhaW5lciBkaXZcbiAgICBjb250ZW50RGl2LmlkID0gJ2NvbnRhaW5lcic7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVUYWJJY29uKCl7Ly9hZGQgcGl6emEgaWNvbiB0byBicm9zd2VyIHRhYlxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKVxuICAgICAgICBpY29uLmhyZWYgPSBwaXp6YUljb247XG4gICAgICAgIGhlYWQuYXBwZW5kKGljb24pXG4gICAgfVxuXG5cbiAgICAvL2hlYWRlciBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVSZXN0YXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmFtZVJlc3RhdXJhbnQuaW5uZXJUZXh0ID0gJ1BpenphIHBsYWNlJ1xuICAgICAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgICAvL3N0b3JlIGVhY2ggb3B0aW9uIGluIG9iamVjdCBhbmQgYXBwZW5kIGl0IHRvIERPTVxuICAgICAgICBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaGVhZGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKTtcbiAgICAgICAgICAgICAvL3RoaXMgYXR0cmlidXRlIGlzIHVzZWQgYnkgdGhlIG9wdGlvbiBldmVudExpc3RlbmVyXG4gICAgICAgICAgICBoZWFkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhJywgb3B0aW9uKTtcbiAgICAgICAgICAgIGhlYWRlck9wdGlvbi5pbm5lclRleHQgPSBvcHRpb247XG5cbiAgICAgICAgICAgIGhlYWRlckxpc3QuYXBwZW5kKGhlYWRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgaGVhZGVyLmFwcGVuZChuYW1lUmVzdGF1cmFudCwgaGVhZGVyTGlzdCk7XG59O1xuXG5cbiAgICBmdW5jdGlvbiBfYWRkT3B0aW9uc0xpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItb3B0aW9uJyk7XG4gICAgICAgIGhlYWRlck9wdGlvbnMuZm9yRWFjaChcbiAgICAgICAgICAgIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB3ZWJwYWdlLnVwZGF0ZU1haW4oZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIF9jbGVhck1haW4oKSB7XG4gICAgICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2FsbG93TWFpbkZhZGVJbigpIHsvL2FsbG93cyBmb3IgcmV0cmlnZ2VyaW5nIG9mIGNzcyBhbmltYXRpb25cbiAgICAgICAgY29uc3QgbWFpbkZhZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFkZScpO1xuICAgICAgICBtYWluRmFkZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy9oaWdobGlnaHRzIHRoZSBjaG9zZW4gb3B0aW9uIG9uIHRoZSB3ZWJwYWdlIGFuZCBkZWFjdGl2YXRlcyBldmVudExpc3RlbmVyXG4gICAgZnVuY3Rpb24gX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItb3B0aW9uJyk7XG4gICAgICAgIGhlYWRlck9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YScpID09IGNob2ljZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBfY3JlYXRlVGFiSWNvbigpO1xuICAgICAgICBib2R5LmFwcGVuZChjb250ZW50RGl2KTtcbiAgICAgICAgX2NyZWF0ZUhlYWRlcigpOyBcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbiAgICAgICAgX2hpZ2hsaWdodE9wdGlvbignSG9tZScpO1xuICAgICAgICBhZGRGb290ZXIoYm9keSwgJ3Jlc3RhdXJhbnQtcGFnZScpO1xuICAgICAgICBob21lLnJlbmRlcihtYWluKTtcbiAgICAgICAgX2FsbG93TWFpbkZhZGVJbigpOyBgYFxuICAgICAgICBfYWRkT3B0aW9uc0xpc3RlbmVycygpO1xuICAgIH07XG5cbiAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1haW4oY2hvaWNlKSB7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZScpOy8vc3RhciBmYWRlSW4gb2YgY2hvaWNlXG4gICAgICAgIF9jbGVhck1haW4oKTtcbiAgICAgICAgX2hpZ2hsaWdodE9wdGlvbihjaG9pY2UpOy8vaGlnaGxpZ2h0cyBjaG9pY2Ugb24gaGVhZGVyXG4gICAgICAgIHN3aXRjaCAoY2hvaWNlKSB7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBob21lLnJlbmRlcihtYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgIG1lbnUucmVuZGVyKG1haW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdC5yZW5kZXIobWFpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IHJlbmRlciwgdXBkYXRlTWFpbiB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhZ2VcbiIsImltcG9ydCBjaGVmSW1nVXJsIGZyb20gJy4vYXNzZXRzL2NoZWYuanBlZydcblxuY29uc3QgaG9tZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAvL21haW4gZWxlbWVudHNcbiAgICBjb25zdCBoZXJvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVyb0FyZWEuaWQgPSAnaGVyby1hcmVhJ1xuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYWluVGV4dC5pbm5lclRleHQgPSAnVGhlIGJlc3QgSXRhbGlhbiBzdHlsZSBwaXp6YScgKyBcbiAgICAnIGluIFNhbiBDcmlzdG9iYWwgZGUgTGFzIENhc2FzLCBDaGlhcGFzLCBNZXhpY28uJ1xuICAgIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVmSW1nLnNyYyA9IGNoZWZJbWdVcmxcbiAgICBjb25zdCBidXR0b25PcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbk9yZGVyLmlubmVyVGV4dCA9ICdPcmRlciBvbmxpbmUnO1xuXG4gICAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQXJlYS5pZCA9ICdpbmZvLWFyZWEnXG5cbiAgICAvL2luZm9BcmVhIGVsZW1lbnRzXG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbmZvVGl0bGUuaW5uZXJUZXh0ID0gJ0hvdXJzJztcblxuICAgIC8vdGFibGUgd2l0aCBob3Vyc1xuICAgIGNvbnN0IGhvdXJzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIC8vMXN0IHRhYmxlIHJvd1xuICAgIGNvbnN0IG1vblRvVGh1clJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgbW9uVG9UaHVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb25Ub1RodXJDb2wuaW5uZXJUZXh0ID0gJ01vbmRheS1UaHVyc2RheSc7XG4gICAgY29uc3QgbW9uVG9UaHVySG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG1vblRvVGh1ckhvdXJzLmlubmVyVGV4dCA9ICcxMEFNLTVQTSc7XG4gICAgbW9uVG9UaHVyUm93LmFwcGVuZChtb25Ub1RodXJDb2wsIG1vblRvVGh1ckhvdXJzKVxuICAgIC8vMm5kIHRhYmxlIHJvd1xuICAgIGNvbnN0IGZyaVRvU2F0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBmcmlUb1NhdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRDb2wuaW5uZXJUZXh0ID0gJ0ZyaWRheS1TYXR1cmRheSc7XG4gICAgY29uc3QgZnJpVG9TYXRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZnJpVG9TYXRIb3Vycy5pbm5lclRleHQgPSAnMTBBTS04UE0nO1xuICAgIGZyaVRvU2F0Um93LmFwcGVuZChmcmlUb1NhdENvbCwgZnJpVG9TYXRIb3VycylcbiAgICAvLzNyZCB0YWJsZSByb3dcbiAgICBjb25zdCBzdW5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHN1bkNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgc3VuQ29sLmlubmVyVGV4dCA9ICdTdW5kYXknO1xuICAgIGNvbnN0IHN1bkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBzdW5Ib3Vycy5pbm5lclRleHQgPSAnQ2xvc2VkJztcbiAgICBzdW5Sb3cuYXBwZW5kKHN1bkNvbCwgc3VuSG91cnMpXG5cbiAgICBob3Vyc1RhYmxlLmFwcGVuZChtb25Ub1RodXJSb3csIGZyaVRvU2F0Um93LCBzdW5Sb3cpXG5cbiAgICBmdW5jdGlvbiByZW5kZXIobWFpbikge1xuICAgICAgICBoZXJvQXJlYS5hcHBlbmQobWFpblRleHQsIGNoZWZJbWcsIGJ1dHRvbk9yZGVyKVxuICAgICAgICBpbmZvQXJlYS5hcHBlbmQoaW5mb1RpdGxlLCBob3Vyc1RhYmxlKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoaGVyb0FyZWEsIGluZm9BcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBob21lXG4iLCJpbXBvcnQgbWFyZ2hlcml0YVVybCBmcm9tICcuL2Fzc2V0cy9tYXJnaGVyaXRhLmpwZWcnO1xuaW1wb3J0IHByb3NjaXV0dG9VcmwgZnJvbSAnLi9hc3NldHMvcHJvc2NpdXR0by5qcGVnJztcbmltcG9ydCBmb3JtYWdnaVVybCBmcm9tICcuL2Fzc2V0cy80Zm9ybWFnZ2kuanBlZyc7XG5pbXBvcnQgdmVnZ2llVXJsIGZyb20gJy4vYXNzZXRzL3ZlZ2V0YXJpYW4uanBlZydcblxuY29uc3QgbWVudSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy9waXp6YVxuICAgIGNvbnN0IHBpenphc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YXNBcmVhLmlkID0gJ3Bpenphcy1hcmVhJztcbiAgICBjb25zdCBwaXp6YXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwaXp6YXNUZXh0LmlubmVyVGV4dCA9ICdPdXIgcGl6emFzJztcbiAgICBwaXp6YXNBcmVhLmFwcGVuZChwaXp6YXNUZXh0KTtcbiAgICBcbiAgICBmdW5jdGlvbiBfYXBwZW5kUGl6emEodXJsLCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGltZz0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIGNvbnN0IHRleHREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZXh0RGlzcGxheS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICBwaXp6YXNBcmVhLmFwcGVuZChpbWcsIHRleHREaXNwbGF5KVxuICAgIH1cblxuICAgIF9hcHBlbmRQaXp6YShtYXJnaGVyaXRhVXJsLCAnTW96emFyZWxsYSwgdG9tYXRvIGFuZCBiYXNpbCcpO1xuICAgIF9hcHBlbmRQaXp6YShwcm9zY2l1dHRvVXJsLCAnSGFtIGFuZCBtdXNocm9vbScpO1xuICAgIF9hcHBlbmRQaXp6YShmb3JtYWdnaVVybCwgJ1Byb3ZvbG9uZSwgcGFybWlnaWFubywgbW96YXJlbGxhIGFuZCBnb2F0IGNoZWVzZScpXG4gICAgX2FwcGVuZFBpenphKHZlZ2dpZVVybCwgJ0JlbGwgcGVwcGVycywgWnVjY2hpbmkgYW5kIGNhcGVycycpOyBcblxuICAgIGZ1bmN0aW9uIHJlbmRlcihtYWluKSB7XG5cbiAgICAgICAgbWFpbi5hcHBlbmQocGl6emFzQXJlYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgbWVudVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
=======
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    

    //header elements
    const nameRestaurant = document.createElement('h1');
    const headerList = document.createElement('ul');
    //create header menu options object
    const headerOptions = {};
    //store each option in object and append it to DOM
    ['Home', 'Menu', 'Contact'].forEach((option) => {
        headerOptions[option] = document.createElement('li');
        headerList.append(option);
    });

    //main elements
    const mainText = document.createElement('h2');
    const pizzaImg = document.createElement('img');
    pizzaImg.src = _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    const buttonOrder = document.createElement('button');
    const infoArea = document.createElement('div');
    infoArea.classList.add('info-area');

    //infoArea elements
    const infoHours = document.createElement('div');
    infoHours.classList.add('hours');
    infoHours.innerText = '10-2';

    const infoLocation = document.createElement('div');
    infoLocation.classList.add('location');
    infoLocation.innerText = 'SanCris';

    const infoPhone = document.createElement('div');
    infoPhone.classList.add('phone');
    infoPhone.innerText = '332943asdfas5';

    

    function render() {
        body.append(contentDiv)
        contentDiv.append(header, main, footer);
        header.append(nameRestaurant, headerList);
        infoArea.append(infoHours, infoLocation, infoPhone)
        main.append(mainText, pizzaImg, buttonOrder, infoArea)
    }

    return {render}
})();

function renderPage() {
    webpage.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2VicGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QztBQUN6QztBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFhO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVXZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwaXp6YUltYWdlVXJsIGZyb20gJy4vcGl6emEuanBlZyc7XG5jb25zdCB3ZWJwYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvL21haW4gY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG5cbiAgICAvL2hlYWRlciBlbGVtZW50c1xuICAgIGNvbnN0IG5hbWVSZXN0YXVyYW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAvL2NyZWF0ZSBoZWFkZXIgbWVudSBvcHRpb25zIG9iamVjdFxuICAgIGNvbnN0IGhlYWRlck9wdGlvbnMgPSB7fTtcbiAgICAvL3N0b3JlIGVhY2ggb3B0aW9uIGluIG9iamVjdCBhbmQgYXBwZW5kIGl0IHRvIERPTVxuICAgIFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgaGVhZGVyT3B0aW9uc1tvcHRpb25dID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaGVhZGVyTGlzdC5hcHBlbmQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBpenphSW1nLnNyYyA9IHBpenphSW1hZ2VVcmw7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpbmZvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9BcmVhLmNsYXNzTGlzdC5hZGQoJ2luZm8tYXJlYScpO1xuXG4gICAgLy9pbmZvQXJlYSBlbGVtZW50c1xuICAgIGNvbnN0IGluZm9Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Ib3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIGluZm9Ib3Vycy5pbm5lclRleHQgPSAnMTAtMic7XG5cbiAgICBjb25zdCBpbmZvTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvTG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBpbmZvTG9jYXRpb24uaW5uZXJUZXh0ID0gJ1NhbkNyaXMnO1xuXG4gICAgY29uc3QgaW5mb1Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1Bob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgaW5mb1Bob25lLmlubmVyVGV4dCA9ICczMzI5NDNhc2RmYXM1JztcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBib2R5LmFwcGVuZChjb250ZW50RGl2KVxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmQobmFtZVJlc3RhdXJhbnQsIGhlYWRlckxpc3QpO1xuICAgICAgICBpbmZvQXJlYS5hcHBlbmQoaW5mb0hvdXJzLCBpbmZvTG9jYXRpb24sIGluZm9QaG9uZSlcbiAgICAgICAgbWFpbi5hcHBlbmQobWFpblRleHQsIHBpenphSW1nLCBidXR0b25PcmRlciwgaW5mb0FyZWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW5kZXJ9XG59KSgpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgIHdlYnBhZ2UucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhZ2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> 140e01f (Create basic layout)
