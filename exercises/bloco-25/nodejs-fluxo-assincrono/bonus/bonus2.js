const fs = require('fs').promises;
const readline = require('readline-sync');

const modifyFile = async () => {
  const file = readline.question('Qual arquivo deseja ler? ');
  try {
    const info = await fs.readFile(file, 'utf8');
    const word = readline.question('Qual palavra deseja modificar? ');
    const newWord = readline.question('Qual é a nova palavra? ');
    info.replace(new RegExp(word, 'g'), newWord);
    const destination = readline.question('Onde deseja salvar? ');
    console.log(info);
    fs.writeFile(destination, newWord);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
};

modifyFile();
