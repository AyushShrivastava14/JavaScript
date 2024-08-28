const check = age => {
    if(age >= 18) {
        return true;
    }
    return false;
}

console.log(check(10));


// Multivalued Arrow function
const details = (Name, age) => {
    return `My name is ${Name} and age is ${age}`;
}

console.log(details("Ayush", 20));