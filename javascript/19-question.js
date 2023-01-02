// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = prompt("Enter number to check it is odd or even");

function numberCheck(number) {
  if (number % 2 === 0) {
    alert("Even number");
  } else {
    alert("odd number");
  }
}
numberCheck(number);
