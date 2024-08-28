// Explicit type casting
const year = "2004";
console.log(Number(year), year);
console.log(year + 6);
console.log(Number(year) + 6);
console.log(typeof year);

console.log(Number('Ayush'));        // NaN = Not a Number / Invalid Number
console.log(typeof NaN);

// Javascript can only convert only in 3 types string <-> integer <-> boolean
console.log(String(69), 69);

// Implicit type casting / type coercion
// + operator triggers the integer in between strings to get converted into string
console.log("My age is " + 19 + " years.");

console.log("69" - "9" + 19);
console.log("69" - "9" - 10);
console.log("69" + "9" - 10);
console.log("12" / "2");
console.log("11" % "2");
console.log(typeof ("11" % "2"));

let n = '1' + 1;
n += 1;
console.log(n);
n -= 1;
console.log(n);
console.log('10' - '4' + '3' - 2 + '5');