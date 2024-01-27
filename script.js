const body = document.querySelector('body');
const clickbtn = document.querySelector('button');
let h1 = document.querySelector('h1');

changebg = () => {
    h1.innerText = 'Background-Color:'
    let colorsmath = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    body.style.backgroundColor = `rgb(${colorsmath[0]},${colorsmath[1]},${colorsmath[2]})`;
    let colors = colorsmath;
    h1.innerText += ` ${colors}`;
}

if(clickbtn.addEventListener('click', changebg));




