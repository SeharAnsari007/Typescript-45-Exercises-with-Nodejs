let PersonName : string = "Sehar Ansari";

console.log(PersonName.toLowerCase());

console.log(PersonName.toUpperCase());

console.log(PersonName.replace(/\b\w/g, (character => character.toUpperCase())));