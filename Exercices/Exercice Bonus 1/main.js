function getRandomNumber(max) {
    return Math.floor(Math.random()*max);
}

var result = ""
var fin = ""

function deroulement(){
    var playerChoice = document.querySelector('input[name=Choice]:checked').value;

    var jOrdi = getRandomNumber(3)
    console.log(jOrdi)
    if (playerChoice == "Papier") {
        if (jOrdi == 2){
            console.log("egal")
            result = "Papier"
            fin = "Égalité"
        }
        if (jOrdi == 0){
            console.log("gagné")
            result = "Pierre"
            fin = "Vous avez gagné !"
        }
        if (jOrdi == 1){
            console.log("perdu")
            result = "Ciseaux"
            fin = "Vous avez perdu..."
        }
    }

    if (playerChoice == "Ciseaux") {
        if (jOrdi == 1){
            console.log("egal")
            result = "Ciseaux"
            fin = "Égalité"
        }
        if (jOrdi == 0){
            console.log("gagné")
            result = "Papier"
            fin = "Vous avez gagné !"
        }
        if (jOrdi == 2){
            console.log("perdu")
            result = "Pierre"
            fin = "Vous avez perdu..."
        }
    }

    if (playerChoice == "Pierre") {
        if (jOrdi == 0){
            console.log("egal")
            result = "Pierre"
            fin = "Égalité"
        }
        if (jOrdi == 1){
            console.log("gagné")
            result = "Ciseaux"
            fin = "Vous avez gagné !"
        }
        if (jOrdi == 2){
            console.log("perdu")
            result = "Papier"
            fin = "Vous avez perdu..."
        }
    }
    Choix.innerHTML = result
    Concl.innerHTML = fin
}
