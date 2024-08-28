// Hoisting: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. 

// Hoisting in variables : const, let and var difference [VV imp]
console.log(age);


// Both let and const variable declaration methods will produce error if it is used before initialisation
// let age = 10;
// const age = 10;


// But in case of var it will output undefined that is one of many reasons why we use let and const instead of var
var age = 10;


// initial/default value for var variables is undefined while in case of let and const variables , they remain uninitialised and 
// in TDZ (Temporal Dead Zone)


// Hoisting in Functions [VV imp]

console.log(addDecl(2, 3));
console.log(addExp(2, 3));      // it is showing ReferenceError because we can't access const or let variables before their declaration.
console.log(arrowFunc(2, 3));   // it is showing 'TypeError: arrowFunc is not a function' because var initialise by 'undefined' if we try to use it before its declaration and undefined is not a function.

function addDecl(a, b) {
    return a + b;
}

const addExp = function(a, b) {
    return a + b;
}

var arrowFunc = (a, b) => {
    return a + b;
}


// Example to demonstrate why we shouldn't declare variables with 'var' keyword

if(!items) deleteShopItems();        // since undefined is an falsy value

var items = 20;

function deleteShopItems() {
    console.log('All items deleted');
}

var x = 1;
let y = 2;
const z = 3;

// only variables declared with var keyword will create a property on window global object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);