function printReversedTriangle(num) {
	var str = "";
	for (var i = num; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			str += '*';
		}
		str += "\n";
	}
	return str;
}

console.log(printReversedTriangle(10));


//재귀함수 사용
// function printReversedTriangle(n) {
// 	return n > 0 ? '*' .repeat(n) + '\n' + printReversedTriangle(n-1) : '';
// }

// console.log(printReversedTriangle(3));