const setup = () => {
    // let firstUL = document.querySelectorAll('ul')[0];
    // let ulChilds = firstUL.childNodes;
    // for (let i=0; i < ulChilds.length; i++) {
    //     ulChilds[i].className= 'listitem';
    // }

    //tweede manier

    let ilItems = document.getElementsByTagName('li');
    for (let i=0; i < ilItems.length; i++) {
        ilItems[i].setAttribute('class', 'listitem');
    }

    let img = document.createElement('img');
    img.setAttribute('src', 'images/cat.jpeg');
    document.querySelector('body').appendChild(img);
}
window.addEventListener("load", setup);
