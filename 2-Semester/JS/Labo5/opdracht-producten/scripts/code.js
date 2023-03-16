const setup = () => {
    const aantal = document.getElementsByClassName('aantal');
    for (let i = 0; i < aantal.length; i++) {
        aantal[i].addEventListener('change', bereken);
    }
}

const bereken = () => {
    const prijs = document.getElementsByClassName('prijs');
    const aantal = document.getElementsByClassName('aantal');
    const btw = document.getElementsByClassName('btw');
    const subtotaal = document.getElementsByClassName('subtotaal');
    const totaal =document.getElementById('totaal');

    let sum =0;
    for (let i=0; i < prijs.length; i++) {
        let optelling = parseFloat((parseInt(prijs[i].innerHTML) * parseInt(aantal[i].value)) * (1+parseInt(btw[i].innerHTML)/100).toFixed(2));
        sum += optelling;

        subtotaal[i].innerHTML = optelling.toFixed(2).replace('.', ',') + " Eur";

    }

    totaal.innerHTML = sum.toFixed(2).replace('.', ',') + " Eur";
}
window.addEventListener("load", setup);
