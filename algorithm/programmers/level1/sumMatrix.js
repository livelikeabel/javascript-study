function sumMatrix(A, B) {
  var answer = Array();

  A.forEach((value, index) => {
    var inArr = Array();
    value.forEach((inValue, inIndex) => {
      inArr.push(inValue + B[index][inIndex]);
    });
    answer.push(inArr);
  });
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
