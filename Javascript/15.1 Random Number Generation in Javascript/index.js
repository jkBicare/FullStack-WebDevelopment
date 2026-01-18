function getCleanName(message) {
    return prompt(message)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "");
}

function getLoveScore(max) {
    return Math.floor(Math.random() * max) + 1;
}

var personOneName = getCleanName("What is your full name?");
var personTwoName = getCleanName("What is the full name of the other person?");

var countOne = personOneName.length;
var countTwo = personTwoName.length;

var chemistry = (countOne + countTwo) * 2;
var loveScore = getLoveScore(chemistry) + 25;

alert("Your love score is " + loveScore + "% ❤️");


//Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).