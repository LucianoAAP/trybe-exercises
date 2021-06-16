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

jest.mock("./math");

describe('Trabalha somar', () => {
  test('Testa e mocka somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
});
