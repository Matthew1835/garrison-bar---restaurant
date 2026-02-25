export const getMenuContent = (container) => {
    const heading = document.createElement("h1");
    heading.textContent = "This is the Menu page";

    container.append(heading);
};