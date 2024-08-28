// Inheritance Between "Classes": Constructor Functions

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  Person.prototype.calcAge = function() {
    console.log(2024 - this.birthYear);
  }
  
  const Student = function(firstName, birthYear, branch) {
    Person.call(this, firstName, birthYear);
    this.branch = branch;
  }
  
  // Since constructor(pointing to prototype parent) is also in Person.prototype(value: Person) and it was inherited by Student.prototype which is why ayush.__proto__ is pointing to Person. [VVV imp]
  Student.prototype = Object.create(Person.prototype);
  
  const ayush = new Student('Ayush', 2004, 'CSE');
  console.log(ayush);
  console.log(ayush.__proto__);
  
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.branch}`);
  };
  
  ayush.calcAge();
  
  console.log(ayush instanceof Student);
  console.log(ayush instanceof Person);
  console.log(ayush instanceof Object);
  
  console.dir(Student.prototype);
  Student.prototype.constructor = Student;
  console.dir(Student.prototype);