let personen = [];

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById('lstPersonen')
    let persoon = {};
    if (lstPersonen.selectedIndex == -1) {
        vulPersoonOpBasisVanUserInterface(persoon);
        personen.push(persoon);
        voegPersoonToeAanLijstInUserInterface(persoon);
    } else {
        persoon = personen[lstPersonen.selectedIndex];
        vulPersoonOpBasisVanUserInterface(persoon);
        lstPersonen.selectedIndex.text = persoon.voornaam + " " + persoon.familieNaam;
        // const option = document.getElementsByTagName('option');
        // option.item(selectedIndex)
        //updatePersoon(); 
    }
   //personen.push(persoon); //toevoegen aan interne lijst

    console.log(personen);

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let lijstPersonen = document.getElementById('lstPersonen');
    document.getElementById('txtVoornaam').value ='';
    document.getElementById('txtFamilienaam').value ='';
    document.getElementById('txtGeboorteDatum').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('txtAantalKinderen').value = '';
    lijstPersonen.selectedIndex = -1;

    //let inputElem = document.querySelector('input[type=text]')

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.voornaam = document.getElementById('txtVoornaam').value.trim();
    persoon.familieNaam = document.getElementById('txtFamilienaam').value.trim();
    persoon.geborteDatum = document.getElementById('txtGeboorteDatum').value.trim();
    persoon.email = document.getElementById('txtEmail').value.trim();
    persoon.aantalKinderen = document.getElementById('txtAantalKinderen').value.trim();
}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let option = document.createElement('option');
    option.value = persoon.email;
    option.text = persoon.voornaam + ' ' + persoon.familieNaam;
    let lijstPersonen = document.getElementById('lstPersonen');
    lijstPersonen.appendChild(option);
    option.addEventListener('click', clickOnPersoon)
    //lijstPersonen.selectedIndex = -1;
}

const clickOnPersoon = event => {
    let person = personen.find(p => p.email === event.currentTarget.value);
    document.getElementById('txtVoornaam').value = person.voornaam;
    document.getElementById('txtFamilienaam').value = person.familieNaam;
    document.getElementById('txtGeboorteDatum').value = person.geborteDatum;
    document.getElementById('txtEmail').value = person.email;
    document.getElementById('txtAantalKinderen').value = person.aantalKinderen;
    let lijstPersonen = document.getElementById('lstPersonen');
}

