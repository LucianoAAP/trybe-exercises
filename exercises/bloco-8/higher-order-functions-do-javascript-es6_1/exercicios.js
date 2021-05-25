const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newEmployee = (nome) => {
  let objeto = {};
  objeto.nomeCompleto = nome;
  objeto.email = `${nome.toLowerCase().split(' ').join('_')}@gmail.com`;
  return objeto; 
};

console.log(newEmployees(newEmployee));

const verificar = (numeroSorteado, numero) => {
  if (numero === numeroSorteado) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

const sorteio = (numero, callback) => {
  const numeroSorteado = Math.round(Math.random()*5);
  return callback(numeroSorteado, numero);
}

console.log(sorteio(4, verificar));