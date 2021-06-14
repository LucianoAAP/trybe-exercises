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

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  const pro = professionalBoard.find((professional) => professional.id === id);
  if (pro === undefined) {
    return 'ID não identificada';
  }
  if (pro[detail] === undefined) {
    return 'Informação indisponível';
  }
  return pro[detail];
};

module.exports = {
  techList,
  hydrate,
  searchEmployee
}
