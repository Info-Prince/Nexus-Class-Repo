import globalFile from "./Global"
import { useContext, useState } from "react"

export default function Third () {

    const {count, setCount} = useContext(globalFile)

    return (
        <>
            <h3>This is third component and count is: {count}</h3>
            <button onClick={()=>setCount(count+5)}>Increment</button>
        </>
    )
}