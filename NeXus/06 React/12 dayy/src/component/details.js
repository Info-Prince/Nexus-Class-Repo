import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router";

export default function Details () {


    return (
        
        <>
            <nav>
                <Link to={"Hi"}>Hi</Link>
                <Link to={"Hello"}>Hello</Link>
            </nav>
            <h1>Welcome to Details Page</h1>
            <Outlet></Outlet>
        </>
    )
}

//? Here How we've given link outside of BrowserRouter 
// It's not outside of it, However it's wrap up under it, since Details function has been called from the body of main function which is inside of BrowserRouter.