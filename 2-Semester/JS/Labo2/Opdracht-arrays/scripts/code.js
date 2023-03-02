const setup = () => {
    const family = ['Trump', 'Kenedy', 'Bush', 'Washington', 'Biden'];
    console.log(family.length);

    for (let i=0; i < family.length; i++) {
        if (i%2 === 0) {
            console.log(family[i]);
        }
    }

    const voegNaamToe = (name) => {
        family.push(name);
        console.log(family);
    }

    const name = window.prompt('Write the name');
    if (name) {
        voegNaamToe(name);
    }

    const string = family.toString();
    console.log(string);
}
window.addEventListener("load", setup);

