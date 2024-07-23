var current_user = ["Ali", "Usman", "Hamza", "Fahad", "Muzammil"];
var new_user = ["Zafar", "FAHAD", "Imran", "Zohaib", "usman"];
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (cuuernt_one_user) { return cuuernt_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("\n\tUser name ".concat(new_one_user, " is already existing! Please select a new user name."));
    }
    else {
        console.log("\n\tUser name ".concat(new_one_user, " is available!"));
    }
});
