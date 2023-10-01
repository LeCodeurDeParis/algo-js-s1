var Music = ["Anissa - Wejdene", "Goulag - Kaaris", "Paris c'est loin - Damso feat Booba" , "Tree of life - Billx", "La bohème - Charles Aznavour"]
var Music = ["Anissa - Wejdene", "Paradis ou Enfer - Kaaris", "Pinnochio - Booba feat Damso" , "La couleur du son - Le Wanski", "Emmenez-moi - Charles Aznavour"]
var redLightsNumbers = 0
var nbrTaxi = 0
var getMusic = 0
var radio = ""

class character{
    constructor(name, mentalHealth){
        this.name = name
        this.mentalHealth = mentalHealth
    }

    

    ride(playlist){
            
            while (redLightsNumbers < 30 && this.mentalHealth > 0){
                redLightsNumbers += 1
                getMusic = Math.floor(Math.random()*5)
                radio = playlist[getMusic]
                console.log("La musique jouée est ", radio, "et il reste ", 30 - redLightsNumbers, "feux rouges")
                if (radio == playlist[0]){
                    this.mentalHealth -= 1
                    console.log("Il reste", this.mentalHealth, "Santé Mentale")
                    nbrTaxi += 1

                }
                if (this.mentalHealth === 0){
                    console.log("Explosion")
                    break
                }
                if (redLightsNumbers === 30){
                    console.log("John est arrivé avec ", nbrTaxi, "changements de Taxi")
                    break
                }
                
            
            }
        }
    }

let John = new character("John", 10)
John.ride(Music)


