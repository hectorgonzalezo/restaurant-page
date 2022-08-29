import phoneIconUrl from './assets/phone-icon.png';
import homeIconUrl from './assets/home-icon.png';
import whatasppIconUrl from './assets/whatsapp-icon.png';

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

    _appendContact(phoneIconUrl, '967 678 7979');
    _appendContact(whatasppIconUrl, '967 678 0047');
    _appendContact(homeIconUrl, 'Real de Guadalupe 47, Barrio de Guadalupe,\n San Cristóbal de las Casas, Chis.')


    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7872915239805!2d-92.63620714936891!3d16.737461825571465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453c0a579d39%3A0x892ff9087a922df!2sPizzer%C3%ADa%20El%20Punto!5e0!3m2!1sen!2smx!4v1661805880874!5m2!1sen!2smx";
    map.setAttribute('loading', 'lazy');
    contactArea.append(map);

    function render(main) {
        main.append(contactArea);
    }

    return { render }
})();


export default contact