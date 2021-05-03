const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

divUm.addEventListener('click', recebeClasse);
divDois.addEventListener('click', recebeClasse);
divTres.addEventListener('click', recebeClasse);

input.addEventListener('input', alteraTexto);

myWebpage.addEventListener('dblclick', link);
myWebpage.addEventListener('mouseover', alteraCor);
myWebpage.addEventListener('mouseout', removeCor);

function recebeClasse (event) {
    let elementoClasse = document.querySelector('.tech');
    elementoClasse.classList.remove('tech');
    event.target.classList.add('tech');
};

function alteraTexto (event) {
    let elementoClasse = document.querySelector('.tech');
    elementoClasse.innerText = event.target.value;
};

function link () {
    window.open('https://lucianoaap.github.io/');
};

function alteraCor (event) {
    event.target.style.color = 'red';
};
function removeCor (event) {
    event.target.style.color = 'unset';
};

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.