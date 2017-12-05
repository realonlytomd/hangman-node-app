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

function startGame() {
	chosenWord = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)];
	console.log("chosen Word: " + chosenWord);

	lettersinChosenWord = chosenWord.split("");
	console.log("lettersinChosenWord: " + lettersinChosenWord);	

	numberLetters = lettersinChosenWord.length;
	console.log(numberLetters);

	//reset variables that need to be at the beginning of each round of game
	remainingGuesses = 9;
	incorrectGuesses = [];
	blanksWithLetters = [];

	// fill in the blanks (not yet guessed) and the successful guess
	for (i = 0; i < numberLetters; i++) {
		blanksWithLetters.push("_");
	} 

	console.log(blanksWithLetters);
	console.log(blanksWithLetters.join("  "));

	inquirer.prompt([
    // prompt for the user's guess.
		{
			type: "input",
			name: "letter",
			message: "Guess a letter!"
		}
    ])
	.then(function(response) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
	var chosenLetter = response.letter;
	console.log("letter chosen: " + chosenLetter);
	checkGuesses(chosenLetter);
	});


}

function checkGuesses(chosenLetter) {
	// need to check to see if the letter guessed is in the chosen word at all
	var isLetter = false;

	for (i = 0; i < numberLetters; i++) {

		if (lettersinChosenWord[i] === chosenLetter) {
			isLetter = true;
			console.log(isLetter);
		}
	}

	if (isLetter) {
		for(var i = 0; i < numberLetters; i++) {
			if (lettersinChosenWord[i] === chosenLetter) {
				blanksWithLetters[i] = chosenLetter;
				console.log(blanksWithLetters);
			}
		}
	} else {
		incorrectGuesses.push(chosenLetter);
		remainingGuesses--;
		console.log(isLetter);
		console.log(remainingGuesses);
		console.log(blanksWithLetters);
	}
}


console.log("wordsAvailable = " + wordsAvailable);
startGame();





