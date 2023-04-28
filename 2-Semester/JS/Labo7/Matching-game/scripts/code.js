
const array = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png", "kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"];
let images =[];
let finished = false;
while (!finished) {
    let i =Math.floor(Math.random()* array.length);
    console.log(i);
    images.push("images/" + array[i]);
    array.splice(i, 1);
    if (array.length ==0) {
        finished = true;
    }
}

let CLICK_COUNT = 0;
let SRC1;
let SRC2;
let NUMBER;
let NUMBER2;
const REVERSE_SIDE = "http://localhost:63342/JustasFit.github.io/2-Semester/JS/Labo7/Matching-game/images/achterkant.png"
let IS_BUSSY = false;
let firstImage;

const setup = () => {
    //adding event listener on all image attributes
    let images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', flipCard);
    }

    //setting the same width for Headline area above the game area
    let gameAreaWidth = document.getElementById('gameArea').getBoundingClientRect().width;
    const headLine = document.getElementById('headLine');
    headLine.style.width = gameAreaWidth + 'px';
}

const flipCard = event => {
    if (!IS_BUSSY) {
        const movesCount = document.getElementById('movesCount');
        const headLine = document.getElementById('headLine');
        const gameArea = document.getElementById('gameArea');
        if (CLICK_COUNT == 0) {
            NUMBER = Number(event.target.getAttribute('alt'));
            SRC1 = "http://localhost:63342/JustasFit.github.io/2-Semester/JS/Labo7/Matching-game/" + images[NUMBER];
            event.currentTarget.src = SRC1;
            firstImage = event.currentTarget;
            firstImage.removeEventListener('click', flipCard);
            CLICK_COUNT++;
        } else {
            NUMBER2 = Number(event.target.getAttribute('alt'));
            SRC2 = "http://localhost:63342/JustasFit.github.io/2-Semester/JS/Labo7/Matching-game/" + images[NUMBER2];
            event.currentTarget.src = SRC2;
            CLICK_COUNT++;
        }
        //If it was clicked twice we start counting how many times played, and comnparing the values;
        if (CLICK_COUNT == 2) {
            firstImage.addEventListener('click', flipCard);
            movesCount.innerText = Number(movesCount.innerHTML) + 1;
            CLICK_COUNT = 0;
            //getting attributes with values on first and second click
            const picture1 = document.querySelectorAll('img[alt="' + NUMBER.toString() + '"]');
            const picture2 = document.querySelectorAll('img[alt="' + NUMBER2.toString() + '"]');
            //Comparing the images, and if they aren't equal flip the cards over;
            if (SRC1 == SRC2) {
                //removing event listener if it was guessed right
                picture1[0].removeEventListener('click', flipCard);
                picture2[0].removeEventListener('click', flipCard);
                headLine.style.backgroundColor = 'green';
                IS_BUSSY = true;
                setTimeout(function () {
                    headLine.style.backgroundColor = 'steelblue';
                    IS_BUSSY = false;
                }, 1000);
            } else {
                headLine.style.backgroundColor = 'red';
                gameArea.style.cursor = 'wait';
                IS_BUSSY = true;
                setTimeout(function () {
                    picture1[0].src = REVERSE_SIDE;
                    picture2[0].src = REVERSE_SIDE;
                    headLine.style.backgroundColor = 'steelblue';
                    gameArea.style.cursor = 'auto';
                    IS_BUSSY = false;
                }, 2000);

            }
        }
    }
}

window.addEventListener("load", setup);
