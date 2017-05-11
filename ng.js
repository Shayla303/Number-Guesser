// create variables to call functions for button behavior
//and for text behavior changes
//create function to determine random number generator from
//1 to 100//

var userGuess = document.querySelector('.output');
var result = document.querySelector('.response');
var submitButton = document.querySelector('.guess-button');
var guessField = document.querySelector('.guess-input');
var guessCount = 1;
var resetButton=document.querySelector('.reset');
var randomNumber;
var clear=document.querySelector('.clear');

window.addEventListener("load", function(){
  GenerateNumber();
})

function GenerateNumber(min, max) {
  var min=1;
  var max=100;
  randomNumber =Math.floor(Math.random() *
  (max-min)) +min;
  // console.log(randomNumber);
}


// upon number input, guess button is clicked and
//p tag output  changes to display input number
//If user guess is > than random number
//p tag response should display: “That is too high”
//If user guess is < than random number p tag response should display: “That is too low”
//If the guess is correct, it should display: “BOOM!”
//if the userGuess is not a number it should display Not a valid
//entry
//create an error message that appears in the output field if
//anything other than numbers are entered in the  var guessField input
//var userGuess will display the Invalid entry message if entry is not numeric upon clicking the guess button (var submit)


submitButton.addEventListener("click",function() {
  evaluateGuess();
  notAnum();
  replaceUserGuessValue();
})

function evaluateGuess() {
  var lastGuess=guessField.value;
  if(lastGuess>randomNumber){
    result.innerText="That is too high"
  } else if (lastGuess<randomNumber){
    result.innerText="That is too low"
  } else {
    result.innerText=("BOOM! YASSS BOO!")
  }
}

function notAnum () {
  var currentInput = parseInt(guessField.value)
  console.log(currentInput);
  console.log(isNaN(currentInput));
  if(isNaN(currentInput)){
    return true
 }else{
   return false
 }
  }

function replaceUserGuessValue () {
  var lastGuess=guessField.value;
  if (notAnum()) {
    result.innerText="This guess was not a number"
  } else {
    userGuess.innerText=lastGuess
  }
  guessField.value=""
}

resetButton.addEventListener("click",function() {
  resetGame()
})

function resetGame () {
  userGuess.innerText=""
  result.innerText=""
  guessField.value=""
  GenerateNumber()
}

clear.addEventListener("click",function() {
  guessField.value=""
})

userGuess.addEventListener("click", function(){
	  if(userGuess.value === ""){
	    submitButton.disabled = true;
	    resetButton.disabled = true;
	  } else {
	    submitButton.disabled = false;
	    resetButton.disabled = false;
	  }
	});

// add min and max function to the game allows player to enter a min and max number range and guess within those parameters.each time someone wins the increment on range goes up by 10, each time they lose it goes down by 10 output message should explain what's happening.

var minButton=document.querySelector('.min-range');
var maxButton=document.querySelector(.'max-range');
var rangeButton=document.querySelector(.'range-button');


function genNumRange (min, max) {
  var min=1;
  var max=100000;
  randomNumber=Math.floor(Math.random() *
  (max-min)) +min;
} for( i=0; i < randomNumber.length; i += 10){
  
}
