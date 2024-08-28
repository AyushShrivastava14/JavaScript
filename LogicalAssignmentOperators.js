// Logical Assignment Operator

const rest1 = {
    name: 'Shrivastava\'s',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'None',
    owner: 'Ayush',
};


// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// Nullish coalescing assignment operator
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// AND assignment operator 
rest1.numGuests = rest1.numGuests && 10;
rest2.numGuests = rest2.numGuests && 10;

rest1.numGuests &&= 10;
rest2.numGuests &&= 10;
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);