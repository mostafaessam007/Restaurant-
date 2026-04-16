import "./style.css"

import {HomeContent} from "./Home.js"
import {MenuContent} from "./Menu.js"
import {AboutContent} from "./About.js"


// import every page from it's JS file 

//Home.js
//Menu.js
//About.js
const HomeBtn = document.querySelector('#HomeBtn')
const MenuBtn = document.querySelector('#MenuBtn')
const AboutBtn = document.querySelector('#AboutBtn')
const content = document.querySelector('#content');

// add event listenrs to every button in nav to delete the content in  content div
HomeBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(HomeContent)
    
})

MenuBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(MenuContent)
  
})

AboutBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(AboutContent)
  
})