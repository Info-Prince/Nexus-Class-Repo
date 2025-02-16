// ! STATE LIFTING : 
// State lifting means just create useState variable and it's function to the parent element or the common ancestor so that it could pass as an argument to all the component which would have desired to use it.

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Increment from "./component/increment";
import Decrement from "./component/decrement";

function App() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Parent Counter is: {count}</h1>
            {/* Create a child component that will handle incr and decr of it's parent component App */}
            <Increment ctr = {count} setCounts = {setCount}/>
            <Decrement ctr = {count} setCounts = {setCount}/>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


// ? What if there's one parent component and two child component as increment and decrement. And In the increment component there's useState variable and it's handling incremention task then how decrement component will use that useState variable and function to decrement value ?
