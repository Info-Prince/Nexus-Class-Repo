import globalFile from "./Global";
// to use globalFile data we need to import useContext file
import { useContext } from "react";

export default function Second () {

    const {count, setCount} = useContext(globalFile);

    return (
        <>
            <h2>This is second component and it's global variable : ( {count} )</h2>
        </>
    )
}