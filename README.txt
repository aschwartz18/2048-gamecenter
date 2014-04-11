README.txt
Allison Schwartz
Assignment 4
CompSci 20
Prof. Ming Chow

--------------------------------------------------------------------------------

1. Sections that have been implemented:
	GET /scores.json API
	/ root API
	POST /submit.json API
	Enabling cross-origin resource sharing
	Deploying to Heroku

	Sections that have not been implemented:
	Adding CSS file to root API

2. I discussed the assignment with multiple TA's (Jasper, Conner, Nate), as well as 
	briefly with various students in the class.

3. I spent approximately 15 hours completing the assignment.

5. Storage:
	Score and grid are both stored and called in the game_manager.js file
	Both are stored in the object GameManager.prototype
	Score is stored as GameManager.prototype.score
	Grid is stored as GameManager.prototype.grid

6. Modifications to the source code:
	Modifications to index.html:
		Added script reference to JQuery in head

	Modifications to game_manager.js:
		In the function GameManager.prototype.actuate(), inserted Ajax post request. Sample code:
		    var jgrid = JSON.stringify(this.grid);
		    $.post( "http://rocky-dawn-8148.herokuapp.com/submit.json", {
        		username: usr,
        		score: this.score,
        		grid: this.grid,
      		});

