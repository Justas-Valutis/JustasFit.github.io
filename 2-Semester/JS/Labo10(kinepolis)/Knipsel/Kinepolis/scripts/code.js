const setup = () => {
    createSeats();
    find();
}
let seats = [ false, true, false, true, true, true, false, true,
    false, false, true, false, false, true, false, true,
    true, true, true, true, true, true, false, true,
    true, true, true, false, true, false, false, true ];



const createSeats = () => {
    const stoelen = document.getElementById('stoelen');
    let i = 0;
    while (i < seats.length) {
        if (i%8 ===0) {
            let newLine = document.createElement('br');
            stoelen.appendChild(newLine);
        }

        if (seats[i]) {
            let seat = createElementWithClassName('img', 'seat');
            seat.setAttribute('src', 'images/seat_avail.png');
            stoelen.appendChild(seat);
        } else {
            let seat = createElementWithClassName('img', 'seat');
            seat.setAttribute('src', 'images/seat_unavail.png');
            stoelen.appendChild(seat);
        }
        i++;
    }
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const find = () => {
    let i = 0;
    let count = 0;
    let rij = 0;
    let finished = false;
    while (i < seats.length && !finished) {
        if (i%8 ===0) {
            count =0;
            rij ++;
        }
        if (seats[i]) {
            count++
            if (count===3) {
                let seatNr = i;
                let accept = confirm('Je hebt vrije plaats op rij ' + rij + ' seat ' + (seatNr-3)  + ' tot ' + seatNr);
                if (accept) {
                    finished = true;
                }
            }
        } else {
            count=0;
        }
        i++;
    }
}

window.addEventListener("load", setup);
