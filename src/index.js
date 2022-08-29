import './style.css';
import webpage from './createWebpage.js'

webpage.render('home');


function addOptionsListeners(){
    const headerOptions = document.querySelectorAll('.header-option');
    headerOptions.forEach((option) => {
        const data = option.getAttribute('data');
        option.addEventListener('click', () => webpage.updateMain(data))
    })
};

addOptionsListeners();
