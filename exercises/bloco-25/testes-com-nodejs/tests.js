const getPlusMinus = require('./getPlusMinus');
const { expect } = require('chai');

describe('testa getPlusMinus', () => {
  it('testa se é string', () => {
    const resposta = getPlusMinus(1);
    expect(resposta).to.be.a('string');
  });

  it('testa positivo', () => {
    const resposta = getPlusMinus(1);
    expect(resposta).to.be.equal('Positivo');
  });

  it('testa negativo', () => {
    const resposta = getPlusMinus(-1);
    expect(resposta).to.be.equal('Negativo');
  });

  it('testa neutro', () => {
    const resposta = getPlusMinus(0);
    expect(resposta).to.be.equal('Neutro');
  });
});
