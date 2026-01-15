var num = Number(prompt("Enter a number:"));

var increment = num;
increment++;
alert("The increment of your input " + num + " is " + increment);

var decrement = num;
decrement--;
alert("The decrement of your input " + num + " is " + decrement);

var n = Number(prompt("Enter a number for looping:"));

for (var i = n; i <= n + 5; i++) {
    console.log("Increment value: " + i);
}

for (var i = num; i >= num - 5; i--) {s
    console.log("Decrement value: " + i);
}

//increment and decrement are done using loops as well as using operators.
//it is used to increase and decrease the value of a variable by 1.