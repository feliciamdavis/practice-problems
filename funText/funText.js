/**
 * Make a webpage that changes the user text color, size, and font
 */

const userInputEl = document.getElementById('userInput');
const changedTextEl = document.getElementById('changedText');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value;
    changedTextEl.innerHTML = userInput;
});
