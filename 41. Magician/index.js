//Making a function to print magicians names
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Making an array containing magicians names
var magicians_names = ["David Copperfield", "Harry Houdini", "Criss Angel"];
//Calling the function
show_magician(magicians_names);
