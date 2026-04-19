//add a function that create content and then append it to content div
export const menuContentFun=() =>{
const menuContent= document.createElement('div');
menuContent.classList.add('menuContent');

// Burger
const burgerContainer = document.createElement('div');
burgerContainer.classList.add('menuItemContainer');

const burgerName = document.createElement('p');
burgerName.classList.add('menuItemName');
burgerName.textContent = "Burger";

const burgerPrice = document.createElement('p');
burgerPrice.classList.add('menuItemPrice');
burgerPrice.textContent = "$10.99";

burgerContainer.append(burgerName, burgerPrice);

// Pizza
const pizzaContainer = document.createElement('div');
pizzaContainer.classList.add('menuItemContainer');

const pizzaName = document.createElement('p');
pizzaName.classList.add('menuItemName');
pizzaName.textContent = "Pizza";

const pizzaPrice = document.createElement('p');
pizzaPrice.classList.add('menuItemPrice');
pizzaPrice.textContent = "$12.99";

pizzaContainer.append(pizzaName, pizzaPrice);

// Coke
const cokeContainer = document.createElement('div');
cokeContainer.classList.add('menuItemContainer');

const cokeName = document.createElement('p');
cokeName.classList.add('menuItemName');
cokeName.textContent = "Coke";

const cokePrice = document.createElement('p');
cokePrice.classList.add('menuItemPrice');
cokePrice.textContent = "$2.99";

cokeContainer.append(cokeName, cokePrice);

// Pancakes
const pancakesContainer = document.createElement('div');
pancakesContainer.classList.add('menuItemContainer');

const pancakesName = document.createElement('p');
pancakesName.classList.add('menuItemName');
pancakesName.textContent = "Pancakes";

const pancakesPrice = document.createElement('p');
pancakesPrice.classList.add('menuItemPrice');
pancakesPrice.textContent = "$8.99";

pancakesContainer.append(pancakesName, pancakesPrice);

menuContent.append(burgerContainer, pizzaContainer, cokeContainer, pancakesContainer);

return menuContent
}
