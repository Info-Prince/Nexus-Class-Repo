let arr = [0, 10, 20, 3, 4, 5, 6, 23, 435, 45, "rohit", "prince", 32];
const newarr = arr;


// Both array are pointing to the same location in heap memory.
console.log(arr);
console.log(newarr);

console.log(arr == newarr);

// ? Instead of assigning reference of array, just make a clone of that array and assign to new variable.
const cloneArr = structuredClone(arr); //helpful
console.log(cloneArr);

console.log(arr == cloneArr);


// push, pop -> push and pop at the end of array
// unshift, shift -> unshift and shift at the beginning of the array

// push -> add at the end of the array
// pop -> remove from the end of the array
// unshift -> add at the beginning of the array
// shift -> remove from the beginning of the array


const arr1 = [10,3,4,2,53];
// delete arr1[0]; // it'll delete however space will be occupied/reserved. 
// console.log(arr1);


// arr.indexOf(3)
// arr.lastindexOf(9)
// arr.includes(4)

console.log(arr1.slice(2,4));
console.log(arr1);
// console.log(arr1.splice(1,1));
// splice(starting index, total element to delete, add element)
console.log(arr1.splice(1, 3, "money", 90));

console.log(arr1);

// todo original array will not be changed using slice but splice will change the original array.


// ? convert array to string
// using toString(), join() method
const arrstr = [2,4,5,6,7,4,3, "rohit"];
console.log(arrstr.toString());
console.log(arrstr.join("*")); // join() method give flexiability that what we want to add into the string from the place it should be seperate.


// flat() method
const arrflat = [2,7,5,4,6,[8,9,55, [3,6,4]]];
console.log(arrflat.flat(Infinity));


// ? isArray() method will be used when have to check that data come from backend is array or not
let abc = [3,4,5,3.2,8];
console.log(Array.isArray(abc));



//this method of creating array is not recommended.
// when you give only 1 element in argument then that will be considered as the size of array. And if more than 1 elem then that will be considered as array's element.
let arrNotRecommend = new Array (2,4,4,5,6,4,2,32,54);
console.log(arrNotRecommend);



// ! Array store at contiguous memory location in C++ but in JS ARRAY WON'T STORE AT CONTIGUOUS MEMORY LOCATION. 
// ? Why array not store data at contiguous memory location ?
// Since here array works as object which will store any type of data, whatever it's integer, boolean, string, and all. And if user will change it's data then we'll have to shift all data, and resultant time complexity will be increased, And without sifting data here chances of data loss situation may arise, That's what developer has programmed JS as Array will not store it's data at contiguous memory location.

//todo data will be store at contiguous memory location only if data will take fixed amount of memory.