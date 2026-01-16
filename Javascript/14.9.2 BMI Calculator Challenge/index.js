alert("Welcome to the BMI Calculator");

var weight = Number(prompt("Enter your weight in kilograms (kg):"));
var height = Number(prompt("Enter your height in meters (m):"));

var bmi = weight / (height * height);

var category = "";

if (bmi < 18.5) {
    category = "Underweight";
} 
else if (bmi < 25) {
    category = "Normal weight";
} 
else if (bmi < 30) {
    category = "Overweight";
} 
else {
    category = "Obese";
}

alert(
    "Your BMI is: " + bmi.toFixed(2) + "\n" +
    "Category: " + category
);
