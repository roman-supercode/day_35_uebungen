// Schreibe eine Funktion, die beim Anklicken des Button die Werte in der Konsole ausgibt.

function changeColor() {
    const liste = document.getElementsByTagName("li");
    const unorderedList = document.getElementsByTagName("ul");
    const button = document.getElementById("navChange");
    console.log(liste.length);

    // for (let list of liste) {
    // Für zufällige Farbausgabe
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // list.style.background = "#" + randomColor;
    // }
    liste[0].style.background = "#f6c89f";
    liste[1].style.background = "#ffe7d1";
    liste[2].style.background = "#4b8e8d";
    unorderedList[0].style.background = "#666";
    button.style.background = "#396362";
}