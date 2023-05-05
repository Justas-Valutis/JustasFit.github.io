

const storeSliderValues = () => {
    let sliderStorage = {};
    let sliderStorageJSON;
    sliderStorage.red = document.getElementById('sldRed').value;
    sliderStorage.green = document.getElementById('sldGreen').value;
    sliderStorage.blue = document.getElementById('sldBlue').value;

    sliderStorageJSON = JSON.stringify(sliderStorage);
    localStorage.setItem('colorpicker.slider', sliderStorageJSON);
};

const restoreSliderValues = () => {
    let sliderStorageJSON = localStorage.getItem('colorpicker.slider');
    let sliderValues = JSON.parse(sliderStorageJSON);

    if (sliderStorageJSON == undefined) {
        sliderStorageJSON.red = 128;
        sliderStorageJSON.green = 128;
        sliderStorageJSON.blue = 128;
    } else {
        let sliderValues = JSON.parse(sliderStorageJSON);
    }
    document.getElementById('sldRed').value = sliderValues.red;
    document.getElementById('sldGreen').value = sliderValues.green;
    document.getElementById('sldBlue').value = sliderValues.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.getElementsByClassName('swatch');
    for (let i =1; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute('data-red'),
            green: swatches[i].getAttribute('data-green'),
            blue: swatches[i].getAttribute('data-blue')
        };
        rgbColors.push(rgb);
    }
    let storageJSON = JSON.stringify(rgbColors);
    localStorage.setItem('colorpicker.swatch-values', storageJSON);


};

const restoreSwatches = () => {
    const storageSwatchesJSONM = localStorage.getItem('colorpicker.swatch-values');
    const storageSwatches = JSON.parse(storageSwatchesJSONM);
    for (let i=0; i < storageSwatches.length; i++) {
        let rgb = storageSwatches[i];
        addSwatchComponent(rgb.red, rgb.green, rgb.blue);
    }
};
