// let randomNumber = Math.random(1,2,3);
let userChoice;
// rock = 1;
// scissor = 2;
// paper = 3;
let userChoiceNum;
let computerChoice;
// In your click handler, generate a random number and assign it to the randomNumber variable

$(".play").click(function() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let userInput = $("input").val().toLowerCase();
  

  // if (userInput === "rock") {
  //    userChoiceNum = 1;
  // } else if (userInput === "scissor") {
  //   userChoiceNum = 2;
  // } else if (userInput === "paper") {
  //   userChoiceNum = 3;
  // } 
  $(".userChoice").text(userInput);
  
    if (randomNumber === 1) {
     computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissor";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  } 
  $(".computerChoice").text(computerChoice);
  
  //condition for rules
   if (userChoiceNum === randomNumber) {
    $(".result").text('Draw');
  } else if (userInput === "scissor" && computerChoice === "paper") {
  $(".result").text('User Wins');
  }else if (userInput === "rock" &&computerChoice === "scissor") {
    $(".result").text('User Wins');
  } else if (userInput === "paper" && computerChoice === "rock") {
    $(".result").text('User Wins');
  }else if (userInput === "scissor" && computerChoice === "rock") {
    $(".result").text('Computer Wins');
  }else if (userInput === "rock" && computerChoice === "paper") {
    $(".result").text('Computer Wins');
  } else if (userInput === "paper" &&computerChoice === "scissor") {
    $(".result").text('Computer Wins');
  }
  
  
});