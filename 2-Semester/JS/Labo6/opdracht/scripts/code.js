const setup = () => {
    let abc = document.getElementById('abc');
    let abcElementNodes = abc.childNodes;
    console.log(abcElementNodes);

}
window.addEventListener("load", setup);
