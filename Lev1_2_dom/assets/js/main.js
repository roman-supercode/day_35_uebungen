// Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.

const example = document.getElementsByClassName("example");

let count = 1;

function myFunction() {

    if (count === 0) {
        for (let exampleElement of example) {
            exampleElement.style.background = "#666";
            exampleElement.style.color = "white";
        }
        count = 1;
        console.log(count);
    } else {
        for (let exampleElement of example) {
            exampleElement.style.background = "black";
            exampleElement.style.color = "white";
        }
        count = 0;
        console.log(count);
    }
};