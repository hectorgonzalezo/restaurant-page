import pizzaImageUrl from './assets/pizza.jpeg';
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

    return { render }
})();

function renderPage() {
    webpage.render();
}

export default renderPage
