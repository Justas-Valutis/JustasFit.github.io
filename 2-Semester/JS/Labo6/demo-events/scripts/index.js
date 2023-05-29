const setup = () => {
    let texts=document.querySelectorAll(".text");
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}

	let voornaam = document.querySelectorAll("[name='voornaam1']");
	console.log(voornaam[0].innerHTML); //returneert text waarde van dit element
	let test2 = document.getElementsByName('voornaam1');
	console.log(test2[0].innerHTML); //retourneer exact dezelfde
	let test3 = document.getElementsByClassName('text');
	console.log(test3[0].getAttribute('name')); //retourneer voornaam1
	test3[0].setAttribute('name', 'familyname')
	console.log(test3[0].getAttribute('name')); //retourneer familyname
}


const klik = (event) => {
	event.target.style.color="red";
};

window.addEventListener("load", setup);

