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
    if (choix != "papier" || choix != "ciseaux" || choix != "pierre") {
        prompt ("je n'ai pas compris")
    }
}
// console.log(getHumanChoice())



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
    else if (humanChoice == "pierre") {
        if (computerChoice == "ciseaux"){
            resultat = "bravo ! bravo ! Tu as éclaté les ciseaux :)"
        }
        else {resultat = "trop nul, ta pierre a été recouverte :("
        }
    }
    return resultat
}

// const humanSelection = getHumanChoice ()
// const computerSelection = getComputerChoice ()

//console.log(playRound(getHumanChoice(),getComputerChoice()))
// Etape 6
function playGame(){
    let humanScore = 0
    let computerScore = 0
    let egaliteScore = 0
    let resultat = " "
    for (let i = 0; i <= 4 ; i++){
        resultat = playRound(getHumanChoice(),getComputerChoice())

        if (resultat == "bravo ! bravo ! Tu as coupé le papier :)" ){
            humanScore += 1 
        }
        else if (resultat == "trop nul, les ciseaux se sont fait éclater :("){
            computerScore += 1
        }
        else if (resultat == "bravo ! bravo ! Tu as recouvert la pierre :)"){
            humanScore += 1
        }
        else if (resultat == "trop nul, les ciseaux ont coupé ton papier :("){
            computerScore += 1
        }
        else if (resultat == "bravo ! bravo ! Tu as éclaté les ciseaux :)"){
            humanScore += 1
        }
        else if (resultat == "trop nul, ta pierre a été recouverte :("){
            computerScore += 1
        }
        else if (resultat == "egalite") {
            egaliteScore += 1
        } 

    }
    console.log(" le score de l'ordinateur est ", computerScore, "ton score est ", humanScore, "nombre d'égalité : ", egaliteScore)
}
playGame()