let computerSelection;
let RPS_Options = ["rock","paper","scissors"];

function getComputerChoice () {
    let randomCompChoice = Math.floor(Math.random() * RPS_Options.length);
    let compChoice = RPS_Options[randomCompChoice];
    return compChoice;
}

computerSelection = getComputerChoice();
console.log(computerSelection);