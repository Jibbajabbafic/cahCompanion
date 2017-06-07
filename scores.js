var gameScoreboard = [];

function addPlayer(playerName, scoreboard) {
	//Pushes a new player object onto the chosen scoreboard
	for (var i = 0; i < scoreboard.length; i++) {
		if (scoreboard[i].player == playerName) {
			console.log("WARNING: Player already exists!");
			return 0;
		}
	}
	var newPlayer = {player: playerName, score: 0}
	scoreboard.push(newPlayer)
	console.log("Added " + playerName + " to scoreboard")
	return 1;
}

function removePlayer(playerName, scoreboard) {
	//Removes a player from the scoreboard
	for (var i = 0; i < scoreboard.length; i++) {
		if (scoreboard[i].player == playerName) {
			scoreboard.splice(i,1);
			console.log("Removed " + playerName + " from scoreboard");
			return;
		}
	}
	//If player not found show an error (could use try, catch and throw instead)
	console.log("ERROR: Player " + playerName + " does not exist!");
}

function addWin(playerName, wins = 1, scoreboard) {
	//Adds a specified number of wins to specified player's score
	for (var i = 0; i < scoreboard.length; i++) {
		if (scoreboard[i].player == playerName) {
			scoreboard[i].score += wins;
			console.log("Added " + wins + " wins to " + scoreboard[i].player);
			return;
		}
	}
	//If player not found show an error (could use try, catch and throw instead)
	console.log("ERROR: Player does not exist!");
}

function removeWin(playerName, wins = 1, scoreboard) {
		//Removes a specified number of points from the specified player's score
	for (var i = 0; i < scoreboard.length; i++) {
		if (scoreboard[i].player == playerName) {
			if(scoreboard[i].score > 0) {
				scoreboard[i].score -= wins;
				console.log(scoreboard[i].player + " traded in their hand and lost " + wins + " point!");
			}
			else {
				console.log("WARNING: Player already on 0 points!")
			}
			return;
		}
	}
	//If player not found show an error (could use try, catch and throw instead)
	console.log("ERROR: Player does not exist!");
}

function sortScores(arry) {
	//Returns a sorted array, sorted by descending score (highest at arry[0])
	return arry.sort(
		function(a,b){return b.score-a.score}
	)
}

function showPlayerScore(playerName, scoreboard) {
	for (var i = 0; i < scoreboard.length; i++) {
		if(scoreboard[i].player == playerName) {
			return (playerName + ": " + scoreboard[i].score);
		}
	}
	console.log("ERROR: Player not found!")
}

function printScoreboard(scoreboard) {
	//Prints the current scores to the console, sorting them and announcing a winner

	//Check if any players in the array
	if (scoreboard.length == 0) {
		console.log("ERROR: No players added yet!");
		return;
	}

	//Sort the array by score
	var scoreList = sortScores(scoreboard)

	console.log("Here are the scores so far:")

	//Cycle through each player printing their name and score
	for (var i = 0; i < scoreboard.length; i++) {
	 console.log(scoreboard[i].player + ": " + scoreboard[i].score);
	}

	//List of winner for a tie situation
	var winnerList = [];

	//Add the person with the highest score
	winnerList.push(scoreboard[0])

	//Check if any other players have the same score
	for (var i = 1; i < scoreboard.length; i++) {
		if(winnerList[0].score == scoreboard[i].score) {
			winnerList.push(scoreboard[i]);
		}
	}

	//Check if there is more than 1 winner and announce a tie
	if (winnerList.length > 1) {
		console.log("It's a tie between these dickheads:")
		for (var i = 0; i < winnerList.length; i++) {
			console.log(winnerList[i].player)
		}
	}
	//Otherwise announce the winner
	else console.log("The winner is " + scoreList[0].player + "! \n\n");

}

function drawScoreboard(scoreArry) {
	var scoreList = $("#scoreList");
    scoreList.empty();
    for (var i = 0; i < scoreArry.length; i++) {
    	var player = scoreArry[i].player;
    	var score = scoreArry[i].score;
    	scoreList.append('<li class="playerScores"><input type="button" id="win" value="+" onClick="addWin(`' + player +'`, 1, gameScoreboard)"><input type="button" id="tradeIn" value="-" onClick="removeWin(`' + player +'`, 1, gameScoreboard)">'+ player +' : '+ score+'</li>');
    }
}

function resetScoreboard(scoreboard) {
	//Function to reset scoreboard
	scoreboard = [];
}

function resetPlayer(playerName, scoreboard) {
	//Resets the specified player's score
	for (var i = 0; i < scoreboard.length; i++) {
		if (scoreboard[i].player == playerName) scoreboard[i].score = 0;
	}
}