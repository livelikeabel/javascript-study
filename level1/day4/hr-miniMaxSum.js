var input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n 줄바꿈 문자

var splitInput = function(input) {
	return input[0].split(" ");
}

var changeTypeToInt = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] = Number(arr[i]);
	}
	return arr;
} 

function add(arr) {
	var sortedArr = arr.sort();
	var bigNumber;
	var smallNumber;
	var ret;
	for(var i = 1; i < sortedArr.length; i++) {
		bigNumber += sortedArr[i];
	}
	for(var i = 0; i < sortedArr.length - 1; i++){
		smallNumber += sortedArr[i];
	}
	ret = [smallNumber, bigNumber];
	return ret;
}
var arra = [1, 2, 4, 6, 3];
console.log(add(arra));

// var splitedInput = splitInput(input);
// var numbers = changeTypeToInt(splitedInput);
// console.log(numbers);

// var i = add(numbers);
// console.log(i);


// function add(arr) {	
// 	var ret;
// 	for(var i = 0; i < arr.length; i++) {
// 		for(var j = 0; j < arr.length; j++) {
// 			if(arr[i] = arr[j]) {
// 				continue;
// 			} else {
// 				ret += arr[j];
// 			}
// 		}
// 		arr[i] = ret;
// 	}
// 	return arr;
// }

//[ 1, 2, 3, 4, 5 ]
//[ 10 14 ]