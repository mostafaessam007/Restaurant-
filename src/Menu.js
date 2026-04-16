//add a function that create content and then append it to content div
export const MenuContent= document.createElement('div');
const menuItem = document.createElement('div');
menuItem.classList.add('menuItem');
menuItem.textContent="This is a menu item"
MenuContent.appendChild(menuItem)
// add 3 menu items, each one in a card with it's price
