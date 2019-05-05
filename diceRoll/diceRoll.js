const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function () {
    for (let index = 1; index <= 5; index++) {
        const idString = `img${index}`;
        const imgEl = document.getElementById(idString);
        const dieNumber = Math.floor(Math.random() * 6) + 1;
        const imgClass = `die die${dieNumber}`;
        imgEl.className = imgClass;
    }

});
