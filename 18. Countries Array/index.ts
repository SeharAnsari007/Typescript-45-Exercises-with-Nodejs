//array of countries to visit and print it
let countriesToVisit = ["Turkey", "Italy", "Switzerland", "Germany", "France"];
console.log("Original Order:", countriesToVisit);

//Print array in alphabetical order without modifying the original one
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Showing that array is still in original form
console.log("Still in Original Order:", countriesToVisit);

//Print array in reverse alphabetical order without modifying the original one
console.log("Reverse Alphabetical Order:", [...countriesToVisit].sort().reverse());

//Showing again that array is still in original form
console.log("Still in Original Order:", countriesToVisit);

//Reversing the order of original array
console.log("Reverse Original Array:", countriesToVisit.reverse());

//Reversing again the order to get original array
console.log("Reverse again the array", countriesToVisit.reverse());

//Changing original array in alphabetical order
console.log("Modifying original array in Alphabetical Order:", countriesToVisit.sort());

//Changing original array in reverse alphabetical order
console.log("Modifying original array in Reverse Alphabetical Order:", countriesToVisit.sort().reverse());