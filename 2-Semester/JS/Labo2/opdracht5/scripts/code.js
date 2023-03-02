const setup = () => {
    let wijzigBTN = document.getElementById('wijzig');
    wijzigBTN.addEventListener("click", change)
}

const change = () => {
    let changeTXTOutput = document.getElementById('txtOutput');
    changeTXTOutput.className = 'txtOutput-change';
}

window.addEventListener("load", setup);
