// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n 줄바꿈 문자
// var arr = [];

// //배열에 담고, 9명의 합을 구한다.
// var sum = 0;
// for (var i = 0; i < 9; i++) {
// 	arr.push(Number(input[i]));
// 	sum += arr[i];
// }

// console.log(arr, sum);

// var leftover = sum - 100;

// var n1 = 0;
// var n2 = 0;
// var numberOf1 = 0;
// var numberOf2 = 0;
// for (var i = 0; i < 8; i++) {
// 	for (var j = i + 1; j < 9; j++) {
// 		if(arr[i] + arr[j] === leftover) {
// 			arr[i] = arr[j] = 0;
// 		}
// 	}
// }

// for (var i = 0; i < 9; i++){
// 	if (arr[i] !== 0) {
// 		console.log(arr[i])
// 	}
// }

var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = [];

var sum = 0;
for (var i = 0; i < 9; i++) {
	arr.push(Number(input[i]));
	sum += arr[i];
}

var leftover = sum - 100;

var n1 = 0;
var n2 = 0;
var numberOf1 = 0;
var numberOf2 = 0;
for (var i = 0; i < 8; i++) {
	for (var j = i + 1; j < 9; j++) {
		if(arr[i] + arr[j] === leftover) {
			arr[i] = arr[j] = 0;
		}
	}
}

for (var i = 0; i < 9; i++){
	if (arr[i] !== 0) {
		console.log(arr[i]);
	}
}