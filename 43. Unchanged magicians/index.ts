//Function to show magicians name in list
function showMagician (magicians : string[]){
    magicians.forEach(name => console.log(name));
}


//Function to print "The Great" with magician names
function makeGreat (magicians : string[]){
    return magicians.map(name =>  `The Great ${name}`);
}

//Array if magicians names
let magicianNames = ["David Copperfield", "Harry Houdini", "Criss Angel"];

//Copy of array
let copyOfArray = magicianNames.slice();

//Calling the great function on copied array
let copiedArray = makeGreat(copyOfArray);

//Calling Show magician function with original array
console.log("\nOriginal Array:");
showMagician(magicianNames);

//Calling the copied array
console.log("\nCopy of Array:");
showMagician(copiedArray);
