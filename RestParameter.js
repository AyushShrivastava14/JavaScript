// rest operator/parameter (used to pack the values in an array)

const data = {
    names: ["Ayush", "Piyush", "Aryan", "Harsh", "Sid"],
    age: [20, 25, 22],
    jobs: ["Software Developer", "Data Scientist"],
  
    hours: {
      mon: {
          open: 8,
          close: 16,
          },
      fri: {
          open: 0,
          close: 8,
          },
      sat: {
          open: 9,
          close: 10
          }
      },
  
      orderList: function(mainItem, ...other) {
          console.log(mainItem, other);
      }
  };
  
  // it will only take the last remaining data and pack them in array
  const [name1, , name2, ...other] = data.names;
  
  console.log(name1, name2, other);
  
  // Nested Objects
  const {sat, ...weekdays} = data.hours;
  console.log(sat, weekdays);
  
  // use in Functions
  const add = function(...numbers) {
      console.log(numbers);
      let sum = 0;
  
      for(let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      console.log(sum);
  }
  
  add(2, 3);
  add(2, 3, 4, 5);
  add(2, 3, 4, 5, 6, 7, 8, 9, 10);
  
  data.orderList('Pen');  // will output an empty array and mainItem.
  