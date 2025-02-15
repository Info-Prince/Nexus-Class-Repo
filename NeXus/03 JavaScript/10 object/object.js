// ? How to create object ?
// ? key can be either string or symbol.

// // ! first way to create object
const obj = {
    name : "prince", 
    acc_bal: 420,
    gender: "male",
    age: 21,
    //! key can't be mentioned as given space
    // account number: 9023452342,
    "account number": 324235345,
    0 : 23, // it's key will be stored as string into backend
    1 : 12,
    2 : 89,
    undefined: 89,
    null : 43
}
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
console.log(obj["account number"]); //mandatory to access with this method
console.log(obj["0"]);
console.log(obj[1]);

//null and undefined is not a variable it's string , since every key stored into backend as string or symbol.
console.log(obj.undefined);
console.log(obj[undefined]);
console.log(obj["undefined"]);



//! NOTE: Number can be accessed as obj[0], without mentioning as we're accessing string.





//? What's advantage of using object instead of array
const arr = ["prince", 420, "male", 21];
//Both are storing the same data But here it's difficult to debug that what we've stored into array, like which type of data has been stored.

// ? What is key ? whether it's variable or else ?
//  Key has been stored as string or symbol into backend. As: "name", "acc_bal", "gender", "age". It's not variable.


// ? Why array type is object ?
// Since array also store data in key value pair into it.
// As object storing data using number as key (string format into backend "0", "1"), In the same way array using index as key.
const objarr = {
    0: 12,
    1: 43, 
    2: 54,
    3: 9,
    name: "vishal",
}
const arr1 = [12,43,54,9]; 
// both have stored same data and can be accessed into same way.
console.log(objarr[0], arr1[1]);
console.log(arr1[0], arr1[1]);

console.log(objarr.name, arr1.length);

//it's shows that array implementation is same as object.
//! array ka internal implementation object ki tarah hi dikhta hai. That's what array ka type object aata hai.


// ? what is length in array ?
// length property in array is key, not the function, You van verify it into the browser.




// // ! 2nd Way to create object
const person = new Object;
console.log(person); // currently it's empty object


//add property
person.name = "rohit";
person.age = 32,
person.gender = "male"

console.log(person);

// delete property
delete person.age;
console.log(person);

// modify or update
person.name = "prince";
console.log(person);


// // ! 3rd method to create object : class method
class people  {
    constructor (name, age, gender) {
        this.name = name; // this pointing to current context , which is person1 now and then for person2 when person2 will be called.
        this.age = age;
        this.gender = gender;
    }
}

let person1 = new people("rohit", 32, "male");
let person2 = new people("prince", 21, "male");

console.log(person1);
console.log(person2);
