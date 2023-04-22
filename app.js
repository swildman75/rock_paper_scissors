// Set variables to keep score
let playerScore = 0;
let computerScore = 0;

// Variables to select elements
const buttons = document.querySelectorAll('.btn');

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

const endGame = () => {
  buttons.forEach((item) => {
    item.disabled = true;
  });
};

// Function to play best of five game
const playRound = (playerSelection) => {
  let computerSelection = getComputerChoice();
  let result = '';
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result =
      `You Win! ${playerSelection} beats ${computerSelection}` +
      `<br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`;

    if (playerScore === 5) {
      result = `<br>You Win the Game! Refresh Your Browser To Play Again`;
      endGame();
    }
  } else if (playerSelection === computerSelection) {
    result =
      `It's a Draw, You Both Chose ${playerSelection}` +
      `<br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`;
  } else {
    computerScore++;
    result =
      `You Lose! ${computerSelection} Beats ${playerSelection}` +
      `<br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`;
  }
  if (computerScore === 5) {
    result = `<br>The Computer Wins! Refresh Your Browser To Play Again`;
    endGame();
  }
  document.getElementById('result').innerHTML = result;
};

// Loop through buttons and set event listener on click event
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});
