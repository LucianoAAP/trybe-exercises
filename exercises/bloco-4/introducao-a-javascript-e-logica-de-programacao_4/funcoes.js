function palindromo(palavra) {
    let cont=0;
    for (let letra=0; letra<palavra.length; letra+=1) {
        if (palavra[letra]!==palavra[palavra.length-1-letra]) {
            cont+=1;
        }
    }
    if (cont>0) {
        return false;
    } else {
        return true;
    }
}
console.log('É palíndromo? '+palindromo('arara'));

console.log('============================================================');


function maiorNumero(array) {
    let maior=array[0];
    let indice = 0;
    for (let index=0; index<array.length; index+=1) {
        if (maior<array[index]) {
            maior=array[index];
            indice=index;
        } else if (index!==0 && maior===array[index]) { //Caso o maior número se repita
            indice=indice+' e '+index;
        }
    }
    return indice;
}
console.log('Índice(s) do maior valor: '+maiorNumero([2, 3, 6, 7, 10, 1]));

console.log('============================================================');

function menorNumero(array) {
    let menor=array[0];
    let indice = 0;
    for (let index=0; index<array.length; index+=1) {
        if (menor>array[index]) {
            menor=array[index];
            indice=index;
        } else if (index!==0 && menor===array[index]) { //Caso o menor número se repita
            indice=indice+' e '+index;
        }
    }
    return indice;
}
console.log('Índice(s) do menor valor: '+menorNumero([2, 4, 6, 7, 10, 0, -3]));

console.log('============================================================');

function maisCaracteres(array) {
    let maior=array[0];
    let nome = '';
    for (let index=0; index<array.length; index+=1) {
        if (maior.length<array[index].length) {
            maior=array[index];
            nome=maior;
        } else if (index!==0 && maior.length===array[index].length) { //Caso hajam dois de mesmo tamanho
            nome=maior+' e '+array[index];
        }
    }
    return nome;
}
console.log('Maior(es) nome(s): '+maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log('============================================================');

function numeroRepetido(array) {
    let repeticoes = [];
    for (let index=0; index<array.length; index+=1) {
        let cont=0;
        for (let index2=0; index2<array.length; index2+=1) {
            if (array[index]===array[index2]) {
                cont+=1;
            }
        }
        repeticoes.push(cont);
    }
    let maior=repeticoes[0];
    let indice = 0;
    let resposta ='';
    for (let index=0; index<repeticoes.length; index+=1) {
        if (maior<=repeticoes[index]) {
            maior=repeticoes[index];
            indice=index;
        }
        // Não consegui fazer uma lógica que mostre números que aparecem na mesma quantidade sem que eles se repitam na resposta

        //if (resposta==='') {
        //  resposta=resposta+array[index];
        // else if (maior===repeticoes[index] && array[index]!==array[indice]) {
        //     resposta=resposta+' e '+array[index];
        // }
    }
    return array[indice];;
}
console.log('Número que mais se repete: '+numeroRepetido([2, 3, 2, 5, 8, 2, 3]));

console.log('============================================================');

function somatorio(N) {
    let soma=0;
    for (let index=1; index<=N; index+=1) {
        soma=soma+index;
    }
    return soma;
}
console.log('Soma até N: '+somatorio(5));

console.log('============================================================');

function final(word,ending) {
    let dif = word.length-ending.length;
    let resultado = true;
    for (let index=0; index<ending.length; index+=1) {
        if (ending[index]!==word[index+dif]) {
            resultado = false;
        }
    }
    return resultado;
}
console.log('O final é igual? '+final('trybe','be'));