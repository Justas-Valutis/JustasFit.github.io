const setup = () => {
    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', change);

    let arraySortTest = ['Citroen', 'Bicycle', 'Audi']
    arraySortTest.sort(compare);
    console.log(arraySortTest);
}
    const compare = (a,b) =>{
        return a.localeCompare(b);
    }

const change = () => {
    let txtInput = document.getElementById('txtInput').value;
    let array = txtInput.split(' '); //converting text to an array by spliting with space
    for (let i=0; i < array.length; i++) {
        if (array[i]==='de') {
            array[i] = 'het';
        }
    }
    txtInput = array.join(' '); // array converting to string met space
    document.getElementById('txtOutput').innerHTML = txtInput;
}
window.addEventListener("load", setup);
