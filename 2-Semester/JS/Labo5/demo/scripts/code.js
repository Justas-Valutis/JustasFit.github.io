const setup = () => {
    const vivesLogo = document.getElementById('vives-logo');
    vivesLogo.addEventListener("mouseover", change)
}

const change = () => {
    const vivesLogo = document.getElementById('vives-logo');
    const txtVives = document.getElementById('txt-Vives');
    vivesLogo.src = 'images/cat.jpeg';
    vivesLogo.alt = 'cat';
    txtVives.innerHTML = 'new picture cat'
}
window.addEventListener("load", setup);
