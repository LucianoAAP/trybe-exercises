const randomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;

const caixaAlta = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concat = (str1, str2) => `${str1}${str2}`;

module.exports = {
  randomNumber,
  caixaAlta,
  firstLetter,
  concat
}