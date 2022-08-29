import addFooter from './createFooter';
import home from './home.js';
import menu from './menu.js'
import contact from './contact.js'

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
            
            headerList.append(headerOption);
        });
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


    function render() {
        body.append(contentDiv)
        _createHeader();
        contentDiv.append(header, main);
        addFooter(body, 'restaurant-page');
        home.render(main);
        _allowMainFadeIN();
    }

   
    function updateMain(choice) {
        main.classList.add('fade');//star fadeIn of choice
        _removeAllChildNodes(main);
        switch (choice) {
            case 'Home':
                home.render(main);
                //these have to be inside the switch statement
                //for some reason they dont work otherwise
                // main.classList.add('fade');
                break;
            case 'Menu':
                menu.render(main);
                // main.classList.add('fade');
                break;
            case 'Contact':
                contact.render(main);
                break;
            default:
                break;
        }
    }

    return { render, updateMain }
})();


export default webpage
