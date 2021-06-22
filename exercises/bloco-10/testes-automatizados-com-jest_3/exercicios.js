const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;

const caixaAlta = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concat = (str1, str2) => `${str1}${str2}`;

const fetchApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json().then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json)));
}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

// const fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         id: "7h3oGtrOfxc",
//         joke: "Whiteboards ... are remarkable.",
//         status: 200
//       })
//   })
// );

module.exports = {
  randomNumber,
  caixaAlta,
  firstLetter,
  concat,
  fetchApi,
  API_URL,
  fetchJoke
}