function solution(a, b) {
  let answer = '';
  let sum = 0;
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  function sumMonths(a) {
    if (a === 0) return 0;
    return months.slice(0, a - 1).reduce(function (acc, cur) {
      return acc + cur;
    })
  }

  function findDay(sum) {
      return days[sum % 7]
  }

  let month = sumMonths(a);
  sum = month + b;
  answer = findDay(sum);

  return answer;
}

console.log(solution(4, 7))