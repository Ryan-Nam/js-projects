const ajouter = document.querySelector(".ajouter");
let liste = document.querySelector("#liste");
let tacheArray = JSON.parse(localStorage.getItem("taches")) || [];
// AJOUT ELEMENT A LA LISTE
function ajout(e) {
	e.preventDefault();
	let text = document.querySelector("[name=tache]").value;
	const tache = {
		text,
		done: false
	};
	tacheArray.push(tache);
	localStorage.setItem("taches", JSON.stringify(tacheArray));
	this.reset();
	trifecta();
}
// TOGGLE ELEMENT
function toggleChecked(e) {
	if (!e.target.matches("input")) return; // skip this unless it's an input
	const el = e.target;
	const index = el.dataset.index;
	tacheArray[index].done = !tacheArray[index].done;
	localStorage.setItem("taches", JSON.stringify(tacheArray));
	trifecta();
}
// EFFACER UN ELEMENT DE LA LISTE
function effacer(e) {
	if (!e.target.matches("div")) return;
	const elId = e.target.id;
	const parentEl = e.target.parentElement;
	tacheArray.splice(elId, 1);
	localStorage.setItem("taches", JSON.stringify(tacheArray));
	setTimeout(function () {
		parentEl.classList.add("easeOut");
	},0);
	parentEl.addEventListener("transitionend", function() {
		trifecta();
	});
}

function populateList(taches, tacheListe) {
	tacheListe.innerHTML = taches.map((tache, i) => {
		return `
		<li>
			<input type="checkbox" data-index=${i} id="tache${i}" ${tache.done ? "checked" : ""} />
        	<label for="tache${i}">${tache.text}</label>
			<div id="${i}" class="effacer"> 🗑️ </div>
        </li>
    	`;
	}).join("");
}

function toggleGrey() {
	let label;
	tacheArray.forEach((tache, i) => {
		if (tache.done === true) {
			label = document.querySelector(`label[for="tache${i}"]`);
			label.classList.add("greyedOut");
		}
	});
}

function hookEvents() {
	const bouton = document.querySelectorAll(".effacer");
	bouton.forEach(boutoneffacer => {
		boutoneffacer.addEventListener("click", effacer);
	});
}

function trifecta() {
	populateList(tacheArray, liste);
	toggleGrey();
	hookEvents();
}

ajouter.addEventListener("submit", ajout);
liste.addEventListener("click", toggleChecked);
trifecta();