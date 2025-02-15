//primitive and non primitive data type// primitive data type are immutable and non primitive data type are mutable.

//primitive data type: immutable (it's value can't be changed)
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);
// here value is being not changed or overridden but it's being assigned again onto new address with newest value.


// non primitive data type are immutable (value will be changed)
let obj1 = {
    name : "prince",
    id : 22,
}
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.id = 44;

console.log(obj1);
console.log(obj2);


// concept of stack and heap memory
let obj3 = {
    name : "madhu",
    id : 34
}
// here obj3 will store address of the data which is in it's body. and it obj3 will be stored in stack memory and data will be store in heap memory.


// ? why primitive data type are immutable ?
// Since in primitive data type we can change it's data type with assigning diff diff data and that may not fit into the previous size of data, And may get difficulties to shift all stack data , since stack store data in synchronous way. That's what programmer have declare that primitive data should be immutable. And the time user updating data with newest data then it's not changing variable data only but it's changing it's location and variable is being declared into newest stack location.


// Movie or data stored in memory into binary form. some bits will be open and some will be closed.
// When deleting movie or file, our computer is just breaking the link of your system from stored location, however it's showing free space, Since now that location can be utilized further to store other data or movie.


// ? Why non primitive data getting memory in heap region ?
// Array , Object, Function and all type of non primitive data is being stored in heap region since it stored large amount of data and if we store it into stack memory then here when you gonna to make changes then it'll increase it's time complexity, since we'll have to update it all which can take long time.

// since stack have limited amount of memory that's what it's just store limited amount of necessary data. Stack is being used to execute data into synchronous way. 
// Large amount of data stored into heap and it's address or reference is stored into stack so that it can be execute on time and also situation of overflow may not arise that's what non primitive(large amount) data stored into heap region.

// ? If string has stored large amount of data which can't fit into stack memory then it'll automatically store data into stack memory. 