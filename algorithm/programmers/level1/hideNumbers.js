function hide_numbers(s) {
  var result = "";
  //함수를 완성해주세요
  console.log(s.length);
  for (let i = 0; i < s.length - 4; i++) {
    result += "*";
  }
  for (let i = s.length - 4; i < s.length; i++) {
    result += s[i];
  }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers("01033334444"));
