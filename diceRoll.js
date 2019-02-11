/**
 * print random number 1-6 (e.g., emulate rolling a 6-sided die)
 */
function rollDie() {
    return Math.floor(Math.random() * 6) +1 ;
}

console.log(rollDie());