// ! Date

// ? How date is coming or getting fetched ?
const d = new Date();
console.log(d);
// With the help of system clock or hardware system clock



const d1 = new Date("2024-12-03T09:10:45");
console.log(d1);
const d2 = new Date(2024, 11, 28);
console.log(d2);

// todo When giving date(string format), then that will be treated as 1 based indexing But when date(integer format), then that will be considered as 0 based indexing.
// String normal logic follow karega, Lekin number or integer format 0 based index logic ko hold karega.

const d3 = new Date(2323); // single value treated as milliseconds.
const d4 = new Date(2034, 2); // tow value treated as year , month.
// ? more than one value as parameter will be considered as simple as it is. like: year, month, day, hours, minute, seconds, milliseconds.


//! setfullyear, setdate, setday
//! setFullHour, setminute, setsecond


// ? Date Calculation

const dat1 = new Date() // current date
const dat2 = new Date("2025-04-21"); // custom date
//difference of date will be in milliseconds
console.log(dat2-dat1);



//? countdown Timer for Olympics
// days, hours , minute, seconds

const date1 = new Date(); //current date
const olympicsDate = new Date("2028-07-14T00:00:00");

const date = olympicsDate - date1;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor((date/(1000*60*60))%24)
const minute = Math.floor((date/(1000*60))%60)
const second = Math.floor((date/(1000))%60)

console.log(`Olympics Countdown Timer: ${days} days ${hours} hours ${minute} minute ${second} seconds`);


