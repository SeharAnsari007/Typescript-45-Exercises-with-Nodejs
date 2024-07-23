//Making a function to print magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//Making an array containing magicians names
var magicians_names = ["David Copperfield", "Harry Houdini", "Criss Angel"];
//Calling the function
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
