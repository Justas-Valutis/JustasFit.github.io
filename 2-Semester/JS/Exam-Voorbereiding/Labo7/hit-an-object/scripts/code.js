let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur IMAGE_PATH_PREFIX: "images/", // map van de figuren IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
}
const setup = () => {
    document.getElementById('imgX').addEventListener('click', outcome);
    document.getElementById('btnStart').addEventListener('click', start)
}

const start = () => {
    setInterval(verplaats, 2000);
    setInterval(changeImage, 2000);
}
const outcome = () => {
    let src = document.getElementById('imgX').getAttribute('src');
    if (src === 'images/0.png') {
        alert("boom")
    } else {
        global.score ++;
        verplaats();
    }

}

const changeImage = () => {
    let imageNr = Math.floor(Math.random()*5);
    console.log(imageNr);
    let img = document.getElementById('imgX');
    img.setAttribute('src', 'images/'+imageNr+'.png');
}

const verplaats = () => {
    const img =document.getElementById('imgX');
    img.style.left = Math.random() *552 +"px";
    img.style.top = Math.random()*752 +"px";
}
window.addEventListener("load", setup);
