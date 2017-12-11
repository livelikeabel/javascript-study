// 앞에서 부터 더하는 것
var myUnshift = function(arr, n) {
	for(var i = 0; i < arr.length; i++) {
		arr[arr.length - i] = arr[arr.length - i - 1];
	}
	arr[0] = n;
	return arr.length;
}

var arr = [1, 2, 3];
var first = myUnshift(arr, 0);

console.log("myUnshift test 1", first === 4);
console.log("myUnshift test 2", arr.length === 4);
console.log(arr);