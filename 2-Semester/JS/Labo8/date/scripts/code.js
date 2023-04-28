const setup = () => {
    let start = new Date();
    console.log(start);
    console.log(start.getDay());     //dag van de week, op zondag zal het 0 afdrukken!!!
    console.log(start.getMonth()); // drukt af mand nummer -1
    console.log(start.getMonth()+1); // oplossing +1 schrijven
    console.log(start.getFullYear());
    console.log(start.getDate()); //dag van de mand
    console.log(start.getDate()+'-'+Number(start.getMonth()+1)+'-'+start.getFullYear()+' ' +start.getHours()
                +':'+start.getMinutes()+':'+start.getSeconds()); //Number functie niet nodig, genoeg (start.geMonth()+1)
    let birthDate = new Date('1993-12-05T23:15:30');
    console.log(birthDate);
    console.log((start-birthDate)/(1000 * 60 * 60 * 24)); // berekenen hoeveel dagen leef je nog

    let birth = new Date (2023, 0,1);
    console.log(birth);
console.log('-------------------');
    let today = new Date('2023-04-21T10:15:30');
    console.log('toISOString '+ today.toISOString());
    console.log('toDateString '+ today.toDateString());
    console.log('toTimeString '+ today.toTimeString());
}
window.addEventListener("load", setup);
