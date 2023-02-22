

``` javascript 
var num = 8;
var num = 10;
console.log(num);
```
<details >
<summary>
Answer
</summary>

Answer 10 **Explanation — **With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value. You cannot do this with let or const since they're block-scoped.
</details>

---
---

``` javascript 
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Ayush';
  let age = 21;
}

sayHi();
```
<details >
<summary>
Answer
</summary>
Answer undefined and ReferenceError **Explanation — **Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.
</details>

``` javascript 
//Write a JavaScript program which prints the elements of the following array
//Note : Use nested for loops.
//Sample array :
 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
```

<details >
<summary>
Answer
</summary>
Answer / 

```javascript

var a = [
   [1, 2, 1, 24],
  [8, 11, 9, 4],
   [7, 0, 7, 27],
   [7, 4, 28, 14],
   [3, 10, 26, 7],
 ];
 for (let i in a) {
  console.log("row" + a[i]);
  for (let j in a[i]) {
     console.log(a[i][j]);
  }
}
```
</details>

## 2. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.

In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.

</p>
</details>