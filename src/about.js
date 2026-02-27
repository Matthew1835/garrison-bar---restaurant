import restaurantImg from './images/gallery-img (4).jpg';
import ownerImg from './images/owner.jpg';
import managerImg from './images/manager.jpg';
import chefImg from './images/chef.jpg';

export const getAboutContent = (container) => {
    // Story Section
    const storyContainer = document.createElement('div');
    storyContainer.classList.add('about-container');

    const storyText = document.createElement('div');
    storyText.classList.add('story-text');

    const storyHeading = document.createElement("h2");
    storyHeading.classList.add('about-heading')
    storyHeading.textContent = "Our Story";

    const storyParagraphOne = document.createElement('p');
    storyParagraphOne.classList.add('story-paragraph');
    storyParagraphOne.textContent = "Garrison was started by Adrian Vale, a bartender who believed the best nights don’t need to be loud to be unforgettable. He wanted a place where the bar leads, the kitchen keeps pace, and the atmosphere does the talking.";

    const storyParagraphTwo = document.createElement('p');
    storyParagraphTwo.classList.add('story-paragraph');
    storyParagraphTwo.textContent = "Built in the Riverside district, Garrison blends precision cocktails with fire-driven plates, all under low lights and quiet confidence. What makes it different isn’t trends — it’s restraint. Every detail is intentional, designed for nights that unfold naturally and linger long after the last pour.";

    storyText.append(storyHeading, storyParagraphOne, storyParagraphTwo);

    const storyImg = document.createElement('img');
    storyImg.classList.add('story-img');
    storyImg.setAttribute('src', restaurantImg);
    storyImg.setAttribute('alt', 'image of the restaurant');

    storyContainer.append(storyText, storyImg);

    // Team Section
    const teamContainer = document.createElement('div');
    teamContainer.classList.add('about-container');

    const teamHeading = document.createElement('h2');
    teamHeading.classList.add('about-heading');
    teamHeading.textContent = "Meet the Team";

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('team-cards-container');

    const members = [
        { name: "Member 1", bio: "Owner", src: ownerImg },
        { name: "Member 2", bio: "Manager", src: managerImg },
        { name: "Member 3", bio: "Head Chef", src: chefImg },
    ];

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        const memberImg = document.createElement('img');
        memberImg.classList.add('member-img');
        memberImg.setAttribute('src', member.src);
        memberImg.setAttribute('alt', 'image of a member');

        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');

        const memberName = document.createElement('h3');
        memberName.classList.add('member-name');
        memberName.textContent = member.name;

        const memberBio = document.createElement('p');
        memberBio.classList.add('member-bio');
        memberBio.textContent = member.bio;

        memberInfo.append(memberName, memberBio)

        memberCard.append(memberImg, memberInfo)

        cardsContainer.append(memberCard);
    })

    teamContainer.append(teamHeading, cardsContainer);

    // Quote Section
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('about-container');

    const quote = document.createElement('q');
    quote.classList.add('quote');
    quote.textContent = "Built for slow conversations, strong drinks, and nights that don’t ask for attention — they earn it.";

    quoteContainer.append(quote);

    container.append(storyContainer, quoteContainer, teamContainer);
};