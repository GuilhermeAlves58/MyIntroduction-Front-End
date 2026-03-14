// Adicionar comentários 
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

// Adicionar comentários 
let userChosenColour = $(".btn").on("click", function(){
        console.log(this.id);
        playSound(this.id)
        animatePress(this.id);
    });

userClickedPattern.push(userChosenColour);

// Adicionar comentários 
function nextSequence(){

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
nextSequence();  