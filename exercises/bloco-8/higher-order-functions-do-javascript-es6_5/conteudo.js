// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Laranja', 'Caju'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Sal', 'Azeite', 'Pimenta'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, funcaoSaudaçao] = saudacoes;

funcaoSaudaçao(ola);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];
console.log([comida, animal, bebida]);
