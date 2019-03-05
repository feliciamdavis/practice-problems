/**
 * Search array for numbers divisible by 2
 * @param {Array<number>} nums
 */
function countEvens(nums) {
    let totalEvens = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0){
            totalEvens += 1;
        }
    }
    return totalEvens;
}

const sentenceEl = document.getElementById('userInput');
const answerEl = document.getElementById('answer');

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    const userInput = sentenceEl.value;
    const isEven = countEvens(userInput);
    answerEl.innerHTML = isEven;
});