function fruits(apples, oranges) {
    const details = `We have ${apples} apples and ${oranges} oranges currently`;
    return details;
}

const info = fruits(5, 10);
console.log(info);


// function declaration
// const result = checkage(18);  // it will not give any error

function checkage(age) {
    if(age >= 18) {
        return true;
    }
    return false;
}

const result = checkage(18);
console.log(result);


// Function expression
// console.log(detail("Ayush"));   // it will give error because using funtion before declaration is not allowed in case of function expressions

const detail = function(name) {
    return name;
}

console.log(detail("Ayush"));