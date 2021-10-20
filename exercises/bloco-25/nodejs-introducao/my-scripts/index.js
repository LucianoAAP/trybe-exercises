const imcNode = require('./imc');
const readline = require('readline-sync');

const { getImc, showImcClassification } = imcNode;

const weight = readline.questionFloat('Qual seu peso (em kg)?');
const height = readline.questionFloat('Qual sua altura (em m)?');

const imc = getImc(weight, height);

console.log(imc);
showImcClassification(imc);
