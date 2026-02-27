var drumsNumbers = document.querySelectorAll(".drum").length;
for (let index = 0; index < drumsNumbers; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handleClick)    
}
function handleClick(){
    alert("hello World");
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