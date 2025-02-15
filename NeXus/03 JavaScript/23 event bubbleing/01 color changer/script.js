// ! first way to add event on each element
// const red = document.getElementById('red')
// const green = document.getElementById('green')
// const blue = document.getElementById('blue')
// const yellow = document.getElementById('yellow')
// const orange = document.getElementById('orange')

// red.addEventListener ('click', () => {
//     document.body.style.backgroundColor = "red";
// })

// green.addEventListener ('click', () => {
//     document.body.style.backgroundColor = "green";
// })
// blue.addEventListener ('click', () => {
//     document.body.style.backgroundColor = "blue";
// })
// yellow.addEventListener ('click', () => {
//     document.body.style.backgroundColor = "yellow";
// })
// orange.addEventListener ('click', () => {
//     document.body.style.backgroundColor = "orange";
// })


//! 2nd way to add event on each element
// select all element and add event using loop
// const buttons = document.querySelectorAll('button');

// buttons.forEach ((button) => {
//     button.addEventListener ('click', () => {
//         // document.body.style.backgroundColor = `${button.id}`;        
//         document.body.style.backgroundColor = button.id;        
//     })
// })

// it doesn't mean that we have reduce time complexity. Here also same number of event listener are being used. we have to just reduce the number of event listener.


//! 3rd way to add event -> optimized approach
// concept of event bubbling and event capturing
// explain in 02 file

// this is a concept of event delegation. Event delegation means delegating all task from child to it's parent

const root = document.getElementById('root');
const body = document.body;
root.addEventListener ('click', (event) => {
    //while clicking on h1 text it's changing color which i don't want
    
    // access the property of h1 tag (which is object), where tagName will be there
    const obj = event.target;
    console.log(obj.__proto__);
    
    if(event.target.tagName != 'H1'){
        document.body.style.backgroundColor = `${event.target.id}`;    
    }
})

// here event has been added to only root element (parent element) and based on that work is being done.