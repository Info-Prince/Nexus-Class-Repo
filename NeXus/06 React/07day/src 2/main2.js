import React, { memo } from "react";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./component2/Colorful";

function Main () {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="ctn-wrapper">
                <div className="flex">Counter is: {count}</div>
                <div className="counter">
                    <button onClick={ () => {setCount(count+1)}}>Increment</button>
                    <button onClick={ () => {setCount(count-1)}}>Decrement</button>
                </div>
            </div>
            <Colorful></Colorful>
        </>
    )
   
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);

//? First ques is whether Colorful function will execute or call or not whatever changes made or not ?
// Yes, it will be called since it's simple js rule that all code will  execute line by line and it's function call so it will be called when time came to call it.

// ? Here one point to be noted that since we've used useEffect hook so that hook will not be invoked since in the dependency of useEffect hook nothing changes has been made. So it can be considered as it's advantage, And we saved memory while avoiding the extra component re-rederd process.

// ? However we don't want to make that extra call for the function where nothing changes has been made. 
// It can be achieved as exporting Colorful function like :
// export default React.memo (Colorful)

// react.memo ye memories rakhta hai ki agar same props baar baar send ho rha hai then it'll not call that particular function but when props changes then it'll call that particular function. 