console.log(true); //true
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
//done

//100 basic question

// Question: What is typeof []
// Answer: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)
// -------------------------------------
// Question: What is typeof arguments
// Answer: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.
// -------------------------------------

// Question: What is the value of typeof null
// Answer: "object"
// -------------------------------------
// Question: What is console.log(true+false)
// Answer: 1 here true -->> 1 & false -->> 0 then 1 + 0 -->> 1
// -------------------------------------
// Question: What is 2+true
// Answer: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1
// -------------------------------------
// Question: What is "2"+true
// Answer: 2true here string concatination happer "2"+"true" -->> 2true
// -------------------------------------
// Question: What is the value of -'34'+10
// Answer: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.
// -------------------------------------
// Question: What is the value of +'dude'
// Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.
// -------------------------------------
// Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// Answer: "undefined"
// -------------------------------------
// Question: for var a = (2, 3, 5); what is the value of a?
// Answer: 5. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: MDN
// -------------------------------------
// Question: for var a = (1, 5 - 1) * 2 what is the value of a?
// Answer: 8
// -------------------------------------
// Question: What is the value of !'bang'
// Answer: false. ! is NOT.
// -------------------------------------
// Question: What is the value of parseFloat('12.3.4')
// Answer: 12.3
// -------------------------------------
// Question: What is the value of Math.max([2,3,4,5]);
// Answer: NaN
// -------------------------------------
// Question: typeof(NaN)
// Anwser:"number
// -------------------------------------
// Question:null == undefined
// Answer: true //varaibale is there so it can be null or undefined so it is equal but if you do stricly equality operator then it is false because two variable cant be same data type.
// -------------------------------------
// Question: If var a = 2, b =3 what would be value of a && b
// Answer: 3 //beacuse a is true so it will execute second condition.
// -------------------------------------
// Question: What is -5%2
// Answer:-1. the result of remainder always get the symbol of first operand
// -------------------------------------
/*  
let a = [];
let b = [];
console.log(a == b); //false
console.log(a === b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.*/

/* 

let a = [];
let b = a;
console.log(a==b); //true
console.log(a===b); //true
//Explaination : Here we are assigning a to b, where memory location is now same.
 -------------------------------------
let a = [1];
let b = [1];
console.log(a[0]==b[0]); //true
console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.

*/
/* 

let z= [1,2,3]
let a ={name: "prajwal"}
console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.
 -------------------------------------
console.log(typeof NaN); //number
//Explaination : If we divide "prajwal"/2 then it will give NaN. 

*/

/* 

let data = 10 - -10;
console.log(data); //20
//Explaination : Minus minus will become plus so 10+10=20
 -------------------------------------
const set = new Set([1,1,2,2,3,4,5])
console.log(set) //{1,2,3,4,5}
//Explaination : It will remove duplicate values.//https://www.w3schools.com/js/js_object_sets.asp
 -------------------------------------
let data ={name: "prajwal"}
console.log(delete data.name); //true
console.log(data)//{}
//Explaination : delete will return either true or false.
 -------------------------------------
let data ={name: "prajwal"}
console.log(delete data); //false
//Explaination : We can delete the object property only. We can't able to delete the object(i.e, data).
 -------------------------------------
const data = ["prajwal", "sami", "sourabh"];
const [y] = data;
console.log(y); //"prajwal"
//Explaination : We are doing destructuring here. y is representing the first index only
 -------------------------------------
const data = ["piya", "priya", "supriya"];
const [y,z] = data;
console.log(y,z); //"priya", "priya"
//Explaination : We are doing destructuring here. y is representing the first index only and z representing the second index.
 -------------------------------------
const data = ["piya", "priya", "supriya"];
const [,m] = data; // way to access any specific element here at second position
console.log(m); //"priya"
//Explaination : To access any element without taking previous values, we can do just write comma.
 -------------------------------------
const data ={name:"priya"}
const {name} = data; //how to get the name property without . dot operator
console.log(name);//priya
//Explaination : Here we did object destructuring.It's not store in continuos memory location but array store in continuoes memory location so that's why we used comma in an array.
 -------------------------------------
let data ={name:"priya"}
let data1={city:"ABC"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // {name:"priya", city:"ABC"}
//Explaination : using spread operator we use to merge the 2 objects. Three dots will pop out the property from an object and assign inside curly brackets.

 -------------------------------------

let data ={name:"prajwal"}
let data1={city:"ABC", name: "sami"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // { name:"sami", "city": "ABC"}
//Explaination : If we have same keys while merging then the position of the property will remain same but the value get updated with new value. Because in an objects Keys Should be unique.

 -------------------------------------
const name = "priya"
console.log(name()); //Error: name is not a function
//Explaination : Function we are calling but it's not present so it will an error.
 -------------------------------------
const result = false || {} || 20 || null;
console.log(result); //{}
//Explaination : OR operator will find first positive value. Null is a falsy value by default. {} is a positive value. It didn't reach till 20 and null.
 -------------------------------------
*/
