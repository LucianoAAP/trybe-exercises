const getNumber = new Promise((resolve, reject) => {
  let array = [];
for (let index = 1; index <= 10; index += 1) {
  array.push(Math.floor(Math.random() * 50) ** 2);
}
  const soma = array.reduce((accumulator, current) => accumulator += current, 0);
  if (soma < 8000) {
    resolve([soma / 2, soma / 3, soma / 5, soma / 10]);
  } else {
    reject();
  }
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
