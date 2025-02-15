// https://chatgpt.com/share/67722730-fc74-8006-a94b-00372a4c5a65

"use strict"

function check() {
   console.log("hello");
}
// check();
// global.check();

// ? While running this into terminal it's throwing error why ? 
// ? if function directly become the part of global object. i.e global in node.js . Then why it's showing error when want to access the same method of global object ?

// This statement not properly correct.

// ? Why Does This Happen?

//! 1. Node.js Scope:
// In Node.js, each file is treated as a module. Code within a module is not directly added to the global scope.
// When you declare a function or variable at the top level of a Node.js script, it is added to the module scope, not the global object (i.e., global in node.js).


//! Global Object in Node.js:
// To explicitly add a property to the global object in Node.js, you must assign it to global.

// console.log(global); // accessing node.js global object before explicit function declaration.
global.check = function () {
    console.log(this);
};
// global.check(); // This works why ?

// Since now check() function has been the part or property of node.js global object. You can verify to access it.
// console.log(global);


// ? Now the Question is Why It Works Differently in Browsers:
// In a browser, the global object is window, and top-level functions are automatically added to window. For example:
function check() {
    console.log("hello");
}
// window.check(); // Works in browsers



//TODO  NOTE :
// In Node.js, top-level declarations (functions or variables) are not part of the global object by default. They are scoped to the current module. This design avoids polluting the global scope, ensuring better modularity and isolation of code.


// ? Why this pointed to {} empty object while accessing it.
// console.log(this);
// When we access this , then in node.js it pointed to the current module's exports property.
// You can see that current module's exports is defined with empty object.

// console.log(module);
// console.log(module.exports);

//? defining property into module
//1st way
module.name = 'prince';
// 2nd way
Object.defineProperty (module, 'city', {
    value : "Patna",
    enumerable : true,
    writable : true,
    configurable : true
})

// console.log(module);
// 3rd way to define multiple property into module object.


// ? Verify that, this is pointing to the exports property of the current module object.
// console.log(this);
// console.log(module.exports);

// declare some property into exports object use any method to declare property into object.
Object.defineProperties (module.exports, {
    name : {
        value : "Prince",
        writable : true,
        enumerable : true,
        configurable : true
    },
    age : {
        value : 21,
        writable : true,
        enumerable : true,
        configurable : true
    },
    city : {
        value : "patna",
        writable : true,
        enumerable : true,
        configurable : true
    },
    Area : {
        value : "kankarbagh",
        writable : true,
        enumerable : true,
        configurable : true
    },

})

// console.log(this);
// console.log(module.exports);



// ? all property of module can be accessed since module's key's enumerable property is true
// for (let keys in module) {
//     console.log(keys);    
// }

// ? let's verify it
console.log(Object.getOwnPropertyDescriptors(module));