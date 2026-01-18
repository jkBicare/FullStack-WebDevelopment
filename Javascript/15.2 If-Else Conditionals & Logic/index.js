function getCleanName(message) {
    return prompt(message)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "");
}

function getLoveScore(max) {
    return Math.floor(Math.random() * max) + 1;
}

var personOneName = getCleanName("What is your name?");
var personTwoName = getCleanName("What is the name of the other person?");

var countOne = personOneName.length;
var countTwo = personTwoName.length;

var chemistryBase = (countOne + countTwo) * 2;
var loveScore = getLoveScore(chemistryBase) + 25;

loveScore = Math.min(loveScore, 100);

var chemistryType = "";

if (loveScore <= 20) {
    chemistryType = "Very Low Chemistry 😬";
} 
else if (loveScore <= 40) {
    chemistryType = "Low Chemistry 🤔";
} 
else if (loveScore <= 60) {
    chemistryType = "Average Chemistry 🙂";
} 
else if (loveScore <= 80) {
    chemistryType = "Strong Chemistry 💕";
} 
else {
    chemistryType = "Perfect Match 🔥❤️";
}

alert(
    "Your love score is " + loveScore + "%.\n" +
    "Chemistry Result: " + chemistryType
);
