// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Map Fundamentals
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'Java'],
  [2, 'JavaScript'],
  [3, 'Python'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);

console.log(question);

// Convert object to map
const entries = Object.entries(openingHours);
console.log(entries);

const mp = new Map(entries);
console.log(mp);

// Quiz Example
for(const [key, value] of question) {
    if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}

const answer = Number(prompt('Enter your number'));
console.log(question.get(question.get('correct') === answer));

// Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);