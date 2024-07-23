const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const compChoice = document.querySelector(".comp-choice");
const you = document.getElementById("you");
const computer = document.getElementById("computer");
const ties = document.getElementById("ties");
const result = document.getElementById("result");

// sets score counters to 0
let youScore = 0;
let computerScore = 0;
let tiesScore = 0;

function playGame() {
  const options = ["Rock", "Paper", "Scissors"];
  //   Picks an option at random
  const index = Math.floor(Math.random() * options.length);
  const computerChoice = options[index];

  //   Sets user's choice
  const userChoice = this.id;
  //   Displays computer's choice
  compChoice.textContent = computerChoice;

//   increments scores by 1, depending on who won
  if (userChoice == computerChoice) {
    tiesScore++;
    ties.textContent = "Ties: " + tiesScore;
    console.log(tiesScore);
    result.textContent = "You tied!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    youScore++;
    you.textContent = "You: " + youScore;
    result.textContent = "You won!";
  } else {
    computerScore++;
    computer.textContent = "Computer: " + computerScore;
    result.textContent = "You lost!";
  }
}


Rock.addEventListener("click", playGame);
Paper.addEventListener("click", playGame);
Scissors.addEventListener("click", playGame);
