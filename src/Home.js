export const HomeContent= document.createElement('div');
//add resturant's logo at the middile of the home page
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent="Vegas Burger"
HomeContent.appendChild(logo)
// add a button that takes you over to the menu page