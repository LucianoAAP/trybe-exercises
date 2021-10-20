const readline = require('readline-sync');

const getFatorial = (number) => {
  let result = 1;
  for (let index = number; index >= 1; index -= 1) {
    result = result * index;
  }
  return result;
};

const getNumber = () => {
  const number = readline.questionInt('Digite um número inteiro maior que 0: ');
  if (number > 0) {
    console.log(getFatorial(number));
  } else {
    console.log('Número inválido!');
    getNumber();
  }
};

const number = getNumber();
