const setup = () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', updateText);
}

const updateText = () => {
    let text = document.getElementById('txt').value;
    let nr1 = document.getElementById('nr1').value;
    let nr2 = document.getElementById('nr2').value;
    let output = document.getElementById('result');
    let substring = text.substring(nr1, nr2);
    output.innerHTML = substring;
}
window.addEventListener("load", setup);
