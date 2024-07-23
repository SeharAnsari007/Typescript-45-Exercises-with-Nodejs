//Making a function to print magicians names

function show_magician (magicians : string[]) {
    magicians.forEach(name => console.log(name)
    );
}

//Making an array containing magicians names

let magicians_names = ["David Copperfield", "Harry Houdini", "Criss Angel"];

//Calling the function

show_magician(magicians_names);