$(document).ready(function(){

var randomScore = Math.floor((Math.random() * 101) + 19);

var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

var wins = 0;
var losses = 0;

var totalScore = 0;

console.log("this is the random score " +randomScore);

console.log("red crystal " +red);
console.log("blue crystal " +blue);
console.log("yellow crystal " +yellow);
console.log("green crystal " +green);

var getRandom = function(){
	randomScore = Math.floor((Math.random() * 101) + 19);
	red = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	yellow = Math.floor((Math.random() * 12) + 1);
	green = Math.floor((Math.random() * 12) + 1);
}
      

var reset = function(){
	totalScore = 0;
}

// RED CRYSTAL //
$("#red").on("click", function() {
  totalScore = totalScore + red;
  console.log(totalScore);
  $("#scoreBoard").html(totalScore);
 });

$(".crystal").on("click", function() {

console.log("crystalclicked");

if (totalScore == randomScore){
	wins = wins + 1;
	reset();
	getRandom();
	$("#winning").html("Wins: "+ wins);

} else if (totalScore > randomScore) {
    losses ++;
    reset();
	getRandom();
    $("#lose").html("Losses: "+ losses);
    $("#random").html(randomScore);
    

}});

// BLUE CRYSTAL //
$("#blue").on("click", function() {
  totalScore = totalScore + blue;
  console.log(totalScore);
  $("#scoreBoard").html(totalScore);

});

$(".crystal").on("click", function() {

console.log("crystalclicked");

if (totalScore == randomScore){
	wins = wins + 1;
	randomScore = Math.floor((Math.random() * 101) + 19);
	red = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	yellow = Math.floor((Math.random() * 12) + 1);
	green = Math.floor((Math.random() * 12) + 1);
	totalScore = 0;


}});

// YELLOW CRYSTAL //
$("#yellow").on("click", function() {
  totalScore = totalScore + yellow;
  console.log(totalScore);
  $("#scoreBoard").html(totalScore);
});

$(".crystal").on("click", function() {

console.log("crystalclicked");

if (totalScore == randomScore){
	wins = wins + 1;
	randomScore = Math.floor((Math.random() * 101) + 19);
	red = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	yellow = Math.floor((Math.random() * 12) + 1);
	green = Math.floor((Math.random() * 12) + 1);
	totalScore = 0;


}});

// GREEN CRYSTAL //
$("#green").on("click", function() {
  totalScore = totalScore + green;
  console.log(totalScore);
  $("#scoreBoard").html(totalScore);
});

$(".crystal").on("click", function() {

console.log("crystalclicked");

if (totalScore == randomScore){
	wins = wins + 1;
	randomScore = Math.floor((Math.random() * 101) + 19);
	red = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	yellow = Math.floor((Math.random() * 12) + 1);
	green = Math.floor((Math.random() * 12) + 1);
	totalScore = 0;

}});

$("#random").text(randomScore);









});
