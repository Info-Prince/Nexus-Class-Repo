console.log(x);
console.log(y);
console.log(z);

var x = 10;
let y = 20;
const z = 30;

// ? How JS work ?
// Javascript have memory execution context and code context. Firstly while running a program memory execution context assign memory for all data type (primitive or non primitive). And it'has some rule for memory assigning for diff diff types of data types.
// ! var
// For var it'll just provide memory address and also initialize with undefined.
// ! let & const
//  For let and const it'll provide address in memory and will not initialize, initialization part will be done in memory phase.
// // they are in temporal dead zone, until they got initialized while code ececution phase.
// ! function
// function greet(para) { function body } 
// Such type of function declaration get memory as greet : {function body code}. in key and value pair. (since all data types get memory in key and value pair in memory execution context)
// When we declare function it directly become the part of global object.
greet();
function greet () {
    console.log("hello dunia");
}
// That's what this function being called before initialization. refer image you'll get your answer.

// After memory allocation will be done in memory execution context all instruction will be ready to execute and that will be execute in code execution context.


// Js is a synchronous single threaded language.


// ? Why unable to access y and z -> referenceError?
// We are trying to access them however it's in temporal dead zone, They can't be accessed until they come out from temporal dead zone.

// ? What is hoisting ? 
// It's just a concept, which focused to shows the internal working of javascript.

// Hoisting in JS is the behavior where variable and function declaration moved to the top of their containing scope during the compilation phase, before the code has been executed.
// This means that JS hoists or lifts the declaration (but not the assignments) to the top, so you can refer to them before they are written in the code. However only the declaration hoisted, not the assignments and initializations.