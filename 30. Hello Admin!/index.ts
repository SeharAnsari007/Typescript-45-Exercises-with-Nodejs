//Creating an array
let userName = ["Sehrish", "Sunbul", "Admin", "Afreen", "Sana"];

userName.forEach(user => {
    if (user === "Admin") {
        console.log(`\n\tHello ${user}! Would you like to see a status report?`);
    }
    else {
        console.log(`\n\tHello ${user}! Thank you for logging in again...`);
    }
}
)