const fs = require('fs').promises;
const readline = require('readline-sync');

const viewFile = async () => {
  const file = readline.question('Qual arquivo deseja ler? ');
  try {
    const info = await fs.readFile(file, 'utf8');
    console.log(info);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
};

viewFile();
