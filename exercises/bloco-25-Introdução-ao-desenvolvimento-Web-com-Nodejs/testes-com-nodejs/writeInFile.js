const fs = require('fs/promises');

const writeInFile = (file, content) => {
  try {
    fs.writeFile(file, content);
    return 'ok';
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeInFile;
