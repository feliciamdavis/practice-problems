/**
 * Make a webpage that changes the user text color, size, and font
 */

const userInputEl = document.getElementById('userInput');
const changedTextEl = document.getElementById('changedText');
const dropdownEl = document.getElementById('dropdown');
dropdownEl.addEventListener('change', function() {
    const userInput = userInputEl.value;
    const dropdownValue = dropdownEl.value;
    changedTextEl.style.color = dropdownValue;
    changedTextEl.innerHTML = userInput;
});
