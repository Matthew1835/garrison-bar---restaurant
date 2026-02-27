import drinkImg1 from './images/drink (1).jpg';
import drinkImg2 from './images/drink (2).jpg';
import drinkImg3 from './images/drink (3).jpg';
import drinkImg4 from './images/drink (4).jpg';

import foodImg1 from './images/food (1).jpg';
import foodImg2 from './images/steak.jpg';
import foodImg3 from './images/food (3).jpg';
import foodImg4 from './images/pasta.jpg';  

export const getMenuContent = (container) => {
    // Drinks Section
    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('menu-container');

    const drinkHeading = document.createElement("h2");
    drinkHeading.classList.add('menu-heading');
    drinkHeading.textContent = "Drinks";

    // Drinks Cards
    const drinkCardsContainer = document.createElement('div');
    drinkCardsContainer.classList.add('menu-cards-container');

    const drinks = [
        { name: 'Drink One', price: '$10', src: drinkImg1 },
        { name: 'Drink Two', price: '$20', src: drinkImg2 },
        { name: 'Drink Three', price: '$30', src: drinkImg3 },
        { name: 'Drink Four', price: '$40', src: drinkImg4 },
    ];

    drinks.forEach(drink => {
        const drinkCard = document.createElement('div');
        drinkCard.classList.add('menu-card');

        const drinkImg = document.createElement('img');
        drinkImg.classList.add('menu-img');
        drinkImg.setAttribute('src', drink.src);
        drinkImg.setAttribute('alt', `image of ${drink.name}`);

        const drinkInfo = document.createElement('div');
        drinkInfo.classList.add('menu-info');

        const drinkName = document.createElement('h3');
        drinkName.classList.add('menu-name');
        drinkName.textContent = drink.name;
        
        const drinkDivider = document.createElement('hr');

        const drinkPrice = document.createElement('p');
        drinkPrice.classList.add('menu-price');
        drinkPrice.textContent = drink.price;

        drinkInfo.append(drinkName, drinkDivider, drinkPrice);
        drinkCard.append(drinkImg, drinkInfo);

        drinkCardsContainer.append(drinkCard);
    })

    drinksContainer.append(drinkHeading, drinkCardsContainer);

    // Food Section
    const foodContainer = document.createElement('div');
    foodContainer.classList.add('menu-container');

    const foodHeading = document.createElement("h2");
    foodHeading.classList.add('menu-heading');
    foodHeading.textContent = "Food";

    // Food Cards    
    const foodCardsContainer = document.createElement('div');
    foodCardsContainer.classList.add('menu-cards-container');
    
    const foods = [
        { name: 'Food One', price: '$10', url: foodImg1 },
        { name: 'Food Two', price: '$20', url: foodImg2 },
        { name: 'Food Three', price: '$30', url: foodImg3 },
        { name: 'Food Four', price: '$40', url: foodImg4 },
    ];

    foods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('menu-card');

        const foodImg = document.createElement('img');
        foodImg.classList.add('menu-img');
        foodImg.setAttribute('src', food.url);
        foodImg.setAttribute('alt', `image of ${food.name}`);

        const foodInfo = document.createElement('div');
        foodInfo.classList.add('menu-info');

        const foodName = document.createElement('h3');
        foodName.classList.add('menu-name');
        foodName.textContent = food.name;
        
        const foodDivider = document.createElement('hr');

        const foodPrice = document.createElement('p');
        foodPrice.classList.add('menu-price');
        foodPrice.textContent = food.price;

        foodInfo.append(foodName, foodDivider, foodPrice);
        foodCard.append(foodImg, foodInfo);

        foodCardsContainer.append(foodCard);
    })
    
    foodContainer.append(foodHeading, foodCardsContainer);

    container.append(drinksContainer, foodContainer);
};