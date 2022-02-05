function computerPlay() {
  let shake = Math.floor(Math.random() * 3) + 1;
  if (shake === 1) {
    return "rock";
  } else if (shake === 2) {
    return "paper";
  } else if (shake == 3) {
    return "scissors";
  }
}
let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You Win! Rock beats Scissor";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "You Lose! Paper beats Rock!";
  } else {
    return "You have tied. No winner!";
  }
}

/*Results*/

const results = document.querySelector("#results");

let round = document.createElement("p");

function game(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  round.textContent = playRound(playerSelection, computerSelection);
  playerResult.textContent = "Player score: " + playerScore;
  computerResult.textContent = "Computer Score: " + computerScore;
  if (playerScore === 5) {
    result.textContent = "You have beaten the computer!!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent = "The computer has beaten you!!";
    playerScore = 0;
    computerScore = 0;
  }
}

/*Player Selection*/
const rock = document.getElementById("btnRock");
rock.addEventListener("click", function () {
  let playerSelection = "rock";
  result.textContent = "";
  game(playerSelection, computerSelection);
});

const paper = document.getElementById("btnPaper");
paper.addEventListener("click", function (computerSelection) {
  let playerSelection = "paper";
  result.textContent = "";
  game(playerSelection, computerSelection);
});

const scissors = document.getElementById("btnScissors");
scissors.addEventListener("click", function (computerSelection) {
  let playerSelection = "scissors";
  result.textContent = "";
  game(playerSelection, computerSelection);
});

const playerResult = document.createElement("h4");

const computerResult = document.createElement("h4");
const result = document.createElement("h1");

results.appendChild(round);
results.appendChild(computerResult);
results.appendChild(playerResult);
results.appendChild(result);

/*function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playerScore);
    console.log(computerScore);
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

game();*/
