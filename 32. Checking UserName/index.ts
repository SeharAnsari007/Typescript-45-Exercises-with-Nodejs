let current_user = ["Ali", "Usman", "Hamza", "Fahad", "Muzammil"];

let new_user = ["Zafar", "FAHAD", "Imran", "Zohaib", "usman"];

new_user.forEach(new_one_user => {
    let our_condition = current_user.some(cuuernt_one_user => cuuernt_one_user.toLowerCase() === new_one_user.toLowerCase()); 
    if (our_condition) {
        console.log(`\n\tUser name ${new_one_user} is already existing! Please select a new user name.`);
    }
    else {
        console.log(`\n\tUser name ${new_one_user} is available!`);
    }
});