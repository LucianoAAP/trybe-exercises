const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimal = Animals.find((animal) => animal.name === name);
      if (foundAnimal !== undefined) {
        return resolve(foundAnimal);
      };

      return reject('Nenhum animal com esse nome!' );
    }, 100);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal);
};

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getListAnimals = (age) => findAnimalsByAge(age).then(list => list);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testa findAnimalByAge', () => {
  it('should work', () => {
    return getListAnimals(2).then((list) => expect(list).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]));
  });
  it('should not work', () => {
    return getListAnimals(237).catch((error) => expect(error).toBe('Nenhum animal com essa idade!'));
  });
})
