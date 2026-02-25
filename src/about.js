export const getAboutContent = (container) => {
    const heading = document.createElement("h1");
    heading.textContent = "This is the About page";

    container.append(heading);
};