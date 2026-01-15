var firstMessage = prompt("Input a Message to turn Upper Case:");
var upperCase = firstMessage.toUpperCase();
alert(upperCase);

var secondMessage = prompt("Now Input a Message to turn Lower Case:");
var lowerCase = secondMessage.toLowerCase();
alert(lowerCase);

var name = prompt("What is your name?:");
var firstCharacter = name.slice(0, 1);
var restOfCharacter = name.slice(1, name.length);
var upperCaseLetter = firstCharacter.toUpperCase();
var lowerCaseCharacters = restOfCharacter.toLowerCase();
alert("Hello " + upperCaseLetter + lowerCaseCharacters + "! Welcome Here!");

//toUpperCase() and toLowerCase() are string methods that change the casing of the letters in a string.