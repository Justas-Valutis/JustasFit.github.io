const setup = () => {
    let btnValideer = document.getElementById('btnValideer');
    btnValideer.addEventListener('click', valideer);
}

const valideer = () => {
    // const voornaam = document.getElementById('txtVoornaam');
    // valideerVoornaam(voornaam.value, voornaam);
    // const familienaam = document.getElementById('txtFamilienaam');
    // valideerFamiyName(familienaam);
    // const email = document.getElementById('txtEamils');
    // valideerEmails(email);
    valideerKindjes();
}

window.addEventListener("load", setup);

const valideerVoornaam = (voornaam, element) => {
    if (voornaam.length >30) {
        let errVoornaam = document.getElementById('errVoornaam');
        let tekst = document.createTextNode('Max 30 karakters');
        errVoornaam.appendChild(tekst);
        geefClassName(element);
        geefRodeTekst(errVoornaam);
    }
}

const valideerFamiyName = (famName) => {
    if (famName.value.length ===0) {
        geefClassName(famName);
        let tekst = document.createTextNode('Verplicht veld');
        let errFamName = document.getElementById('errFamilienaam');
        errFamName.appendChild(tekst);
        geefRodeTekst(errFamName);
    } else if (famName.value.length >50) {
        geefClassName(famName);
        let tekst = document.createTextNode('max 50 karakters');
        let errFamName = document.getElementById('errFamilienaam');
        errFamName.appendChild(tekst);
        geefRodeTekst(errFamName);
    }
}

const valideerEmails = (email) => {
    let err = document.getElementById('errEmail');
    if (!email.value.length) {
        err.innerHTML = 'Verplicht veld';
    } else if (email.value.length===1) {
        err.innerHTML = 'Geen geldig email address';
    } else if (email.value.indexOf('@')===-1) {
        err.innerHTML = 'Geen geldig email address';
    } else if (email.value.indexOf('@')===1) {
        err.innerHTML = 'Geen geldig email address';
    } else if (email.value.indexOf('@')+1===email.value.length || email.value.indexOf('@')+2=== email.value.length) {
        err.innerHTML='blabla';
    }
}

const valideerKindjes =() => {
    const txtKidnjes = document.getElementById('txtKinderen').value;
    const kindjes = parseInt(txtKidnjes);
    const errKids = document.getElementById('errKids');
    if (kindjes < 0) {
        errKids.innerHTML = 'Is geen positief getal';
    } else if (kindjes > 99) {
        errKids.innerHTML = 'is te vruchbaar';

    }
}
const geefClassName = (element) => {
    element.className = 'error';
}

const geefRodeTekst =(element) => {
    element.className = 'rodeTekst';
}