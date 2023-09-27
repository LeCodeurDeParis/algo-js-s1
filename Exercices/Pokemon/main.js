/*class hero {
    constructor(name, pv, atk, def){
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }

    attackMonster(monster){
        monster.hp -= this.atk
    }
}

class monster {
    constructor(name, pv){
        this.name = name
        this.hp = hp
    }
}
let samy = new hero("Samy", 100, 5, 7)
let gnome = new monster("Gnome", 100)

samy.attackMonster(gnome)*/

gameLoop = true
var attackPokemon = 0

class Pokémon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.luck = luck
    }
    

    attackPokemon(Pokémon){
        Pokémon.hp += Pokémon.defense
        Pokémon.hp -= this.attack
        attackPokemon = this.attack - Pokémon.defense
    }
}

let Ralpho = new Pokémon("Ralpho", 10, 4, 20, 2)
let Ybois = new Pokémon("Ybois", 8, 5, 25, 2)
/*
Ralpho.atkReçu(Ybois)
console.log(Ybois)
console.log(Ralpho) 
console.log("Ybois à prit", atkReçu, "de dégats, il lui reste ", Ybois.hp, "HP")
*/
while (gameLoop == true){
    Ralpho.attackPokemon(Ybois)
    console.log("Ybois à prit", attackPokemon, "de dégats, il lui reste ", Ybois.hp, "HP")
    if (Ybois.hp <= 0){
        console.log(Ybois.name, "a perdu")
        gameLoop = false
        break
    }
    
    
    Ybois.attackPokemon(Ralpho)
    console.log("Ralpho à prit", attackPokemon, "de dégats, il lui reste ", Ralpho.hp, "HP")
    if (Ralpho.hp <= 0){
        console.log(Ralpho.name, "a perdu")
        gameLoop = false
        break
    }

    
}

