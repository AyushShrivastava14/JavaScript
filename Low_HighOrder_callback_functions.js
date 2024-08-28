// Low order/ first class function
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
}

// High order function
const transformer = function(str, fn) {
  console.log(`Original String: ${str}`);

  console.log(`After Transformation: ${fn(str)}`);

  console.log(`Function Real name in memory: ${fn.name}`);

  console.log('\n');
}

// Here upperFirstWord and oneWord are callback functions
transformer('Hi! My name is Ayush Shrivastava', upperFirstWord);
transformer('Hi! My name is Ayush Shrivastava', oneWord);

const hello = function() {
  console.log(`Hello`);
}

document.body.addEventListener('click', hello);

[1, 2, 3].forEach(hello);

// Passing parameters in callback functions
const details = function(name, age) {
  console.log(`Name: ${name} and age: ${age}`);
}

const highOrder = function(callback, param1, param2) {
  console.log(callback);
  callback(param1, param2);
}

// Using arguments
// const highOrder = function(callback) {
//   console.log(arguments);
//   callback(arguments[1], arguments[2]);
// }

highOrder(details, 'Ayush', 20);

// Function returning function
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const demo = greet('Hi');
demo('Ayush');
demo('Harsh');
demo('Aryan');

greet('Hello')('Ayush');

// Using Arrow functions
const greetArr = greetExp => someone => console.log(`${greetExp} ${someone}`);

greetArr('Yo!')('Ayush');