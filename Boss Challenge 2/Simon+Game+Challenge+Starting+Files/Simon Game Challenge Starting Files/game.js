// Adicionar comentários 
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;

 
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

$(document).on("keydown",function(event){
    if(event.key === "a" || event.key === "A" ){
        nextSequence(); 
    }
})

function nextSequence(){

    userClickedPattern = [];

    $("#level-title").text( "Level "+ level++);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour)
    playSound(randomChosenColour)

    
    
}

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
        playSound("wrong");
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
        },1000);
        $("#level-title").text("Game Over, Press Any Key to Restart");

    }
}

function statOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];

}