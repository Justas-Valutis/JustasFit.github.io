const setup = () => {
    document.getElementById('submit').addEventListener('click', apply);
}

const apply = () => {
    let tekst = document.getElementById('txt').value;
    document.getElementById('output').innerHTML = tekst;
    let zoekWord = document.getElementById('txtZoek').value;
    const output = document.getElementById('outputZoekWord');
    if (zoekWord) {
        output.innerHTML = zoek(zoekWord, tekst);
    }

}

const zoek = (zoekWord, tekst) => {
    let index=0;
    let output ='';
    if (tekst.indexOf(zoekWord) !=-1) {
        while (tekst.indexOf(zoekWord) !=-1) {
            let index2 = tekst.indexOf(zoekWord);
            console.log(index2);
            tekst = tekst.substring(index2+zoekWord.length, tekst.length);
             output += " bevat word - " + zoekWord + " op de plaats" + (index + index2) + '<br>';
            index = index2;
        }
        return output;
    } else {
        return "tekst bevat dit word " +zoekWord + " niet";
    }
}

window.addEventListener("load", setup);
