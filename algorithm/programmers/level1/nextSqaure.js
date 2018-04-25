const nextSqaure = n =>
  Math.sqrt(n) % 1 ? "no" : Math.pow(Math.sqrt(n) + 1, 2);

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
