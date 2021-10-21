const ex1 = (x, y, z) => {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const resultado = (x + y) * z;
    if (resultado < 50) reject(new Error('Valor muito baixo'));
    resolve(resultado);
  });
};

ex1(2,3,70).then((r) => console.log(r)).catch((e) => console.log(e.message));