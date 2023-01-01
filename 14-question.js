// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("object");
// Ans
// function to find slope of straight line
//ther is more descriptive way to perform this action but this one is short formm.
function slope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}
console.log("slope is " + slope(2, 2, 6, 10));
