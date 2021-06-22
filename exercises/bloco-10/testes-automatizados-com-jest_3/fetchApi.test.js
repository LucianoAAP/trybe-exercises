const exercicios = require('./exercicios.js');
const success = 'Request success';
const failure = 'Request failed';
const mockFetchApi = jest.spyOn(exercicios, 'fetchApi');

test('exercicio 6, sucesso', () => {
  mockFetchApi.mockResolvedValue(success);
  expect(mockFetchApi()).resolves.toBe(success);
  expect(mockFetchApi).toHaveBeenCalled();
  expect(mockFetchApi).toHaveBeenCalledTimes(1);
  mockFetchApi.mockReset();
});

test('exercicio 6, falha', () => {
  mockFetchApi.mockRejectedValue(failure);
  expect(mockFetchApi()).rejects.toBe(failure);
  expect(mockFetchApi).toHaveBeenCalled();
  expect(mockFetchApi).toHaveBeenCalledTimes(1);
  mockFetchApi.mockReset();
});