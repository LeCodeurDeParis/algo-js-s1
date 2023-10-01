var ranName = 0
const nameChara = ["Mathieu", "Clara", "Timothé", "Emma", "Pierre"]
var deadChara = []



function defname(){

    let Sportif = new character(nameChara[ranCharaName()], 0.2, 0.5)
    nameChara.splice([ranName], 1, "0")
    console.log(Sportif)

    while(nameChara[ranName] == "0" ){
        ranCharaName()
    }
    let Nerd = new character(nameChara[ranName], 0.4, 0.2)
    nameChara.splice([ranName], 1, "0")
    console.log(Nerd)

    while(nameChara[ranName] == "0" ){
        ranCharaName()
    }
    let Blonde = new character(nameChara[ranName],0.4, 0.3)
    nameChara.splice([ranName], 1, "0")
    console.log(Blonde)

    while(nameChara[ranName] == "0" ){
        ranCharaName()
    }
    let Musclor = new character(nameChara[ranName],0.2, 0.4)
    nameChara.splice([ranName], 1, "0")
    console.log(Musclor)

    while(nameChara[ranName] == "0" ){
        ranCharaName()
    }
    let Normal = new character(nameChara[ranName], 0.3, 0.5)
    nameChara.splice([ranName], 1, "0")
    console.log(Normal)

    return pickChara = [Sportif, Nerd, Blonde, Musclor, Normal]
}


function ranCharaName(){
    ranName = Math.floor(Math.random()*5)
    return ranName
} 



class character{
    constructor(name, pDead, pDmg){
        this.name = name
        this.pDead = pDead
        this.pDmg = pDmg
    }
}


class killer{
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }
}



function attack(killer, pickChara = [], deadChara=[]){
    console.log("La fonction est appelée")
    while(killer.hp > 0 && deadChara.length < 5){
        randomAttack = Math.floor(Math.random()*pickChara.length)
        proba = Math.random()
        atkRandom = pickChara[randomAttack]
        if(deadChara.length == 5){
            break
        }
    
        else if(proba >= 0 && proba <= atkRandom.pDead){
            console.log(killer.name," a tué", atkRandom.name)
            deadChara.push(atkRandom.name)
            delete pickChara[randomAttack]
        }

        else if (proba > atkRandom.pDead && proba <= atkRandom.pDmg){
            killer.hp -= 10
            console.log(atkRandom.name, "a esquivé l'attaque et a infligé 10pts de dégats à", killer.name)
        }

        else if (proba > atkRandom.pDmg){
            killer.hp -= 15
            deadChara.push(atkRandom.name)
            delete pickChara[randomAttack]
            console.log(killer.name," a tué", atkRandom.name, "mais", atkRandom.name, "a réussi à infligé 15pts de dégâts à", killer.name)
        }
    }
}

let Jason = new killer("Jason", 100)
 
pickChara = defname()

attack(Jason, pickChara)

if (killer.hp == 0){
    console.log("Le tueur est mort, les survivants ont gagnés")
}
else{
    console.log("Les survivants sont morts, le tueur a gagné. RIP à ", deadChara)
}
