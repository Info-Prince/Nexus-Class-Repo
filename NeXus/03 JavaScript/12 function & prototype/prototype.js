// object ke prototype ka naam : Object.prototype 
console.log(Object.prototype);

// array ke prototype ka naam : Array.prototype
console.log(Array.prototype);


const arr = [2,3,5,4];
console.log(arr.__proto__);


// object ka prototype Obejct.prototype hota hai, aur Jb koi object create karte hai tb newly created object, Object.prototype ke property ko inherit karta hai.

// Array ka prototype Array.prototype hota hai aur Jo ki Object.prototype ko inherit kiye rehta hai, or jb array create krte hai to wo newly created array, Array.prototype ke property ko inherit karta hai.


// Function ka prototype function.prototype hota hai, jo ki Object.prototype ke property ko inherit kiye rehta hai, aur Jb function create karte hai tb newly created function function.prototype ke property ko inherit karta hai. 


// ! En sab me ROOT ELEMENT or PARENT ELEMENT, object hi hai. Aur ushi ka property sare element or methods inherit kr rahe hai. 
// We can verify with accessing Object.prototype.__proto__ : It will give null in result.
console.log(Object.prototype.__proto__);
console.log(Function.prototype.__proto__.__proto__);

// Ishi chaining ko prototype chaining or  prototype inheritence kehte hai.