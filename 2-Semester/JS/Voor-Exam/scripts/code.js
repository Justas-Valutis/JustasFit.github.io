const setup = () => {
}
window.addEventListener("load", setup);

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createElementWithText = (element, text) => {
    let e = document.createElement(element);
    let txt = document.createTextNode(text);
    e.appendChild(txt);
    return e;
}

const saveLocalHistory = (title, commandoSuffix, url, color) => {
    let lstHistory;
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url,
        color: color
    }

    lstHistory = JSON.parse(localStorage.getItem('vives.be.history'));
    if (!lstHistory) {
        lstHistory=[];
    }

    lstHistory.push(historyObject);
    localStorage.setItem('vives.be.history', JSON.stringify(lstHistory));
}

const updateHistory = () => {
    const historyJSON = localStorage.getItem('vives.be.history');
    if (historyJSON) {
        const history = JSON.parse(historyJSON);
        let i = 0;
        while (i < history.length) {
            createCardAndAppend(history[i].title, history[i].text, history[i].url, history[i].color);
            i++;
        }
    }
}