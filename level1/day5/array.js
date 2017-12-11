var arr1 = [1, 2, 3];

var append = function(array, data) {
	array[ array.length ] = data;
	return array.length;
}

console.log(append(arr1,34));

