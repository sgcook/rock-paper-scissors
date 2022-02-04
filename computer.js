function computerPlay() {
  let shake = Math.floor(Math.random() * 3) + 1;
  if (shake === 1) {
    return "Rock";
  } else if (shake === 2) {
    return "Paper";
  } else if (shake == 3) {
    return "Scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const newPlayer = playerSelection.toLowerCase();
  const newComputer = computerSelection.toLowerCase();

  if (newPlayer === "rock" && newComputer === "scissors") {
    playerScore += 1;
    return "You Win! Rock beats Scissor";
  } else if (newPlayer === "paper" && newComputer === "rock") {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else if (newPlayer === "scissors" && newComputer === "paper") {
    playerScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (newPlayer === "paper" && newComputer === "scissors") {
    computerScore += 1;
    return "You Lose! Scissors beats paper";
  } else if (newPlayer === "scissors" && newComputer === "rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors";
  } else if (newPlayer === "rock" && newComputer === "paper") {
    computerScore += 1;
    return "You Lose! Paper beats Rock!";
  } else {
    return "You have tied. No winner!";
  }
}

/*function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose wisely!");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    const player = "Player Score: " + playerScore;
    const computer = " Computer Score: " + computerScore;
    console.log(player);
    console.log(computer);
  } 

  if (playerScore > computerScore) {
    console.log("You have won this best of 5!!!");
  }
  if (playerScore < computerScore) {
    console.log("You have lost this best of 5");
  } else {
    console.log("TIE! Best of 5");
  } 
}

game(); */
