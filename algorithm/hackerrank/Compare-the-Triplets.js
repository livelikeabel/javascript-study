var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//input === [ '5 6 7', '3 6 10' ]

function splitInput(input, indexNum) {
	var numbers = input[indexNum].split(" ");//aNumbers = [ '5', '6', '7' ]
	return numbers;
}

// function numberType(array) {
	
// 	return array;
// }

function comparing(aNumbers, bNumbers) {
	var aScore = 0;
	var bScore = 0;

	for(var i = 0; i < aNumbers.length; i++) {
		if(Number(aNumbers[i]) > Number(bNumbers[i])) {
			aScore += 1;
		}
		if(Number(aNumbers[i]) < Number(bNumbers[i])) {
			bScore += 1;
		}
	}
	console.log(aScore, bScore);
}


var aNumbers = splitInput(input, 0);
var bNumbers = splitInput(input, 1);
console.log(aNumbers);
console.log(bNumbers);
comparing(aNumbers, bNumbers);