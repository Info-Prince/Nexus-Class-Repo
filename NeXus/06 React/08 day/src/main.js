import React, {useState, useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";


function Main() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numberChange, setNumChange] = useState(false);
    const [charChange, setCharChange] = useState(false);

    const generatePass = useCallback (() =>  {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChange) {
            str += "0123456789";
        }
        if(charChange) {
            str += "~`!@#$%^&*()_+{}[]:';/?.>,<";
        }

        let pass = ""
        for(let i = 0; i<length; i++) {
            pass += str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass)
    }, [length, numberChange, charChange])

    // useEffect hook has been used since without using it when we call generatePass for initial loading then it'll started calling component again and again since setPass will take control to the top of the main component function.
    // Since we've used useEffect hook with empty array dependency so it'll only call once while loading site. 
    useEffect( () => {
        generatePass();
    }, [length, numberChange, charChange]) //here we can also pass generatePass since they have also same dependency.

    return (
        <>
            <div className="container flex">
                <h1>Password is: {password}</h1>
                <div className="range-controller flex">
                    <input type="range" min={5} max={30} value={length} onChange={(e) => setLength(e.target.value)}></input>
                    <label>Length is: {length}</label>
                </div>
                <div className="flex">
                    <div className="flex">
                        <input type="checkbox" defaultChecked = {numberChange} onChange={() => setNumChange(!numberChange)}></input>
                        <label>Number</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" defaultChecked = {charChange} onChange={() => setCharChange(!charChange)}></input>
                        <label>Character</label>
                    </div>
                    
                </div>
            </div>
        </>
    )

} 

ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>); 


// In this app the time re-render process will be done , memory will be allocated again. Whatever already memory allocated to them.

// ? How this problem can be resolved that old function can be used for avoiding to make extra function call. So that memory can also be saved. 
// using useCallback hook we can tackle this proble. 
// It take callBackFn and dependency
// In dependency array , pass only those value whenever this particular fn should be called.
// So on the above eg: generatePass fn should be called only when changes made into length , numberChange and charChange variable.
// if changes has been made into password and have to call setPassword then without calling generatePass fn we can use this function old value (since we have to apply operation on the old value of the generatePass function) since it'll be stored because of the useCallback hook.

// !VVI TOPIC 
// const [password, setPassword] = useState("");
// const [length, setLength] = useState(8);
// const [numberChange, setNumChange] = useState(false);
// const [charChange, setCharChange] = useState(false);

// setPassword, setLength, setNumChange, setCharChange => All these function will be created once and that reference will be stored into stack memory which will point to a specific heap region location.
// password , length, numberChange, charChange => all these will be treated as variable and these will be created again and again when it will be changed.