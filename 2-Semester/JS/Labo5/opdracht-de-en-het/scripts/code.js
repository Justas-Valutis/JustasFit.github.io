const setup = () => {
}
window.addEventListener("load", setup);

// let zin='Gisteren zat de jongen op de stoep en at de helft van de appel';
// while (zin.includes('de')) {
// zin = zin.replace('de', 'het');
// }
// console.log(zin);

let zin='Gisteren zat de jongen op de stoep en at de helft van de appel';
let wordArray = zin.split(' ');
for (let i=0; i < wordArray.length; i++) {
    if (wordArray[i] ==='de') {
        wordArray[i] = 'het';
    }
}

let afrdukken ='';
for (let i=0; i < wordArray.length; i++) {
    afrdukken +=  wordArray[i] + ' ';
}

console.log(afrdukken);


// let vervangAlles = (bronTekst, oud, nieuw) => {
//     let result = bronTekst;
//     let idx=result.indexOf(oud);
//     while (idx !=-1) {
//         let voor = result.slice(0, idx);
//         let na = result.slice(idx+oud.length, result.length);
//         result = voor + nieuw +na;
//         idx = result.indexOf(oud, idx+nieuw.length);
//     }
//     return result;
// }