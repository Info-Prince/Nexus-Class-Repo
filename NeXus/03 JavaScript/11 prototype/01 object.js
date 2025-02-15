// ? Shallow copy
// Copy through reference 

// ? Deep copy
// Copy elements seprately. Both are pointing to the same data but have stored in diff diff variable or object


// ? Nested Object
const user = {
    name : "prince", 
    bal : 232,
    address: {
        pincode: 342,
        city: "patna",
    }
}

console.log(user.address.pincode);

const user2 = Object.assign({}, user) 
user2.address.pincode = 800020;
user2.name = "rohit";
console.log(user2);
console.log(user);

//! assign method one level deep copy karta hai. even ... spread operator v one level hi object ko copy karega. And it's called shallow copy. shallow copy doesn't copy nested element, can copy only one level element.

// Using structuredClone we can create same copy at many level as is it. And it can be used for further utilization. Since for the journey object.assign() will be used more.


// ? homework part
Object.freeze()
Object.seal() //can't add new property, existing property can't be deleted, modification allowed, it means configurable becomes false and enumerable, writable will not work.


//? Destructuring of object
// It means object se kucch value ko nikal do
let obj = {
    name : "rohit",
    age : 21,
    money: 4000,
    bal : 23,
}

// const {name, money} = obj;
//want to change the name of variable or can say key name
// const {name:userName, money:paise} = obj;
const {name:userName, money:paise, ...obj1} = obj;

console.log(userName, paise, obj1);



// ? destructuring of array
const arr = [1,2,3,4,5,6];
// const [first, second, ,third] = arr;
const [first, second, ...third] = arr

console.log(first, second, third);



//? destructuring of nested object

const nestobj = {
    name : "raushan",
    age : 32,
    amount: 4000,
    arr: [20,40,60,80],

    greet : function() {
        return "hello dunia"; //when you not return then automatically return undefined.
    },

    address: {
        pincode: 802315,
        city : "patna",
        state: "bihar"
    }
}

// const{address:adds} = nestobj;
// console.log(adds);

// const {address:{pincode, city}} = nestobj;
// console.log(pincode, city);

const {arr:[first1, second2, ...arrAll]} = nestobj;
console.log(first1, second2, arrAll);

console.log(nestobj.greet())


// diff btw spread and rest operator