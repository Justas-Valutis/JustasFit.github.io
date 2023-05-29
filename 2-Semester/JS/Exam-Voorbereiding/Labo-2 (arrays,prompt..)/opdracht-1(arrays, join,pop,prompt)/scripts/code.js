const setup = () => {
    const array = ['Trump', 'Biden', 'Clinton', 'Carter', 'Washington'];
    console.log(array.length);
    console.log(array[0] +"\n" +array[2] + "\n" + array[4]);
    // const txt = prompt('Geef de naam');
    // if (txt) {
    //     array.push(txt)
    // }
    // console.log(array);
    console.log(array.join(', '));
    let pop = array.pop();
    console.log(pop);
    console.log(array);


    let message = prompt('Geef de naam')
    let alert = window.alert('Dit is een melding');
    let boolean = window.confirm('Ben je een man of een voruw?')
    window.prompt('wat is je naam', 'onbekend');
    //(geeft de direct de waarde in a message onbekend'
    document.getElementById('btn').addEventListener('click', changeText);
}

const changeText = () => {
    let text = document.getElementsByTagName('span');
    text[0].innerHTML = 'It is changed';
}
window.addEventListener("load", setup);
