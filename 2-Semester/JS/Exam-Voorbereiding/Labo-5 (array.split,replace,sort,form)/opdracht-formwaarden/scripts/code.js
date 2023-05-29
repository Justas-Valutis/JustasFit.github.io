const setup = () => {
    document.getElementById('btnResultaat').addEventListener('click', resultaat);
}

const resultaat =() => {
    //cheked box value opvragen
    const ckbRoker = document.getElementById('ckbRoker');
    if (ckbRoker.checked) {
        console.log("is roker")
    } else {
        console.log('is niet roker')
    }
    //radio button value opvragen
    const moedertaal = document.getElementsByName('rdbMoedertaal');
    for (let i=0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log('Moedertaal is '+ moedertaal[i].value);
            break;
        }
    }
    //element select gekozen optie opvragen
    let favBuurland = document.getElementById('favBuurland');
    let option = favBuurland.options[favBuurland.selectedIndex];
    console.log('Favorite buurland is ' + option.text);
    //multiple selected elements opvragen
    let bestelling = document.getElementById('bestelling');
    let afdrukkenBestelling = 'Je bestelling: '
    for (let i=0; i < bestelling.options.length; i++) {
        option = bestelling.options[i];
        if (option.selected) {
            afdrukkenBestelling += option.text + " ";
        }
    }
    console.log(afdrukkenBestelling);

}
window.addEventListener("load", setup);
