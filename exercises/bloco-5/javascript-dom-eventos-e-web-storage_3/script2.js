function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index in dezDaysList) {
      let dia = document.createElement('li')
      dia.innerText = dezDaysList[index];
      dia.classList.add('day');
      if (dia.innerText === '24' || dia.innerText === '25' || dia.innerText === '31') {
          dia.classList.add('holiday');
      };
      if (dia.innerText === '4' || dia.innerText === '11' || dia.innerText === '18' || dia.innerText === '25') {
          dia.classList.add('friday');
      }
      document.querySelector('#days').appendChild(dia);
  };
  function addHoliday (btn) {
      let botao = document.createElement('button')
      botao.id = "btn-holiday";
      botao.innerHTML = btn;
      document.querySelector('.buttons-container').appendChild(botao);
  };
  addHoliday('Feriados');
  
  document.querySelector('#btn-holiday').addEventListener('click', holidayColor);
  function holidayColor () {
    let holidays = document.querySelectorAll('.holiday');
      for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor !== 'red') {
            holidays[index].style.backgroundColor = 'red';
        } else {
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        }
      };
  };

  function adicionaSexta(btn) {
      let sexta = document.createElement('button');
      sexta.innerHTML = btn;
      sexta.id = 'btn-friday';
      document.querySelector('.buttons-container').appendChild(sexta);
  }
  adicionaSexta('Sexta-feira');

  document.querySelector('#btn-friday').addEventListener('click', sextar);
  function sextar() {
    let sextasOriginal = [ 4, 11, 18, 25 ];
    let sextas = document.querySelectorAll('.friday');
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].innerText !== 'Sextou!') {
        sextas[index].innerText = 'Sextou!';
      } else {
        sextas[index].innerText = sextasOriginal[index];
      }
    };
  };