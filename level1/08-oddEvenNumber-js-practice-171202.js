//1.  키보드로 입력받는다.
//2.  짝수면 '짝수입니다' 출력.
//3.  홀수면 '홀수입니다' 출력.
//4.  나머지는 '잘 모르겠습니다.' 출력.

var n = 2;
if (n%2 === 1) {
	console.log("The odd number ");
} else if (n%2 == 0) {
	console.log("The even number ");
} else {
	console.log("I don't know");
}

// // chrome browser
var n = prompt("숫자를 입력 해주세요");
// parseInt(n);
if (n%2 === 1) {
	document.write("The odd number ");
} else if (n%2 === 0) {
	document.write("The even number ");
} else {
	alert("I don't know");
}