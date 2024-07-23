//Function to show magicians name in list
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to print "The Great" with magician names
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Array if magicians names
var magicianNames = ["David Copperfield", "Harry Houdini", "Criss Angel"];
//Copy of array
var copyOfArray = magicianNames.slice();
//Calling the great function on copied array
var copiedArray = makeGreat(copyOfArray);
//Calling Show magician function with original array
console.log("\nOriginal Array:");
showMagician(magicianNames);
//Calling the copied array
console.log("\nCopy of Array:");
showMagician(copiedArray);
