// Looping through objects, keys and values

// Property keys
const properties = Object.keys(openingHours);
console.log(properties);

let str = `We open ${properties.length} days a weeks: `;

for(const day of properties) {
  str += `${day}, `;
}

console.log(str);


// Property values
const values = Object.values(openingHours);
console.log(values);


// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}