const readline = require('readline-sync');

const showSpeed = (distance, time) => console.log(`${distance / time}m/s`);

const distance = readline.questionInt('Qual a distância (em m)?');
const time = readline.questionInt('Qual o tempo (em s)?');

showSpeed(distance, time);

module.exports = showSpeed;
