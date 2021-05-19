const mult = numero => {
  for (let index = numero - 1; index > 0; index -= 1) {
    numero = numero * index;
  }
  return numero;
}

const fatorial = numero => (
  numero === 0 ? 1 : mult(numero)
);

console.log(fatorial(4));

const longestWord = phrase => {
  const splittedPhrase = phrase.split(' ');
  let longest = splittedPhrase[0];
  for (let index = 1; index < splittedPhrase.length; index += 1) {
    splittedPhrase[index].length > splittedPhrase[index - 1].length ? longest = splittedPhrase[index] : longest = splittedPhrase[index - 1];
  }
  return longest;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'
