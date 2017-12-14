var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//input === [ '5 6 7', '3 6 10' ]

function splitInput(input, indexNum) {
	var numbers = input[indexNum].split(" ");//aNumbers = [ '5', '6', '7' ]
	return numbers;
}

function numberType(array) {
	var ret = [];
	ret.length === array.length;
	for(var i = 0; i < array.length; i++) {
		ret[i] = Number(array[i]);
	}
	return ret;
}

function comparing(aNumbers, bNumbers) {
	var aScore = 0;
	var bScore = 0;

	for(var i = 0; i < aNumbers.length; i++) {
		if(aNumbers[i] > bNumbers[i]) {
			aScore += 1;
		}
		if(aNumbers[i] < bNumbers[i]) {
			bScore += 1;
		}
	}
	console.log(aScore, bScore);
}

var aNumbers = numberType(splitInput(input, 0));
var bNumbers = numberType(splitInput(input, 1));
comparing(aNumbers, bNumbers);
