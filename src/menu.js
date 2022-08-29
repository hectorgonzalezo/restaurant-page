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
    pizzasArea.append(pizzasText);
    
    function _appendPizza(url, text) {
        const img= new Image();
        img.src = url;
        const textDisplay = document.createElement('p');
        textDisplay.innerText = text;
        pizzasArea.append(img, textDisplay)
    }

    _appendPizza(margheritaUrl, 'Mozzarella, tomato and basil');
    _appendPizza(prosciuttoUrl, 'Ham and mushroom');
    _appendPizza(formaggiUrl, 'Provolone, parmigiano, mozarella and goat cheese')
    _appendPizza(veggieUrl, 'Bell peppers, Zucchini and capers'); 

    function render(main) {

        main.append(pizzasArea);
    }

    return { render }
})();


export default menu
