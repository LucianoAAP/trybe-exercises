const input = '5.0 7.0 2.0';

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const sides = input.split(' ').sort((a, b) => b - a);

const A = parseFloat(sides[0]);
const B = parseFloat(sides[1]);
const C = parseFloat(sides[2]);

const determinarTriangulo = (A, B, C) => {
  if (A >= B + C) {
    return console.log('NAO FORMA TRIANGULO');
  }
  if (A*A === B*B + C*C) console.log('TRIANGULO RETANGULO');
  if (A*A > B*B + C*C) console.log('TRIANGULO OBTUSANGULO');
  if (A*A < B*B + C*C) console.log('TRIANGULO ACUTANGULO');
  if (A === B && B === C) console.log('TRIANGULO EQUILATERO');
  if ((A === B && B !== C) || (A === C && C !== B) || (B === C && C !== A)) console.log('TRIANGULO ISOSCELES');
};

determinarTriangulo(A,B,C);
  