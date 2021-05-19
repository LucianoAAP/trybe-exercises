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

const substX = string => {
  const determined = 'Tryber x aqui!';
  const splittedDetermined = determined.split('x');
  let array = splittedDetermined[0];
  for (let index = 1; index < splittedDetermined.length; index += 1) {
    array = `${array} ${string} ${splittedDetermined[index]}`
  }
  return array;
}

const skills = ['html', 'css', 'js', 'git', 'dom'];
const global = skills.sort();

const total = string => {
  let habilidades = global[0];
  for (let index = 1; index < global.length; index += 1) {
    habilidades = `${habilidades}, ${global[index]}`;
  }
  return `${substX(string)} Minhas cinco principais habilidades são: ${habilidades}`;
}

console.log(total('Bebeto'));