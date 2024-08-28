// Constructor Functions and the new Operator
// Constructor function name first letter is always capital
const Person = function(name, age) {
    this.name = name;
    this.age = age;
  
    // Never do this because we use this to create many objects and all the objects will then have this function whether they require it or not which will decrease the performance.
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  };
  
  const ayush = new Person('Ayush', 20);
  console.log(ayush);
  
  const piyush = new Person('Piyush', 25);
  console.log(piyush);
  
  console.log(ayush instanceof Person);
  
  // After using the 'new Person()' following things happen
  // 1. New {} is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return {}