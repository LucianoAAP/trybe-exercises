let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
    soma=soma+numbers[i];
}
console.log(soma);
let media = soma/numbers.length
console.log(media);
if (media>20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
let maior = numbers[0];
for (let i=0; i<numbers.length; i++) {
    if (maior<numbers[i]) {
        maior = numbers[i];
    }
}
console.log(maior);
let cont = 0;
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%2 != 0) {
        cont++;
    }
}
if (cont==0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(cont);
}
let menor = numbers[0];
for (let i=0; i<numbers.length; i++) {
    if (menor>numbers[i]) {
        menor = numbers[i];
    }
}
console.log(menor);