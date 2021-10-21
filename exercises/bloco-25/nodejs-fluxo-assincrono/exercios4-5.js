const fs = require('fs').promises;

const ex4_1 = async () => {
  try {
   const res = await fs.readFile('simpsons.json', 'utf8');
   const arr = JSON.parse(res);
   arr.forEach((char) => console.log(`${char.id} - ${char.name}`));
  } catch (error) {
    console.log(error.message);
  }
};

const ex4_2 = async (id) => {
  try {
    const res = await fs.readFile('simpsons.json', 'utf8');
    const simpson = JSON.parse(res).find((char) => char.id === id);
    if (!simpson) throw new Error('id não encontrado');
    console.log(simpson);
   } catch (error) {
     console.log(error.message);
   }
};

const ex4_3 = async () => {
  try {
    const oldSimpsons = await fs.readFile('simpsons.json', 'utf8').then((res) => JSON.parse(res));
    const newSimpsons = oldSimpsons.filter((char) => char.id !== '6' && char.id !== '10');
    await fs.writeFile('simpsons.json', JSON.stringify(newSimpsons));
   } catch (error) {
     console.log(error.message);
   }
};

const ex4_4 = async () => {
  try {
    const oldSimpsons = await fs.readFile('simpsons.json', 'utf8').then((res) => JSON.parse(res));
    const newSimpsons = oldSimpsons.filter((char) => char.id >= '1' && char.id <= '4');
    await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons));
   } catch (error) {
     console.log(error.message);
   }
};

const ex4_5 = async () => {
  try {
    const oldSimpsons = await fs.readFile('simpsonFamily.json', 'utf8').then((res) => JSON.parse(res));
    const newSimpsons = [...oldSimpsons, { id: "8", name: "Nelson Muntz" }];
    await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons));
   } catch (error) {
     console.log(error.message);
   }
};

const ex4_6 = async () => {
  try {
    const oldSimpsons = await fs.readFile('simpsonFamily.json', 'utf8').then((res) => JSON.parse(res));
    const filteredSimpsons = oldSimpsons.filter((char) => char.id !== '8');
    const newSimpsons = [...filteredSimpsons, { id:"5", name: "Maggie Simpson" }];
    await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons));
   } catch (error) {
     console.log(error.message);
   }
};

const execute = async () => {
  await ex4_1();
  await ex4_2('1');
  await ex4_3();
  await ex4_4();
  await ex4_5();
  await ex4_6();
};

execute();