const setup = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";

    let wijzigBTN = document.getElementById('wijzig');
    wijzigBTN.addEventListener("click", change)
}

const change = () => {
    let wijzigBTN = document.getElementById('txtOutput');
    wijzigBTN.className = 'txtOutput-change';
}

window.addEventListener("load", setup);
