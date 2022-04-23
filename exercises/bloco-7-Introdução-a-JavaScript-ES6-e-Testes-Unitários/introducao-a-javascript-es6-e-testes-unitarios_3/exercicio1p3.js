const { assert } = require("console");

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push('Hello ' + people[person]);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];


// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assertion = require('assert');
assertion.deepStrictEqual(greetPeople(parameter), result);
