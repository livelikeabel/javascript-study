var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = input[0].split(" ");
var res = Number(n[0]) + Number(n[1]);
console.log(res);