import "./style.css"

import {homeContentFun} from "./Home.js"
import {menuContentFun} from "./Menu.js"
import {aboutContentFun} from "./About.js"


// import every page from it's JS file 

//Home.js
//Menu.js
//About.js
const HomeBtn = document.querySelector('#HomeBtn')
const MenuBtn = document.querySelector('#MenuBtn')
const AboutBtn = document.querySelector('#AboutBtn')
const content = document.querySelector('#content');

content.appendChild(homeContentFun())


// add event listenrs to every button in nav to delete the content in  content div
HomeBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(homeContentFun())
    
})

MenuBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(menuContentFun())
  
})

AboutBtn.addEventListener ("click", ()=>{
    content.innerHTML="";
   content.appendChild(aboutContentFun())
  
})