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

let sentence = countPunct(`
    How many punctuation marks are in this paragraph?
    Now I have to type a bunch of useless stuff. OMG this is ridiculous!
`);
console.log(sentence);