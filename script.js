
let playerchoice = prompt("rock paper or scissors?").toUpperCase();
function getComputerChoice() {
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function gameOn (playerSelection, computerSelection) {
    // let playerSelection = playerSelection;
    // let computerSelection = computerSelection;
    if (playerSelection === computerSelection) {
        console.log("Player chose: " + playerSelection + " Bot chose: " + computerSelection + " It is a Tie.");
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("Player chose: " + playerSelection + " Bot chose: " + computerSelection + " PLAYER WIN");
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("Player chose: " + playerSelection + " Bot chose: " + computerSelection + " PLAYER WIN");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("Player chose: " + playerSelection + " Bot chose: " + computerSelection + " PLAYER WIN");
    }
    else {console.log("Player chose: " + playerSelection + " Bot chose: " + computerSelection + " BOT WIN, YOU LOSE :(");
}
}

gameOn(playerchoice, getComputerChoice())