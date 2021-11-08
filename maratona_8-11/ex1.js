const input = '91.01';

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const value = parseFloat(input);

const mostraNotas = (value) => {
  let ammount = value
  const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
  const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
  console.log('NOTAS:');
  notas.forEach((nota) => {
    console.log(`${Math.floor(ammount / nota)} nota(s) de R$ ${nota.toFixed(2)}`);
    ammount = Math.round((ammount % nota) * 100) / 100
  });
  console.log('MOEDAS:');
  moedas.forEach((moeda) => {
    console.log(`${Math.floor(ammount / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    ammount = Math.round((ammount % moeda) * 100) / 100
  });
};

mostraNotas(value);
