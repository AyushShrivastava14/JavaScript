// Short Circuiting

console.log('-------OR-------');
// OR (||) operator (it searches for first truly value and returns it because even a single true value will make the whole expression true and if encounters falsy value it moves onto the next value in the expression and if it finds no truly value it returns the last value)

console.log(3 || 'Ayush');
console.log('' || 'Ayush');
console.log(true || 0);
console.log(undefined || null); // both are falsy but it will return last value

console.log(null || 0 || '' || undefined || 'Hello');


console.log('-------AND-------');

// AND (&&) operator (it searches for first falsy value and returns it because even a single false value will make the whole expression false and if encounters truly value it moves onto the next value in the expression and if it finds no falsy value it returns the last value)

console.log('Hi' && '');
console.log(undefined && null);
console.log(true && 0);
console.log(7 && 'Ayush'); // both are truly but it will return last value

console.log('Hello' && 2 && null && undefined);


// Null coalescing operator (??)
// it only considers null values i.e only false for null and undefined (and NOT 0 , ' ')

const persons = 0;
// const persons = null;

const numberOfPersons = persons ?? 10;
console.log(numberOfPersons);