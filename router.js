import * as homeController from "./controllers/homeController.js";
import * as babyController from "./controllers/babyController.js";
import * as aboutController from "./controllers/aboutController.js";

const routes = {
    home: homeController,
    babyReveal: babyController,
    about: aboutController,
};

function start() {
    const defaultRoute = "home";
    navigateTo(defaultRoute);
    setupEventListeners();
}

function navigateTo(route) {
    const controller = routes[route];
    if (controller) {
        controller.start();
    }
}

function setupEventListeners() {
    const homeLink = document.getElementById("home-link");
    homeLink.addEventListener("click", () => navigateTo("home"));

    const babyLink = document.getElementById("btnGenerator");
    babyLink.addEventListener("click", () => navigateTo("babyReveal"));

    const aboutLink = document.getElementById("about-link");
    aboutLink.addEventListener("click", () => navigateTo("about"));
}

start();
