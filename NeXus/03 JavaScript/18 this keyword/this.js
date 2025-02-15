"use strict"
//todo This keywords refers to the context in which the current code is being executed. It's value depends on how the function where this is used to called.

//! 1: this In Global Context (means outside any function)
// global context me this keyword global object (ROOT OBJECT) ko point karta hai.
//? window == this (in chrome browser)

let a = 10;
const b = 20;
var c = 50; 

//⭐⭐⭐⭐⭐ let and const are just a part of global context (scope) but var is a part of global object.
// console.log(this);
// You can check that now var c is a part of global object. It's clearly visible into the console global object(window in chrome).

//? In Node.js -> Module's exports object
// you can verify with running the same program as: console.log(this) into terminal. 
// console.log(this);

//! 2: this In Function 
// ? Non-Strict Mode
// When this is used inside a regular function, it refers to the global object

function greet() {
    console.log(this);
}
// greet(); 
// console.log(globalThis);



// ? Strict Mode
// this will be undefined inside a function.
// strict mode use due to maintain our code to less bug.
// without strict mode you can declare variable as:
// num = 10; // but it'll show error when you use strict mode open in your js code.
// It makes our debugging work easy. 
// For eg : if you've changed freezed object property then it'll not changed however you can't get any error but when you use "use strict" then it'll show error. And this way our code will be easy to debug.

////  strict use added to the top of it.
function greet() {
    console.log(this);
}
greet();


//! 3: this Inside an Object's Method (object context)
// When this is used inside an object's function, it refers to the same object which have function declared.

// const obj = {
//     name : "prince",
//     age : 21,
//     greet : function () {
//         console.log(this); // pointing to object (obj).
//         console.log(this.age);
        
//     }
// }

// obj.greet();