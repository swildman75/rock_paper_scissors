// Set variables to keep score
let playerScore = 0;
let computerScore = 0;

// Function to get computers random choice
const getComputerChoice = () => {
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice === 0) {
    return 'rock';
  } else if (randChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// Function to get players choice
const getPlayerChoice = () => {
  let playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
  return playerChoice;
};

// function to check winner
const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  }
};

// Function to play one round
const playRound = () => {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  let winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
};

// Function to play a five round game
const game = () => {
  while (playerScore < 5 && computerScore < 5) {
    playRound();
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  if (playerScore === 5) {
    console.log('You win this game!');
  }
  if (computerScore === 5) {
    console.log('The computer wins the game!');
  }
};

// game();
