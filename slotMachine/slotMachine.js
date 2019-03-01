/**
 * Make a page with a button that shows 3 random images, each from the same set of a
 * few different kinds (e.g., slots)
 */

const images = [
    'avocado',
    'blackberry',
    'blueberry',
    'cherry',
    'lime',
    'pineapple',
];

const image1El = document.getElementById('img1');
const image2El = document.getElementById('img2');
const image3El = document.getElementById('img3');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function () {
    const imageAt1 = Math.floor(Math.random() * images.length);
    const imageAt2 = Math.floor(Math.random() * images.length);
    const imageAt3 = Math.floor(Math.random() * images.length);
    const image1 = images[imageAt1];
    const image2 = images[imageAt2];
    const image3 = images[imageAt3];
    image1El.className = image1;
    image2El.className = image2;
    image3El.className = image3;
});