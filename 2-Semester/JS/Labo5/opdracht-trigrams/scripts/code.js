const setup = () => {

}
window.addEventListener("load", setup);

const splits = 'onoorbaar';
for (let i=0; i < splits.length-2; i++) {
    console.log(splits.slice(i,3+i))
}