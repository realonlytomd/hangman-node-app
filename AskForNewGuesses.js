var inquirer = require("inquirer");
var request = require("request");

var CheckGuesses = require("./CheckGuesses");
var RoundComplete = require("./RoundComplete");

var AskForNewGuesses = function() {
	
	this.askForNewGuess = function() {

				inquirer.prompt([
    		// prompt for the user's guess.
				{
					type: "input",
					name: "letter",
					message: "HOUSEHOLD FURNITURE HANGMAN: Guess a letter!"
				}
			])
			.then(function(response) {
    		
				var chosenLetter = response.letter;
				//console.log("letter chosen: " + chosenLetter);
				askForNewGuess.checkGuesses(chosenLetter);
				askForNewGuess.roundComplete();

				// need to skip this next call if a new game as started
				//console.log(problem);
				if (problem) {
					//console.log("inside askForNewGuess");
					askForNewGuess();
				} else {
				}
			
			});
		}
		//console.log("outside askForNewGuess");
		askForNewGuess();

  };


  module.exports = AskForNewGuesses;