/**
 * Find the unique words in a sentence
 * @param {string} str
 */
function getUnique(str) {
    const fixedString = str.replace(/[.?!,:-;"']/g, '').toLowerCase();
    const words = fixedString.split(' ');
    const uniqueWords = [];
    for (const word of words) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    return uniqueWords;
}

const userInputEl = document.getElementById('userInput');
const uniqueWordsEl = document.getElementById('uniqueWords');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value;
    const  uniqueWords= getUnique(userInput);
    const string = uniqueWords.join(', ');
    uniqueWordsEl.innerText = string;
});