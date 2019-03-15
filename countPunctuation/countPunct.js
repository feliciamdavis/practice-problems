/**
 * print how many punctuation marks are in a given string of text
 * @param {string} str
 */
function countPunct(str) {
    let totalPunct = 0;
    for (const char of str) {
        if (char === '.' || char === '!' || char === '?') {
            totalPunct += 1;
        }
    }
    return totalPunct;
}

const userInputEl = document.getElementById('userInput');
const punctCountEl = document.getElementById('punctCount');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value;
    const replacedUserInput = countPunct(userInput);
    punctCountEl.innerText = replacedUserInput;
});