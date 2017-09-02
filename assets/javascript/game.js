// selectors for the characters

var obiHTML = $("#Obi-Wan-Kenobi");
var lukeHTML = $("#Luke-SkyWalker");
var sidiousHTML = $("#Darth-Sidious")
var maulHTML = $("#Darth-Maul");

//characters 
var obi = {
	health: 120,
	attackPower: 8
}

var luke = {
	health: 100,
	attackPower: 8
}

var sidious = {
	health: 150,
	attackPower: 8
}

var maul = {
	health: 180,
	attackPower: 8
}

//variables for game
var isGameStarted = false;
var isADefender = false;

//  on click events 

//Selecting a character. 

if(!isGameStarted){ //check if game is 
	obiHTML.on("click", function(){ //selects obiwan
		$("#your-character").append(obiHTML);
		$("#Enemies-To-Attack").append(lukeHTML);
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(maulHTML);

	});

	lukeHTML.on("click", function(){ //selects luke
		$("#your-character").append(lukeHTML);
		$("#Enemies-To-Attack").append(obiHTML);
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(maulHTML);

	});

	sidiousHTML.on("click", function(){ ///selects sidious
		$("#your-character").append(sidiousHTML);
		$("#Enemies-To-Attack").append(lukeHTML);
		$("#Enemies-To-Attack").append(obiHTML);
		$("#Enemies-To-Attack").append(maulHTML);

	});

	maulHTML.on("click", function(){ //selects  maul
		$("#your-character").append(maulHTML);
		$("#Enemies-To-Attack").append(lukeHTML);
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(obiHTML);

	});
}