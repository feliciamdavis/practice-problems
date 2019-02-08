/**
 * Search array for numbers divisible by 2
 * @param {Array<number>} nums
 */
function countEvens(nums) {
    let totalEvens = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0){
            totalEvens += 1;
        }
    }
    return totalEvens;
}
let nums = countEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(nums);
