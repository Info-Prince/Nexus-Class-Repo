//! for in loop
// We can iterate over keys in an object.
const obj = {
    name : "prince", 
    age : 41,
    greet : function () {
        console.log(this);
    }
}

// for (key in obj)  {
//     console.log(key);
// }

// ? We can access keys of object with Object.keys(obj), However what's the need of for in loop ? 
let obj1 = {
    name: "raushan",
    age : 24,
    balance : 55800,
}
let obj2 = Object.create(obj1);

// ! 1st way to add object property
// obj2.city = "patna";
// obj2.area = "kankarbagh";

// ! 2nd way to add object property

//  Object.defineProperty(obj2, "city", {
//      enumerable : true
//  });

Object.defineProperties(obj2, {
    city : {
        value : "patna",
        writable : true,
        enumerable : true,
        configurable : true
    },
    area : {
        value : "kankarbagh",
        writable : true,
        enumerable : true,
        configurable : true
    },
})

// console.log(Object.keys(obj2)); // it's accessing only it's property not accessing inherited property. But using for in loop we can achieve this output. for in loop will print the inherited keys also.

// for(keys in obj2) {
//     console.log(keys);    
// }


// ? The time we create object, it inherit property of Object.prototype (root object), however for in loop not able to access these inherited property. WHY ?
// ? However for in loop is able to access inherited object property.
for(keys in obj1) {
    // console.log(keys);    
}
// ? It's a concept of enumerable. for in loop can access only those property or keys whose key's property (enumerable) will be true. What it means by the statement?

//! Every key Must have these default properties:
//! In object key is treated as property itself and these property have some more properties as value, writable , enumerable, configurable
// value : "it depends"
// writable : true,
// enumerable : true,
// configurable : true

// todo let's verify
let objEnum = {
    name : "sarvan",
    age : 29,
    city : "patna",
    salary : 22000,
}
// console.log(Object.getOwnPropertyDescriptor(objEnum , 'name')); 

// ? writable :- true means key's value can be changed.
// ? configurable :- true means writable and enumerable can be changed otherwise not possible.
// ? enumerable :- true means it allow access to the next object which will inherit the property of this current object.

// ! Now verify that for in loop can access only those properties or keys which enumerable will be true.

let objEnum2 = Object.create(objEnum);
objEnum2.fName = "raman";
objEnum2.mName = "Shobha";
objEnum2.height = "5 Feet";
objEnum2.village = "aurangabad";

// console.log(objEnum2);
// since default enumerable will be true of all property of objEnum object, that's what all those properties will be accessible from objEnum2 (object) using for in loop.
for (let keys in objEnum2) {
    // console.log(keys, objEnum2[keys]);
}


// ? Now one thing is clear that root object's enumerable is false. Now verify it
// ! console.log(Object.getOwnPropertyDescriptors(Object.prototype));
// ! console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

//now make enumerable -> true of any particular property of root object so that it will be accessible from the newly created object.
// ! Object.defineProperty(Object.prototype, "toString", {
// !     enumerable : true
// ! });

//now toString property's enumerable is true and accessible from the newly created object, since that inherit root object properties.
// for (let keys in objEnum2)
//     console.log(keys, objEnum2[keys]);

// ? define multiple properties of root element's enumerable true so that it'll be accessible from the newly created object.
Object.defineProperties(Object.prototype, {
    toString: {
        enumerable : true,
    },
    constructor: {
        enumerable: true,
    },
    __defineGetter__: {
        enumerable: true,
    },
    __defineSetter__: {
        enumerable: true,
    },
    hasOwnProperty: {
        enumerable: true,
    },
    __lookupGetter__: {
        enumerable: true,
    },
    __lookupSetter__: {
        enumerable: true,
    },
    isPrototypeOf: {
        enumerable: true,
    },
    propertyIsEnumerable: {
        enumerable: true,
    },
    toString: {
        enumerable: true,
    },
    valueOf: {
        enumerable: true,
    },
    ['__proto__']: {
        // get: [Function: get __proto__],
        // set: [Function: set __proto__],
        enumerable: true,
    },
    toLocaleString: {
        enumerable: true
    }
})

const objInherited = {};
for(let keys in objInherited) {
    console.log(keys);
}

// console.log(Object.keys(objInherited));