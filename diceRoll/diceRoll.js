/**
 * print random number 1-6 (e.g., emulate rolling a 6-sided die)
 */

const buttonEl = document.querySelector('button');
const imgEl = document.getElementById('img');

buttonEl.addEventListener('click', function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    const img = `die${roll}`;
    imgEl.className = img;
});
