// HomeContent.classList.add('HomeContent');
export const homeContentFun= ()=>{
const HomeContent= document.createElement('div');
HomeContent.classList.add('HomeContent');

//add resturant's logoContainer at the middile of the home page
const logoContainer = document.createElement('div');
logoContainer.classList.add('logoContainer');
HomeContent.appendChild(logoContainer)

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent="Vegas Burger"
logoContainer.appendChild(logo)

// Add a paragrapgh that descrips the resturant
const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('descriptionContainer');

const description = document.createElement('p');
description.classList.add('description');
description.textContent="Welcome to Vegas Burger — where the neon never dims and the burgers never disappoint. Step into the golden age of American dining, where jukebox classics fill the air and every bite takes you straight to the Strip. Pull up a stool and enjoy your food."
descriptionContainer.appendChild(description)


// Add a paragrapgh containing the working hours
const workingHoursContainer = document.createElement('div');
workingHoursContainer.classList.add('workingHoursContainer');

const workingHoursHead = document.createElement('p');
workingHoursHead.classList.add('workingHoursHead');
workingHoursHead.textContent="Hours"

const workingHours = document.createElement('p');
workingHours.classList.add('workingHours');
workingHours.textContent="Are you really going to ask about the working hours? We work 24/7! Welcome to the city that never sleeps!"
workingHoursContainer.append(workingHoursHead,workingHours)



//Add a paragrapgh for the resturant's location
const addressContainer = document.createElement('div');
addressContainer.classList.add('addressContainer');

const addressHead = document.createElement('p');
addressHead.classList.add('addressHead');
addressHead.textContent="Address"

const address = document.createElement('p');
address.classList.add('address');
address.textContent="742 Fremont Street, Las Vegas, NV 89101";
addressContainer.append(addressHead,address)

HomeContent.append(descriptionContainer,workingHoursContainer,addressContainer)
return HomeContent
}







// add a button that takes you over to the menu page