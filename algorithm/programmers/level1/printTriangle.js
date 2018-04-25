function printTriangle(num) {
  var result = "";
  // 함수를 완성하세요
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(printTriangle(3));
