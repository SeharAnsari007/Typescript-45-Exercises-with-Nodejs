var alienColor = "Green";
//Condition is right in if statement so if will be printed in terminal
console.log("\n\t\tFirst Version");
if (alienColor === "Green") {
    console.log("You shot green alien... You've earned 5 points...");
}
else {
    console.log("You have lost");
}
//Condition is right in else statement so else statement will be printed
console.log("\n\t\tSecond Version");
if (alienColor === "Blue") {
    console.log("You shot blue alien... You've lost the game...");
}
else {
    console.log("You didn't shoot green alien... You've earned 10 points...");
}
