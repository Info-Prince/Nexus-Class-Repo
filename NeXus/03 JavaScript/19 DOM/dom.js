const objElem = document.querySelectorAll(".head1");
// querySelectorAll will return a nodeList (collection of object) containing all similar element belongs to the particular class.
// It's a array like nodeList and Some property of array will work here.

//! How to iterate over nodeList ?
//? 1: using for loop
// for(let i = 0; i<objElem.length; i++)
//     console.log(objElem[i]);

//? 2: using for of loop 
// for(value of objElem) {
//     console.log(value);    
// }

//? 3: using forEach method
// objElem.forEach((val) => {
//     console.log(val);    
// }) 


//! Convert nodeList into Array
const arrElem = Array.from(objElem);
// Now all properties of array can be applied onto arrElem.


//! Accessing by tag name:
// While accessing by tagname, It'll return HTMLCollection. 
// And HTMLCollection is iterable object collection. However all properties like forEach method doesn't present here. 
const tagElem = document.getElementsByTagName("li");

//! convert htmlCollection into array
const tagArrElem = Array.from(tagElem)
tagArrElem.forEach ((val) => {
    console.log(val);    
})


// ? Accessing using relationship
// parent node
// child node
// first & last child
// siblings node