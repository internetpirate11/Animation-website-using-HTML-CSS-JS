let text = document.getElementById('text');
let moon = document.getElementById('moon');
let snow = document.getElementById('snow');
let leftMountain = document.getElementById('left-mountain');
let rightMountain = document.getElementById('right-mountain');
let btn = document.getElementById('btn');


window.addEventListener('scroll', function() {
    let value = window.scrollY;

    text.style.top = 57 + value * -0.5 + '%';

    moon.style.top = value * -0.5 + '%';
    snow.style.top = value * 1 + 'px';
    leftMountain.style.left = value * -0.5 + 'px';
    rightMountain.style.left = value * 0.5 + 'px';
    btn.style.marginTop = value * 2 + 'px';


})