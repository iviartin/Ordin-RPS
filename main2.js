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

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){ 
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){ 
        humanScore++;
        console.log("You win! Rock beats Scissors");
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){ 
        humanScore++;
        console.log("You win! Paper beats Rock");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){ 
        humanScore++;
        console.log("You win! Scissors beats Paper");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){ 
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){ 
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }
    else { 
        computerScore++;
        console.log("You lose! Scissors beats Paper");
    }
}




function playGame () {
while (roundCount <5) { 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);    
    roundCount++
}
}
playGame()