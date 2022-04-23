const { expect } = require('@jest/globals');
const exercicios = require('./exercicios');

test('exercicio 5', () => {
  const mockCaixaAlta = jest.spyOn(exercicios, 'caixaAlta');
  mockCaixaAlta.mockImplementation((STR) => STR.toLowerCase());
  expect(mockCaixaAlta('TESTE')).toBe('teste');
  expect(mockCaixaAlta).toHaveBeenCalled()
  expect(mockCaixaAlta).toHaveBeenCalledWith('TESTE');
  expect(mockCaixaAlta).toHaveBeenCalledTimes(1);
  exercicios.caixaAlta.mockRestore();
  expect(exercicios.caixaAlta('teste')).toBe('TESTE');
});
