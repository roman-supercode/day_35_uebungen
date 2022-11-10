// Schreibe eine kleine App, die Dir die Taste ("key"), den Unicode Tastencode ("keyCode") und  den "Code" anzeigt,
// sobald Du eine Taste auf deinem Keyboard drückst.

const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
    // .keyCode laut w3schools veraltet
    let keyCode = event.keyCode;
    let code = event.code;
    let key = event.key;
    console.log(keyCode);

    // Ausgabe im HTML-Dokument
    document.getElementById("outputKey").textContent = key;
    document.getElementById("outputKCode").textContent = keyCode;
    document.getElementById("outputKeyCode").textContent = keyCode;
    document.getElementById("outputCode").textContent = code;

});

