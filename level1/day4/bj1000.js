var input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n 줄바꿈 문자
var n = Number(input[0]); //숫자 개수 n =5

for (var i = 1; i <= n; i++) {
	var arr = input[i].split(" ");	//
	console.log(Number(arr[0]) + Number(arr[1]));
}

