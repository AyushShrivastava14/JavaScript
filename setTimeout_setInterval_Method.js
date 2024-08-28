// setTimeout() Method
setTimeout(() => console.log('Hello!'), 1000);

for(let i = 0; i < 50; i++) {
  console.log(i);
}

// Passing arguments in setTimeout(callback, time in ms, argument1, argument2,....);
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients);

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);


// setInterval() Method
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hour}:${min}:${sec}`);
}, 1000);