/**
 * Make a webpage that changes the user text color, size, and font
 */

const userInputEl = document.getElementById('userInput');
const changedTextEl = document.getElementById('changedText');
const colorsEl = document.getElementById('colors');
const fontsEl = document.getElementById('fonts');
const sizeEl = document.getElementById('size');


const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    changedTextEl.innerHTML = userInputEl.value;
    changedTextEl.style.color = colorsEl.value;
    changedTextEl.style.fontFamily = fontsEl.value;
    changedTextEl.style.fontSize = sizeEl.value;
});