// this keyword [VV imp]

console.log(this);    // using 'this keyword' without attaching it with any object will target window global object.[VV imp]

const calcAge1 = function(birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
}
calcAge1(1999);


const calcAge2 = (birthYear) => {
    console.log(2024 - birthYear);
    // Arrow function doesn't have its own this keyword field, so it uses its parent's this keyword reference [VVVVVVV imp]
    // And here the parent of this arrow function is window global object.
    console.log(this);
}
calcAge2(2004);


// this keyword with object
// const details = {
//     firstName: "Ayush",
//     lastName: "Shrivastava",
//     age: 20,
//     calcAge: function() {
//         console.log(this.age);
//     }
// };

details.calcAge();

const ayush = {
    age: 10
};

// Method borrowing
ayush.calcAge = details.calcAge;

ayush.calcAge();

// calcAge is not method calling 
// calcAge() is method calling [Brackets]

const a = details.calcAge;
a();    // it will give error because it is not attached with any object and it will be undefined

const details = {
    firstName: "Ayush",
    year: 2004,

    calcAge: function() {
        console.log(2024 - this.year);

        // const isMillenial = function() {
        //     // a regular function call (like for example calcAge()) has its this initilised to undefined [VV imp]
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // }
        // isMillenial();

        // we can use two methods to solve the isMillenial() function undefined this reference problem

        // Solution - 1 (by preserving this reference)
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillenial();

        // Solution - 2 (By using Arrow function since it uses its parent this reference)
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`)  
    // here the arrow function will take this reference from its parent i.e it will be window global object
    // and it is giving output undefined because firstName doesn't exist in window global object.
};

details.calcAge();
details.greet();


// arguments keyword
const add = function(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(2, 3));
console.log(1, 2, 3, 4, 5);   // arguments keyword store all the arguments in an array and we can access them as we do it in arrays.
