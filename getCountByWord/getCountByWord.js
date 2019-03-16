/**
 * Give list of words in string with a number count of how many times each word is seen
 * @param {string} str
 */
function getCountByWords(str) {
    const fixedString = str.replace(/[.?!,:-;]/g, '').toLowerCase();
    const words = fixedString.split(' ');
    const countByWord = new Map();
    for (const word of words) {
        if (!countByWord.has(word)) {
            countByWord.set(word, 1);
        }
        else {
            let currentCount = countByWord.get(word);
            currentCount++;
            countByWord.set(word, currentCount);
        }
    }
    return countByWord;
}

const userInputEl = document.getElementById('userInput');
const wordCountEl = document.getElementById('wordCount');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value;
    const countByWord = getCountByWords(userInput);
    let string = '';
    for (const word of countByWord.keys()) {
        const count = countByWord.get(word);
        string += `${word} : ${count} \n`;
    }
    wordCountEl.innerText = string;
});