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

console.log("Unfortunately! The new diner table would not arrive on time! So I can invite only 2 friends to dinner with me");

while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}! You are not invited on dinner`)
}

console.log("Invitation to the last two guests");

guestList.forEach(lastGuests => console.log(`Hello ${lastGuests}! Luckily you are still invited for dinner`));

guestList.pop();
guestList.pop();

console.log("Empty Array:", guestList);