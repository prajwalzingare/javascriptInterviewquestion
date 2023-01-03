/* Write a JavaScript function to check whether an input is a string or not */
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
