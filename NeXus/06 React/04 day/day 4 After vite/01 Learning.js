// When we want that something to use as devDependencies then we can install them as dev dependencies.

import React from "react";
import ReactDOM from "react-dom/client";

const elemenet1 = <h1>Hellow coder Army!</h1>

//! In jsx: Only expression can be used. (expression means the thing which produce some result)
//! In jsx: statement can't be used.
//! jsx can understand value only : that value should be in the form of number or string. 
// todo JSX CAN UNDERSTAND VALUE (NUMBER, STRING) AND ITSELF.
// ? Here is the question then how jsx take array ?
// In array also jsx extract value of array one by one and if it finds that value as string or number then only it will gonna to use them, And if there's object then that will be ignored or thrown error. You can verify it.

function greet(name) {
    return <h2>Ram ram {name} bhaiya ji!</h2>
}


const rootElem = ReactDOM.createRoot(document.getElementById('root'));

// rootElem.render(elemenet1)
rootElem.render(greet("rohit Negi"))


//todo How to create user defined element into jsx or Javascript XML
// For creating user defined element we've to make first letter capital.

// jsx ka ye rule hai ki function component ka first letter capital hona chahiye. Iske piche ka logic bs itna hai ki ye mostly html ke tag ko understand kr leta hai, so making jsx to understand user defined tag, we just make first letter of user defined tag as capital. 

function Hello(name, age) {
    return <h1>Ye jsx ka function hai, And it'll be called differently.</h1>
}

rootElem.render(<Hello/>) // jsx function call.


// ? how to paas argument while calling function into jsx user defined function
// Here when we pass multiple arguments while calling function then that will be came into parameter into props as an object. And we'll consume that object as per our needs.


function GreetFun(props) {
    return <h1>It's also jsx user defined function, which taking multiple arguments. My name is {props.name}</h1>
}
const funElem = <GreetFun name = "prince" age = "23"/>;
rootElem.render (funElem);