const setup = () => {
    let btnHerbereken = document.getElementById('btnHerbereken');
    btnHerbereken.addEventListener('click', change);
}

const change = () => {
    let prijzen = document.getElementsByClassName('prijs');
    let input = document.getElementsByClassName('input');
    let btw = document.getElementsByClassName('btw');
    let subtotalen = document.getElementsByClassName('subtotaal');
    let totaal = 0;
    for (let i=0; i < prijzen.length;i++) {
        const prijs = parseInt(prijzen[i].innerHTML);
        const aantal = parseInt(input[i].value);
        const btwTarief = parseInt(btw[i].innerHTML);
        totaal +=prijs *aantal * (1+btwTarief/100);
        subtotalen[i].innerHTML = (prijs *aantal * (1+btwTarief/100)).toFixed(2) + ' Eur';
    }
    let changeTotal = document.getElementById('totaal');
    changeTotal.innerHTML = totaal.toFixed(2) + ' Eur';
}
window.addEventListener("load", setup);


