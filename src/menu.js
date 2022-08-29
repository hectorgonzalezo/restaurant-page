const menu = (function () {

    //main elements
    const menuArea = document.createElement('div');
    menuArea.id = 'menu-area';
    const mainText = document.createElement('h2');
    mainText.innerText = 'Menu!';


    function render(main) {
        menuArea.append(mainText);
        main.append(menuArea);
    }

    return { render }
})();


export default menu
