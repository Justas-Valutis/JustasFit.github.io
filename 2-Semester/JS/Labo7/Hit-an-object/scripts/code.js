
const setup = () => {
    //button creation, interval creation and starting the game by clicking the button
    const BTNstart = document.getElementById('BTNstart');
    let intervalFunctie;
    BTNstart.addEventListener('click', () => {intervalFunctie=setInterval(play, 1000)});



}



let global = {
    IMAGE_COUNT:5,
    IMAGE_SIZE:48,
    IMAGE_PATH_PREFIX:"images/",
    IMAGE_PATH_SUFFIX:".png",
    MOVE_DELAY:3000,
    score:0,
    timeoutid:0
}
const play =() => {
    //delete button
    const BTNstart = document.getElementById('BTNstart');
    BTNstart.style.display='none';

    //window.alert('opgeclickt');
    const target = document.getElementById('target');
    //change location
    const height = Math.random()*552;
    const top = Math.random()*752;
    target.style.left=height +'px';
    target.style.top=top + 'px';

    //changing picture
    const imageNr = Math.floor(Math.random()*(global.IMAGE_COUNT));
    target.src=global.IMAGE_PATH_PREFIX + imageNr + global.IMAGE_PATH_SUFFIX;

    //Getting image click and Counting aantal hits
    const image = document.getElementById('target');
    image.addEventListener('click', updateCounter);

}

const updateCounter = () => {
    const hitsCounter = document.getElementById('hits');
    const image = document.getElementById('target');
    console.log(image.src);
    if (image.src=="http://localhost:63342/JustasFit.github.io/2-Semester/JS/Labo7/Hit-an-object/" +global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) {
        window.alert('Game over');
    } else {
        hitsCounter.innerHTML = Number(hitsCounter.innerHTML) +1;
    }
}

window.addEventListener("load", setup);


