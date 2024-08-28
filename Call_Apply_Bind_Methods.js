// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  lufthansa.book(239, 'Ayush');
  lufthansa.book(635, 'Harsh');
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  
  // Does NOT work
  // book(23, 'Harsh');
  
  // Call method (it calls the method with given 'this' keyword)
  book.call(eurowings, 23, 'Harsh');
  console.log(eurowings);
  
  book.call(lufthansa, 239, 'Ayush');
  console.log(lufthansa);
  
  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };
  
  book.call(swiss, 583, 'Ayush');
  
  // Apply method (we can only pass array parameters)
  const flightData = [583, 'Aryan'];
  book.apply(swiss, flightData);
  console.log(swiss);
  
  book.call(swiss, ...flightData);
  
  
  // The bind Method (it binds the method with given 'this' keyword)
  // book.call(eurowings, 23, 'Harsh');
  
  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  const bookLX = book.bind(swiss);
  
  bookEW(23, 'Steven Williams');
  
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Ayush');
  bookEW23('Aryan');
  
  // With Event Listeners
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);
  
    this.planes++;
    console.log(this.planes);
  };
  // lufthansa.buyPlane();
  
  document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
  
  // Partial application
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  
  const addVAT = addTax.bind(null, 0.23);
  // addVAT = value => value + value * 0.23;
  
  console.log(addVAT(100));
  console.log(addVAT(23));
  
  const addTaxRate = function (rate) {
    return function (value) {
      return value + value * rate;
    };
  };
  
  const addVAT2 = addTaxRate(0.23);
  console.log(addVAT2(100));
  console.log(addVAT2(23));