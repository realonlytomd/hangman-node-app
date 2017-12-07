var inquirer = require("inquirer");
var request = require("request");

var RoundComplete = function() {

  this.roundComplete = function() {

  	//log progress in game so far for the user
	console.log("\nWin Count: " + winsCount + "\nLoss Count: " + 
		lossesCount + "\nGuesses Left: " + remainingGuesses);

	//log progress in game so far for the user
	console.log("\n" + blanksWithLetters.join("  "));
	console.log("Incorrect guesses so far: " + incorrectGuesses.join("  "));
	problem = true;
	// check to see if the user won
	if (lettersinChosenWord.toString() === blanksWithLetters.toString()) {
		// guesses are all correct
		winsCount++;
		console.log("YOU WON!!");
		console.log("\nNumber of wins: " + winsCount + "\n----------------------");
		roundComplete.endgame();
		problem = false;
		//console.log(problem);

	} else if (remainingGuesses === 0) {
		// no more guesses, so user lost
		lossesCount++;
		console.log("You lost.  Sad.");
		console.log( "\nNumber of losses: " + lossesCount + "\n----------------------");
		roundComplete.endgame();
		problem = false;
		//console.log(problem);

	} 

    
    };


};

module.exports = RoundComplete;