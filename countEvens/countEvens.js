/**
 * Search array for numbers divisible by 2
 * @param {Array<number>} nums
 */
function countEvens(nums) {
    let totalEvens = 0;
    for (const num of nums) {
        if (num % 2 === 0){
            totalEvens += 1;
        }
    }
    return totalEvens;
}

const userInputEl = document.getElementById('userInput');
const answerEl = document.getElementById('answer');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = userInputEl.value.trim();

    let evensCount = 0;
    if (userInput.length > 0) {
        const userInputStrings = userInput.split(',');
        const userInputNumbers = userInputStrings.map((s) => parseFloat(s));
        evensCount = countEvens(userInputNumbers);
    }

    answerEl.innerHTML = evensCount;
});