const readline = require('readline-sync');

const getFibonacci = (n) => {
  const result = [];
  for (let index = 0; index < n; index += 1) {
    if (index === 0) result.push(1);
    else if (index === 1) result.push(2);
    else result.push(result[index - 1] + result[index - 2]);
  }
  return result;
};

const getNumber = () => {
  const number = readline.questionInt('Digite um número inteiro maior que 0: ');
  if (number > 0) {
    console.log(getFibonacci(number));
  } else {
    console.log('Número inválido!');
    getNumber();
  }
};

getNumber();
