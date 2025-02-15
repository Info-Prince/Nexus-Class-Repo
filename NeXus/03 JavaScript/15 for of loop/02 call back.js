// ! For each loop 
// it'll be used to iterate on array.
// for each loop expect call back function as parameter.
let arr = [10,20,30,40];
arr.forEach(function (num) {
    console.log(num);    
})

arr.forEach((num, index, array) => {
    console.log(num, index, array);    
})

// (value) : one argument means, it's array's value.
// (value, index) : two argument means, array's value, index
// (value, index, array) : three argument means, array's value, index and array itself.


// ! call back function
// todo When we're calling a function and passing reference of another function as a arguments, that's called call back function.

function names (fun) {
    // console.log("hello i'm prince");
    fun();
}
function greet () {
    console.log("I am a call Back Function");
}


// ? Define diff diff type of call back function.
// call back function depends on the way to call the function and passing arguments.

//! 1st type of call back function 
// names(greet); // this is call back function.

//! 2nd type of call back function
// names (function () {
//     console.log("i'm a call back function 2");
// }) 

//! 3rd type of call back function
names (()=> {
    console.log("I'm a call back function 3");
})


// ? Give a real world example of call back function ?
function fetchData () {
    console.log("I'll execute again!");    
}
//! setInterval function expects call back function as argument.
// setInterval(fetchData, 2000);