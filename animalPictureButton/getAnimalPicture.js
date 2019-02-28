/**
 * Make page with a button that shows a cute animal picture when clicked
 */

const pictures = [
    'bird',
    'corgi',
    'fawn',
    'ferret',
    'hedgehog',
    'kitten',
    'otter',
    'puppies',
    'rabbit',
    'sloth',
    'tiger',
];
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function () {
    const pictureEl = document.getElementById('picture');
    const pictureAt = Math.floor(Math.random() * pictures.length);
    const picture = pictures[pictureAt];
    pictureEl.className = picture;
});