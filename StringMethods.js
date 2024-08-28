// String (Properties and Methods)
// Every method is case sensitive

const airline = 'TAP Air Portugal';
// const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);

// if we access character beyond range it will output undefined.
console.log(plane[5]);

console.log(airline.length);
console.log('Ayush'.length);

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));   // it is case sensitive

// slice(start, end - 1)
console.log(airline.slice(2));
console.log(airline.slice(2, 8));

console.log(airline.slice(2, airline.lastIndexOf('P') + 1));
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-3));
console.log(airline.slice(0, -5));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Since String is a primitive datatype therefore it can't have any methods, but we can apply methods to strings as we used above, it is possible because JS first converts the string into object then apply methods and then again converts it into string, as shown below:-

// The method of converting string into object is call boxing.[VV imp].
console.log(new String('jonas'));
console.log(typeof new String('jonas'));    // Object

console.log(typeof new String('jonas').slice(1));   // String


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'aYuSh'; // Ayush
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@ayush.io';
const loginEmail = '  Hello@Ayush.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  // Always convert the recieved string to lower case before using it.[VV imp]
  const baggage = items.toLowerCase();    

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Ayush shrivastava'.split(' '));

const [firstName, lastName] = 'Ayush shrivastava'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ayush shrivastava');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// at(index) method
console.log('ayush'.at(0));
console.log('ayush'.at(-1));