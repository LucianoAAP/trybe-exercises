const { expect } = require('@jest/globals');
const math = require('./math.js');

describe('Trabalha subtrair', () => {
  test('Testa e mocka subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

describe('Trabalha multiplicar', () => {
  test('Testa e mocka multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
});
