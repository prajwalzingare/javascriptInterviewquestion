/* problem steatment find the area of triangle whose 3 sides are given. with javascript */

console.log("first");
let input1 = document.getElementById("inpt1");
let input2 = document.getElementById("inpt2");
let input3 = document.getElementById("inpt3");
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);

function myFunction() {
  let a = Number(input1.value);
  let b = Number(input2.value);
  let c = Number(input3.value);
  console.log(c);
  let s = a + b + c;
  console.log(s);

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}
