let computerSelection;
let humanSelection;
let RPS_Options = ["rock","paper","scissors"];

//Randomizes Computer Choice of: rock, paper, or scissors
function getComputerChoice () {
    let randomCompChoice = Math.floor(Math.random() * RPS_Options.length);
    let compChoice = RPS_Options[randomCompChoice];
    return compChoice;
}

//Prompts user to input rock, paper, or scissors
function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        //checks if user's input is one of the options from the RPS_Options array
        //Will prompt user input until it matches one of the choices
        if (RPS_Options.includes(humanChoice)) {
            return humanChoice;
            break;
        } else {
            console.log ("Please choose rock, paper, or scissors");
        }
    }
}

computerSelection = getComputerChoice();
console.log(computerSelection);

humanSelection = getHumanChoice();
console.log(humanSelection);