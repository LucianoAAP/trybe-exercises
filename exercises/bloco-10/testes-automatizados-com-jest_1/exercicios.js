const techList = (listaDeTecnologias, nome) => {
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  return listaDeTecnologias.map((tecnologia) => ({ tech: tecnologia, name: nome})).sort((objA, objB) => objA.tech > objB.tech ? 1: -1);
}

const hydrate = (numerobebida) => {
  const splitted = numerobebida.match(/\d+/g).map(Number);
  number = splitted.reduce((accumulator, current) => {
    if (typeof parseInt(current) === "number") {
      accumulator += current;
    }
    return accumulator
  }, 0);
  if (number === 0 || number === 1) {
    return `${number} copo de água`;
  }
  return `${number} copos de água`;
}

module.exports = {
  techList,
  hydrate
}
