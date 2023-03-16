const setup = () => {
    let arrayGemeente = [];
    let stoppen = false;
    while (!stoppen) {
        let input = prompt('Geef gemeentes in');
        stoppen = (input==null || input.trim().toLocaleLowerCase() =='stop');
        if (!stoppen) {
            arrayGemeente.push(input);
        }
    }
    arrayGemeente.sort(compare);
    voegGemeentesToe(arrayGemeente);
}

const compare = (a, b) => {
    return a.localeCompare(b);
}

const voegGemeentesToe = (arrayGemeente) => {
    let div = document.getElementById('gemeentes')
    let htmlTekst = '<select>';
    for (let i=0; i < arrayGemeente.length; i++) {
        htmlTekst +='<option>' + arrayGemeente[i] + '</option>';
    }
    htmlTekst += '</select>';
    div.innerHTML = htmlTekst;
}
window.addEventListener("load", setup);
