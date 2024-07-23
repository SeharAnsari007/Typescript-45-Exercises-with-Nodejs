//Equality and inequality of string

let fruit = "Apple";

console.log("Is fruit equal to Apple?");
console.log(fruit === "Apple");

console.log("\nIs fruit not equal to Apple?");
console.log(fruit != "Apple");

//Tests using lower case function

let vegetable = "CABBAGE";

console.log("\nIs vegetable equal to cabbage?")
console.log(vegetable.toLowerCase() === "cabbage");

console.log("\nIs vegetable not equal to cabbage?")
console.log(vegetable.toLowerCase() != "cabbage");

//Tests using equality and inequality of numbers

let num1 = 5;
let num2 = 10;

console.log("\nIs num1 equals to 5?");
console.log(num1 === 5);

console.log("\nIs num2 not equal to 10?");
console.log(num2 != 10);

//Tests using greater than and less than

console.log("\nIs num1 greater than 10?");
console.log(num1 > 10);

console.log("\nIs num2 less than 15?");
console.log(num2 < 15);

//Tests using greater than or equals to and less than or equals to

console.log("\nIs num2 greater than or equals to 5?");
console.log(num2 >= 5);

console.log("\nIs num1 less than or equal to 0?");
console.log(num1 <= 0);

//Using And (&&) operator

console.log("\nIs num1 equal to 5 and num2 equal to 10?");
console.log(num1 === 5 && num2 === 10);

console.log("\nIs num1 equal to 5 and num2 not equal to 10?");
console.log(num1 === 5 && num2 != 10);

//Using Or (||) operator

console.log("\nIs num1 less than or equal to 5 or num2  greater than 10?");
console.log(num1 <= 5 || num2 > 10);

console.log("\nIs num1 greater than 5 or num2 not equal to 10?");
console.log(num1 > 5 && num2 != 10);

//Test an array

let fruits : string[] = ["Apple", "Mango", "Banana", "Orange"];

console.log("\nIs Mango include in the array?");
console.log(fruits.includes("Mango"));

console.log("\nIs Orange not include in the array?");
console.log(!fruits.includes("Orange"));