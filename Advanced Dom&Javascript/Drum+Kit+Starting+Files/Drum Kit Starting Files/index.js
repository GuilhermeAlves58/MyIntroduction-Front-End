
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handleClick)    
}
function handleClick(){
    alert("hello World");
}
