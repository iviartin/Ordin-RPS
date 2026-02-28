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
console.log(getComputerChoice())