function bmiCalculator(weight,height){
    var cal  = Math.floor(weight / (height ** 2));
    return cal;
}

console.log(bmiCalculator(65,1.8));
