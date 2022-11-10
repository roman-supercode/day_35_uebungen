// Schreibe drei Funktionen, die beim Anklicken des Buttons den Style ändern.
// https://www.w3schools.com/jsref/prop_element_classlist.asp

const divContainer = document.getElementById("element");
// console.log(divContainer.classList);

function smallStyle() {
    divContainer.classList.remove("crazy", "middle");
    divContainer.classList.add("small");
}

function middleStyle() {
    divContainer.classList.remove("crazy", "small");
    divContainer.classList.add("middle");
}

function crazyStyle() {
    divContainer.classList.remove("middle", "small");
    divContainer.classList.add("crazy");
}