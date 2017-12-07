var inquirer = require("inquirer");
var request = require("request");

var CheckGuesses = function() {

  this.checkGuesses = function(chosenLetter) {
  	// need to check to see if the letter guessed is in the chosen word at all
	var isLetter = false;

	for (i = 0; i < numberLetters; i++) {

		if (lettersinChosenWord[i] === chosenLetter) {
			isLetter = true;
			//console.log(isLetter);
		}
	}

	// then if it is in the word, find out where, and replace it in the
	// variable that shows progress
	if (isLetter) {
		for(var i = 0; i < numberLetters; i++) {
			if (lettersinChosenWord[i] === chosenLetter) {
				blanksWithLetters[i] = chosenLetter;
				//console.log(blanksWithLetters);
			}
		}

		// but if not, then player loses one guess
	} else {
		incorrectGuesses.push(chosenLetter);
		remainingGuesses--;
		//console.log(isLetter);
		//console.log(remainingGuesses);
		//console.log(blanksWithLetters);
	}

    
    };

};

module.exports = CheckGuesses;