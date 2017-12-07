var inquirer = require("inquirer"); 
var wordsAvailable = ["chair", "bed", "bureau", "door", "mattress", "cabinet", "lounge"];

// set up global variables needed
var chosenWord = "";

var lettersinChosenWord = [];
var numberLetters = 0;
var blanksWithLetters = [];
var incorrectGuesses = [];

// set up counters
var winsCount = 0;
var lossesCount = 0;
var remainingGuesses = 9;
// the code calls the askForNewGuess function recursively. 
// But if the player wins or loses, then that function is called twice, incorrectly.
// adding a boolean here that is reset to be false, only if the player wins or loses, solves
// the problem - hence the variable name, problem. ;)
var problem = true;

function startGame() {
	
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
	
		function askForNewGuess() {
		
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
				checkGuesses(chosenLetter);
				roundComplete();

				// need to skip this next call if a new game as started
				//console.log(problem);
				if (problem) {
					//console.log("inside askForNewGuess");
					askForNewGuess();
				} else {
					//console.log("the line 67 call for askForNewGuess inside askForNewGuess no call");
				}
			
			});
		}

		//console.log("outside askForNewGuess");
		askForNewGuess();
		
}

function checkGuesses(chosenLetter) {
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
}

function roundComplete() {

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
		problem = false;
		//console.log(problem);
				endGame();

		// startGame();

	} else if (remainingGuesses === 0) {
		// no more guesses, so user lost
		lossesCount++;
		console.log("You lost.  Sad.");
		console.log( "\nNumber of losses: " + lossesCount + "\n----------------------");
		problem = false;
		//console.log(problem);
		//startGame();
		endGame();

	} 

}

function endGame() {
	inquirer.prompt([
		{
		type: "input",
		name: "letter",
		message: "Do you want to continue? (y or n)"
		}
	]).then(function(response) {
 
		var confirmPlay = response.letter;
		if (confirmPlay === "n") {
			console.log("Thanks for playing!");
			process.exit(0);
		}
		else if (confirmPlay === "y") {
			startGame();
		}
		
	});
	
}

startGame();








