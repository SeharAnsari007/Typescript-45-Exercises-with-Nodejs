//Making a function

function album (artist : string, title : string, tracks? : number) {

//Making an object
    let album_object : {artist_name : String, title_name : string, track? : number} ={
        artist_name : artist,
        title_name : title
    };

    if (tracks !== undefined){
        album_object.track = tracks;
    }
    return album_object
};

//Calling the function
let album1 = album("Hamza", "Typescript");

let album2 = album("Sehrish", "Coding");

let album3 = album("Sunbul", "Programming", 10);

//Printing the function
console.log(album1);
console.log(album2);
console.log(album3);
