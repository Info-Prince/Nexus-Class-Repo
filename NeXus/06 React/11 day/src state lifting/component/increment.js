export default function Increment ({ctr, setCounts}) {
    
    console.log(ctr);
    return (
        <>
            <h2>Child Count is: {ctr}</h2>
            <button onClick={()=>setCounts(ctr+1)}>Increment</button>
        </>
    )
}


// if we pass props to children while calling them then children component can access their parent component's useState's function and variable.

