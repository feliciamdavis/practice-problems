/**
 * replace punctuation marks with puctuation and emoji
 * @param {string} str
 * @returns {string}
 */
function replacePunct(str) {
    str = str.replace(/\./g, '.😐 ');
    str = str.replace(/!/g, '!🤪 ');
    str = str.replace(/\?/g, '?🤨 ');
    return str;
}

let sentence = replacePunct(`
    How will this string look with emojis in it? I think it will look really cool! Or maybe not.
`);
console.log(sentence);
