console.log(true); // true
console.log(typeof true); // boolean
console.log(typeof true === "boolean"); // true

console.log(false); // false
console.log(typeof false); // boolean
console.log(typeof false === "boolean"); // true

// Truth values evaluate to true
console.log(typeof []); // object
console.log(Boolean([])); // true
console.log(typeof Boolean([])); // boolean

// Falsy values evaluate to false
console.log(typeof ""); // string
console.log(Boolean("")); // false
console.log(typeof Boolean([])); // boolean

// Here are examples of coercing expressions to booleans in JavaScript:

true ? console.log(true) : console.log(false); // true
false ? console.log(true) : console.log(false); // false

// Empty objects evaluate to true but empty strings evaluate to false
const emptyObject = {};
emptyObject ? console.log(true) : console.log(false); // true
const emptyString = "";
emptyString ? console.log(true) : console.log(false); // false

// The Boolean wrapper takes an expression and returns true or false
Boolean({}) ? console.log(true) : console.log(false); // true
Boolean("") ? console.log(true) : console.log(false); // false

/* 
The falsy values in JavaScript are false, 0, -0, 0n, null, undefined, NaN, and the empty string ""; everything else is a truthy value. All objects are truthy, including empty objects {} and arrays []. */

// falsy values: false, 0, -0, 0n, null, undefined, NaN, and the empty string ""
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(typeof Boolean("")); // boolean
//// truthy values: true, 1, -1, 1n, -1n, Infinity, -Infinity, " ", {}, []
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(1n)); // true
console.log(Boolean(-1n)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(" ")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(typeof Boolean([])); // boolean

// Boolean Value
console.log("===== Boolean Value!");
console.log(1 ? "true" : "false"); // true
console.log("0" ? "true" : "false"); // true
console.log("1" ? "true" : "false"); // true
console.log([] ? "true" : "false"); // true
console.log({} ? "true" : "false"); // true
console.log("" ? "true" : "false"); // false
console.log(0 ? "true" : "false"); // false
console.log(NaN ? "true" : "false"); // false
console.log(undefined ? "true" : "false"); // false
console.log(null ? "true" : "false"); // false

// Question: What is the value of +'dude'
// Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

// What is the value of -'34'+10
// Answer: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

//question
// let a = [];
// let b = [];
// console.log(a == b); //false
// console.log(a === b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.

// let a = [];
// let b = a;
// console.log(a==b); //true
// console.log(a===b); //true
//Explaination : Here we are assigning a to b, where memory location is now same.

//  Swapping of 2 numbers with third variable
// let a=10;
// let b=20;
// let c;
//    c=a;
//    a=b;
//    b=c;
// console.log (a,b,c)
