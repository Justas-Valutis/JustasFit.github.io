const setup = () => {
    const value = document.getElementById('text-input');
    const button = document.getElementById('button');
    button.addEventListener('click', function() {split(value.value)});
}

let split = text => {
    let splitted = '';
    for (let i = 0; i < text.length; i++) {
        splitted += text.charAt(i) + ' ';
    }
    console.log(splitted);
}
window.addEventListener("load", setup);
