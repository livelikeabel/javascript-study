// 1. 임의의 난수를 생성해 봅시다.
a = Math.random()
console.log(a);
// 2. 0 ~ 9 사이의 임의의 난수를 생성해 봅시다.
b = a*10;
console.log(b);
// 3. 0 ~ 9 사이의 임의의 정수를 생성해 봅시다.
c = Math.floor(b);
console.log(c);
// 4. 1 ~ 10 사이의 임의의 정수를 생성해 봅시다.
d = c + 1;
console.log(d);
// 5. 2, 4, 6, 8, 10 중 임의의 정수를 생성해 봅시다.
if(d%2 == 0) {
	console.log(d);
}
// 6. 5에서 생성한 값을 변수 n에 담고 출력해 봅시다.
var n;
if(d%2 == 0) {
	n = d;
}
console.log(n);

// 7. 다음과 같은 내용으로 10이하 임의의 홀수를 5번 출력하는 프로그램을 작성해 봅시다.
// 임의의 숫자 생성하는 프로그램
// 생성한 숫자는 5입니다.
// 생성한 숫자는 7입니다.
// 생성한 숫자는 3입니다.
// 생성한 숫자는 3입니다.
// 생성한 숫자는 5입니다.
// 끝

console.log("임의의 숫자 생성하는 프로그램");
// for(var i=0; i<5; i++) {
// 	if(d%2 == 1) {
// 		console.log("생성한 숫자는 입니다.");
// 	}
// }

i = 0;
while(i < 5) {
	var n = Math.floor(Math.random()*10)+1
	if(n%2 == 1) {
		console.log("생성한 숫자는" + n + "입니다.");
		i++;
	}
}

