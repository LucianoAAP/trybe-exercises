// 1 - Dada uma matriz de matrizes, transforme em uma única matriz. 

const assert = require('assert');
const { cpuUsage } = require('process');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Para os exercícios 2, 3 e 4 considere o seguinte array: 

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return `${books.reduce((accumulator, current) => current === books[0] ? accumulator = current.author.name : `${accumulator}, ${current.author.name}`, '')}.`;
}

assert.strictEqual(reduceNames(), expectedResult2);

//  3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  return (books.reduce((accumulator, current) => accumulator += current.releaseYear - current.author.birthYear, 0)) / books.length;
}

assert.strictEqual(averageAge(), expectedResult3);

// 4 - Encontre o livro com o maior nome. 

const expectedResult4 = 'As Crônicas de Gelo e Fogo'; 

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((accumulator, current) => current.name.length > accumulator.length ? accumulator = current.name : accumulator = accumulator, '');
}

assert.deepStrictEqual(longestNamedBook(), expectedResult4);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. 

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((accumulator, current) => {
    for (let index = 0; index < current.length; index += 1) {
      current[index].toLowerCase() === 'a' ? accumulator += 1 : accumulator = accumulator
    }
    return accumulator;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected . 

// const assert = require('assert');

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   // escreva seu código aqui
// }

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepStrictEqual(studentAverage(), expected);


