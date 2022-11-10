// Schreibe eine Funktion, die beim Anklicken des Button die Werte in der Konsole ausgibt.

function displayInput() {
    const vorname = document.getElementById("vorname").value;
    const nachname = document.getElementById("nachname").value;
    const land = document.getElementById("land").value;
    //Ausgabe
    console.log(`Full name: ${vorname} ${nachname} Land: ${land}`);
}