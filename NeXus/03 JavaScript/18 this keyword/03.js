//! The most important eg to get the logic of this with strict mode. 
// "use strict"

const obj = {
    name : "prince",
    age : 21,    
    greet : function () {
        console.log(this); // pointing to object (obj).
        // console.log(this.age);
        
    }
}

obj.greet();


function check() {
//    return console.log(this); 
   console.log("hello");
}
check();

//since function directly become the part of global object.
// global.check(); // or
// window.check();
// todo depth explanation in the next file "03 2nd part.js" 


// ! It means jis context se function call hoga this ushi ke object ko point karega. 
// on the 1st eg this is being called with obj context that's what it's pointing to the same object (obj).
// And on the 2nd eg firstly we called this,without giving context then it's pointing to the current context which will be undefined (while using strict mode). And the time we call the same function with global object context window or globalThis then it's started pointing to the same global object.


//! arrow function 
// arrow function don't have their own this. Instead, they inherit this from the sorrounding (lexical) scope.

//⭐⭐ const obj1 = {} // Curly braces is used for defining any object, it's not the scope of object, object ka koi scope nhi hota hai.

// const obj2 = {
//     name : "amazon",
//     age : 39,
//     meet : () => {
//         console.log(this);        
//     }
// }
// obj2.meet();

// ? Why this pointing to the global object in arrow function ?
// Since object doesn't have their lexical scope. And arrow function will inherit this from the sorrounding lexical scope which will be global object. That's it.


// ? Guess whom this will point now.
// In arrow function this will point to the sorrounding lexical scope. 
const obj2 = {
    name : "amazon",
    age : 39,
    meet : function () {
        let ab = () => {
            console.log(this);        
        }
        ab();
    }
}
// obj2.meet();
// Here arrow function will will inherit this of the sorrounding lexical scope which is meet (regular function). And meet function ka this obj2 ko point karega. Since Object's regular function ka this whi object hota hai.


// !⭐⭐ extra notes
// global scope : global object ka scope
// functional scope : function scope
// block scope : if else scope