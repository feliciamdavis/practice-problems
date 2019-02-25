/**
 * Make a page with two inputs, an operator selector(+,-,*,/) and a button that
 * calculates the value.
 */

const number1El = document.getElementById('number1');
const number2El = document.getElementById('number2');
const totalEl = document.getElementById('total');
const operatorStringEl = document.getElementById('operator');

function getEquationAnswer(){
    const number1String = number1El.value;
    const number2String = number2El.value;
    const operatorString = operatorStringEl.value;
    const number1 = Number.parseInt(number1String);
    const number2 = Number.parseInt(number2String);

    let total;
    if (operatorString === '+') {
        total = number1 + number2;
    }
    else if (operatorString === '-') {
        total = number1 - number2;
    }
    else if (operatorString === '*') {
        total = number1 * number2;
    }
    else if (operatorString === '/') {
        total = number1 / number2;
    }

    totalEl.innerHTML = total;
}

const button = document.querySelector('button');
button.addEventListener('click', getEquationAnswer);