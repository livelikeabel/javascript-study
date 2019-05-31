// Test #1
// Write a command-line program that prints out the sum of two non-negative integers as input arguments.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let inputCount = 1;
const inputNumbers = [];
const NUMS = {
  "1": 1, "2": 2, "3": 3, "4": 4, "5": 5,
  "6": 6, "7": 7, "8": 8, "9": 9
};

r.setPrompt('> ');
r.prompt();
r.on('line', function (line) {
  inputNumbers.push(line);
  if (inputCount == 2) {
    const resNum = inputNumbers.reduce((sum, n) => sum + myParseInt(n), 0)
    console.log('result :', resNum);
    r.close();
  }
  console.log('enter number 1 more');
  r.prompt()
  inputCount++
});
r.on('close', function () {
  process.exit();
});


function myParseInt(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    res += NUMS[char];
    res *= 10;
  }
  res /= 10;
  return res;
}