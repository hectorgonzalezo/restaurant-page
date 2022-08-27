const webpage = (function () {
    const contentDiv = document.querySelector('#content');
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
    pizzaImg.src = './pizza.jpeg';
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
    infoPhone.innerText = '3329430365';

    

    function render() {
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

export default renderPage
