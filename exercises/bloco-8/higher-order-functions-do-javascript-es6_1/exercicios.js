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
  const numeroSorteado = Math.floor(Math.random() * 5 + 1);
  return callback(numeroSorteado, numero);
}

console.log(sorteio(4, verificar));

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const verificarRespostas = (respostaCorreta, respostaEstudante) => {
  if (respostaEstudante === 'N.A') {
    return 0;
  } else if (respostaCorreta === respostaEstudante) {
    return 1;
  } else {
    return -0.5;
  }
};
const gerarNota = (rightAnswers, studentAnswers, callback) => {
  let nota = 0;
  for (let index = 0; index < studentAnswers.length; index += 1) {
    nota += callback(rightAnswers[index], studentAnswers[index]);
  }
  return nota;
}

console.log(gerarNota(rightAnswers, studentAnswers, verificarRespostas));