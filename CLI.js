//  inquirer, and request npm packages
var inquirer = require("inquirer");
var request = require("request");


// set up global variables
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

// need my word.js file
var Word = require("./Word.js");

// set up new word constructor
var NewWord = new Word();

NewWord.startGame();