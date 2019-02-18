/**
 * Print whether a given string is a palindrome
 * ('mom', '01234543210', 'A Man, A Plan, A Canal: Panama!')
 * @param {string} str
 */
function isPalindrome(str) {
    const fixedString = str.replace(/[.?!, :-;]/g, '').toLowerCase();
    for (let firstIdx = 0; firstIdx < fixedString.length; firstIdx++) {
        const lastIdx = fixedString.length - firstIdx - 1;
        const firstChar = fixedString[firstIdx];
        const lastChar = fixedString[lastIdx];
        if (firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}

console.log (isPalindrome('A Man, A Plan, A Canal: Panama!'));