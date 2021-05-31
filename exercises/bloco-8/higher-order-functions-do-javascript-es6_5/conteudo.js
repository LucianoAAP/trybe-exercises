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