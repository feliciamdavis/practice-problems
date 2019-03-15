/**
 * print how many words are in a given string of text
 * @param {string} str
 */
function countWords(str) {
    let totalWords = 0;
    for (const word of str) {
        if (word === ' ') {
            totalWords += 1;
        }
    }
    return totalWords +1;
}


const userInputEl = document.getElementById('userInput');
const wordCountEl = document.getElementById('wordCount');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value;
    const replacedUserInput = countWords(userInput);
    wordCountEl.innerText = replacedUserInput;
});