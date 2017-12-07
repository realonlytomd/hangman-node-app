var inquirer = require("inquirer");
var request = require("request");

var EndGame = require("./EndGame");
var AskForNewGuesses = require("./AskForNewGuesses");

var Word = function() {

	this.startGame = function() {
	
	chosenWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
	//console.log("chosen Word: " + chosenWord);

	lettersinChosenWord = chosenWord.split("");
	//console.log("lettersinChosenWord: " + lettersinChosenWord);	

	numberLetters = lettersinChosenWord.length;
	//console.log(numberLetters);

	//reset variables that need to be reset at the beginning of each round of game
	remainingGuesses = 9;
	incorrectGuesses = [];
	blanksWithLetters = [];

	// fill in the blanks (not yet guessed) and the successful guesses
	for (i = 0; i < numberLetters; i++) {
		blanksWithLetters.push("_");
	} 

	//console.log(blanksWithLetters);
	console.log("\n" + blanksWithLetters.join("  "));

	//set my inquire into a function so it can be recalled
		
	startGame.askForNewGuess();
	
	}


};

module.exports = Word;
