let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let sort = 1; sort < numbers.length; sort+=1) {
    for (let index = 0; index < numbers.length-sort; index+=1) {
        if (numbers[index]>numbers[index+1]) {
            let aux = numbers[index];
            numbers[index]=numbers[index+1];
            numbers[index+1]=aux;
        }
    }
}
console.log (numbers);
for (let sort = 1; sort < numbers.length; sort+=1) {
    for (let index = 0; index < numbers.length-sort; index+=1) {
        if (numbers[index]<numbers[index+1]) {
            let aux = numbers[index];
            numbers[index]=numbers[index+1];
            numbers[index+1]=aux;
        }
    }
}
console.log (numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];
for (let int = 0; int<numbers.length; int+=1) {
    if (numbers[int+1]===undefined) {
        mult.push(numbers[int]*2);
    } else {
        mult.push(numbers[int]*numbers[int+1]);
    }
}
console.log(mult);