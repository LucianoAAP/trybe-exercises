function count_down(x) {
  let answer = `${x}`;
  for (let index = x - 1; index > 0; index -= 1) {
      answer = `${answer}...${index}`;
  }
  return `${answer}...0!!!`;
}

function even_fibonacci_numbers(roof) {
  const fibonacci = [1, 2];
  let sum = 0;
  for (let index = 3; index <= roof; index += 1) {
      fibonacci.push(fibonacci[index - 2] + fibonacci[index - 3]);
  }
  for (let index = 0; index < roof; index += 1) {
      if (fibonacci[index] % 2 === 0 && fibonacci[index] < roof) sum += fibonacci[index];
  }
  return sum;
}

function nth_prime(n) {
  const isPrime = (x) => {
      for (let index = 2; index < x; index += 1) {
          if (x % index === 0) return false;
      }
      return true;
  }
  const primes = [];
  let x = 2;
  while (primes.length < n) {
      if (isPrime(x)) primes.push(x)
      x += 1;
  }
  return primes[n - 1];
}
const n = 47;
const turnToReverse = (number) => {
  const reverseArray = number.toString().split('').reverse();
  return Number(reverseArray.reduce((acc, curr) => `${acc}${curr}`));
};

function largest_palindrome_product(digits) {
  let roofStr = '';
  let floorStr = '9';
  for (let index = 1; index <= digits; index += 1) {
      roofStr = `${roofStr}9`;
  }
  for (let index = 1; index <= digits - 1; index += 1) {
    floorStr = `${floorStr}0`;
  }
  const roof = Number(roofStr);
  const floor = Number(floorStr);
  console.log(roof, floor);
  for (let first = roof; first >= floor; first -= 1) {
      for (let second = roof; second >= floor; second -= 1) {
        console.log(first, second);
          const prod = first * second;
          if (prod === turnToReverse(prod)) return prod;
      }
  }
  return 1;
}

function poligrama(word) {
  let answer = '';
  const arr = word.split('');
  for (let index = 0; index < arr.length; index += 1) {
      const root = arr.slice(0, index + 1);
      const rest = arr.slice(index + 1, arr.length);
      const rootLength = root.length;
      const restLength = rest.length;
      if (restLength % rootLength === 0) {
          let matches = 0;
          const candidates = [];
          const div = restLength / rootLength;
          for (let i = 0; index < div; index += rootLength) {
              candidates.push(rest.slice(i, i + rootLength));
          }
          candidates.forEach((candidate) => {
              for (let j = 0; j <= rootLength; j += 1) {
                  rootQty = root.filter((letter) => letter === root[j]).length;
                  candidateQty = candidate
                      .filter((letter) => letter === root[j]).length;
                  if (rootQty === candidateQty) matches += 1;
              }
          });
          if (matches === div) answer = root.reduce((acc, curr) => `${acc}${curr}`);
      }
  }

}

function square_digit_chains(n) {
  const turnToArr = (x) => x.toString().split('');
  let qty = 0;
  for (let index = 1; index < n; index += 1) {
      let x = index;
      while (x !== 1 && x !== 89) {
          x = turnToArr(x.toString()).reduce((acc, curr) => (Number(acc) ** 2) + (Number(curr) ** 2));
          console.log(x);
      }
      if (x === 89) qty += 1;
      console.log(index, x, qty);
  }
  return qty;
}
square_digit_chains(100);

const turnToArr = (x) => x.toString().split('');
let x = 2;
x = turnToArr(x.toString()).reduce((acc, curr) => Number(acc) ** 2 + Number(curr) ** 2, 0);
console.log(x);
console.log(2 ** 2);
