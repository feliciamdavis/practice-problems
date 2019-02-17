/**
 * Make page with a button that slides when clicked
 */

const button = document.querySelector('button');
button.addEventListener('mouseover', function () {
    const left = Math.floor(Math.random() * 500);
    const top = Math.floor(Math.random() * 500);
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;

});