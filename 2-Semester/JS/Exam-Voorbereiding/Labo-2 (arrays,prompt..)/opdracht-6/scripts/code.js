const setup = () => {
    let btnKopieer = document.getElementById('btnKopieer');
    btnKopieer.addEventListener('click', kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById('txtInput');
    let tekst = txtInput.value;
    let pEleement = document.getElementById('txtOutput');
    pEleement.innerHTML = tekst;
}
window.addEventListener("load", setup);
