// ? Global Object 
// global object having diff diff name in diff diff platform. For eg:-
//todo  in chrome browser : it's window
// try in chrome
// console.log(window);

//todo in node environment (vs code) : it's global
// console.log(global);
// console.log(global.Math.random());

//! var bhi global object ka part ban jata hai, when we declare.

// ? Since diff diff platform have diff diff root object, And they can create problem to access these properties , How to handle with this problem ?
// Using globalThis. It's irrespective for all the platform.
// In every platform globalThis will point to the root object.
console.log(globalThis);


// console.log("hello world!");
// console.log(Math.random());
// console.log(setInterval());
// new Object()
// new String()

// ? From where all these in built functions and data type come ? 
// As c++ have library and all in built data types and function has been defined that's place in the same way JavaScript have global object Where all these in built data types and methods has been defined.
// They all are present in global object , And that has been presented in global object as a key.