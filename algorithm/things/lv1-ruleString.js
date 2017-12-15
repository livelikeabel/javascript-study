// // alpha_string46함수는 문자열 s를 매개변수로 입력받습니다.
// // s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.
// // 예를들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다

// function alpha_string46(s){
//   var result = true
//   // 함수를 완성하세요
//   if ( s.length !== 4 && s.length !== 6) {
//   	result = false;
//   }

//   var alpabet = "qwertyuiopasdfghjklzxcvbnm";
//   var splited_alpabet = alpabet.split("");

//   for (var i = 0; i < splited_alpabet.length; i++) {
//   	if ( s.indexOf(splited_alpabet[i]) !== -1 ) {
//   		result = false;
//   	}
//   }

//   return result;
// }


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( alpha_string46("1354213") );


//다른 사람들의 풀이

//1위. 정규표현식 사용
// function alpha_string46(s){
//   var regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(s);
// }

// console.log( alpha_string46("8534") );

// function alpha_string46(s) {
// 	return s.length == 4 || s.length == 6 ? !isNaN(s)
// : false 
// }

// console.log(alpha_string46("22123"));

function alpha_string46(s){
  var result = true
  var tmpRangeA = 4;
  var tmpRangeB = 6;

  var tmpNumber = s * 1;

  // 길이 확인.
  if (s.length !== tmpRangeA && s.length !== tmpRangeB) {
    result = false;
  }

  // 숫자형인지 확인.
  if (isNaN(tmpNumber) || (typeof tmpNumber !== 'number')) {
    result = false;
  }  

  return result;
}
