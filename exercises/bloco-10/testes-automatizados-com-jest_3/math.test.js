const math = require('./math.js');

describe('Trabalha subtrair', () => {
  test('Testa e mocka subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair(1, 2);
    expect(math.subtrair).toHaveBeenCalled();
  });
});
