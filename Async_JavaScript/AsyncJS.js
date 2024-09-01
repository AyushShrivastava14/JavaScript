"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//----------------------------------------------------------------------------------------------------------------------------------------

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.continents[0]}</p>
        <p class="country__row"><span>💰</span>${data.capital[0]}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//----------------------------------------------------------------------------------------------------------------------------------------

// Promises

// Consuming Promises
// fetch() and .json() (.json() is used to convert the data (API response data) into json format) function both return promises and then(<responsedata (fulfilled promise)>, <error (rejected promise)>) can be used to handle promises after it is fulfilled

// Country Display
// const getCountryData = (country) => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }

// Neighbour Country Display
// const getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       renderCountry(response[0]);

//       const neighbour = response[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       renderCountry(response[0], "neighbour");
//     })
//     .catch((error) => {
//       console.error(`${error} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData("portugal");

// Throwing errors manually
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/name/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');

//----------------------------------------------------------------------------------------------------------------------------------------

// Event loop, callback queue and micro-task queue

// The event loop puts the tasks from queue to call stack when the call stack is empty or we can say when it only contains global context.

// Micro-task queue only takes promises callbacks and have a higher priority over callback queue, which means it will first finish the micro-tasks queue tasks and then execute the callback queue tasks.  [VVV imp]

// console.log("Starting");

// The callback of the timer will go the callback queue and will be executed after all the micro-tasks will be executed.
// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);

// The callback of the promise will go in micro-task queue and will be executed first
// Promise.resolve().then(() => {
//   console.log("Resolved Promise at the same time as timer");
// });

// If the promise's callback takes a lot of time to get executed then the timer will have to wait for more than the specified time which is a disadvantage and a good interview question.
// Promise.resolve("Resolved promise").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log("End");

//----------------------------------------------------------------------------------------------------------------------------------------

// Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => console.log("4 second passed"));

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

//----------------------------------------------------------------------------------------------------------------------------------------

// Consuming Promises with Async/Await
// Error Handling With try...catch

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

//     const data = await res.json();
//     return data[0];
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

//     // So that it propagates, i.e it returns a error and we can catch that error in function call.
//     throw err;
//   }
// };

// whereAmI('portugal');
// console.log('FIRST'); // Appears first

// IIFE (Immediately Invoked Function Expression)
// (async function() {
//   try {
//     const data = await whereAmI('portugal');
//     console.log(data);
//   }catch(err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
//   console.log('FIRST');  // Appears last
// })();

//----------------------------------------------------------------------------------------------------------------------------------------

// Running Promises in parallel using Promise.all() (it returns a promise)

const getCountries = async function (c1, c2, c3) {
  try {
    // In this, the promises run one after another which wastes time.
    // const country1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const country2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const country3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([country1[0].capital, country2[0].capital, country3[0].capital]);


    // In this, all the promises will run in parallel (we can view the effect in network tab in inspect)
    const countries = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(countries.map((country) => country[0].capital));
  } catch (error) {
    console.log(error);
  }
};

getCountries("portugal", "india", "canada");
