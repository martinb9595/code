function getComputerChoice() {
  let play = ["Rock", "Paper", "Scissors"];
  let playHand = play[Math.floor(Math.random() * play.length)];
  return playHand;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "Paper") {
    return "It's a tie!";
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return "Paper wins!";
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return "Scissors win!";
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return "Rock wins!";
  } else if (computerSelection == "Paper" && playerSelection == "rock") {
    return "Paper wins!";
  } else if (computerSelection == "Rock" && playerSelection == "scissors") {
    return "Rock wins!";
  } else if (computerSelection == "Paper" && playerSelection == "scissors") {
    return "Scissors win!";
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

game();
