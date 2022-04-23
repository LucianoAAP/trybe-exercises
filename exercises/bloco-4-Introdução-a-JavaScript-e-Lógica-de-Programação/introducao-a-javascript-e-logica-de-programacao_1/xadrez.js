let peca = 'PEAO';
let lower = peca.toLowerCase(peca);
switch (lower) {
    case 'peao':
        console.log ('uma casa frente');
        break;
    case 'torre':
        console.log ('vertical e horizontal');
        break;
    case 'cavalo':
        console.log ('L');
        break;
    case 'bispo':
        console.log ('diagonais');
        break;
    case 'rei':
        console.log ('uma casa vertical, horizontal e diagonais');
        break;
    case 'rainha':
        console.log ('vertical, horizontal e diagonais');
        break;
    default:
        console.log ('Peça inválida')
}