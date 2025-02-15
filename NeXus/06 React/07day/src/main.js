import React from "react";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function Main () {

   const [color , setColor] = useState("black");
   // document.body.style.backgroundColor = color;
   console.log("render");   
   
   // CallBackFunction , Dependencies
   useEffect( () => {
      console.log("useEffect Executed");
      document.body.style.backgroundColor = color;      
   }, [color])


   console.log('second');

   return (
      <>
         <div className="flex card-wrapper">
            <h1>Background Color Changer!</h1>
            <div className="flex btn-wrapper">
               <button className="btns" style={{backgroundColor: "red"}} onClick={() => setColor("red")} >red</button>
               <button className="btns" style={{backgroundColor: "green"}} onClick={() => setColor("green")} >green</button>
               <button className="btns" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")} >blue</button>
               <button className="btns" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")} >yellow</button>
               <button className="btns" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")} >pink</button>
            </div>
         </div>
      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);

// ! What is the meaning of re-render ?
// It means call the function again.

//! onClick={() => setColor("red")
// Jb v hm es tarah se function call karte hai tb main function re-render hota hai. And this way red will be assigned to useState("red") and const[color, setColor] will be created again and color will be initialized with red.

// ? How can you verify that function is being re-rendered again and again ?
// By simply console.log("any comment"); Firstly it'll print once when app load. And the time we click to change color then app will re-render again and msg will print on console.

// ! React says that whenever state change, component will be re-rendered.
// Primitive value ke liye ek baar without state change kiye huee v react component ko execute hone ke liye allow karta hai lekin non primitive value like array (object),  object ke liye allow nhi karta hai. 
// Due to react internal implementation without state changes kiyee huee v primitive value pr component ek baar re-render ho jata hai lekin ye nhi hona chahiye tha.
//todo This term is known as bail out in react. 

// ? How this thing will be handled , since we want to re-render only when actual changes has been done. Like if bg color already red then component should not be render again even if clicking on the red button which call useState with "red" color props Which is as same as previous color. 
// This problem can be solved using useEffect hook.
// useEffect Hook take callBackFunction and Dependency array, And this useEffect hook will be executed after all code edecuted. And it will run only when changes has been made into the dependency array otherwise will not execute. 
// When we pass dependency array as empty into useEffect hook then it'll run only when page load after that it's treated as nothing changes has been made. 
// And when we'll not give dependency array, then useEffect hook will run every time whether user made changes or not.