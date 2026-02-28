var drumsNumbers = document.querySelectorAll(".drum").length;
for (let index = 0; index < drumsNumbers; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handleClick)    
}
function handleClick(){
    
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    this.style.color = "white";
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