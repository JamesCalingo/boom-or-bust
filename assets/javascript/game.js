// Making the variables for the start of the game
var wins = 0;
var losses = 0;
var goal = Math.floor(Math.random() * 100) + 20;
var total = 0;
var buttonPress = "";
// The function that will reset the game when won or lost
function newGame () {
  goal = Math.floor(Math.random() * 100) + 20;
  total = 0;
  $("#target").text(goal);
  $("#score").text(total);

  $("img").each(function() {
    $(this).attr("data-value", Math.floor(Math.random() * 10) + 1);
  });
}
// Numbers written on the page
$("#target").text(goal);
$("#score").text(total);
$("#win").text(wins);
$("#lose").text(losses);

// Function to have buttons give value

$("img").each(function() {
  $(this).attr("data-value", Math.floor(Math.random() * 10) + 1);
});

$("img").on("click", function(){
  
  buttonPress = parseInt($(this).attr("data-value"));
  total += buttonPress;
  $("#score").text(total);

// Win and loss conditions with reset
if(goal === total){
  alert("You won! Click OK to play again!\nRemember, the goal and chip values are different this time, so good luck!");
  wins++;
  newGame ();
  $("#win").text(wins);
}

if(goal < total){
  alert("You busted! Too bad...better luck next time? Click OK to play again, and remember that the goal and chip values are different this time.");
  losses++;
  newGame ();
  $("#lose").text(losses);
}

})