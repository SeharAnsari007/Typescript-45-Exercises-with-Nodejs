//Making a function

function shirt (size : string = "Large", message : string = "I  Love Typescript") {
    console.log(`\nCreating a ${size} shirt with ${message} printed on it!`);
};

//Calling the function with by default values
shirt();

//Calling the function with a modification in size 
shirt("Medium");

//Calling the function with a modified size and message
shirt("Small", "I love Javascript");