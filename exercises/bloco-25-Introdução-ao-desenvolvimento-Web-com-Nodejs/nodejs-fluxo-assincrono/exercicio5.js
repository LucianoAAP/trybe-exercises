const fs = require('fs').promises;

const ex5 = async () => {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  try {
    await Promise.all(
      arr.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string))
    );
    await Promise.all(
      arr.map((_string, index) => fs.readFile(`file${index + 1}.txt`, 'utf8'))
    ).then((res) => {
      const noExcl = res.filter((_str, index) => index !== res.length - 1).join(' ');
      const done = [noExcl, res[res.length - 1]];
      fs.writeFile('fileAll.txt', done.join(''));
    });
  } catch (error) {
    console.log(error);
  }
};

ex5();
