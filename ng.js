// create variables to call functions for button behavior
//and for text behavior changes
//create function to determine random number generator from
//1 to 100


var correctNumber;
var userguess = document.querySelector('.output');
var result = document.querySelector('.response');
var submit = document.querySelector('.guess-button');
var guessField = document.querySelector('.guess-input');
var guessCount = 1;
var resetButton;

function GenerateNumber() {
  var generatedNumber = Math.floor(Math.random() * 100 + 1);
  correctNumber = parseInt(generatedNumber);
  return correctNumber;
}
GenerateNumber();
console.log(correctNumber);


// upon number input, guess button is clicked and
//p tag output  changes to display input number
//If user guess is > than random number
//p tag response should display: “That is too high”
//If user guess is < than random number                       //p tag responsse should display: “That is too low”
//If the guess is correct, it should display: “BOOM!”

if (userinput > correctNumber) {
    document.querySelector("p.output") with user guess;
    return("That is too high")

} else if (user guess < correctNumber {
    document.querySelector("response")with user guess;
    return ("That is too low")

} else
    document.querySelector() {
      return ("BOOM!")
    }
