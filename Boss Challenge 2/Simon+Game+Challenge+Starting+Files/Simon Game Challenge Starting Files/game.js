// Adicionar comentários 
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;

// Adicionar comentários 
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// Adicionar comentários 
$(document).on("keydown",function(event){
    if(event.key === "a" || event.key === "A" ){
        nextSequence(); 
    }
})
// Adicionar comentários 
function nextSequence(){

    userClickedPattern = [];

    $("#level-title").text( "Level "+ level++);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour)
    playSound(randomChosenColour)

    
    
}
// Adicionar comentários 
function playSound(name){
        let audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 200);
}  

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong")
    }
}
    