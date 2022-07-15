let header = document.getElementById("header")

window.addEventListener("DOMContentLoaded", function (){
	let sitelogo = document.createElement("img");
	sitelogo.id = "sitelogo";
	sitelogo.src = "media/apple.svg";
	sitelogo.alt = "Site Logo"
	header.appendChild(sitelogo);

	let home = document.createElement("a");
	home.href = "index.html";
	home.innerText = "Home"
	header.appendChild(home);

	let about = document.createElement("a");
	about.href = "about.html";
	about.innerText = "About"
	header.appendChild(about);

	let contact = document.createElement("a");
	contact.href = "contact.html"
	contact.innerText = "Contact"
	header.appendChild(contact);
})
