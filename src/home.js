import chefImgUrl from './assets/chef.jpeg'

const home = (function () {

    //main elements
    const heroArea = document.createElement('div')
    heroArea.id = 'hero-area'
    const mainText = document.createElement('h2');
    mainText.innerText = 'The best Italian style pizza' + 
    ' in San Cristobal de Las Casas, Chiapas, Mexico.'
    const chefImg = document.createElement('img');
    chefImg.src = chefImgUrl
    const buttonOrder = document.createElement('button');
    buttonOrder.innerText = 'Order online';

    const infoArea = document.createElement('div');
    infoArea.id = 'info-area'

    //infoArea elements
    const infoTitle = document.createElement('h2');
    infoTitle.innerText = 'Hours';

    //table with hours
    const hoursTable = document.createElement('table');
    //1st table row
    const monToThurRow = document.createElement('tr');
    const monToThurCol = document.createElement('td');
    monToThurCol.innerText = 'Monday-Thursday';
    const monToThurHours = document.createElement('td');
    monToThurHours.innerText = '10AM-5PM';
    monToThurRow.append(monToThurCol, monToThurHours)
    //2nd table row
    const friToSatRow = document.createElement('tr');
    const friToSatCol = document.createElement('td');
    friToSatCol.innerText = 'Friday-Saturday';
    const friToSatHours = document.createElement('td');
    friToSatHours.innerText = '10AM-8PM';
    friToSatRow.append(friToSatCol, friToSatHours)
    //3rd table row
    const sunRow = document.createElement('tr');
    const sunCol = document.createElement('td');
    sunCol.innerText = 'Sunday';
    const sunHours = document.createElement('td');
    sunHours.innerText = 'Closed';
    sunRow.append(sunCol, sunHours)

    hoursTable.append(monToThurRow, friToSatRow, sunRow)

    function render(main) {
        heroArea.append(mainText, chefImg, buttonOrder)
        infoArea.append(infoTitle, hoursTable);
        main.append(heroArea, infoArea);
    }

    return { render }
})();


export default home
