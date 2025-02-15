import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom/client";


function App() {

    const [count, setCount] = useState(0);
    const money = useRef(0);

    return (
        <div className="secondCtnWrapper">
            <div className="secondCounter">
                <h1>Count is: {count}</h1>
                <button onClick={()=> setCount(count+1)}>Increment</button>
            </div>
            <div className="secondCounter">
                <h1>Money is: {money.current}</h1>
                <button onClick={() => {
                    money.current = money.current+1;
                    console.log(money.current)
                }}>Increment</button>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


// ! why money is being started counting from 1 when we increment into counter ?
// button onClick={() => {
//     money = money+1;
//     console.log(money)
// }}>Increment</button>

// This way we've applied event listener on button which will be invoked while clicking on it. So when we're clicking on it it's normally making incrementin into money but when we're making increment into counter then page is being re-render and this way again money variable is being initialized with 0. That's what it's started counting money value from 1.
// Here we need something which can store reference of this variable and we may not loose previous value.
// !using useRef hook this problem can be solved.
// useRef hook returns an object which have some data into key and value pair, And there's key as current which store variable previous value into it.

// ? Why money is being printed on the screen when we're making increment into counter 
// Since when we make some increment into money (like we made 5 increment) then it'll not be printed on the screen since page is being not re-render. And the time we make increment into counter then it's re-rendered the page however money's previous reference has been stored into money object (in which key current has stored current reference of money vlaue) using useRef Hook, And because of this money new incremented value is being printed on the screen.