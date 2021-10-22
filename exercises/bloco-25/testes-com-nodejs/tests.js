const getPlusMinus = require('./getPlusMinus');
const writeInFile = require('./writeInFile');
const { expect } = require('chai');
const fs = require('fs/promises');
const sinon = require('sinon');

describe('testa getPlusMinus', () => {
  it('testa se parâmetro é número', () => {
    const resposta = getPlusMinus('1');
    expect(resposta).to.be.a('string');
    expect(resposta).to.be.equal('o valor deve ser um número');
  });

  it('testa positivo', () => {
    const resposta = getPlusMinus(1);
    expect(resposta).to.be.a('string');
    expect(resposta).to.be.equal('Positivo');
  });

  it('testa negativo', () => {
    const resposta = getPlusMinus(-1);
    expect(resposta).to.be.a('string');
    expect(resposta).to.be.equal('Negativo');
  });

  it('testa neutro', () => {
    const resposta = getPlusMinus(0);
    expect(resposta).to.be.a('string');
    expect(resposta).to.be.equal('Neutro');
  });
});

describe('testa writeInFile', () => {
  it('testa se é string', () => {
    const resposta = writeInFile('writtenFile.txt', 'ronaldo');
    expect(resposta).to.be.a('string');
  });

  it('testa se é ok', () => {
    const resposta = writeInFile('writtenFile.txt', 'ronaldo');
    expect(resposta).to.be.equal('ok');
  });
});
