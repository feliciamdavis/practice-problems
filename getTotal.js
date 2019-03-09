// get total of [7,13,10]
const anniversaryNums = [7, 13, 10];


function getTotal(nums) {
    let total = 0;
    for (let x = 0; x < nums.length; x++) {
        const num = nums[x];
        total += num;
    }
    return total;
}

function getTotalTwo(nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

const total = getTotalTwo(anniversaryNums);

console.log(total);