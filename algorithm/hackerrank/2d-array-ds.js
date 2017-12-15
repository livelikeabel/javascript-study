var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input);

var arr = [makeHourglass(0,0)];

function makeHourglass(i, j) {
	splitedInput1 = input[i].split(" ").map(Number);
	splitedInput2 = input[i + 1].split(" ").map(Number);
	splitedInput3 = input[i + 2].split(" ").map(Number);

	var ret = 
	splitedInput1[j] + 
	splitedInput1[j + 1] +
	splitedInput1[j + 2] +

	splitedInput2[j + 1] +

	splitedInput3[j] +
	splitedInput3[j + 1] +
	splitedInput3[j + 2];

	return ret;
}

function plusArray() {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			// arr.push(makeHourglass(i,j));		
			if(arr[0] < makeHourglass(i,j)){
				arr[0] = makeHourglass(i,j);
			}
		}
	}
	return arr[0];
};

console.log(plusArray());
