/**
 * print random number 1-6 (e.g., emulate rolling a 6-sided die)
 */
const buttonEl = document.querySelector('button');
const rollEl = document.getElementById('diceNumber');

buttonEl.addEventListener('click', function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    rollEl.innerHTML = roll;
});
