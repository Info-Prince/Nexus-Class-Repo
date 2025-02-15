let str1 = "Prince";
console.log(str1.length)
// length is being not called as function call , but except this all called as function call

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
//these function will generate another string and original string will be immutable.
console.log(str1);



let newstr = "hello coder army";
console.log(newstr.slice(0,3)); // slice can take negative index
console.log(newstr.slice(-12, -1));
console.log(newstr.substring(0,3)); // substring can't take -ve index

// negative index start from last to first. 
//  strneg = "prince"
//      -6-5-4-3-2-1


let str2 = "hello ji kaise ho ji aap";
console.log(str2.replace("ji","rahul"));
console.log(str2.replaceAll("ji","rahul"));
console.log(str2);


// ? want to convert string into array
let str3 = "money, honey, sunny, annie";
console.log(str3.split(", "));


//? trim fn used to remove starting and ending space
let str4 = "   hello coder army    ";
console.log(str4);
console.log(str4.trim());



// todo At the end jo v non primitive data type hote hai uska type object hi hota hai. For eg array, object (type of object data), Function type is function but when you go to depth then it'll be consider as object. 
// todo So the data which is being stored in heap region that data type will be object type.

//? New way to create string into heap region
let newstring = new String("Hello coder army, Let's Rock!");
console.log(newstring);
console.log(typeof newstring); // object since it's stored into heap.

