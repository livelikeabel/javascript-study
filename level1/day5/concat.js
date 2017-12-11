var myConcat = function(arr1, arr2) {
	
	for(var i = 0; i < arr2.length; i++) {
	arr1[arr1.length] = arr2[i];
	}

	return arr1;
}

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9, 10]; 
var strings1 = ['s', 't', 'r', 'i', 'n', 'g', 's' ];
var strings2 = ['a', 'r', 'e'];


console.log(myConcat(numbers1, numbers2));
console.log(myConcat(strings1, strings2));
console.log(myConcat(numbers1, strings1));