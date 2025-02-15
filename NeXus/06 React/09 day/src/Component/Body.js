import { useEffect, useState } from "react";

export default function Body () {
    
    const [profiles, setProfile] = useState([]);
    const [numberOfProfile, setnumberOfProfile] = useState("");
    
    
    async function fetchProfileInfo (count) {
        const ran = Math.floor(Math.random()*10000 + 1);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${numberOfProfile}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect ( () => {
        fetchProfileInfo(10);
    }, [])


    return (
        <>
            <div className="searchbox flex">
                <input type="number" placeholder="Type Here..." value={numberOfProfile} onChange={(e) => setnumberOfProfile(e.target.value)}></input>
                <button onClick={() => {fetchProfileInfo(Number(numberOfProfile))}}>Enter</button>
            </div>

            <div className="card flex">
                {
                    profiles.map ((value) => {
                        return (
                            // since child component ko diff diff key deni padti hai, so that error doesn't flash.
                            <div key={value.id} className="cards flex"> 
                                <img src={value.avatar_url}></img>
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )

}

//?  Our target is to when user input no. of profile which he wants to show then we have to show that much no. of profile on the screen. How can it be done ?
// Normally when user inputing in inpur filed, it means dom is being manipulated dynamically and there's no control of react on it. So first of all hme ese react ko ye power dena padega so that it can handle dom manipulation into it. 
// give value attribute to input element and since it's state will be changed when user will change value into input filed so create variable using useState which state will be changes when user want to change.
// Here changes will not be visible but value is being updated. Verify using showing number of profile on the screen.
// And this change can be shown using onChange event listener.



// ! Work to be done
// try catch functionality
// Try to add useCallback hook/function into it.
// Search button : name ke basis pr show krna chahiye whether that user exist or not. And if that's exist then display user's card otherwise display message.