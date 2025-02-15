// function fun () {
//     console.log(fun.abc);
// }

// fun();
// fun.abc = 200;
// fun.abc = 400;
// fun()


// const numbers = [1,2,3,4];
// numbers[100] = 500;
// console.log(numbers[5]); // undefined btw 5 to 99 index.
 

// console.log(typeof typeof 100);

// const arr = [..."prince"];
// console.log(arr);

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F7M'));


// console.log([1,2,3,-2,-1].map((num)=> {
//     if(num > 0) return;
//     return num*2;
// }))
//concept of above map problem
// function fun () {
//     return;
// }
// console.log(fun());


// "use strict"
// {
//     function fun() {
//         console.log("prince");
//     }
// }

// fun()


// function fun(a,b) {
//     'use strict'
//     a = 100;
//     b = 200;
//     return arguments[0] + arguments[1];
//     console.log(a+b);    
// }


// console.log(fun(300,400));
//! Without strict mode:
// The arguments object and the function parameters (like a and b) are linked.
//! With strict mode:
// This link is broken.


// slice and splice


// const arr = [1,2,3,4,5,6,7,8];
// const newArr = arr.map((num) => num > 4);
// console.log(newArr);

