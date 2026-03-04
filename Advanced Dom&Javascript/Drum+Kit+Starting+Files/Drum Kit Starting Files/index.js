var drumsNumbers = document.querySelectorAll(".drum").length;

for (let index = 0; index < drumsNumbers; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", function() {

        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);

        buttonAnimation(buttonHTML);
    });

}
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key) {

    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        default:
            console.log(key);
    }
}




function HouseKeeper(yearsOfExperiences, name, cleaningRepertoire) {
    this.yearsOfExperiences = yearsOfExperiences;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
    this.clean = function(){
        console.log(`I have cleaned ${this.cleaningRepertoire}`);
    };
}

function add(num1, num2){
    return num1 + num2;
}

function division(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2){
    return num1 + num2;
}

function calculator(num1, num2, operator){
    return operator(num1,num2);
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}