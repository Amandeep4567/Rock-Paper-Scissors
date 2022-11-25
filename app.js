const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const allChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let displayResult;

allChoices.forEach((allChoices) =>
  allChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateDisplayResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or we can you allChoices.length in place of 3

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function generateDisplayResult() {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    displayResult = "USERWIN";
  } else if (
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    displayResult = "COMPUTERWIN";
  } else {
    displayResult = "DRAW";
  }
  resultDisplay.innerHTML = displayResult;
}
