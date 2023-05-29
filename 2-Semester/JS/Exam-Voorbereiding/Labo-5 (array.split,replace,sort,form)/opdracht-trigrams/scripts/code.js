const setup = () => {
    document.getElementById('submit').addEventListener('click', result);
}

const result = () => {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    for (let i = 0; i < input.length-2; i++) {
        // console.log(typeof i);
        // console.log(typeof i+2);
        let secondNr = i+3;
        console.log(input.slice(i, secondNr));
    }
}

window.addEventListener("load", setup);
