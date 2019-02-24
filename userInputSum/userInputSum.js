const number1El = document.getElementById('number1');
const number2El = document.getElementById('number2');
const totalSumEl = document.getElementById('totalSum');

function userInputSum(){
    const number1String = number1El.value;
    const number2String = number2El.value;
    const number1 = Number.parseInt(number1String);
    const number2 = Number.parseInt(number2String);
    const total = number1 + number2;
    totalSumEl.innerHTML = total;
}

const button = document.querySelector('button');
button.addEventListener('click', userInputSum);