const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener("click", go);


}

const go = ()=> {
    let commandText = document.getElementById('commandoInput').value;
    console.log(commandText);
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};


const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};
window.addEventListener("load", setup);
