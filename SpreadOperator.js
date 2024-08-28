// Spread Operator(...)

const arr = [5, 6, 7];

// Usual method to extend an array.
const arr2 = [1, 2, arr[0], arr[1], arr[2]];
console.log(arr2);

// Extending with spread operator
const arr3 = [...arr, 1, 2];
console.log(arr3);

// Printing elements with spread operator
console.log(arr3);
console.log(...arr3);

const data = {
    names: ['Ayush', 'Piyush', 'Aryan'],
    age: [20, 25, 22],
    jobs: ['Software Developer', 'Data Scientist'],

    reciepe: function(ing1, ing2) {
        console.log(`Your dish is ready with ${ing1} and ${ing2}.`);
    }
};

// Copy Array
const ageCopy = [...data.age];
console.log(ageCopy);

// Join Array
const details = [...data.names, ...data.age];
console.log(details);

// Can't use spread operator within ${}, it will give error
// console.log(`Age Group: ${...ageCopy}`);

// Iterables: arrays, strings, maps, sets , BUT NOT Objects [imp]
const str = 'Ayush';
const letters = [...str, ' ', 'S' ];
console.log(letters);
console.log(...str);

// Passing multiple arguments with spread operator.
const ingredients = [prompt('Enter Ingredient 1.'), prompt('Enter Ingredient 2.')];
data.reciepe(...ingredients);

// Creates a shallow copy like Object.assign().
const dataCopy = {...data, anotherProperty: 'New Property'};
console.log(dataCopy);