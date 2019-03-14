/**
 * replace punctuation marks with puctuation and emoji
 * @param {string} str
 * @returns {string}
 */
function replacePunct(str) {
    str = str.replace(/\./g, '😐 ');
    str = str.replace(/!/g, '🤪 ');
    str = str.replace(/\?/g, '🤨 ');
    return str;
}

const userInputEl = document.getElementById('userInput');
const changedTextEl = document.getElementById('changedText');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    // get the user input from the user input element
    const userInput = userInputEl.value;

    // replace the punctuation in the user input
    const replacedUserInput = replacePunct(userInput);

    // put the replaced text into the changed text element
    changedTextEl.innerText = replacedUserInput;
});
