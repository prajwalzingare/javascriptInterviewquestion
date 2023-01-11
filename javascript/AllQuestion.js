/*1. Write a JavaScript function to check whether an input is a string or not */
/* Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false */
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
}

// 2. Remove Duplicate characters from array of element and find the count of an elements using set object
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
let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log(a, b, c);

//4. To find the index of an element from an array
const letters = ["a", "b", "c"];
const index = letters.indexOf("b");
console.log(index); // `1`

// const set = new Set([1,1,2,2,3,4,5])
// console.log(set) //{1,2,3,4,5}
//Explaination : It will remove duplicate values.
