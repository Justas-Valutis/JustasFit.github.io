let objecten = [];

const setup = () => {
    document.getElementById('btnGO').addEventListener('click', go);
    updateFromLocalStorage();
}

const go = () => {
    let input = document.getElementById('txtInput').value;
    let title ='';
    let zoekWord = '';
    let link = '';
    let backgroundColor = '';
    let btnColor = '';
    let boolean = false;
    if (input.startsWith('\/g')) {
        zoekWord = input.substring(3);
        link = 'https://www.google.com/search?q=' +zoekWord;
        window.open(link);
        boolean = true;
        title = 'Google';
        backgroundColor = 'blue';
        btnColor = 'orangered';
    } else if (input.startsWith('\/y')) {
        zoekWord = input.substring(3);
        link = 'https://www.youtube.com/results?search_query=' + zoekWord;
        window.open(link);
        boolean = true;
        title = 'Youtube'
        backgroundColor = 'red';
        btnColor = '#2B2D42';
    } else if (input.startsWith('\/t')) {
        zoekWord = input.substring(3);
        link =  'https://twitter.com/hashtag/'+zoekWord;
        window.open(link);
        boolean = true;
        title = 'Twitter'
        backgroundColor = 'lightblue';
        btnColor = '#2B2D42';
    } else if (input.startsWith('\/i')) {
        zoekWord = input.substring(3);
        link = 'https://www.instagram.com/explore/tags/' + zoekWord;
        window.open(link);
        boolean = true;
        title = 'Instagram'
        backgroundColor = 'purple';
        btnColor = 'orange';
    } else if (input.startsWith('\/')) {
        window.alert('Unknown command');
    } else {
        window.alert('preffix vergeten');
    }

    if (boolean) {
        createCard(title, zoekWord, link, backgroundColor, btnColor);
        saveObject(title, zoekWord, link, backgroundColor, btnColor);
    }
}

const saveObject = (title, zoekWord, link, backgroundColor, btnColor) => {
    let object = {};
    object = {
        title: title,
        zoekWord: zoekWord,
        link: link,
        backgroundColor: backgroundColor,
        btnColor: btnColor
    }
    objecten.push(object);
    objectenJson = JSON.stringify(objecten);
    localStorage.setItem('labo-10', objectenJson);
}

const updateFromLocalStorage = () => {
    let objecten = localStorage.getItem('labo-10');
    if (objecten) {
        objecten = JSON.parse(objecten);
        let i=0;
        while (i < objecten.length) {
            createCard(objecten[i].title, objecten[i].zoekWord, objecten[i].backgroundColor, objecten[i].btnColor);
            i++;
        }
    }
}

const createCard = (title, zoekWord, link, backgroundColor, btnColor) => {
    let cardHistory = document.getElementById('history');
    let divCard = createElementWithClass('div', 'card');
    let cardBody = createElementWithClass('div',  'card-body')
    let cardTitle = createElementWithClassNameAndText('h5', 'card-title', title);
    let cardText = createElementWithClassNameAndText('p', 'card-text', zoekWord);
    let btnGO = createBtnGO(link);
    cardTitle.style.color = 'white';
    cardText.style.color = 'white';
    btnGO.style.backgroundColor = btnColor;
    //appending
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnGO);
    divCard.appendChild(cardBody);
    divCard.classList.add('col-3');
    divCard.style.backgroundColor = backgroundColor;
    divCard.style.margin ='10px';
    cardHistory.appendChild(divCard);
}

const createElementWithClass = (element, className)=> {
    let newElement = document.createElement(element);
    newElement.setAttribute('class', className);
    return newElement;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let newElement = document.createElement(element);
    newElement.setAttribute('class', className);
    newElement.appendChild(document.createTextNode(text));
    return newElement;
}

const createBtnGO = (link) => {
    let btnGO = createElementWithClassNameAndText('a', 'btn btn-primary', 'Go!');
    btnGO.setAttribute('href', link);
    return btnGO;
}


window.addEventListener("load", setup);
