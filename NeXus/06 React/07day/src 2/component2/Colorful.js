import React, {useState, useEffect} from "react";

function Colorful () {
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

export default React.memo (Colorful);