const exercicios = require('./exercicios.js');
jest.mock('./exercicios');

test('exercicio1', () => {
  exercicios.randomNumber.mockReturnValue(10);
  expect(exercicios.randomNumber()).toBe(10);
  expect(exercicios.randomNumber).toHaveBeenCalled();
  expect(exercicios.randomNumber).toHaveBeenCalledTimes(1);
});

test('exercicio 2', () => {
  exercicios.randomNumber.mockImplementation((a, b) => a / b);
  expect(exercicios.randomNumber(4, 2)).toBe(2);
});
