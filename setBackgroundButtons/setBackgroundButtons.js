/**
 * Make a page with 5 buttons that change the background color
 */

const purple = document.querySelector('button#purple');
purple.addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple';
});

const green = document.querySelector('button#green');
green.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

const blue = document.querySelector('button#blue');
blue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});

const red = document.querySelector('button#red');
red.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});

const orange = document.querySelector('button#orange');
orange.addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
});