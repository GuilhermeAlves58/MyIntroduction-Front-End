function fizzBuzz(number){
    var statusOfNumber = [number];
    if (statusOfNumber % 3 == 0 && statusOfNumber % 5 == 0) {
        console.log(statusOfNumber + ", fizzBuzz");
    } 
    else if(statusOfNumber % 5 == 0){
        console.log(statusOfNumber + ", Buzz");
    }
    else if (statusOfNumber % 3 == 0){
        console.log(statusOfNumber + ", fizz");
    }
    else{
        console.log(statusOfNumber)
    }
}

fizzBuzz(15);