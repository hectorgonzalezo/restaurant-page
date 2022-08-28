<<<<<<< HEAD
import addFooter from './createFooter';
import home from './home.js';
import menu from './menu.js'
import contact from './contact.js'
import pizzaIcon from './assets/pizza-icon.png'

const webpage = (function () {
    const body = document.querySelector('body');
    const contentDiv = document.createElement('div');//main container div
    contentDiv.id = 'container';
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.classList.add('fade');

    function _createTabIcon(){//add pizza icon to broswer tab
        const head = document.querySelector('head');
        const icon = document.createElement('link');
        icon.setAttribute('rel', 'icon')
        icon.href = pizzaIcon;
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
        addFooter(body, 'restaurant-page');
        home.render(main);
        _allowMainFadeIn(); ``
        _addOptionsListeners();
    };

   
    function updateMain(choice) {
        main.classList.add('fade');//star fadeIn of choice
        _clearMain();
        _highlightOption(choice);//highlights choice on header
        switch (choice) {
            case 'Home':
                home.render(main);
                break;
            case 'Menu':
                menu.render(main);
                break;
            case 'Contact':
                contact.render(main);
                break;
            default:
                break;
        }
    };
=======
import pizzaImageUrl from './pizza.jpeg';
import addFooter from './createFooter'
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
    pizzaImg.src = pizzaImageUrl;
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
        addFooter(body, 'restaurant-page');
        heroArea.append(mainText, pizzaImg, buttonOrder)
        header.append(nameRestaurant, headerList);
        infoArea.append(infoTitle, hoursTable);
        main.append(heroArea, infoArea);

    }
>>>>>>> 140e01f (Create basic layout)

<<<<<<< HEAD
    return { render, updateMain }
=======
    return { render }
>>>>>>> 08a320d (Add hours table)
})();


export default webpage
