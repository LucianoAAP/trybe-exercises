const readline = require('readline-sync');

const rodarScript = () => {
  const script = readline.questionInt('Escolha qual script quer rodar: ');
  if (script === 1) require('./imc');
  else if (script === 2) require('./velocidade');
  else if (script === 3) require('./sorteio');
  else console.log('Número inválido');
};

console.log({
  imc: 1,
  velocidade: 2,
  sorteio: 3
});

rodarScript();
