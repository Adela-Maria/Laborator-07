function changeProfile()
{
// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {  //aceasta functie are rolul de a schimba  header-ul cu numele in job-ul din viitor
	document.getElementById("NumePrenume").innerHTML ="Inginer Software - KAWASAKI";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.06.2024-24.09.2024";
	l1.innerHTML = "https://kawasakirobotics.com/others-category/software/";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Cea mai buna lucrare de licenta";
	p2.innerHTML = "26.06.2026";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat";
	p3.innerHTML = "01.06.2024-24.09.2024";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() { //functia schimba vechea imagine cu cea noua
	var img = document.getElementById("imagine");
	img.src = "imagine2.jpeg";
	img.style.opacity = 0.95;
	img.style.borderWidth = '10px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'green';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() { //modifica culoarea de fundal a mai multor elemente din pagina
	var body = document.getElementById("body");
	body.style.backgroundColor  = "#e8a5dd";
	body.style.fontFamily="FrakturBold";
	
}
function AddNewItem() {
	// call all functions
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() { //functia creeaza o casuta in care se afiseaza data nasterii si varsta
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("12-09-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {  //calculeaza varsta 
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() { //functia afiseaza varsta cand utilizatorul pozitioneaza mouse-ul peste casuta
		document.getElementById("date-years").innerHTML = '12-09-2003';
	}

function createEmailTextBox() {   //creaza o caseta text in care se afla data nasterii si varsta
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "patrasadela@gmail.com";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {  //aceasta functie inspecteaza daca email-ul introdus este valid
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}
