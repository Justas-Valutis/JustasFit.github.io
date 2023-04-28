const setup = () => {
    let student = {}; //een leeg object
    student.firstName = 'John';
    student.lastName = 'Doe';
    student.age = new Date(200, 1, 11);
    student.eyeColor = 'blue';

    console.log(student.firstName);

    let student1= {
        firstName: 'Wim',
        lastName: 'Kiko',
        age: new Date(200, 11, 10),
        eyeColor: 'brown'
    }

    console.log(student1);
    console.log(student1.lastName);

    //uitbreiding
    console.log('uitbreiding ----------------');
    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    console.log (student2.address.zipCode);



    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);
}
window.addEventListener("load", setup);
