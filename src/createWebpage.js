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
    const infoHours = document.createElement('div');
    infoHours.classList.add('hours');
    infoHours.innerText = '10-2';

    const infoLocation = document.createElement('div');
    infoLocation.classList.add('location');
    infoLocation.innerText = 'San Cristobal de las Casas, Chiapas, Mexico.';

    const infoPhone = document.createElement('div');
    infoPhone.classList.add('phone');
    infoPhone.innerText = '967 631 7595';

    

    function render() {
        body.append(contentDiv)
        contentDiv.append(header, main);
        addFooter(body, 'restaurant-page');
        header.append(nameRestaurant, headerList);
        heroArea.append(mainText, pizzaImg, buttonOrder);
        infoArea.append(infoHours, infoLocation, infoPhone);
        main.append(heroArea, infoArea);
        
    }

    return {render}
})();

function renderPage() {
    webpage.render();
}

export default renderPage
