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
        }
    }

    function render() {
        body.append(contentDiv)
        const headerOptions =_createHeader();
        contentDiv.append(header, main);
        addFooter(body, 'restaurant-page');
        home.render(main);
    }

    function updateMain(choice) {
        _removeAllChildNodes(main);
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
                console.log(typeof(choice));
                break;
        }
    }

    return { render, updateMain }
})();


export default webpage
