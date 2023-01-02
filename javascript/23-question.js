console.log("Done");
//Question-2
/*  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/

let btn = document.getElementById("btn");
let para = document.getElementById("para");
btn.addEventListener("click", myFunction);
function myFunction() {
  console.log("function");
  let a = 15;
  for (let i = 0; i <= a; i++) {
    // console.log(i);
    if (i % 2 === 0) {
      console.log(i + " is even number");
      para.innerHTML += i + " is even " + "<br>";
    } else if (i % 2 !== 0) {
      console.log(i + " is odd numbers");
      para.innerHTML += i + " is odd " + "<br>";
    }
  }
}

//got the output.
/* resources that i take help 
https://stackoverflow.com/questions/19801995/how-to-store-the-result-of-each-iteration-of-a-for-loop-into-an-array-javascrip

https://www.w3schools.com/js/js_break.asp
*/
