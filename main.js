const tablica = []

function Premier() {
    const Premier = document.getElementById('Premier')
    if (Premier.style.border == "") {
        Premier.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Premier");
    }
    else if (Premier.style.border == "5px solid rgb(255, 255, 255)") {
        Premier.style.border = ""
        const index = tablica.indexOf('Premier');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}


function Dust2() {
    const Dust2 = document.getElementById('Dust2')
    if (Dust2.style.border == "") {
        Dust2.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Dust2");
    }
    else if (Dust2.style.border == "5px solid rgb(255, 255, 255)") {
        Dust2.style.border = ""
        const index = tablica.indexOf('Dust2');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Mirage() {
    const Mirage = document.getElementById('Mirage')
    if (Mirage.style.border === "") {
        Mirage.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Mirage");
    }
    else if (Mirage.style.border === "5px solid rgb(255, 255, 255)") {
        Mirage.style.border = ""
        const index = tablica.indexOf('Mirage');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Inferno() {
    const Inferno = document.getElementById('Inferno')
    if (Inferno.style.border === "") {
        Inferno.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Inferno");
    }
    else if (Inferno.style.border === "5px solid rgb(255, 255, 255)") {
        Inferno.style.border = ""
        const index = tablica.indexOf('Inferno');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Overpass() {
    const Overpass = document.getElementById('Overpass')
    if (Overpass.style.border == "") {
        Overpass.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Overpass");
    }
    else if (Overpass.style.border == "5px solid rgb(255, 255, 255)") {
        Overpass.style.border = ""
        const index = tablica.indexOf('Overpass');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Vertigo() {
    const Vertigo = document.getElementById('Vertigo')
    if (Vertigo.style.border == "") {
        Vertigo.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Vertigo");
    }
    else if (Vertigo.style.border == "5px solid rgb(255, 255, 255)") {
        Vertigo.style.border = ""
        const index = tablica.indexOf('Vertigo');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Nuke() {
    const Nuke = document.getElementById('Nuke')
    if (Nuke.style.border == "") {
        Nuke.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Nuke");
    }
    else if (Nuke.style.border == "5px solid rgb(255, 255, 255)") {
        Nuke.style.border = ""
        const index = tablica.indexOf('Nuke');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Train() {
    const Train = document.getElementById('Train')
    if (Train.style.border == "") {
        Train.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Train");
    }
    else if (Train.style.border == "5px solid rgb(255, 255, 255)") {
        Train.style.border = ""
        const index = tablica.indexOf('Train');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Cache() {
    const Cache = document.getElementById('Cache')
    if (Cache.style.border == "") {
        Cache.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Cache");
    }
    else if (Cache.style.border == "5px solid rgb(255, 255, 255)") {
        Cache.style.border = ""
        const index = tablica.indexOf('Cache');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function Agency() {
    const Agency = document.getElementById('Agency')
    if (Agency.style.border == "") {
        Agency.style.border = "5px solid rgb(255, 255, 255)"
        tablica.push("Agency");
    }
    else if (Agency.style.border == "5px solid rgb(255, 255, 255)") {
        Agency.style.border = ""
        const index = tablica.indexOf('Agency');
        if (index > -1) {
            tablica.splice(index, 1);
        }
    }
}

function losowanie() {
    min = Math.ceil(1);
    max = Math.floor(tablica.length);
    let wynik = Math.floor(Math.random() * (max - min + 1)) + min - 1;
    if (tablica[wynik] != undefined) {
        document.querySelector('h1').innerText = 'Wygrał'+tablica[wynik]
    }
    else {
        alert('Nic nie wybrałeś :|')
    }
}