const setup = () => {
    let sliders = document.getElementsByClassName('slider');
    for (let i=0; i < sliders.length; i++) {
        sliders[i].addEventListener('change', update);
    }
    document.getElementById('btnSave').addEventListener('click', save);
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

const save = () => {
    const sldRed = document.getElementById('sldRed').value;
    const sldGreen = document.getElementById('sldGreen').value;
    const sldBlue = document.getElementById('sldBlue').value;
    const gallerySavings = document.getElementById('saved');
    let saved = document.createElement('span');
    saved.className = 'colorBoxSaved'
    saved.style.backgroundColor = 'Rgb('+sldRed+','+sldGreen+','+sldBlue+')';
    gallerySavings.appendChild(saved);
    saved.addEventListener('click', updateFromSaved);
    saved.setAttribute('data-red', sldRed);
    saved.setAttribute('data-green', sldGreen);
    saved.setAttribute('data-blue', sldBlue);

    //delete
    let remove = document.createElement('input');
    remove.setAttribute('type', 'button');
    remove.setAttribute('value', 'x');
    saved.appendChild(remove);
    remove.addEventListener('click', removeEas);

}

const removeEas = event => {
    event.target.parentElement.remove();
}

const updateFromSaved = event => {
    let red = event.target.getAttribute('data-red');
    let green = event.target.getAttribute('data-green');
    let blue = event.target.getAttribute('data-blue');
    document.getElementById('sldRed').value=red;
    document.getElementById('sldGreen').value=green;
    document.getElementById('sldBlue').value=blue;
    update();
}
window.addEventListener("load", setup);
