var drumsNumbers = document.querySelectorAll(".drum").length;
for (let index = 0; index < drumsNumbers; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick)
}
function handleClick(){
    this.style.color = "white";
    var buttonHTML = this.innerHTML;
    switch (buttonHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default: console.log(buttonHTML)
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