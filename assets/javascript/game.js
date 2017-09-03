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
// make sure you pass in the parameters correctly. 
function SelectACharacter(yourCharacter, enemy1, enemy2, enemy3, yourCharacterHTML, enemy1HTML, enemy2HTML, enemy3HTML){
		$("#your-character").append(yourCharacterHTML);     // add selected character to your character
		$("#Enemies-To-Attack").append(enemy1HTML); // add remaining characters to enemies 
		$("#Enemies-To-Attack").append(enemy2HTML);
		$("#Enemies-To-Attack").append(enemy3HTML);
		isGameStarted = true;
		yourCharacter.position = "yourCharacter";
		enemy1.position = "enemy";
		enemy2.position = "enemy";
		enemy3.position = "enemy";
}

function SelectDefender(character, characterHTML){
		$("#Defender").append(characterHTML);
		character.position = "defender";
}

//Game starts here --------------------------------------------------

UpdateHealthBars();

// The on click events ----------------------------- 
obiHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(obi, luke, sidious, maul, obiHTML, lukeHTML, sidiousHTML, maulHTML);
	}

	else if (obi.position == "enemy" && !isThereADefender()){
		SelectDefender(obi, obiHTML);
	}
});

lukeHTML.on("click", function(){
	if(!isGameStarted){
		SelectACharacter(luke, obi, sidious, maul, lukeHTML, obiHTML, sidiousHTML, maulHTML);
	}

	else if (luke.position == "enemy" && !isThereADefender()){
		SelectDefender(luke, lukeHTML);
	}

});

sidiousHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(sidious, luke, obi, maul, sidiousHTML, lukeHTML, obiHTML, maulHTML);
	}
	else if (sidious.position == "enemy" && !isThereADefender()){
		SelectDefender(sidious, sidiousHTML);
	}
});

maulHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(maul, luke, sidious, obi, maulHTML, lukeHTML, sidiousHTML, obiHTML);
	}
	else if (maul.position == "enemy" && !isThereADefender()){
		SelectDefender(maul, maulHTML);
	}
});
