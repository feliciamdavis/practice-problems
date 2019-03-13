/**
 * Make a webpage where the user can choose a style to change their text to
 */

const userInputEl = document.getElementById('userInput');
const changedTextEl = document.getElementById('changedText');
const optionsEl = document.getElementById('options');


const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    changedTextEl.innerText = userInputEl.value;
    changedTextEl.className = optionsEl.value;
});