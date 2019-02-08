/**
 * Search array for numbers divisible by 13
 * @param {Array<number>} nums
 */
function countEvens(nums) {
    let totalEvens = 0;
    for (const num of nums) {
        if (num % 13 === 0){
            totalEvens += 1;
        }
    }
    return totalEvens;
}
let nums = countEvens([13, 26, 39, 49, 56, 62, 74, 85, 99, 100]);
console.log(nums);

