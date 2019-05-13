var arraySum = function (arrL, arr){
	var ret = 0;
	for(var i = 0; i < arrL; i++) {
		ret += arr[i];
	}
	return ret;
}


//test
var arr = [1, 2, 3, 4, 10 ,11];

console.log(arraySum(6, arr));