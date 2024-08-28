// Use it in bankist site (video 193)

// Event Propagation
const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1 + min);
};

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


const nav = document.querySelector('.nav');
const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');

navLink.addEventListener('click', function(e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  console.log(e.currentTarget);
});

navLinks.addEventListener('click', function(e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  console.log(e.currentTarget);
});


// arrow function doesn't have this keyword field i.e why it will not work with arrow function
nav.addEventListener('click', function(e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  console.log(e.currentTarget);
});