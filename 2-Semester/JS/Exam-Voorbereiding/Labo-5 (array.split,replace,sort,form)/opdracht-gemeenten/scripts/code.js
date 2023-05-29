const setup = () => {
    let stop = false;
    let tekst;
    let array =[];
    while(!stop) {
        tekst = window.prompt("geef gementen");
        if (tekst.trim().toLowerCase() ==='stop') {
            stop = true;
            array.sort(compare);
            console.log(array);
        } else {
            array.push(tekst);
        }
    }
    gementenToevoegen(array);
}

const compare = (a,b)=> {
    return a.localeCompare(b);
}

const gementenToevoegen = (array) => {
    let list = document.getElementById('list');
    let select = createElement('select');
    for (let i=0; i <array.length; i++) {
        let gemeente = document.createTextNode(array[i]);
        let option = createElement('option');
        option.appendChild(gemeente);
        select.appendChild(option);
    }
    list.appendChild(select);
}

const createElement = (element)=> {
    const createdElement = document.createElement(element);
    return  createdElement;
}
window.addEventListener("load", setup);
