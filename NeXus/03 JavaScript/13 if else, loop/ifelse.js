// ? If else in Javascript.



// ? Switch case statement
switch(new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;   
        
    default: 
        console.log("Not a valid day!");
        break;
        
}

//switch case statement me strict check hota hai...
// like you have defined case with number and getting arguement as string then default case will run only.


// ? Looping statement : for loop
// for(let i = 0; i<10; i++)
//     console.log("hello prince!");


// ? why c++ faster than  jS.
let sum = 0;
for(let i = 1; i<=10; i++) {
    sum+=i;
}
// On the above example every time space for i and sum will be allocated. Since JS has been implemented as it's data storing location defined at the time of every execution. Qki isme data type ka size fixed nhi hota hai, As per requirement it'll be changed. Like if i've store integer data and want to store sting then we can change it while execution or compilation. That's what at every cycle it's data location will be reassigned with updated value.



//! ? how to print value in same line.
// for(let i = 0; i<6; i++) {
//     for(let j = 1; j<=5; j++) {
//         console.log();
//     }
// }


// ? PLAYING WITH OBJECT AND LOOP
const obj = {
    name : "prince",
    age : 21,
    amount : 1000,
    city : "patna"
}

const value = Object.values(obj) //first method
const key = Object.keys(obj); // second method

// console.log(key);
// console.log(value);


for(let i = 0; i<key.length; i++) {
    console.log(obj[key[i]]);   // jis tarah obj.key access kiya jata hai. like obj.name or obj["name"]
}