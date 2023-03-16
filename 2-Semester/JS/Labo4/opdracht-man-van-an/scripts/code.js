const setup = () => {
    const zin = "De man van An geeft geen hand aan ambetante verwanten";
    let teller = 0;
    let previousIndex;
    console.log('Eerste manier');
    for (let i = 0; i < zin.length; i++) {
        if (zin.indexOf('an', i) != -1) {
            i = zin.indexOf('an', i)+1;
            teller++;
        } else {
            i = zin.length+1;
        }
    }
    console.log(teller);
    console.log('Tweede manier')
    let teller2 = 0;
    let i = zin.length-1;
    for (i; i > 0; i--) {
        if (zin.lastIndexOf('an', i) !=-1) {
            i = zin.lastIndexOf('an', i)-1;
            teller2++;
        } else {
            i = -1;
        }
    }
    console.log(teller2);


}
window.addEventListener("load", setup);
