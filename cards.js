
function loadPack(packObj, cardArry) {
	//Function to load a pack into specified array
	if (packObj.loaded) {
		console.log("WARNING: " + packObj.name + " already loaded, skipping!")
		return;
	}

	else {
		var cards = [];
		var xhttp;
	  	if (window.XMLHttpRequest) {
		    //Code for modern browsers
		    xhttp = new XMLHttpRequest();
		    } else {
		    //Code for IE6, IE5
		    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  	}
	  	
	  	xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	cards = this.responseText.split("\n");
		    	cardArry.push.apply(cardArry, cards);
		    	packObj.loaded = true;
		    	console.log("Loaded " + packObj.name);
		    }
		};

		xhttp.open("GET", "blackCards/" + packObj.path, true);
		xhttp.send();
	}
}

// function packSelect(arry) {
// 	//Load all enabled packs into
// 	var loadedPacks = 0;

// 	for (var i = 0; i < packList.length; i++) {
// 		if (packList[i].enabled == true && packList[i].loaded == true) {
// 			console.log("WARNING: " + packList[i].name + " already loaded, skipping.");
// 			break;
// 		} else if (packList[i].enabled == true && packList[i].loaded == false) {
// 			loadPack(packList[i], cardPool);
// 			loadedPacks += 1;
// 		}
// 	}

// 	if (loadedPacks > 0 ) console.log("Loaded " + loadedPacks + " packs into the card pool");
// 	else console.log("WARNING: No packs loaded!");
// }

function populatePackList(packArry) {
	//Fill the pack list with the available packs
	for (var i = 0; i < packArry.length; i++) {
		var id = "#" + packArry[i].cat;
		$(id).append("<input type='checkbox' name='pack' class='card-check' value='" + i + "'>" + packArry[i].name + ".<br>");
	}
}

function changeTab(tabName) {
	//Switch active tab to element with id tabName
	var id = "#" + tabName;
	$(".tab").hide();
	$(id).show();
}

function menu(menuName) {
	var logMessage = "";
	switch(menuName) {
		case "pack":
			//Switch to pack selection menu, populates list with available packs dynamically
			populatePackList(packList);
			changeTab("packSelect");
			logMessage = "Selecting packs!";
		break;
		
		case "player":
			//Switch to player adding menu, add and remove desired number of players
			changeTab("addPlayers");
			logMessage = "Adding players!";
		break;

		case "game":
			//Switch to the game area to draw cards and use the scoreboard
			changeTab("playGame");
			drawScoreboard(gameScoreboard);
			logMessage = "Game started!";
		break;

		default:
			logMessage = "ERROR: Invalid menu name: " + menuName;
	}
	console.log(logMessage);
}

// function setPack(packArry, packIndex, bool) {
// 	//Enable and disable certain packs
// 	packArry[packIndex].enabled = bool;
// }

function drawCard(cardArry) {
	var cardIndex = Math.floor((Math.random() * cardArry.length));
	console.log("Returning " + cardIndex);
	return cardArry[cardIndex];
}

var cardPool = [];

var packList = [
	{
		name: "Base Game 1",
		cat: "base",
		path: "base1.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Base Game 1.6",
		cat: "base",
		path: "base1.6.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Base Game (UK)",
		cat: "base",
		path: "baseUK.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Base Game (Australia)",
		cat: "base",
		path: "baseAUS.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Base Game (Canada)",
		cat: "base",
		path: "baseCAN.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Base Game (US)",
		cat: "base",
		path: "baseUS.txt",
		enabled: false,
		loaded: false
	},		

	{
		name: "The First Expansion",
		cat: "expan",
		path: "expan1.txt",
		enabled: false,
		loaded: false
	},		

	{
		name: "The Second Expansion",
		cat: "expan",
		path: "expan2.txt",
		enabled: false,
		loaded: false
	},		

	{
		name: "The Third Expansion",
		cat: "expan",
		path: "expan3.txt",
		enabled: false,
		loaded: false
	},	

	{
		name: "The Fourth Expansion",
		cat: "expan",
		path: "expan4.txt",
		enabled: false,
		loaded: false
	},		

	{
		name: "The Fifth Expansion",
		cat: "expan",
		path: "expan5.txt",
		enabled: false,
		loaded: false
	},		

	{
		name: "The Sixth Expansion",
		cat: "expan",
		path: "expan6.txt",
		enabled: false,
		loaded: false
	},			

	{
		name: "The Green Box",
		cat: "expan",
		path: "expanGreen.txt",
		enabled: false,
		loaded: false
	},	

	{
		name: "The Fantasy Pack",
		cat: "misc",
		path: "miscFantasy.txt",
		enabled: false,
		loaded: false
	},				

	{
		name: "The Sci-Fi Pack",
		cat: "misc",
		path: "miscSciFi.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "The Science Pack",
		cat: "misc",
		path: "miscScience.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "The World Wide Web Pack",
		cat: "misc",
		path: "miscWWW.txt",
		enabled: false,
		loaded: false
	},

	{
		name: "Custom Cards",
		cat: "misc",
		path: "custom.txt",
		enabled: false,
		loaded: false
	}
];

