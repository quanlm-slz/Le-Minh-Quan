var sum_to_n_a = (number) => {
  const n = Number(number)
  return [...Array(n+1).keys()].reduce((acc, i) => acc + i);
}

var sum_to_n_b = (number) => {
  const n = Number(number)
  return n == 1 ? n : sum_to_n_b(n-1) + n
}

var sum_to_n_c = (number) => {
  const n = Number(number)
  return (n * (n + 1)) / 2
}

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', number => {
  console.log(`Sum to n a result: ${sum_to_n_a(number)}`);
  console.log(`Sum to n b result: ${sum_to_n_b(number)}`);
  console.log(`Sum to n c result: ${sum_to_n_c(number)}`);
  rl.close();
})
