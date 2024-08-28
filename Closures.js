// Closures [VVVVVVV Imp topic] (it has priority over scope chain (Example 2))

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


// More Examples
// Example 1

let temp;

const a = function() {
  let num = 2;

  temp = function() {
    console.log(num * 2);
  };
};

const b = function() {
  let num2 = 300;

  temp = function() {
    console.log(num2 * 2);
  };
};

a();
temp();
console.dir(temp);

// Re-assigning temp function
b();
temp();
console.dir(temp);


// Example 2 (Closures has priority over scope chain)
const boarding = function(n, wait) {
  const groups = n / 3;

  setTimeout(() => {
    console.log(`Passengers will board the plane in group of ${groups} persons`);
  }, wait * 1000);

  console.log(`Please wait for specified time: ${wait} seconds`);
};

const groups = 100;  // it will access closures first and will not consider this value
boarding(90, 5);