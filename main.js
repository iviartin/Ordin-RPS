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

let humanScore = 0 

let computerScore = 0

// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice === "rock" && computerChoice === "scissors"){ 
//         humanScore++;
//         console.log("You win! Rock beats Scissors");
//     }
//     else if (humanChoice === "rock" && computerChoice === "rock"){ 
//         console.log("It's a tie!");
//         return;
//     }
//     else{
//         computerScore++;
//         console.log("You lose! Scissors beats Rock");
//     }

//     if (humanChoice === "paper" && computerChoice === "rock"){ 
//         humanScore++;
//         console.log("You win! Paper beats Rock");
//     }
//     else if (humanChoice === "paper" && computerChoice === "paper"){ 
//         console.log("It's a tie!");
//         return;
//     }
//     else{
//         computerScore++;
//         console.log("You lose! Rock beats Paper");
//     }

//     if (humanChoice === "scissors" && computerChoice === "paper"){ 
//         humanScore++;
//         console.log("You win! Scissors beats Paper");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "scissors"){ 
//         console.log("It's a tie!");
//         return;
//     }
//     else{
//         computerScore++;
//         console.log("You lose! Paper beats Scissors");
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// If human choice equals rock and the computers choice is Scissors increment humanscpre +1
// else if the computers choice is rock do nothing
// else computer score +1

// If humanc choice equals paper and the computer choices equals rocks increment humand scorpe +
// else if the computer choice is paper do nothing
// else computer score +1


// if (humanChoice ===  computerChoice){ 
//         console.log("It's a tie!");
//     }
//     else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
// )
//     { 
//         humanScore++;
//         console.log("You Win!")
//     }
//     else {
//         computerScore ++
//         console.log("Computer wins");
//     }


// updated function using the revised if else if

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice ===  computerChoice){ 
            console.log("It's a tie!");
        }
        else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
        { 
            humanScore++;
            console.log("You Win!")
        }
        else {
            computerScore ++
            console.log("Computer wins");
        }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);