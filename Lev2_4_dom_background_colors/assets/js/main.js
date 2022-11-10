// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des bodys anwendet.

const button = document.getElementById("button");
const body = document.getElementsByTagName("body");


// 1. Methode mit .value

// button.addEventListener("click", (event) => {
//     event.preventDefault();

//     // Inhalt aus option abrufen
//     const selectedOption = document.getElementById("farbeAuswahlen").value;
//     // Erstetzt die Leerzeichen zwischen den Wörtern (sonst werden die Farben nicht interpretiert)
//     let changeColor = selectedOption.replaceAll(" ", "");
//     // console.log(changeColor);

//     // Stylt den Background entsprechend der Farbauswahl!
//     body[0].style.backgroundColor = changeColor;
// });



// 2. Methode mit .selectedIndex
// https://www.w3schools.com/jsref/prop_select_selectedindex.asp

button.addEventListener("click", (event) => {
    event.preventDefault();

    // Gibt den Index der ausgewählten Option aus dem Drop-down
    const selectedOptionIndex = document.getElementById("farbeAuswahlen").selectedIndex;
    // console.log(selectedOptionIndex);

    // Zugriff auf Options aus der Drop-down-liste
    const selectedOption = document.getElementById("farbeAuswahlen").options;
    // console.log(selectedOption);

    // Zugriff auf den Textinhalt(farbe) aus der gewählten Option. (.selectedIndex gibt die gewählte Option bzw. den Index)
    const selectedColor = selectedOption[selectedOptionIndex].text;
    // console.log(selectedColor);

    // Erstetzt die Leerzeichen zwischen den Wörtern (sonst werden die Farben nicht interpretiert)
    let changeColor = selectedColor.replaceAll(" ", "");

    // Stylt den Background entsprechend der Farbauswahl!
    body[0].style.backgroundColor = changeColor;
});