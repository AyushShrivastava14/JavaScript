// Object Destructuring [VVVVVV imp]

const arr = {
    names: ['Ayush', 'Piyush', 'Aryan'],
    age: [20, 25, 22],
    jobs: ['Software Developer', 'Data Scientist'],

    // Nested object
    hours: {
        mon: {
            open: 8,
            close: 16
        },
        fri: {
            open: 0,
            close: 8
        }
    },

    // Example for object passing and destructuring in function while recieving

    // orderDelivery: function(obj) {
    //     console.log(obj);
    // }

    // Destructuring
    orderDelivery: function({time = '20:00', address = '', ageIndex = 0, nameIndex = 0}) {
        console.log(`Delivery for ${this.names[nameIndex]}, age ${this.age[ageIndex]} at address ${address} is delivered at ${time}`);
    }
};

// we need to mention exact name of the object properties to extract them
// const {names, jobs, hours} = arr;
// console.log(names, jobs, hours);

// renaming extracted properties according to need
const {age: ageGrp, jobs: profession} = arr;
console.log(ageGrp, profession);

// when we try to access the property which not there then it will give undefined
const {menu} = arr;
console.log(menu);

// Default Values
const {categories = [], jobs = []} = arr;
console.log(categories, jobs);

// Mutating variables
let a = 99;
let b = 66;
console.log(a, b);

const obj = {a: 2, b: 4, c: 9};

// {a, b} = obj;      // it will give error
({a, b} = obj);
console.log(a, b);

// Nested Objects
const {fri: {open: o, close: c}} = arr.hours;
console.log(o, c);

arr.orderDelivery({
    time: '22:05',
    address: 'xyz road',
    nameIndex: 1,
    ageIndex: 1
});