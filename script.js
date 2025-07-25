function getComputerChoice(){
    const liste = ["pierre", "papier", "ciseaux"]
    let indice = Math.floor (Math.random() * 3)
    let choix = liste[indice]
    return choix
}
// getComputerChoice ()
// console.log(getComputerChoice())

function getHumanChoice () {
    let choix = prompt ("que jouez-vous?")
    return choix
}
// console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice ){
    humanChoice.toLowerCase()
    let resultat = " "
    if (humanChoice == computerChoice){
        resultat = "égalité"
    }
    else if (humanChoice == "ciseaux") {
        if (computerChoice == "papier"){
            resultat = "bravo ! bravo ! Tu as coupé le papier :)"
        }
        else {resultat = "trop nul, les ciseaux se sont fait éclater :("
        }
    }
    else if (humanChoice == "papier") {
        if (computerChoice == "pierre"){
            resultat = "bravo ! bravo ! Tu as recouvert la pierre :)"
        }
        else {resultat = "trop nul, les ciseaux ont coupé ton papier :("
        }
    }
    else {
        if (computerChoice == "ciseaux"){
            resultat = "bravo ! bravo ! Tu as éclaté les ciseaux :)"
        }
        else {resultat = "trop nul, ta pierre a été recouverte :("
        }
    }
    return resultat
}

const humanSelection = getHumanChoice ()
const computerSelection = getComputerChoice ()

console.log(playRound(humanSelection, computerSelection))
