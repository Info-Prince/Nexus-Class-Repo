import globalFile from "./Global";
import { useContext } from "react";

export default function Four() {

    const data = useContext(globalFile);
    console.log(useContext(globalFile))

    return (
        <>
            <h1>This is globalFile data: {data}</h1>
        </>
    )
}