export default function Decrement ({ctr, setCounts}) {

    return (
        <>

            <button onClick={()=> setCounts(ctr-1)}>Decrement</button>
        </>
    )
}