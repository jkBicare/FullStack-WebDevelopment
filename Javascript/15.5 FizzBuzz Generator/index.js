var maxNumber = Number(prompt("How many numbers do you want to print?"));
var fizzBuzzArray = [];

for (var i = 1; i <= maxNumber; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArray.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    }
    else if (i % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
    else {
        fizzBuzzArray.push(i);
    }
}

alert("Result:\n" + fizzBuzzArray.join(", "));
