// 1. 구구단의 3단을 출력하시오.
// 2. 키보드로 입력받은 구구단의 단을 출력하시오.
// 3. 구구단 전체를 출력하시오.
// 4. 아래 모양을 출력해 보세요.

// 1
// for(var i = 2; i < 10; i++) {
// 	console.log(3 + 'x' + i + '=' + i*3);
// }

// 2
// var n = prompt("숫자를 입력해 주세요");
// for(var i = 2; i < 10; i++) {
// 	console.log(n + 'x' + i + '=' + i*n);
// }

// 3
// for(var i = 2; i < 10; i++) {
// 	for(var j = 1; j < 10; j++) {
// 		console.log(i + 'x' + j + '=' + i*j);
// 	}
// }

//4
// console.log(" 월 화 수 목 금 토 일");
// str = ""
// for(var i = 1; i < 32; i++) {
// 	str = str+ " " + i
// 	if(i%7 === 0){
// 		console.log(str);
// 		str = "";
// 	}
// }
// console.log(str);