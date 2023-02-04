/*
//1 - Write a JavaScript function to check whether an input is a string or not 
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
console.log("data");
let inpt = document.getElementById("inpt");
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);

function myFunction() {
  console.log("run");
  let a = inpt.value;
  console.log(a);
  if (isNaN(a)) {
    console.log("is string");
  } else {
    console.log("not a string");
  }
}*/

/*  
// 2 - Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
var unique = [...new Set(arr)];
console.log(unique); //output: [55, 44, 67, 8, 65, 1, 2, 3, 34, 5]
console.log(unique.length); //output: 10

//String reverse with reversing of individual words
function withoutReverse() {
  var string = "India is my country";
  let result = string.split("").reverse().join("");
  return result;
}
console.log(withoutReverse());
output = "yrtnuoc ym si aidnI";
//3.  Swapping of 2 numbers with third variable
// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a, b, c);
*/

/* 
// 4 - To find the index of an element from an array
const letters = ["a", "b", "c"];
const index = letters.indexOf("b");
console.log(index); // `1`

const set = new Set([1,1,2,2,3,4,5])
console.log(set) //{1,2,3,4,5}
Explaination : It will remove duplicate values. */

/* 
// 5 - Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let para = document.getElementById("para");
btn.addEventListener("click", insertDash);

function insertDash() {
  let str = input.value;
  console.log(str[1]);
  let result = [str[0]];
  console.log(result);
  for (var x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
    para.innerText = result.join("");
  }
  console.log(result);
}
 */

/* 
// 6 - Write a JavaScript program to find the leap years in a given range of years.

let btn = document.getElementById("btn");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let para = document.getElementById("para");
btn.addEventListener("click", checkLeapYear);
function checkLeapYear() {
  let a = Number(input1.value);
  let b = Number(input2.value);
  console.log(a, b);
  var list = [];
  for (var i = a; i <= b; i++) {
    list.push(i);
  }
  console.log(list);
  list.map((data) => {
    console.log(data);
    if (data % 4 == 0) {
      console.log(`${data} is leap year`);
      para.innerText += `${data} is leap year\n`;
    } else {
      console.log(`${data} is not leap year`);
      para.innerText += `${data} is not leap year\n`;
    }
  });
}

*/

/* 
 // 7 - Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 

let btn = document.getElementById("btn");
let input1 = document.getElementById("input1");
btn.addEventListener("click", revereseString);
function revereseString() {
  let a = input1.value;
  console.log(a);
  let sami = a
    .split("")
    .map((data) => {
      console.log(data);
      return data === data.toUpperCase()
        ? data.toLowerCase()
        : data.toUpperCase();
    })
    .join("");

  console.log(sami);
}
*/

/* 
// 8 - Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// ANS

let a = "prajwal";
let b = true;
let c = false;
var d = undefined;
const e = null;

console.log(`Value of a is ${a} and type of a ${typeof a}`);
console.log(`Value of b is ${b} and type of b ${typeof b}`);
console.log(`Value of c is ${c} and type of c ${typeof c}`);
console.log(`Value of d is ${d} and type of d ${typeof d}`);
console.log(`Value of e is ${e} and type of e ${typeof e}`);

// output
// Value of a is prajwal and type of a string
// Value of b is true and type of b boolean
// Value of c is false and type of c boolean
// Value of d is undefined and type of d undefined
// Value of e is null and type of e object
*/

/* 
// 9 - Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// ANS

let firstName = "prajwal";
let lastName = "Zingare";
let maritalStatus = "No";
let country = "India";
let age = 23;

console.log(
  `My name is ${firstName} and my surname is ${lastName},My marital Status is ${maritalStatus} ,I live in country ${country} and My age is ${age}`
);

// output
// My name is prajwal and my surname is Zingare,My marital Status is No ,I live in country India and My age is 23

*/

/* 

10. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// Ans
let a = "prajwal";
let uppercase = a.toUpperCase();
console.log(uppercase);

// output
// PRAJWAL;

*/

/* 
 11. Check if the string contains a word Script using includes() method.

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);
// output
// true;



*/

/* 
// 12. Split the string into an array using split() method
// Ans

let a = "prajwal zingare is full stack developer";
let split = a.split(" ");
console.log(split);

// output
// [ 'prajwal', 'zingare', 'is', 'full', 'stack', 'developer' ]

*/

/* 
// 13. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// Ans

let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let split = string.split(",");
console.log(split);

// output
// [
//     'Facebook',
//     ' Google',
//     ' Microsoft',
//     ' Apple',
//     ' IBM',
//     ' Oracle',
//     ' Amazon'
//   ]


*/

/* 
// 14. Use lastIndexOf to determine the position of the last occurrence of a script.

// description og lastindex method

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf() method searches the string from the end to the beginning. The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

// The lastIndexOf() method searches the string from the end to the beginning.

// The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() method is case sensitive.

// Ans
// var str = "Departed Train";
// var index = str.lastIndexOf("ed Tr");
// console.log(index);
// console.log("Departed Train before another Train".lastIndexOf("Train"));

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet", 100);
// console.log(result);

// index of property
// var s = ["prajwal", 1, 2, "zingare", "prajwal"];
// console.log(s.indexOf("zingare"));
// console.log(s.lastIndexOf("prajwal"));

// let a = "prajwal is web developer,web devloper";
// console.log(a.lastIndexOf("web"));
// console.log(a.lastIndexOf("w"));
//last index of means last occurence of specified value in stiring.
let a = "Two writers collaborated on the script for the film.";
console.log(a.lastIndexOf("script"));


*/

/* 
// 15. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

// Ans

let sent =
  "You cannot end a sentence with because because because is a conjunction";

//indexof is the property we can use to detrmine index.

console.log(sent.indexOf("because"));


*/

/* 

// 16. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

//trim method is used to remove the extra speces at start and end of sentence in string.
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.

let text = "       Hello World!        ";
let result = text.trim();
console.log(result);

*/
/* 

// 17. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

// Ans
//truthy value
console.log(false == 0); //true
console.log(8 > 5); //true
console.log((a1 = true && true)); //true
// falsy value s
console.log(true == 0); //false
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// expected output: false

console.log(false && "Cat"); //false


*/

/* 
18. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.

// Ans

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //flase
console.log(4 == "4"); //true
console.log(4 === "4"); //false

let a = "python";
let b = "jargon";
console.log(a.length);
console.log(b.length);
if (a.length !== b.length) {
  console.log(true);
} else {
  console.log(false);
}


*/
/* 

// 19. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// Ans

let date = new Date();
let elapsed = new Date(1970, 1, 1);
console.log(date.getFullYear()); //2022
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date - elapsed);


*/

/* 
// 20. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Ans

let base = prompt("Enter base of triangle");
let height = prompt("Enter height of triangle");

const areaValue = (base * height) / 2;

console.log(areaValue);

*/

/* 
// 21. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("object");
// Ans
// function to find slope of straight line
//ther is more descriptive way to perform this action but this one is short formm.
function slope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}
console.log("slope is " + slope(2, 2, 6, 10));

*/

/* 


// 22. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Ans

let radius = prompt("Give radius of circle");
// for area
function area(radius) {
  if (radius != 0) {
    alert("Area of circle is - " + radius * radius * 3.14);
    alert("circumference of circle is - " + radius * 2 * 3.14);
  } else {
    confirm("Enter Valid radius to see area");
  }
}
area(radius);


*/
