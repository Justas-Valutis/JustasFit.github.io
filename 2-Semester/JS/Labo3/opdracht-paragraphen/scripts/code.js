const setup = () => {
    let changeBelangrijk = document.getElementsByClassName('belangrijk');
    let i;
    for (i=0; i < changeBelangrijk.length; i++) {
        //changeBelangrijk[i].classList.add('opvallend');
        changeBelangrijk[i].className += ' opvallend';
    }
}
window.addEventListener("load", setup);
