const randomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;

const caixaAlta = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concat = (str1, str2) => `${str1}${str2}`;

const fetchApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json().then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json)));
}

module.exports = {
  randomNumber,
  caixaAlta,
  firstLetter,
  concat,
  fetchApi
}