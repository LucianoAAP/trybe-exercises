let numerais = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
function romanos(string) {
    let numero = 0;
    for (let index=0; index<string.length; index+=1) {
        if (numerais[string[index]]<numerais[string[index+1]]) {
            numero=numero-numerais[string[index]];
        } else {
            numero=numero+numerais[string[index]];
        }
    }
    return numero;
}
console.log(romanos('XIX'));