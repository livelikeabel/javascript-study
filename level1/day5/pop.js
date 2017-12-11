// var a = [1, 2, 3];

// Array.protoype.myPop = function() {
// 	var x = this[this.length - 1];

// 	return x;
// }

// // console.log(a[a.length - 1]);
// console.log(a.myPop());4



var myPop = function(arr) {
	var ret = arr[arr.length - 1];
	arr.length = arr.length - 1;
	return ret;
};

var arr = [2, 4, 6];
var last = myPop(arr);
console.log("myPop test1", last === 6);
console.log("myPop test2", arr.length === 2);

