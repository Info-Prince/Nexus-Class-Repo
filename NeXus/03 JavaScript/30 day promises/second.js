cart = ["pizza","coke","sandwich"];



// function placeOrder(cart , callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//      callback(order);
//     },2000)
// }

// function preparingOrder(order , callback){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//         callback(foodDetails);
//        },5000)
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//        },3000)
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)


// placeOrder(cart , (order)=>{
//     preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// });



function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })

    // it will return the data whether that can be resolved or rejected
    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })

    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}



// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));

// placeOrder(cart).then((data) => {
//     // console.log(data);
//     return data;
// });

placeOrder(cart)
// .then ((order_data) => {
//     return preparingOrder(order_data);
// }).then ((foodDetails_data) => {
//     return pickupOrder(foodDetails_data);
// }).then ((droplocation_data) => {
//     return deliverOrder(droplocation_data);
// })
.then((order_data) => {
    return preparingOrder(order_data);
})
.then((foodDetails_data) => {
    return pickupOrder(foodDetails_data);
})
.then((droplocation_data) => {
    return deliverOrder(droplocation_data);
})
.catch((error) => {
    console.error("Error:", error);
});



// ? Every promise give data after a certain time (depends).
// ? promise consume
// .then ((data) => {
//     // consume data
// })

// const pr = new Promise(function(resolve,reject){

// })

// return pr;


