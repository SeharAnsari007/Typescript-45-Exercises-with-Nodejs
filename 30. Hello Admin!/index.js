//Creating an array
var userName = ["Sehrish", "Sunbul", "Admin", "Afreen", "Sana"];
userName.forEach(function (user) {
    if (user === "Admin") {
        console.log("\n\tHello ".concat(user, "! Would you like to see a status report?"));
    }
    else {
        console.log("\n\tHello ".concat(user, "! Thank you for logging in again..."));
    }
});
