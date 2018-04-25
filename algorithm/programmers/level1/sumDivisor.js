function sumDivisor(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));
