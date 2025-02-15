// ! filter method
// filter method also expect call back function.
// filter method work same as forEach method, it expects call back function, But it's work is to filter element based on return value of it.
// Return value will be either true or false based on condition.

// ? Apply filter method to filter even numbers from the array
let arr = [1,2,3,4,5,6,7,8,9,10];
let filterEven = arr.filter((value) => {
    return value%2 == 0;
})

// (value)
// (value, index)
// (value, index, array)

console.log(filterEven);
console.log(arr);



// ! Map method
// // Work same as forEach and filter method But it'll modify original array.
// It's work same as forEach and filter method and can apply operation on array. Resultant applied operation can modify array.
let mapElem = arr.map((value, index) => {
    return value*index;
})

console.log(mapElem);
console.log(arr);