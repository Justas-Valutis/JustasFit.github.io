const setup = () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', formulier);
}

let formulier =() => {
    const roker = document.getElementById('cbRoker');
    if (roker.checked) {
        console.log('Is roker');
    } else {
        console.log('Is geen roker');
    }

    const moedertaal = document.getElementsByName('taal')
    for (let i=0; i < moedertaal.length; i++) {
        if(moedertaal[i].checked) {
            console.log('Moedertaal is ' + moedertaal[i].id)
        }
    }

    const favBuurland = document.getElementById('favBuurland').options;
    const selectedBuurland = favBuurland[favBuurland.selectedIndex];
    console.log('Favoriete buurland is ' + selectedBuurland.value)

    const bestelling = document.getElementById('bestelling').options;
    let bestellingSelection ='';
    for (let i=0; i < bestelling.length; i++) {
        if (bestelling[i].selected) {
            bestellingSelection += bestelling[i].value + ' ';
        }
    }

    console.log('Bestelling bestaat uit ' + bestellingSelection);
}
window.addEventListener("load", setup);
