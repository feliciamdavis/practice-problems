/**
 * Make page with a button that moves once when clicked
 */

const button = document.querySelector('button');
button.addEventListener('click', function () {
    button.style.position = 'absolute';
    button.style.left = '75px';
    button.style.top = '50px';
});