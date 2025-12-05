const form = document.getElementById('fullForm');
const nevInput = document.getElementById('nev');
const szulinapInput = document.getElementById('szulinap');
const szamInput = document.getElementById('szam');
const kategoriaInput = document.getElementById('kategoria');
const konyvInput = document.getElementById('konyv');
const szerzoInput = document.getElementById('szerzo');

const errorNev = document.getElementById('error-nev');
const errorSzulinap = document.getElementById('error-szulinap');
const errorSzam = document.getElementById('error-szam');
const errorKategoria = document.getElementById('error-kategoria');
const errorKonyv = document.getElementById('error-konyv');
const errorSzerzo = document.getElementById('error-szerzo');


form.addEventListener('submit', function(event) {
    let isValid = true;
    
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => el.classList.remove('input-error'));

    // Név ellenőrzése
    if (nevInput.value.trim() === "") {
        errorNev.textContent = "A név megadása kötelező!";
        nevInput.classList.add('input-error');
        isValid = false;
    }

    // Születési dátum ellenőrzése
    if (szulinapInput.value === "") {
        errorSzulinap.textContent = "A születési dátum megadása kötelező!";
        szulinapInput.classList.add('input-error');
        isValid = false;
    }

    // Könyv ellenőrzése
    if (konyvInput.value.trim() === "") {
        errorKonyv.textContent = "A cím megadása kötelező!";
        konyvInput.classList.add('input-error');
        isValid = false;
    }

    // Szám ellenőrzése
    if (Number(szamInput.value) < 1) {
        errorSzam.textContent = "Legalább 1 könyvet kellett olvasnod!";
        szamInput.classList.add('input-error');
        isValid = false;
    }

    // Kategória ellenőrzése
    if (kategoriaInput.value === "") {
        errorKategoria.textContent = "Kérlek válassz Kategóriát!";
        kategoriaInput.classList.add('input-error');
        isValid = false;
    }

    // Szerző ellenőrzése
    if (szerzoInput.value.trim() === "") {
        errorSzerzo.textContent = "A szerző megadása kötelező!";
        szerzoInput.classList.add('input-error');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        console.log("Hiba az űrlapon!");
    } else {
        console.log("Minden adat rendben, küldés...");
    }
});

// Wishlist
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Írj be valamit!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();