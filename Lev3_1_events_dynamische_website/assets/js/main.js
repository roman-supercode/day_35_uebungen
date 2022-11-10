
const output = document.getElementById("output");
let count = 0;

// 1. Ändere die Hintergrundfarbe, wenn auf einen Button geklickt wird.
function changeBackground(colorParameter) {
    document.body.style.background = colorParameter;
    count++;
    output.textContent = `Wir haben die Farbe ${count} mal geändert!`;
}

// 2. Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.
function changeHandle() {
    let r = Number(document.getElementById("rot").value);
    let g = Number(document.getElementById("grun").value);
    let b = Number(document.getElementById("blau").value);

    // console.log(r, g, b);
    document.body.style.background = `rgb(${r} ${g} ${b})`;

    // Ausgabe im HTML
    output.textContent = `rgb(${r}, ${g}, ${b}) Hex: ${rgbToHex(r, g, b)}`;
};

// 3. konvertiere Dezimal zu Hex.

function valueToHex(COLOR) {
    console.log(COLOR);
    var hex = COLOR.toString(16);
    console.log(hex);
    return hex;
}
function rgbToHex(r, g, b) {

    return (valueToHex(r) + valueToHex(g) + valueToHex(b));

}