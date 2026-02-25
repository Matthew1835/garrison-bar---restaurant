import "./styles.css";
import { getHomeContent } from "./home.js";
import { getMenuContent } from "./menu.js";
import { getAboutContent } from "./about.js";

const container = document.getElementById("content");
const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const aboutBtn = document.getElementById("about-button");

const navMenu = document.getElementById('nav-menu');
const navMenuBtns = document.querySelectorAll('.nav-menu-btn');
const isMobile = window.matchMedia("(max-width: 768px)");

navMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navMenu.classList.toggle("active");

        if (isMobile.matches) {
            document.body.classList.toggle("no-scroll");
        }
    })
})

isMobile.addEventListener("change", () => {
    if (!isMobile.matches) {
        document.body.classList.remove("no-scroll");
    }
});

getHomeContent(container);

homeBtn.addEventListener('click', () => {
    container.innerHTML = "";
    getHomeContent(container);
})

menuBtn.addEventListener('click', () => {
    container.innerHTML = "";
    getMenuContent(container);
})

aboutBtn.addEventListener('click', () => {
    container.innerHTML = "";
    getAboutContent(container);
})