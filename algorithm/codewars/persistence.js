persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number


function persistence(num) {
  let count = 0;
  while(true) {
    const splitedNum = num.toString().split('');
    if (splitedNum.length < 2) return count;
    num = splitedNum.reduce((acc,cur) => acc * cur);
    count++;
  }
}