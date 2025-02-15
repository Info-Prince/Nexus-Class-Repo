// ? concept of event bubbling
// event bubble from child to grandParent
// by default event bubbling hi chalta hai
// ? concept of event capturing
// event capture from grandparent to child
// capture value ko true declare krna padta hai.

// ! How many argument eventListener takes ?
// 3 arguments
// addEventListener(eventType, callBackFunction, capture)

// type of event click, keydown or else
// callback function
// by default every eventListener have false value.


const child = document.getElementById('child')
const parent = document.getElementById('parent')
const grandParent = document.getElementById('grandParent')

// child.addEventListener('click', (event)=> {
//     // console.log('child clicked');    
//     console.log(event.target);
// }, true)
// parent.addEventListener('click', (event)=> {
//     // console.log('parent clicked');  
//     console.log(event.target);      
// }, false)
// grandParent.addEventListener('click', (event)=> {
//     // console.log('grandparent clicked');    
//     console.log(event.target);
// }, true)

// Firstly event capturing task done after that event bubble work done.
// mostly we'll use event bubbling which is default.



// event.target ushi element ko show karega jiske wajah se actually me event trigger huaa hai, whatever hum kisi bhi parent element pr event listen kar rahe ho.
// ? For CurrentExample :
// agar event parent pr lga hai , and we clicked on grandParent then it'll not make any response since grandParent is out of range. 
// But agar hum child pr click karenge and want to access console.log(event.target) then it'll show child element , Qki actually me event trigger child element pr click krne pr hi huaa hai whatever event listen karne ka kaam iska parent element kr rha ho.
// ? So here the question is then how to know that event listen krne ka kaam kaun kr rha hai ?
// using event.currTarget we can access the current element jo event ko listen kr rha hai.

child.addEventListener('click', (event)=> {
    // console.log('child clicked');    
    console.log(event.target);
    console.log(event.currentTarget);
})
parent.addEventListener('click', (event)=> {
    // console.log('parent clicked');  
    console.log(event.target);      
    console.log(event.currentTarget);
})
grandParent.addEventListener('click', (event)=> {
    // console.log('grandparent clicked');    
    console.log(event.target);
    console.log(event.currentTarget);
})


//! How event.stopPropagation works ?
// it's basically used when we don't want that resource should be used extra.
// at every event call event bubble will be happen and that can be stop using event.stopPropagation.

// todo Now jump on the color changer project of file 01 and apply this logic.