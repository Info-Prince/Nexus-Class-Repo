//function declaration
function sum (a , b) {
    return a+b;
}
console.log(sum(3,4));


// arrow function
const sum2 = (a , b) => {
    return a+b;
}
console.log(sum2(3,9));

const sum3 = (a,b) => a+b; // it'll return automatically
console.log(sum3(9,8));


//iffe
() => ({

})();


// simple function
const fun = function (...number) {
    return number;
}
fun(2);
fun(2,4,3);
console.log(fun(3,54,6,4,35,6,7,9,8,12));

//using rest operator we can handle as many parameter as given while function call. And needed operation can be done on number. like adding cart price amount and all.


// ? Use object in function after destructuring.
const obj = {
    name : "prince", 
    age : 31, 
    balance : 4000,
    address : "patna",
}

// const destructFn = ({name, age}) => {
//     console.log(name, age);
// }
// const destructFn = ({name:myName, age:myAge}) => {
//     console.log(myName, myAge);
// }
const destructFn = (obj1) => {
    obj1.name = "ama";
}

destructFn(obj)
console.log(obj);



// ? Why .__proto__ code has been declared something like complex ?
// Because JS ke build krne wale programmer ye chahte honge ki .__proto__ ko change na kiya jaye, However if desired they follow complex code to change it.


// ? How to change prototype of any object ?
const user1 = {
    name :"hira",
    age : 43,
}
let user2 = {
    name :"ramesh",
    age: 41,
}


//! first method to change prototype of object.
// console.log(user2.__proto__);
// user2.__proto__ = user1; //?user2 object proto changed to user1 from Object.prototype (parent object).
// console.log(user2.__proto__);

//! second method to change prototype of object. IT'S BEST PRACTICE TO FOLLOW.
user2 = Object.create(user1);
console.log(user2.__proto__);
