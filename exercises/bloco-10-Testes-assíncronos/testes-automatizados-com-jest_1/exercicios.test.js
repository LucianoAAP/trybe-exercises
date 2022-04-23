const { TestWatcher } = require('@jest/core');
const { techList, hydrate, searchEmployee } = require('./exercicios.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testa a função searchEmployee', () => {
  test('Testa se a função existe', () => expect(searchEmployee).toBeDefined());
  test('Testa se é uma função', () => expect(typeof searchEmployee).toBe('function'));
  test('Retorna o erro ao receber ID inválido', () => expect(searchEmployee('1234', 'firstname')).toBe('ID não identificada'));
  test('Retorna o erro ao receber um detalhe inválido', () => expect(searchEmployee('8579-6', 'secondName')).toBe('Informação indisponível'));
  test('Testa os resultados válidos', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('4678-2', 'id')).toBe('4678-2');
  });
});
