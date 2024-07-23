//Making a function
function album(artist, title, tracks) {
    //Making an object
    var album_object = {
        artist_name: artist,
        title_name: title
    };
    if (tracks !== undefined) {
        album_object.track = tracks;
    }
    return album_object;
}
;
//Calling the function
var album1 = album("Hamza", "Typescript");
var album2 = album("Sehrish", "Coding");
var album3 = album("Sunbul", "Programming", 10);
//Printing the function
console.log(album1);
console.log(album2);
console.log(album3);
