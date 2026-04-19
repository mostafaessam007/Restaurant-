//add a function that create content and then append it to content div
export const menuContentFun=() =>{
const menuContent= document.createElement('div');
const menuItem = document.createElement('div');
menuItem.classList.add('menuItem');
menuItem.textContent="This is a menu item";
menuContent.appendChild(menuItem);

return menuContent
}


// add 3 menu items, each one in a card with it's price
