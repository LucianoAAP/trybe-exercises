const mult = numero => {
  for (let index = numero - 1; index > 0; index -= 1) {
    numero = numero * index;
  }
  return numero;
}

const fatorial = numero => (
  numero === 0 ? 1 : mult(numero)
);

console.log(fatorial(4));