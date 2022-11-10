// Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.

const selection = document.getElementById("my-select");
const outputSelection = document.getElementById("option-selected");

selection.addEventListener("change", e => {

    const selectedOption = e.target.value;
    // console.log(selectedOption);

    outputSelection.textContent = `Sie haben ${selectedOption} ausgewählt!`;
});