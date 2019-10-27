// Rock-Paper-Scissors Game
let playerScore = 0;
let computerScore = 0;

// Randomly generated computer choice
const getComputerChoice = () => {
  const ranNum = Math.floor(Math.random() * 3);
  return ranNum === 0 ? 'rock' : ranNum === 1 ? 'paper' : 'scissors';
};

// Checks game state
const isGameFinished = (playerScore, computerScore) => {
  return playerScore > 4 ? true : computerScore > 4 ? true : false;
};

// Plays single round of game
const playRound = (playerSelection, computerSelection) => {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')) {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return 'It\'s a draw! No winner';
  } else {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  };
};

const updatePoints = () => {
  const playerPoints = document.querySelector('#player-score');
  const computerPoints = document.querySelector('#computer-score');
  playerPoints.textContent = playerScore;
  computerPoints.textContent = computerScore;
};

const roundOutcome = document.querySelector('#round-outcome');

const displayRoundOutcome = () => roundOutcome.textContent =
    playRound(playerSelection, getComputerChoice());

const displayGameOutcome = () => {
  disablePlayerSelection();
  reset.style.opacity = 1;
  playerScore > computerScore ? playerWins() : computerWins();
};

const result = document.querySelector('#result');

const playerWins = () => result.textContent = `You win! ${playerScore} :
    ${computerScore}`;

const computerWins = () => result.textContent = `You lose! ${playerScore} :
    ${computerScore}`;

const startRound = () => {
  displayRoundOutcome();
  updatePoints();
  if (isGameFinished(playerScore, computerScore)) {
    displayGameOutcome();
  }
};

const buttons = document.querySelectorAll('button');

const disablePlayerSelection = () => {
  buttons.forEach((button) => {
    button.disabled = true;
    reset.disabled = false;
  });
};

// add event listener on click
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    startRound();
  });
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', (e) => {
  window.location.reload();
});

updatePoints();
