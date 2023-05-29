const setup = () => {
    let belangrijk = document.getElementsByClassName('belangrijk');
    for (let i=0; i < belangrijk.length; i++) {
        belangrijk[i].className = 'belangrijk opvallend';
    }
}
window.addEventListener("load", setup);
