// Number: Used for decimals and integers
let age = 19;
let n = 20.9;

console.log(typeof age);
console.log(typeof n);

// String: Sequence of characters (Used for text)
let person = "Ayush";
let a = 's';

console.log(typeof person);
console.log(typeof a);

// Boolean: Logical type that can only be true or false (Used for taking decisions)
a = true;

console.log(typeof a);

// Undefined: Value taken by a variable that is not yet defined (‘empty value’)
let year;

console.log(year);
console.log(typeof year);

// Null: Also means ‘empty value’
year = null;

console.log(year);
console.log(typeof year);     // here the output is object which is an kind of error

// Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]

// BigInt (ES2020): Larger integers than the Number type can hold

// JavaScript has dynamic typing: We do not have to manually define the data type of
// the value stored in a variable. Instead, data types are determined automatically. (Value has type, NOT variable!)