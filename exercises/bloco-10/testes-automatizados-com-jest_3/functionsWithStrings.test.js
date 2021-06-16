const { expect } = require('@jest/globals');
const exercicios = require('./exercicios');
jest.mock('./exercicios');

test('exercicio 4', () => {
  exercicios.caixaAlta.mockImplementation((STR) => STR.toLowerCase());
  exercicios.firstLetter.mockImplementation((str) => str[str.length - 1]);
  exercicios.concat.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
  expect(exercicios.caixaAlta('TESTE')).toBe('teste');
  expect(exercicios.firstLetter('teste')).toBe('e');
  expect(exercicios.concat('teste1', 'teste2', 'teste3')).toBe('teste1teste2teste3');
});