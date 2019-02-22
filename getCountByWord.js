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

console.log(getCountByWords('A Man, A Plan, A Canal: Panama!'));