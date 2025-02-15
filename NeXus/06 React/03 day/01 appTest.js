//! How to write production ready code and how code will be deployed ?
// While using npm module (for react) js will not work automatically. For making js working we would have to import react and react-dom into js file. And here javascript file is not used as javascript file but it's being used as module. So while linking js file into html file just mention the type of js file as module Then only everything will start working.
// It's not normal js file , it's module file. Initially js has not function like import or else it has been added further and it make js file as module.

import React from "react";
import ReactDOM from "react-dom/client";




// It's part of react 
//! React.createElement() => it's giving react element or JS object. You can verify it while printing on the console. And then we render this object then it's gonna to convert into html element.

// However this js file will not work before running command "npx parcel index.html"

// However this dist folder code is not production ready code. For making it production ready run command as "npx parcel build index.html"

// Now dist folder's file is ready for production But don't upload map file, It's for getting back the js actual code written by the programmer. Which we don't like to distribute to the public.
// using mapping file we can get back the original written js file.


//! JSX: JavaScript XML => While using JSX (declared in module file), we can write html code into js file.

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

                    //! It's part of JSX
const elementJsx = <h1>Hellow Coder Army, Le's begin with JSX.</h1>
reactRoot.render(elementJsx);

// Older method of creating element was leanthy process, however it was being used in earlier days when jsx has not been came into the market. But after evolution of jsx older method of creating element deprecated and newly method of creating element using jsx become famous.

            //! JSX
// h1>Hellow Coder Army, Le's begin with JSX.</h1>
            //! JSX work
//jsx => React.createElement  // From jsx to React.createElement me convert karne ka kaam BABLE karta hai.
            //! react work                  // render work
// React.createElement => react element (JS object) => HTML Element 



//? How jsx works ?
    //! bable               // react                    // render
// jsx => React.createElement => react element (JS object) => HTML Element 


// todo Examble :- const elem = <h1> Hello Dunia , this is jsx </h1>
//?  bable work
// React.createElement = ('h1', {}, "Hello Dunia , this is jsx");
//?  react work
// React will convert that into react element or js object which can be verify while printing on console.
//?  render work
// It'll finally return html element.


// ? bable parcel ke sath free me aata hai, which works as transpiler, or can say that jsx works also as transpiler.



// ? How to declare multiple html element using jsx
const name = "ROHIT";
const obj = {
    name : "prince",
    salary : 14200,
    age : 20
}

const headStyle = {
    color : "white",
    backgroundColor : "green",
    fontSize : "30px"
}


//! react element
const multiElem = (
    <>
        <h1 id="first" className="diffFromHTML">Hello Coder Army, This is First line of Multi element using jsx, {name} </h1>
        {/* <h2 money= {32} style={headStyle}>Second line of multi element using jsx. My name is {obj.name} </h2> */}
        <h2 money= {32} style={{color:"white", backgroundColor:"pink", fontSize: "30px"}}>Second line of multi element using jsx. My name is {obj.name} </h2>

        {/* Here style me jo andar use huaa hai wo js ka object hai , and jo {curly braces} ishe wrap kiya hai wo bta rha hai ki andar js ko likha ja rha hai. */}
    </>
)
reactRoot.render(multiElem);


// However it's not means that we're writing html code into js file, It's just feel that we're writing html code into js file but it's different however similar. 
// here class will be declare as className 
// In JSX we can use js expression, which make it different from hmtl file's code.


// ! Jha pr v curly braces {} lga ho js me, it means wha pr kuch expression hi aayenge.
// money = {32} // have given number in money attribute instead of string.
// style attribute ek object ko expect karta hai.



// todo What is REACT COMPONENT
//// Jo element hmne bnaya , multi element or normal whi element react element hai.
// Class based component // ! it's old, deprecated , not need to know. 
// Function based component => // ! Here we'll get to know that how function is being declared in react. that's it.


function greet () {
    return <h1>This is Function based component</h1>
}
const meet = () => {
    return <h2>This is arrow function based component</h2>
}

// const functionComponent = greet();
// const functionComponent2 = meet();
// reactRoot.render(greet());
// reactRoot.render(meet());

reactRoot.render(
    <>
        {greet()}
        {meet()}
    </>
)

