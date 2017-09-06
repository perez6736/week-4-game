// selectors for the characters

var obiHTML = $("#Obi-Wan-Kenobi");
var lukeHTML = $("#Luke-SkyWalker");
var sidiousHTML = $("#Darth-Sidious")
var maulHTML = $("#Darth-Maul");
var obiHealthHTML = $("#obi-health");
var lukeHealthHTML = $("#luke-health");
var sidiousHealthHTML = $("#sidious-health");
var maulHealthHTML = $("#maul-health");
var attackbuttonHTML = $("#Attack-Button");
var atkMessageHTML = $("#atk-message");
var defenderMessageHTML = $("#defender-message");
var winsHTML = $("#wins");
var lossesHTML = $("#losses");

//characters 
var obi = {
	name: "Obi-Wan",
	health: 120,
	attackPower: 8,
	position: "available"
}

var luke = {
	name: "Luke Skywalker",
	health: 100,
	attackPower: 8,
	position: "available"
}

var sidious = {
	name: "Darth Sidious",
	health: 150,
	attackPower: 8,
	position: "available"
}

var maul = {
	name: "Darth Maul",
	health: 180,
	attackPower: 8,
	position: "available"
}

//variables for game
var isGameStarted = false;
var losses = 0;
var wins = 0; 



//helper functions 
function isThereADefender(){
	if(obi.position === "defender" || luke.position === "defender" || sidious.position === "defender" || maul.position === "defender"){
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

function updateWinLoss(){
	lossesHTML.html("Losses: " + losses);
	winsHTML.html("Wins: " + wins);
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
		//assign new atkPower to make game a bit more difficult
		enemy1.attackPower = 5;
		enemy2.attackPower = 12;
		enemy3.attackPower = 17;

}
// 
function SelectDefender(character, characterHTML){
		$("#Defender").append(characterHTML);
		character.position = "defender";

}

//find who is attacking looking at each characters position 
function usersCharacter(){
	if(obi.position === "yourCharacter")
		return obi;
	else if (luke.position === "yourCharacter"){
		return luke;
	}
	else if (maul.position === "yourCharacter"){
		return maul;
	}
	else if (sidious.position === "yourCharacter"){
		return sidious;
	}
}

function usersCharacterHTML(){
	if(obi.position === "yourCharacter")
		return obiHTML;
	else if (luke.position === "yourCharacter"){
		return lukeHTML;
	}
	else if (maul.position === "yourCharacter"){
		return maulHTML;
	}
	else if (sidious.position === "yourCharacter"){
		return sidiousHTML;
	}
}
//returns the current defender. 
function theDefender(){
	if(obi.position === "defender")
		return obi;
	else if (luke.position === "defender"){
		return luke;
	}
	else if (maul.position === "defender"){
		return maul;
	}
	else if (sidious.position === "defender"){
		return sidious;
	}
}

function theDefenderHTML(){
	if(obi.position === "defender")
		return obiHTML;
	else if (luke.position === "defender"){
		return lukeHTML;
	}
	else if (maul.position === "defender"){
		return maulHTML;
	}
	else if (sidious.position === "defender"){
		return sidiousHTML;
	}
}

// pass the three characters in and check if they all died
function areTheyAllDead(enemy1, enemy2, enemy3){
	if (enemy1.position === "dead" && enemy2.position === "dead" && enemy3.position === "dead"){
		return true;
	}
	else{
		return false;
	}
}

function restartGame(){
	
	// set characters to original state. 
	obi.health = 120;
	obi.attackPower = 8;
	obi.position = "available";
	luke.health = 100;
	luke.attackPower = 8;
	luke.position = "available";
	sidious.health = 150;
	sidious.attackPower = 8;
	maul.position = "available";
	maul.health = 180;
	maul.attackPower = 8;
	sidious.position = "available";
	UpdateHealthBars();

	// set the divs to the original spot 
	$("#CharacterSelection").append(obiHTML);
	$("#CharacterSelection").append(lukeHTML);
	$("#CharacterSelection").append(sidiousHTML);
	$("#CharacterSelection").append(maulHTML);

	//this needs to be false to let the player pick a new character. 
	isGameStarted = false;
}


//Game starts here --------------------------------------------------

UpdateHealthBars();
updateWinLoss();

// The on click events ----------------------------- 
obiHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(obi, luke, sidious, maul, obiHTML, lukeHTML, sidiousHTML, maulHTML);
	}

	else if (obi.position === "enemy" && !isThereADefender()){
		SelectDefender(obi, obiHTML);
	}

});

lukeHTML.on("click", function(){
	if(!isGameStarted){
		SelectACharacter(luke, obi, sidious, maul, lukeHTML, obiHTML, sidiousHTML, maulHTML);
	}

	else if (luke.position === "enemy" && !isThereADefender()){
		SelectDefender(luke, lukeHTML);
	}

});

sidiousHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(sidious, luke, obi, maul, sidiousHTML, lukeHTML, obiHTML, maulHTML);
	}
	else if (sidious.position === "enemy" && !isThereADefender()){
		SelectDefender(sidious, sidiousHTML);
	}
});

maulHTML.on("click", function(){ 
	if(!isGameStarted){
		SelectACharacter(maul, luke, sidious, obi, maulHTML, lukeHTML, sidiousHTML, obiHTML);
	}
	else if (maul.position === "enemy" && !isThereADefender()){
		SelectDefender(maul, maulHTML);
	}
});


attackbuttonHTML.on("click", function(){
	if(!isThereADefender()){
		atkMessageHTML.html("There must be a defender in order to attack.");
		return;
	}
	//defenders health is reduced by the amount of atkpower of your characters 
	theDefender().health -= usersCharacter().attackPower; 
	atkMessageHTML.html("You attacked " + theDefender().name + " for " + usersCharacter().attackPower + " damage!" );
	// your characters atk power increases with atk 
	usersCharacter().attackPower += 9;
	// your characters health is decreased by defenders atkpower
	usersCharacter().health -= theDefender().attackPower;
	defenderMessageHTML.html(theDefender().name + " attacked you for " + theDefender().attackPower + " damage!");


	UpdateHealthBars();
	if(theDefender().health <= 0){ //if the defender has less than or 0 hp
		theDefender().health = 0; //set his hp to 0 so that it isnt negative
		UpdateHealthBars(); //update html 
		theDefenderHTML().detach(); // empty the defender div 
		atkMessageHTML.html("You killed " + theDefender().name);
		defenderMessageHTML.html(" ");	
		theDefender().position = "dead"; // make him die and makes attacking disabled 

		//check if they picked sidious, luke, maul and obi and see if all the enemies are dead. 
		if(areTheyAllDead(luke, obi, maul) || areTheyAllDead(obi, maul, sidious) || areTheyAllDead(obi, luke, sidious) || areTheyAllDead(luke, maul, sidious)){
			wins += 1;
			updateWinLoss();
			restartGame();
		}
	}

	if(usersCharacter().health <= 0){ //if you have less than or 0 hp 
		usersCharacter().health = 0; //set your health to 0 so it isn't negative 
		UpdateHealthBars(); //update html 
		atkMessageHTML.html(theDefender().name + "  killed you. You lost." );
		defenderMessageHTML.html(" ");	
		usersCharacter().position = "dead" //make you dead and unable to attack. 
		losses += 1;
		updateWinLoss();
		restartGame();
	}
});
