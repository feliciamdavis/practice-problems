/**
 * Make a Rock Paper Scissors game for user to play against computer
 */

const compMoveImgs = [
    'rockComp',
    'paperComp',
    'scissorsComp'
];

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function () {
    // User move
    const userMoveEl = document.getElementById('userMove');
    const movesEl = document.getElementById('moves');
    userMoveEl.className = movesEl.value;

    // Computer move
    const compMoveEl = document.getElementById('compMove');
    const compMoveAt = Math.floor(Math.random() * compMoveImgs.length);
    const compMoveImg = compMoveImgs[compMoveAt];
    compMoveEl.className = compMoveImg;
});
