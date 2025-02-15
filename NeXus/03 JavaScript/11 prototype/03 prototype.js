// ? Try in Chrome console

// Building question to thought 
let obj = {
    name : "prince",
    age : 32,
    greet : function () {
        return "hello coder army";
    },
}

//It's not defined, however it's got accessed. why ?
console.log(obj.toString()); 


let arr1 = [2,4,5];
//it's not mentioned however push operation work. how ?
arr1.push(10); // since iske prototype ke predefined kuch property availabe hai jo ki automatically Array.prototype se inherited hai.



//! get all property of array
arr1.__proto__; 
// ! get all property of object
obj.__proto__;