const setup = () => {
    const btnHerbereken = document.getElementById('btnHerbereken');
    btnHerbereken.addEventListener('click', herberekn);
}

const herberekn = () => {
    const prijs = document.getElementsByClassName('prijs');
    const aantal = document.getElementsByClassName('aantal');
    const btw = document.getElementsByClassName('btw');
    const subtotaal = document.getElementsByClassName('subtotaal');
    const totaal =document.getElementById('totaal');

    let sum =0;
    for (let i=0; i < prijs.length; i++) {
        let optelling = ((parseInt(prijs[i].innerHTML) * aantal[i].value) * (1+parseInt(btw[i].innerHTML)/100)).toFixed(2);
        sum += Number(optelling);

        subtotaal[i].innerHTML = optelling + " Eur";

    }

    totaal.innerHTML = sum.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);
