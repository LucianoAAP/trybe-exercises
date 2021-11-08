var input = `1
1
1
1
1`;
​
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
​
const quantidadeMandioca = [300, 1500, 600, 1000, 150];
​
const totalMandioca = quantidadeMandioca.reduce((acc, cur) => acc + cur * lines.shift(), 0) + 225;
​
console.log(totalMandioca);