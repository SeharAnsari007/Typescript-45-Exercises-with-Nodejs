//Making a function to print magicians names

function show_magicians (magicians : string[]) {
    magicians.forEach(name => console.log(name));
}

function make_great (magicians : string[]){
    return magicians.map(name => `The great ${name}`)
}

//Making an array containing magicians names

let magicians_names = ["David Copperfield", "Harry Houdini", "Criss Angel"];

//Calling the function

let great_magicians = make_great(magicians_names);

show_magicians(great_magicians);
