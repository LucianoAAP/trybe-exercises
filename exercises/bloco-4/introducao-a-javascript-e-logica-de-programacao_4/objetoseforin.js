let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vindo(a), '+info.personagem);

console.log('=========================================================================')

info.recorrente='Sim';
console.log(info);

console.log('=========================================================================')

for (let key in info) {
console.log(info[key]);
}
console.log('=========================================================================')

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for (let key in info) {
    if (info[key]===info.recorrente && info[key]==='Sim' && info2[key]==='Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key]+' e '+info2[key]);
    }
}