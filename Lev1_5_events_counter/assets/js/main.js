// Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
// https://www.w3schools.com/js/js_events.asp

const button = document.getElementById("clickMe");
let anzahl = 0;

button.addEventListener("click", () => {
    anzahl++;
    button.innerHTML = `Click me: ${anzahl}`;
});