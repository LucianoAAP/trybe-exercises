const exercicios = require('./exercicios.js');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

test('exercicio bonus', () => {
  return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});