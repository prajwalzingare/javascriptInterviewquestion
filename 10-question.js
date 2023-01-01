// 10. Boolean value is either true or false.
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
