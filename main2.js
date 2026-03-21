// console.log("Hello World")

/// Adding getComputerChoice: Returns RPS)
function getComputerChoice() {
    const rand = Math.random();

    if (rand <= 0.33) {
        return "rock";
    } else if (rand <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Select Rock, Paper or Scissors")
    return choice

}
// console.log (getHumanChoice())


// let humanScore = 0 

// let computerScore = 0

// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase();
//     if (humanChoice === computerChoice){ 
//         console.log("It's a tie!");
//     }
//     else if (humanChoice === "rock" && computerChoice === "scissors"){ 
//         humanScore++;
//         console.log("You win! Rock beats Scissors");
//     }
//     else if (humanChoice === "paper" && computerChoice === "rock"){ 
//         humanScore++;
//         console.log("You win! Paper beats Rock");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "paper"){ 
//         humanScore++;
//         console.log("You win! Scissors beats Paper");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "rock"){ 
//         computerScore++;
//         console.log("You lose! Rock beats Scissors");
//     }
//     else if (humanChoice === "rock" && computerChoice === "paper"){ 
//         computerScore++;
//         console.log("You lose! Paper beats Rock");
//     }
//     else { 
//         computerScore++;
//         console.log("You lose! Scissors beats Paper");
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
let roundCount = 0
let humanScore = 0 
let computerScore = 0
const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
const results = document.getElementById("results")
const round = document.getElementById("round")
const score = document.getElementById("score")

let selRock = Rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    ;})

let selPaper = Paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    ;})

let selScissors = Scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    ;})

// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase();
//     if (humanChoice === computerChoice){ 
//         console.log("It's a tie!");
//     }
//     else if (humanChoice === "rock" && computerChoice === "scissors"){ 
//         humanScore++;
//         console.log("You win! Rock beats Scissors");
//     }
//     else if (humanChoice === "paper" && computerChoice === "rock"){ 
//         humanScore++;
//         console.log("You win! Paper beats Rock");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "paper"){ 
//         humanScore++;
//         console.log("You win! Scissors beats Paper");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "rock"){ 
//         computerScore++;
//         console.log("You lose! Rock beats Scissors");
//     }
//     else if (humanChoice === "rock" && computerChoice === "paper"){ 
//         computerScore++;
//         console.log("You lose! Paper beats Rock");
//     }
//     else { 
//         computerScore++;
//         console.log("You lose! Scissors beats Paper");
//     }
// }


// RPS UI - Mar.21

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice){ 
        results.textContent = "It's a tie!"
        console.log("It's a tie!");
        roundCount++
        
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){ 
        humanScore++;
        roundCount++
        results.textContent = "You win! Rock beats Scissors"
        console.log("You win! Rock beats Scissors")
        ;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){ 
        humanScore++;
        roundCount++
        results.textContent = "You win! Paper beats Rock"
        console.log("You win! Paper beats Rock");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){ 
        humanScore++;
        roundCount++
        results.textContent = "You win! Scissors beats Paper"
        console.log("You win! Scissors beats Paper");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){ 
        computerScore++;
        roundCount++
        results.textContent = "You lose! Rock beats Scissors"
        console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){ 
        computerScore++;
        roundCount++
        results.textContent = "You lose! Paper beats Rock"
        console.log("You lose! Paper beats Rock");
    }
    else { 
        computerScore++;
        roundCount++
        results.textContent = "You lose! Scissors beats Paper"
        console.log("You lose! Scissors beats Paper");
    }
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    round.textContent = `Roundcount: ${roundCount}`;
    
    if (humanScore == 5){
    round.textContent = "You Win"
        }
    else if (computerScore == 5){
        round.textContent = "You Lose"
}
}




// addEventListener

// function playGame () {
// while (roundCount <5) { 
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);    
//     roundCount++
// }
// }
// playGame()