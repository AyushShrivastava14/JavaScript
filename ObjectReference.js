// Primitive vs Object (Reference type)

// Primitive
let age = 30;
let age2 = age;
age = 3;

console.log(age);   // 3
console.log(age2);  // 30

// Objects
// const me = {
//     firstName: "Ayush",
//     age: 20,
// };

// const friend = me;
// friend.age = 30;    // will change both objects age (both objects pointing at the same object which is stored in heap memory)

// console.log(friend);
// console.log(me);

// We can create a shallow copy which copies the top layer of object but not inner layers(like object inside object).
const me = {
    firstName: "Ayush",
    age: 20,
};

const friend = Object.assign({}, me);
friend.age = 50;

console.log(friend);
console.log(me);