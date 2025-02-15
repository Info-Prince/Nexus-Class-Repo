import React, {useState} from "react";
import ReactDOM from "react-dom/client"


function Counter () {
    // let count = 0;
    // let count = useState(0); // useState return an array of two element, first will be the number we passed and 2nd will be fn. So destructure them.
    let [count, setCount] = useState(0); // This function says that if any changes is being done on ui , then call me.

    function incrementNumber() {
        count++; // changes done on ui then call setcount with updated value
        setCount(count);
    }
    function decrementNumber () {
        count--; // changes done on ui then call setcount with updated value.
        setCount(count); 
    }

    return (
        <div className="countClass">
            <h1>Count is: {count}</h1>
            <div className="buttons">
                <button onClick={incrementNumber}>Increment</button>
                <button onClick={decrementNumber}>Decrement</button>
            </div>
        </div>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter/>);


// Brute forcly we can manipulate dom, However react not advice that programmer should manipulate dom, DOM manipulation work done by reactDOM. 
// ReactDOM dom ko optimize way me manipulate kr deta hai.


// ! props = parameter arguments

// ! hooks = It's a function. Lots of hooks are there. However just use some famous hooks as : useReference, useState etc....


// ? useState hook
// if variable state changed however not visible on UI , then we'll use useState to make them visible.
// Hooks gives us a special function, with the help of them we can make changes on the ui.

//? bring useState hook from React
// import { useState } from "react";