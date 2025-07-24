function getComputerChoice(){
    const liste = ["pierre", "papier", "ciseaux"]
    let indice = Math.floor (Math.random() * 3)
    let choix = liste[indice]
    return choix
} 
getComputerChoice ()
console.log(getComputerChoice())

function getHumanChoice () {
    let choix = prompt ("que jouez-vous?")
    return choix
}
console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice ){
    humanChoice.toLowerCase()
    if (humanChoice == computerChoice){
        console.log("égalité")
    }
} 
let test = prompt()
console.log(test)
console.log(test.toLowerCase())