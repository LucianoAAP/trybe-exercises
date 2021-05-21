const removeVowels = (word) => {
  let results = '';
  let cont = 0;

  for (let index = 0; index < word.length; index += 1) {
    if (
      word[index] === 'a' ||
      word[index] === 'o' ||
      word[index] === 'i' ||
      word[index] === 'e' ||
      word[index] === 'u'
    ) {
      cont += 1;
      results += cont.toString();
    } else {
      results += word[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');
assert.strictEqual(removeVowels(parameter), result);