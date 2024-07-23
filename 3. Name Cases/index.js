var PersonName = "Sehar Ansari";
console.log(PersonName.toLowerCase());
console.log(PersonName.toUpperCase());
console.log(PersonName.replace(/\b\w/g, (function (character) { return character.toUpperCase(); })));
