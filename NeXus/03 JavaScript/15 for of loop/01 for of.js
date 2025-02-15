//! for of loop
// for of loop used on iterable variable. such as array and string.
// it's used to get access of the value of the array and string.
// Don't use for of loop to iterate on object. Since object isn't iterable.

// ? Why we can't iterate on object using for of loop ?
// Since object isn't iterable. 
// Array and String ke liye (symbol.iterator) implement huaa hai, that's what iske upar iterate kar sakte hai. And object pr ye property implement nhi huaa hai.

// ? So how can we iterate on object, if it's not iterable ?
// firstly we will have to convert it into array then only we can iterate.

let obj = {
    name : "prince",
    age : 42,
    city : "patna"
}

console.log(Object.keys(obj));
console.log(Object.values(obj)); // this property of object returns elements in array format.

for(value of Object.values(obj)) {
    console.log(value);    
}