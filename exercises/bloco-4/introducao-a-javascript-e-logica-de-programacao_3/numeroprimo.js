let numero = 237;
let cont = 0;
for (let index = 1; index <= numero; index++) {
    if (index!==1 && index!==numero && numero%index===0) {
        cont++;
    }
}
if (numero!==1 && numero!==0 && cont===0){
    console.log('É primo');
} else {
    console.log('Não é primo');
}