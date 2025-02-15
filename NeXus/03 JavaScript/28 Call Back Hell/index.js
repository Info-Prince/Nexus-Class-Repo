//  call back hell
// ! It's focused to understand the call back hell in JS.
// ! It's very hard to debug the code of call back hell.
// ! Here each department will be dependent to the parent department. until top level department work done, company employee will not get the info. to do the work. And this way it may arise issues.
// ! Each department dependent to it's top department where function is being called.

// fetchuser(greet)

// Domino's pizza order kar rahe ho:

// callback = ()=>{
//     preparingOrder();
// }




function placeOrder(callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
       },5000)
};

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
       },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){

// }

// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});

// callback hell