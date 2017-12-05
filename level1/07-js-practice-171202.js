// //자바스크립트 맛보기, 대충 살펴보기, alert()과 prompt()
// function randomItem(a) {
//   return a[Math.floor(Math.random() * a.length)]; //* length 의 역할이, 1~6까지 index를 말하는 건가?
// }

// var name = prompt('이름을 입력해 주세요! ㅎㅎ');

// var numbers = new Array('1', '2', '3', '4' ,'5' ,'6');
// n = randomItem(numbers);

// alert(name + "님은 주사위" + n + "을(를) 굴리셨습니다." );

var name = prompt("이름을 입력해 주세요");
var numbers = Math.floor(Math.random() * 6)+1;
alert(name + "님은 주사위" + numbers + "을(를) 굴리셨습니다." );