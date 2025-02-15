// Our html file contained into document. which is a property of global object (window).

// ! Document Object Model (DOM)
// The DOM (Document Object Model) is a way to represent a web page so that programs (like JavaScript) can interact with it.
// Browser automatically convert our web page into DOM so that we can interact.
// Browser convert web page into Object.

// ? What it means by web page ko DOM me convert karna ?
// This work is done by browser without any forces. DOM me convert karne ka simple meaning hai ki web page ko object me convert kar dena.

// ? Verify that in JavaScript everything is object.
// refer to the image flowchart, where everything is object. 

// ? Take a simple example to cover that what should be considered as object, attributes and text node.
// <h1 id="second" class="head1">Topics Covered So Far</h1>

// here h1 element is object
// id , class is attributes.
// Topics covered so far :- it's text node.

// ? How h1 tag be stored, if it's object.
// Since h1 element will have to convert into object. Let's assume that it's name is obj.
const obj = {
    id : "second",
    class : "head1",
    innerHtml : "Topics Covered So Far",
    tag : "h1",
    //there will be numbers of more things or properties.
}
// All these conversion is being done automatically by browser, We have to access them only for making changes.



//! With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// 1: JavaScript can change all the HTML elements in the page
// 2: JavaScript can change all the HTML attributes in the page
// 3: JavaScript can change all the CSS styles in the page
// 4: JavaScript can remove existing HTML elements and attributes
// 5: JavaScript can add new HTML elements and attributes
// 6: JavaScript can react to all existing HTML events in the page
// 7: JavaScript can create new HTML events in the page


// ? How to access all directory of document.
// using document can't access. But  can access with the help of window object hirarchy.
// console.dir(document)

//? Prove that selected element is stored as object ?
// const obj1 = document.getElementById("first")
// console.log(obj1)
// console.log(typeof obj1)

//? While accessing obj it's showing html accessed element. However it should be shown as key value pair if it's object ?
// It's showing element and not looking like object. It doesn't mean that it's not object and hasn't stored in key value pair. It's looking like element because it has some properties while make it looks like element. that's it. 
// However if you open it's prototype which will be attached into it then you will get to know that it's stored as object. Here you can find it's id, class, innerHtml and so many properties.
//! obj1.__proto__ 
// While storing html target element into a variable that's object, And that object will attach it's prototype.


// ? Why html attribute class accessed as className ?
// Since in javascript class is a reserved keyword and if we would use the same keyword to access class of any target html element then it must create problem. That's what it's defined as className to access it.

// ? What happens if we access html element by className ?
// Since many of the element class name would be same, And if we access by className then it will give us collection of htmlElement (collection of objects). That can be accessed using this key. (generally it will be accessed as accessing an array element since here key will be like index).
// HTMLCollection looks like array but it's not. It's collection of object.