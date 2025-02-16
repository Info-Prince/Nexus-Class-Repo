// !props drilling :
// It's just a term which create extra headache. Like when we have to use some variable of parent component into 10th depth of child component then it'll be passed as an argument to it's child component one by one until argument reached to the 10th child component and it's create headache since this props is being not used anywhere else except 10th child component however it's travelling to all child element. 
// It'll also make our app lazy or heavy since if 10th child will re-render then all other child component will also render however it was not needed.

// ! useContext
//todo  This pronlem can be solved using useContext hook
// Create a global file (universal file) where all useState variable and fucntion will be initialized and if any component required then they should get access of this file directly and make changes into it so that other component can used it's current chnaged value. 
// Props paas karne ki tention khatam ho jayega.

//? why we're using useContext ?
// we're using useContext to extract data from globalFile. Since global file will return an object and that object is being destructured with the help of useContext.

import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Second from "./component/second";
import Third from "./component/third";
import globalFile from "./component/Global";
import Four from "./component/four";


function App() {

    const [count, setCount] = useState(10);

    return (
        <>
            <Four/>
            <globalFile.Provider value = {{count,setCount}}> 
            {/* update globalFile value with count,setCount upto it's body only*/}
            {/* Since globalFile is an object so there's number of key value pair availabe */}
                <h1>This is parent component</h1>
                <Second/>
                <Third/>          
            </globalFile.Provider>
            <Four/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);







// ? how useState variable and function can be passed to global file and can be used in any component file without props drilling ?
//! we need to write our code under :
{/* <globalFile.Provider value={count , setCount}>

</globalFile.Provider> */}

// And under it's body we can pass that particular variable and function to any particylar child component


// todo decode it
{/* <globalFile.Provider value = {{count,setCount}}>

</globalFile.Provider>  */}

//? Here in value we're passing count variable and setCount fn as an object. It can be also passed as
// {count:count, setCount:setCount}  => in key and value pair
// {ctr:count, setCtr: setCount} => in key and value pair bur with key name modified.



