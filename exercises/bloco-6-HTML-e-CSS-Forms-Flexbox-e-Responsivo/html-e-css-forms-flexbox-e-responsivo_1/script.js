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