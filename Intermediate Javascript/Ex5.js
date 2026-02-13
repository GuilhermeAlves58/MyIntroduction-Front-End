function whosPaying(names) {

    
    var listLenght = names.length;
    var selectedPerson = Math.floor(Math.random() * listLenght);
    return console.log(names[selectedPerson] + " is going to buy lunch today!");
      
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);