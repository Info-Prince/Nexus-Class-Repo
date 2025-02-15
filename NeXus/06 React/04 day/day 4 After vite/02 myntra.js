import React from "react";
import ReactDOM from "react-dom/client";


// header part start here

// header part end here


// hero section start here
// hero section end here


// Footer section goes here
// Footer section end here



//! card function goes here
function Card (props) {
    return (
        <div style={{
                border:"2px solid black",
                padding: "5px", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center" 
            }}>
            <img src={props.image} height="200px" width="200px"/>
            <div style={{textAlign: "center"}}>
                <p>{props.cloth}</p>
                <h1>{props.offer}</h1>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

//! function which will be render, here header , hero section and footer work will be there.

const dummyArr = [
    { cloth: "Jeans", offer: "20-40% OFF", image: "https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg?v=1711976456&width=1066" },
    { cloth: "T-Shirt", offer: "30-50% OFF", image: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-14at12.33.18PM_651b12a6-c871-4f71-bfb1-e80f4224d5d6.jpg?v=1724760910" },
    { cloth: "Jacket", offer: "40-60% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Sweater", offer: "25-45% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Shoes", offer: "35-55% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Shorts", offer: "15-35% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Cap", offer: "10-30% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Socks", offer: "5-20% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Scarf", offer: "20-50% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Gloves", offer: "25-50% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" },
    { cloth: "Hoodie", offer: "30-60% OFF", image: "https://nobero.com/cdn/shop/files/sand_903783e1-d9b8-4d33-add5-79da6bbb7bdb.jpg?v=1724760910&width=360" }
];

function App () {

    return (
        // header code
        // hero/body code :- create card here
        <div style={{display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "10px"}}>
            {/* <Card cloth = "T-shirt" offer = "20-40% OFF" />
            <Card cloth = "Jeans" offer = "40-50% OFF" />
            <Card cloth = "Pant" offer = "70-80% OFF" />
            <Card cloth = "Kurta" offer = "30-50% OFF" />
            <Card cloth = "Pajama" offer = "10-20% OFF" />
            <Card cloth = "Sarrie" offer = "15-20% OFF" />
            <Card cloth = "Trousers" offer = "40-45% OFF" />
            <Card cloth = "Joggers" offer = "50-70% OFF" />    */}

            {/* ! why i've used map => since it return value (array) and if we'd used for loop then it may give error since for loop won't produce result. And jsx only expect value. */}

            {
                dummyArr.map ((value , index) => {
                    return <Card key = {index} cloth = {value.cloth} offer = {value.offer} image = {value.image} />
                })
            }

            {/* however react showing error , since react says that each element should have unique key that can be temporarily fixed as key = {index} */}

        </div>
        // footer code
    )
}


const rootElem = ReactDOM.createRoot(document.getElementById("root"));

rootElem.render(<App/>);