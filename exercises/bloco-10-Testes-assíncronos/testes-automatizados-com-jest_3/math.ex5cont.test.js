const math = require('./math.js');

test('Testa e mocka subtrair com restauração', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair');
  mockSubtrair.mockReturnValue(20);
  mockSubtrair.mockClear();
  expect(mockSubtrair()).toBe(20);
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  math.subtrair.mockRestore();
  expect(math.subtrair(2, 1)).toBe(1);
});
