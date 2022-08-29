import margheritaUrl from './assets/margherita.jpeg';
import prosciuttoUrl from './assets/prosciutto.jpeg';
import formaggiUrl from './assets/4formaggi.jpeg';
import veggieUrl from './assets/vegetarian.jpeg'

const menu = (function () {
    //pizza
    const pizzasArea = document.createElement('div');
    pizzasArea.id = 'pizzas-area';
    const pizzasText = document.createElement('h3');
    pizzasText.innerText = 'Our pizzas';

    const margheritaImg = new Image();
    margheritaImg.src = margheritaUrl;
    const margheritaText = document.createElement('p');
    margheritaText.innerText = 'Mozzarella, tomato and basil';

    const prosciuttoImg = new Image();
    prosciuttoImg.src = prosciuttoUrl;
    const prosciuttoText = document.createElement('p');
    prosciuttoText.innerText = 'Ham and mushroom';

    const formaggiImg = new Image();
    formaggiImg.src = formaggiUrl;
    const formaggiText = document.createElement('p');
    formaggiText.innerText = 'Provolone, parmigiano, mozarella and goat cheese';

    const veggieImg = new Image();
    veggieImg.src = veggieUrl;
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


export default menu
