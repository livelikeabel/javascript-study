var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


function reverseArr(input) {
	var myLength = Number(input[0]); // 4. 배열의 length
	var arr = input[1].split(" ");
	var ret = "";

	for(var j = myLength - 1; j >=0; j--) {
		ret += Number(arr[j]);	
	}

	console.log(ret);
}

reverseArr(input);