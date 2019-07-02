//alert("js is working");
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
//let randomChosenColour = buttonColours[]
var level = 0;
var started = false;
$(".container").hide();
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  playSound(userChosenColour);
})

$(document).keypress(function(event) {
if(!started) {
  $(".rules").remove();
  $(".container").show();
  $("h1").text("Level"+ level);
  nextSequence();
  started = true;
}

});

function checkAnswer(currentLevel) {
  console.log("user: " + userClickedPattern[currentLevel] + " game: " + gamePattern[currentLevel]);
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]) {
    console.log("success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      },1000);
    }
  }
  else {
    console.log("wrong");
    playSound("wrong");
    //$("h1").text("Wrong Answer!");
    $("body").addClass("game-over");
    setTimeout(function () {
     $("body").removeClass("game-over");
      //$("h1").text("Press A Key to Start");
    },2000);
    $("h1").text("Game Over, Press Any Key to Restart");
    level = 0;
    started = false;
    gamePattern = [];
  }
}



function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*10)%4;
//console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level += 1;
  $("h1").text("Level "+ level);
}

function playSound(name) {
  var music = "sounds/" + name + ".mp3";
  var audio = new Audio(music);
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
};
