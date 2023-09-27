function getRandomNumber(max) {
    return Math.floor(Math.random()*max);
}

var result = ""
var fin = ""
var cRes = 0
var imageRes1 = document.createElement("img")
var imageRes2 = document.createElement("img")
var imageRes3 = document.createElement("img")

var imageResC1 = document.createElement("img")
var imageResC2 = document.createElement("img")
var imageResC3 = document.createElement("img")


imageRes1.src = "Pierre.png"
imageRes2.src = "Ciseaux.png"
imageRes3.src = "Feuille.png"

imageResC1.src = "Pierre.png"
imageResC2.src = "Ciseaux.png"
imageResC3.src = "Feuille.png"

var id1 = document.getElementById("ImagePlayer")
var id2 = document.getElementById("ImageComputer")

function deroulement(){
    var playerChoice = document.querySelector('input[name=Choice]:checked').value;

    var jOrdi = getRandomNumber(3)

    console.log(jOrdi)
    console.log(id1)
    console.log(id2)
    

    if (id1.hasChildNodes && id2.hasChildNodes()) {
        while (id1.firstChild && id2.firstChild) {
            id1.removeChild(id1.lastChild);
            id2.removeChild(id2.lastChild);
        }
      }
    
    if (playerChoice == "Papier") {
        if (jOrdi == 2){
            console.log("egal")
            result = "Papier"
            fin = "Égalité"
            var cRes = 1
            id1.appendChild(imageRes3)
            id2.appendChild(imageResC3)
        }
        if (jOrdi == 0){
            console.log("gagné")
            result = "Pierre"
            fin = "Vous avez gagné !"
            var cRes = 2
            id1.appendChild(imageRes3)
            id2.appendChild(imageResC1)
        }
        if (jOrdi == 1){
            console.log("perdu")
            result = "Ciseaux"
            fin = "Vous avez perdu..."
            var cRes = 3
            id1.appendChild(imageRes3)
            id2.appendChild(imageResC2)
        }
    }

    if (playerChoice == "Ciseaux") {
        if (jOrdi == 1){
            console.log("egal")
            result = "Ciseaux"
            fin = "Égalité"
            var cRes = 1
            id1.appendChild(imageRes2)
            id2.appendChild(imageResC2)
        }
        if (jOrdi == 0){
            console.log("gagné")
            result = "Papier"
            fin = "Vous avez gagné !"
            var cRes = 2
            id1.appendChild(imageRes2)
            id2.appendChild(imageResC3)
        }
        if (jOrdi == 2){
            console.log("perdu")
            result = "Pierre"
            fin = "Vous avez perdu..."
            var cRes = 3
            id1.appendChild(imageRes2)
            id2.appendChild(imageResC1)
        }
    }

    if (playerChoice == "Pierre") {
        if (jOrdi == 0){
            console.log("egal")
            result = "Pierre"
            fin = "Égalité"
            var cRes = 1
            id1.appendChild(imageRes1)
            id2.appendChild(imageResC1)
        }
        if (jOrdi == 1){
            console.log("gagné")
            result = "Ciseaux"
            fin = "Vous avez gagné !"
            var cRes = 2
            id1.appendChild(imageRes1)
            id2.appendChild(imageResC2)
        }
        if (jOrdi == 2){
            console.log("perdu")
            result = "Papier"
            fin = "Vous avez perdu..."
            var cRes = 3
            id1.appendChild(imageRes1)
            id2.appendChild(imageResC3)
        }
    }

    if (cRes == 2){
        document.body.style.background ='green'
    }

    if (cRes == 1){
        document.body.style.background ='gray'

    }
    if (cRes == 3){
        document.body.style.background ='red'
    }
    Choix.innerHTML = result
    Concl.innerHTML = fin

}


/*id.parentNode.removeChild(imageRes1)
    id.parentNode.removeChild(imageRes2)
    id.parentNode.removeChild(imageRes3)

    if (id.hasChildNodes()) {
        while (id.firstChild) {
            id.removeChild(id.lastChild);
        }
      }
      */