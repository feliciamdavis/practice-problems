/**
 * Make page with button that shows a "hello world" alert pop up when clicked
 */

const button = document.querySelector('button');
button.addEventListener('click', function () {
    alert('hello world');
});