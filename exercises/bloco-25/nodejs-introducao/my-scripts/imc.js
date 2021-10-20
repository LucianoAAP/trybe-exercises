const readline = require('readline-sync');

const getImc = (weight, height) => weight / (height ** 2);

const showImcClassification = (imc) => {
  if (imc < 18.5) console.log('Abaixo do peso (magreza)');
  else if (imc >= 18.5 && imc <= 24.9) console.log('Peso normal');
  else if (imc >= 25 && imc <= 29.9) console.log('Acima do peso (sobrepeso)');
  else if (imc >= 30 && imc <= 34.9) console.log('Obesidade grau I');
  else if (imc >= 35 && imc <= 39.9) console.log('Obesidade grau II');
  else if (imc >= 40) console.log('Obesidade graus III e IV');
};

const weight = readline.questionFloat('Qual seu peso (em kg)?');
const height = readline.questionFloat('Qual sua altura (em m)?');

const imc = getImc(weight, height);

console.log(imc);
showImcClassification(imc);
