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

let sentence = countWords('How many words are in this sentence?');
console.log(sentence);