// Arrays Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (DOESN'T Mutates/Alters original array) (Makes a shallow copy)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr.slice(-3, -1));

// SPLICE (Mutates/Alters original array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);  // splice(start, number of elements to delete)
console.log(arr);

// REVERSE (Mutates/Alters original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT (DOESN'T Mutates/Alters original array)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

// The new at Method
const temp = [23, 11, 64];
console.log(temp[0]);
console.log(temp.at(0));

// getting last array element
console.log(temp[temp.length - 1]);
console.log(temp.slice(-1)[0]);
console.log(temp.at(-1));