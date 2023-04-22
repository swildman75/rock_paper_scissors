// Set variables to keep score
let playerScore = 0;
let computerScore = 0;

// let playerSelection;

// Variables to select elements
const buttons = document.querySelectorAll('.btn');

const player = document.querySelector('#player_score');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#computer_score');
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector('#output');
output.textContent = "Let's See Who Can Win Five Matches.";

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

// function to check winner
const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    output.textContent = "It's a draw!";
    return "It's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    output.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    output.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    output.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    output.textContent = `You Lose, ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
};

// Loop through button and set event listener on click event
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    checkWinner(playerSelection, computerSelection);
  });
});

// Function to play one round
const playRound = () => {
  let computerSelection = getComputerChoice();
  // let winner = checkWinner(playerSelection, computerSelection);
  // return winner;
};
playRound();

// // Function to play one round
// const playRound = () => {
//   let computerSelection = getComputerChoice();
//   let winner = checkWinner(playerSelection, computerSelection);
//   return winner;
// };

// Function to play a five round game
const game = () => {
  player.textContent = `Player Score: ${playerScore}`;
  computer.textContent = `Computer Score: ${computerScore}`;
  if (playerScore === 5) {
    output.textContent = 'You Won the Game!';
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
  } else if (computerScore === 5) {
    output.textContent = 'Computer Wins the Game!';
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
  }
  playRound();
};

game();
