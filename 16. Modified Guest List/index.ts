let guestList = ["Kanwal", "Ahmed", "Farwa", "Xaviyan"];

let notComing = guestList[0];

console.log(notComing, "is not coming today");

guestList.splice(0, 1, "Hassan");

console.log("Good News! We've found a bigger table for dinner today...");

guestList.unshift("Sunbul");

guestList.push("Sehrish");

guestList.splice(3, 0, "Kanwal");

console.log("Updated guest list for dinner:");

guestList.forEach(guests => console.log(`Hello ${guests}! You are invited for dinner with me today...`));