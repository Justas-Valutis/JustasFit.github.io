const setup = () => {
    document.getElementById('submit').addEventListener('click', convert);
}

const convert =() => {
    let word = document.getElementById('txt').value;
    let wordMetSpaties = '';
    for (let i=0; i < word.length; i++) {
        wordMetSpaties +=word.charAt(i)+ ' ';
    }
    let output = document.getElementById('spaties');
    output.innerHTML = wordMetSpaties;
}

window.addEventListener("load", setup);
