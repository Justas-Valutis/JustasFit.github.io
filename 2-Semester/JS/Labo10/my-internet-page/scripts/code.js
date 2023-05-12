const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener("click", go);
   updateHistory();

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
const go = ()=> {
    let command = document.getElementById('commandoInput');
    let commandText = command.value;
    let regex = commandText.match('\/[a-z]{1} [a-z]*');
    if (regex != null) {
        if (commandText.startsWith('\/t')) {
            window.open('https://twitter.com/hashtag/'+commandText.substring(3));
            createCardAndAppend('Twitter',commandText.substring(3), 'https://twitter.com/hashtag/'+commandText.substring(3), 'lightBlue');
            saveLocalHistory('Twitter', commandText.substring(3), 'https://twitter.com/hashtag/' +commandText.substring(3), 'lightBlue');
        } else if (commandText.startsWith('\/y')) {
            window.open('https://www.youtube.com/results?search_query='+commandText.substring(3));
            createCardAndAppend('Youtube',commandText.substring(3), 'https://www.youtube.com/results?search_query='+commandText.substring(3), 'red');
            saveLocalHistory('Youtube', commandText.substring(3), 'https://www.youtube.com/results?search_query=' +commandText.substring(3), 'red');
        } else if (commandText.startsWith('\/g')) {
            window.open('https://www.google.com/search?q='+commandText.substring(3));
            createCardAndAppend('Google',commandText.substring(3), 'https://www.google.com/search?q='+commandText.substring(3), 'dodgerblue');
            saveLocalHistory('Google', commandText.substring(3), 'https://www.google.com/search?q=' +commandText.substring(3), 'dodgerblue');
        } else if (commandText.startsWith('\/i')) {
            window.open('https://www.instagram.com/explore/tags/'+commandText.substring(3));
            createCardAndAppend('Instagram',commandText.substring(3), 'https://www.instagram.com/explore/tags/'+commandText.substring(3) ,'mediumpurple');
            saveLocalHistory('Instagram', commandText.substring(3), 'https://www.instagram.com/explore/tags/' +commandText.substring(3), 'mediumpurple');
        } else {
            alert('Unknown command');
        }
    } else {
        alert('Unkown command prefix');
    }
    command.value="";
}
const createCardAndAppend = (title, commandoSuffix, url, color) => {
    let col4 = createElementWithClassName('div', 'col-4');
    let card = createElementWithClassName('div', 'card');
    let tittleElement = createElementWithClassNameAndText('h5', 'card-tittle', title);
    let suffix = createElementWithClassNameAndText('h6', 'card-subtitle mb-2 text-muted', commandoSuffix);
    let linkButton = createLinkButton(url);
    card.appendChild(tittleElement);
    card.appendChild(suffix);
    card.appendChild(linkButton);
    col4.appendChild(card);
    let cardHistory = document.getElementsByClassName('row');
    card.style.backgroundColor = color;
    col4.style.backgroundColor = color;
    cardHistory[0].appendChild(col4);
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

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
window.addEventListener("load", setup);
