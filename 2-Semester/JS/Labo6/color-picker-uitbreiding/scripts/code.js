const setup = () => {
    let sliders = document.getElementsByClassName('slider');
    for (let i=0; i < sliders.length; i++) {
        sliders[i].addEventListener('change', update);
        sliders[i].addEventListener('input', update);
    }
    update();
    document.getElementById('btnSave').addEventListener('click', save);
}

const update = () => {
    let red=document.getElementById('sldRed').value;
    let green=document.getElementById('sldGreen').value;
    let blue=document.getElementById('sldBlue').value;
    document.getElementById('lblRed').innerHTML=red;
    document.getElementById('lblGreen').innerHTML=green;
    document.getElementById('lblBlue').innerHTML=blue;
    let swatch = document.getElementById('swatch');
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

const save = () => {
    console.log("Werkt")
    let red=document.getElementById('sldRed').value;
    let green=document.getElementById('sldGreen').value;
    let blue=document.getElementById('sldBlue').value;

    let sectionSwatches = document.getElementById('swatchComponents');
    let spanSwatches = document.createElement('span');
    spanSwatches.setAttribute('class', 'newSwatch');
    spanSwatches.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    spanSwatches.addEventListener('click', updateMainSwatch);

    let remove = document.createElement('input');
    remove.setAttribute('class', 'remove')
    remove.type='button';
    remove.value='X';
    remove.addEventListener('click', removeSwatch);
    spanSwatches.appendChild(remove);
    sectionSwatches.appendChild(spanSwatches);
}

const removeSwatch = remove => {
    remove.target.parentElement.remove();
}

const updateMainSwatch = updateSwatch => {
    const red = updateSwatch.target.getElementById('sldRed').value;
    const green = updateSwatch.target.getElementById('sldGreen').value;
    const blue = updateSwatch.target.getElementById('blue').value;

    document.getElementById('lblRed').innerHTML=red;
    document.getElementById('lblGreen').innerHTML=green;
    document.getElementById('lblBlue').innerHTML=blue;

    let swatch = document.getElementById('swatch');
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}

window.addEventListener("load", setup);

// opletten by .value en .innerhtml