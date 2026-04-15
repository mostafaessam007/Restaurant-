import "./style.css"

// add event listenrs to every button in nav to delete the content in  content div
// add a function that clears the content div once the event listener is clicked
// import every page from it's JS file 

//Home.js
//Menu.js
//About.js

const content = document.querySelector('#content');
const footer = document.createElement('footer');
footer.textContent ="Made with ♥ by Mostafa"
content.appendChild(footer)

