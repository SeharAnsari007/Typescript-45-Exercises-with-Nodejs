//Making a function using rest parameters
function makingSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich using the following items:\n");
    items.forEach(function (item) { return console.log(item); });
    console.log("\nNow enjoy your Sandwich!");
}
//Calling the function three times using different number of parameters
console.log("\n\t\t First Version:");
makingSandwich("Chicken", "Bread", "Cheese", "Cucumber");
console.log("\n\t\t Second Version:");
makingSandwich("Bread", "Butter");
console.log("\n\t\t Third Version:");
makingSandwich("Bread", "Butter", "Kabab", "Cheese", "Ketch-up", "Mayo Garlic Sauce", "Egg", "Tomato", "Cucumber");
