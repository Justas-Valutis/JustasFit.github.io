const setup = () => {
    const substringElement = document.getElementById('button');
    substringElement.addEventListener('click', substring);
}

const substring = () => {
    const input = document.getElementById('input').value;
    const nr1 = document.getElementById('number1').value;
    const nr2 = document.getElementById('number2').value;
    const value = document.getElementById('output');
    value.innerHTML = input.substring(nr1, nr2);
}

window.addEventListener("load", setup);
