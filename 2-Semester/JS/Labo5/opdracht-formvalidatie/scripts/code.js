const setup = () => {
    const valideer = document.getElementById('Valideer');
    valideer.addEventListener('click', validatie);
}
const validatie = () => {
    console.log('works');
    //voornaam check
    const txtVoornaam = document.getElementById('txtVoornaam');
    if (txtVoornaam.value.length > 30) {
        const errVoornaam = document.getElementById('errVoornaam').innerText = 'max 30 karakaters';
        txtVoornaam.className ='errors';
        errors++;
    }
    //familienaam check
    const txtFamilienaam = document.getElementById('txtFamilienaam');
    if (txtFamilienaam.value.length > 50) {
        let errFamilienaam = document.getElementById('errFamilienaam').innerText = 'max 50 karakters';
        txtFamilienaam.className = 'errors';
    }
    //email check
    const txtEmail = document.getElementById('txtEmail');
    const emailSize = txtEmail.value.length;
    if (emailSize == 1 || emailSize ==3) {
        let errEmail = document.getElementById('errEmail').innerText = 'Geef geldige email adres';
        txtEmail.className = 'errors';
    }
    //kinderen check
    const kids = document.getElementById('nrKids');
    const nrKids = kids.value;
    if (nrKids <= 0) {
        let errKids = document.getElementById('errKids').innerText = 'is geen positief getal';
        kids.className = 'errors';
    }
    if (nrKids > 99) {
        let errKids = document.getElementById('errKids').innerText = 'is te vruchtbaar';
        kids.className = 'errors';
    }
    //als alles gelukt
    let errors = document.getElementsByClassName('errors').length;
    if (errors == 0) {
        alert('Proficiat');
    }
}
window.addEventListener("load", setup);
