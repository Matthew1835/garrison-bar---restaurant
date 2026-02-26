import introBarImg from './images/intro-bar.jpg';
import pastaImg from "./images/pasta.jpg";
import steakImg from "./images/steak.jpg";
import cocktailImg from "./images/cocktail.jpg";

import { getMenuContent } from "./menu.js";

export const getHomeContent = (container) => {
    // Intro Section
    const introDiv = document.createElement('div');
    introDiv.classList.add('intro-container');

    const textContainer = document.createElement('div');
    textContainer.classList.add('intro-text-container');

    const introHeading = document.createElement('h2');
    introHeading.classList.add('intro-heading');
    introHeading.textContent = `Garrison Bar & Restaurant`;

    const introText = document.createElement('p');
    introText.classList.add('intro-text');
    introText.textContent = `It’s bar-forward at heart, where the cocktails lead and the kitchen keeps up, bold but never loud. A place for people who appreciate craft, conversation, and a little edge with their elegance.`

    textContainer.append(introHeading, introText)
    
    const introImg = document.createElement('img');
    introImg.classList.add('intro-img');
    introImg.setAttribute('src', introBarImg);
    introImg.setAttribute('alt', 'bar image');
    
    introDiv.append(textContainer, introImg)
    
    // Highlights Section
    const highlightsDiv = document.createElement('div');
    highlightsDiv.classList.add('highlights-container');

    const highlights = [
        { icon: 'fa-martini-glass-citrus', label: 'Craft Cocktails' },
        { icon: 'fa-utensils', label: 'Chef-Curated Menu' },
        { icon: 'fa-music', label: 'Live Events' },
    ];

    highlights.forEach(highlight => {
        const highlightDiv = document.createElement('div');
        highlightDiv.classList.add('highlight');

        const icon = document.createElement('i');
        icon.className = `fa-solid ${highlight.icon}`;

        const label = document.createElement('p');
        label.textContent = highlight.label;

        highlightDiv.append(icon, label);
        highlightsDiv.append(highlightDiv);
    });

    // Features Section
    const featuresDiv = document.createElement('div');
    featuresDiv.classList.add('features-container');

    const featureHeading = document.createElement('h2');
    featureHeading.classList.add('feature-heading');
    featureHeading.textContent = "House Signatures";

    // Feature Cards
    const featureCardsContainer = document.createElement('div');
    featureCardsContainer.classList.add('cards-container');

    const features = [
        { src: pastaImg, name: 'Pasta with Shrimps' },
        { src: cocktailImg, name: 'Scarlet Cocktail' },
        { src: steakImg, name: 'Succulent Cut Steak' },
    ]

    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.classList.add('feature-card');

        const featureImg = document.createElement('img');
        featureImg.classList.add('feature-img');
        featureImg.setAttribute('src', feature.src);
        featureImg.setAttribute('alt', `image of ${feature.name}`);

        const featureLabel = document.createElement('p');
        featureLabel.classList.add('feature-text');
        featureLabel.textContent = feature.name;

        featureCard.append(featureImg, featureLabel);
        featureCardsContainer.append(featureCard);
    })

    // See Menu Button
    const seeMenuBtn = document.createElement('button');
    seeMenuBtn.classList.add('see-menu-btn');
    seeMenuBtn.addEventListener('click', () => {
        container.innerHTML = "";
        getMenuContent(container);
    });
    seeMenuBtn.textContent = "See Full Menu";

    featuresDiv.append(featureHeading, featureCardsContainer, seeMenuBtn);

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