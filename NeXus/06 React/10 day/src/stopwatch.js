import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom/client";

function Stopwatch() {

    const[time, setTime] = useState(0);
    // check whether stopwatch running or not , if running then setInterval should not be called again
    const[isRunning, isRunningInterval] = useState(false);
    // since we've to store interval reference so that we can stop stopWatch whenever required
    const intervalRef = useRef(null);

    function start () {
        if(!isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((currTime)=>currTime+1);
            }, 1000);

            isRunningInterval(true);
        }
    }

    function stop() {
        if (isRunningInterval) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            isRunning = false;
        }
    }

    function reset () {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return (
        <div className="stopwatch flex">
            <h1>Stop Watch Is: {time}</h1>

            <div className="flex">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>)


// ! It's not solving the problem
function start () {
    setInterval(() => {
        setTime(time+1);
    }, 1000);
}
// Here when we clicked on start btn then it's activated onclick event and hence start function called then setInterval started executing and here is the main catch:
// setTime(time+1) called then 0+1 passed and page re-rendered then timer set with 1 however the work of setInterval is being executing again and again with the same argument value 1 since that will be in other queue.

//! It can be solved if we can pass the current time into paramenter of setTime
// So here is the new feature of useState. It's function (here setTime) can have it's callBack function as: 
// setTime((currTime)=> currTime + 1);