const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = () => {
  const tamanho = [];
  for (let index in words) {
    tamanho.push(words[index].length);
  }
  return tamanho;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);