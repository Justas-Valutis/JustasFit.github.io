const setup = () => {
    let btnTry=document.getElementById('btnTry');

    //Event-based programming /prefix zeer belangrijk button moet altijd beginenn met btn en text met txt!
    // op examen 1 punt minder als wij niet gebruiken prefix bij id btn!!!!!!!!!!
    btnTry.addEventListener('mouseover', mouseHover);
    btnTry.addEventListener('click', onClick);
    btnTry.addEventListener('mouseout', mouseOut);


    // event Listener css
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"


   document.getElementById("btnContent").addEventListener("click", changeContent);

}

const mouseHover = () => {
    document.getElementById('event').innerHTML += 'Mouse Hoevered! <br>';
}

const onClick = () => {
    document.getElementById('event').innerHTML += 'Mouse clicked! <br>';
}

const mouseOut = () => {
    document.getElementById('event').innerHTML += 'Mouse out! <br>';
}

const withoutBullets = () => {
    // getEelementsByTagName  word altijd een ARRAY!!!!
    let i;
    let listItems = document.getElementsByTagName('li');
    for (i=0; i < listItems.length; i++) {
        // eerste manier
        // listItems[i].style.listStyleType='none';
        // listItems[i].style.backgroundColor='red';

        // twede manier
        //listItems[i].className = 'listItemsStyleNone colorRed';
        // hier voegt hij klasses aaan de li elementen <li class = "listItemsStyleNone colorRed">

        //derde manier
        if (listItems[i].classList.contains('colorWhite')) {
            listItems[i].classList.remove('colorWhite')
        }
        listItems[i].classList.add('listItemsStyleNone');
        listItems[i].classList.add('colorRed');
        console.log('output ' + listItems[i].className);
    }
}

const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName('li');
    for (i=0; i <listItems.length; i++) {
        //eerste manier
       // listItems[i].style.listStyleType='disc';
        //listItems[i].style.backgroundColor='white';

        //tweede manier
        //listItems[i].className = 'listItemsStyleDisc colorWhite';

        //derde manier
        listItems[i].classList.add('listItemsStyleDisc');
        listItems[i].classList.add('colorWhite');
        console.log('output ' + listItems[i].className);
    }


}

//eventListeners difference between "textContent" and "innerHTML"
const changeContent = () => {
    debugger;
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);
