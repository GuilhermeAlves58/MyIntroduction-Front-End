let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let userChosenColour = $(".btn").on("click", function(){
        console.log(this.id);
    });

userClickedPattern.push(userChosenColour);

function nextSequence(){

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).addClass("flash");

    setTimeout(function(){
        $("#" + randomChosenColour).removeClass("flash");
    }, 200);

    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    
}

nextSequence();  