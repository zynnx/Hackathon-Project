import { renderAboutPage } from "../views/aboutView.js";
import { pauseAudios } from "../views/babyView.js";

export function start() {
    pauseAudios();
    renderAboutPage();
}
