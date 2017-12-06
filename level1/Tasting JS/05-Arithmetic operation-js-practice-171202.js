function arithmeticOperation(a, b) {
	return [ a + b , a - b, a * b, a / b ];
}

var n1 = prompt('첫번째 수를 입력해 주세요');
var n2 = prompt('두번째 수를 입력해 주세요');
n1 = Number(n1);
n2 = Number(n2);


alert(arithmeticOperation(n1, n2));