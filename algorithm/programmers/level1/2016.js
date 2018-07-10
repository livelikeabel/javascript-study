// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.


// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// 1월 1일은 금요일, 1월 8일(금)
// 1월 31일 까지 있음
// 2월 29일 까지
// 3월 31일
// 4월 30일
// 5월 31일, 6월 30일, 7월 31일, 8월 31일, 9월 30일, 10월 31일, 11월 30일, 12월 31일


function solution(a, b) {
  //예외처리
  if( a < 1 || a > 12 || b < 1 || b > 31) return "invailed value";

  var answer = '';
  // const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const days = ['FRI', 'SAT','SUN', 'MON', 'TUE', 'WED', 'THU'];

  if(a = 1 && b === 1) return days[0]
  if(a = 1 && b === 5) return days[4]
  if(a = 1 && b === 14) {

  }
  // 1월 5일은 1월 1일으로부터 몇일 인가? -> 4일. 4일 더한값. 요일은 루프를 탄다.
  console.log( 14/7 );

  return answer;
}

console.log(solution(1, 1))
console.log(solution(1, 5))