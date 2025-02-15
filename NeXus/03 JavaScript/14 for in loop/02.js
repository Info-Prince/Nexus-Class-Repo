// ? Why for in loop not used to access element of array.
// Since for in loop access element's keys. And array has been stored in memory in key and value pair. here array's index is key and correspondence of it is values.

let arr = [10,30,40,20];
arr.name = "prince";
arr.age = 32;

for(let keys in arr) {
    console.log(keys);      
}

// it's not good practice to follow, in array only index should be there.
// At the end array ke sare element key and value pair me hi store hote hai. and by default sare key ke enumerable true hota hai. that's whtat it'll print all keys of object(array) including name & age (extra added property).