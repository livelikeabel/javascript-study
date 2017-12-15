var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split(" ").map(Number) // [ 1, 2, 3, 4, 5 ]
var rotationNumber = input[0].split(" ").map(Number)[1];

for(var i = 0; i < rotationNumber; i++) {
	var shiftedNumber = arr.shift();
	arr.push(shiftedNumber);
}

console.log(arr.join(" "));