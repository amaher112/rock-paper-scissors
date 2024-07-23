const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const compChoice = document.querySelector(".comp-choice");
const you = document.getElementById("you");
const computer = document.getElementById("computer");
const ties = document.getElementById("ties");

// attach event listener to each button
// event listener will prompt the computer to pick rock, paper or scissors at random

let youScore = 0;
let computerScore = 0;
let tiesScore = 0;



function playGame() {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * options.length);
  const computerChoice = options[index];
  const userChoice = this.id;
  console.log(computerChoice);
  compChoice.textContent = computerChoice;
  console.log(userChoice);

  if (userChoice == computerChoice) {
    tiesScore++;
    ties.textContent = "Ties: " + tiesScore;
    console.log(tiesScore);
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    youScore++;
    you.textContent = "You: " + youScore;
  } else {
    computerScore++;
    computer.textContent = "Computer: " + computerScore;
  }
}

// it will then compare users choice with computers choice
// score will be increased based on choices

Rock.addEventListener("click", playGame);
Paper.addEventListener("click", playGame);
Scissors.addEventListener("click", playGame);
