function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function resto(a,b) {
    return a%b;
}
console.log('Soma: ' + sum(10,5));
console.log('Subtração: ' + subtract(10,5));
console.log('Multiplicação: '+multiply(10,5));
console.log('Divisão: '+divide(10,5));
console.log('Resto: '+resto(10,5));
function maior2n(x,y) {
    if (x>y) {
        return 'x';
    } else if (y>x) {
        return 'y';
    } else {
        return 'são iguais';
    }
}
console.log('Maior de 2 números: '+maior2n(2,1));
function maior3n(x,y,z) {
    if (x>y && x>z) {
        return 'x';
    } else if (y>z && y>x) {
        return'y';
    } else if (z>x && z>y) {
        return'z';
    } else if (x==y && x>z) {
        return 'x e y';
    } else if (x==z && x>y) {
        return 'x e z';
    } else if (y==z && y>x) {
        return 'y e z';
    } else {
        return 'São todos iguais';
    }
}
console.log('Maior de 3 números: '+maior3n(2,3,4));
function positivonegativo(x) {
    if (x>0) {
        return 'positive';
    } else if (x<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log('Positivo ou negativo? '+positivonegativo(2));
function triangulo(x,y,z) {
    if (x<0 || y<0 || z<0) {
        return 'erro';
    } else if (x+y+z==180) {
        return true;
    } else {
        return false;
    }
}
console.log('É triângulo? '+triangulo(50,60,70));
function xadrez(peca) {
    let lower = peca.toLowerCase(peca);
    switch (lower) {
    case 'peao':
        return 'uma casa frente';
        break;
    case 'torre':
        return 'vertical e horizontal';
        break;
    case 'cavalo':
        return 'L';
        break;
    case 'bispo':
        return 'diagonais';
        break;
    case 'rei':
        return 'uma casa vertical, horizontal e diagonais';
        break;
    case 'rainha':
        return 'vertical, horizontal e diagonais';
        break;
    default:
        return 'Peça inválida'
    }
}
console.log('Movimento da peça: '+xadrez('peao'));
function porcentagem(nota) {
    if (nota<0 || nota>100) {
        return 'erro';
    } else if (nota>=90) {
        return 'A';
    } else if (nota>=80 && nota<90) {
        return 'B';
    } else if (nota<80 && nota>=70) {
        return 'C';
    } else if (nota<70 && nota>=60) {
        return 'D';
    } else if (nota<60 && nota>=50) {
        return 'E';
    } else {
        return 'F';
    }
}
console.log('Conceito da nota: '+porcentagem(60));
function par(x,y,z) {
    if (x%2==0 || y%2==0 || z%2==0) {
        return true;
    } else {
        return false;
    }
}
console.log('É par? '+par(2,3,4));
function impar(x,y,z) {
    if (x%2!==0 || y%2!==0 || z%2!==0) {
        return true;
    } else {
        return false;
    }
}
console.log('É ímpar? '+impar(2,3,4));
function lucro(c,v) {
    let valorCustoTotal = 1.2*c;
    let lucro = v - valorCustoTotal;
    if (c<0 || v<0) {
        return 'erro';
    } else {
        return 1000*lucro;
    }
}
console.log('O lucro é de: '+lucro(20,100)+' reais');
function imposto(s) {
    let inss = 0;
let ir = 0;
if (s<=1556.94) {
    inss=0.08*s;
} else if (s>1556.94 && s<=2594.92) {
    inss=0.09*s;
} else if (s>2594.93 && s<=5189.82) {
    inss=0.11*s;
} else {
    inss=570.88;
}
let sbase = s-inss;
if (sbase<=1903.98) {
    ir=0;
} else if (sbase>1903.98 && sbase<=2826.65) {
    ir=0.075*sbase-142.80;
} else if (sbase>2826.65 && sbase<=3751.05) {
    ir=0.15*sbase-354.80;
} else if (sbase>3751.05 && sbase<=4664.68) {
    ir=0.225*sbase-636,13;
} else {
    ir=0.27*sbase-869.36;
}
let sliq = sbase-ir;
return sliq;
}
console.log('O salário líquido é de: '+imposto(5000)+' reais')