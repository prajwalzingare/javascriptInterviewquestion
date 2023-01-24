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
