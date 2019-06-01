const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const UTF8_NUMBERS = {
  '일': 1, '이': 2, '삼': 3, '사': 4,
  '오': 5, '육': 6, '칠': 7, '팔': 8,
  '구': 9,
  '십': 10, '백': 100, '천': 1000, '만': 10000,
  '억': 100000000,

  1: '일', 2: '이', 3: '삼', 4: '사',
  5: '오', 6: '육', 7: '칠', 8: '팔',
  9: '구',
  10: '십', 100: '백', 1000: '천', 10000: '만',
  100000000: '억',
  '': ''
}

let inputCount = 1;
const inputNumbers = [];
let outputNumbers = []

r.setPrompt('> ');
r.prompt();
r.on('line', function (line) {
  inputNumbers.push(line);
  if (inputCount == 2) {
    const resultNumber = parseIntFromUTF8(inputNumbers[0]) + parseIntFromUTF8(inputNumbers[1]);
    splitToParsePrepare(resultNumber)
    const resultStr = parseUTF8FromInt(outputNumbers);
    console.log('>>', resultStr)
    r.close();
  }
  console.log('enter number 1 more');
  r.prompt()
  inputCount++
});
r.on('close', function () {
  process.exit();
});

function parseIntFromUTF8(strNum) {
  let result = 0;
  let flag = 0;
  strNum.split("").forEach((v, i, arr) => {
    const parsedNum = UTF8_NUMBERS[v];
    const nextParsedNum = UTF8_NUMBERS[arr[i + 1]];
    if (nextParsedNum % 10 === 0) {
      flag = parsedNum
    }
    if (parsedNum % 10 === 0) {
      if (flag > 0) {
        result += flag * parsedNum
        flag = 0
      } else {
        result *= parsedNum
      }
    } else if (nextParsedNum % 10 !== 0) {
      result += parsedNum
    }
  })
  return result;
}

function parseUTF8FromInt(outputNumbers) {
  return outputNumbers.reduce((acc, v) => acc += UTF8_NUMBERS[v], '');
}

// 9308 => 9, 1000, 3, 100, 8
function splitToParsePrepare(intNum) {
  const division = Math.pow(10, intNum.toString().length - 1);
  const quotient = Math.floor(intNum / division) === 1 ? '' : Math.floor(intNum / division);
  const remainder = intNum % division
  outputNumbers.push(quotient, division)
  remainder > 10 ? splitToParsePrepare(remainder) : outputNumbers.push(remainder)
}
