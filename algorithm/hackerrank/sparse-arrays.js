var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var lengthOfFinded = Number(input[0]); // 4
var lengthOfFinding = Number(input[lengthOfFinded + 1]); // 3 
var ret = 0;

for(var i = 0; i < lengthOfFinding; i++) {
	for(var j = 1; j <= lengthOfFinded; j++) {
		if( input[lengthOfFinded + 2 + i] === input[j] ) {
			ret += 1;
		}
	}
	console.log(ret);
	ret = 0;
}
