// 앞에서 부터 빼오는 것
var myShift = function(arr) {
	var ret = arr[0];
	// arr.splice(0,1);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length--;
	return ret;
}

var arr = [1, 2, 3];
var first = myShift(arr);

console.log("myShift test 1", first === 1);
console.log("myShift test 2", arr.length === 2);
console.log(arr);
// [1, 2, 3];
// [2, 3];