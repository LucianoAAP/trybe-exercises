
// Quadrado

let n=7;
let quadrado = '';
for (let index=1; index<=n; index++) {
    quadrado=quadrado+'*';
}
for (let index=1; index<=n; index++) {
    console.log (quadrado);
}
console.log('========================');

// Triângulo

let triangulo='';
for (let index = 1; index<=n; index++) {
    triangulo=triangulo+'*';
    console.log(triangulo);
}
console.log('========================');

// Triângulo invertido

let invertido ='';
let index2=0;
let espaco=' ';
let asterisco='*';
for (let index=1; index<=n; index++) {
    invertido=invertido+espaco.repeat(n-index)+asterisco.repeat(index);
    console.log(invertido);
    invertido='';
}
console.log('========================');

// Pirâmide

let piramide = '';
for (let index=1; index<=n; index++) {
    if (index%2===0) {
        console.log(espaco.repeat(n));
    } else {
        piramide=piramide+espaco.repeat((n-index)/2)+asterisco.repeat(index)+espaco.repeat((n-index)/2);
        console.log(piramide);
        piramide='';
    }
}
console.log('========================');

// Pirâmide oca

let piramide2='';
for (let index=1; index<=n; index++) {
    if (index%2===0) {
        console.log(espaco.repeat(n));
    } else if (index===1) {
        piramide2=espaco.repeat((n-1)/2)+asterisco+espaco.repeat((n-1)/2);
        console.log(piramide2);
        piramide2='';
    } else if (index===n) {
        piramide2=asterisco.repeat(index);
        console.log(piramide2);
        piramide2='';
    } else {
        piramide2=espaco.repeat((n-index)/2)+asterisco+espaco.repeat(index-2)+asterisco+espaco.repeat((n-index)/2);
        console.log(piramide2);
        piramide2='';
    }
}