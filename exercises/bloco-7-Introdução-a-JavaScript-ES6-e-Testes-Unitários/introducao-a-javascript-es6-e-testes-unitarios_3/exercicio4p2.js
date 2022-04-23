const assert = require('assert');
const { connect } = require('http2');
// escreva a função findTheNeedle aqui

const findTheNeedle = (words, word) => {
  let cont = -1;
  for (let index = 0; index < words.length; index += 1) {
    if (words[index] === word) {
      cont = index;
    }
  }
  return cont;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);