const setup = () => {
    const button = document.getElementById('button')
    button.addEventListener('click', split)
}

let split = () => {
    const text = document.getElementById('text-input').value;

    let splitted = '';
    for (let i=0;i < text.length; i++) {
        splitted += text.charAt(i) + ' ';
    }

    console.log(splitted);
}
window.addEventListener("load", setup);
