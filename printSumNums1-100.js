/**
 * Print sum of numbers 1 - 100
 * @param {number} num
 */
function sumNums(num) {
    let total = 0;
    for (let x = 0; x <= num; x++) {
        total += x;
    }
    return total;
}
let total = sumNums(100);

console.log(total);