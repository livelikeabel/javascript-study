var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// console.log(input);
// console.log(Number(input[0]));
// console.log(input[1].split(" ").map(Number));

var arrLength = Number(input[0]);
var arr = input[1].split(" ").map(Number);

function arraySum(arr, arrLength) {
	var ret = 0;
	for(var i = 0; i < arrLength; i++) {
		ret += arr[i];
	}
	return ret;
}

console.log(arraySum(arr, arrLength));