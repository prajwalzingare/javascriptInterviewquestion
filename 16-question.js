console.log("first");

// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

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
