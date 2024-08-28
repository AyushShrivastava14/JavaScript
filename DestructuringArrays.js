// Destructuring Arrays

const arr = {
    names: ['Ayush', 'Piyush', 'Aryan'],
    age: [20, 25, 22],
    order: function(nameIndex, ageIndex) {
        return [this.names[nameIndex], this.age[ageIndex]];
    }
};

const [x, y, z] = arr.names;
console.log(x, y, z);

let [a, , b] = arr.age;
console.log(a, b);

// swapping/mutating using destructuring
[a, b] = [b, a];
console.log(a, b);

const [i, j] = arr.order(2, 0);
console.log(i, j);

const nested = [2, 3, [4, 5]];

// const [c, d, e] = nested;
// console.log(c, d, e); 

const [c, d, [e, f]] = nested;
console.log(c, d, e, f);

// Default values
const [m, n, k = 5] = [1, 2];
console.log(m, n, k);