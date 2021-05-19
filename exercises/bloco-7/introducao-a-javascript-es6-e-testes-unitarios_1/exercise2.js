const fatorial = numero => {
  for (let index = numero - 1; index > 0; index -= 1) {
    numero = numero * index;
  }
  return numero;
}

console.log(fatorial(4));