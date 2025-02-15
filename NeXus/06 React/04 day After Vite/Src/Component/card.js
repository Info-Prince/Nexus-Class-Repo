export default function Card(props) {
    return (
        <>
            {/* <div className="card-wrapper"> */}
                <div className="card">
                    <img src={props.image}/>
                    <div className="card-content">
                        <p>{props.cloth}</p>
                        <h1>{props.offer}</h1>
                        <p>Shop Now</p>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}