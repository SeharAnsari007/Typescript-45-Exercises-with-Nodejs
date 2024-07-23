//Creating an Array
var userName = ["Sehrish", "Sunbul", "Kanwal", "Admin", "Afreen"];
userName = [];
if (userName.length === 0) {
    console.log("\n\tWe need to find some users!");
}
else {
    userName.forEach(function (user) {
        if (user === "Admin") {
            console.log("\n\tHello ".concat(user, "! Would you like to see a status report?"));
        }
        else {
            console.log("\n\tHello ".concat(user, "! Thank you for logging in again..."));
        }
    });
}
