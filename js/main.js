const sizeUp = document.querySelector('.sizeup');
const sizeDown = document.querySelector('.sizedown');
const colorChange = document.querySelector('.color');
const paragraf = document.querySelector('p');

let i = 1.6;
let color = Math.random;

sizeUp.addEventListener('click', function () {
    i += .5;
    paragraf.style.fontSize = i + 'rem';
});

sizeDown.addEventListener('click', function () {
    i -= .5;
    paragraf.style.fontSize = i + 'rem';
});

colorChange.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    paragraf.style.color = `rgb(${r},${g},${b})`;
});