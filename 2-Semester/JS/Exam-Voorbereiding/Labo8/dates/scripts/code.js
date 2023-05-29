const setup = () => {
    let date = new Date();
    console.log(date);
    console.log(date.getDate()+' - ' + (date.getMonth()+1) +' - ' +date.getFullYear());
    let birthday = new Date ('1993-12-05')
    console.log('birthdate: ' +birthday);
    console.log((date-birthday)/((1000 * 60 * 60 * 24))/365);
    console.log('toISOString '+ date.toISOString());
    console.log('toDateString '+ date.toDateString());
    console.log('toTimeString '+ date.toTimeString());
    console.log('---')
    let person;
    console.log(person);
}
window.addEventListener("load", setup);
