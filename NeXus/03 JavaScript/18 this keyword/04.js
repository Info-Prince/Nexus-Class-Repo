// ! Inside a Constructor or Class
// In constructor and classes this refers to the instance of the object being created.

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let a = new person ("rohit", 42);
let b = new person ("prince", 21);
console.log(a);
console.log(b);