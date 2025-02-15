// https://api.github.com/users?per_page=$10

// jsx me JavaScript ka code likhne ke liye {curly braces} lagane padte hai. 
// jsx array ko easily read kr leta hai. If there's map function and it's obvios that map will return array of element. So that element can be read by 


import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";


function GithubProfile() {


    return (
        <>
            <Header/>

            <Body/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile></GithubProfile>)