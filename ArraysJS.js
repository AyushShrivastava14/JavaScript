// Arrays

// Creation
const friends = ['Ayush', 'Piyush', 'XYZ'];
// const friends = new Array('Ayush', 'Piyush', 'XYZ');

console.log(friends);

console.log(friends.length);

// We access the elements of javascripts arrays in the samw way as we do in any other languages.
// We can also change the values of elements in the same way as we do in other languages.

const example = ['Ayush', 20 - 18, friends];
console.log(example);

const years = [1990, 2000, 2010, 2020];
console.log(years + 10);       // it will convert the array into string beacuse of "+" sign

function returnAge(age) {
    return 2024 - age;
}

const age = [returnAge(years[0]), returnAge(years[1]), returnAge(years[2]), returnAge(years[3])];
console.log(age);


// Built-in methods/functions for arrays

// Adding element
let len = friends.push('ABC'); // returns length
console.log(friends);
console.log(len);

// Adding at front
len = friends.unshift('Aryan');  // returns length
console.log(friends);
console.log(len);

// deleting from last
let popped = friends.pop();  // returns element popped
console.log(friends);
console.log(popped);

// deletion from front
popped = friends.shift();  // returns element popped
console.log(friends);
console.log(popped);

// for finding index of element
const index = friends.indexOf("XYZ");   // returns index otherwise -1 if not present
console.log(index);

// includes function checks with strict equality and gives output in true or false i.e in boolean
let check = friends.includes("Ayush");
console.log(check);

check = friends.includes("Hehe");
console.log(check);
