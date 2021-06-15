const { describe, test, it } = require('@jest/globals');

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testa uppercase', () => {
  it('should be upper case', (done) => {
    const callback = (param) => {
      setTimeout(() => {
        expect(param).toBe('TESTE');
        done();
      }, 1500);;
    };
    uppercase('teste', callback);
  });
});