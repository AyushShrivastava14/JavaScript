// Objects

// Object creation
const details = {
    firstName: "Ayush",
    lastName: "Shrivastava",
    age: 2024 - 2004,
    friends: ["Piyush", "Aryan", "Harsh"]
};

// dot notation to access object properties
console.log(details.firstName);

// bracket notation to access object properties
console.log(details['firstName']);

const interestedIn = prompt("Enter detail name to know");

console.log(details.interestedIn);    // dot notation will give output as undefined
console.log(details[interestedIn]);    // it will give the required output

// adding properties using dot and bracket notation
details.location = 'Noida';
details['degree'] = 'B.Tech';

console.log(details.location);
console.log(details.degree);

// Accessing array elements
console.log(details.friends[0]);
console.log(details['friends'][1]);

// Creating function as properties in object and using 'this' keyword
const person = {
    firstName: "Ayush",
    lastName: "Shrivastava",
    age: 2024 - 2004,
    friends: ["Piyush", "Aryan", "Harsh"],

    getSummary: function() {
        return `My name is ${person.firstName + ' ' + person.lastName} and my age is ${this.age}`;
    }
};

console.log(person.getSummary());