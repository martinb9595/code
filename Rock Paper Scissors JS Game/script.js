function getComputerChoice() {
  let play = ["Rock", "Paper", "Scissors"];
  let playHand = play[Math.floor(Math.random() * play.length)];
  return playHand;
}

let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "Paper") {
    return "It's a tie!";
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    scorePlayer = scorePlayer + 1;
    return "Paper wins! +1 Score for player!";
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    scorePlayer = scorePlayer + 1;
    return "Scissors win! +1 Score for player!";
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    scorePlayer = scorePlayer + 1;
    return "Rock wins! +1 Score for player!";
  } else if (computerSelection == "Paper" && playerSelection == "rock") {
    scoreComputer = scoreComputer + 1;
    return "Paper wins! +1 Score for computer!";
  } else if (computerSelection == "Rock" && playerSelection == "scissors") {
    scoreComputer = scoreComputer + 1;
    return "Rock wins! +1 Score for computer!";
  } else if (computerSelection == "Paper" && playerSelection == "scissors") {
    scoreComputer = scoreComputer + 1;
    return "Scissors win! +1 Score for computer!";
  } else if (playerSelection == "rock" && playerSelection == "Rock") {
    return "It's a tie!";
  } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    return "It's a tie!";
  } else if (computerSelection == "Rock" && playerSelection == "rock") {
    return "It's a tie!";
  } else if (computerSelection == "Scissors" && playerSelection == "scissors") {
    return "It's a tie!";
  } else if (computerSelection == "Scissors" && playerSelection == "scissors") {
    return "It's a tie!";
  }
}
const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();
const computerSelection2 = getComputerChoice();
const computerSelection3 = getComputerChoice();
const computerSelection4 = getComputerChoice();
const computerSelection5 = getComputerChoice();

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection2));
  console.log(playRound(playerSelection, computerSelection3));
  console.log(playRound(playerSelection, computerSelection4));
  console.log(playRound(playerSelection, computerSelection5));
}

function winnerOutput() {
  game();
  if (scorePlayer > scoreComputer) {
    console.log("Player wins");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer wins");
  }
}

winnerOutput();
