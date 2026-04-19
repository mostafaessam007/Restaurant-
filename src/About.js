//add a function that create content and then append it to content div

export const aboutContentFun=() =>{
const aboutContent= document.createElement('div');
aboutContent.classList.add('aboutContent');

// About container
const aboutContainer = document.createElement('div');
aboutContainer.classList.add('aboutContainer');

const aboutHead = document.createElement('p');
aboutHead.classList.add('aboutHead');
aboutHead.textContent = "Who are we?";

const aboutParagraph = document.createElement('p');
aboutParagraph.classList.add('aboutParagraph');
aboutParagraph.textContent = "Yum ".repeat(20) + "burger since 1985!";

aboutContainer.append(aboutHead, aboutParagraph);

aboutContent.appendChild(aboutContainer);

return aboutContent
}