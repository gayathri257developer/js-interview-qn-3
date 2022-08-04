//1. What is callback hell ?

// callback are just the name/convention for using javascript.it instead of  immediately returning results like other functions, takes time to produce the result.so, if we stuck in some particular call which prevents us from making further calls ends us into callback hell.
//the structure of callback hell looks like pyramid/arrow shape.
//we use promises to prevent using callbacks and thereby avoiding callback hell

const number = () =>{
    setTimeout(() =>{
       let empDetails = {
        fname: "harish",
        lname: "koushik"
       }
       console.log(empDetails);
    },1000)
}
number();

//2. What are promises and why do we need them?

// promises are used to handle asynchronous operations in javascript. they are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unnanageable code.

//It have three stages.
//1) Pending    2) Resolved(fulfilled)   3) Rejected

//3. What is promise chaining?

const hello = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000); 
})
hello
.then(function(result) { 
    console.log(result); 
    return result * 2; 
})
.then(function(result) { 
    console.log(result); 
    return result * 2; 
})
.then(function(result) {
    console.log(result); 
    return result * 2;
});

//4. What is the purpose of async/await keywords?

//Async - They are used to handle promises more efficiently.the word async before a function always means that the function always returns a promise. so, we therefore use async before the function name to return a promise instead of a value.

//Await is used to wait for the result that is to be returned from the promises. So, we use await when we are calling a function which returns a promise. Also,we can use them(Async/await) for making API calls.

//5. Give an example of async/await

async function fn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
    let result = await promise; 
    console.log(result); 
  }
fn();

//6. What is hoisting?

// Hoisting is a Javascript Mechanism where variables and function declarations are moved 
// to top of there scope before the code execution 

// Note: Only Declarations are hoisted not the initilizations

//7. What is the DOM?

// Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.

//8. Difference between undefined vs not defined vs NaN?

// undefined: when the variable is declared without the value.
var b;
console.log(b);

//not defined: when the variable is not decalred and not assigning a value, then it will through the error like not defined

console.log(a);

// NaN: not a number(NaN) it is a number that is not a legal number.
// it type of is number
// it return "true" when it is NaN

let d = Number.isNaN(3.24);
console.log(d);

let e = Number.isNaN(0/0);
console.log(e);

//9. How many operators do we have in JS ?

// Arithmetic Operators
// Comparision Operators
// Logical Operators
// Relational Operators
// Conditional Operator
// Bitwise Operator

//10. What are pure functions?
// This is a function which gives you same output for same input passed. It doesn't depends on some variables whose value might change in the future, and therefore always gives u same values.

//11. What are arrow functions?
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

let x = (x, y) => {
console.log(x * y);
}
x(3,6);