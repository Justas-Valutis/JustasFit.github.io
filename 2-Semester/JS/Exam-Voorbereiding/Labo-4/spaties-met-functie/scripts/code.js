const setup = () => {
    document.getElementById('submit').addEventListener('click', apply);
}

const apply = () => {
    let tekst = document.getElementById('txt').value;
    document.getElementById('output').innerHTML = tekst;
    let zoekWord = document.getElementById('txtZoek').value;
    const output = document.getElementById('outputZoekWord');
    output.innerHTML = zoek(zoekWord, tekst);

}

const zoek = (zoekWord, tekst) => {
    let output =document.getElementById('outputZoekWord');
    if (tekst.indexOf(zoekWord) !=-1) {
        return  "bevat word -" + zoekWord + " op de plaats" + tekst.indexOf(zoekWord);
    } else {
        return "tekst bevat dit word " +zoekWord + " niet";
    }
}

window.addEventListener("load", setup);
