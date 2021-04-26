let n=5;
let quadrado = '';
for (let index=1; index<=n; index++) {
    quadrado=quadrado+'*';
}
for (let index=1; index<=n; index++) {
    console.log (quadrado);
}
console.log('========================');
let triangulo='';
for (let index = 1; index<=n; index++) {
    triangulo=triangulo+'*';
    console.log(triangulo);
}
console.log('========================');
let invertido ='';
let index2=0;
let espaco=' ';
let asterisco='*';
for (let index=1; index<=n; index++) {
    invertido=invertido+espaco.repeat(n-index)+asterisco.repeat(index);
    console.log(invertido);
    invertido='';
}