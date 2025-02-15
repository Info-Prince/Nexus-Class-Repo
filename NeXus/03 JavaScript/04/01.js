let num1 = 10;
let num2 = "10";
console.log(num1 == num2);
// yha pr type conversion ho rha hai from string to number.


// === type check first, then compare the value.

// null == undefined // true.
// null === undefined // false
// null and undefined ek dusre ke equivalent hote hai, iske alawa null or undefined kisi ke v equivalent nhi honge


//null of type conversion 0 hota hai.
console.log(null == 0); //! null only undefined ke equivalent hota hai. yha type conversion nhi hoga. And don't try to search logic. since programmer aise hi js ke null ke rule ko define kiye hai.

// here all case me null ka and 0 ka number me type conversion hoga , and based on that output generate hoga.
// console.log(null < 0); // 0 < 0 //false
// console.log(null > 0); // 0>0 //false
// console.log(null <= 0); // 0 <= 0 // true
// console.log(null >= 0); // 0 >= 0 // true



// undefined ka type conversion NaN hota hai.
// undefined will be equivalent to null only.
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);



// NaN == NaN // since not a number can't be compared.
