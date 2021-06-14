const techList = (listaDeTecnologias, nome) => {
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  return listaDeTecnologias.map((tecnologia) => ({ tech: tecnologia, name: nome})).sort((objA, objB) => objA.tech > objB.tech ? 1: -1);
}

module.exports = {
  techList
}
