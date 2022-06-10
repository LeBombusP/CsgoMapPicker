const maps = [];

function Map(x) {
    const map = document.getElementById(x)
    if (map.style.border == "") {
        map.style.border = "5px solid rgb(255, 255, 255)";
        maps.push(x);
        //? Adds map to array
    }
    else if (map.style.border == "5px solid rgb(255, 255, 255)") {
        map.style.border = "";
        const index = maps.indexOf(x);
        if (index > -1) {
            maps.splice(index, 1);
        }
        //? Removes map from array
    }
}

function Choose() {
    min = Math.ceil(1);
    max = Math.floor(maps.length);
    let res = Math.floor(Math.random() * (max - min + 1)) + min - 1;
    //? Randomly chooses map from array
    if (maps.length == 1) {
        alert('You have only picked one map :|');
    }
    else if (maps[res] != undefined) {
        document.querySelector('h1').innerText = maps[res] + ' won!';
    }
    else {
        alert("You didn't pick any map :|");
    }
}
