import introBarImg from './images/intro-bar.jpg';
import pastaImg from "./images/pasta.jpg";
import steakImg from "./images/steak.jpg";
import cocktailImg from "./images/cocktail.jpg";

import { getMenuContent } from "./menu.js";

export const getHomeContent = (container) => {
    // Intro Section
    const introDiv = document.createElement('div');
    introDiv.classList.add('intro-container');

    const introHeading = document.createElement('h2');
    introHeading.classList.add('intro-heading');
    introHeading.textContent = `Garrison Bar & Restaurant`;

    const introText = document.createElement('p');
    introText.classList.add('intro-text');
    introText.textContent = `It’s bar-forward at heart, where the cocktails lead and the kitchen keeps up, bold but never loud. A place for people who appreciate craft, conversation, and a little edge with their elegance.`

    const introImg = document.createElement('img');
    introImg.classList.add('intro-img');
    introImg.setAttribute('src', introBarImg);
    introImg.setAttribute('alt', 'bar image');
    
    introDiv.append(introHeading, introText, introImg)
    
    // Highlights Section
    const highlightsDiv = document.createElement('div');
    highlightsDiv.classList.add('highlights-container');

    // Cocktails Div
    const cocktailsDiv = document.createElement('div');
    cocktailsDiv.classList.add('cocktails');

    const cocktailText = document.createElement('p');
    cocktailText.textContent = "Craft Cocktails";

    const cocktailIcon = document.createElement('i');
    cocktailIcon.className = 'fa-solid fa-martini-glass-citrus';
    cocktailsDiv.append(cocktailIcon, cocktailText);

    // Menus Div
    const menusDiv = document.createElement('div');
    menusDiv.classList.add('menus');

    const menuText = document.createElement('p');
    menuText.textContent = "Chef-Curated Menu";

    const menuIcon = document.createElement('i');
    menuIcon.className = 'fa-solid fa-utensils';
    menusDiv.append(menuIcon, menuText);

    // Events Div
    const eventsDiv = document.createElement('div');
    eventsDiv.classList.add('events');

    const eventText = document.createElement('p');
    eventText.textContent = "Live Events";

    const eventIcon = document.createElement('i');
    eventIcon.className = 'fa-solid fa-music';
    eventsDiv.append(eventIcon, eventText);

    highlightsDiv.append(cocktailsDiv, menusDiv, eventsDiv);

    // Features Section
    const featuresDiv = document.createElement('div');
    featuresDiv.classList.add('features-container');

    const featureHeading = document.createElement('h2');
    featureHeading.classList.add('feature-heading');
    featureHeading.textContent = "House Signatures";

    // Feature Cars Container
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');

    // Feature One
    const featureOne = document.createElement('div');
    featureOne.classList.add('feature-card');

    const featureOneImg = document.createElement('img');
    featureOneImg.classList.add('feature-img');
    featureOneImg.setAttribute('src', pastaImg);
    featureOneImg.setAttribute('alt', 'pasta image');

    const featureOneText = document.createElement('p');
    featureOneText.classList.add('feature-text');
    featureOneText.textContent = "Pasta with Shrimps";

    featureOne.append(featureOneImg, featureOneText);

    // Feature Two
    const featureTwo = document.createElement('div');
    featureTwo.classList.add('feature-card');

    const featureTwoImg = document.createElement('img');
    featureTwoImg.classList.add('feature-img');
    featureTwoImg.setAttribute('src', cocktailImg);
    featureTwoImg.setAttribute('alt', 'cocktail image');

    const featureTwoText = document.createElement('p');
    featureTwoText.classList.add('feature-text');
    featureTwoText.textContent = "Scarlet Cocktail";

    featureTwo.append(featureTwoImg, featureTwoText);

    // Feature Three
    const featureThree = document.createElement('div');
    featureThree.classList.add('feature-card');

    const featureThreeImg = document.createElement('img');
    featureThreeImg.classList.add('feature-img');
    featureThreeImg.setAttribute('src', steakImg);
    featureThreeImg.setAttribute('alt', 'steak image');

    const featureThreeText = document.createElement('p');
    featureThreeText.classList.add('feature-text');
    featureThreeText.textContent = "Succulent Cut Steak";

    featureThree.append(featureThreeImg, featureThreeText);

    // See Menu Button
    const seeMenuBtn = document.createElement('button');
    seeMenuBtn.classList.add('see-menu-btn');
    seeMenuBtn.addEventListener('click', () => {
        container.innerHTML = "";
        getMenuContent(container);
    });
    seeMenuBtn.textContent = "See Full Menu";

    cardsContainer.append(featureOne, featureTwo, featureThree)
    featuresDiv.append(featureHeading, cardsContainer, seeMenuBtn);

    // Booking Div
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-container');

    const bookingForm = document.createElement('form');
    bookingForm.classList.add('booking-form');

    const bookingHeading = document.createElement('h2');
    bookingHeading.classList.add("booking-title");
    bookingHeading.textContent = "Book your table tonight";

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    // Full Name
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');

    nameLabel.classList.add('form-label');
    nameInput.classList.add('form-input');

    nameLabel.textContent = "Full Name: "
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'fullname');
    nameInput.setAttribute('required', 'true');

    nameLabel.append(nameInput)

    // Phone Number
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');

    phoneLabel.classList.add('form-label');
    phoneInput.classList.add('form-input');

    phoneLabel.textContent = "Phone: "
    phoneInput.setAttribute('type', 'text');
    phoneInput.setAttribute('name', 'phone');
    phoneInput.setAttribute('required', 'true');

    phoneLabel.append(phoneInput);

    // Guests
    const guestsLabel = document.createElement('label');
    const guestsInput = document.createElement('input');

    guestsLabel.classList.add('form-label');
    guestsInput.classList.add('form-input');

    guestsLabel.textContent = "Guests: "
    guestsInput.setAttribute('type', 'number');
    guestsInput.setAttribute('name', 'guests');
    guestsInput.setAttribute('required', 'true');

    guestsLabel.append(guestsInput);

    // Date
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');

    dateLabel.classList.add('form-label');
    dateInput.classList.add('form-input', 'date-time');

    dateLabel.textContent = "Date: "
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('required', 'true');

    dateLabel.append(dateInput)

    // Time
    const timeLabel = document.createElement('label');
    const timeSelect = document.createElement('select');
    const optionOne = document.createElement('option');
    const optionTwo = document.createElement('option');
    const optionThree = document.createElement('option');

    timeLabel.classList.add('form-label');
    timeSelect.classList.add('form-input', 'date-time');

    timeLabel.textContent = "Time: "
    timeSelect.setAttribute('name', 'time');
    timeSelect.setAttribute('required', 'true');

    optionOne.setAttribute('value', 'seven');
    optionTwo.setAttribute('value', 'eight');
    optionThree.setAttribute('value', 'nine');

    optionOne.textContent = "7:00 PM";
    optionTwo.textContent = "8:00 PM";
    optionThree.textContent = "9:00 PM";

    timeSelect.append(optionOne, optionTwo, optionThree);
    timeLabel.append(timeSelect)

    // Book button
    const bookBtn = document.createElement('button');
    bookBtn.classList.add('book-btn');
    bookBtn.setAttribute('type', 'submit');
    bookBtn.setAttribute('action', '#');
    bookBtn.textContent = "Book";

    inputContainer.append(nameLabel, phoneLabel, guestsLabel, dateLabel, timeLabel)
    bookingForm.append(bookingHeading, inputContainer, bookBtn);
    formDiv.append(bookingForm);
    
    container.append(introDiv, highlightsDiv, featuresDiv, formDiv);
};