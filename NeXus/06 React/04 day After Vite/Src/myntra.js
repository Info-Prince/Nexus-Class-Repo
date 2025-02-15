import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import Card from "./Component/card";
import Footer from "./Component/footer";
import dummyArr from "./Utils/dummy";
import {greet as greetMessage, meet} from "./Utils/dummy"

// Here we have imported greet as greetMessage, as keyword is being used when we've already used greet function into the main (current) file That's what we just change greet name to greetMessage for making them usbale into current file.



function App () {
    return (
        <>
            {/* // header */}
            {<Header/>}

            {/* // body */}
            <>
                <div className="card-wrapper flex">
                    {
                        dummyArr.map((value , index) => {
                            return <Card cloth = {value.cloth} offer = {value.offer} image = {value.image} />
                        })
                    }
                </div>
            </>

            {/* // footer */}
            
        </>
    )
}


const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(<App/>);