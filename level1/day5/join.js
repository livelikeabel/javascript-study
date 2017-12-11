function myJoin(arr, x) {
	//var ret = '1-2-3-4-5';
	var ret = "";
	for(var i = 0; i < arr.length - 1; i++) {
		ret += arr[i] + x;
	}
	ret += arr[arr.length-1];
	return ret;
}


//test
var arr = [1, 2, 3, 4, 5];
console.log( myJoin(arr, "-") );
console.log( myJoin(arr, "+") );