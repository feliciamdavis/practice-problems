/**
 * Make a Rock Paper Scissors game for user to play against computer
 */

const userMoveImgs = [
    'rock',
    'paper',
    'scissors'
];

const compMoveImgs = [
    'rockComp',
    'paperComp',
    'scissorsComp'
];

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function () {


    const compMoveEl = document.getElementById('compMove');
    const compMoveAt = Math.floor(Math.random() * compMoveImgs.length);
    const compMove = compMoveImgs[compMoveAt];
    compMoveEl.className = compMove;
});
