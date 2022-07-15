let footer = document.getElementById("footer");

window.addEventListener("DOMContentLoaded", function () {
	let footerCol1 = document.createElement("ul");
	footerCol1.id = "footer-col-1";
	footer.appendChild(footerCol1);
	footerCol1 = document.querySelector("#footer-col-1");
	
	let liHome = document.createElement("li");
	liHome.innerText = "Home";
	footerCol1.appendChild(liHome);

	let liAbout = document.createElement("li");
	liAbout.innerText = "About";
	footerCol1.appendChild(liAbout);

	let liContact = document.createElement("li");
	liContact.innerText = "Contact";
	footerCol1.appendChild(liContact);


	let footerCol2 = document.createElement("ul");
	footerCol2.id = "footer-col-2";
	footer.appendChild(footerCol2);
	footerCol2 = document.querySelector("#footer-col-2");

	let liDir = document.createElement("li");
	liDir.innerText = "Directions";
	footerCol2.appendChild(liDir);

	let liWtyCl = document.createElement("li");
	liWtyCl.innerText = "Warranty Claims";
	footerCol2.appendChild(liWtyCl);

	let sch = document.createElement("li");
	sch.innerText = "Schedule";
	footerCol2.appendChild(sch);
})
