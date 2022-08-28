import logoUrl from './github-logo.png'
function addFooter(location, projectName) {
	const footer = document.createElement('footer');

	const myName = document.createElement('h2');
	myName.innerText = 'Héctor González Orozco';

	const githubLink = document.createElement('a');
	githubLink.href =  `https://github.com/hectorgonzalezo/${projectName}`;
	const logoImg = document.createElement('img');
	logoImg.src= logoUrl;
    logoImg.alt= 'Github logo';
    logoImg.id='github-logo'
	githubLink.append(logoImg);//add img inside link

	footer.append(myName, githubLink);

	//add to location indicated by webpage
	location.append(footer)
}


export default addFooter;
