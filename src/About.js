//add a function that create content and then append it to content div

export const aboutContentFun=() =>{
const aboutContent= document.createElement('div');
const aboutInfo = document.createElement('div');
aboutInfo.classList.add('menuItem');
aboutInfo.textContent="This is the restuarant's full history"
aboutContent.appendChild(aboutInfo)

return aboutContent
}


// Write a paragraph about the reseturants's history