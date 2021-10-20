const getImc = require('./imc');
const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso (em kg)?');
const height = readline.questionFloat('Qual sua altura (em m)?');

console.log(getImc(weight, height));
