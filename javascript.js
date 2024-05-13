let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;
let RPS_Options = ["rock","paper","scissors"];

//Randomizes Computer Choice of: rock, paper, or scissors
function getComputerChoice () {
    let randomCompChoice = Math.floor(Math.random() * RPS_Options.length);
    let computerChoice = RPS_Options[randomCompChoice];
    return computerChoice;
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
            console.log ("Please choose: rock, paper, or scissors");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    //Tests win conditions when user inputs rock
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log ("Tie! You both chose rock.");
        } else if (computerChoice == "scissors") {
            console.log ("You win! Rock beats scissors.");
        } else if (computerChoice == "paper"){
            console.log ("Computer wins! Paper beats rock.");
        }
    }
    //Tests win conditions when user inputs paper
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log ("You win! Paper beats rock.");
        } else if (computerChoice == "scissors") {
            console.log ("You lose! Scissors beats paper.");
        } else if (computerChoice == "paper"){
            console.log ("Tie! You both chose paper.");
        }
    }
    //Tests win conditions when user inputs scissors
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log ("You lose! Rock beats scissors.");
        } else if (computerChoice == "scissors") {
            console.log ("Tie! You both chose scissors.");
        } else if (computerChoice == "paper"){
            console.log ("You win! Scissors beats paper.");
        }
    }
}

computerSelection = getComputerChoice();
console.log(computerSelection);

humanSelection = getHumanChoice();
console.log(humanSelection);

playRound(humanSelection, computerSelection);