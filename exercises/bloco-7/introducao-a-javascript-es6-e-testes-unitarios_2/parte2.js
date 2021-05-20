const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
}

console.log(addKey(lesson2, 'turno', 'manhã'));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = objeto => {
  return Object.keys(objeto);
}

console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const sizeOf = objeto => {
  return Object.keys(objeto).length;
}

console.log(sizeOf(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = objeto => {
  return Object.values(objeto);
}

console.log(listValues(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = () => {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}

console.log(totalStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getInformation = (objeto, posicao) => {
  const keys = Object.keys(objeto);
  return objeto[keys[posicao]];
}

console.log(getInformation(lesson1, 0));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 

const exists = (objeto, chave, valor) => {
  objeto[chave] === valor ? console.log(true) : console.log(false)
}

exists(lesson3, 'turno', 'noite');


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const presencaMatematica = () => {
  let cont = 0;
  const lessons = Object.keys(allLessons);
  for (let key in lessons) {
    if (allLessons[lessons[key]].materia === 'Matemática') {
      cont += allLessons[lessons[key]].numeroEstudantes;
    }
  }
  return cont;
}

console.log(presencaMatematica());


// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const relatorio = professor => {
  let aulas = [];
  let estudantes = 0;
  const lessons = Object.keys(allLessons);
  for (let key in lessons) {
    if (allLessons[lessons[key]].professor === professor) {
      aulas.push(allLessons[lessons[key]].materia)
      estudantes += allLessons[lessons[key]].numeroEstudantes;
    }
  }
  return Object.assign({}, {professor, aulas, estudantes});
}

console.log(relatorio('Maria Clara'));