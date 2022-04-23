let = selectState = document.querySelector('#state');
let botaoClear = document.querySelector('#clear');
let estados = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
};

for (let index in estados) {
    let estado = document.createElement('option');
    estado.innerHTML = estados[index];
    estado.value = index;
    selectState.appendChild(estado);
}

function limpar() {
    let dadosInputs = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    textArea.value = '';
    for (let index = 0; index < dadosInputs.length; index += 1) {
        dadosInputs[index].value = '';
    }
}

botaoClear.addEventListener('click', limpar);

document.getElementById('data').DatePickerX.init();

// new JustValidate('.js-form', {
//     rules: {
//       name: {
//         required: true,
//         minLength: 3,
//         maxLength: 40
//       },
//       email: {
//         required: true,
//         email: true,
//         maxLength: 50
//       },
//       cpf: {
//         required: true,
//         maxLength: 11
//       },
//       address: {
//         required: true,
//         maxLength: 200
//       },
//       city: {
//         required: true,
//         maxLength: 28
//       },
//       state: {
//         required: true,
//       },
//       radio: {
//         required: true,
//       },
//       text: {
//         required: true,
//         maxLength: 1000
//       },
//       position: {
//         required: true,
//         maxLength: 40
//       },
//       description: {
//         required: true,
//         maxLength: 500
//       },
//       date: {
//         required: true,
//       }
//     },
//     messages: {
//       name: {
//         required: 'O campo de nome é obrigatório.',
//         maxLength: 'O limite é de 40 caracteres.'
//       },
//       email: {
//         required: 'O campo de email é obrigatório.',
//         email: 'O email digitado não é válido.',
//         maxLength: 'O limite é de 50 caracteres.'
//       },
//       cpf: {
//         required: 'O campo de CPF é obrigatório.',
//         maxLength: 'O limite é de 11 caracteres.'
//       },
//       address: {
//         required: 'O campo endereço é obrigatório.',
//         maxLength: 'O limite é de 200 caracteres.'
//       },
//       city: {
//         required: 'O campo cidade é obrigatório.',
//         maxLength: 'O limite é de 28 caracteres.'
//       },
//       state: {
//         required: 'O campo estado é obrigatório.',
//       },
//       radio: {
//         required: 'A escolha de um item é obrigatória.',
//       },
//       text: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 1000 caracteres.'
//       },
//       position: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 40 caracteres.'
//       },
//       description: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 500 caracteres.'
//       },
//       date: {
//         required: 'Este campo é obrigatório.',
//       }
//     },
//     submitHandler: function (form, values) {
//       console.log(form, values);
//     }});