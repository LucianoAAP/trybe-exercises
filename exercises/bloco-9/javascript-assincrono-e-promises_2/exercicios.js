const getNumber = new Promise((resolve, reject) => {
  let array = [];
for (let index = 1; index <= 10; index += 1) {
  array.push(Math.floor(Math.random() * 50) ** 2);
}
  const soma = array.reduce((accumulator, current) => accumulator += current, 0);
  if (soma < 8000) {
    resolve();
  } else {
    reject();
  }
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));
