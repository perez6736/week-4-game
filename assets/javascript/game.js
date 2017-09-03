// selectors for the characters

var obiHTML = $("#Obi-Wan-Kenobi");
var lukeHTML = $("#Luke-SkyWalker");
var sidiousHTML = $("#Darth-Sidious")
var maulHTML = $("#Darth-Maul");
var obiHealthHTML = $("#obi-health");
var lukeHealthHTML = $("#luke-health");
var sidiousHealthHTML = $("#sidious-health");
var maulHealthHTML = $("#maul-health");

//characters 
var obi = {
	health: 120,
	attackPower: 8,
	position: "available"
}

var luke = {
	health: 100,
	attackPower: 8,
	position: "available"
}

var sidious = {
	health: 150,
	attackPower: 8,
	position: "available"
}

var maul = {
	health: 180,
	attackPower: 8,
	position: "available"
}

//variables for game
var isGameStarted = false;


//helper functions 
function isThereADefender(){
	if(obi.position == "defender" || luke.position == "defender" || sidious.position == "defender" || maul.position == "defender"){
		return true;
	}
	else{
		return false;
	}
} 
function UpdateHealthBars(){ //this will update the health on the html
	obiHealthHTML.html(obi.health);
	lukeHealthHTML.html(luke.health);
	sidiousHealthHTML.html(sidious.health);
	maulHealthHTML.html(maul.health);
}

//Game starts here --------------------------------------------------

UpdateHealthBars();

// The on click events ----------------------------- 
obiHTML.on("click", function(){ 
	if(!isGameStarted){ //check if game is started
		$("#your-character").append(obiHTML);     // add selected character to your character
		$("#Enemies-To-Attack").append(lukeHTML); // add remaining characters to enemies 
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(maulHTML);
		isGameStarted = true;
		obi.position = "yourCharacter";
		luke.position = "enemy";
		sidious.position = "enemy";
		maul.position = "enemy";
	}
	// check if character is an enemy and if there is already a defender
	else if (obi.position == "enemy" && !isThereADefender()){
		$("#Defender").append(obiHTML);
		obi.position = "defender";
	}

});

lukeHTML.on("click", function(){
	if(!isGameStarted){
		$("#your-character").append(lukeHTML);
		$("#Enemies-To-Attack").append(obiHTML);
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(maulHTML);
		isGameStarted = true;
		obi.position = "enemy";
		luke.position = "yourCharacter";
		sidious.position = "enemy";
		maul.position = "enemy";
	}

	else if (luke.position == "enemy" && !isThereADefender()){

		$("#Defender").append(lukeHTML);
		luke.position = "defender";
	}

});

sidiousHTML.on("click", function(){ 
	if(!isGameStarted){
		$("#your-character").append(sidiousHTML);
		$("#Enemies-To-Attack").append(lukeHTML);
		$("#Enemies-To-Attack").append(obiHTML);
		$("#Enemies-To-Attack").append(maulHTML);
		isGameStarted = true;
		obi.position = "enemy";
		luke.position = "enemy";
		sidious.position = "yourCharacter";
		maul.position = "enemy";
	}
	else if (sidious.position == "enemy" && !isThereADefender()){
		$("#Defender").append(sidiousHTML);
		sidious.position = "defender";
	}
});

maulHTML.on("click", function(){ 
	if(!isGameStarted){
		$("#your-character").append(maulHTML);
		$("#Enemies-To-Attack").append(lukeHTML);
		$("#Enemies-To-Attack").append(sidiousHTML);
		$("#Enemies-To-Attack").append(obiHTML);
		isGameStarted = true;
		obi.position = "enemy";
		luke.position = "enemy";
		sidious.position = "enemy";
		maul.position = "yourCharacter";
	}
	else if (maul.position == "enemy" && !isThereADefender()){
		$("#Defender").append(maulHTML);
		maul.position = "defender";
	}
});
