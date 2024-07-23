let guestList = ["Kanwal" , "Hassan" , "Ahmed" , "Farwa"];

let notComing = guestList [0];

console.log(notComing, "is not coming");

guestList.splice(0 , 1 , "Xaviyan");

guestList.forEach(guests => console.log(`Hello ${guests}! You are invited for dnner today...`));