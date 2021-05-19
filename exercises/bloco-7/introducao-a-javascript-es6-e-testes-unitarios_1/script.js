const botao = document.querySelector('#botones');
let clickCount = 0;
const paragrafo = document.querySelector('#contador');

botao.addEventListener('click', () => {
  clickCount += 1;
  paragrafo.innerHTML = clickCount;
});