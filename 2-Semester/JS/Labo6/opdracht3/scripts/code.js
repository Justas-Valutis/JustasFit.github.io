const setup = () => {

    const btn = document.getElementById('btn');
    btn.addEventListener('click', addPelement);
}

const addPelement = () => {
    const pElement = document.createElement('p');
    const myDiv = document.getElementById('myDIV');
    let text = document.createTextNode('dit is een nieuwe p element');
    pElement.appendChild(text);
    myDiv.appendChild(pElement);
}
window.addEventListener("load", setup);
