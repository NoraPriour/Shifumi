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
        else {resultat = "trop nul, les ciseaux se sont fait éclater :("}
    }
    return resultat
} 
console.log(playRound("papier", "papier"))