const setup = () => {
    let numberArray = [10, 2, 8, 1, 9]
    numberArray.sort(compare);
    console.log(numberArray); //drukt af: 1,2,8,9,10
}
const compare =(a,b) => {
    return a-b;
}
window.addEventListener("load", setup);
