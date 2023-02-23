const setup = () => {
    tree();
}

const tree = () => {
    let hoogte = 6;
    let ster='';
    for (let i=0; i < hoogte; i++)
    {
      if (i%2)   //een statment  zonder acolades, meer statments moet je acolades gebruiken
          ster = ster +"*";
      else
          ster = ster + "+";
      console.log (ster)
    }
}
window.addEventListener("load", setup);



let  setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];


    console.log (familie.length);



    for (let i = 0; i < familie.length; i=i+2)
    {
        console.log("familielid " + familie[i] );
    }

    // oproepen functie (doorgeven via
    voegNaamToe(familie);

    console.log (familie.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("voeg een naam toe");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("familielid " + leden[i] );
    }

}