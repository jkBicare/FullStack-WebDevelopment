var ageInput = prompt("Enter your age:");
var passwordInput = prompt("Enter your password:");
var confirmPasswordInput = prompt("Confirm your password:");

var age = Number(ageInput);

var ageMessage = "";

if (age < 13) {
    ageMessage = "You are too young.";
}
else if (age >= 13 && age < 18) {
    ageMessage = "You are a minor.";
}
else if (age >= 18 && age <= 59) {
    ageMessage = "You are an adult.";
}
else {
    ageMessage = "You are a senior.";
}

var passwordMessage = "";

if (passwordInput === confirmPasswordInput) {
    passwordMessage = "Passwords match ✅";
}
else {
    passwordMessage = "Passwords do not match ❌";
}

alert(
    "Age Result: " + ageMessage + "\n" +
    "Password Result: " + passwordMessage
);
