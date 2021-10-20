const readline = require('readline-sync');

const generateRandomNumber = () => Math.floor(Math.random() * (10 - 0 + 1)) + 0;

const generateResult = (number) => {
  const rightNumber = generateRandomNumber();
  if (number === rightNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${rightNumber}`);
};

const startGame = () => {
  const number = readline.questionInt('Digite um número de 0 a 10: ');
  generateResult(number);
  playAgain();
};

const playAgain = () => {
  const answer = readline.question('Deseja jogar novemente (s/n)? ');
  if (answer === 's') startGame();
};

startGame();

module.exports = startGame;
