// ? prototype ka hindi banawat or dhancha

let user1 = {
    name : "prince",
    age : 32,
    greet : function () {
        return "hello coder army";
    },
}
let user2 = {
    amount: 4000,
    money: 21
}
// console.log(user2.name); // 🚫🚫🚫
user2.__proto__ = user1; // user2 inherited all property.
console.log(user2);
console.log(user2.name); //✅✅✅



// ? Getting all prototype of array
Array.prototype //it's an object

//When we are declaring any array , that's inherit prototype of it's object (Array.prototype()) automatically.

//! Array.prototype.__proto__ == Object.prototype
//! arr.__proto__.__proto__ == Object.prototype

// Array.prototype.__proto__.__proto__ == null 


// ? Prototype automatically add ho jata hai, 
// It's called prototype chaining, prototype inheritence.
// That's what array called object.


let arr2 = [3,4,5];
console.log(arr2.__proto__ == Array.prototype);
console.log(arr2.__proto__.__proto__ == Object.prototype);
console.log(arr2.__proto__.__proto__.__proto__ == null);

