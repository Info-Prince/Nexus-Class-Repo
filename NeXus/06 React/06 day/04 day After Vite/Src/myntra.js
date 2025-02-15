import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import Card from "./Component/card";
import Footer from "./Component/footer";
import dummyArr from "./Utils/dummy";
import {FilterBtn, sortArray} from "./Component/filterBtn";
import {greet as greetMessage, meet} from "./Utils/dummy"
import { useState } from "react";

// Here we have imported greet as greetMessage, as keyword is being used when we've already used greet function into the main (current) file That's what we just change greet name to greetMessage for making them usbale into current file.



function App () {

    let [arr, setArr] = useState(dummyArr)

    function sortArray () {
        arr.sort((a,b) => a.price - b.price)
        setArr([...arr]); 
        // console.log(arr);
    }

    function sortByPrice () {
        // arr.sort( (a,b) => a.discount - b.discount);
        // setArr([...arr]);
        setArr(arr.filter((value) => value.price >= 499));
        
    }

    return (
        <>
            {<Header/>}

            <div className="flex btns">
                <button onClick={sortArray}>Sort By Price</button>
                <button onClick={sortByPrice}>Price Above 499</button>
            </div>
            
            <>
                <div className="card-wrapper flex">
                    {
                        arr.map((value , index) => {
                            return <Card cloth = {value.cloth} offer = {value.offer} image = {value.image} price = {value.price} />
                        })
                    }
                </div>
            </>            
        </>
    )
}


const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(<App/>);



// React only changes ko hi execute krta hai. And when we just sort array on it's original location then reference doesn't changed and hence react will not update it on it's dom. That's what we need to change reference of the newly sorted array on new location. Means we will have to make clone of the same sorted array. 
// Array or object ka reference stack me store hota hai, and number direct stack me store ho jata hai. That's what hm number ke changes ko react direct observe kr leta hai and array and object ke changes ko observe nhi kr pata hai. 

// REACT dom ko tbtk manipulate nhi krega jbtk koi changes na ho.