var guestList = ["Kanwal", "Hassan", "Ahmed", "Farwa"];
var notComing = guestList[0];
console.log(notComing, "is not coming");
guestList.splice(0, 1, "Xaviyan");
guestList.forEach(function (guests) { return console.log("Hello ".concat(guests, "! You are invited for dnner today...")); });
