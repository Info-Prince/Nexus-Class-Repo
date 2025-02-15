// let num1 = 330;
// let num2 = new Number(330);
// let num3 = new Number(330);

// console.log(num1 == num2); // here num2 type is object and for comparision it's gonna to convert into number and then comparision will be done, resultant both num will be equivalent so get true result.
// console.log(num2 == num3); // here both are object. direct comparision will be done and both has stored memory location of heap region into stack memory, which are different. that's what we get false in o/p.




// let num = 3232.343454;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(3)); // 3.23 * pow(10,3), it's converted into expontial.
// console.log(num.toPrecision(5));
// console.log(num.toExponential(1));
// console.log(num.toString());
// console.log(num.valueOf());



//todo  maths

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.PI);


console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1); // 1 to 10
console.log(Math.floor(Math.random()*10)+11); // 11 to 20



// ? Formula to find out value between a particular range.
// eg : find min = 40 , max = 50
let min = 40, max = 50;
console.log(Math.floor(Math.random() * (max-min+1) + min));



// to generate 11 diff diff number multiply by 11.
// since 0.234 * 11 , taking it's floor will be 0 and 9.2342 * 11 , taking it's floor will be 10.

// So if you want to get particular amount of diff diff number then multiply that particular number for getting that much amount of number.


// ? generate ludo digit, from 1 to 6
console.log(Math.floor(Math.random()*(6-1+1)+1));


// math.random() random number generate to kr rha hai lekin random nhi hai, Since it's value can be guessed, since randon() is a function which code has been defined. This number is being generated from our system clock. It's algorithm has been defined into our pc that can be guessed by hacker or else.