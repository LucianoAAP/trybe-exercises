const { expect } = require('@jest/globals');
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
  expect(exercicios.randomNumber).toHaveBeenCalled();
  expect(exercicios.randomNumber).toHaveBeenCalledWith(4, 2);
  expect(exercicios.randomNumber).toHaveBeenCalledTimes(2);
});

test('exercicio 3', () => {
  const mockRandomNumber = jest.spyOn(exercicios, 'randomNumber');
  mockRandomNumber.mockClear();
  mockRandomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(mockRandomNumber(2, 3, 7)).toBe(42);
  expect(mockRandomNumber).toHaveBeenCalled();
  expect(mockRandomNumber).toHaveBeenCalledWith(2, 3, 7);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  mockRandomNumber.mockRestore();
  mockRandomNumber.mockImplementation((x) => x * 2);
  expect(mockRandomNumber(2)).toBe(4);
  expect(mockRandomNumber).toHaveBeenCalled();
  expect(mockRandomNumber).toHaveBeenCalledWith(2);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
});
