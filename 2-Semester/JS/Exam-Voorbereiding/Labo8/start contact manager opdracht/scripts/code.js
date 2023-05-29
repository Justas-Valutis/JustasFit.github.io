let personen = [];

const setup = () => {
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    document.getElementById('btnBewaar').addEventListener('click', save);
    let storage = localStorage.getItem('labo8');
    if (storage !==null) {
        let lijst = document.getElementById('lstPersonen');
        storage = JSON.parse(storage);
        for (let i=0; i < storage.length; i++) {
            document.getElementById('txtVoornaam').value = storage[i].voornaam;
            document.getElementById('txtFamilienaam').value = storage[i].familieNaam;
            document.getElementById('txtGeboorteDatum').value = storage[i].geborteDatum;
            document.getElementById('txtEmail').value = storage[i].email;
            document.getElementById('txtAantalKinderen').value= storage[i].kinderen;
            let option = document.createElement('option');
            let text = document.createTextNode(storage[i].voornaam + ' ' + storage[i].familieNaam);
            option.appendChild(text);
            lijst.appendChild(option);
            option.addEventListener('click', display);

        }
    }
};

const bewerkNieuwePersoon = () => {
    document.getElementById('txtVoornaam').value ='';
    document.getElementById('txtFamilienaam').value ='';
    document.getElementById('txtGeboorteDatum').value ='';
    document.getElementById('txtEmail').value ='';
    document.getElementById('txtAantalKinderen').value='';
    let lijstPersonen = document.getElementById('lstPersonen');
    lijstPersonen.selectedIndex = -1;
};

const save = () => {
    let lijstPersonen = document.getElementById('lstPersonen');
    if (lijstPersonen.selectedIndex === -1) {
        fillPersoon();
    } else {
        fillPersoon();
    }
}

const fillPersoon = () => {
    let lijstPersonen = document.getElementById('lstPersonen');
    let voornaam = document.getElementById('txtVoornaam').value;
    let familienaam = document.getElementById('txtFamilienaam').value;
    let geboortedatum = document.getElementById('txtGeboorteDatum').value;
    let email = document.getElementById('txtEmail').value;
    let kinderen = document.getElementById('txtAantalKinderen').value;
    let persoon = {};
    if (lijstPersonen.selectedIndex ===-1) {
        persoon.voornaam = voornaam;
        persoon.familieNaam = familienaam;
        persoon.geborteDatum = geboortedatum;
        persoon.email = email;
        persoon.kinderen = kinderen;
        personen.push(persoon);
        let option = document.createElement('option');
        option.setAttribute('email', email);
        let text = document.createTextNode(voornaam + ' ' + familienaam);
        option.appendChild(text);
        lijstPersonen.appendChild(option);
        option.addEventListener('click', display);
        let jsonStorage = JSON.stringify(personen); // personen=[] is array met objecten
        localStorage.setItem('labo8', jsonStorage);
    } else {
       persoon = personen.find(p => p.email === email);
       persoon.voornaam  = voornaam;
       persoon.familieNaam = familienaam;
       persoon.geborteDatum =  geboortedatum;
       persoon.email =  email;
       let option =lijstPersonen.options[lijstPersonen.selectedIndex];
       option.setAttribute('email', email);
       persoon.kinderen = kinderen;
       option.text = persoon.voornaam +' '+ persoon.familieNaam;
        let jsonStorage = JSON.stringify(personen);
        localStorage.setItem('labo8', jsonStorage);
    }

}
const display = () => {
    let lijstPersonen = document.getElementById('lstPersonen');
    let savedEmail = lijstPersonen.options[lijstPersonen.selectedIndex].getAttribute('email');
    let person = personen.find(p => p.email === savedEmail);
    document.getElementById('txtVoornaam').value = person.voornaam;
    document.getElementById('txtFamilienaam').value = person.familieNaam;
    document.getElementById('txtGeboorteDatum').value = person.geborteDatum;
    document.getElementById('txtEmail').value = person.email;
    document.getElementById('txtAantalKinderen').value = person.kinderen;
}


window.addEventListener("load", setup);