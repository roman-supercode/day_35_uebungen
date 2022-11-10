// Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.

let schalter = true;

function clickChange() {
    const navHome = document.getElementById("navHome");
    if (schalter) {
        navHome.style.transform = "scale(-1, 1)";
        navHome.style.background = "rgb(255, 105, 180)";
        schalter = false;
    } else {
        navHome.style.transform = "scale(1, 1)";
        navHome.style.background = "#333";
        schalter = true;
    }
};