const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener("click", addTafel);
}

const addTafel = () => {
    let number = Number(document.getElementById('txtStart').value);
    if (isNaN(number)) {
        alert("Geen geldige getal");
    } else {
        createTafel(number);
    }

}

const createTafel =(tafelNr) => {
    const time = new Date();
    const timePushed = time.toLocaleTimeString();
    let txtHeader = document.createTextNode('Tafel van ' + tafelNr + ' aangemaakt op ' + timePushed);
    //console.log(txtHeader);
    let tableBlock = document.getElementById('tafels');
    let table = createElementWithClassName('div', 'table');
    let header = createElementWithClassName('div', 'header');
    header.appendChild(txtHeader);
    table.appendChild(header);
    tableBlock.appendChild(table);
    for (let i=1; i <= 10; i++) {
        if (i % 2 ===0) {
            let row = createElementWithClassName('div', 'row');
            let txtMath = document.createTextNode('4 x '+ i + ' = ' +4*i);
            row.appendChild(txtMath);
            table.appendChild(row);
        } else {
            let row = createElementWithClassName('div', 'row-even');
            let txtMath = document.createTextNode('4 x '+ i + ' = ' +4*i);
            row.appendChild(txtMath);
            table.appendChild(row);
        }
    }
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const saveLocalStorage = (element) => {
    let localHistory;
}


window.addEventListener("load", setup);
