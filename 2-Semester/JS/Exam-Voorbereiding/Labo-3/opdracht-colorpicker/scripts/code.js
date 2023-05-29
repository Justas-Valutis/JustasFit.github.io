const setup = () => {
    let sliders = document.getElementsByClassName('slider');
    for (let i=0; i < sliders.length; i++) {
        sliders[i].addEventListener('change', update);
    }
}

const update = () => {
    const sldRed = document.getElementById('sldRed').value;
    const sldGreen = document.getElementById('sldGreen').value;
    const sldBlue = document.getElementById('sldBlue').value;

    const nRed = document.getElementById('nRed');
    const nGreen = document.getElementById('nGreen');
    const nBlue = document.getElementById('nBlue');

    nRed.innerHTML = sldRed;
    nGreen.innerHTML = sldGreen;
    nBlue.innerHTML = sldBlue;

    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = 'Rgb('+sldRed+','+sldGreen+','+sldBlue+')';

}
window.addEventListener("load", setup);
