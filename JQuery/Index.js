// Comparação entre javascript e Jquery:Seletor de elementos
$("h1").css("color","red");

// Comparação entre javascript e Jquery:manipulação de texto
$("button").text("texto Do query selector");
document.querySelectorAll("button").textContent = "texto";


// Comparação entre javascript e Jquery:manipulação de atributos
$("a").attr("href", "https://www.google.com/");
document.querySelector("a").setAttribute("href","https://www.google.com/")

// Comparação entre javascript e Jquery:manipulação de estilos
$("h1").css("color", "blue");
$("h1").css("font-size", "40px");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "40px";

// Comparação entre javascript e Jquery: adição de event Listeners
$("button").click(function(){
    $("h1").css("color","purple");
});
for (let index = 0; index < 5; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",function(){
        document.querySelector("h1").style.color = "purple";
    })
}

$(document).keydown(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
})

// Comparação entre javascript e Jquery: Adição e remoção de elementos
// before
const h1 = document.querySelector("h1");

h1.before("Texto antes ");

// after
h1.after(" Texto depois");

// prepend
h1.prepend("Início ");

// append
h1.append(" Final");

// before
$("h1").before("Texto antes ");

// after
$("h1").after(" Texto depois");

// prepend
$("h1").prepend("Início ");

// append
$("h1").append(" Final");

// Comparação entre javascript e Jquery: Animações
