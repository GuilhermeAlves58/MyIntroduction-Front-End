var drumsNumbers = document.querySelectorAll(".drum").length;
for (let index = 0; index < drumsNumbers; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handleClick)    
}
function handleClick(){
    alert("hello World");
}
