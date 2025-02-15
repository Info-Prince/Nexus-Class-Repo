setInterval(() => {
    const timer = document.getElementById("container");
    const currTime = new Date();
    timer.innerHTML = currTime.toLocaleTimeString();
}, 1000);

// ? Can the same target achieved with the help of while loop ?
// Can't achieved. Since while loop will be called again and again if it'll be called with true parameter.
// And we just want to call this function 1 time after every second.