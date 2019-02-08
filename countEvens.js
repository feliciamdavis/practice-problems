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
let nums = countEvens([2, 4, 6, 8, 10]);
console.log(nums);
