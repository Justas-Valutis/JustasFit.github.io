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

const save = swatch => {
    //takes swatch element values
    let red=document.getElementById('sldRed').value;
    let green=document.getElementById('sldGreen').value;
    let blue=document.getElementById('sldBlue').value;

    //creates swatch elemenets, by a click
    let sectionSwatches = document.getElementById('swatchComponents');
    let spanSwatches = document.createElement('span');
    spanSwatches.setAttribute('class', 'newSwatch');
    spanSwatches.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    spanSwatches.addEventListener('click', updateMainSwatch);


    //saves swatch element values to use on another function (updateMainSwatch)
    spanSwatches.setAttribute('data-red', red);
    spanSwatches.setAttribute('data-green', green);
    spanSwatches.setAttribute('data-blue', blue);

    //to remove swatch element by a click
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

const updateMainSwatch = event => {
    //getting the values of clicked swatch element
    const red = event.currentTarget.getAttribute('data-red');
    const green = event.currentTarget.getAttribute('data-green');
    const blue = event.currentTarget.getAttribute('data-blue');
    //giving the slider values of clicked swatch elelement
    document.getElementById('sldRed').value = red
    document.getElementById('sldBlue').value = blue;
    document.getElementById('sldGreen').value = green;
    update();


}

window.addEventListener("load", setup);
