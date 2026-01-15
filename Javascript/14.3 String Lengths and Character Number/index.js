var Message = prompt("Input a Message:");
var maxInput = 200;
var messageCount = Message.length;
var remainingLetters = 200 - Message.length;

alert(Message);
alert("You have inputted " + messageCount + " letters. You only have " + remainingLetters + " remaining letters to be input.");

//variable.length is used to count the number of characters in a string.