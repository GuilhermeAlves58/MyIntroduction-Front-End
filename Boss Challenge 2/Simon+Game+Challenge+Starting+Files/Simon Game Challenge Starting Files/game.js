let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function nextSequence(){
    let randonNumber = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColours[randonNumber];
    gamePattern.push(randomChosenColour);
}