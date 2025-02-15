function greet () {
    let a = 10;
    let b = 20;

    function meet () {
        console.log(a);
        console.log(b);        
    }

    return meet;
}

const num = greet();
num();

// clouser means is that it'll give access of those variable which is availabe of it's outer scope. Like whatever greet fn have release it's memory from stack and meet reference has been stored into stack memory and also all data of meet has been stored into heap region at the same time so that all those data may not loose.

// Ye concept c++ me apply nhi hota, Since c++ me, when meet function will be returned then that reference will be stored into stack memory and since all data was the part of greet function so that will be released from stack memory and meet reference will be returned. And when we assign greet fn while calling to num and ultimately call num then we may not access those varibale which currently we want to access in JS.