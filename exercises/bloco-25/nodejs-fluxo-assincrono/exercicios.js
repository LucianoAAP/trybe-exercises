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

const ex3 = async () => {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await ex1(a, b, c);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
};

ex3();
