import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Home from "./component/home";
import Contact from "./component/contact";
import Dashboard from "./component/dashboard";
import Details from "./component/details";
import Hello from "./component/hello";
import Hi from "./component/hi";
import Zero from "./component/zero";

function App () {


    return (
        <BrowserRouter>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/Contact"}>Contact</Link>
                <Link to={"/Dashboard"}>Dashboard</Link>
                <Link to={"/Details"}>Details</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>
                <Route path="/Details" element={Details()}>
                    <Route index element={<Zero/>}></Route>
                    <Route path="Hello" element={<Hello/>}></Route>
                    <Route path="Hi" element={<Hi/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);