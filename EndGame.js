var inquirer = require("inquirer");
var request = require("request");

var EndGame = function() {

  this.endGame = function() {
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
		} else if (confirmPlay === "y") {
			endGame.startgame();
		}
	});

    
    };


};

module.exports = EndGame;