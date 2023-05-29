const setup = () => {
    let arraySortTest = ['Citroen', 'Bicycle', 'Audi']
    arraySortTest.sort(compare);
    console.log(arraySortTest); //drukt af: audi, bicycle, citroen
}
const compare = (a,b) =>{
    return a.localeCompare(b);
}
window.addEventListener("load", setup);
