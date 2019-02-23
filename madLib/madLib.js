let blank1 = document.getElementById('blank1');
let blank2 = document.getElementById('blank2');
let blank3 = document.getElementById('blank3');
let blank4 = document.getElementById('blank4');
let blank5 = document.getElementById('blank5');
let blank6 = document.getElementById('blank6');
let blank7 = document.getElementById('blank7');
let blank8 = document.getElementById('blank8');
let blank9 = document.getElementById('blank9');
let blank10 = document.getElementById('blank10');
let blank11 = document.getElementById('blank11');
let blank12 = document.getElementById('blank12');
let blank13 = document.getElementById('blank13');
let blank14 = document.getElementById('blank14');
let blank15 = document.getElementById('blank15');
let blank16 = document.getElementById('blank16');
let blank17 = document.getElementById('blank17');
let blank18 = document.getElementById('blank18');
let blank19 = document.getElementById('blank19');
let madLib = document.getElementById('madLib');


function createMadLib() {
    let madLibText = `A vacation is when you take a trip to some ${blank1.value}
place with your ${blank2.value} family. Usually you go to some
place that is near a/an ${blank3.value} or up on a/an ${blank4.value}. A good vacation place
is one where you can ride ${blank5.value} or play ${blank6.value} or
go hunting for ${blank7.value}. I like to spend my time ${blank8.value}
or ${blank9.value}. When parents go on a vacation, they spend their
time eating three ${blank10.value} a day, and fathers play golf, and
mothers sit around ${blank11.value}. Last summer, my little brother
fell in a/an ${blank12.value} and got poison ${blank13.value} all over his
${blank14.value}. My family is going to go to (the) ${blank15.value}, and
I will practice ${blank16.value}. Parents need vacations more than
kids because parents are always very ${blank17.value} and because
they have to work ${blank18.value} hours every day all year making
enough ${blank19.value} to pay for the vacation.`;

    madLib.innerHTML = madLibText;
}

const button = document.querySelector('button');
button.addEventListener('click', createMadLib);