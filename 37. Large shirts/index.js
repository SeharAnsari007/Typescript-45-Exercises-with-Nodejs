//Making a function
function shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I  Love Typescript"; }
    console.log("\nCreating a ".concat(size, " shirt with ").concat(message, " printed on it!"));
}
;
//Calling the function with by default values
shirt();
//Calling the function with a modification in size 
shirt("Medium");
//Calling the function with a modified size and message
shirt("Small", "I love Javascript");
