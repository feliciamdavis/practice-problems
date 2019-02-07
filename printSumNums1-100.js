function sumNums(num) {
    let total = 0;
    for (let x = 0; x <= num; x++) {
        total += x;
    }
    return total;
}
let total = sumNums(100);

console.log(total);