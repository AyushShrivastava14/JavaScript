// Sorting Arrays

// Strings
const owners = ['Ayush', 'Piyush', 'Zebra', 'Lion'];
console.log(owners.sort());
console.log(owners);

// the sort() method first converts the array's values into strings then sort it lexicographically/alphabetically

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// We can pass two arguments in sort() method representing two elements

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);