// Schreibe eine kleine App, die die Hintergrundfarbe ändert.


// BEACHTEN: .getElemtsByTagName erstellt eine indexbasierte HTMLCollection,
// d.h. um body anzusprechen muss man zusätzlich den [index] angeben!
const body = document.getElementsByTagName("body");
console.log(body); // Ausgabe 0: body

const changeColorGrey = () => {
    body[0].style.background = "grey";
};

const changeColorWhite = () => {
    body[0].style.background = "white";
};

const changeColorBlue = () => {
    body[0].style.background = "blue";
};

const changeColorYellow = () => {
    body[0].style.background = "yellow";
};
