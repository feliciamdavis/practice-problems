/**
 * Find the unique words in a sentence
 * @param {string} str
 */
function getUnique(str) {
    const fixedString = str.replace(/[.?!,:-;]/g, '').toLowerCase();
    const words = fixedString.split(' ');
    const uniqueWords = [];
    for (const word of words) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    return uniqueWords;
}

console.log(getUnique('A Man, A Plan, A Canal: Panama!'));