const targetElem = document.getElementById("content");

function timer () {
    const currTime = new Date();
    const olympicsTime = new Date("2028-07-14T00:00:00");
    const timeLeft = olympicsTime - currTime;
    const dayLeft = Math.floor(timeLeft/(1000*60*60*24));
    const hoursLeft = Math.floor((timeLeft/(1000*60*60))%24);
    const minuteLeft = Math.floor((timeLeft/(1000*60))%60);
    const secondLeft = Math.floor((timeLeft/(1000))%60);
    targetElem.innerHTML = `${dayLeft} Days\n${hoursLeft} ${minuteLeft} ${secondLeft}`
}


setInterval(timer,1000)