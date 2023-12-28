import { renderHomePage } from "../views/homeView.js";
import { pauseAudios } from "../views/babyView.js";

export async function start() {
    pauseAudios();
    renderHomePage();
}