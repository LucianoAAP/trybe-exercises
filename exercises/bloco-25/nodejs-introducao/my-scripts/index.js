const readline = require('readline-sync');

const rodarScript = () => {
  const script = readline.questionInt('Escolha qual script quer rodar: ');
  switch (script) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./velocidade');
      break;
    case 3:
      require('./sorteio');
      break;
    case 4:
      require('./fatorial');
      break;
    default:
      console.log('Número inválido');
      break;
  }
};

console.log({
  imc: 1,
  velocidade: 2,
  sorteio: 3,
  fatorial: 4
});

rodarScript();
