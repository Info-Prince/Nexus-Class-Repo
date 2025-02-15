import React, {useState, useEffect, useMemo} from "react";
import ReactDOM from "react-dom/client";

function App() {
    
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(null);
    const [result, setResult] = useState(null);

    function fibonacci (num) {
        if(num <= 1) return num;

        return fibonacci(num-1)+fibonacci(num-2);
    }
    
    // ! using useMemo Hook, we saved one extra re-render process
    // const result = useMemo(() => {
    //     return  fibonacci(number);
    // }, [number]);

    // ! using useEffect Hook, one extra re-render process is being done.
    useEffect(()=> {
        setResult(fibonacci(number));
    }, [number])

    return (
        <>
            <div className="content-wrapper">
                <div className="counter flex">
                    <h1>Counter is: {count}</h1>
                    <div className="flex">
                        <button onClick={()=>setCount(count+1)}>Increment</button>
                        <button onClick={()=>setCount(count-1)}>Increment</button>
                    </div>
                </div>

                <div className="fibonacci flex">
                    <h2>Fibonacci Number Is: {result}</h2>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


// ! useMemo usecase
// useMomo hook lets you cahce the result of a calculation between re-renders.

// ! using useEffect hook the same problem can be solved but there's one extra re-render process will be done. 
// Because useEffect hook execute lastly. means after execution of all code useEffect hook execute. And this way when we change input value then once all code will render after that useEffect hook will be called and that will again re-render app or that segment of code. That's what we'll use useMemo hook.
s